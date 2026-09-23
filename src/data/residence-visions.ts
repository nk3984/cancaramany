export type ResidenceVision = {
  src: string;
};

export type ResidencePropertyVisions = {
  id: "property-i" | "property-ii" | "property-iii" | "property-iv";
  roman: "I" | "II" | "III" | "IV";
  href: string;
  visions: [
    ResidenceVision,
    ResidenceVision,
    ResidenceVision,
    ResidenceVision,
  ];
};

export const residenceVisions: ResidencePropertyVisions[] = [
  {
    id: "property-i",
    roman: "I",
    href: "/properties/property-i",
    visions: [
      { src: "/images/can-caramany/property-01/vision/pool.jpg" },
      { src: "/images/can-caramany/property-01/vision/arrival.jpg" },
      { src: "/images/can-caramany/property-01/vision/terrace.jpg" },
      { src: "/images/can-caramany/property-01/vision/aerial.jpg" },
    ],
  },
  {
    id: "property-ii",
    roman: "II",
    href: "/properties/property-ii",
    visions: [
      { src: "/images/can-caramany/property-02/vision/pool.jpg" },
      { src: "/images/can-caramany/property-02/vision/arrival.jpg" },
      { src: "/images/can-caramany/property-02/vision/terrace.jpg" },
      { src: "/images/can-caramany/property-02/vision/aerial.jpg" },
    ],
  },
  {
    id: "property-iii",
    roman: "III",
    href: "/properties/property-iii",
    visions: [
      { src: "/images/can-caramany/property-03/vision/pool.jpg" },
      { src: "/images/can-caramany/property-03/vision/arrival.jpg" },
      { src: "/images/can-caramany/property-03/vision/terrace.jpg" },
      { src: "/images/can-caramany/property-03/vision/aerial.jpg" },
    ],
  },
  {
    id: "property-iv",
    roman: "IV",
    href: "/properties/property-iv",
    visions: [
      { src: "/images/can-caramany/property-04/vision/pool.jpg" },
      { src: "/images/can-caramany/property-04/vision/arrival.jpg" },
      { src: "/images/can-caramany/property-04/vision/terrace.jpg" },
      { src: "/images/can-caramany/property-04/vision/aerial.jpg" },
    ],
  },
];

export function getResidenceVisionsById(
  id: ResidencePropertyVisions["id"],
): ResidencePropertyVisions | undefined {
  return residenceVisions.find((item) => item.id === id);
}
