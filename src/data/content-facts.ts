/**
 * Approved content facts for Can Caramany marketing copy.
 *
 * Do NOT claim: building permit included, approved villa project, ready to build,
 * existing planning permission, licensed project, or rebuild according to existing plans.
 *
 * Estate totals remain provisional until Registro/Catastro alignment (Marcos).
 */

export const contentFacts = {
  brand: "CAN CARAMANY",
  brandDisplay: "Can Caramany",
  historicNames: ["Can Caramany", "Son Caramany"] as const,
  projectCompany: "GENI BALEAR S.L.",
  nif: "B-57091464",
  location: {
    island: "Mallorca",
    municipality: "Manacor",
    region: "Illes Balears",
    country: "Spain",
    regionLabel: "Mallorca · Municipality of Manacor",
    polygon: "Polígono 3",
    historicLocationLabel: "Can Caramany / Son Caramany · Polígono 3 · Manacor",
  },
  propertiesCount: 4,
  estate: {
    squareMetresLabel: "235,000+",
    acresLabel: "58+",
    display: "235,000+ m² · 58+ acres",
    marketingLine: "Over 235,000 m² of private Mallorcan countryside",
    areaCaveat: "Subject to final area verification against current Registro and Catastro documentation.",
    provisional: true,
  },
  /** Historic project mapping (Ajuntament enquiry / Sol Acuña, 2023 context). */
  historicProjects: {
    I: {
      code: "GK1",
      parcels: "Pol. 3, Parcela 282 (formerly part of Parcela 82)",
      status:
        "Complete residential architectural study for a private villa on this landholding.",
    },
    II: {
      code: "GK2",
      parcels: "Pol. 3, Parcelas 105 + 392",
      status:
        "Complete residential architectural study for a family house on this landholding.",
    },
    III: {
      code: "GK3",
      parcels: "Pol. 3, Parcelas 391 + 393",
      status:
        "Rehabilitation study for the traditional Mallorcan finca, including annexes and pool.",
    },
    IV: {
      code: "GK4",
      parcels: "Pol. 3, Parcela 390 (formerly part of Parcela 82)",
      status:
        "Complete residential architectural study for a private villa on this landholding.",
    },
  },
  properties: {
    I: {
      squareMetres: 50033,
      acres: 12.36,
      areaSource: "provisional" as const,
    },
    II: {
      squareMetres: 57092,
      acres: 14.11,
      areaSource: "provisional" as const,
    },
    /** Strongest documented individual area (Proyecto Básico / parcels 391 + 393). */
    III: {
      squareMetres: 64455,
      acres: 15.93,
      areaSource: "historic-documented" as const,
      areaNote: "Historically documented land area for Parcelas 391 + 393.",
    },
    IV: {
      squareMetres: 61834,
      acres: 15.28,
      areaSource: "provisional" as const,
    },
  },
  propertyIIIStudy: {
    projectTitle:
      "Rehabilitación y ampliación de casa payesa y anexos. Construcción de piscina.",
    summaryEn:
      "A considered architectural proposal for the rehabilitation and extension of the existing traditional Mallorcan finca, including annexes and a pool.",
    programme: [
      "Single-family residence",
      "Conceived for eight persons",
      "Existing two-storey main house with upper-floor extension",
      "Pool and pergola",
      "Annex A and Annex B",
    ],
    approxAreas: {
      groundFloorM2: 194.7,
      upperFloorM2: 156.05,
      mainHouseM2: 350.75,
      outdoorTerraceM2: 296.55,
      poolM2: 63.75,
    },
    figuresLabel: "Original architectural proposal — approximate figures",
  },
  landscapePropertyIII: {
    form: "Elongated, irregular landholding",
    orientation: "North–south",
    slope: "Gentle slope of approximately 7–11%",
    features: [
      "Existing dry-stone walls",
      "Holm oak / oak cover",
      "Almond and olive trees",
      "Dry torrent / seasonal watercourse",
      "Existing buildings in the flatter portion of the land",
    ],
  },
  heritage: {
    historicFincaOn: "Property III" as const,
    historicStudiesExist: true,
    historicApprovalsNote:
      "Your residence is realised with a contemporary planning application — shaped to your vision.",
  },
  copy: {
    architectureEyebrowIIiIv: "Architecture",
    architectureHeadlineIIiIv: "Your house. Your plan. This land.",
    architectureIIiIv:
      "A complete residential project was conceived for this land: villa, living turned to the landscape, pool and garage in quiet proportion. Those original drawings remain a refined point of departure. Today you build with a contemporary planning application — your architects, your programme, your pace.",
    architectureIii:
      "A comprehensive rehabilitation was conceived for the historic finca — main house, annexes, terrace and pool in a language both contemporary in comfort and classical in character. Those drawings remain a distinguished beginning. Your restoration proceeds with a contemporary planning application.",
    galleryFormerPermit:
      "Elevations, sections and related drawings from the original residential study — an elegant lineage for the house you will create.",
    galleryRehabilitation:
      "Elevations, sections and related drawings from the original rehabilitation study — a beautiful guide for restoring the finca with care.",
  },
  infrastructure: {
    water:
      "Existing private borehole on the estate — water already present for the life of the land.",
    electricity:
      "Existing electrical infrastructure on the estate — power ready for the residence you create.",
    access:
      "Established internal access routes and paths serve the estate and its individual properties.",
    wastewaterHistoric:
      "Historic planning also anticipated a separate wastewater system, underground treatment and rainwater storage for irrigation — further evidence of how seriously this estate was conceived.",
  },
  coordinates: {
    latitude: 39.64149,
    longitude: 3.22964,
  },
  privacyConsent:
    "I have read the Privacy Policy and consent to the processing of my personal data for the purpose of handling my enquiry.",
} as const;

/** Full site disclaimer — for counsel final approval before public go-live. */
export const siteDisclaimerParagraphs = [
  "The architectural drawings, plans, renderings, studies and other development concepts presented on this website include historical and conceptual material provided for illustration and information.",
  "Can Caramany offers land of exceptional calibre on which a private residence may be created. Each project is realised through a contemporary planning application, shaped to the owner’s vision and to applicable standards.",
  "All areas, dimensions, plans, distances, infrastructure information and other property data are approximate unless expressly confirmed by current official documentation and should be independently verified by a prospective purchaser.",
  "Renderings and visualisations are artistic representations and do not constitute a contractual specification or commitment.",
  "Nothing contained on this website constitutes a binding offer, purchase commitment or investment recommendation.",
] as const;
