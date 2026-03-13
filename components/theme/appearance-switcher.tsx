"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import type { AppearanceMode } from "@/lib/theme/types";

const modes: AppearanceMode[] = ["standard", "liquid-glass"];

export const AppearanceSwitcher = () => {
  const { locale } = useLocale();
  const { theme, appearance, setAppearance } = useTheme();

  if (theme !== "apple-hig") {
    return null;
  }

  const labels = {
    standard: locale === "zh" ? "标准" : "Standard",
    "liquid-glass": locale === "zh" ? "Liquid Glass" : "Liquid Glass"
  } as const;

  return (
    <div
      className="theme-switcher"
      role="tablist"
      aria-label={locale === "zh" ? "材质模式切换" : "Appearance mode switcher"}
    >
      {modes.map((mode) => {
        const active = appearance === mode;
        return (
          <button
            key={mode}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setAppearance(mode)}
            className={cn(
              "token-tab inline-flex h-[var(--control-sm)] items-center justify-center px-3 text-xs",
              active ? "token-tab-active" : "token-tab-idle"
            )}
          >
            {labels[mode]}
          </button>
        );
      })}
    </div>
  );
};
