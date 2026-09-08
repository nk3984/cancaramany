"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { residenceVisions } from "@/data/residence-visions";

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
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[var(--color-deep-olive)]">
            Four private architectural visions for Properties I–IV — each with
            three curated views. Conceptual material only; not current building
            rights.
          </p>
        </FadeIn>

        <div className="mt-20 space-y-28 lg:mt-28 lg:space-y-36">
          {residenceVisions.map((property, index) => (
            <article key={property.id}>
              <div
                className={`grid items-end gap-8 lg:grid-cols-12 lg:gap-14 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeIn className="lg:col-span-7">
                  <ImagePlaceholder
                    label={`Property ${property.roman} vision`}
                    alt={property.visions[0].alt}
                    src={property.visions[0].src}
                    aspect="aspect-[16/10]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority={index === 0}
                  />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/70">
                    {property.visions[0].caption}
                  </p>
                </FadeIn>
                <FadeIn delay={0.08} className="lg:col-span-5 lg:pb-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
                    Property {property.roman}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-[var(--color-charcoal)]">
                    {property.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-[1.85] text-[var(--color-deep-olive)]">
                    {property.copy}
                  </p>
                  <Link
                    href={property.href}
                    className="mt-8 inline-flex text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] underline-offset-4 hover:underline"
                  >
                    Explore Property {property.roman}
                  </Link>
                </FadeIn>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {property.visions.slice(1).map((vision, visionIndex) => (
                  <FadeIn key={vision.src} delay={0.06 + visionIndex * 0.05}>
                    <ImagePlaceholder
                      label={vision.caption}
                      alt={vision.alt}
                      src={vision.src}
                      aspect="aspect-[4/3]"
                      sizes="(max-width: 640px) 100vw, 45vw"
                    />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/70">
                      {vision.caption}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </article>
          ))}
        </div>

        <FadeIn className="mt-24 max-w-2xl lg:mt-32">
          <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-charcoal)] sm:text-3xl">
            Every element should feel considered, enduring and unmistakably
            Mallorcan.
          </p>
          <p className="mt-10 max-w-xl text-[11px] leading-relaxed tracking-[0.04em] text-[var(--color-deep-olive)]/75">
            Architectural visions and formerly permitted villa projects. Building
            permits for Properties I, II and IV were granted, then not renewed
            after the estate was deferred for a prolonged period. They do not
            constitute current building rights. Final design and any development
            remain subject to independent technical and legal review and all
            required approvals. See our{" "}
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
