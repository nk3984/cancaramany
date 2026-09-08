"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const stages = [
  {
    id: "existing",
    label: "Existing",
    imageLabel: "IMAGE REQUIRED — FINCA EXISTING",
    alt: "Existing historic Mallorcan finca at Can Caramany",
    src: "/images/can-caramany/historic-finca/finca-existing-exterior.jpg",
    note: null,
  },
  {
    id: "study",
    label: "Original Proposal",
    imageLabel: "IMAGE REQUIRED — HISTORIC STUDY 01",
    alt: "Original architectural proposal for the Can Caramany finca, north façade",
    src: "/images/can-caramany/property-03/vision/facade.png",
    note: "Historic rehabilitation study. Not a current building right.",
  },
  {
    id: "vision",
    label: "Vision",
    imageLabel: "IMAGE REQUIRED — CONCEPTUAL VISION",
    alt: "Conceptual visualization of the historic finca terrace and pool",
    src: "/images/can-caramany/property-03/vision/pool.png",
    note: "Conceptual visualization. Subject to planning, technical review and applicable approvals. Previous permits were not renewed and do not constitute current building rights.",
  },
] as const;

const details = [
  {
    label: "IMAGE REQUIRED — FINCA STONE DETAIL",
    alt: "Close-up of historic stone masonry at the Can Caramany finca",
    src: "/images/can-caramany/historic-finca/finca-detail-stone.jpg",
  },
  {
    label: "IMAGE REQUIRED — FINCA DOOR DETAIL",
    alt: "Historic door detail of the Mallorcan finca",
    src: "/images/can-caramany/historic-finca/finca-detail-door.jpg",
  },
  {
    label: "IMAGE REQUIRED — FINCA OPENING",
    alt: "Architectural opening in the historic finca structure",
    src: "/images/can-caramany/historic-finca/finca-detail-opening.jpg",
  },
] as const;

export function HistoricFincaSection() {
  const [stage, setStage] = useState(0);
  const current = stages[stage];

  return (
    <section
      id="heritage"
      className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5 lg:pt-8">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
              Historic Finca
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.12] text-[var(--color-charcoal)]">
              The house that gives the estate its name.
            </h2>
            <p className="mt-8 max-w-md text-base leading-[1.85] text-[var(--color-deep-olive)]">
              At the heart of Property III stands the historic Mallorcan finca
              — stone, timber and tiled roofs that have belonged to this land
              for generations. It is rare, authentic, and impossible to
              reproduce.
            </p>
            <p className="mt-4 max-w-md text-base leading-[1.85] text-[var(--color-deep-olive)]">
              A full rehabilitation was drawn for the house: a country
              residence of real presence, with annexes, terrace and pool. The
              project was later set aside. The finca remains the architectural
              soul of Can Caramany — and a starting point, not a finished
              permit.
            </p>

            <div className="mt-12 flex flex-wrap gap-2">
              {stages.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setStage(index)}
                  className={`px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    stage === index
                      ? "bg-[var(--color-charcoal)] text-[var(--color-white)]"
                      : "border border-[var(--color-warm-stone)] text-[var(--color-deep-olive)] hover:border-[var(--color-charcoal)]/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {details.map((item) => (
                <ImagePlaceholder
                  key={item.label}
                  label={item.label}
                  alt={item.alt}
                  src={item.src}
                  aspect="aspect-square"
                  sizes="(max-width: 640px) 45vw, 200px"
                />
              ))}
            </div>
            <Link
              href="/properties/property-iii"
              className="mt-10 inline-flex border border-[var(--color-charcoal)] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]"
            >
              Discover Property III
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <ImagePlaceholder
                    label={current.imageLabel}
                    alt={current.alt}
                    src={current.src}
                    aspect="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </motion.div>
              </AnimatePresence>
              {current.note ? (
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]/80">
                  {current.note}
                </p>
              ) : null}
              <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]">
                <span className={stage === 0 ? "text-[var(--color-charcoal)]" : ""}>
                  Existing
                </span>
                <span className="h-px w-8 bg-[var(--color-warm-stone)]" />
                <span className={stage === 1 ? "text-[var(--color-charcoal)]" : ""}>
                  Original Proposal
                </span>
                <span className="h-px w-8 bg-[var(--color-warm-stone)]" />
                <span className={stage === 2 ? "text-[var(--color-charcoal)]" : ""}>
                  Conceptual Vision
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
