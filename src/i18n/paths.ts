import type { Locale } from "@/i18n/config";

/** Build a locale-prefixed path. `path` may be `/`, `/properties/…`, `/#hash`, or `#hash`. */
export function localePath(locale: Locale, path: string): string {
  if (path.startsWith("/#")) {
    return `/${locale}${path.slice(1)}`;
  }
  if (path.startsWith("#")) {
    return `/${locale}${path}`;
  }
  if (path === "/") {
    return `/${locale}`;
  }
  if (path.startsWith("/")) {
    return `/${locale}${path}`;
  }
  return `/${locale}/${path}`;
}
