import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyPage } from "@/components/PropertyPage";
import { getPropertyBySlug } from "@/data/properties";

export const metadata: Metadata = {
  title: "Property IV | Can Caramany",
  description:
    "Property IV at Can Caramany — 61,834 m² · 15.28 acres of private countryside in eastern Mallorca.",
};

export default function PropertyIVPage() {
  const property = getPropertyBySlug("property-iv");
  if (!property) notFound();
  return <PropertyPage property={property} />;
}
