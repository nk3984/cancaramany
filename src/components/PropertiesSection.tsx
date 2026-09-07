import { FadeIn } from "@/components/ui/FadeIn";
import { PropertyFeature } from "@/components/PropertyFeature";
import { properties } from "@/data/properties";

export function PropertiesSection() {
  return (
    <section
      id="properties"
      className="bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16 max-w-2xl sm:mb-24">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
            Properties
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
            Four Properties. Four Distinct Settings.
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
            Each property occupies its own position within the wider estate,
            offering a different combination of landscape, privacy, scale and
            historic context.
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
