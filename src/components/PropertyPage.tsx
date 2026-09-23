"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { HistoricStudyGallery } from "@/components/HistoricStudyGallery";
import type { Property } from "@/data/properties";
import { properties } from "@/data/properties";
import { historicPlansByProperty } from "@/data/historic-plans";
import { getResidenceVisionsById } from "@/data/residence-visions";
import {
  localePath,
  useDictionary,
  useLocale,
} from "@/i18n/locale-context";

const propertyLandPhotos = {
  "property-i": {
    src: "/images/can-caramany/property-01/property-01-landscape.jpg",
  },
  "property-ii": {
    src: "/images/can-caramany/property-02/property-02-landscape.jpg",
  },
  "property-iv": {
    src: "/images/can-caramany/property-04/property-04-landscape.jpg",
  },
} as const;

export function PropertyPage({ property }: { property: Property }) {
  const dictionary = useDictionary();
  const locale = useLocale();
  const copy = dictionary.properties[property.id];
  const page = dictionary.propertyPage;
  const cards = dictionary.residencesCards[property.id];
  const landPhoto =
    property.id in propertyLandPhotos
      ? propertyLandPhotos[property.id as keyof typeof propertyLandPhotos]
      : null;
  const [open, setOpen] = useState(false);
  const others = properties.filter((item) => item.id !== property.id);
  const residence = getResidenceVisionsById(property.id);
  const visionGallery =
    residence?.visions.map((vision, index) => ({
      src: vision.src,
      alt: cards.alts[index] ?? copy.imageAlt,
      label: cards.captions[index] ?? page.gallery,
    })) ?? [];

  return (
    <main>
      <section className="relative bg-[var(--color-charcoal)] pt-24">
        <ImagePlaceholder
          label={copy.label}
          alt={copy.imageAlt}
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
              ? (copy.specialLabel ?? copy.label)
              : copy.label}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[var(--color-white)]">
            {property.areaDisplay}
          </h1>
          <p className="mt-4 max-w-xl text-[10px] uppercase tracking-[0.16em] text-[var(--color-white)]/55">
            {dictionary.disclaimers.visualization}
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              {page.overview}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-[var(--color-charcoal)]">
              {copy.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--color-terracotta)]">
              {copy.projectLine}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {copy.overview}
            </p>
            {copy.areaNote ? (
              <p className="mt-4 text-xs text-[var(--color-deep-olive)]/70">
                {copy.areaNote}
              </p>
            ) : null}
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-5">
            <ul className="space-y-4 border-t border-[var(--color-warm-stone)]/70 pt-6">
              {copy.descriptors.map((item) => (
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
              {page.landscape}
            </p>
            <p className="mt-6 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {copy.landscape}
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-span-7">
            <ImagePlaceholder
              label={page.landscape}
              alt={copy.imageAlt}
              aspect="aspect-[16/11]"
              src={property.imagePath}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            {landPhoto ? (
              <div className="mt-5">
                <ImagePlaceholder
                  label={page.landToday}
                  alt={copy.imageAlt}
                  aspect="aspect-[16/11]"
                  src={landPhoto.src}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            ) : null}
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              {page.positionEyebrow}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl text-[var(--color-charcoal)]">
              {page.positionHeadline}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {properties.map((item) => {
              const itemCopy = dictionary.properties[item.id];
              return (
                <Link
                  key={item.id}
                  href={localePath(locale, item.href)}
                  className={`border px-5 py-6 transition-colors ${
                    item.id === property.id
                      ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-white)]"
                      : "border-[var(--color-warm-stone)] text-[var(--color-deep-olive)] hover:border-[var(--color-charcoal)]/40"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em]">
                    {itemCopy.label}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-serif)] text-xl">
                    {item.areaDisplay}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              {page.architectureFormerPermit}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1.15] text-[var(--color-charcoal)]">
              {page.architectureFormerHeadline}
            </h2>
            <p className="mt-6 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {copy.architecture}
            </p>
            <p className="mt-6 text-sm text-[var(--color-deep-olive)]/75">
              {page.historicApprovalsNote}
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
                {page.historicEyebrow}
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] text-[var(--color-charcoal)]">
                {page.historicHeadline}
              </h2>
              <p className="mt-8 text-base leading-[1.85] text-[var(--color-deep-olive)]">
                {page.historicCopy}
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                {
                  label: page.existing,
                  alt: cards.alts[0],
                  caption: page.existing,
                  src: "/images/can-caramany/historic-finca/finca-existing-exterior.jpg",
                },
                {
                  label: page.originalProposal,
                  alt: cards.alts[0],
                  caption: page.originalProposal,
                  src: "/images/can-caramany/property-03/vision/facade.png",
                },
                {
                  label: dictionary.disclaimers.conceptual,
                  alt: cards.alts[1],
                  caption: dictionary.disclaimers.conceptual,
                  src: "/images/can-caramany/property-03/vision/pool.png",
                },
              ].map((item) => (
                <FadeIn key={item.src}>
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
              {page.infrastructure}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {copy.infrastructure}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-deep-olive)]">
              {page.gallery}
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(property.isHistoricFinca
              ? [
                  {
                    src: "/images/can-caramany/historic-finca/finca-existing-exterior.jpg",
                    alt: cards.alts[0],
                    label: page.existing,
                  },
                  ...visionGallery,
                ]
              : [
                  ...(landPhoto
                    ? [
                        {
                          src: landPhoto.src,
                          alt: copy.imageAlt,
                          label: page.landToday,
                        },
                      ]
                    : []),
                  ...visionGallery,
                ]
            ).map((item, index) => (
              <ImagePlaceholder
                key={`${property.id}-gallery-${index}`}
                label={item.label}
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
              {page.privateDocs}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl">
              {page.requestInfo} {property.roman}.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border border-[var(--color-white)]/35 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-deep-olive)]"
          >
            {page.enquireAbout} {property.roman}
          </button>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]">
            {page.otherProperties}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {others.map((item) => (
              <Link
                key={item.id}
                href={localePath(locale, item.href)}
                className="text-sm text-[var(--color-charcoal)] underline-offset-4 hover:underline"
              >
                {dictionary.properties[item.id].label}
              </Link>
            ))}
            <Link
              href={localePath(locale, "/#properties")}
              className="text-sm text-[var(--color-charcoal)] underline-offset-4 hover:underline"
            >
              {page.backToEstate}
            </Link>
          </div>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`${page.enquireAbout} ${property.roman}`}
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </main>
  );
}
