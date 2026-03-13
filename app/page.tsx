"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { PageShell } from "@/components/layout/page-shell";
import { HeroPreview } from "@/components/patterns/home/hero-preview";
import { SceneEntryGrid } from "@/components/patterns/home/scene-entry-grid";
import { ThemeFeatureOverview } from "@/components/patterns/home/theme-feature-overview";
import { ThemedLink } from "@/components/theme/themed-link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const { locale } = useLocale();

  const copy =
    locale === "zh"
      ? {
          title: "Stylish：场景迁移演示",
          description: "同一场景主线，在 Apple HIG、Material 3、Fluent 2 下呈现不同表达。",
          sceneTitle: "从场景进入体验",
          sceneDesc: "三条固定场景主线，统一信息结构，直接对比主题差异。",
          methodEyebrow: "方法论预告",
          methodTitle: "先体验，再理解系统",
          methodDesc:
            "首页聚焦可比较体验；完整的 token 分层、共享不变量与架构取舍，请在 Methodology 查看。",
          methodCta: "阅读 Methodology"
        }
      : {
          title: "Stylish: Scenario Shift",
          description: "One scenario storyline, three inspired design expressions.",
          sceneTitle: "Enter By Scenario",
          sceneDesc: "Three fixed scenario routes with shared structure for direct comparison.",
          methodEyebrow: "Methodology Preview",
          methodTitle: "Experience First, Then System Thinking",
          methodDesc:
            "The homepage stays focused on demo flow. Visit Methodology for full token layers, invariants, and architecture rationale.",
          methodCta: "Open Methodology"
        };

  return (
    <PageShell title={copy.title} description={copy.description} showIntro={false}>
      <div className="grid gap-[calc(var(--section-gap)*0.85)]">
        <HeroPreview />

        <section className="grid gap-[var(--space-lg)]">
          <div className="max-w-3xl">
            <h2 className="title-display text-[var(--scale-h2)] text-token-primary">{copy.sceneTitle}</h2>
            <p className="mt-2 text-token-secondary">{copy.sceneDesc}</p>
          </div>
          <div className="mt-[var(--space-lg)]">
            <SceneEntryGrid />
          </div>
        </section>

        <section className="pt-[var(--space-sm)]">
          <ThemeFeatureOverview />
        </section>

        <section className="surface-panel grid gap-[var(--space-md)] p-[var(--panel-padding)] md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <Badge tone="neutral">{copy.methodEyebrow}</Badge>
            <h2 className="title-display mt-3 text-[var(--scale-h2)] text-token-primary">{copy.methodTitle}</h2>
            <p className="mt-2 text-token-secondary">{copy.methodDesc}</p>
          </div>
          <ThemedLink href="/methodology" className="md:justify-self-end">
            <Button variant="secondary" size="lg">
              {copy.methodCta}
            </Button>
          </ThemedLink>
        </section>
      </div>
    </PageShell>
  );
}
