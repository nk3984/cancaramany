"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { locationEditorials } from "@/data/locations";
import { useLocale } from "@/i18n/LocaleProvider";

const InteractiveLocationMap = dynamic(
  () => import("@/components/location/InteractiveLocationMap"),
  {
    ssr: false,
    loading: () => (
      <div className="mt-8 flex h-[520px] items-center justify-center border border-[var(--color-warm-stone)]/70 bg-[var(--color-background)] sm:h-[560px] lg:h-[700px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]/70">
          …
        </p>
      </div>
    ),
  },
);

export function LocationSection() {
  const { dict } = useLocale();

  return (
    <section
      id="location"
      className="bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            {dict.location.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.12] text-[var(--color-charcoal)]">
            {dict.location.headline}
          </h2>
          <p className="mt-8 text-base leading-[1.8] text-[var(--color-deep-olive)]">
            {dict.location.p1}
          </p>
          <p className="mt-4 text-base leading-[1.8] text-[var(--color-deep-olive)]">
            {dict.location.p2}
          </p>
        </FadeIn>

        <FadeIn className="mt-14">
          <InteractiveLocationMap />
        </FadeIn>

        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4 lg:gap-8">
          {locationEditorials.map((block, index) => (
            <FadeIn key={block.id} delay={index * 0.08}>
              <ImagePlaceholder
                label={block.title}
                alt={block.imageAlt}
                src={block.image}
                aspect="aspect-[4/5]"
                objectPosition={block.objectPosition}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-terracotta)]">
                {block.title}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl leading-snug text-[var(--color-charcoal)]">
                {block.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-deep-olive)]">
                {block.copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
