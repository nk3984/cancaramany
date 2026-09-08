import type { PropertyId } from "@/data/properties";

export type HistoricPlanCategory =
  | "site"
  | "roof"
  | "floor"
  | "elevation"
  | "section"
  | "outbuilding";

export type HistoricPlanDrawing = {
  id: string;
  src: string;
  label: string;
  category: HistoricPlanCategory;
};

const base = "/images/can-caramany/historic-plans";

export const historicPlanCategories = [
  { id: "all", label: "All" },
  { id: "site", label: "Site" },
  { id: "floor", label: "Floor plans" },
  { id: "elevation", label: "Elevations" },
  { id: "section", label: "Sections" },
  { id: "outbuilding", label: "Outbuildings" },
] as const;

export type HistoricPlanFilterId = (typeof historicPlanCategories)[number]["id"];

export const historicPlansByProperty: Record<
  PropertyId,
  HistoricPlanDrawing[]
> = {
  "property-i": [
    { id: "i-01", src: `${base}/property-i/01-site-plan.jpg`, label: "Site plan", category: "site" },
    { id: "i-02", src: `${base}/property-i/02-roof-overview.jpg`, label: "Building and roof overview", category: "roof" },
    { id: "i-03", src: `${base}/property-i/03-roof-detail.jpg`, label: "Roof plan", category: "roof" },
    { id: "i-04", src: `${base}/property-i/04-ground-floor.jpg`, label: "Ground floor", category: "floor" },
    { id: "i-05", src: `${base}/property-i/05-upper-floor.jpg`, label: "Upper floor", category: "floor" },
    { id: "i-06", src: `${base}/property-i/06-ancillary-floor.jpg`, label: "Ancillary floor", category: "floor" },
    { id: "i-07", src: `${base}/property-i/07-elevation-north.jpg`, label: "North elevation", category: "elevation" },
    { id: "i-08", src: `${base}/property-i/08-elevation-south.jpg`, label: "South elevation", category: "elevation" },
    { id: "i-09", src: `${base}/property-i/09-elevation-east.jpg`, label: "East elevation", category: "elevation" },
    { id: "i-10", src: `${base}/property-i/10-elevation-west.jpg`, label: "West elevation", category: "elevation" },
    { id: "i-11", src: `${base}/property-i/11-section-aa.jpg`, label: "Section A–A", category: "section" },
    { id: "i-12", src: `${base}/property-i/12-section-bb.jpg`, label: "Section B–B", category: "section" },
    { id: "i-13", src: `${base}/property-i/13-section-cc-pool.jpg`, label: "Section C–C with pool", category: "section" },
    { id: "i-14", src: `${base}/property-i/14-garage-carport.jpg`, label: "Garage and carport", category: "outbuilding" },
  ],
  "property-ii": [
    { id: "ii-01", src: `${base}/property-ii/01-site-plan.jpg`, label: "Site plan", category: "site" },
    { id: "ii-02", src: `${base}/property-ii/02-roof-overview.jpg`, label: "Building and roof overview", category: "roof" },
    { id: "ii-03", src: `${base}/property-ii/03-roof-detail.jpg`, label: "Roof plan", category: "roof" },
    { id: "ii-04", src: `${base}/property-ii/04-ground-floor.jpg`, label: "Ground floor", category: "floor" },
    { id: "ii-05", src: `${base}/property-ii/05-upper-floor.jpg`, label: "Upper floor", category: "floor" },
    { id: "ii-06", src: `${base}/property-ii/06-ancillary-floor.jpg`, label: "Ancillary floor", category: "floor" },
    { id: "ii-07", src: `${base}/property-ii/07-elevation-1.jpg`, label: "Elevation 1", category: "elevation" },
    { id: "ii-08", src: `${base}/property-ii/08-elevation-2.jpg`, label: "Elevation 2", category: "elevation" },
    { id: "ii-09", src: `${base}/property-ii/09-elevation-3.jpg`, label: "Elevation 3", category: "elevation" },
    { id: "ii-10", src: `${base}/property-ii/10-elevation-4.jpg`, label: "Elevation 4", category: "elevation" },
    { id: "ii-11", src: `${base}/property-ii/11-section-1.jpg`, label: "Section 1", category: "section" },
    { id: "ii-12", src: `${base}/property-ii/12-section-2.jpg`, label: "Section 2", category: "section" },
    { id: "ii-13", src: `${base}/property-ii/13-garage-carport.jpg`, label: "Garage and carport", category: "outbuilding" },
  ],
  "property-iii": [
    { id: "iii-01", src: `${base}/property-iii/01-site-plan.jpg`, label: "Site plan", category: "site" },
    { id: "iii-02", src: `${base}/property-iii/02-buildings-grounds.jpg`, label: "Buildings and grounds", category: "site" },
    { id: "iii-03", src: `${base}/property-iii/03-ground-floor.jpg`, label: "Ground floor — main house", category: "floor" },
    { id: "iii-04", src: `${base}/property-iii/04-upper-floor.jpg`, label: "Upper floor — main house", category: "floor" },
    { id: "iii-05", src: `${base}/property-iii/05-elevation-1.jpg`, label: "Principal elevation 1", category: "elevation" },
    { id: "iii-06", src: `${base}/property-iii/06-elevation-2.jpg`, label: "Principal elevation 2", category: "elevation" },
    { id: "iii-07", src: `${base}/property-iii/07-elevation-3.jpg`, label: "Principal elevation 3", category: "elevation" },
    { id: "iii-08", src: `${base}/property-iii/08-section-main-house.jpg`, label: "Main house section", category: "section" },
    { id: "iii-09", src: `${base}/property-iii/09-elevation-grounds.jpg`, label: "Main house and grounds", category: "elevation" },
    { id: "iii-10", src: `${base}/property-iii/10-outbuilding-plans.jpg`, label: "Outbuilding plans", category: "outbuilding" },
    { id: "iii-11", src: `${base}/property-iii/11-outbuilding-elevations.jpg`, label: "Outbuilding elevations", category: "outbuilding" },
    { id: "iii-12", src: `${base}/property-iii/12-outbuilding-plans-2.jpg`, label: "Further outbuilding plans", category: "outbuilding" },
    { id: "iii-13", src: `${base}/property-iii/13-outbuilding-elevations-2.jpg`, label: "Further outbuilding elevations", category: "outbuilding" },
  ],
  "property-iv": [
    { id: "iv-01", src: `${base}/property-iv/01-site-plan.jpg`, label: "Site plan", category: "site" },
    { id: "iv-02", src: `${base}/property-iv/02-roof-overview.jpg`, label: "Building and roof overview", category: "roof" },
    { id: "iv-03", src: `${base}/property-iv/03-roof-detail.jpg`, label: "Roof plan", category: "roof" },
    { id: "iv-04", src: `${base}/property-iv/04-ground-floor.jpg`, label: "Ground floor", category: "floor" },
    { id: "iv-05", src: `${base}/property-iv/05-upper-floor.jpg`, label: "Upper floor", category: "floor" },
    { id: "iv-06", src: `${base}/property-iv/06-lower-floor.jpg`, label: "Lower floor", category: "floor" },
    { id: "iv-07", src: `${base}/property-iv/07-elevation-1.jpg`, label: "Elevation 1", category: "elevation" },
    { id: "iv-08", src: `${base}/property-iv/08-elevation-2.jpg`, label: "Elevation 2", category: "elevation" },
    { id: "iv-09", src: `${base}/property-iv/09-elevation-3.jpg`, label: "Elevation 3", category: "elevation" },
    { id: "iv-10", src: `${base}/property-iv/10-elevation-4.jpg`, label: "Elevation 4", category: "elevation" },
    { id: "iv-11", src: `${base}/property-iv/11-section-1.jpg`, label: "Section 1", category: "section" },
    { id: "iv-12", src: `${base}/property-iv/12-section-2.jpg`, label: "Section 2", category: "section" },
    { id: "iv-13", src: `${base}/property-iv/13-garage-carport.jpg`, label: "Garage and carport", category: "outbuilding" },
  ],
};

export const historicPlanDisclaimer =
  "Original architectural drawings. They record a previously prepared project and do not constitute current building rights. Any future development is subject to current planning regulations and all required approvals.";

export function filterHistoricPlans(
  drawings: HistoricPlanDrawing[],
  filter: HistoricPlanFilterId,
): HistoricPlanDrawing[] {
  if (filter === "all") return drawings;
  if (filter === "site") {
    return drawings.filter(
      (drawing) => drawing.category === "site" || drawing.category === "roof",
    );
  }
  return drawings.filter((drawing) => drawing.category === filter);
}
