"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export { localePath } from "@/i18n/paths";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx.locale;
}

export function useDictionary(): Dictionary {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useDictionary must be used within LocaleProvider");
  }
  return ctx.dictionary;
}
