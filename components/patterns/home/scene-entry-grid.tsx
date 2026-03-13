"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ThemedLink } from "@/components/theme/themed-link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const entries = {
  zh: [
    {
      title: "产品营销",
      href: "/scenes/product",
      description: "同一转化主线，对比首屏层级与信任表达。",
      focus: "价值叙事 / 定价语气"
    },
    {
      title: "管理工作台",
      href: "/scenes/admin",
      description: "同一运营流程，对比导航秩序与信息密度。",
      focus: "筛选效率 / 数据处理"
    },
    {
      title: "任务应用",
      href: "/scenes/task",
      description: "同一任务流，观察控件反馈与操作节奏。",
      focus: "主流程 / 状态反馈"
    }
  ],
  en: [
    {
      title: "Product Marketing",
      href: "/scenes/product",
      description: "One conversion storyline, different hero and trust expression.",
      focus: "Value narrative / pricing tone"
    },
    {
      title: "Admin Workspace",
      href: "/scenes/admin",
      description: "One operations workflow, different navigation and density balance.",
      focus: "Filter clarity / data handling"
    },
    {
      title: "Task App",
      href: "/scenes/task",
      description: "One task flow, different interaction mood and response.",
      focus: "Core flow / state feedback"
    }
  ]
} as const;

export const SceneEntryGrid = () => {
  const { locale } = useLocale();

  return (
    <section className="grid gap-[var(--grid-gap)] md:grid-cols-3">
      {entries[locale].map((entry) => (
        <Card key={entry.title} title={entry.title} description={entry.description} className="interactive-panel flex min-h-[236px] flex-col">
          <p className="text-xs text-token-tertiary">{entry.focus}</p>
          <div className="mt-auto pt-[var(--space-lg)]">
            <ThemedLink href={entry.href}>
              <Button variant="secondary" className="w-full">
                {locale === "zh" ? "进入体验" : "Enter Scene"}
              </Button>
            </ThemedLink>
          </div>
        </Card>
      ))}
    </section>
  );
};
