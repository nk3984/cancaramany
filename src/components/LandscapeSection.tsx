"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const fragments = ["Stone", "Land", "Light", "Space", "Silence"];

const images = [
  {
    label: "IMAGE REQUIRED — HOLM OAKS",
    alt: "Mature holm oaks on the Can Caramany estate",
    src: "/images/can-caramany/landscape/landscape-holm-oaks.jpg",
    className: "lg:col-span-7",
  },
  {
    label: "IMAGE REQUIRED — STONE WALL",
    alt: "Traditional dry-stone wall across Can Caramany countryside",
    src: "/images/can-caramany/landscape/landscape-stone-wall.jpg",
    className: "lg:col-span-5 lg:mt-24",
  },
  {
    label: "IMAGE REQUIRED — OPEN FIELDS",
    alt: "Open agricultural fields within Can Caramany",
    src: "/images/can-caramany/landscape/landscape-open-fields.jpg",
    className: "lg:col-span-5",
  },
  {
    label: "IMAGE REQUIRED — OLIVE GROVE",
    alt: "Mature trees and open land on the Can Caramany landholding",
    src: "/images/can-caramany/landscape/landscape-olive-grove.jpg",
    className: "lg:col-span-7 lg:-mt-16",
  },
];

export function LandscapeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <FadeIn className="lg:col-span-7">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
              Landscape
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-[var(--color-charcoal)]">
              The landscape is the luxury.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-base leading-[1.8] text-[var(--color-deep-olive)]">
              Ancient holm oaks, traditional dry-stone walls, open agricultural
              land and naturally changing terrain define Can Caramany.
            </p>
            <p className="mt-4 max-w-md text-base leading-[1.8] text-[var(--color-deep-olive)]">
              The estate does not attempt to recreate Mallorca’s rural character.
              It is part of it.
            </p>
          </FadeIn>
        </div>

        <motion.div
          style={{ y }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 sm:mt-16"
        >
          {fragments.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.55 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              className="font-[family-name:var(--font-serif)] text-2xl uppercase tracking-[0.12em] text-[var(--color-charcoal)] sm:text-3xl"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {images.map((image, index) => (
            <FadeIn
              key={image.label}
              delay={index * 0.08}
              className={image.className}
            >
              <ImagePlaceholder
                label={image.label}
                alt={image.alt}
                src={image.src}
                aspect={index % 2 === 0 ? "aspect-[5/4]" : "aspect-[4/5]"}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
