import { FadeIn } from "@/components/ui/FadeIn";
import { EstateStats } from "@/components/EstateStats";
import { ESTATE_TOTAL } from "@/data/properties";

export function StatementSection() {
  return (
    <section
      id="estate"
      className="relative bg-[var(--color-background)] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <FadeIn>
            <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
              The Estate
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] text-[var(--color-charcoal)]">
              A private estate of exceptional scale.
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
              Can Caramany is a substantial private estate in the municipality of
              Manacor, Mallorca, comprising four individual properties —{" "}
              {ESTATE_TOTAL.marketingLine.toLowerCase()}.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-[var(--color-deep-olive)] sm:text-lg">
              Dry-stone walls, mature Mediterranean vegetation, open agricultural
              terrain and historic architecture create a setting defined by scale,
              privacy and a strong sense of place.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-[var(--color-deep-olive)]/70">
              {ESTATE_TOTAL.areaCaveat}
            </p>
          </FadeIn>
        </div>

        <div className="mt-24 sm:mt-32">
          <EstateStats />
        </div>
      </div>
    </section>
  );
}
