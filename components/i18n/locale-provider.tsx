"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultLocale,
  getInitialLocale,
  replaceLocaleInSearch,
  writeLocaleToStorage
} from "@/lib/i18n/storage";
import type { Locale } from "@/lib/i18n/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  useEffect(() => {
    writeLocaleToStorage(locale);
    replaceLocaleInSearch(locale);

    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
