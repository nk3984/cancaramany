"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const blocks = [
  {
    copy: "The architectural vision for Can Caramany draws inspiration from Mallorca’s great country houses: natural stone façades, warm timber, shaded terraces, protected courtyards and simple, timeless proportions.",
    image: {
      label: "IMAGE REQUIRED — RESIDENCE STONE FACADE",
      alt: "Conceptual Can Caramany residence with natural stone façade and timber accents",
      aspect: "aspect-[4/5]",
    },
    reverse: false,
  },
  {
    copy: "The emphasis is not on excess, but on proportion, materiality and a strong connection to the surrounding landscape.",
    image: {
      label: "IMAGE REQUIRED — RESIDENCE COURTYARD",
      alt: "Conceptual shaded courtyard with natural stone and warm timber at Can Caramany",
      aspect: "aspect-[5/4]",
    },
    reverse: true,
  },
  {
    copy: "Interior spaces are conceived around natural light, long views and an effortless relationship between inside and outside.",
    image: {
      label: "IMAGE REQUIRED — RESIDENCE INDOOR OUTDOOR",
      alt: "Conceptual indoor-outdoor living space opening to the Can Caramany landscape",
      aspect: "aspect-[16/11]",
    },
    reverse: false,
  },
  {
    copy: "Expansive terraces, private pools and landscaped grounds form a natural extension of the residences and allow each home to sit quietly within its surroundings.",
    image: {
      label: "IMAGE REQUIRED — RESIDENCE TERRACE POOL",
      alt: "Conceptual understated terrace and private pool set within the Can Caramany landscape",
      aspect: "aspect-[5/4]",
    },
    reverse: true,
  },
];

export function ResidencesSection() {
  return (
    <section
      id="residences"
      className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            Architectural Vision
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12] text-[var(--color-charcoal)]">
            The Residences
          </h2>
          <p className="mt-6 font-[family-name:var(--font-serif)] text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug text-[var(--color-charcoal)]">
            Traditional Character. Modern Refinement.
          </p>
        </FadeIn>

        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-36">
          {blocks.map((block, index) => (
            <ResidenceBlock key={block.image.label} block={block} index={index} />
          ))}
        </div>

        <FadeIn className="mt-24 max-w-2xl lg:mt-32">
          <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-charcoal)] sm:text-3xl">
            Every element should feel considered, enduring and unmistakably
            Mallorcan.
          </p>
          <p className="mt-10 max-w-xl text-[11px] leading-relaxed tracking-[0.04em] text-[var(--color-deep-olive)]/75">
            Architectural vision and historic studies only. Previous permits may
            have expired and do not constitute current building rights. Final
            design and any development remain subject to independent technical
            and legal review and all required approvals.             See our{" "}
            <Link href="/legal" className="underline underline-offset-2">
              Legal Disclaimer
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function ResidenceBlock({
  block,
  index,
}: {
  block: (typeof blocks)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <FadeIn
        delay={0.05}
        className={`lg:col-span-7 ${block.reverse ? "lg:order-2" : ""}`}
      >
        <motion.div style={{ y }}>
          <ImagePlaceholder
            label={block.image.label}
            alt={block.image.alt}
            aspect={block.image.aspect}
          />
        </motion.div>
      </FadeIn>
      <FadeIn
        delay={0.12}
        className={`lg:col-span-5 ${block.reverse ? "lg:order-1" : ""} ${
          index % 2 === 0 ? "lg:pt-8" : "lg:pb-8"
        }`}
      >
        <p className="max-w-md text-base leading-[1.9] text-[var(--color-deep-olive)] sm:text-lg">
          {block.copy}
        </p>
      </FadeIn>
    </div>
  );
}
