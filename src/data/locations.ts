import { contentFacts } from "@/data/content-facts";

export const CAN_CARAMANY_LOCATION = {
  latitude: contentFacts.coordinates.latitude,
  longitude: contentFacts.coordinates.longitude,
} as const;

/** Official map origin — historic finca on Property III. Always use coordinates, never name geocoding. */
export const CAN_CARAMANY_ESTATE_REFERENCE = {
  latitude: CAN_CARAMANY_LOCATION.latitude,
  longitude: CAN_CARAMANY_LOCATION.longitude,
  label: "Historic finca · Property III",
  mapLabel: "CAN CARAMANY",
  mapSubtitle: "Private Estate · Municipality of Manacor",
} as const;

export type LocationCategory =
  | "everyday"
  | "coast"
  | "marina"
  | "golf"
  | "sport"
  | "culture"
  | "airport";

export type LocationPoint = {
  id: string;
  name: string;
  category: LocationCategory;
  latitude: number;
  longitude: number;
  distanceKm?: number;
  distanceMiles?: number;
  driveTimeMinutes?: number;
  description: string;
  featured?: boolean;
};

export const locationCategories = [
  { id: "all", label: "All" },
  { id: "everyday", label: "Everyday" },
  { id: "coast", label: "Coast" },
  { id: "marina", label: "Marinas" },
  { id: "golf", label: "Golf" },
  { id: "sport", label: "Sport & Education" },
  { id: "culture", label: "Culture" },
  { id: "airport", label: "Airport" },
] as const;

export type LocationFilterId = (typeof locationCategories)[number]["id"];

export type LocationListItem = {
  pointId: string;
  categoryLabel: string;
};

/**
 * Pins are placed on land — beach, quay, clubhouse or town centre —
 * never on a water centroid. East-coast coves face east, so longitude is
 * biased slightly inland of the open water.
 */
export const locationPoints: LocationPoint[] = [
  {
    id: "manacor",
    name: "Manacor",
    category: "everyday",
    latitude: 39.5696,
    longitude: 3.2096,
    distanceKm: 8,
    distanceMiles: 5,
    description:
      "The commercial and cultural centre of eastern Mallorca, providing shopping, healthcare, restaurants, services and everyday infrastructure.",
    featured: true,
  },
  {
    id: "hospital-manacor",
    name: "Hospital de Manacor",
    category: "everyday",
    latitude: 39.57888,
    longitude: 3.20711,
    description:
      "The regional hospital serving Manacor and the east of the island, a short drive from the estate.",
  },
  {
    id: "palma",
    name: "Palma",
    category: "everyday",
    latitude: 39.5694,
    longitude: 2.6501,
    description:
      "Mallorca’s capital — historic centre, harbour, dining and cultural life — reached across the island in a little over an hour.",
    featured: true,
  },
  {
    id: "rafa-nadal-academy",
    name: "Rafa Nadal Academy",
    category: "sport",
    latitude: 39.5601,
    longitude: 3.2133,
    description:
      "A globally recognised tennis and sports destination on the Cales de Mallorca road, just south of Manacor, combining high-performance facilities, wellness and international education.",
    featured: true,
  },
  {
    id: "porto-cristo",
    name: "Porto Cristo",
    category: "marina",
    latitude: 39.5422,
    longitude: 3.3332,
    description:
      "A Mediterranean harbour town offering beaches, restaurants, boating access and a lively local waterfront.",
    featured: true,
  },
  {
    id: "portocolom",
    name: "Portocolom",
    category: "marina",
    latitude: 39.4185,
    longitude: 3.256,
    description:
      "One of Mallorca’s most distinctive natural harbours, combining traditional maritime character with restaurants and Mediterranean boating.",
  },
  {
    id: "marina-cala-dor",
    name: "Marina Cala d'Or",
    category: "marina",
    latitude: 39.3689,
    longitude: 3.2268,
    description:
      "A full-service Mediterranean leisure marina in Cala Llonga, surrounded by restaurants and coastal amenities.",
  },
  {
    id: "cala-mendia",
    name: "Cala Mendia",
    category: "coast",
    latitude: 39.5206,
    longitude: 3.3124,
    description: "A sheltered sandy cove on Mallorca’s eastern coastline, just south of Porto Cristo.",
    featured: true,
  },
  {
    id: "cala-anguila",
    name: "Cala Anguila",
    category: "coast",
    latitude: 39.5221,
    longitude: 3.3135,
    description:
      "A compact Mediterranean cove known for clear water and a relaxed coastal setting, beside Cala Mendia.",
  },
  {
    id: "cala-romantica",
    name: "Cala Romàntica",
    category: "coast",
    latitude: 39.5175,
    longitude: 3.3078,
    description:
      "A broad sandy cove — s’Estany d’en Mas — framed by the east-coast landscape south of Cala Anguila.",
  },
  {
    id: "cala-varques",
    name: "Cala Varques",
    category: "coast",
    latitude: 39.4998,
    longitude: 3.2947,
    description:
      "One of the east coast’s more natural and secluded Mediterranean coves, reached through pine woodland south of Porto Cristo.",
    featured: true,
  },
  {
    id: "coves-del-drach",
    name: "Coves del Drach",
    category: "culture",
    latitude: 39.5362,
    longitude: 3.3303,
    description:
      "Mallorca’s most celebrated cave system, just inland of Porto Cristo, with an underground lake and concert chamber.",
    featured: true,
  },
  {
    id: "vall-dor-golf",
    name: "Vall d'Or Golf",
    category: "golf",
    latitude: 39.431635,
    longitude: 3.217025,
    description:
      "An established 18-hole golf course at S’Horta, between Portocolom and Cala d’Or, overlooking Mallorca’s southeastern countryside.",
    featured: true,
  },
  {
    id: "pula-golf",
    name: "Pula Golf",
    category: "golf",
    latitude: 39.647064,
    longitude: 3.378639,
    description:
      "A respected golf destination on the Son Servera–Capdepera road, inland of Mallorca’s northeast coastline.",
  },
  {
    id: "son-servera-golf",
    name: "Golf Son Servera",
    category: "golf",
    latitude: 39.6405,
    longitude: 3.4035,
    description:
      "A long-established coastal golf club in Costa dels Pins, in Mallorca’s northeast.",
  },
  {
    id: "palma-airport",
    name: "Palma de Mallorca Airport",
    category: "airport",
    latitude: 39.5517,
    longitude: 2.7388,
    distanceKm: 60,
    distanceMiles: 37,
    description:
      "Mallorca’s international gateway, offering extensive connectivity to major European cities and onward international travel.",
    featured: true,
  },
];

