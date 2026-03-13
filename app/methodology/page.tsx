"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";
import { methodologyContent } from "@/lib/content/methodology";
import { globalInvariants, sceneInvariants } from "@/lib/theme/invariants";

export default function MethodologyPage() {
  const { locale } = useLocale();
  const content = methodologyContent[locale];

  const copy =
    locale === "zh"
      ? {
          title: "方法论",
          description: "说明 Stylish 如何在固定场景结构上，通过 token 系统切换主题表达。",
          coreTitle: "核心理念",
          scenarioTitle: "场景优先，主题其次",
          invariantTitle: "不变量场景矩阵",
          invariantDesc: "Product / Admin / Task 三个场景共享结构约束。",
          dim: "差异维度",
          sharedTitle: "共享不变量",
          sharedDesc: "为保证主题间可比较性，这些内容保持锁定。",
          variableTitle: "主题变量",
          variableDesc: "通过 token 驱动，而不是复制组件。",
          disclaimerTitle: "Inspired-by 免责声明"
        }
      : {
          title: "Methodology",
          description: "How Stylish keeps scenario structure constant while shifting design language with a tokenized system.",
          coreTitle: "Core Principle",
          scenarioTitle: "Scenario First, Theme Second",
          invariantTitle: "Invariant Scene Matrix",
          invariantDesc: "Shared structure across Product, Admin, and Task scenes.",
          dim: "Difference Dimension",
          sharedTitle: "Shared Invariants",
          sharedDesc: "Locked for fair cross-theme comparison.",
          variableTitle: "Theme Variables",
          variableDesc: "Driven by tokens, not duplicate components.",
          disclaimerTitle: "Inspired-by Disclaimer"
        };

  return (
    <PageShell title={copy.title} description={copy.description}>
      <div className="grid gap-[var(--section-gap)]">
        <Card title={copy.coreTitle} description={content.coreIdea} />

        <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1fr_1fr]">
          <Card title={copy.scenarioTitle} description={content.whyScenarioFirst}>
            <ul className="grid gap-2 text-sm text-token-secondary">
              {locale === "zh" ? (
                <>
                  <li>主题切换不改变模块集合。</li>
                  <li>模块顺序固定，保证横向比较公平。</li>
                  <li>三个页面共享同一虚构产品叙事。</li>
                  <li>关键交互目标保持一致。</li>
                </>
              ) : (
                <>
                  <li>Invariant modules do not change by theme.</li>
                  <li>Module order remains fixed for comparability.</li>
                  <li>Mock content follows one shared product narrative.</li>
                  <li>Key interaction goals stay constant.</li>
                </>
              )}
            </ul>
          </Card>

          <Card title={copy.invariantTitle} description={copy.invariantDesc}>
            <div className="grid gap-3 text-sm text-token-secondary">
              <article className="subtle-panel p-3">
                <p className="font-semibold text-token-primary">{sceneInvariants.product.title[locale]}</p>
                <p>{sceneInvariants.product.modules[locale].join(" -> ")}</p>
              </article>
              <article className="subtle-panel p-3">
                <p className="font-semibold text-token-primary">{sceneInvariants.admin.title[locale]}</p>
                <p>{sceneInvariants.admin.modules[locale].join(" -> ")}</p>
              </article>
              <article className="subtle-panel p-3">
                <p className="font-semibold text-token-primary">{sceneInvariants.task.title[locale]}</p>
                <p>{sceneInvariants.task.modules[locale].join(" -> ")}</p>
              </article>
            </div>
          </Card>
        </section>

        <section className="surface-panel overflow-hidden p-0">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[var(--surface-muted)] text-token-secondary">
                <th className="px-4 py-3 font-semibold">{copy.dim}</th>
                <th className="px-4 py-3 font-semibold">Apple HIG</th>
                <th className="px-4 py-3 font-semibold">Material 3</th>
                <th className="px-4 py-3 font-semibold">Fluent 2</th>
              </tr>
            </thead>
            <tbody>
              {content.dimensions.map((item) => (
                <tr key={item.title} className="border-t border-[var(--border-subtle)]">
                  <td className="px-4 py-3 font-semibold text-token-primary">{item.title}</td>
                  <td className="px-4 py-3 text-token-secondary">{item.apple}</td>
                  <td className="px-4 py-3 text-token-secondary">{item.google}</td>
                  <td className="px-4 py-3 text-token-secondary">{item.microsoft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid gap-[var(--grid-gap)] md:grid-cols-2">
          <Card title={copy.sharedTitle} description={copy.sharedDesc}>
            <ul className="grid gap-2 text-sm text-token-secondary">
              <li>{globalInvariants.narrative[locale]}</li>
              <li>{globalInvariants.dataModel[locale]}</li>
              <li>{locale === "zh" ? "场景模块集合与顺序" : "Scene module set and order"}</li>
              <li>{locale === "zh" ? "核心交互目标" : "Core interaction intent"}</li>
            </ul>
          </Card>

          <Card title={copy.variableTitle} description={copy.variableDesc}>
            <ul className="grid gap-2 text-sm text-token-secondary">
              {locale === "zh" ? (
                <>
                  <li>背景与表面层级</li>
                  <li>文本对比与边框强度</li>
                  <li>圆角、阴影、间距与密度</li>
                  <li>控件高度、图标尺寸、动效曲线</li>
                </>
              ) : (
                <>
                  <li>Background and surface hierarchy</li>
                  <li>Text contrast and border strength</li>
                  <li>Radius, shadow, spacing, density</li>
                  <li>Control height, icon sizing, motion easing</li>
                </>
              )}
            </ul>
          </Card>
        </section>

        <Card title={copy.disclaimerTitle} description={content.disclaimer} />
      </div>
    </PageShell>
  );
}
