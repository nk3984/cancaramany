"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { HistoricStudyGallery } from "@/components/HistoricStudyGallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { properties } from "@/data/properties";
import { propertyIIIContent, propertyIIIImages } from "@/data/property-iii";
import { historicPlansByProperty } from "@/data/historic-plans";

export function PropertyIIIPage() {
  const [open, setOpen] = useState(false);
  const others = properties.filter((item) => item.id !== "property-iii");
  const content = propertyIIIContent;
  const images = propertyIIIImages;

  return (
    <main>
      <section className="relative bg-[var(--color-charcoal)] pt-24">
        <ImagePlaceholder
          label={images.hero.label}
          alt={images.hero.alt}
          aspect="aspect-[16/10] min-h-[70vh]"
          className="min-h-[70vh] w-full"
          src={images.hero.src}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/85 via-transparent to-[var(--color-charcoal)]/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-12 sm:px-8 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-white)]/70">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-serif)] text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.05] text-[var(--color-white)]">
            {content.headline}
          </h1>
          <p className="mt-5 font-[family-name:var(--font-serif)] text-xl text-[var(--color-white)]/80 sm:text-2xl">
            64,455 m² · 15.93 acres
          </p>
          <p className="mt-4 max-w-xl text-[10px] uppercase tracking-[0.16em] text-[var(--color-white)]/55">
            {siteConfig.visualizationCaption}
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              Overview
            </p>
            <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-[var(--color-charcoal)]">
              {content.lead}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {content.overview}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-5">
            <ul className="space-y-4 border-t border-[var(--color-warm-stone)]/70 pt-6">
              {content.facts.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-6 border-b border-[var(--color-warm-stone)]/70 pb-4"
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]/70">
                    {item.label}
                  </span>
                  <span className="text-right text-sm text-[var(--color-charcoal)]">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            {content.factsNote ? (
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-deep-olive)]/70">
                {content.factsNote}
              </p>
            ) : null}
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-white)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5 lg:pt-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
                {content.existing.eyebrow}
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.15] text-[var(--color-charcoal)]">
                {content.existing.title}
              </h2>
              <p className="mt-8 text-base leading-[1.85] text-[var(--color-deep-olive)]">
                {content.existing.copy}
              </p>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {images.details.map((item) => (
                  <div key={item.label}>
                    <ImagePlaceholder
                      label={item.label}
                      alt={item.alt}
                      src={item.src}
                      aspect="aspect-square"
                      sizes="(max-width: 1024px) 30vw, 180px"
                    />
                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]/80">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.08} className="lg:col-span-7">
              <ImagePlaceholder
                label={images.existing.label}
                alt={images.existing.alt}
                src={images.existing.src}
                aspect="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="mt-5">
                <ImagePlaceholder
                  label={images.annex.label}
                  alt={images.annex.alt}
                  src={images.annex.src}
                  aspect="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] px-5 py-20 text-[var(--color-white)] sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-warm-stone)]">
                {content.vision.eyebrow}
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.15]">
                {content.vision.title}
              </h2>
              <p className="mt-8 text-base leading-[1.85] text-[var(--color-white)]/70">
                {content.vision.copy}
              </p>
              <ul className="mt-8 space-y-4">
                {content.vision.points.map((point) => (
                  <li
                    key={point}
                    className="border-t border-[var(--color-white)]/15 pt-4 text-sm leading-relaxed text-[var(--color-white)]/80"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[11px] uppercase tracking-[0.16em] text-[var(--color-warm-stone)]/80">
                {siteConfig.conceptualDisclaimer}
              </p>
            </FadeIn>
            <FadeIn delay={0.08} className="lg:col-span-7">
              <div className="space-y-4">
                {images.vision
                  .filter((item) => item.layout === "wide")
                  .map((item) => (
                    <div key={item.label}>
                      <ImagePlaceholder
                        label={item.label}
                        alt={item.alt}
                        src={item.src}
                        aspect="aspect-[16/9] sm:aspect-[21/9]"
                        className="bg-[var(--color-deep-olive)]/40"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[var(--color-warm-stone)]">
                        {item.caption}
                      </p>
                    </div>
                  ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              {content.living.eyebrow}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.15] text-[var(--color-charcoal)]">
              {content.living.title}
            </h2>
            <p className="mt-8 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {content.living.intro}
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {content.living.levels.map((level, index) => (
              <FadeIn key={level.label} delay={index * 0.06}>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-terracotta)]">
                  {level.label}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)]">
                  {level.title}
                </h3>
                <p className="mt-4 text-base leading-[1.8] text-[var(--color-deep-olive)]">
                  {level.copy}
                </p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 grid gap-6 border-t border-[var(--color-warm-stone)]/70 pt-10 sm:grid-cols-3">
            {content.living.figures.map((figure) => (
              <div key={figure.label}>
                <p className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-charcoal)] sm:text-5xl">
                  {figure.value}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]">
                  {figure.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--color-deep-olive)]/75">
            {content.living.figuresNote}
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-white)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <HistoricStudyGallery
            drawings={historicPlansByProperty["property-iii"]}
            roman="III"
            variant="rehabilitation"
          />
        </div>
      </section>

      <section className="bg-[var(--color-white)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-end">
          <FadeIn className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              {content.land.eyebrow}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.15] text-[var(--color-charcoal)]">
              {content.land.title}
            </h2>
            <p className="mt-8 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {content.land.copy}
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {images.land.map((item) => (
              <ImagePlaceholder
                key={item.label}
                label={item.label}
                alt={item.alt}
                src={item.src}
                aspect="aspect-[4/5]"
                sizes="(max-width: 640px) 100vw, 28vw"
              />
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              Position within the estate
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl text-[var(--color-charcoal)]">
              The architectural heart of four private opportunities.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {properties.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`border px-5 py-6 transition-colors ${
                  item.id === "property-iii"
                    ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-white)]"
                    : "border-[var(--color-warm-stone)] text-[var(--color-deep-olive)] hover:border-[var(--color-charcoal)]/40"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.18em]">
                  Property {item.roman}
                </p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-xl">
                  {item.areaDisplay}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-white)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              Gallery
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.gallery.map((item, index) => (
              <ImagePlaceholder
                key={`${item.src}-${index}`}
                label={`IMAGE REQUIRED — PROPERTY III GALLERY 0${index + 1}`}
                alt={item.alt}
                src={item.src}
                aspect="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-deep-olive)] px-5 py-20 text-[var(--color-white)] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-warm-stone)]">
              {content.cta.eyebrow}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
              {content.cta.title}
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-[var(--color-white)]/70">
              {content.cta.copy}
            </p>
          </div>
          <Button variant="light" onClick={() => setOpen(true)}>
            {content.cta.button}
          </Button>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]">
            Other properties
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {others.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm text-[var(--color-charcoal)] underline-offset-4 hover:underline"
              >
                Property {item.roman}
              </Link>
            ))}
            <Link
              href="/#properties"
              className="text-sm text-[var(--color-charcoal)] underline-offset-4 hover:underline"
            >
              Back to estate
            </Link>
          </div>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Enquire — Property III"
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </main>
  );
}
