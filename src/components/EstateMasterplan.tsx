"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  DEFAULT_ESTATE_PROPERTY_INDEX,
  ESTATE_PLAN_IMAGE,
  ESTATE_VIEWBOX,
  estateParcels,
  type EstateParcel,
} from "@/data/estate-plan";
import { properties } from "@/data/properties";

function parcelFill(
  parcel: EstateParcel,
  selected: boolean,
  hovered: boolean,
): string {
  if (!parcel.selectable) {
    return "rgba(32,33,31,0.10)";
  }
  if (selected) {
    return "rgba(154,101,77,0.20)";
  }
  if (hovered) {
    return "rgba(154,101,77,0.14)";
  }
  return "rgba(56,61,49,0.015)";
}

function parcelStroke(
  parcel: EstateParcel,
  selected: boolean,
  hovered: boolean,
): string {
  if (!parcel.selectable) {
    return "rgba(32,33,31,0.35)";
  }
  if (selected || hovered) {
    return "#9A654D";
  }
  return "#20211F";
}

function parcelStrokeWidth(selected: boolean, hovered: boolean): number {
  if (selected) return 5;
  if (hovered) return 4.5;
  return 3.5;
}

export function EstateMasterplan() {
  const [active, setActive] = useState<number>(DEFAULT_ESTATE_PROPERTY_INDEX);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeProperty = properties[active];
  const { width, height } = ESTATE_VIEWBOX;

  return (
    <section
      id="overview"
      className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            Estate Overview
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-[var(--color-charcoal)]">
            One estate. Four independent properties.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-deep-olive)]">
            The land was divided so that each holding could stand alone — its
            own privacy, its own house, its own relationship to the landscape.
            Properties I, II and IV received building permits for complete
            villas. Property III holds the historic finca and a rehabilitation
            proposal. Those permits were not renewed after the project was
            postponed. Select a plot to explore it.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]/75">
            Property V appears on the plan for geographic context only and is
            not offered.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-start gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-8">
            <div className="overflow-hidden border border-[var(--color-warm-stone)]/70 bg-[var(--color-white)]">
              <svg
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="xMidYMid meet"
                className="h-auto w-full"
                role="img"
                aria-label="Interactive Can Caramany estate overview plan"
              >
                <title>Can Caramany Estate Masterplan</title>
                <desc>
                  Historic estate plan with interactive Properties I to IV.
                  Property V is shown for geographic context only.
                </desc>

                <rect width={width} height={height} fill="#FAF9F6" />

                <image
                  href={ESTATE_PLAN_IMAGE}
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  preserveAspectRatio="xMidYMid meet"
                />

                {estateParcels.map((parcel) => {
                  const isSelected =
                    parcel.selectable && parcel.propertyIndex === active;
                  const isHovered = hoveredId === parcel.id;
                  const selectable = parcel.selectable;

                  return (
                    <path
                      key={parcel.id}
                      id={parcel.id}
                      d={parcel.path}
                      data-property={parcel.roman}
                      fill={parcelFill(parcel, isSelected, isHovered)}
                      stroke={parcelStroke(parcel, isSelected, isHovered)}
                      strokeWidth={parcelStrokeWidth(isSelected, isHovered)}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      opacity={selectable ? 1 : 0.72}
                      className={
                        selectable
                          ? "cursor-pointer transition-[fill,stroke-width,stroke] duration-200"
                          : "cursor-default"
                      }
                      style={{ pointerEvents: selectable ? "auto" : "none" }}
                      tabIndex={selectable ? 0 : undefined}
                      role={selectable ? "button" : undefined}
                      aria-label={
                        selectable
                          ? `Select Property ${parcel.roman}`
                          : undefined
                      }
                      aria-pressed={selectable ? isSelected : undefined}
                      onMouseEnter={() => {
                        if (!selectable) return;
                        setHoveredId(parcel.id);
                      }}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => {
                        if (!selectable || parcel.propertyIndex === null) return;
                        setHoveredId(parcel.id);
                        setActive(parcel.propertyIndex);
                      }}
                      onBlur={() => setHoveredId(null)}
                      onClick={() => {
                        if (!selectable || parcel.propertyIndex === null) return;
                        setActive(parcel.propertyIndex);
                      }}
                      onKeyDown={(event) => {
                        if (!selectable || parcel.propertyIndex === null) return;
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActive(parcel.propertyIndex);
                        }
                      }}
                    >
                      {!selectable ? (
                        <title>
                          Property V — historic context only; not part of the
                          current offering
                        </title>
                      ) : null}
                    </path>
                  );
                })}
              </svg>

              <div className="flex flex-col gap-2 border-t border-[var(--color-warm-stone)]/50 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/70">
                  Historic estate plan · Select a property to explore
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-deep-olive)]/55">
                  Property V shown for context · not part of the current offering
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProperty.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="border border-[var(--color-warm-stone)]/80 bg-[var(--color-white)] p-7 sm:p-8"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
                  {activeProperty.isHistoricFinca
                    ? activeProperty.specialLabel
                    : activeProperty.label}
                </p>

                <p className="mt-5 font-[family-name:var(--font-serif)] text-3xl text-[var(--color-charcoal)]">
                  {activeProperty.areaDisplay}
                </p>

                {activeProperty.isHistoricFinca ? (
                  <span className="mt-4 inline-flex border border-[var(--color-terracotta)]/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">
                    Historic Finca
                  </span>
                ) : null}

                <p className="mt-6 font-[family-name:var(--font-serif)] text-xl leading-snug text-[var(--color-charcoal)]">
                  {activeProperty.headline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-terracotta)]">
                  {activeProperty.projectLine}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-[var(--color-warm-stone)]/60 pt-6">
                  {activeProperty.descriptors.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-[var(--color-deep-olive)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={activeProperty.href}
                  className="mt-8 inline-flex border border-[var(--color-charcoal)] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]"
                >
                  {activeProperty.cta}
                </Link>
              </motion.div>
            </AnimatePresence>

            <ul className="mt-6 space-y-2">
              {properties.map((property, index) => (
                <li key={property.id}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={`flex w-full items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${
                      active === index
                        ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-white)]"
                        : "border-[var(--color-warm-stone)]/70 text-[var(--color-deep-olive)] hover:border-[var(--color-charcoal)]/40"
                    }`}
                  >
                    <span className="tracking-[0.08em]">
                      Property {property.roman}
                    </span>
                    <span className="text-xs opacity-80">
                      {property.acres.toFixed(2)} acres
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
