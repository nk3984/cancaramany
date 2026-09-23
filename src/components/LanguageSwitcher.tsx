"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/locale-context";

export function LanguageSwitcher({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname() || `/${locale}`;

  function hrefFor(next: Locale): string {
    const parts = pathname.split("/");
    if (parts.length > 1 && locales.includes(parts[1] as Locale)) {
      parts[1] = next;
      return parts.join("/") || `/${next}`;
    }
    return `/${next}`;
  }

  const muted = light
    ? "text-[var(--color-white)]/85 hover:text-[var(--color-white)]"
    : "text-[var(--color-deep-olive)]/80 hover:text-[var(--color-charcoal)]";
  const active = light
    ? "text-[var(--color-white)]"
    : "text-[var(--color-charcoal)]";

  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] ${className}`}
      aria-label="Language"
    >
      {locales.map((code, index) => (
        <span key={code} className="inline-flex items-center gap-2">
          {index > 0 ? (
            <span className={light ? "text-[var(--color-white)]/55" : "text-[var(--color-warm-stone)]"}>
              /
            </span>
          ) : null}
          <Link
            href={hrefFor(code)}
            hrefLang={code}
            className={code === locale ? active : muted}
            aria-current={code === locale ? "page" : undefined}
          >
            {code.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
