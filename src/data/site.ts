import { contentFacts } from "@/data/content-facts";

export const siteConfig = {
  name: "Can Caramany",
  descriptor: "Private Estate · Mallorca",
  title: "Can Caramany | A Private Estate in Mallorca",
  description:
    "Can Caramany is a rare private estate in eastern Mallorca: four independent landholdings, more than 58 acres, a historic Mallorcan finca, and original architectural projects once prepared for each plot.",
  proposition: "Space. Privacy. Heritage. Mallorca.",
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
    /** Short project/owner reference used in marketing contexts. */
    projectName: "GENI BALEAR S.L.",
    tradeName: "Can Caramany",
    nif: "B-57091464",
    soleShareholder: "Niclas Königbauer",
    administrator: "Niclas Königbauer",
    /** Confirm against current Registro Mercantil extract before go-live. */
    administratorVerified: false,
    address: {
      street: "C/ Arquitecto Francisco Casas 17, local A06",
      postalCode: "07181",
      city: "Calvià",
      region: "Baleares (Illes)",
      country: "Spain",
    },
    /** Add public contact email before go-live. */
    email: "info@cancaramany.com",
    phone: "+49 170 3232013",
  },
  navigation: [
    { label: "The Estate", href: "/#estate" },
    { label: "Overview", href: "/#overview" },
    { label: "Properties", href: "/#properties" },
    { label: "Heritage", href: "/#heritage" },
    { label: "Residences", href: "/#residences" },
    { label: "Location", href: "/#location" },
    { label: "Private Access", href: "/#private-access" },
  ],
  footerNav: [
    { label: "Estate", href: "/#estate" },
    { label: "Overview", href: "/#overview" },
    { label: "Properties", href: "/#properties" },
    { label: "Heritage", href: "/#heritage" },
    { label: "Residences", href: "/#residences" },
    { label: "Location", href: "/#location" },
    { label: "Private Access", href: "/#private-access" },
  ],
  legal: [
    { label: "Imprint", href: "/imprint" },
    { label: "Privacy", href: "/privacy" },
    { label: "Legal Disclaimer", href: "/legal" },
  ],
  interestOptions: [
    "Private Purchase",
    "Family Estate",
    "Investment",
    "Development",
    "Advisory",
    "Other",
  ] as const,
  conceptualDisclaimer:
    "Conceptual visualization. Subject to planning, technical review and applicable approvals.",
  visualizationCaption:
    "Architectural visualization of the original project. Subject to planning, technical review and all required approvals.",
  historicLabel: "Original Architectural Drawings",
  historicApprovalsNote: contentFacts.heritage.historicApprovalsNote,
  privacyConsent:
    "I have read the Privacy Policy and consent to the processing of my personal data for the purpose of handling my enquiry.",
} as const;

export function formatCompanyAddress(): string {
  const { street, postalCode, city, region, country } = siteConfig.company.address;
  return `${street}, ${postalCode} ${city}, ${region}, ${country}`;
}
