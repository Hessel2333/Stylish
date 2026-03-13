import { defaultTheme, isThemeName } from "@/lib/theme/registry";
import type { ThemeName } from "@/lib/theme/types";

export const themeQueryKey = "theme";
export const themeStorageKey = "stylish.theme";
const legacyThemeMap: Record<string, ThemeName> = {
  "apple-like": "apple-hig",
  "google-like": "material-3",
  "microsoft-like": "fluent-2"
};

const normalizeThemeName = (value: string | null | undefined): ThemeName | null => {
  if (!value) {
    return null;
  }
  if (isThemeName(value)) {
    return value;
  }
  return legacyThemeMap[value] ?? null;
};

export const readThemeFromStorage = (): ThemeName | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(themeStorageKey);
  return normalizeThemeName(stored);
};

export const writeThemeToStorage = (theme: ThemeName) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(themeStorageKey, theme);
};

export const readThemeFromSearch = (): ThemeName | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const query = new URLSearchParams(window.location.search).get(themeQueryKey);
  return normalizeThemeName(query);
};

export const replaceThemeInSearch = (theme: ThemeName) => {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.set(themeQueryKey, theme);
  window.history.replaceState({}, "", url);
};

export const getInitialTheme = (): ThemeName => readThemeFromSearch() ?? readThemeFromStorage() ?? defaultTheme;
