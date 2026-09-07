import type { Map as MapboxMap } from "mapbox-gl";

const WATER = "#B8C9D6";
const FOG = "#F3F0E8";

/** Subtle palette tweaks only — do not repaint land layers to the page background. */
export function applyCanCaramanyMapStyle(map: MapboxMap) {
  map.setFog({
    color: FOG,
    "high-color": FOG,
    "horizon-blend": 0.05,
    "space-color": FOG,
    "star-intensity": 0,
  });

  const layers = map.getStyle()?.layers;
  if (!layers) return;

  for (const layer of layers) {
    const { id, type } = layer;

    try {
      if (type === "fill" && id.includes("water")) {
        map.setPaintProperty(id, "fill-color", WATER);
        map.setPaintProperty(id, "fill-opacity", 0.95);
      }

      if (type === "line" && id.includes("water")) {
        map.setPaintProperty(id, "line-color", "#9EB4C5");
        map.setPaintProperty(id, "line-opacity", 0.45);
      }

      if (type === "symbol" && id.includes("label")) {
        map.setPaintProperty(id, "text-color", "#4F5748");
        map.setPaintProperty(id, "text-halo-color", "rgba(250, 249, 246, 0.9)");
        map.setPaintProperty(id, "text-halo-width", 1.2);
      }

      if (
        type === "symbol" &&
        (id.includes("poi") ||
          id.includes("place-label") ||
          id.includes("transit") ||
          id.includes("shop"))
      ) {
        map.setLayoutProperty(id, "visibility", "none");
      }
    } catch {
      // Unsupported layer property in this style version.
    }
  }
}
