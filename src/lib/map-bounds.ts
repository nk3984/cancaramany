import mapboxgl from "mapbox-gl";
import type { Map as MapboxMap } from "mapbox-gl";
import {
  CAN_CARAMANY_LOCATION,
  ESTATE_MAP_VIEW,
  MAP_FLY_DURATION_MS,
} from "@/data/locations";

type FitOptions = {
  padding?: number | mapboxgl.PaddingOptions;
  maxZoom?: number;
  duration?: number;
};

export function fitMapToCoordinates(
  map: MapboxMap,
  coordinates: [number, number][],
  options: FitOptions = {},
) {
  if (coordinates.length === 0) return;

  const bounds = coordinates.reduce(
    (acc, coord) => acc.extend(coord),
    new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]),
  );

  map.fitBounds(bounds, {
    padding: options.padding ?? { top: 72, bottom: 120, left: 48, right: 48 },
    maxZoom: options.maxZoom ?? 11.2,
    duration: options.duration ?? MAP_FLY_DURATION_MS,
    essential: true,
  });
}

export function flyToEstate(map: MapboxMap) {
  map.flyTo({
    center: [ESTATE_MAP_VIEW.longitude, ESTATE_MAP_VIEW.latitude],
    zoom: ESTATE_MAP_VIEW.zoom,
    duration: MAP_FLY_DURATION_MS,
    essential: true,
  });
}

export function flyToLocation(
  map: MapboxMap,
  longitude: number,
  latitude: number,
  zoom = 12.4,
) {
  map.flyTo({
    center: [longitude, latitude],
    zoom,
    duration: MAP_FLY_DURATION_MS,
    essential: true,
  });
}

export function getEstateCoordinates(): [number, number] {
  return [CAN_CARAMANY_LOCATION.longitude, CAN_CARAMANY_LOCATION.latitude];
}
