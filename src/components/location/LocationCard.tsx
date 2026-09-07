"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  buildExternalMapUrl,
  CAN_CARAMANY_ESTATE_REFERENCE,
  formatDistance,
  formatEstateCoordinates,
  getCategoryLabel,
  type LocationPoint,
} from "@/data/locations";

export type MapSelection =
  | { type: "estate" }
  | { type: "location"; point: LocationPoint };

type LocationCardProps = {
  selection: MapSelection;
  onClose?: () => void;
  variant?: "floating" | "bottom-sheet";
};

const estateDescription =
  "Map reference point: the historic Mallorcan finca at the heart of Property III — the defining centre of the Can Caramany private estate in eastern Mallorca.";

export function LocationCard({
  selection,
  onClose,
  variant = "floating",
}: LocationCardProps) {
  const isEstate = selection.type === "estate";
  const point = selection.type === "location" ? selection.point : null;
  const distance = point ? formatDistance(point) : null;

  const externalUrl = isEstate
    ? buildExternalMapUrl(
        CAN_CARAMANY_ESTATE_REFERENCE.latitude,
        CAN_CARAMANY_ESTATE_REFERENCE.longitude,
      )
    : point
      ? buildExternalMapUrl(point.latitude, point.longitude)
      : undefined;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isEstate ? "estate" : point?.id}
        initial={{ opacity: 0, y: variant === "bottom-sheet" ? 16 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: variant === "bottom-sheet" ? 16 : 8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={`border border-[var(--color-warm-stone)]/80 bg-[var(--color-white)]/97 shadow-[0_12px_40px_rgba(32,33,31,0.08)] backdrop-blur-sm ${
          variant === "bottom-sheet"
            ? "rounded-t-sm p-5 sm:p-6"
            : "p-6 sm:p-7"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-terracotta)]">
              {isEstate
                ? CAN_CARAMANY_ESTATE_REFERENCE.label
                : getCategoryLabel(point!.category)}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] sm:text-2xl">
              {isEstate ? CAN_CARAMANY_ESTATE_REFERENCE.mapLabel : point!.name}
            </h3>
            {isEstate ? (
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]/75">
                {CAN_CARAMANY_ESTATE_REFERENCE.mapSubtitle}
              </p>
            ) : null}
          </div>
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/70 hover:text-[var(--color-charcoal)] lg:hidden"
              aria-label="Close location details"
            >
              Close
            </button>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]">
          {isEstate ? estateDescription : point!.description}
        </p>

        {isEstate ? (
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-[var(--color-charcoal)]">
            {formatEstateCoordinates()}
          </p>
        ) : null}

        {distance ? (
          <p className="mt-4 text-sm text-[var(--color-charcoal)]">{distance}</p>
        ) : null}

        {point?.driveTimeMinutes ? (
          <p className="mt-1 text-sm text-[var(--color-deep-olive)]">
            Approx. {point.driveTimeMinutes} min
          </p>
        ) : null}

        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-[10px] uppercase tracking-[0.2em] text-[var(--color-charcoal)] underline-offset-4 hover:underline"
            onClick={(event) => event.stopPropagation()}
          >
            View in Maps →
          </a>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
