import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

const INTEREST_OPTIONS = new Set<string>(siteConfig.interestOptions);

type EnquiryBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  country?: string;
  interest?: string;
  message?: string;
  consent?: boolean | string;
};

function clean(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 60);
  const company = clean(body.company, 120);
  const country = clean(body.country, 80);
  const interest = clean(body.interest, 80);
  const message = clean(body.message, 4000);
  const consent =
    body.consent === true ||
    body.consent === "true" ||
    body.consent === "on" ||
    body.consent === "1";

  if (!firstName || !lastName || !email || !country || !interest || !consent) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!INTEREST_OPTIONS.has(interest)) {
    return NextResponse.json({ error: "Invalid interest selection." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Enquiry service is not configured yet." },
      { status: 503 },
    );
  }

  const to =
    process.env.ENQUIRY_TO_EMAIL?.trim() || siteConfig.company.email;
  const from =
    process.env.ENQUIRY_FROM_EMAIL?.trim() ||
    "Can Caramany Enquiries <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const fullName = `${firstName} ${lastName}`;
  const submittedAt = new Date().toISOString();

  const text = [
    "New private enquiry — Can Caramany",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Company: ${company || "—"}`,
    `Country: ${country}`,
    `Interest: ${interest}`,
    "",
    "Message:",
    message || "—",
    "",
    `Consent: yes`,
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: Georgia, serif; color: #20211f; line-height: 1.6;">
      <h2 style="font-weight: normal; margin: 0 0 16px;">New private enquiry</h2>
      <p style="margin: 0 0 20px; color: #5c5f56;">Can Caramany website</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 0; color: #5c5f56;">Name</td><td style="padding: 6px 0;">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding: 6px 0; color: #5c5f56;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #5c5f56;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #5c5f56;">Company</td><td style="padding: 6px 0;">${escapeHtml(company || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #5c5f56;">Country</td><td style="padding: 6px 0;">${escapeHtml(country)}</td></tr>
        <tr><td style="padding: 6px 0; color: #5c5f56;">Interest</td><td style="padding: 6px 0;">${escapeHtml(interest)}</td></tr>
      </table>
      <p style="margin: 24px 0 8px; color: #5c5f56;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message || "—")}</p>
      <p style="margin: 28px 0 0; font-size: 12px; color: #8a8d84;">Consent given · ${escapeHtml(submittedAt)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Can Caramany enquiry — ${fullName} (${interest})`,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send enquiry. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry send failed:", error);
    return NextResponse.json(
      { error: "Could not send enquiry. Please try again or email us directly." },
      { status: 502 },
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
