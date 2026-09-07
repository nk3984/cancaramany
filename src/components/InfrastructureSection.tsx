"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { contentFacts } from "@/data/content-facts";

const pillars = [
  {
    title: "Water",
    headline: "Existing private borehole",
    copy: contentFacts.infrastructure.water,
  },
  {
    title: "Power",
    headline: "Existing electrical infrastructure",
    copy: contentFacts.infrastructure.electricity,
  },
  {
    title: "Access",
    headline: "Established internal access",
    copy: contentFacts.infrastructure.access,
  },
] as const;

export function InfrastructureSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            Infrastructure
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
            Established Foundations.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 border-t border-[var(--color-warm-stone)]/70 pt-12 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.08}>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
                {pillar.title}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-charcoal)]">
                {pillar.headline}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]">
                {pillar.copy}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 max-w-3xl border-t border-[var(--color-warm-stone)]/70 pt-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
            Historic infrastructure concept
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]">
            {contentFacts.infrastructure.wastewaterHistoric}
          </p>
        </FadeIn>

        <FadeIn className="mt-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border border-[var(--color-charcoal)] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]"
          >
            Request Technical Documentation
          </button>
        </FadeIn>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Request Technical Documentation"
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
