import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalPageShell } from "@/components/LegalPageShell";
import { siteConfig } from "@/data/site";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/paths";

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
    title: `${dictionary.legal.privacy.title} | ${siteConfig.name}`,
    description: dictionary.legal.privacy.metaDescription,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const copy = dictionary.legal.privacy;

  return (
    <LegalPageShell title={copy.title} updated={dictionary.legal.updated}>
      {copy.sections.map((section) => (
        <div key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ))}

      <p>
        <Link
          href={localePath(locale, "/legal")}
          className="underline underline-offset-4"
        >
          {dictionary.legal.disclaimer.title}
        </Link>
        {" · "}
        <Link
          href={localePath(locale, "/imprint")}
          className="underline underline-offset-4"
        >
          {dictionary.legal.imprint.title}
        </Link>
      </p>
    </LegalPageShell>
  );
}
