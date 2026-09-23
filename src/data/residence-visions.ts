export type ResidenceVision = {
  src: string;
};

export type ResidencePropertyVisions = {
  id: "property-i" | "property-ii" | "property-iii" | "property-iv";
  roman: "I" | "II" | "III" | "IV";
  href: string;
  visions: [ResidenceVision, ResidenceVision, ResidenceVision];
};

export const residenceVisions: ResidencePropertyVisions[] = [
  {
    id: "property-i",
    roman: "I",
    href: "/properties/property-i",
    visions: [
      { src: "/images/can-caramany/property-01/vision/facade.png" },
      { src: "/images/can-caramany/property-01/vision/pool.png" },
      { src: "/images/can-caramany/property-01/vision/evening.png" },
    ],
  },
  {
    id: "property-ii",
    roman: "II",
    href: "/properties/property-ii",
    visions: [
      { src: "/images/can-caramany/property-02/vision/facade.png" },
      { src: "/images/can-caramany/property-02/vision/courtyard.png" },
      { src: "/images/can-caramany/property-02/vision/pool.png" },
    ],
  },
  {
    id: "property-iii",
    roman: "III",
    href: "/properties/property-iii",
    visions: [
      { src: "/images/can-caramany/property-03/vision/facade.png" },
      { src: "/images/can-caramany/property-03/vision/pool.png" },
      { src: "/images/can-caramany/property-03/vision/evening.png" },
    ],
  },
  {
    id: "property-iv",
    roman: "IV",
    href: "/properties/property-iv",
    visions: [
      { src: "/images/can-caramany/property-04/vision/facade.png" },
      { src: "/images/can-caramany/property-04/vision/pool.png" },
      { src: "/images/can-caramany/property-04/vision/terrace.png" },
    ],
  },
];

export function getResidenceVisionsById(
  id: ResidencePropertyVisions["id"],
): ResidencePropertyVisions | undefined {
  return residenceVisions.find((item) => item.id === id);
}
