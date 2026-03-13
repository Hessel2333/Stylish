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
      description: "进入同一款产品官网，看媒体主导叙事、能力演示与采购转化如何随主题改变语气。",
      focus: "产品主视觉 / 分段讲述 / 采购转化"
    },
    {
      title: "管理工作台",
      href: "/scenes/admin",
      description: "进入真实审批工作台，在导航、台账、规则和日志之间完成一项运营处理任务。",
      focus: "审批台账 / 策略规则 / 审计闭环"
    },
    {
      title: "任务应用",
      href: "/scenes/task",
      description: "进入日常任务系统，在 List、Board、Timeline 中安排、推进、延后与阻塞任务。",
      focus: "时间维度 / 详情侧栏 / 执行操作"
    }
  ],
  en: [
    {
      title: "Product Marketing",
      href: "/scenes/product",
      description: "Enter the same product site and compare how media-led storytelling, capability demos, and buying confidence shift by theme.",
      focus: "Hero media / story chapters / buying flow"
    },
    {
      title: "Admin Workspace",
      href: "/scenes/admin",
      description: "Step into a working approvals console where navigation, ledger, rules, and audit logs support one real operations task.",
      focus: "Approval ledger / policy rules / audit loop"
    },
    {
      title: "Task App",
      href: "/scenes/task",
      description: "Use the same daily task system across List, Board, and Timeline views to schedule, unblock, and complete work.",
      focus: "Time model / detail pane / execution flow"
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
