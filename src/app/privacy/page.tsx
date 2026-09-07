import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/LegalPageShell";
import { formatCompanyAddress, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy | ${siteConfig.name}`,
  description: `Privacy information for the ${siteConfig.name} website operated by ${siteConfig.company.legalName}.`,
};

export default function PrivacyPage() {
  const { company } = siteConfig;

  return (
    <LegalPageShell title="Privacy" updated="September 2026">
      <p className="rounded-none border border-[var(--color-warm-stone)] bg-[var(--color-white)] px-5 py-4 text-sm">
        Draft aligned to the current website concept. Final wording should be
        reviewed by counsel before public go-live. The enquiry delivery provider
        will be named here once selected for production.
      </p>

      <h2>1. Controller</h2>
      <p>
        The controller responsible for personal data processed via this website
        is:
      </p>
      <p>
        <strong className="font-medium text-[var(--color-charcoal)]">
          {company.legalName}
        </strong>{" "}
        ({company.projectName})
        <br />
        NIF/CIF: {company.nif}
        <br />
        {formatCompanyAddress()}
        <br />
        Email:{" "}
        <a
          href={`mailto:${company.email}`}
          className="underline underline-offset-4"
        >
          {company.email}
        </a>
        <br />
        Phone:{" "}
        <a
          href={`tel:${company.phone.replace(/\s/g, "")}`}
          className="underline underline-offset-4"
        >
          {company.phone}
        </a>
      </p>

      <h2>2. Purposes of processing</h2>
      <p>We process personal data for the following purposes:</p>
      <ul>
        <li>
          Handling contact enquiries and requests for a private conversation
        </li>
        <li>Handling data-room / documentation access requests</li>
        <li>Operating, securing and improving the website</li>
        <li>
          Displaying the interactive location map (Mapbox), where a map token is
          configured
        </li>
        <li>Complying with legal obligations</li>
      </ul>

      <h2>3. Categories of data</h2>
      <p>Depending on your use of the site, this may include:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Telephone number (if provided)</li>
        <li>Company, country and interest category</li>
        <li>Message content and preferred property / enquiry type</li>
        <li>
          Technical data such as IP address, browser/device information and logs
          related to hosting and map usage
        </li>
      </ul>

      <h2>4. Legal bases</h2>
      <p>
        Processing is based on your consent (where requested via the enquiry
        form), our legitimate interest in operating a professional project
        website and responding to business enquiries, and/or compliance with
        legal obligations, as applicable under the GDPR and Spanish data
        protection law (LOPDGDD).
      </p>

      <h2>5. Recipients / processors</h2>
      <p>Data may be processed by service providers acting on our behalf:</p>
      <ul>
        <li>
          <strong className="font-medium text-[var(--color-charcoal)]">
            Hosting:
          </strong>{" "}
          intended production hosting via Vercel (or equivalent)
        </li>
        <li>
          <strong className="font-medium text-[var(--color-charcoal)]">
            Maps:
          </strong>{" "}
          Mapbox (map display; technical transmission of IP / device information
          depending on implementation)
        </li>
        <li>
          <strong className="font-medium text-[var(--color-charcoal)]">
            Enquiry delivery:
          </strong>{" "}
          to be confirmed (e.g. Resend or Formspree) before go-live and named
          here once selected
        </li>
      </ul>

      <h2>6. Retention</h2>
      <p>
        Enquiry and data-room request data is retained only as long as needed to
        handle the request and any related legitimate interest or legal
        requirement, then deleted or anonymised.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may have the right to access, rectify, erase, restrict, object to,
        or port your personal data, and to withdraw consent where processing is
        based on consent. You may also lodge a complaint with the Agencia
        Española de Protección de Datos (AEPD).
      </p>

      <h2>8. Cookies and similar technologies</h2>
      <p>
        Essential technical storage may be required for site operation. If
        analytics or non-essential cookies are introduced later, this policy and
        any consent mechanism will be updated accordingly.
      </p>

      <h2>9. Related information</h2>
      <p>
        See also the{" "}
        <Link href="/legal" className="underline underline-offset-4">
          Legal Disclaimer
        </Link>{" "}
        and{" "}
        <Link href="/imprint" className="underline underline-offset-4">
          Imprint
        </Link>
        .
      </p>
    </LegalPageShell>
  );
}
