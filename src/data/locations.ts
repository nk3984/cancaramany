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
  | "dining"
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
  externalMapUrl?: string;
};

export const locationCategories = [
  { id: "all", label: "All" },
  { id: "everyday", label: "Everyday" },
  { id: "coast", label: "Coast" },
  { id: "marina", label: "Marinas" },
  { id: "golf", label: "Golf" },
  { id: "sport", label: "Sport & Education" },
  { id: "dining", label: "Dining" },
  { id: "airport", label: "Airport" },
] as const;

export type LocationFilterId = (typeof locationCategories)[number]["id"];

export type LocationListItem = {
  pointId: string;
  categoryLabel: string;
};

export const locationPoints: LocationPoint[] = [
  {
    id: "manacor",
    name: "Manacor",
    category: "everyday",
    latitude: 39.5696,
    longitude: 3.2095,
    distanceKm: 8,
    distanceMiles: 5,
    description:
      "The commercial and cultural centre of eastern Mallorca, providing shopping, healthcare, restaurants, services and everyday infrastructure.",
    featured: true,
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Manacor+Mallorca",
  },
  {
    id: "rafa-nadal-academy",
    name: "Rafa Nadal Academy",
    category: "sport",
    latitude: 39.5742,
    longitude: 3.2148,
    description:
      "A globally recognised tennis and sports destination in nearby Manacor, combining high-performance facilities, wellness and international education.",
    featured: true,
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rafa+Nadal+Academy+Manacor",
  },
  {
    id: "porto-cristo",
    name: "Porto Cristo",
    category: "marina",
    latitude: 39.5389,
    longitude: 3.3334,
    description:
      "A Mediterranean harbour town offering beaches, restaurants, boating access and a lively local waterfront.",
    featured: true,
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Porto+Cristo+Mallorca",
  },
  {
    id: "portocolom",
    name: "Portocolom",
    category: "marina",
    latitude: 39.4256,
    longitude: 3.2572,
    description:
      "One of Mallorca’s most distinctive natural harbours, combining traditional maritime character with restaurants and Mediterranean boating.",
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Portocolom+Mallorca",
  },
  {
    id: "cala-mendia",
    name: "Cala Mendia",
    category: "coast",
    latitude: 39.5331,
    longitude: 3.3194,
    description: "A sheltered sandy cove on Mallorca’s eastern coastline.",
    featured: true,
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Cala+Mendia+Mallorca",
  },
  {
    id: "cala-anguila",
    name: "Cala Anguila",
    category: "coast",
    latitude: 39.5234,
    longitude: 3.3261,
    description:
      "A compact Mediterranean cove known for clear water and a relaxed coastal setting.",
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Cala+Anguila+Mallorca",
  },
  {
    id: "cala-romantica",
    name: "Cala Romàntica",
    category: "coast",
    latitude: 39.5082,
    longitude: 3.3145,
    description:
      "A broad sandy cove surrounded by Mallorca’s eastern coastal landscape.",
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Cala+Romantica+Mallorca",
  },
  {
    id: "cala-varques",
    name: "Cala Varques",
    category: "coast",
    latitude: 39.5324,
    longitude: 3.3731,
    description:
      "One of the east coast’s more natural and secluded Mediterranean coves.",
    featured: true,
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Cala+Varques+Mallorca",
  },
  {
    id: "vall-dor-golf",
    name: "Vall d'Or Golf",
    category: "golf",
    latitude: 39.3774,
    longitude: 3.2453,
    description:
      "An established 18-hole golf course overlooking Mallorca’s southeastern countryside and Mediterranean coast.",
    featured: true,
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Vall+d%27Or+Golf+Mallorca",
  },
  {
    id: "pula-golf",
    name: "Pula Golf",
    category: "golf",
    latitude: 39.6382,
    longitude: 3.3764,
    description:
      "A respected golf destination near Son Servera and Mallorca’s northeast coastline.",
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Pula+Golf+Mallorca",
  },
  {
    id: "son-servera-golf",
    name: "Golf Son Servera",
    category: "golf",
    latitude: 39.6221,
    longitude: 3.3612,
    description: "A long-established coastal golf club in Mallorca’s northeast.",
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Son+Servera+Golf+Mallorca",
  },
  {
    id: "marina-cala-dor",
    name: "Marina Cala d'Or",
    category: "marina",
    latitude: 39.3752,
    longitude: 3.2341,
    description:
      "A full-service Mediterranean leisure marina surrounded by restaurants and coastal amenities.",
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Marina+Cala+d%27Or+Mallorca",
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
    externalMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Palma+de+Mallorca+Airport",
  },
];

export const defaultMapFeaturedIds = [
  "manacor",
  "rafa-nadal-academy",
  "porto-cristo",
  "cala-mendia",
  "cala-varques",
  "palma-airport",
] as const;

export const featuredLocationList: LocationListItem[] = [
  { pointId: "manacor", categoryLabel: "Everyday" },
  { pointId: "rafa-nadal-academy", categoryLabel: "Sport & Education" },
  { pointId: "porto-cristo", categoryLabel: "Coast & Marina" },
  { pointId: "cala-varques", categoryLabel: "Nature" },
  { pointId: "vall-dor-golf", categoryLabel: "Golf" },
  { pointId: "palma-airport", categoryLabel: "International Access" },
];

export const locationEditorials = [
  {
    id: "coast",
    title: "The Coast",
    headline: "The Mediterranean, within easy reach.",
    copy: "From sheltered sandy coves to traditional working harbours, Mallorca’s east coast offers a diverse Mediterranean landscape within convenient reach of Can Caramany.",
  },
  {
    id: "sport",
    title: "Sport & Education",
    headline: "World-class sport close to home.",
    copy: "Nearby Manacor is home to the Rafa Nadal Academy, bringing internationally recognised tennis, training, wellness and education facilities to Mallorca’s east.",
  },
  {
    id: "golf",
    title: "Golf",
    headline: "Golf across Mallorca’s east.",
    copy: "Several established golf courses — including Vall d’Or, Pula and Son Servera — are accessible from the estate.",
  },
  {
    id: "access",
    title: "International Access",
    headline: "Mallorca, connected to Europe.",
    copy: "Palma de Mallorca Airport provides extensive connectivity to major European hubs, making international ownership and regular travel unusually straightforward for an island estate.",
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
    dining: "Dining",
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
