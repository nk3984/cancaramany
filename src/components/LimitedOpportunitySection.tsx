"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function LimitedOpportunitySection() {
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
            label="IMAGE REQUIRED — ESTATE AERIAL SCALE"
            alt="Wide aerial view of the Can Caramany estate showing scale and privacy between properties"
            aspect="h-full min-h-[100%] w-full"
            className="h-full min-h-[90vh] w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/62" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/35 to-[var(--color-charcoal)]/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1440px] flex-col justify-end px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-warm-stone)]">
            A Limited Opportunity
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.08]">
            Space of this scale is becoming increasingly rare.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/75 sm:text-lg">
            Can Caramany represents a limited collection of exceptional private
            properties, thoughtfully positioned within the Mallorcan landscape
            to preserve privacy, views and the natural character of the estate.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/75 sm:text-lg">
            Generous land, historic context and contemporary architectural
            potential come together to create something increasingly difficult
            to find on Mallorca:
          </p>
          <p className="mt-8 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3vw,2rem)] leading-snug text-[var(--color-white)]">
            a true private estate with room to breathe.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-[1.85] text-[var(--color-white)]/70">
            The opportunity is not simply to acquire land, but to shape a
            residence or family estate with a strong sense of place, permanence
            and identity.
          </p>
          <p className="mt-12 text-[11px] uppercase tracking-[0.24em] text-[var(--color-warm-stone)]">
            Four properties. One extraordinary setting.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
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
          <FadeIn delay={0.16}>
            <ImagePlaceholder
              label="IMAGE REQUIRED — LANDSCAPE SCALE SEPARATION"
              alt="Large landscape view showing scale and separation between properties at Can Caramany"
              aspect="aspect-[16/10]"
              className="bg-[var(--color-deep-olive)]/35"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
