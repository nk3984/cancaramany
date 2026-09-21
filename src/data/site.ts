import { contentFacts } from "@/data/content-facts";

export const siteConfig = {
  name: "Can Caramany",
  descriptor: "Private Estate · Mallorca",
  title: "Can Caramany | Four Private Properties in Mallorca",
  description:
    "Can Caramany offers four independent landholdings for private purchase in eastern Mallorca: more than 58 acres, a historic finca, established infrastructure, and the freedom to shape your own residence.",
  proposition: "Four properties. One extraordinary setting.",
  location: {
    region: "Eastern Mallorca",
    near: "Manacor",
    municipality: "Manacor",
    regionLabel: "Mallorca · Municipality of Manacor",
    manacor: { km: 8, mi: 5 },
    palma: { km: 60, mi: 37 },
  },
  company: {
    legalName: "GENI BALEAR S.L.U.",
    projectName: "GENI BALEAR S.L.",
    tradeName: "Can Caramany",
    nif: "B-57091464",
    soleShareholder: "Niclas Königbauer",
    administrator: "Niclas Königbauer",
    administratorVerified: false,
    address: {
      street: "C/ Arquitecto Francisco Casas 17, local A06",
      postalCode: "07181",
      city: "Calvià",
      region: "Baleares (Illes)",
      country: "Spain",
    },
    email: "info@cancaramany.com",
    phone: "+49 170 3232013",
  },
  conceptualDisclaimer:
    "Conceptual visualization. Subject to planning, technical review and applicable approvals.",
  visualizationCaption:
    "Architectural visualization of the original project. Subject to planning, technical review and all required approvals.",
  historicLabel: "Original Architectural Drawings",
  historicApprovalsNote: contentFacts.heritage.historicApprovalsNote,
  /** Stable enquiry interest values accepted by the API (language-independent). */
  interestValues: [
    "property-i",
    "property-ii",
    "property-iii",
    "property-iv",
    "entire-estate",
    "investment",
    "advisory",
    "other",
  ] as const,
} as const;

export function formatCompanyAddress(): string {
  const { street, postalCode, city, region, country } = siteConfig.company.address;
  return `${street}, ${postalCode} ${city}, ${region}, ${country}`;
}
