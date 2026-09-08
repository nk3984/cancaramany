import { contentFacts } from "@/data/content-facts";

const areas = contentFacts.propertyIIIStudy.approxAreas;

export const propertyIIIContent = {
  eyebrow: "Property III — The Historic Estate",
  headline: "The historic heart of Can Caramany.",
  lead: "Original stone, tiled roofs and a landscape that has grown around the house for generations — the finca that gives the estate its name.",
  overview:
    "This is the soul of Can Caramany: a genuine Mallorcan finca, weathered and irreplaceable, set in more than fifteen acres of oaks, almonds and dry-stone walls. A comprehensive rehabilitation was drawn for the house — country living of real presence, with annexes, terrace and pool. The documentation references a Consell de Mallorca assent of 6 April 2009; corresponding Ayuntamiento permission was not documented, and the project was later deferred. The drawings remain a starting point, not a current building right.",
  facts: [
    { label: "Land", value: "64,455 m²" },
    { label: "Scale", value: "15.93 acres" },
    { label: "Position", value: "Heart of the estate" },
    { label: "Heritage", value: "Historic Mallorcan finca" },
  ],
  factsNote: contentFacts.properties.III.areaNote,
  existing: {
    eyebrow: "Existing historic finca",
    title: "Weathered. Authentic. Rooted in the land.",
    copy: "At the heart of Property III stands an original Mallorcan finca — weathered, authentic and deeply rooted in its landscape. Stone walls, timber structures and traditional roof tiles give the house a character that cannot be manufactured. What stands here is not a finished residence, but a rare starting point: historic substance with genuine architectural presence.",
  },
  vision: {
    eyebrow: "Former rehabilitation proposal",
    title: "A quiet continuation of Mallorcan living.",
    copy: `${contentFacts.propertyIIIStudy.summaryEn} The original proposal imagined a composed Casa Payesa with annexes, terrace, pergola and pool — contemporary in comfort, unmistakably Mallorcan in character. The project was later deferred; these drawings are a starting point, not a current building right.`,
    points: [
      "Rehabilitation and extension of the existing Casa Payesa and annexes",
      "Pool and pergola contemplated in the historic proposal",
      "Programme conceived as a single-family residence for eight persons",
    ],
  },
  living: {
    eyebrow: "Original architectural drawings",
    title: "Conceived for gathering, retreat and outdoor living.",
    intro:
      "Figures below are approximate values from the original rehabilitation proposal and are provided for information only. The drawings that follow record that concept — they are not a current building right.",
    levels: [
      {
        label: "Ground floor",
        title: "Arrival and gathering",
        copy: `Approx. ${areas.groundFloorM2.toFixed(2)} m² in the original proposal — entrance, salon and living spaces opening toward the land.`,
      },
      {
        label: "Upper floor",
        title: "Private retreat",
        copy: `Approx. ${areas.upperFloorM2.toFixed(2)} m² in the original proposal — private rooms within the contemplated upper-floor extension.`,
      },
      {
        label: "Outdoors",
        title: "Living in the landscape",
        copy: `Approx. ${areas.outdoorTerraceM2.toFixed(2)} m² outdoor / terrace areas and an approx. ${areas.poolM2.toFixed(2)} m² pool in the original proposal.`,
      },
    ],
    figures: [
      {
        value: `approx. ${Math.round(areas.mainHouseM2)} m²`,
        label: "Main house (original proposal)",
      },
      {
        value: `approx. ${Math.round(areas.outdoorTerraceM2)} m²`,
        label: "Outdoor / terrace areas",
      },
      {
        value: `approx. ${Math.round(areas.poolM2)} m²`,
        label: "Pool",
      },
    ],
    figuresNote: `${contentFacts.propertyIIIStudy.figuresLabel}. ${contentFacts.heritage.historicApprovalsNote}`,
  },
  land: {
    eyebrow: "Landscape",
    title: "Architecture as a continuation of the land.",
    copy: "An elongated, irregular landholding with a north–south orientation and a gentle slope of approximately 7–11%. Existing dry-stone walls, holm oaks, almond and olive trees, a dry torrent and buildings set in the flatter portion of the land create a living environment that feels grounded, private and distinctly Mallorcan.",
  },
  cta: {
    eyebrow: "Private documentation",
    title: "Request the documentation for Property III.",
    copy: "Elevations, sections and further material from the original proposal are shown on this page. Additional documentation remains available upon qualified request.",
    button: "Enquire about Property III",
  },
} as const;

