"use client";

type MapLoadErrorProps = {
  message?: string;
};

export function MapLoadError({ message }: MapLoadErrorProps) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[var(--color-background)]/95 p-6">
      <div className="max-w-md border border-[var(--color-warm-stone)]/80 bg-[var(--color-white)] p-6 text-center sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
          Map Unavailable
        </p>
        <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)]">
          Map tiles could not be loaded
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-deep-olive)]">
          The Mapbox access token is present, but Mapbox rejected the request for
          map tiles. This usually means the token is invalid, restricted, or missing
          the required permissions.
        </p>
        {message ? (
          <p className="mt-3 text-xs text-[var(--color-deep-olive)]/70">{message}</p>
        ) : null}
        <ul className="mt-5 space-y-2 text-left text-sm text-[var(--color-deep-olive)]">
          <li>1. Open your Mapbox account → Access Tokens</li>
          <li>2. Use a public token starting with <code>pk.</code></li>
          <li>3. Allow <code>http://localhost:3000</code> or remove URL restrictions</li>
          <li>4. Save to <code>.env.local</code> and restart <code>npm run dev</code></li>
        </ul>
      </div>
    </div>
  );
}
