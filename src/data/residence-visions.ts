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
    title: "Property I",
    copy: "Open land and long views. A private residence conceived with quiet scale, refined stone and timber, shaded terraces and a pool set into the Mallorcan landscape.",
    href: "/properties/property-i",
    visions: [
      {
        src: "/images/can-caramany/property-01/vision/pool.png",
        alt: "Property I architectural vision — pool and terrace at golden hour",
        caption: "Pool & terrace",
      },
      {
        src: "/images/can-caramany/property-01/vision/facade.png",
        alt: "Property I architectural vision — façade with pool edge",
        caption: "Façade",
      },
      {
        src: "/images/can-caramany/property-01/vision/evening.png",
        alt: "Property I architectural vision — indoor–outdoor evening living",
        caption: "Evening living",
      },
    ],
  },
  {
    id: "property-ii",
    roman: "II",
    title: "Property II",
    copy: "A generous setting within the heart of the estate. Mature vegetation, protected outdoor rooms and a residence defined by proportion, materiality and privacy.",
    href: "/properties/property-ii",
    visions: [
      {
        src: "/images/can-caramany/property-02/vision/pool.png",
        alt: "Property II architectural vision — pool framed by olives",
        caption: "Pool & garden",
      },
      {
        src: "/images/can-caramany/property-02/vision/facade.png",
        alt: "Property II architectural vision — arrival façade and loggia",
        caption: "Arrival",
      },
      {
        src: "/images/can-caramany/property-02/vision/courtyard.png",
        alt: "Property II architectural vision — shaded courtyard living",
        caption: "Courtyard",
      },
    ],
  },
  {
    id: "property-iii",
    roman: "III",
    title: "Property III — Historic Finca",
    copy: "A historic rehabilitation vision for the traditional Mallorcan finca: stone, timber and landscape held together with contemporary comfort — conceptual only, subject to approvals.",
    href: "/properties/property-iii",
    visions: [
      {
        src: "/images/can-caramany/property-03/vision/pool.png",
        alt: "Property III architectural vision — finca terrace and pool",
        caption: "Terrace & pool",
      },
      {
        src: "/images/can-caramany/property-03/vision/facade.png",
        alt: "Property III architectural vision — rehabilitated finca façade",
        caption: "Façade",
      },
      {
        src: "/images/can-caramany/property-03/vision/evening.png",
        alt: "Property III architectural vision — evening terrace living",
        caption: "Evening",
      },
    ],
  },
  {
    id: "property-iv",
    roman: "IV",
    title: "Property IV",
    copy: "Quiet scale at the edge of the estate. Rolling countryside, long privacy and a residence that opens calmly to terrace, pool and horizon.",
    href: "/properties/property-iv",
    visions: [
      {
        src: "/images/can-caramany/property-04/vision/pool.png",
        alt: "Property IV architectural vision — pool in open countryside",
        caption: "Pool & land",
      },
      {
        src: "/images/can-caramany/property-04/vision/facade.png",
        alt: "Property IV architectural vision — façade and landscape",
        caption: "Façade",
      },
      {
        src: "/images/can-caramany/property-04/vision/terrace.png",
        alt: "Property IV architectural vision — covered terrace at dusk",
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
