import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyIIIPage } from "@/components/PropertyIIIPage";
import { siteConfig } from "@/data/site";
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
  const copy = dictionary.properties["property-iii"];
  return {
    title: `${copy.specialLabel ?? copy.label} | ${siteConfig.name}`,
    description: dictionary.propertyIii.overview,
  };
}

export default async function PropertyIIIRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  return <PropertyIIIPage />;
}
