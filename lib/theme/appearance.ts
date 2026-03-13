import type { AppearanceMode } from "@/lib/theme/types";

export const appearanceQueryKey = "appearance";
export const appearanceStorageKey = "stylish.appearance";
export const defaultAppearanceMode: AppearanceMode = "standard";

export const isAppearanceMode = (value: string | null | undefined): value is AppearanceMode =>
  value === "standard" || value === "liquid-glass";

export const readAppearanceFromStorage = (): AppearanceMode | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = window.localStorage.getItem(appearanceStorageKey);
  return isAppearanceMode(stored) ? stored : null;
};

export const writeAppearanceToStorage = (mode: AppearanceMode) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(appearanceStorageKey, mode);
};

export const readAppearanceFromSearch = (): AppearanceMode | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const query = new URLSearchParams(window.location.search).get(appearanceQueryKey);
  return isAppearanceMode(query) ? query : null;
};

export const replaceAppearanceInSearch = (mode: AppearanceMode) => {
  if (typeof window === "undefined") {
    return;
  }
  const url = new URL(window.location.href);
  url.searchParams.set(appearanceQueryKey, mode);
  window.history.replaceState({}, "", url);
};

export const getInitialAppearance = (): AppearanceMode =>
  readAppearanceFromSearch() ?? readAppearanceFromStorage() ?? defaultAppearanceMode;
