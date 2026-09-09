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
  projectLine: string;
  descriptors: string[];
  overview: string;
  landscape: string;
  architecture: string;
  infrastructure: string;
  cta: string;
  href: string;
  imageLabel: string;
  imageAlt: string;
  imagePath: string | null;
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
    headline: "Open land. Long views. A house already conceived.",
    projectLine:
      "Formerly permitted villa with pool and garage, set in more than five hectares of private countryside.",
    descriptors: [
      "50,033 m² of open countryside",
      "Complete privacy and long views",
      "Villa, pool and garage in the original project",
      "Formerly granted building permit",
    ],
    overview:
      "Property I is the most open of the four landholdings — a generous private landscape of dry-stone walls, Mediterranean planting and uninterrupted sky. A complete residential project was prepared for this land: a villa with pool and garage, once permitted, later deferred with the rest of the estate. What remains is scale, silence, and a documented architectural starting point.",
    landscape:
      "Gently rolling terrain, dry-stone walls and agricultural openness shape a landscape of light, silence and spatial generosity.",
    architecture: arch.architectureIIiIv,
    infrastructure: `Property I is connected through the estate’s established access network. ${infra.electricity} ${infra.water}`,
    cta: "Explore Property I",
    href: "/properties/property-i",
    imageLabel: "Architectural visualization",
    imageAlt: "Architectural visualization of the original villa project for Property I at Can Caramany",
    imagePath: "/images/can-caramany/property-01/vision/pool.png",
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
    headline: "At the centre of the estate, among the oaks.",
    projectLine:
      "Formerly permitted family house, with living rooms opening to terrace and pool.",
    descriptors: [
      "57,092 m² · 14.11 acres",
      "Heart of the estate",
      "Mature holm oaks and internal paths",
      "Formerly granted building permit",
    ],
    overview:
      "Property II sits in the quiet centre of Can Caramany, among mature holm oaks and the estate’s own paths. A substantial family house was designed here — living rooms, terrace and pool turned toward the land. The building permit was granted, then not renewed after the project was postponed. The land, the trees and the original drawings remain.",
    landscape:
      "Mature holm oaks, agricultural openness and internal estate routes contribute to a setting defined by silence, light and spatial generosity.",
    architecture: arch.architectureIIiIv,
    infrastructure: `Access is provided through the estate’s established routes. ${infra.electricity} ${infra.water}`,
    cta: "Explore Property II",
    href: "/properties/property-ii",
    imageLabel: "Architectural visualization",
    imageAlt: "Architectural visualization of the original villa project for Property II at Can Caramany",
    imagePath: "/images/can-caramany/property-02/vision/pool.png",
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
    headline: "The historic heart of Can Caramany.",
    projectLine:
      "The original Mallorcan finca, with a considered proposal for rehabilitation, annexes, terrace and pool.",
    descriptors: [
      "Historic Mallorcan finca",
      "64,455 m² · 15.93 acres",
      "Original stone, timber and tiled roofs",
      "Former rehabilitation proposal",
    ],
    overview:
      "Property III is the soul of the estate: the historic Mallorcan finca, weathered and authentic, set in more than fifteen acres of oaks, almonds and dry-stone walls. A comprehensive rehabilitation was drawn for the house — a country residence of real presence, with annexes, terrace and pool. The project was later deferred. The finca stands. The drawings remain a starting point, not a current building right.",
    landscape:
      "An elongated, irregular landholding with a north–south orientation and a gentle slope of approximately 7–11%. Dry-stone walls, holm oaks, a dry torrent and buildings set in the flatter portion of the land shape a distinctly Mallorcan setting.",
    architecture: arch.architectureIii,
    infrastructure: `As the historic heart of the estate, Property III is connected by established internal access. ${infra.water} ${infra.electricity} ${infra.wastewaterHistoric}`,
    cta: "Discover the Historic Finca",
    href: "/properties/property-iii",
    imageLabel: "Architectural visualization",
    imageAlt: "Architectural visualization of the original rehabilitation proposal for the historic finca at Property III",
    imagePath: "/images/can-caramany/property-03/vision/pool.png",
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
    headline: "Quiet scale at the eastern edge.",
    projectLine:
      "Formerly permitted villa with lower-ground rooms, pool and a four-car garage.",
    descriptors: [
      "61,834 m² · 15.28 acres",
      "Independence at the edge of the estate",
      "Villa, pool and four-car garage in the original project",
      "Formerly granted building permit",
    ],
    overview:
      "Property IV is the quieter eastern landholding — generous, private, and slightly apart. A complete villa was designed for this ground, with living floors, lower-ground rooms, pool and a four-car garage. As with Properties I and II, a building permit was granted and later not renewed when the estate project was postponed. The opportunity is the land, and a serious architectural beginning.",
    landscape:
      "Open fields, mature trees and the broader agricultural character of Can Caramany define a setting of privacy and Mediterranean authenticity.",
    architecture: arch.architectureIIiIv,
    infrastructure: `Property IV is linked through the estate’s established access routes. ${infra.electricity} ${infra.water}`,
    cta: "Explore Property IV",
    href: "/properties/property-iv",
    imageLabel: "Architectural visualization",
    imageAlt: "Architectural visualization of the original villa project for Property IV at Can Caramany",
    imagePath: "/images/can-caramany/property-04/vision/pool.png",
    areaNote: "Area figures provisional pending current Registro / Catastro confirmation.",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function formatArea(squareMetres: number, acres: number): string {
  return `${squareMetres.toLocaleString("en-US")} m² · ${acres.toFixed(2)} acres`;
}
