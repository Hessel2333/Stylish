"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultTheme } from "@/lib/theme/registry";
import { applyThemeCssVars } from "@/lib/theme/css-vars";
import {
  getInitialTheme,
  replaceThemeInSearch,
  themeQueryKey,
  writeThemeToStorage
} from "@/lib/theme/storage";
import type { ThemeName } from "@/lib/theme/types";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themedHref: (href: string) => string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const appendThemeParam = (href: string, theme: ThemeName) => {
  const [base, hash = ""] = href.split("#");
  const [pathname, search = ""] = base.split("?");
  const params = new URLSearchParams(search);
  params.set(themeQueryKey, theme);
  const queryString = params.toString();
  const rebuilt = queryString ? `${pathname}?${queryString}` : pathname;
  return hash ? `${rebuilt}#${hash}` : rebuilt;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    applyThemeCssVars(theme);
    writeThemeToStorage(theme);
    replaceThemeInSearch(theme);
  }, [theme]);

  const themedHref = useCallback((href: string) => appendThemeParam(href, theme), [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      themedHref
    }),
    [theme, themedHref]
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
