"use client";

import { useLocale } from "@/i18n/locale-context";

type MapLoadErrorProps = {
  message?: string;
};

export function MapLoadError({ message }: MapLoadErrorProps) {
  const locale = useLocale();
  const isDe = locale === "de";

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[var(--color-background)]/95 p-6">
      <div className="max-w-md border border-[var(--color-warm-stone)]/80 bg-[var(--color-white)] p-6 text-center sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
          {isDe ? "Karte nicht verfügbar" : "Map Unavailable"}
        </p>
        <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)]">
          {isDe
            ? "Kartendaten konnten nicht geladen werden"
            : "Map tiles could not be loaded"}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]">
          {isDe
            ? "Der Mapbox-Zugangstoken ist vorhanden, aber Mapbox hat die Anfrage für Kartendaten abgelehnt. Der Token ist möglicherweise ungültig, eingeschränkt oder ohne die erforderlichen Rechte."
            : "The Mapbox access token is present, but Mapbox rejected the request for map tiles. This usually means the token is invalid, restricted, or missing the required permissions."}
        </p>
        {message ? (
          <p className="mt-3 text-xs text-[var(--color-deep-olive)]/70">{message}</p>
        ) : null}
      </div>
    </div>
  );
}
