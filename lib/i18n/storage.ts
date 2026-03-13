import type { Locale } from "@/lib/i18n/types";

export const localeQueryKey = "lang";
export const localeStorageKey = "stylish.locale";
export const defaultLocale: Locale = "zh";

const isLocale = (value: string | null | undefined): value is Locale => value === "zh" || value === "en";

export const readLocaleFromStorage = (): Locale | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = window.localStorage.getItem(localeStorageKey);
  return isLocale(stored) ? stored : null;
};

export const writeLocaleToStorage = (locale: Locale) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(localeStorageKey, locale);
};

export const readLocaleFromSearch = (): Locale | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const query = new URLSearchParams(window.location.search).get(localeQueryKey);
  return isLocale(query) ? query : null;
};

export const replaceLocaleInSearch = (locale: Locale) => {
  if (typeof window === "undefined") {
    return;
  }
  const url = new URL(window.location.href);
  url.searchParams.set(localeQueryKey, locale);
  window.history.replaceState({}, "", url);
};

export const getInitialLocale = (): Locale => readLocaleFromSearch() ?? readLocaleFromStorage() ?? defaultLocale;
