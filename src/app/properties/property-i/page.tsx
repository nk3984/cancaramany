import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyPage } from "@/components/PropertyPage";
import { getPropertyBySlug } from "@/data/properties";

export const metadata: Metadata = {
  title: "Property I | Can Caramany",
  description:
    "Property I at Can Caramany — 50,033 m² · 12.36 acres of private countryside in eastern Mallorca.",
};

export default function PropertyIPage() {
  const property = getPropertyBySlug("property-i");
  if (!property) notFound();
  return <PropertyPage property={property} />;
}
