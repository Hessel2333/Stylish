"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultTheme } from "@/lib/theme/registry";
import { applyThemeCssVars } from "@/lib/theme/css-vars";
import {
  appearanceQueryKey,
  defaultAppearanceMode,
  getInitialAppearance,
  replaceAppearanceInSearch,
  writeAppearanceToStorage
} from "@/lib/theme/appearance";
import {
  getInitialTheme,
  replaceThemeInSearch,
  themeQueryKey,
  writeThemeToStorage
} from "@/lib/theme/storage";
import type { AppearanceMode, ThemeName } from "@/lib/theme/types";

type ThemeContextValue = {
  theme: ThemeName;
  appearance: AppearanceMode;
  setTheme: (theme: ThemeName) => void;
  setAppearance: (mode: AppearanceMode) => void;
  themedHref: (href: string) => string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const normalizeAppearance = (theme: ThemeName, appearance: AppearanceMode): AppearanceMode =>
  theme === "apple-hig" ? appearance : "standard";

const appendThemeParam = (href: string, theme: ThemeName, appearance: AppearanceMode) => {
  const [base, hash = ""] = href.split("#");
  const [pathname, search = ""] = base.split("?");
  const params = new URLSearchParams(search);
  params.set(themeQueryKey, theme);
  if (theme === "apple-hig") {
    params.set(appearanceQueryKey, appearance);
  } else {
    params.delete(appearanceQueryKey);
  }
  const queryString = params.toString();
  const rebuilt = queryString ? `${pathname}?${queryString}` : pathname;
  return hash ? `${rebuilt}#${hash}` : rebuilt;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);
  const [appearance, setAppearance] = useState<AppearanceMode>(defaultAppearanceMode);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    const initialAppearance = normalizeAppearance(initialTheme, getInitialAppearance());
    setTheme(initialTheme);
    setAppearance(initialAppearance);
  }, []);

  useEffect(() => {
    applyThemeCssVars(theme);
    writeThemeToStorage(theme);
    replaceThemeInSearch(theme);
  }, [theme]);

  useEffect(() => {
    const nextAppearance = normalizeAppearance(theme, appearance);
    if (nextAppearance !== appearance) {
      setAppearance(nextAppearance);
      return;
    }

    writeAppearanceToStorage(nextAppearance);
    replaceAppearanceInSearch(nextAppearance);

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-appearance", nextAppearance);
    }
  }, [appearance, theme]);

  const themedHref = useCallback((href: string) => appendThemeParam(href, theme, appearance), [appearance, theme]);

  const value = useMemo(
    () => ({
      theme,
      appearance,
      setTheme,
      setAppearance,
      themedHref
    }),
    [appearance, theme, themedHref]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-root min-h-screen">{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
