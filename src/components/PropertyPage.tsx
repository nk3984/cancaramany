"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { HistoricStudyGallery } from "@/components/HistoricStudyGallery";
import { siteConfig } from "@/data/site";
import { contentFacts } from "@/data/content-facts";
import type { Property } from "@/data/properties";
import { properties } from "@/data/properties";
import { historicPlansByProperty } from "@/data/historic-plans";

export function PropertyPage({ property }: { property: Property }) {
  const [open, setOpen] = useState(false);
  const others = properties.filter((item) => item.id !== property.id);

  return (
    <main>
      <section className="relative bg-[var(--color-charcoal)] pt-24">
        <ImagePlaceholder
          label={property.imageLabel}
          alt={property.imageAlt}
          aspect="aspect-[16/10] min-h-[70vh]"
          className="min-h-[70vh] w-full"
          src={property.imagePath}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-[var(--color-charcoal)]/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-12 sm:px-8 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-white)]/70">
            {property.isHistoricFinca
              ? property.specialLabel
              : `Property ${property.roman}`}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[var(--color-white)]">
            {property.areaDisplay}
          </h1>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              Overview
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-[var(--color-charcoal)]">
              {property.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--color-terracotta)]">
              {property.projectLine}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {property.overview}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-5">
            <ul className="space-y-4 border-t border-[var(--color-warm-stone)]/70 pt-6">
              {property.descriptors.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--color-warm-stone)]/70 pb-4 text-sm text-[var(--color-deep-olive)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-white)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              Landscape
            </p>
            <p className="mt-6 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {property.landscape}
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-span-7">
            <ImagePlaceholder
              label={property.imageLabel}
              alt={`Landscape of Property ${property.roman} at Can Caramany`}
              aspect="aspect-[16/11]"
              src={property.imagePath}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
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
              One of four private opportunities at Can Caramany.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {properties.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`border px-5 py-6 transition-colors ${
                  item.id === property.id
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

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              {contentFacts.copy.architectureEyebrowIIiIv}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1.15] text-[var(--color-charcoal)]">
              {contentFacts.copy.architectureHeadlineIIiIv}
            </h2>
            <p className="mt-6 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {property.architecture}
            </p>
            <p className="mt-6 text-sm text-[var(--color-deep-olive)]/75">
              {siteConfig.historicApprovalsNote}
            </p>
          </FadeIn>
          <div className="mt-14">
            <HistoricStudyGallery
              drawings={historicPlansByProperty[property.id]}
              roman={property.roman}
              variant="former-permit"
            />
          </div>
        </div>
      </section>

      {property.isHistoricFinca ? (
        <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <FadeIn className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
                Historic Finca
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] text-[var(--color-charcoal)]">
                A house that was here before us.
              </h2>
              <p className="mt-8 text-base leading-[1.85] text-[var(--color-deep-olive)]">
                At the heart of Can Caramany stands a traditional Mallorcan
                finca. Its surviving structures tell the story of the land and
                offer a rare architectural anchor for the future.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                {
                  label: "IMAGE REQUIRED — FINCA EXISTING",
                  alt: "Existing historic finca at Property III",
                  caption: "Existing",
                  src: "/images/can-caramany/historic-finca/finca-existing-exterior.jpg",
                },
                {
                  label: "IMAGE REQUIRED — HISTORIC STUDY 01",
                  alt: "Historic architectural study of the finca",
                  caption: "Original Proposal",
                  src: null as string | null,
                },
                {
                  label: "IMAGE REQUIRED — CONCEPTUAL VISION",
                  alt: "Conceptual visualization of the historic finca",
                  caption: siteConfig.conceptualDisclaimer,
                  src: null as string | null,
                },
              ].map((item) => (
                <FadeIn key={item.label}>
                  <ImagePlaceholder
                    label={item.label}
                    alt={item.alt}
                    src={item.src}
                    aspect="aspect-[4/5]"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]">
                    {item.caption}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--color-white)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              Infrastructure
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {property.infrastructure}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              Gallery
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(property.isHistoricFinca
              ? [
                  {
                    src: "/images/can-caramany/historic-finca/finca-existing-exterior.jpg",
                    alt: "Historic finca exterior at Property III",
                  },
                  {
                    src: "/images/can-caramany/historic-finca/finca-detail-stone.jpg",
                    alt: "Stone masonry detail of the historic finca",
                  },
                  {
                    src: "/images/can-caramany/historic-finca/finca-detail-door.jpg",
                    alt: "Door detail of the historic Mallorcan finca",
                  },
                ]
              : [
                  {
                    src: property.imagePath,
                    alt: property.imageAlt,
                    label: property.imageLabel,
                  },
                  {
                    src: "/images/can-caramany/landscape/landscape-estate-path.jpg",
                    alt: "Shaded estate path within Can Caramany",
                    label: "Estate path",
                  },
                  {
                    src: "/images/can-caramany/landscape/landscape-stone-wall.jpg",
                    alt: "Dry-stone wall across the Can Caramany countryside",
                    label: "Dry-stone walls",
                  },
                ]
            ).map((item, index) => (
              <ImagePlaceholder
                key={`${property.id}-gallery-${index}`}
                label={"label" in item ? item.label : "Photography to follow"}
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
              Private Documentation
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
              Request detailed information for Property {property.roman}.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border border-[var(--color-white)]/35 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-deep-olive)]"
          >
            Enquire about Property {property.roman}
          </button>
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
        title={`Enquire — Property ${property.roman}`}
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </main>
  );
}
