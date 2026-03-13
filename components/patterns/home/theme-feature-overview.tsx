"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const themeSummaryByLocale = {
  zh: [
    {
      name: "Apple HIG",
      keywords: ["克制", "留白优先", "轻边界"],
      description: "更安静的层级表达，强调排版节奏与低噪音界面。"
    },
    {
      name: "Material 3",
      keywords: ["友好", "状态可见", "圆润"],
      description: "更显性的状态反馈，组件关系清晰且亲和。"
    },
    {
      name: "Fluent 2",
      keywords: ["结构化", "效率导向", "秩序感"],
      description: "更明确的分区和信息组织，适合高频工作台场景。"
    }
  ],
  en: [
    {
      name: "Apple HIG",
      keywords: ["Calm", "Whitespace-first", "Light edges"],
      description: "Quiet hierarchy with stronger typography rhythm and lower UI noise."
    },
    {
      name: "Material 3",
      keywords: ["Friendly", "Stateful", "Rounded"],
      description: "More visible interaction states with approachable component tone."
    },
    {
      name: "Fluent 2",
      keywords: ["Structured", "Efficient", "Orderly"],
      description: "Clear section boundaries and denser productivity-oriented composition."
    }
  ]
} as const;

export const ThemeFeatureOverview = () => {
  const { locale } = useLocale();
  const themes = themeSummaryByLocale[locale];
  const copy =
    locale === "zh"
      ? {
          title: "三种设计语言，三种界面气质",
          desc: "同一场景骨架下，只比较表达方式，不展开方法论细节。"
        }
      : {
          title: "Three Design Languages, Three Interface Tones",
          desc: "Same scenario skeleton, different expression style. Deep methodology stays on the dedicated page."
        };

  return (
    <section className="grid gap-[var(--space-lg)]">
      <div className="max-w-3xl">
        <h2 className="title-display text-[var(--scale-h2)] text-token-primary">{copy.title}</h2>
        <p className="mt-2 text-token-secondary">{copy.desc}</p>
      </div>
      <div className="grid gap-[var(--grid-gap)] md:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.name} title={theme.name} description={theme.description} className="interactive-panel h-full">
            <div className="flex flex-wrap gap-2">
              {theme.keywords.map((keyword) => (
                <Badge key={keyword} tone="neutral">
                  {keyword}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
