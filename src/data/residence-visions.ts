export type ResidenceVision = {
  src: string;
  alt: string;
  caption: string;
};

export type ResidencePropertyVisions = {
  id: "property-i" | "property-ii" | "property-iii" | "property-iv";
  roman: "I" | "II" | "III" | "IV";
  title: string;
  copy: string;
  href: string;
  visions: [ResidenceVision, ResidenceVision, ResidenceVision];
};

export const residenceVisions: ResidencePropertyVisions[] = [
  {
    id: "property-i",
    roman: "I",
    title: "Property I — L-Plan Residence",
    copy: "Open land and long views. An L-shaped residence of cream plaster and pale limestone, a detached garage to the west, and a private pool set to the east — one architectural idea among many this plot can hold. Your architect. Your theme. Your house.",
    href: "/properties/property-i",
    visions: [
      {
        src: "/images/can-caramany/property-01/vision/facade.png",
        alt: "Property I vision — arrival façade with detached garage and pool to the east",
        caption: "Arrival",
      },
      {
        src: "/images/can-caramany/property-01/vision/pool.png",
        alt: "Property I vision — east pool terrace opening to the L-shaped residence",
        caption: "Pool & terrace",
      },
      {
        src: "/images/can-caramany/property-01/vision/evening.png",
        alt: "Property I vision — evening living on the recessed terrace wing",
        caption: "Evening living",
      },
    ],
  },
  {
    id: "property-ii",
    roman: "II",
    title: "Property II — Stone & Light",
    copy: "At the heart of the estate: a sculptural stone volume with a tree-shaped void, a plastered living wing with a clear six-window rhythm, and a tapering chimney. A bold material contrast — and proof that each plot can carry an entirely different architectural language.",
    href: "/properties/property-ii",
    visions: [
      {
        src: "/images/can-caramany/property-02/vision/facade.png",
        alt: "Property II vision — stone wing with tree void and plastered six-window façade",
        caption: "Arrival",
      },
      {
        src: "/images/can-caramany/property-02/vision/courtyard.png",
        alt: "Property II vision — courtyard living framed by olives and stone chimney",
        caption: "Courtyard",
      },
      {
        src: "/images/can-caramany/property-02/vision/pool.png",
        alt: "Property II vision — pool garden with stone-and-plaster residence beyond",
        caption: "Pool & garden",
      },
    ],
  },
  {
    id: "property-iii",
    roman: "III",
    title: "Property III — Historic Finca",
    copy: "The historic finca reimagined with classical symmetry: arched entrance, oculus, Juliet balconies, and a continuous terracotta roof. Timeless Mallorcan character — conceptual only, and an invitation for your own restoration vision on this exceptional ground.",
    href: "/properties/property-iii",
    visions: [
      {
        src: "/images/can-caramany/property-03/vision/facade.png",
        alt: "Property III vision — symmetrical finca façade with arched door and oculus",
        caption: "Façade",
      },
      {
        src: "/images/can-caramany/property-03/vision/pool.png",
        alt: "Property III vision — finca terrace and pool at golden hour",
        caption: "Terrace & pool",
      },
      {
        src: "/images/can-caramany/property-03/vision/evening.png",
        alt: "Property III vision — evening light on the symmetrical finca entrance",
        caption: "Evening",
      },
    ],
  },
  {
    id: "property-iv",
    roman: "IV",
    title: "Property IV — Modern Rustic",
    copy: "Quiet scale at the edge of the estate. Asymmetrical stone wings, rising shed roofs, horizontal cladding and modern slot windows — a contemporary reading of Mallorca that still belongs to the land. Different plot. Different idea. Absolute privacy.",
    href: "/properties/property-iv",
    visions: [
      {
        src: "/images/can-caramany/property-04/vision/facade.png",
        alt: "Property IV vision — asymmetrical stone wings with horizontal cladding and slot windows",
        caption: "Façade",
      },
      {
        src: "/images/can-caramany/property-04/vision/pool.png",
        alt: "Property IV vision — pool terrace opening to open countryside",
        caption: "Pool & land",
      },
      {
        src: "/images/can-caramany/property-04/vision/terrace.png",
        alt: "Property IV vision — covered terrace at dusk with stone wings and cladding",
        caption: "Terrace",
      },
    ],
  },
];

export function getResidenceVisionsById(
  id: ResidencePropertyVisions["id"],
): ResidencePropertyVisions | undefined {
  return residenceVisions.find((item) => item.id === id);
}
