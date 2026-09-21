"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Property } from "@/data/properties";
import { useLocale } from "@/i18n/LocaleProvider";
import { localePath } from "@/i18n/paths";

type PropertyFeatureProps = {
  property: Property;
  reverse?: boolean;
  onEnquire?: () => void;
  enquireLabel?: string;
  availableLabel?: string;
};

function PropertyContent({
  property,
  onEnquire,
  enquireLabel,
  availableLabel,
}: {
  property: Property;
  onEnquire?: () => void;
  enquireLabel?: string;
  availableLabel?: string;
}) {
  const { locale, dict } = useLocale();

  return (
    <>
      <p
        className={`text-[11px] uppercase tracking-[0.24em] ${
          property.isHistoricFinca
            ? "text-[var(--color-terracotta)]"
            : "text-[var(--color-deep-olive)]"
        }`}
      >
        {property.isHistoricFinca && property.specialLabel
          ? property.specialLabel
          : property.label}
      </p>

      {availableLabel ? (
        <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-terracotta)]/90">
          {availableLabel}
        </p>
      ) : null}

      <h3 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-[var(--color-charcoal)]">
        {property.headline}
      </h3>

      <p className="mt-5 font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] sm:text-3xl">
        {property.areaDisplay}
      </p>

      {property.isHistoricFinca ? (
        <span className="mt-4 inline-flex border border-[var(--color-terracotta)]/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">
          {dict.propertyPage.fincaEyebrow}
        </span>
      ) : null}

      <p className="mt-6 text-[13px] leading-relaxed tracking-wide text-[var(--color-terracotta)]">
        {property.projectLine}
      </p>

      <p className="mt-5 text-base leading-[1.8] text-[var(--color-deep-olive)]">
        {property.overview}
      </p>

      <ul className="mt-6 space-y-2.5">
        {property.descriptors.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm tracking-wide text-[var(--color-deep-olive)]"
          >
            <span className="mt-2 h-px w-4 shrink-0 bg-[var(--color-warm-stone)]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={localePath(locale, property.href)}
          className="inline-flex border border-[var(--color-charcoal)] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]"
        >
          {property.cta}
        </Link>
        {onEnquire && enquireLabel ? (
          <button
            type="button"
            onClick={onEnquire}
            className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-deep-olive)] underline-offset-4 hover:underline"
          >
            {enquireLabel}
          </button>
        ) : null}
      </div>
    </>
  );
}

export function PropertyFeature({
  property,
  reverse,
  onEnquire,
  enquireLabel,
  availableLabel,
}: PropertyFeatureProps) {
  const { dict } = useLocale();

  return (
    <article className="grid items-center gap-10 border-t border-[var(--color-warm-stone)]/70 pt-16 lg:grid-cols-12 lg:gap-14 lg:pt-20">
      <FadeIn
        className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""} ${
          property.isHistoricFinca ? "" : ""
        }`}
      >
        <ImagePlaceholder
          label={property.imageLabel}
          alt={property.imageAlt}
          aspect="aspect-[16/11]"
          src={property.imagePath}
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[var(--color-deep-olive)]/70">
          {dict.common.visualizationCaption}
        </p>
      </FadeIn>
      <FadeIn
        delay={0.1}
        className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
      >
        <PropertyContent
          property={property}
          onEnquire={onEnquire}
          enquireLabel={enquireLabel}
          availableLabel={availableLabel}
        />
      </FadeIn>
    </article>
  );
}
