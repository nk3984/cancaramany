import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Property } from "@/data/properties";

type PropertyFeatureProps = {
  property: Property;
  reverse?: boolean;
};

function PropertyContent({ property }: { property: Property }) {
  return (
    <>
      <p
        className={`text-[11px] uppercase tracking-[0.24em] ${
          property.isHistoricFinca
            ? "text-[var(--color-terracotta)]"
            : "text-[var(--color-deep-olive)]"
        }`}
      >
        {property.isHistoricFinca
          ? property.specialLabel
          : `Property ${property.roman}`}
      </p>

      <h3 className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-[var(--color-charcoal)]">
        {property.headline}
      </h3>

      <p className="mt-5 font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] sm:text-3xl">
        {property.areaDisplay}
      </p>

      {property.isHistoricFinca ? (
        <span className="mt-4 inline-flex border border-[var(--color-terracotta)]/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">
          Historic Finca
        </span>
      ) : null}

      <p className="mt-6 text-base leading-[1.8] text-[var(--color-deep-olive)]">
        {property.overview}
      </p>

      <ul className="mt-6 space-y-2.5">
        {property.descriptors.map((item) => (
          <li
            key={item}
            className="text-sm tracking-wide text-[var(--color-deep-olive)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={property.href}
        className={`mt-10 inline-flex text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)] ${
          property.isHistoricFinca
            ? "border border-[var(--color-charcoal)] px-7 py-3.5 transition-colors hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]"
            : "underline-offset-4 hover:underline"
        }`}
      >
        {property.cta}
      </Link>
    </>
  );
}

export function PropertyFeature({ property, reverse }: PropertyFeatureProps) {
  if (property.isHistoricFinca) {
    return (
      <article className="border-t border-[var(--color-warm-stone)]/70 pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-7">
            <ImagePlaceholder
              label={property.imageLabel}
              alt={property.imageAlt}
              aspect="aspect-[16/11]"
              src={property.imagePath}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-5">
            <PropertyContent property={property} />
          </FadeIn>
        </div>
      </article>
    );
  }

  return (
    <article className="grid items-center gap-10 border-t border-[var(--color-warm-stone)]/70 pt-16 lg:grid-cols-12 lg:gap-14 lg:pt-20">
      <FadeIn className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <ImagePlaceholder
          label={property.imageLabel}
          alt={property.imageAlt}
          aspect="aspect-[16/11]"
          src={property.imagePath}
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </FadeIn>
      <FadeIn
        delay={0.1}
        className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
      >
        <PropertyContent property={property} />
      </FadeIn>
    </article>
  );
}
