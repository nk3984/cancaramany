import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageShell } from "@/components/LegalPageShell";
import { formatCompanyAddress, siteConfig } from "@/data/site";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return {
    title: `${dictionary.legal.imprint.title} | ${siteConfig.name}`,
    description: dictionary.legal.imprint.metaDescription,
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const copy = dictionary.legal.imprint;
  const { company } = siteConfig;

  return (
    <LegalPageShell title={copy.title} updated={dictionary.legal.updated}>
      <p>{copy.intro}</p>

      <h2>{copy.operator}</h2>
      <p>
        <strong className="font-medium text-[var(--color-charcoal)]">
          {company.legalName}
        </strong>
        <br />
        Sociedad Limitada Unipersonal
        <br />
        NIF/CIF: {company.nif}
      </p>

      <h2>{copy.seat}</h2>
      <p>{formatCompanyAddress()}</p>

      <h2>{copy.shareholder}</h2>
      <p>{company.soleShareholder}</p>

      <h2>{copy.administrator}</h2>
      <p>{company.administrator}</p>

      <h2>{copy.contact}</h2>
      {company.email || company.phone ? (
        <p>
          {company.email ? (
            <>
              Email:{" "}
              <a
                href={`mailto:${company.email}`}
                className="underline underline-offset-4"
              >
                {company.email}
              </a>
              <br />
            </>
          ) : null}
          {company.phone ? (
            <>
              Phone:{" "}
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="underline underline-offset-4"
              >
                {company.phone}
              </a>
            </>
          ) : null}
        </p>
      ) : (
        <p className="text-sm text-[var(--color-deep-olive)]/75">
          {copy.contactPending}
        </p>
      )}

      <h2>{copy.project}</h2>
      <p>
        {siteConfig.name} ({siteConfig.descriptor}) is presented by{" "}
        {company.legalName} ({company.projectName}).
      </p>
    </LegalPageShell>
  );
}
