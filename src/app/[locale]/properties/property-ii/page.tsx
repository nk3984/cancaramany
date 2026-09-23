import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyPage } from "@/components/PropertyPage";
import { getPropertyBySlug } from "@/data/properties";
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
  const copy = dictionary.properties["property-ii"];
  return {
    title: `${copy.label} | ${siteConfig.name}`,
    description: copy.overview,
  };
}

export default async function PropertyIIPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const property = getPropertyBySlug("property-ii");
  if (!property) notFound();
  return <PropertyPage property={property} />;
}
