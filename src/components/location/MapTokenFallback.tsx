export function MapTokenFallback() {
  return (
    <div className="flex h-[520px] flex-col items-center justify-center border border-[var(--color-warm-stone)]/70 bg-[var(--color-background)] px-6 text-center sm:h-[560px] lg:h-[700px]">
      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
        Interactive Map
      </p>
      <h3 className="mt-4 max-w-md font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)]">
        Map configuration required
      </h3>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-deep-olive)]">
        Add a Mapbox public token to{" "}
        <code className="text-[12px] text-[var(--color-charcoal)]">
          NEXT_PUBLIC_MAPBOX_TOKEN
        </code>{" "}
        to enable the interactive location map. The component is fully
        implemented and will load automatically once configured.
      </p>
    </div>
  );
}
