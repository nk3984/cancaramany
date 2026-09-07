import { contentFacts } from "@/data/content-facts";

export type PropertyId =
  | "property-i"
  | "property-ii"
  | "property-iii"
  | "property-iv";

export interface Property {
  id: PropertyId;
  roman: "I" | "II" | "III" | "IV";
  label: string;
  slug: string;
  squareMetres: number;
  acres: number;
  areaDisplay: string;
  headline: string;
  descriptors: string[];
  overview: string;
  landscape: string;
  architecture: string;
  infrastructure: string;
  cta: string;
  href: string;
  imageLabel: string;
  imageAlt: string;
  imagePath: string;
  isHistoricFinca?: boolean;
  specialLabel?: string;
  areaNote?: string;
}

export const ESTATE_TOTAL = {
  squareMetresLabel: contentFacts.estate.squareMetresLabel,
  acresLabel: contentFacts.estate.acresLabel,
  propertiesCount: contentFacts.propertiesCount,
  display: contentFacts.estate.display,
  marketingLine: contentFacts.estate.marketingLine,
  areaCaveat: contentFacts.estate.areaCaveat,
  provisional: contentFacts.estate.provisional,
} as const;

const arch = contentFacts.copy;
const infra = contentFacts.infrastructure;
const p = contentFacts.properties;

export const properties: Property[] = [
  {
    id: "property-i",
    roman: "I",
    label: "Property I",
    slug: "property-i",
    squareMetres: p.I.squareMetres,
    acres: p.I.acres,
    areaDisplay: "50,033 m² · 12.36 acres",
    headline: "Open land. Long views. Complete privacy.",
    descriptors: [
      "Open countryside",
      "Expansive private setting",
      "Mature Mediterranean landscape",
      "Historic architectural project and former planning approval",
    ],
    overview:
      "Property I forms a substantial private landholding within Can Caramany, characterised by open countryside, mature Mediterranean vegetation and a strong sense of separation from the wider landscape.",
    landscape:
      "Gently rolling terrain, dry-stone walls and agricultural openness shape a landscape of light, silence and spatial generosity.",
    architecture: arch.architectureIIiIv,
    infrastructure: `Property I is connected through the estate’s established access network. ${infra.electricity} ${infra.water}`,
    cta: "Explore Property I",
    href: "/properties/property-i",
    imageLabel: "IMAGE REQUIRED — PROPERTY I LANDSCAPE",
    imageAlt: "Open countryside landscape of Property I at Can Caramany, Mallorca",
    imagePath: "/images/can-caramany/property-01/property-01-landscape.jpg",
    areaNote: "Area figures provisional pending current Registro / Catastro confirmation.",
  },
  {
    id: "property-ii",
    roman: "II",
    label: "Property II",
    slug: "property-ii",
    squareMetres: p.II.squareMetres,
    acres: p.II.acres,
    areaDisplay: "57,092 m² · 14.11 acres",
    headline: "A generous setting within the heart of the estate.",
    descriptors: [
      "57,092 m² · 14.11 acres",
      "Substantial landholding",
      "Mature vegetation",
      "Historic architectural project and former planning approval",
    ],
    overview:
      "Property II combines substantial scale with a central position within Can Caramany. Mature vegetation, open land and established estate access create a setting defined by quiet, space and long-term ownership potential.",
    landscape:
      "Mature holm oaks, agricultural openness and internal estate routes contribute to a setting defined by silence, light and spatial generosity.",
    architecture: arch.architectureIIiIv,
    infrastructure: `Access is provided through the estate’s established routes. ${infra.electricity} ${infra.water}`,
    cta: "Explore Property II",
    href: "/properties/property-ii",
    imageLabel: "IMAGE REQUIRED — PROPERTY II LANDSCAPE",
    imageAlt: "Mediterranean countryside of Property II at Can Caramany",
    imagePath: "/images/can-caramany/property-02/property-02-landscape.jpg",
    areaNote: "Area figures provisional pending current Registro / Catastro confirmation.",
  },
  {
    id: "property-iii",
    roman: "III",
    label: "Property III",
    slug: "property-iii",
    squareMetres: p.III.squareMetres,
    acres: p.III.acres,
    areaDisplay: "64,455 m² · 15.93 acres",
    headline: "Where Can Caramany’s history becomes tangible.",
    descriptors: [
      "Historic Mallorcan finca",
      "64,455 m² · 15.93 acres",
      "Historic rehabilitation study",
      "Heart of Can Caramany",
    ],
    overview:
      "At the heart of Property III stands the historic Mallorcan finca — one of the defining elements of Can Caramany. Its stone walls, timber structures and agricultural architecture connect the estate to its past and provide a tangible starting point for a future architectural concept, always subject to current planning and technical review.",
    landscape:
      "An elongated, irregular landholding with a north–south orientation and a gentle slope of approximately 7–11%. Dry-stone walls, holm oaks, a dry torrent and buildings set in the flatter portion of the land shape a distinctly Mallorcan setting.",
    architecture: arch.architectureIii,
    infrastructure: `As the historic heart of the estate, Property III is connected by established internal access. ${infra.water} ${infra.electricity} ${infra.wastewaterHistoric}`,
    cta: "Discover the Historic Finca",
    href: "/properties/property-iii",
    imageLabel: "IMAGE REQUIRED — PROPERTY III FINCA HERO",
    imageAlt: "Historic Mallorcan finca exterior at Property III, Can Caramany",
    imagePath:
      "/images/can-caramany/property-03/property-03-historic-finca-exterior.jpg",
    isHistoricFinca: true,
    specialLabel: "Property III — The Historic Estate",
    areaNote: p.III.areaNote,
  },
  {
    id: "property-iv",
    roman: "IV",
    label: "Property IV",
    slug: "property-iv",
    squareMetres: p.IV.squareMetres,
    acres: p.IV.acres,
    areaDisplay: "61,834 m² · 15.28 acres",
    headline: "Quiet scale at the edge of the estate.",
    descriptors: [
      "61,834 m² · 15.28 acres",
      "Rolling countryside",
      "Private setting",
      "Historic architectural project and former planning approval",
    ],
    overview:
      "Property IV offers a generous private landholding framed by open terrain, mature trees and the agricultural character of Can Caramany. Its position within the estate creates a strong sense of independence and privacy.",
    landscape:
      "Open fields, mature trees and the broader agricultural character of Can Caramany define a setting of privacy and Mediterranean authenticity.",
    architecture: arch.architectureIIiIv,
    infrastructure: `Property IV is linked through the estate’s established access routes. ${infra.electricity} ${infra.water}`,
    cta: "Explore Property IV",
    href: "/properties/property-iv",
    imageLabel: "IMAGE REQUIRED — PROPERTY IV LANDSCAPE",
    imageAlt: "Rolling countryside of Property IV at Can Caramany, Mallorca",
    imagePath: "/images/can-caramany/property-04/property-04-landscape.jpg",
    areaNote: "Area figures provisional pending current Registro / Catastro confirmation.",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function formatArea(squareMetres: number, acres: number): string {
  return `${squareMetres.toLocaleString("en-US")} m² · ${acres.toFixed(2)} acres`;
}
