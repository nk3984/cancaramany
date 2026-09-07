"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const moments = [
  {
    line: "Morning light across the countryside.",
    image: {
      label: "IMAGE REQUIRED — LIFESTYLE COUNTRYSIDE",
      alt: "Authentic Mallorcan countryside in soft morning light",
      aspect: "aspect-[16/10]",
    },
  },
  {
    line: "Afternoons by the pool.",
    image: {
      label: "IMAGE REQUIRED — LIFESTYLE COVE",
      alt: "Secluded east-coast cove on Mallorca",
      aspect: "aspect-[5/4]",
    },
  },
  {
    line: "Long lunches beneath shaded terraces.",
    image: {
      label: "IMAGE REQUIRED — LIFESTYLE DINING TERRACE",
      alt: "Shaded Mediterranean dining terrace in eastern Mallorca",
      aspect: "aspect-[16/10]",
    },
  },
  {
    line: "Evenings outdoors as the heat fades and the landscape becomes quiet again.",
    image: {
      label: "IMAGE REQUIRED — LIFESTYLE HARBOUR",
      alt: "Small harbour or marina on Mallorca’s east coast",
      aspect: "aspect-[5/4]",
    },
  },
];

export function LifestyleSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="lifestyle"
      ref={ref}
      className="overflow-hidden bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            The Mallorca Lifestyle
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12] text-[var(--color-charcoal)]">
            A different rhythm of life.
          </h2>
        </FadeIn>

        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          {moments.map((item, index) => (
            <div
              key={item.image.label}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >
              <FadeIn
                className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <motion.div style={{ y }}>
                  <ImagePlaceholder
                    label={item.image.label}
                    alt={item.image.alt}
                    aspect={item.image.aspect}
                  />
                </motion.div>
              </FadeIn>
              <FadeIn
                delay={0.1}
                className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="max-w-sm font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-charcoal)] sm:text-3xl">
                  {item.line}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-28">
          <FadeIn>
            <ImagePlaceholder
              label="IMAGE REQUIRED — LIFESTYLE VILLAGE"
              alt="Historic village architecture in eastern Mallorca"
              aspect="aspect-[16/11]"
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <ImagePlaceholder
              label="IMAGE REQUIRED — LIFESTYLE COASTAL GOLF"
              alt="Understated golf or coastal lifestyle setting in eastern Mallorca"
              aspect="aspect-[16/11]"
            />
          </FadeIn>
        </div>

        <FadeIn className="mt-20 max-w-3xl lg:mt-28">
          <p className="text-base leading-[1.9] text-[var(--color-deep-olive)] sm:text-lg">
            Mallorca combines natural beauty with sophisticated dining, historic
            towns, secluded beaches, marinas, golf and exceptional international
            accessibility.
          </p>
          <p className="mt-6 text-base leading-[1.9] text-[var(--color-deep-olive)] sm:text-lg">
            Can Caramany offers direct access to that lifestyle while retaining
            something that has become increasingly scarce on the island:
          </p>
          <p className="mt-8 font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-charcoal)] sm:text-3xl">
            space, authenticity and privacy.
          </p>
          <p className="mt-10 text-base leading-[1.85] text-[var(--color-deep-olive)]">
            This is not about being removed from Mallorca.
            <br />
            It is about experiencing more of it.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
