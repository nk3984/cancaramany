import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { de } from "@/i18n/dictionaries/de";
import { en } from "@/i18n/dictionaries/en";
import type { Dictionary } from "@/i18n/dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  de,
};

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getDictionaryOrNotFound(locale: string): Dictionary {
  if (!isLocale(locale)) notFound();
  return dictionaries[locale];
}

export const INTEREST_VALUES = en.interestOptions.map((option) => option.value);
