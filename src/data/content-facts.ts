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
        "Residential architectural project with a former building permit. The permit was not renewed after prolonged postponement of the estate and expired on 18 July 2009.",
    },
    II: {
      code: "GK2",
      parcels: "Pol. 3, Parcelas 105 + 392",
      status:
        "Residential architectural project with a former building permit. The permit was not renewed after prolonged postponement of the estate and expired on 18 July 2009.",
    },
    III: {
      code: "GK3",
      parcels: "Pol. 3, Parcelas 391 + 393",
      status:
        "Rehabilitation proposal for the traditional Mallorcan finca. Consell de Mallorca assent dated 6 April 2009 was referenced; corresponding Ayuntamiento permission was not documented. The project was later deferred for a prolonged period.",
    },
    IV: {
      code: "GK4",
      parcels: "Pol. 3, Parcela 390 (formerly part of Parcela 82)",
      status:
        "Residential architectural project with a former building permit. The permit was not renewed after prolonged postponement of the estate and expired on 18 July 2009.",
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
      "The estate’s planning context is set out in The Project.",
  },
  copy: {
    architectureEyebrowIIiIv: "Architecture",
    architectureHeadlineIIiIv: "A documented architectural beginning.",
    architectureIIiIv:
      "A complete residential project was prepared for this land, and a building permit was historically granted. The original architectural work remains — a previously approved concept that gives a future owner a clear, documented starting point.",
    architectureIii:
      "A comprehensive rehabilitation proposal was prepared for the historic finca. The documentation references a Consell de Mallorca assent of 6 April 2009; corresponding Ayuntamiento permission was not documented in the files available. These drawings remain a considered architectural starting point for the house’s next chapter.",
    galleryFormerPermit:
      "Elevations, sections and related drawings from the documented villa project. They record a serious architectural concept once prepared for this land.",
    galleryRehabilitation:
      "Elevations, sections and related drawings from the original rehabilitation proposal. They remain a considered architectural starting point for the finca’s next chapter.",
  },
  infrastructure: {
    water:
      "Private boreholes have been drilled on the estate and produce water for Can Caramany.",
    electricity:
      "Electrical supply has been brought to the main entrance of the estate, sized to serve four independent villas.",
    access:
      "Established internal access routes and paths serve the estate and its individual properties.",
    wastewaterHistoric:
      "Earlier planning also contemplated a separate wastewater system, underground treatment and rainwater storage for irrigation — a further layer of foresight in how the estate was conceived.",
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
  "The architectural drawings, plans, renderings, studies and other development concepts presented on this website include historical and conceptual material and are provided for illustrative and informational purposes only.",
  "Certain properties within the Can Caramany estate were historically the subject of architectural projects and planning procedures, including building permits granted for complete villa projects on Properties I, II and IV, and a rehabilitation study for Property III. The estate was later set aside for a prolonged period; those permissions were not carried into the present and a renewed application is required for any development today. Development remains possible in principle under Mallorcan planning, where current regulations are broadly similar to those of the original projects’ period, subject to the competent authorities and independent technical and legal review.",
  "No representation or warranty is made that the concepts shown can be implemented in their current form. Any future construction, rehabilitation, extension, change of use or other development remains subject to all approvals required by the competent authorities.",
  "All areas, dimensions, plans, distances, infrastructure information and other property data are approximate unless expressly confirmed by current official documentation and should be independently verified by a prospective purchaser.",
  "Renderings and visualisations are artistic representations and do not constitute a contractual specification or commitment.",
  "Nothing contained on this website constitutes a binding offer, purchase commitment, investment recommendation or guarantee of future development potential.",
] as const;
