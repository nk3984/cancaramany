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
    title: `${dictionary.legal.disclaimer.title} | ${siteConfig.name}`,
    description: dictionary.legal.disclaimer.metaDescription,
  };
}

export default async function LegalDisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const copy = dictionary.legal.disclaimer;

  return (
    <LegalPageShell title={copy.title} updated={dictionary.legal.updated}>
      <p className="rounded-none border border-[var(--color-warm-stone)] bg-[var(--color-white)] px-5 py-4 text-sm">
        {copy.draftNote}
      </p>

      {copy.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h2>{copy.operatorHeading}</h2>
      <p>
        {copy.operatorBody}{" "}
        <Link
          href={localePath(locale, "/imprint")}
          className="underline underline-offset-4"
        >
          {dictionary.legal.imprint.title}
        </Link>
        {" · "}
        <Link
          href={localePath(locale, "/privacy")}
          className="underline underline-offset-4"
        >
          {dictionary.legal.privacy.title}
        </Link>
      </p>
    </LegalPageShell>
  );
}
