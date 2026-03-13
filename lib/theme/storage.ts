import { defaultTheme, isThemeName } from "@/lib/theme/registry";
import type { ThemeName } from "@/lib/theme/types";

export const themeQueryKey = "theme";
export const themeStorageKey = "stylish.theme";

export const readThemeFromStorage = (): ThemeName | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(themeStorageKey);
  return isThemeName(stored) ? stored : null;
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
  return isThemeName(query) ? query : null;
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
