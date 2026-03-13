"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ThemeSwitcher, ThemeHint } from "@/components/theme/theme-switcher";
import { ThemedLink } from "@/components/theme/themed-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";

export const HeroPreview = () => {
  const { theme } = useTheme();
  const { locale } = useLocale();

  const copy =
    locale === "zh"
      ? {
          projectTag: "Stylish: Scenario Shift",
          title: "同一真实场景，三种设计语言。",
          desc: "先切换主题，再进入 Product / Admin / Task。你会看到同一任务流如何被讲成完全不同的产品气质。",
          enter: "进入 Product 场景",
          readMethod: "稍后看方法论",
          switcherLabel: "实时切换主题",
          previewTitle: "即时预览",
          previewDesc: "保持同一场景骨架，观察界面气质变化。",
          focusLabel: "当前主题",
          previewItems: [
            { label: "首屏语气", value: "主标题与留白节奏" },
            { label: "控件气质", value: "按钮、标签、输入框边界" },
            { label: "信息密度", value: "面板层级与区块呼吸感" }
          ]
        }
      : {
          projectTag: "Stylish: Scenario Shift",
          title: "One Real Scenario, Three Design Languages.",
          desc: "Switch theme first, then enter Product, Admin, and Task. The same workflow stays intact while the product expression changes dramatically.",
          enter: "Open Product Scene",
          readMethod: "Methodology Later",
          switcherLabel: "Live Theme Switch",
          previewTitle: "Instant Preview",
          previewDesc: "Same scenario skeleton, different interface tone.",
          focusLabel: "Current Theme",
          previewItems: [
            { label: "Hero Tone", value: "Title hierarchy and whitespace rhythm" },
            { label: "Control Feel", value: "Button, badge, and input edge behavior" },
            { label: "Density", value: "Panel layering and breathing room" }
          ]
        };

  return (
    <section className="grid gap-[var(--space-xl)] py-[var(--space-md)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div className="grid gap-[var(--space-lg)]">
        <div>
          <Badge tone="accent">{copy.projectTag}</Badge>
          <h1 className="title-display mt-4 max-w-4xl text-[var(--scale-hero)] text-token-primary">{copy.title}</h1>
          <p className="mt-4 max-w-2xl text-token-secondary">{copy.desc}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ThemedLink href="/scenes/product">
            <Button size="lg">{copy.enter}</Button>
          </ThemedLink>
          <ThemedLink href="/methodology">
            <Button size="lg" variant="ghost">
              {copy.readMethod}
            </Button>
          </ThemedLink>
        </div>

        <div className="grid gap-2 max-w-[860px]">
          <p className="text-sm font-semibold text-token-primary">{copy.switcherLabel}</p>
          <ThemeSwitcher />
        </div>
      </div>

      <aside className="surface-panel relative overflow-hidden p-[var(--space-lg)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,var(--accent-soft),transparent_62%)]" />
        <div className="relative grid gap-[var(--space-md)]">
          <div>
            <p className="text-sm font-semibold text-token-primary">{copy.previewTitle}</p>
            <p className="mt-1 text-sm text-token-secondary">{copy.previewDesc}</p>
          </div>
          <div className="subtle-panel p-[var(--space-md)]">
            <p className="text-xs text-token-tertiary">{copy.focusLabel}</p>
            <p className="mt-1 font-semibold text-token-primary">{theme}</p>
            <div className="mt-2">
              <ThemeHint theme={theme} />
            </div>
          </div>
          <div className="grid gap-2">
            {copy.previewItems.map((item) => (
              <div key={item.label} className="subtle-panel p-3">
                <p className="text-xs text-token-tertiary">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-token-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};