/** Initial map frame: east Mallorca around the estate — not the whole island. */
export const defaultMapFeaturedIds = [
  "manacor",
  "rafa-nadal-academy",
  "porto-cristo",
  "coves-del-drach",
  "cala-mendia",
  "cala-varques",
] as const;

export const featuredLocationList: LocationListItem[] = [
  { pointId: "manacor", categoryLabel: "Everyday" },
  { pointId: "rafa-nadal-academy", categoryLabel: "Sport & Education" },
  { pointId: "porto-cristo", categoryLabel: "Coast & Marina" },
  { pointId: "coves-del-drach", categoryLabel: "Culture" },
  { pointId: "cala-varques", categoryLabel: "Nature" },
  { pointId: "palma-airport", categoryLabel: "International Access" },
];

export const locationEditorials = [
  {
    id: "coast",
    title: "The Coast",
    headline: "The Mediterranean, within easy reach.",
    copy: "From sheltered sandy coves — Cala Mendia, Cala Anguila, Cala Romàntica and Cala Varques — to the working harbours of Porto Cristo and Portocolom, Mallorca’s east coast sits within convenient reach of Can Caramany. The Coves del Drach lie just inland of Porto Cristo.",
    image: "/images/can-caramany/location/coast.jpg",
    imageAlt: "Sheltered Mediterranean cove on Mallorca’s east coast",
  },
  {
    id: "sport",
    title: "Sport & Education",
    headline: "World-class sport close to home.",
    copy: "Nearby Manacor is home to the Rafa Nadal Academy, bringing internationally recognised tennis, training, wellness and education facilities to Mallorca’s east.",
    image: "/images/can-caramany/location/sport.jpg",
    imageAlt: "Tennis courts at a Mediterranean sports academy in eastern Mallorca",
  },
  {
    id: "golf",
    title: "Golf",
    headline: "Golf across Mallorca’s east.",
    copy: "Several established golf courses — including Vall d’Or at S’Horta, Pula and Son Servera — are accessible from the estate.",
    image: "/images/can-caramany/location/golf.jpg",
    imageAlt: "Mediterranean golf fairway in eastern Mallorca",
  },
  {
    id: "access",
    title: "International Access",
    headline: "Mallorca, connected to Europe.",
    copy: "Palma de Mallorca Airport provides extensive connectivity to major European hubs, making international ownership and regular travel unusually straightforward for an island estate.",
    image: "/images/can-caramany/location/access.jpg",
    imageAlt: "Mediterranean gateway for international travel to Mallorca",
  },
] as const;

export const ESTATE_MAP_VIEW = {
  longitude: CAN_CARAMANY_LOCATION.longitude,
  latitude: CAN_CARAMANY_LOCATION.latitude,
  zoom: 14,
} as const;

export const MAP_FLY_DURATION_MS = 1400;

export function formatDistance(point: LocationPoint): string | null {
  if (point.distanceKm != null && point.distanceMiles != null) {
    return `${point.distanceKm} km · ${point.distanceMiles} mi`;
  }
  return null;
}

export function getCategoryLabel(category: LocationCategory): string {
  const labels: Record<LocationCategory, string> = {
    everyday: "Everyday",
    coast: "Coast",
    marina: "Marina",
    golf: "Golf",
    sport: "Sport & Education",
    culture: "Culture",
    airport: "Airport",
  };
  return labels[category];
}

export function getPointById(id: string): LocationPoint | undefined {
  return locationPoints.find((point) => point.id === id);
}

export function filterLocationPoints(
  filter: LocationFilterId,
): LocationPoint[] {
  if (filter === "all") return locationPoints;
  return locationPoints.filter((point) => point.category === filter);
}

export function getCoordinatesForBounds(
  points: LocationPoint[],
  includeEstate = true,
): [number, number][] {
  const coordinates: [number, number][] = [];

  if (includeEstate) {
    coordinates.push([
      CAN_CARAMANY_LOCATION.longitude,
      CAN_CARAMANY_LOCATION.latitude,
    ]);
  }

  for (const point of points) {
    coordinates.push([point.longitude, point.latitude]);
  }

  return coordinates;
}

/** Open external maps at exact coordinates — avoids incorrect business name geocoding. */
export function buildExternalMapUrl(
  latitude: number,
  longitude: number,
): string {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

export function formatEstateCoordinates(): string {
  return `${CAN_CARAMANY_LOCATION.latitude}° N, ${CAN_CARAMANY_LOCATION.longitude}° E`;
}
