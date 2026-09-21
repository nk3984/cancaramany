import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalPageShell } from "@/components/LegalPageShell";
import { siteDisclaimerParagraphs } from "@/data/content-facts";
import { siteConfig } from "@/data/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: `${dict.legal.title} | ${siteConfig.name}`,
    description: `Legal disclaimer for information published on the ${siteConfig.name} website.`,
  };
}

export default async function LegalDisclaimerPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <LegalPageShell title={dict.legal.title} updated={dict.legal.updated}>
      <p className="rounded-none border border-[var(--color-warm-stone)] bg-[var(--color-white)] px-5 py-4 text-sm">
        Final wording subject to counsel approval before public go-live.
      </p>

      {siteDisclaimerParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h2>{dict.imprint.operator}</h2>
      <p>
        This website is operated by {siteConfig.company.legalName} (
        {siteConfig.company.projectName}). See the{" "}
        <Link href={`/${lang}/imprint`} className="underline underline-offset-4">
          {dict.imprint.title}
        </Link>{" "}
        for company details and the{" "}
        <Link href={`/${lang}/privacy`} className="underline underline-offset-4">
          {dict.privacy.title}
        </Link>{" "}
        notice for data protection information.
      </p>
    </LegalPageShell>
  );
}
