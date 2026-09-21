import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageShell } from "@/components/LegalPageShell";
import { formatCompanyAddress, siteConfig } from "@/data/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: `${dict.imprint.title} | ${siteConfig.name}`,
    description: dict.imprint.intro,
  };
}

export default async function ImprintPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { company } = siteConfig;

  return (
    <LegalPageShell title={dict.imprint.title} updated={dict.imprint.updated}>
      <p>{dict.imprint.intro}</p>

      <h2>{dict.imprint.operator}</h2>
      <p>
        <strong className="font-medium text-[var(--color-charcoal)]">
          {company.legalName}
        </strong>
        <br />
        Sociedad Limitada Unipersonal
        <br />
        NIF/CIF: {company.nif}
      </p>

      <h2>{dict.imprint.seat}</h2>
      <p>{formatCompanyAddress()}</p>

      <h2>{dict.imprint.shareholder}</h2>
      <p>{company.soleShareholder}</p>

      <h2>{dict.imprint.administrator}</h2>
      <p>{company.administrator}</p>

      <h2>{dict.imprint.contact}</h2>
      <p>
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

      <h2>{dict.imprint.project}</h2>
      <p>
        {siteConfig.name} ({dict.meta.descriptor}) — {company.legalName} (
        {company.projectName}).
      </p>
    </LegalPageShell>
  );
}
