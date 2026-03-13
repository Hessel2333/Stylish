"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { cn } from "@/lib/utils/cn";

const locales = [
  { value: "zh", label: "中文" },
  { value: "en", label: "EN" }
] as const;

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="theme-switcher" role="tablist" aria-label={locale === "zh" ? "语言切换" : "Language switcher"}>
      {locales.map((item) => {
        const active = item.value === locale;
        return (
          <button
            type="button"
            key={item.value}
            role="tab"
            aria-selected={active}
            onClick={() => setLocale(item.value)}
            className={cn(
              "token-tab inline-flex h-[var(--control-sm)] items-center justify-center px-3 text-xs",
              active ? "token-tab-active" : "token-tab-idle"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
