"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { useDictionary } from "@/i18n/locale-context";

export function InfrastructureSection() {
  const dictionary = useDictionary();
  const copy = dictionary.infrastructure;
  const [open, setOpen] = useState(false);

  const pillars = [
    { key: "water" as const, ...copy.pillars.water },
    { key: "power" as const, ...copy.pillars.power },
    { key: "access" as const, ...copy.pillars.access },
  ];

  return (
    <section className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            {copy.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
            {copy.headline}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 border-t border-[var(--color-warm-stone)]/70 pt-12 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.key} delay={index * 0.08}>
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
            {copy.historicEyebrow}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]">
            {copy.wastewaterHistoric}
          </p>
        </FadeIn>

        <FadeIn className="mt-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border border-[var(--color-charcoal)] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]"
          >
            {copy.cta}
          </button>
        </FadeIn>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={copy.modalTitle}
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
