"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { Card } from "@/components/ui/card";

const comparisonByLocale = {
  zh: [
    {
      dimension: "留白节奏",
      apple: "更大段落留白",
      google: "平衡且亲和分组",
      microsoft: "更紧凑、任务导向"
    },
    {
      dimension: "圆角与边界",
      apple: "边界更弱更安静",
      google: "圆润且状态明显",
      microsoft: "边界清晰、分区明确"
    },
    {
      dimension: "控件气质",
      apple: "克制",
      google: "友好",
      microsoft: "高效"
    },
    {
      dimension: "动效节奏",
      apple: "偏慢且细腻",
      google: "中速且反馈明显",
      microsoft: "更快更直接"
    }
  ],
  en: [
    {
      dimension: "Whitespace Rhythm",
      apple: "Large section breaks",
      google: "Balanced with friendly grouping",
      microsoft: "Compact and task-oriented"
    },
    {
      dimension: "Radius + Edge",
      apple: "Soft + quiet edges",
      google: "Round + stateful surfaces",
      microsoft: "Sharper + clear borders"
    },
    {
      dimension: "Control Personality",
      apple: "Calm and restrained",
      google: "Approachable and expressive",
      microsoft: "Efficient and direct"
    },
    {
      dimension: "Motion Tempo",
      apple: "Slower and polished",
      google: "Medium and responsive",
      microsoft: "Fast and pragmatic"
    }
  ]
} as const;

export const ThemeFeatureOverview = () => {
  const { locale } = useLocale();
  const comparisons = comparisonByLocale[locale];

  return (
    <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[0.95fr_1.05fr]">
      <Card
        title={locale === "zh" ? "不仅仅是换颜色" : "Theme Differences Beyond Color"}
        description={
          locale === "zh"
            ? "主题系统同时改变密度、圆角、边框强度、阴影层级、控件高度、图标尺寸与动效节奏。"
            : "The token system also shifts density, radius, border strength, shadow weight, control height, icon sizing, and motion cadence."
        }
      >
        <ul className="grid gap-2 text-token-secondary">
          {locale === "zh" ? (
            <>
              <li>Primitive Tokens：原始色值、间距、圆角、阴影、字体、动效</li>
              <li>Semantic Tokens：背景、表面、文本层级、焦点、状态</li>
              <li>Component Tokens：Button/Input/Card/Table/Tabs/Modal 参数</li>
              <li>Density Profiles：区块间距、内容宽度、工具栏与表格密度</li>
            </>
          ) : (
            <>
              <li>Primitive Tokens: raw color, spacing, radius, shadows, typography, motion</li>
              <li>Semantic Tokens: background, surface, text hierarchy, focus, status</li>
              <li>Component Tokens: Button/Input/Card/Table/Tabs/Modal behavior</li>
              <li>Density Profiles: section gap, max width, toolbar and table density</li>
            </>
          )}
        </ul>
      </Card>

      <div className="surface-panel overflow-hidden p-0">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[var(--surface-muted)] text-token-secondary">
              <th className="px-4 py-3 font-semibold">{locale === "zh" ? "维度" : "Dimension"}</th>
              <th className="px-4 py-3 font-semibold">Apple HIG</th>
              <th className="px-4 py-3 font-semibold">Material 3</th>
              <th className="px-4 py-3 font-semibold">Fluent 2</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item) => (
              <tr key={item.dimension} className="border-t border-[var(--border-subtle)]">
                <td className="px-4 py-3 font-semibold text-token-primary">{item.dimension}</td>
                <td className="px-4 py-3 text-token-secondary">{item.apple}</td>
                <td className="px-4 py-3 text-token-secondary">{item.google}</td>
                <td className="px-4 py-3 text-token-secondary">{item.microsoft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
