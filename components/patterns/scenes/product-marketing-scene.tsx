"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { productContent } from "@/lib/content/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ProductMarketingScene = () => {
  const { locale } = useLocale();
  const content = productContent[locale];

  const copy =
    locale === "zh"
      ? {
          trial: "开始 14 天试用",
          demo: "查看产品演示",
          workflowTitle: "发布工作流",
          workflowDesc: "该结构在三主题中保持不变。",
          pricingTitle: "定价方案",
          pricingDesc: "定价层级在三主题下完全一致。",
          trustTitle: "信任背书",
          trustDesc: "使用中性社会证明，维持同一叙事弧线。",
          ctaTitle: "准备好统一下一次发布协同了吗？",
          ctaDesc: "同一场景主线，不同主题表达。",
          ctaA: "预约团队演示",
          ctaB: "阅读平台说明",
          stageTitle: "当前体验模式",
          stageTrial: "试用引导",
          stageDemo: "演示巡检",
          stageDetailTrial: "聚焦快速上手与价值落地，强调启动速度。",
          stageDetailDemo: "聚焦跨团队协同细节，强调路径可视化。",
          progress: "体验完成度",
          featureFocus: "当前选中能力",
          workflowHint: "点击步骤查看差异化说明",
          nextStep: "下一步",
          selectedPlan: "当前选中方案",
          choosePlan: "选择此方案",
          chosenPlan: "已选中",
          actionIdle: "请选择一个 CTA 操作，查看反馈内容。",
          actionBooked: "演示请求已加入待办队列，销售顾问会在 24 小时内联系。",
          actionBrief: "平台说明已展开为阅读模式，你可以继续查看治理和权限章节。"
        }
      : {
          trial: "Start 14-day trial",
          demo: "Watch guided demo",
          workflowTitle: "Launch Workflow",
          workflowDesc: "A shared structure that stays constant across themes.",
          pricingTitle: "Pricing",
          pricingDesc: "Pricing tiers remain identical in each visual language.",
          trustTitle: "Trust Signals",
          trustDesc: "Neutral social proof to reinforce the same narrative arc.",
          ctaTitle: "Ready to align your next launch?",
          ctaDesc: "One shared storyline. Three visual languages.",
          ctaA: "Book team walkthrough",
          ctaB: "Read platform brief",
          stageTitle: "Current Experience Mode",
          stageTrial: "Trial Onboarding",
          stageDemo: "Demo Walkthrough",
          stageDetailTrial: "Focuses on fast adoption and immediate value realization.",
          stageDetailDemo: "Focuses on cross-team orchestration details and route visibility.",
          progress: "Experience Completion",
          featureFocus: "Focused Capability",
          workflowHint: "Click each step to inspect emphasis",
          nextStep: "Next Step",
          selectedPlan: "Selected Plan",
          choosePlan: "Choose this plan",
          chosenPlan: "Selected",
          actionIdle: "Choose one CTA action to reveal response content.",
          actionBooked: "Demo request queued. A solution consultant will follow up in 24 hours.",
          actionBrief: "Platform brief is now expanded in reading mode with governance sections."
        };

  const [heroMode, setHeroMode] = useState<"trial" | "demo">("trial");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activePlan, setActivePlan] = useState<string>(content.pricing[1]?.tier ?? content.pricing[0].tier);
  const [activeFeature, setActiveFeature] = useState<string>(content.features[0]?.title ?? "");
  const [ctaState, setCtaState] = useState<"idle" | "booked" | "brief">("idle");

  useEffect(() => {
    setHeroMode("trial");
    setActiveWorkflowStep(0);
    setActivePlan(content.pricing[1]?.tier ?? content.pricing[0].tier);
    setActiveFeature(content.features[0]?.title ?? "");
    setCtaState("idle");
  }, [locale, content.features, content.pricing]);

  const heroSignal =
    heroMode === "trial"
      ? {
          label: copy.stageTrial,
          detail: copy.stageDetailTrial,
          progress: 62,
          stats: content.hero.stats.map((item) => item.value)
        }
      : {
          label: copy.stageDemo,
          detail: copy.stageDetailDemo,
          progress: 88,
          stats:
            locale === "zh"
              ? ["演示转化预估 +18%", "平均评审轮次 -1.2", "跨团队同步时长 -34%"]
              : ["+18% projected demo conversion", "-1.2 avg review rounds", "-34% cross-team sync time"]
        };

  const workflowNotes =
    locale === "zh"
      ? [
          "范围清晰后，后续审批与叙事不会反复回滚。",
          "同一素材主线可减少重复沟通和版本分叉。",
          "审批规则自动化后，节奏更稳定、风险更可控。",
          "上线后持续观测可帮助团队快速做第二轮优化。"
        ]
      : [
          "Once scope is clear, downstream approvals avoid repeated rollback.",
          "Shared narrative assets reduce duplicated communication and version drift.",
          "Automation in approvals keeps release rhythm predictable and lower risk.",
          "Post-launch monitoring supports faster second-iteration optimization."
        ];

  const selectedPlan = content.pricing.find((plan) => plan.tier === activePlan) ?? content.pricing[0];

  const planHighlights = useMemo(() => {
    if (locale === "zh") {
      return {
        Core: ["标准发布模板", "基础审批流", "单产品线协作"],
        Scale: ["多团队治理视图", "策略路由规则", "SLA 风险看板"],
        Enterprise: ["高级权限边界", "组织级审计能力", "定制化合规策略"]
      } as Record<string, string[]>;
    }

    return {
      Core: ["Standard launch templates", "Baseline approval paths", "Single product line operations"],
      Scale: ["Multi-team governance view", "Policy routing rules", "SLA risk dashboards"],
      Enterprise: ["Advanced permission boundaries", "Org-level auditability", "Custom compliance strategies"]
    } as Record<string, string[]>;
  }, [locale]);

  const ctaFeedback =
    ctaState === "idle" ? copy.actionIdle : ctaState === "booked" ? copy.actionBooked : copy.actionBrief;

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="surface-panel motion-fade-up overflow-hidden p-[var(--card-padding)]">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h2 className="title-display mt-3 text-[var(--scale-hero)] text-token-primary">{content.hero.title}</h2>
        <p className="mt-4 max-w-3xl text-token-secondary">{content.hero.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg" variant={heroMode === "trial" ? "primary" : "secondary"} onClick={() => setHeroMode("trial")}>
            {copy.trial}
          </Button>
          <Button size="lg" variant={heroMode === "demo" ? "primary" : "ghost"} onClick={() => setHeroMode("demo")}>
            {copy.demo}
          </Button>
        </div>

        <div className="interactive-panel subtle-panel mt-5 grid gap-3 p-[var(--space-md)] sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-semibold text-token-primary">{copy.stageTitle}: {heroSignal.label}</p>
            <p className="mt-1 text-sm text-token-secondary">{heroSignal.detail}</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-[var(--radius-full)] bg-[var(--surface-muted)]">
              <div
                key={`${heroMode}-progress`}
                className="motion-progress h-full rounded-[var(--radius-full)] bg-[var(--accent)]"
                style={{ width: `${heroSignal.progress}%` }}
              />
            </div>
          </div>
          <Badge tone="accent">{copy.progress} {heroSignal.progress}%</Badge>
        </div>

        <div className="mt-7 grid gap-[var(--grid-gap)] sm:grid-cols-3">
          {content.hero.stats.map((stat, index) => (
            <div key={stat.label} className="interactive-panel subtle-panel p-[var(--space-md)]">
              <p className="text-2xl font-semibold text-token-primary">{heroSignal.stats[index] ?? stat.value}</p>
              <p className="mt-1 text-sm text-token-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-[var(--grid-gap)] md:grid-cols-3">
        {content.valueStrip.map((value) => (
          <Card key={value} description={value} className="interactive-panel h-full" />
        ))}
      </section>

      <section className="grid gap-[var(--grid-gap)] md:grid-cols-2">
        {content.features.map((feature) => {
          const isActive = feature.title === activeFeature;
          return (
            <Card key={feature.title} title={feature.title} description={feature.description} className="interactive-panel h-full">
              <Button
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveFeature(feature.title)}
                className={isActive ? "motion-pulse-soft" : ""}
              >
                {locale === "zh" ? "查看关联说明" : "View linked brief"}
              </Button>
              {isActive ? (
                <p className="mt-3 text-sm text-token-secondary">
                  {copy.featureFocus}: {feature.title}
                </p>
              ) : null}
            </Card>
          );
        })}
      </section>

      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[0.9fr_1.1fr]">
        <Card title={copy.workflowTitle} description={copy.workflowDesc}>
          <p className="mb-3 text-xs text-token-tertiary">{copy.workflowHint}</p>
          <ol className="grid gap-2 text-token-secondary">
            {content.workflow.map((step, index) => {
              const active = index === activeWorkflowStep;
              return (
                <li key={step}>
                  <button
                    type="button"
                    onClick={() => setActiveWorkflowStep(index)}
                    className={`interactive-panel subtle-panel flex w-full items-start gap-3 p-3 text-left ${active ? "border-[var(--accent)]" : ""}`}
                  >
                    <Badge tone={active ? "accent" : "neutral"}>{index + 1}</Badge>
                    <span>{step}</span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="interactive-panel subtle-panel mt-4 p-3 text-sm text-token-secondary">
            <p className="font-semibold text-token-primary">{content.workflow[activeWorkflowStep]}</p>
            <p className="mt-1">{workflowNotes[activeWorkflowStep]}</p>
          </div>
          <div className="mt-3 flex justify-end">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setActiveWorkflowStep((prev) => (prev + 1) % content.workflow.length)}
            >
              {copy.nextStep}
            </Button>
          </div>
        </Card>

        <Card title={copy.pricingTitle} description={copy.pricingDesc}>
          <div className="grid gap-3 md:grid-cols-3">
            {content.pricing.map((plan) => {
              const selected = activePlan === plan.tier;
              return (
                <article key={plan.tier} className={`interactive-panel subtle-panel p-4 ${selected ? "motion-fade-up border-[var(--accent)]" : ""}`}>
                  <p className="text-sm font-semibold text-token-secondary">{plan.tier}</p>
                  <p className="title-display mt-2 text-3xl text-token-primary">{plan.price}</p>
                  <p className="mt-2 text-sm text-token-secondary">{plan.summary}</p>
                  <Button
                    size="sm"
                    variant={selected ? "primary" : "secondary"}
                    className="mt-3 w-full"
                    onClick={() => setActivePlan(plan.tier)}
                  >
                    {selected ? copy.chosenPlan : copy.choosePlan}
                  </Button>
                </article>
              );
            })}
          </div>
          <div className="interactive-panel subtle-panel mt-4 p-4">
            <p className="text-sm font-semibold text-token-primary">
              {copy.selectedPlan}: {selectedPlan.tier}
            </p>
            <ul className="mt-2 grid gap-2 text-sm text-token-secondary">
              {(planHighlights[selectedPlan.tier] ?? []).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </Card>
      </section>

      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1.05fr_0.95fr]">
        <Card title={copy.trustTitle} description={copy.trustDesc}>
          <div className="grid gap-3">
            {content.trust.map((item) => (
              <blockquote key={item.source} className="interactive-panel subtle-panel p-4">
                <p className="text-token-primary">"{item.quote}"</p>
                <footer className="mt-2 text-sm text-token-tertiary">{item.source}</footer>
              </blockquote>
            ))}
          </div>
        </Card>
        <Card title={copy.ctaTitle} description={copy.ctaDesc}>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setCtaState("booked")}>{copy.ctaA}</Button>
            <Button variant="secondary" onClick={() => setCtaState("brief")}>
              {copy.ctaB}
            </Button>
          </div>
          <div className="interactive-panel subtle-panel mt-4 p-4">
            <p className="text-sm text-token-secondary">{ctaFeedback}</p>
          </div>
        </Card>
      </section>
    </div>
  );
};
