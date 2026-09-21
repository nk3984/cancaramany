"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useLocale } from "@/i18n/LocaleProvider";

export function LimitedOpportunitySection() {
  const { dict } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="opportunity"
      ref={ref}
      className="relative overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-white)]"
    >
      <div className="absolute inset-0">
        <motion.div style={{ y: imageY }} className="h-[120%] w-full">
          <ImagePlaceholder
            label="Estate landscape scale"
            alt="Wide view of the Can Caramany estate showing scale and privacy"
            aspect="h-full min-h-[100%] w-full"
            className="h-full min-h-[75vh] w-full"
            src="/images/can-caramany/landscape/landscape-open-fields.jpg"
            sizes="100vw"
            objectPosition="center 45%"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/62" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/35 to-[var(--color-charcoal)]/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-[1440px] flex-col justify-end px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-warm-stone)]">
            {dict.opportunity.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
            {dict.opportunity.headline}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/75 sm:text-lg">
            {dict.opportunity.p1}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/75 sm:text-lg">
            {dict.opportunity.p2}
          </p>
          <p className="mt-8 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3vw,2rem)] leading-snug text-[var(--color-white)]">
            {dict.opportunity.closing}
          </p>
          <p className="mt-12 text-[11px] uppercase tracking-[0.24em] text-[var(--color-warm-stone)]">
            {dict.opportunity.tagline}
          </p>
        </FadeIn>

        <div className="mt-16 max-w-md">
          <FadeIn delay={0.1}>
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-white)]">
              <Image
                src="/images/can-caramany/estate/estate-masterplan.png"
                alt="Estate masterplan showing the four properties within Can Caramany"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-3"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