export const propertyIIIImages = {
  hero: {
    src: "/images/can-caramany/visualizations/property-iii.jpg",
    alt: "Architectural visualization of the original rehabilitation proposal for the historic finca at Property III",
    label: "Architectural visualization",
  },
  existing: {
    src: "/images/can-caramany/historic-finca/finca-existing-exterior.jpg",
    alt: "Existing historic finca at the heart of Property III",
    label: "IMAGE REQUIRED — FINCA EXISTING",
  },
  annex: {
    src: "/images/can-caramany/historic-finca/finca-annex-barn.jpg",
    alt: "Historic annex and agricultural buildings of the Mallorcan finca",
    label: "Historic annex",
  },
  details: [
    {
      src: "/images/can-caramany/historic-finca/finca-detail-stone.jpg",
      alt: "Stone masonry of the historic finca",
      label: "IMAGE REQUIRED — FINCA STONE DETAIL",
      caption: "Stone",
    },
    {
      src: "/images/can-caramany/historic-finca/finca-detail-door.jpg",
      alt: "Historic door of the Mallorcan finca",
      label: "IMAGE REQUIRED — FINCA DOOR DETAIL",
      caption: "Original openings",
    },
    {
      src: "/images/can-caramany/historic-finca/finca-detail-opening.jpg",
      alt: "Architectural opening in the historic finca structure",
      label: "IMAGE REQUIRED — FINCA OPENING",
      caption: "Agricultural character",
    },
  ],
  vision: [
    {
      src: "/images/can-caramany/property-03/vision/facade.png",
      alt: "Visualised façade of the historic finca at Property III",
      label: "IMAGE REQUIRED — FINCA FACADE VISION",
      caption: "Façade",
      layout: "wide",
    },
    {
      src: "/images/can-caramany/property-03/vision/pool.png",
      alt: "Visualised terrace, pergola and pool for Property III",
      label: "IMAGE REQUIRED — TERRACE POOL VISION",
      caption: "Terrace, pergola and pool",
      layout: "wide",
    },
    {
      src: "/images/can-caramany/property-03/vision/evening.png",
      alt: "Evening terrace vision for Property III",
      label: "IMAGE REQUIRED — EVENING TERRACE VISION",
      caption: "Evening",
      layout: "wide",
    },
  ],
  land: [
    {
      src: "/images/can-caramany/landscape/landscape-holm-oaks.jpg",
      alt: "Mature holm oaks on Property III at Can Caramany",
      label: "IMAGE REQUIRED — HOLM OAKS",
    },
    {
      src: "/images/can-caramany/landscape/landscape-stone-wall.jpg",
      alt: "Dry-stone wall across the Property III landscape",
      label: "IMAGE REQUIRED — STONE WALL",
    },
  ],
  gallery: [
    {
      src: "/images/can-caramany/property-03/property-03-historic-finca-exterior.jpg",
      alt: "Historic finca exterior at Property III",
    },
    {
      src: "/images/can-caramany/property-03/vision/pool.png",
      alt: "Architectural vision — terrace and pool for Property III",
    },
    {
      src: "/images/can-caramany/property-03/vision/facade.png",
      alt: "Architectural vision — façade for Property III",
    },
    {
      src: "/images/can-caramany/property-03/vision/evening.png",
      alt: "Architectural vision — evening terrace for Property III",
    },
    {
      src: "/images/can-caramany/historic-finca/finca-detail-stone.jpg",
      alt: "Stone masonry detail of the historic finca",
    },
    {
      src: "/images/can-caramany/historic-finca/finca-annex-barn.jpg",
      alt: "Historic annex and agricultural buildings of the Mallorcan finca",
    },
  ],
} as const;
