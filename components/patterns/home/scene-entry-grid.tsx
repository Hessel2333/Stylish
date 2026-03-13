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
      description: "在统一转化主线下，对比首屏层级、定价表达与信任模块风格差异。"
    },
    {
      title: "管理工作台",
      href: "/scenes/admin",
      description: "对比导航强度、信息密度与运营处理模块在三主题下的呈现。"
    },
    {
      title: "任务应用",
      href: "/scenes/task",
      description: "在相同任务结构中观察日常操作反馈与控件气质变化。"
    }
  ],
  en: [
    {
      title: "Product Marketing",
      href: "/scenes/product",
      description:
        "See how hero hierarchy, pricing tone, and trust modules shift while keeping one conversion storyline."
    },
    {
      title: "Admin Workspace",
      href: "/scenes/admin",
      description: "Compare navigation strength, data density, and operational clarity in a shared admin workflow."
    },
    {
      title: "Task App",
      href: "/scenes/task",
      description: "Observe how daily task interaction mood changes without changing task data structure or flow."
    }
  ]
} as const;

export const SceneEntryGrid = () => {
  const { locale } = useLocale();

  return (
    <section className="grid gap-[var(--grid-gap)] md:grid-cols-3">
      {entries[locale].map((entry) => (
        <Card key={entry.title} title={entry.title} description={entry.description}>
          <ThemedLink href={entry.href}>
            <Button variant="secondary">{locale === "zh" ? "进入场景" : "Open Scene"}</Button>
          </ThemedLink>
        </Card>
      ))}
    </section>
  );
};
