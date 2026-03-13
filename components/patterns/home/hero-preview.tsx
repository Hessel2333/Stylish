"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ThemeSwitcher, ThemeHint } from "@/components/theme/theme-switcher";
import { ThemedLink } from "@/components/theme/themed-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/components/theme/theme-provider";

export const HeroPreview = () => {
  const { theme } = useTheme();
  const { locale } = useLocale();

  const copy =
    locale === "zh"
      ? {
          titleTop: "同一产品场景，",
          titleBottom: "三种设计表达",
          desc: "在统一信息架构下，对比 Product Marketing、Admin Workspace、Task App 在 Apple HIG / Material 3 / Fluent 2 主题中的表达差异。",
          enter: "进入产品场景",
          readMethod: "查看方法论",
          controlTitle: "实时主题控制",
          controlDesc: "现在切换主题，观察留白、密度、控件气质与层级变化。",
          current: "当前主题",
          themes: "主题",
          scenes: "场景",
          system: "组件系统"
        }
      : {
          titleTop: "Same Product Scenario,",
          titleBottom: "Three Design Expressions",
          desc: "Compare how Product Marketing, Admin Workspace, and Task App experience change under Apple HIG, Material 3, and Fluent 2 while preserving one shared information architecture.",
          enter: "Enter Product Scene",
          readMethod: "Read Methodology",
          controlTitle: "Live Theme Control",
          controlDesc: "Switch now and inspect layout rhythm, control tone, and information density.",
          current: "Current theme",
          themes: "Themes",
          scenes: "Scenes",
          system: "Component System"
        };

  return (
    <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--accent-soft),transparent_60%)]" />
        <div className="relative">
          <Badge tone="accent">Stylish: Scenario Shift</Badge>
          <h1 className="title-display mt-4 text-[var(--scale-hero)] text-token-primary">
            {copy.titleTop}
            <br />
            {copy.titleBottom}
          </h1>
          <p className="mt-4 max-w-2xl text-token-secondary">{copy.desc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ThemedLink href="/scenes/product">
              <Button size="lg">{copy.enter}</Button>
            </ThemedLink>
            <ThemedLink href="/methodology">
              <Button size="lg" variant="ghost">
                {copy.readMethod}
              </Button>
            </ThemedLink>
          </div>
        </div>
      </Card>

      <Card title={copy.controlTitle} description={copy.controlDesc}>
        <ThemeSwitcher />
        <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-muted)] p-[var(--space-md)]">
          <p className="text-sm font-semibold text-token-primary">
            {copy.current}: {theme}
          </p>
          <div className="mt-2">
            <ThemeHint theme={theme} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="subtle-panel p-3 text-center">
            <p className="text-2xl font-semibold text-token-primary">3</p>
            <p className="text-xs text-token-secondary">{copy.themes}</p>
          </div>
          <div className="subtle-panel p-3 text-center">
            <p className="text-2xl font-semibold text-token-primary">3</p>
            <p className="text-xs text-token-secondary">{copy.scenes}</p>
          </div>
          <div className="subtle-panel p-3 text-center">
            <p className="text-2xl font-semibold text-token-primary">1</p>
            <p className="text-xs text-token-secondary">{copy.system}</p>
          </div>
        </div>
      </Card>
    </section>
  );
};
