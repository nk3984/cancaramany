"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { useLocale } from "@/i18n/LocaleProvider";

export function PlanningSection() {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="planning"
      className="relative overflow-hidden bg-[var(--color-charcoal)] px-5 py-24 text-[var(--color-white)] sm:px-8 sm:py-32 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c8ba9a 0%, transparent 45%), radial-gradient(circle at 80% 70%, #9a654d 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-warm-stone)]">
            {dict.planning.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.12]">
            {dict.planning.headline}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/75 sm:text-lg">
            {dict.planning.p1}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/75 sm:text-lg">
            {dict.planning.p2}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-10 border-t border-[var(--color-white)]/15 pt-12 md:grid-cols-3 md:gap-8">
          {dict.planning.pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.08}>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-warm-stone)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-serif)] text-2xl leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-white)]/65">
                {pillar.copy}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 max-w-3xl">
          <p className="text-xs leading-relaxed text-[var(--color-white)]/45">
            {dict.planning.note}
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-10 inline-flex border border-[var(--color-white)]/40 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-charcoal)]"
          >
            {dict.planning.cta}
          </button>
        </FadeIn>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={dict.planning.cta}
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
