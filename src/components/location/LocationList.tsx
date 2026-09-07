"use client";

import {
  featuredLocationList,
  getPointById,
  type LocationPoint,
} from "@/data/locations";

type LocationListProps = {
  selectedId: string | "estate" | null;
  onSelectEstate: () => void;
  onSelectLocation: (point: LocationPoint) => void;
};

export function LocationList({
  selectedId,
  onSelectEstate,
  onSelectLocation,
}: LocationListProps) {
  return (
    <div className="border-t border-[var(--color-warm-stone)]/70 pt-8">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]">
        Selected Destinations
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <button
            type="button"
            onClick={onSelectEstate}
            className={`flex w-full flex-col items-start border px-4 py-3.5 text-left transition-colors ${
              selectedId === "estate"
                ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)]/8"
                : "border-[var(--color-warm-stone)]/70 hover:border-[var(--color-charcoal)]/30"
            }`}
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-charcoal)]">
              Can Caramany
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-deep-olive)]/75">
              Historic finca · Property III
            </span>
          </button>
        </li>
        {featuredLocationList.map((item) => {
          const point = getPointById(item.pointId);
          if (!point) return null;

          return (
            <li key={item.pointId}>
              <button
                type="button"
                onClick={() => onSelectLocation(point)}
                className={`flex w-full flex-col items-start border px-4 py-3.5 text-left transition-colors ${
                  selectedId === point.id
                    ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-white)]"
                    : "border-[var(--color-warm-stone)]/70 hover:border-[var(--color-charcoal)]/30"
                }`}
              >
                <span
                  className={`text-[11px] uppercase tracking-[0.18em] ${
                    selectedId === point.id
                      ? "text-[var(--color-white)]"
                      : "text-[var(--color-charcoal)]"
                  }`}
                >
                  {point.name}
                </span>
                <span
                  className={`mt-1 text-[10px] uppercase tracking-[0.14em] ${
                    selectedId === point.id
                      ? "text-[var(--color-white)]/75"
                      : "text-[var(--color-deep-olive)]/75"
                  }`}
                >
                  {item.categoryLabel}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
