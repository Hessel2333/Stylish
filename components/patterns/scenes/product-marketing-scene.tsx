"use client";

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
          ctaB: "阅读平台说明"
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
          ctaB: "Read platform brief"
        };

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="surface-panel overflow-hidden p-[var(--card-padding)]">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h2 className="title-display mt-3 text-[var(--scale-hero)] text-token-primary">{content.hero.title}</h2>
        <p className="mt-4 max-w-3xl text-token-secondary">{content.hero.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg">{copy.trial}</Button>
          <Button size="lg" variant="ghost">
            {copy.demo}
          </Button>
        </div>
        <div className="mt-7 grid gap-[var(--grid-gap)] sm:grid-cols-3">
          {content.hero.stats.map((stat) => (
            <div key={stat.label} className="subtle-panel p-[var(--space-md)]">
              <p className="text-2xl font-semibold text-token-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-token-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-[var(--grid-gap)] md:grid-cols-3">
        {content.valueStrip.map((value) => (
          <Card key={value} description={value} className="h-full" />
        ))}
      </section>

      <section className="grid gap-[var(--grid-gap)] md:grid-cols-2">
        {content.features.map((feature) => (
          <Card key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </section>

      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[0.9fr_1.1fr]">
        <Card title={copy.workflowTitle} description={copy.workflowDesc}>
          <ol className="grid gap-3 text-token-secondary">
            {content.workflow.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <Badge tone="accent">{index + 1}</Badge>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Card>
        <Card title={copy.pricingTitle} description={copy.pricingDesc}>
          <div className="grid gap-3 md:grid-cols-3">
            {content.pricing.map((plan) => (
              <article key={plan.tier} className="subtle-panel p-4">
                <p className="text-sm font-semibold text-token-secondary">{plan.tier}</p>
                <p className="title-display mt-2 text-3xl text-token-primary">{plan.price}</p>
                <p className="mt-2 text-sm text-token-secondary">{plan.summary}</p>
              </article>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1.05fr_0.95fr]">
        <Card title={copy.trustTitle} description={copy.trustDesc}>
          <div className="grid gap-3">
            {content.trust.map((item) => (
              <blockquote key={item.source} className="subtle-panel p-4">
                <p className="text-token-primary">"{item.quote}"</p>
                <footer className="mt-2 text-sm text-token-tertiary">{item.source}</footer>
              </blockquote>
            ))}
          </div>
        </Card>
        <Card title={copy.ctaTitle} description={copy.ctaDesc}>
          <div className="flex flex-wrap gap-3">
            <Button>{copy.ctaA}</Button>
            <Button variant="secondary">{copy.ctaB}</Button>
          </div>
        </Card>
      </section>
    </div>
  );
};
