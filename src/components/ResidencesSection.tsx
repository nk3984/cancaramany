"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { residenceVisions } from "@/data/residence-visions";
import {
  localePath,
  useDictionary,
  useLocale,
} from "@/i18n/locale-context";

export function ResidencesSection() {
  const dictionary = useDictionary();
  const locale = useLocale();
  const copy = dictionary.residences;

  return (
    <section
      id="residences"
      className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="max-w-3xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            {copy.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12] text-[var(--color-charcoal)]">
            {copy.headline}
          </h2>
          <p className="mt-6 font-[family-name:var(--font-serif)] text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug text-[var(--color-charcoal)]">
            {copy.subhead}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[var(--color-deep-olive)]">
            {copy.lead}
          </p>
        </FadeIn>

        <div className="mt-20 space-y-28 lg:mt-28 lg:space-y-36">
          {residenceVisions.map((property, index) => {
            const card = dictionary.residencesCards[property.id];
            return (
              <article key={property.id}>
                <div
                  className={`grid items-end gap-8 lg:grid-cols-12 lg:gap-14 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <FadeIn className="lg:col-span-7">
                    <ImagePlaceholder
                      label={`Property ${property.roman} vision`}
                      alt={card.alts[0]}
                      src={property.visions[0].src}
                      aspect="aspect-[16/10]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority={index === 0}
                    />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/90">
                      {card.captions[0]}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.08} className="lg:col-span-5 lg:pb-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
                      {dictionary.properties[property.id].label} · {card.title}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-[var(--color-charcoal)]">
                      {card.title}
                    </h3>
                    <p className="mt-6 max-w-md text-base leading-[1.85] text-[var(--color-deep-olive)]">
                      {card.copy}
                    </p>
                    <Link
                      href={localePath(locale, property.href)}
                      className="mt-8 inline-flex text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] underline-offset-4 hover:underline"
                    >
                      {copy.explore} · {card.title}
                    </Link>
                  </FadeIn>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {property.visions.slice(1).map((vision, visionIndex) => (
                    <FadeIn key={vision.src} delay={0.06 + visionIndex * 0.05}>
                      <ImagePlaceholder
                        label={card.captions[visionIndex + 1]}
                        alt={card.alts[visionIndex + 1]}
                        src={vision.src}
                        aspect="aspect-[4/3]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      />
                      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/90">
                        {card.captions[visionIndex + 1]}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <FadeIn className="mt-24 max-w-2xl lg:mt-32">
          <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-charcoal)] sm:text-3xl">
            {copy.closing}
          </p>
          <p className="mt-10 max-w-xl text-[11px] leading-relaxed tracking-[0.04em] text-[var(--color-deep-olive)]/75">
            {copy.disclaimer}{" "}
            <Link
              href={localePath(locale, "/#project")}
              className="underline underline-offset-2"
            >
              {dictionary.project.eyebrow}
            </Link>
            {" · "}
            <Link
              href={localePath(locale, "/legal")}
              className="underline underline-offset-2"
            >
              {copy.legalLink}
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
