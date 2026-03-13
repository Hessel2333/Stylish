"use client";

import { themeDefinitions, themeOrder } from "@/lib/theme/registry";
import type { ThemeName } from "@/lib/theme/types";
import { cn } from "@/lib/utils/cn";
import { useTheme } from "@/components/theme/theme-provider";
import { useLocale } from "@/components/i18n/locale-provider";

type ThemeSwitcherProps = {
  compact?: boolean;
};

export const ThemeSwitcher = ({ compact = false }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const { locale } = useLocale();

  return (
    <div
      className={cn("theme-switcher", compact ? "gap-1" : "gap-2")}
      role="tablist"
      aria-label={locale === "zh" ? "主题切换" : "Theme switcher"}
    >
      {themeOrder.map((name) => {
        const active = name === theme;
        const meta = themeDefinitions[name].meta;
        const labelMap = {
          "apple-hig": locale === "zh" ? "Apple HIG" : "Apple HIG",
          "material-3": locale === "zh" ? "Material 3" : "Material 3",
          "fluent-2": locale === "zh" ? "Fluent 2" : "Fluent 2"
        } as const;
        const titleMap = {
          "apple-hig": locale === "zh" ? "苹果人机界面指南风格" : meta.inspiration,
          "material-3": locale === "zh" ? "Material Design 3 风格" : meta.inspiration,
          "fluent-2": locale === "zh" ? "Fluent 2 设计风格" : meta.inspiration
        } as const;

        return (
          <button
            type="button"
            key={name}
            onClick={() => setTheme(name)}
            role="tab"
            aria-selected={active}
            className={cn(
              "token-tab inline-flex items-center justify-center transition-all",
              compact ? "h-[var(--control-sm)] px-3 text-[0.76rem]" : "h-[var(--control-md)] px-4 text-sm",
              active ? "token-tab-active" : "token-tab-idle"
            )}
            title={titleMap[name]}
          >
            {labelMap[name]}
          </button>
        );
      })}
    </div>
  );
};

export const ThemeHint = ({ theme }: { theme: ThemeName }) => {
  const { locale } = useLocale();
  const meta = themeDefinitions[theme].meta;
  const hintMap = {
    "apple-hig": "Apple HIG：更克制的层次、细腻半透明表面与轻量控件反馈。",
    "material-3": "Material 3：更圆润、亲和、状态反馈更显性。",
    "fluent-2": "Fluent 2：边界更明确、信息密度更高、操作导向。"
  } as const;
  return <p className="text-token-secondary text-sm">{locale === "zh" ? hintMap[theme] : meta.description}</p>;
};
