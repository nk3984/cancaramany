import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { de } from "@/i18n/dictionaries/de";
import { en } from "@/i18n/dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  de,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
