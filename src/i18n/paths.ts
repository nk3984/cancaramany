import { defaultLocale, type Locale } from "@/i18n/config";

/** Build a locale-prefixed path. `path` may be `/`, `/#anchor`, or `/properties/...`. */
export function localePath(locale: Locale, path = "/"): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }

  if (path.startsWith("#")) {
    return `/${locale}${path}`;
  }

  if (path.startsWith("/#")) {
    return `/${locale}${path.slice(1)}`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (maybeLocale === "en" || maybeLocale === "de") {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const bare = stripLocaleFromPathname(pathname);
  return localePath(nextLocale, bare);
}

export function resolveLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment === "en" || segment === "de") return segment;
  return defaultLocale;
}
