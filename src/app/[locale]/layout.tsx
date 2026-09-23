import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/i18n/locale-context";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
    alternates: {
      languages: {
        en: "/en",
        de: "/de",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <div lang={locale} className="flex min-h-full flex-1 flex-col">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
