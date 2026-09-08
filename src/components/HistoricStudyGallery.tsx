"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  filterHistoricPlans,
  historicPlanCategories,
  type HistoricPlanDrawing,
  type HistoricPlanFilterId,
} from "@/data/historic-plans";
import { contentFacts } from "@/data/content-facts";

type HistoricStudyGalleryProps = {
  drawings: HistoricPlanDrawing[];
  roman: string;
  tone?: "light" | "dark";
  variant?: "former-permit" | "rehabilitation";
};

export function HistoricStudyGallery({
  drawings,
  roman,
  tone = "light",
  variant = "former-permit",
}: HistoricStudyGalleryProps) {
  const [filter, setFilter] = useState<HistoricPlanFilterId>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible = useMemo(
    () => filterHistoricPlans(drawings, filter),
    [drawings, filter],
  );
  const activeIndex = visible.findIndex((drawing) => drawing.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowRight" && activeIndex < visible.length - 1) {
        setActiveId(visible[activeIndex + 1].id);
      }
      if (event.key === "ArrowLeft" && activeIndex > 0) {
        setActiveId(visible[activeIndex - 1].id);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, activeIndex, visible]);

  const isDark = tone === "dark";
  const intro =
    variant === "rehabilitation"
      ? contentFacts.copy.galleryRehabilitation
      : contentFacts.copy.galleryFormerPermit;
  const eyebrow =
    variant === "rehabilitation"
      ? "Original rehabilitation proposal"
      : "Formerly permitted project";

  return (
    <div>
      <FadeIn>
        <p
          className={`text-[11px] uppercase tracking-[0.24em] ${
            isDark ? "text-[var(--color-warm-stone)]" : "text-[var(--color-terracotta)]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1.15] ${
            isDark ? "text-[var(--color-white)]" : "text-[var(--color-charcoal)]"
          }`}
        >
          Property {roman} drawings
        </h2>
        <p
          className={`mt-6 max-w-2xl text-sm leading-relaxed ${
            isDark ? "text-[var(--color-white)]/70" : "text-[var(--color-deep-olive)]"
          }`}
        >
          {intro}
        </p>
      </FadeIn>

      <div className="mt-8 flex flex-wrap gap-2">
        {historicPlanCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setFilter(category.id)}
            className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] transition-colors sm:text-[11px] ${
              filter === category.id
                ? isDark
                  ? "bg-[var(--color-white)] text-[var(--color-charcoal)]"
                  : "bg-[var(--color-charcoal)] text-[var(--color-white)]"
                : isDark
                  ? "border border-[var(--color-white)]/25 text-[var(--color-white)]/80 hover:border-[var(--color-white)]/50"
                  : "border border-[var(--color-warm-stone)] text-[var(--color-deep-olive)] hover:border-[var(--color-charcoal)]/40"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((drawing, index) => (
          <FadeIn key={drawing.id} delay={Math.min(index, 6) * 0.04}>
            <button
              type="button"
              onClick={() => setActiveId(drawing.id)}
              className={`group w-full text-left ${
                isDark ? "text-[var(--color-warm-stone)]" : "text-[var(--color-deep-olive)]"
              }`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-[var(--color-white)]">
                <Image
                  src={drawing.src}
                  alt={`Historic ${drawing.label} for Property ${roman}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </span>
              <span className="mt-3 block text-[11px] uppercase tracking-[0.16em]">
                {drawing.label}
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[90] flex h-full flex-col bg-[var(--color-charcoal)]/92"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-warm-stone)]">
                  Property {roman} · Original drawings
                </p>
                <p className="mt-1 font-[family-name:var(--font-serif)] text-xl text-[var(--color-white)]">
                  {active.label}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-white)]/80 hover:text-[var(--color-white)]"
              >
                Close
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto px-4 pb-4 sm:px-8">
              {/* Native img keeps drawing text sharp at full scan resolution. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={`Historic ${active.label} for Property ${roman}`}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <button
                type="button"
                disabled={activeIndex <= 0}
                onClick={() => setActiveId(visible[activeIndex - 1]?.id ?? null)}
                className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-white)]/80 disabled:opacity-30"
              >
                Previous
              </button>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-warm-stone)]">
                {activeIndex + 1} / {visible.length} · Click the drawing to enlarge
                it · Not a current building permit
              </p>
              <button
                type="button"
                disabled={activeIndex >= visible.length - 1}
                onClick={() => setActiveId(visible[activeIndex + 1]?.id ?? null)}
                className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-white)]/80 disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
