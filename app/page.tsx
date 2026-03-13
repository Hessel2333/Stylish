"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { PageShell } from "@/components/layout/page-shell";
import { HeroPreview } from "@/components/patterns/home/hero-preview";
import { SceneEntryGrid } from "@/components/patterns/home/scene-entry-grid";
import { ThemeFeatureOverview } from "@/components/patterns/home/theme-feature-overview";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const { locale } = useLocale();

  const copy =
    locale === "zh"
      ? {
          title: "Stylish：场景迁移演示",
          description: "一个静态展示站点：在同一产品场景下，通过三种设计语言呈现不同表达。",
          sectionTitle: "三大场景入口",
          sectionDesc: "进入 Product Marketing、Admin Workspace、Task App 对比体验。场景结构固定，仅主题 token 变化。",
          whyTitle: "为什么这不是组件陈列页",
          whyDesc: "核心目标是场景可比较性：比较完整信息结构与工作流，而非孤立组件。",
          methodTitle: "方法论",
          methodDesc: "查看不变量层、Primitive/Semantic/Component token 与密度配置如何协作。"
        }
      : {
          title: "Stylish: Scenario Shift",
          description:
            "A static showcase that demonstrates how the same product scenarios can be expressed through three inspired design languages using one shared component system.",
          sectionTitle: "Three Scenario Entry Points",
          sectionDesc:
            "Jump into Product Marketing, Admin Workspace, or Task App. The scene structure is fixed; only theme tokens change.",
          whyTitle: "Why This Is Not a Component Gallery",
          whyDesc:
            "The objective is scenario comparability. We compare whole workflows and information hierarchy, not isolated button demos.",
          methodTitle: "Methodology",
          methodDesc:
            "Read how invariants, primitive tokens, semantic tokens, component tokens, and density profiles work together."
        };

  return (
    <PageShell title={copy.title} description={copy.description}>
      <div className="grid gap-[var(--section-gap)]">
        <HeroPreview />

        <section>
          <h2 className="title-display text-[var(--scale-h2)] text-token-primary">{copy.sectionTitle}</h2>
          <p className="mt-2 text-token-secondary">{copy.sectionDesc}</p>
          <div className="mt-[var(--space-lg)]">
            <SceneEntryGrid />
          </div>
        </section>

        <ThemeFeatureOverview />

        <section className="grid gap-[var(--grid-gap)] md:grid-cols-2">
          <Card title={copy.whyTitle} description={copy.whyDesc} />
          <Card title={copy.methodTitle} description={copy.methodDesc} />
        </section>
      </div>
    </PageShell>
  );
}
