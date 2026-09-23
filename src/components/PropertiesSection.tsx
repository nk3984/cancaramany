"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { PropertyFeature } from "@/components/PropertyFeature";
import { properties } from "@/data/properties";
import { useDictionary } from "@/i18n/locale-context";

export function PropertiesSection() {
  const dictionary = useDictionary();
  const copy = dictionary.propertiesSection;

  return (
    <section
      id="properties"
      className="bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16 max-w-2xl sm:mb-24">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            {copy.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
            {copy.headline}
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
            {copy.lead}
          </p>
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {properties.map((property, index) => (
            <PropertyFeature
              key={property.id}
              property={property}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
