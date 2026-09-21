"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localePath } from "@/i18n/paths";

type EnquiryFormProps = {
  onSuccess?: () => void;
  compact?: boolean;
  defaultInterest?: string;
};

export function EnquiryForm({
  onSuccess,
  compact,
  defaultInterest,
}: EnquiryFormProps) {
  const { locale, dict } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      country: String(data.get("country") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      locale,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setError(
          result.error ||
            `Could not send enquiry. Please email ${siteConfig.company.email} directly.`,
        );
        setPending(false);
        return;
      }

      setSubmitted(true);
      window.setTimeout(() => {
        onSuccess?.();
      }, 1200);
    } catch {
      setError(
        `Could not send enquiry. Please email ${siteConfig.company.email} directly.`,
      );
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <p className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)]">
          {dict.form.successTitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-deep-olive)]">
          {dict.form.successBody}
        </p>
      </div>
    );
  }

  const interestDefault =
    defaultInterest &&
    dict.interestOptions.some((option) => option.value === defaultInterest)
      ? defaultInterest
      : "";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!compact ? (
        <p className="text-sm leading-relaxed text-[var(--color-deep-olive)]">
          {dict.form.intro}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.form.firstName} name="firstName" required />
        <Field label={dict.form.lastName} name="lastName" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.form.email} name="email" type="email" required />
        <Field label={dict.form.phone} name="phone" type="tel" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.form.company} name="company" />
        <Field label={dict.form.country} name="country" required />
      </div>

      <div>
        <label
          htmlFor="interest"
          className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]"
        >
          {dict.form.interest}
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue={interestDefault}
          key={interestDefault || "empty"}
          className="w-full border border-[var(--color-warm-stone)] bg-transparent px-4 py-3 text-sm text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-charcoal)]"
        >
          <option value="" disabled>
            {dict.form.interestPlaceholder}
          </option>
          {dict.interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]"
        >
          {dict.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-y border border-[var(--color-warm-stone)] bg-transparent px-4 py-3 text-sm text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-charcoal)]"
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-[var(--color-deep-olive)]">
        <input
          type="checkbox"
          name="consent"
          required
          defaultChecked={false}
          className="mt-0.5 accent-[var(--color-charcoal)]"
        />
        <span>
          {dict.common.privacyConsentBefore}{" "}
          <Link
            href={localePath(locale, "/privacy")}
            className="underline underline-offset-2"
          >
            {dict.common.privacyConsentLink}
          </Link>{" "}
          {dict.common.privacyConsentAfter}
        </span>
      </label>

      {error ? (
        <p
          className="text-sm leading-relaxed text-[var(--color-terracotta)]"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[var(--color-charcoal)] px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-deep-olive)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? dict.form.sending : dict.form.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[var(--color-warm-stone)] bg-transparent px-4 py-3 text-sm text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-charcoal)]"
      />
    </div>
  );
}
