"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { PropertyFeature } from "@/components/PropertyFeature";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { localizeProperties } from "@/data/properties";
import { useLocale } from "@/i18n/LocaleProvider";

export function PropertiesSection() {
  const { dict } = useLocale();
  const properties = localizeProperties(dict);
  const [enquireId, setEnquireId] = useState<string | null>(null);
  const enquireProperty = properties.find((p) => p.id === enquireId);

  return (
    <section
      id="properties"
      className="bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16 max-w-2xl sm:mb-20">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            {dict.properties.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
            {dict.properties.headline}
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
            {dict.properties.support}
          </p>
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {properties.map((property, index) => (
            <PropertyFeature
              key={property.id}
              property={property}
              reverse={index % 2 === 1}
              onEnquire={() => setEnquireId(property.id)}
              enquireLabel={dict.properties.enquire}
              availableLabel={dict.properties.available}
            />
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(enquireId)}
        onClose={() => setEnquireId(null)}
        title={
          enquireProperty
            ? `${dict.properties.enquire} — ${enquireProperty.label}`
            : dict.properties.enquire
        }
      >
        <EnquiryForm
          defaultInterest={enquireId ?? undefined}
          onSuccess={() => setEnquireId(null)}
        />
      </Modal>
    </section>
  );
}

/** Keep named export path for masterplan links */
export function PropertyQuickLinks() {
  const { locale, dict } = useLocale();
  const properties = localizeProperties(dict);
  return (
    <div className="flex flex-wrap gap-3">
      {properties.map((property) => (
        <Link
          key={property.id}
          href={`/${locale}${property.href}`}
          className="text-sm text-[var(--color-charcoal)] underline-offset-4 hover:underline"
        >
          {property.label}
        </Link>
      ))}
    </div>
  );
}
