"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, {
  AttributionControl,
  FullscreenControl,
  Marker,
  NavigationControl,
} from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

import { LocationCard, type MapSelection } from "@/components/location/LocationCard";
import { LocationFilters } from "@/components/location/LocationFilters";
import { LocationList } from "@/components/location/LocationList";
import {
  DestinationMarker,
  EstateMarker,
} from "@/components/location/LocationMarker";
import { MapTokenFallback } from "@/components/location/MapTokenFallback";
import { MapLoadError } from "@/components/location/MapLoadError";
import {
  CAN_CARAMANY_ESTATE_REFERENCE,
  defaultMapFeaturedIds,
  ESTATE_MAP_VIEW,
  filterLocationPoints,
  getCoordinatesForBounds,
  getPointById,
  type LocationFilterId,
  type LocationPoint,
} from "@/data/locations";
import {
  fitMapToCoordinates,
  flyToEstate,
  flyToLocation,
} from "@/lib/map-bounds";
import { applyCanCaramanyMapStyle } from "@/lib/map-style";

import "./location-map.css";

const MAPBOX_STYLE = "mapbox://styles/mapbox/outdoors-v12";

function getDefaultBoundsPoints(): LocationPoint[] {
  return defaultMapFeaturedIds
    .map((id) => getPointById(id))
    .filter((point): point is LocationPoint => Boolean(point));
}

export default function InteractiveLocationMap() {
  const mapRef = useRef<MapRef>(null);
  const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [activeFilter, setActiveFilter] = useState<LocationFilterId>("all");
  const [selection, setSelection] = useState<MapSelection>({ type: "estate" });
  const [mapReady, setMapReady] = useState(false);
  const [mapHintVisible, setMapHintVisible] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  const filteredPoints = useMemo(
    () => filterLocationPoints(activeFilter),
    [activeFilter],
  );

  const selectedId =
    selection.type === "estate" ? "estate" : selection.point.id;

  const fitVisibleLocations = useCallback(
    (duration?: number) => {
      const map = mapRef.current?.getMap();
      if (!map) return;

      const pointsForBounds =
        activeFilter === "all" ? getDefaultBoundsPoints() : filteredPoints;

      const coordinates = getCoordinatesForBounds(pointsForBounds, true);
      fitMapToCoordinates(map, coordinates, {
        duration,
        maxZoom:
          activeFilter === "airport" || activeFilter === "everyday"
            ? 9.6
            : 11.4,
      });
    },
    [activeFilter, filteredPoints],
  );

  const selectEstate = useCallback(() => {
    setSelection({ type: "estate" });
    const map = mapRef.current?.getMap();
    if (map) flyToEstate(map);
  }, []);

  const selectLocation = useCallback((point: LocationPoint) => {
    setSelection({ type: "location", point });
    const map = mapRef.current?.getMap();
    if (map) flyToLocation(map, point.longitude, point.latitude);
  }, []);

  const handleFilterChange = useCallback(
    (filter: LocationFilterId) => {
      setActiveFilter(filter);
      if (selection.type === "location") {
        const stillVisible =
          filter === "all" || selection.point.category === filter;
        if (!stillVisible) {
          setSelection({ type: "estate" });
        }
      }
    },
    [selection],
  );

  const handleMapLoad = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    setMapError(null);
    applyCanCaramanyMapStyle(map);
    const defaultPoints = getDefaultBoundsPoints();
    fitMapToCoordinates(
      map,
      getCoordinatesForBounds(defaultPoints, true),
      { duration: 0, maxZoom: 11 },
    );
    setMapReady(true);
  }, []);

  const handleMapError = useCallback((event: unknown) => {
    const error =
      event &&
      typeof event === "object" &&
      "error" in event &&
      event.error instanceof Error
        ? event.error.message
        : "Mapbox could not load map tiles.";

    setMapError(error);
  }, []);

  useEffect(() => {
    if (!mapReady) return;
    fitVisibleLocations();
  }, [activeFilter, filteredPoints, fitVisibleLocations, mapReady]);

  if (!mapToken) {
    return (
      <div>
        <LocationFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        <div className="mt-8">
          <MapTokenFallback />
        </div>
        <LocationList
          selectedId={selectedId}
          onSelectEstate={selectEstate}
          onSelectLocation={selectLocation}
        />
      </div>
    );
  }

  return (
    <div>
      <LocationFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <div className="can-caramany-map relative mt-8 overflow-hidden border border-[var(--color-warm-stone)]/70 bg-[var(--color-background)]">
        <div className="relative h-[520px] w-full sm:h-[560px] lg:h-[700px]">
          <Map
            ref={mapRef}
            mapboxAccessToken={mapToken}
            mapStyle={MAPBOX_STYLE}
            initialViewState={{
              longitude: ESTATE_MAP_VIEW.longitude,
              latitude: ESTATE_MAP_VIEW.latitude,
              zoom: ESTATE_MAP_VIEW.zoom,
            }}
            style={{ width: "100%", height: "100%" }}
            scrollZoom={false}
            dragRotate={false}
            pitchWithRotate={false}
            touchPitch={false}
            maxPitch={0}
            attributionControl={false}
            cooperativeGestures
            onLoad={handleMapLoad}
            onError={handleMapError}
            onClick={() => setMapHintVisible(false)}
            onTouchStart={() => setMapHintVisible(false)}
          >
            <NavigationControl position="top-right" showCompass={false} />
            <FullscreenControl position="top-right" />
            <AttributionControl compact position="bottom-right" />

            <Marker
              longitude={CAN_CARAMANY_ESTATE_REFERENCE.longitude}
              latitude={CAN_CARAMANY_ESTATE_REFERENCE.latitude}
              anchor="center"
              offset={[0, 0]}
            >
              <EstateMarker
                selected={selection.type === "estate"}
                onClick={selectEstate}
              />
            </Marker>

            {filteredPoints.map((point) => (
              <Marker
                key={point.id}
                longitude={point.longitude}
                latitude={point.latitude}
                anchor="center"
              >
                <DestinationMarker
                  point={point}
                  selected={
                    selection.type === "location" &&
                    selection.point.id === point.id
                  }
                  onClick={() => selectLocation(point)}
                />
              </Marker>
            ))}
          </Map>
        </div>

        {mapError ? <MapLoadError message={mapError} /> : null}

        {mapHintVisible && !mapError ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center px-4">
            <p className="rounded-sm bg-[var(--color-white)]/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]/80 shadow-sm backdrop-blur-sm">
              Tap or click the map to explore · Scroll to continue down the page
            </p>
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 lg:inset-auto lg:bottom-5 lg:left-5 lg:max-w-sm lg:p-0">
          <div className="pointer-events-auto">
            <div className="hidden lg:block">
              <LocationCard selection={selection} variant="floating" />
            </div>
            <div className="lg:hidden">
              <LocationCard
                selection={selection}
                variant="bottom-sheet"
                onClose={() => setSelection({ type: "estate" })}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]/60">
        Eastern Mallorca · Distances approximate where shown
      </p>

      <LocationList
        selectedId={selectedId}
        onSelectEstate={selectEstate}
        onSelectLocation={selectLocation}
      />
    </div>
  );
}
