"use client";

import type { LocationPoint } from "@/data/locations";

type EstateMarkerProps = {
  selected: boolean;
  onClick: () => void;
};

export function EstateMarker({ selected, onClick }: EstateMarkerProps) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="group relative border-0 bg-transparent p-0"
      aria-label="Can Caramany estate — historic finca, Property III"
    >
      {/* Geographic anchor: centre of this dot sits exactly on 39.64149, 3.22964 */}
      <span
        className={`relative flex items-center justify-center rounded-full border border-[var(--color-terracotta)]/45 bg-[var(--color-terracotta)]/10 transition-all duration-300 ${
          selected
            ? "h-9 w-9"
            : "h-7 w-7 group-hover:h-8 group-hover:w-8"
        }`}
      >
        <span
          className={`rounded-full bg-[var(--color-terracotta)] shadow-sm transition-transform duration-300 ${
            selected ? "h-3.5 w-3.5" : "h-3 w-3 group-hover:scale-110"
          }`}
        />
      </span>

      <span className="pointer-events-none absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 whitespace-nowrap text-center">
        <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--color-charcoal)] sm:text-[10px]">
          CAN CARAMANY
        </span>
        <span className="mt-0.5 block text-[8px] uppercase tracking-[0.14em] text-[var(--color-deep-olive)]/80 sm:text-[9px]">
          Historic finca · Property III
        </span>
      </span>
    </button>
  );
}

type DestinationMarkerProps = {
  point: LocationPoint;
  selected: boolean;
  onClick: () => void;
};

export function DestinationMarker({
  point,
  selected,
  onClick,
}: DestinationMarkerProps) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="group border-0 bg-transparent p-0"
      aria-label={point.name}
    >
      <span
        className={`block rounded-full bg-[var(--color-deep-olive)] shadow-sm ring-2 ring-[var(--color-white)] transition-all duration-300 ${
          selected
            ? "h-3.5 w-3.5 scale-125 ring-[var(--color-deep-olive)]/20"
            : "h-2.5 w-2.5 group-hover:scale-125 group-hover:bg-[var(--color-charcoal)]"
        }`}
      />
    </button>
  );
}
