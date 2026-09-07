"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const fragments = ["Stone", "Land", "Light", "Space", "Silence"];

const images = [
  {
    label: "IMAGE REQUIRED — OPEN FIELDS",
    alt: "Open agricultural fields within Can Caramany",
    src: "/images/can-caramany/landscape/landscape-open-fields.jpg",
    caption: "Open land",
    className: "lg:col-span-12",
    aspect: "aspect-[16/10] lg:aspect-[21/9]",
    objectPosition: "center 78%",
  },
  {
    label: "IMAGE REQUIRED — OLIVE GROVE",
    alt: "Mature trees and dry-stone walls on the Can Caramany landholding",
    src: "/images/can-caramany/landscape/landscape-olive-grove.jpg",
    caption: "Mediterranean planting",
    className: "lg:col-span-7",
    aspect: "aspect-[5/4]",
    objectPosition: "center 42%",
  },
  {
    label: "IMAGE REQUIRED — ESTATE PATH",
    alt: "Shaded estate path between dry-stone walls and holm oaks",
    src: "/images/can-caramany/landscape/landscape-estate-path.jpg",
    caption: "Estate paths",
    className: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    objectPosition: "center",
  },
  {
    label: "IMAGE REQUIRED — HOLM OAKS",
    alt: "Mature holm oaks on the Can Caramany estate",
    src: "/images/can-caramany/landscape/landscape-holm-oaks.jpg",
    caption: "Holm oaks",
    className: "lg:col-span-12",
    aspect: "aspect-[16/10] lg:aspect-[2/1]",
    objectPosition: "center 45%",
  },
  {
    label: "IMAGE REQUIRED — STONE WALL",
    alt: "Traditional dry-stone wall across Can Caramany countryside",
    src: "/images/can-caramany/landscape/landscape-stone-wall.jpg",
    caption: "Dry-stone walls",
    className: "lg:col-span-5 lg:col-start-8",
    aspect: "aspect-[4/5]",
    objectPosition: "center 30%",
  },
] as const;

export function LandscapeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <section
      ref={ref}
      id="landscape"
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
              Ancient holm oaks, almond and olive trees, traditional dry-stone
              walls and open agricultural land define Can Caramany. The
              landholding opens to the southwest — morning light and evening
              light across the same terrain.
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

        <div className="mt-16 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
          {images.map((image, index) => (
            <FadeIn
              key={image.label}
              delay={index * 0.06}
              className={image.className}
            >
              <ImagePlaceholder
                label={image.label}
                alt={image.alt}
                src={image.src}
                aspect={image.aspect}
                objectPosition={image.objectPosition}
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/80">
                {image.caption}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
