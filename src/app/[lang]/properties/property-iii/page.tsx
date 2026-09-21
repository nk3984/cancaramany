import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyPage } from "@/components/PropertyPage";
import { getPropertyBySlug } from "@/data/properties";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const property = getPropertyBySlug("property-iii", dict);
  if (!property) return {};
  return {
    title: `${property.label} — ${dict.propertyPage.fincaEyebrow} | Can Caramany`,
    description: property.overview.slice(0, 160),
  };
}

export default async function PropertyIIIPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const property = getPropertyBySlug("property-iii", dict);
  if (!property) notFound();
  return <PropertyPage property={property} />;
}
