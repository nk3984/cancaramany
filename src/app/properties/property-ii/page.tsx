import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyPage } from "@/components/PropertyPage";
import { getPropertyBySlug } from "@/data/properties";

export const metadata: Metadata = {
  title: "Property II | Can Caramany",
  description:
    "Property II at Can Caramany — 57,092 m² · 14.11 acres of private landholding in eastern Mallorca.",
};

export default function PropertyIIPage() {
  const property = getPropertyBySlug("property-ii");
  if (!property) notFound();
  return <PropertyPage property={property} />;
}
