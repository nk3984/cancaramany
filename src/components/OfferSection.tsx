"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { EstateStats } from "@/components/EstateStats";
import { useLocale } from "@/i18n/LocaleProvider";

export function OfferSection() {
  const { dict } = useLocale();

  return (
    <section
      id="estate"
      className="relative bg-[var(--color-background)] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <FadeIn>
            <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
              {dict.offer.eyebrow}
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] text-[var(--color-charcoal)]">
              {dict.offer.headline}
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
              {dict.offer.p1}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
              {dict.offer.p2}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-[var(--color-deep-olive)]/70">
              {dict.common.areaCaveat}
            </p>
          </FadeIn>
        </div>

        <div className="mt-24 sm:mt-28">
          <EstateStats />
        </div>
      </div>
    </section>
  );
}
