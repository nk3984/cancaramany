import { contentFacts } from "@/data/content-facts";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { PropertyId } from "@/i18n/dictionaries/types";

export type { PropertyId };

export interface PropertyBase {
  id: PropertyId;
  roman: "I" | "II" | "III" | "IV";
  slug: string;
  squareMetres: number;
  acres: number;
  areaDisplay: string;
  href: string;
  imagePath: string | null;
  isHistoricFinca?: boolean;
}

export type Property = PropertyBase & Dictionary["propertyCopy"][PropertyId];

export const ESTATE_TOTAL = {
  squareMetresLabel: contentFacts.estate.squareMetresLabel,
  acresLabel: contentFacts.estate.acresLabel,
  propertiesCount: contentFacts.propertiesCount,
  display: contentFacts.estate.display,
  marketingLine: contentFacts.estate.marketingLine,
  areaCaveat: contentFacts.estate.areaCaveat,
  provisional: contentFacts.estate.provisional,
} as const;

const p = contentFacts.properties;

export const propertyBases: PropertyBase[] = [
  {
    id: "property-i",
    roman: "I",
    slug: "property-i",
    squareMetres: p.I.squareMetres,
    acres: p.I.acres,
    areaDisplay: "50,033 m² · 12.36 acres",
    href: "/properties/property-i",
    imagePath: "/images/can-caramany/property-01/vision/pool.png",
  },
  {
    id: "property-ii",
    roman: "II",
    slug: "property-ii",
    squareMetres: p.II.squareMetres,
    acres: p.II.acres,
    areaDisplay: "57,092 m² · 14.11 acres",
    href: "/properties/property-ii",
    imagePath: "/images/can-caramany/property-02/vision/pool.png",
  },
  {
    id: "property-iii",
    roman: "III",
    slug: "property-iii",
    squareMetres: p.III.squareMetres,
    acres: p.III.acres,
    areaDisplay: "64,455 m² · 15.93 acres",
    href: "/properties/property-iii",
    imagePath: "/images/can-caramany/property-03/vision/pool.png",
    isHistoricFinca: true,
  },
  {
    id: "property-iv",
    roman: "IV",
    slug: "property-iv",
    squareMetres: p.IV.squareMetres,
    acres: p.IV.acres,
    areaDisplay: "61,834 m² · 15.28 acres",
    href: "/properties/property-iv",
    imagePath: "/images/can-caramany/property-04/vision/pool.png",
  },
];

export function localizeProperties(dict: Dictionary): Property[] {
  return propertyBases.map((base) => ({
    ...base,
    ...dict.propertyCopy[base.id],
  }));
}

export function getPropertyBySlug(
  slug: string,
  dict: Dictionary,
): Property | undefined {
  return localizeProperties(dict).find((property) => property.slug === slug);
}

export function getPropertyBaseBySlug(slug: string): PropertyBase | undefined {
  return propertyBases.find((property) => property.slug === slug);
}

export function formatArea(squareMetres: number, acres: number): string {
  return `${squareMetres.toLocaleString("en-US")} m² · ${acres.toFixed(2)} acres`;
}

/** @deprecated Prefer localizeProperties(dict) */
export const properties = propertyBases;
