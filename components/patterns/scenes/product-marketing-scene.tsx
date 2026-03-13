"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { useTheme } from "@/components/theme/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { productContent } from "@/lib/content/product";

type ThemeExpression = {
  heroLabel: string;
  heroTone: string;
  storyLead: string;
  capabilityLead: string;
  trustLead: string;
  heroNote: string;
  comparison: string;
};

type StorySection = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  steps: string[];
  metric: string;
  callout: string;
};

type DemoLane = {
  id: string;
  title: string;
  summary: string;
  metrics: string[];
  steps: string[];
};

export const ProductMarketingScene = () => {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const content = productContent[locale];

  const expressionByTheme = useMemo<Record<typeof theme, ThemeExpression>>(
    () =>
      locale === "zh"
        ? {
            "apple-hig": {
              heroLabel: "沉浸式产品叙事",
              heroTone: "媒体成为主角，信息退后，靠画面和节奏建立欲望。",
              storyLead: "像设备官网一样先看见产品，再逐段理解它如何融入真实发布流程。",
              capabilityLead: "把能力做成可感知的演示片段，而不是功能条目堆叠。",
              trustLead: "信任信息放在后段，用少量证据稳住决策。",
              heroNote: "更强调留白、沉浸感与连续镜头式叙事。",
              comparison: "Apple HIG 视角"
            },
            "material-3": {
              heroLabel: "清晰友好的产品讲解",
              heroTone: "视觉仍然强，但每个模块都更易读、更易理解、更容易跟上。",
              storyLead: "把产品能力拆成友好分段，像真实官网里的功能解释流。",
              capabilityLead: "每一段演示都告诉用户当前在看什么、解决什么、下一步是什么。",
              trustLead: "通过更明确的解释和可读卡片帮助团队快速判断价值。",
              heroNote: "更强调解释性、友好度与阅读效率。",
              comparison: "Material 3 视角"
            },
            "fluent-2": {
              heroLabel: "结构化能力说明",
              heroTone: "官网叙事更理性，主视觉服务于能力拆解和组织级采纳判断。",
              storyLead: "把产品故事组织成清晰能力段落，强调流程、治理和扩展性。",
              capabilityLead: "用真实工作流片段解释模块如何落进组织系统。",
              trustLead: "更偏理性证明和采购决策支持，而不是情绪渲染。",
              heroNote: "更强调结构、可评估性与企业工作语境。",
              comparison: "Fluent 2 视角"
            }
          }
        : {
            "apple-hig": {
              heroLabel: "Immersive Product Storytelling",
              heroTone: "Media leads, interface details step back, and desire is built through pace and focus.",
              storyLead: "Lead like a device launch page: see the product first, then understand how it enters a real launch flow.",
              capabilityLead: "Turn capabilities into felt demos instead of stacked feature cards.",
              trustLead: "Keep trust late in the page and use a smaller set of proof points to support the decision.",
              heroNote: "Prioritizes whitespace, immersion, and cinematic sequencing.",
              comparison: "Apple HIG lens"
            },
            "material-3": {
              heroLabel: "Clear, Friendly Product Explanation",
              heroTone: "Still visual-first, but every module becomes easier to read, scan, and understand.",
              storyLead: "Break the product into approachable sections like a real product site that teaches while it sells.",
              capabilityLead: "Each demo explains what the user is seeing, what problem it solves, and what happens next.",
              trustLead: "Value becomes easier to evaluate through readable modules and warmer guidance.",
              heroNote: "Prioritizes explanation, warmth, and readability.",
              comparison: "Material 3 lens"
            },
            "fluent-2": {
              heroLabel: "Structured Capability Narrative",
              heroTone: "The hero stays visual, but the page speaks more rationally to evaluation, rollout, and governance.",
              storyLead: "Organize the story into clearer capability chapters with process and control in focus.",
              capabilityLead: "Use real workflow fragments to explain how the system fits inside modern operating teams.",
              trustLead: "Lean harder on rational proof and enterprise readiness than emotional flourish.",
              heroNote: "Prioritizes structure, evaluability, and enterprise context.",
              comparison: "Fluent 2 lens"
            }
          },
    [locale, theme]
  );

  const sceneCopy = useMemo(
    () =>
      locale === "zh"
        ? {
            trial: "开始试用旅程",
            demo: "打开产品演示",
            storytellingEyebrow: "滚动叙事",
            storytellingTitle: "从“看到产品”到“理解它如何驱动一次真实发布”",
            demoEyebrow: "产品能力演示",
            demoTitle: "不是列能力，而是让用户走一遍发布动作链",
            pricingTitle: "定价与落地路径",
            trustTitle: "真实团队为什么买单",
            ctaTitle: "为下一次发布搭一条真正可执行的协同链路",
            ctaDesc: "保留同一转化骨架，但让三种主题在官网表达上显著分化。",
            ctaPrimary: "预约团队演示",
            ctaSecondary: "阅读采购说明",
            feedbackIdle: "选择一个 CTA 查看转化后反馈。",
            feedbackBooked: "演示请求已加入线索池，系统会附带当前演示章节与关注能力。",
            feedbackBrief: "采购说明已展开为结构化阅读模式，重点聚焦安全、治理与 rollout 支持。",
            demoModalTitle: "官网演示路径",
            demoModalDesc: "真实官网不会只给你一排功能卡片，而是让产品画面、能力解释与落地信息串起来。",
            demoModalContinue: "继续查看",
            close: "关闭",
            launchMap: "发布路线图",
            chapterLabel: "当前章节",
            buyerSignal: "采购判断点",
            selectedPlan: "当前方案",
            choosePlan: "选择方案",
            chosenPlan: "已选择",
            capabilitySignal: "演示聚焦",
            trustSignal: "落地感知"
          }
        : {
            trial: "Start guided trial",
            demo: "Open product demo",
            storytellingEyebrow: "Scroll Storytelling",
            storytellingTitle: "Move from seeing the product to understanding how it powers a real launch.",
            demoEyebrow: "Capability Demo",
            demoTitle: "Show the release workflow, not just the feature inventory.",
            pricingTitle: "Pricing & Rollout Path",
            trustTitle: "Why Teams Actually Buy In",
            ctaTitle: "Build one release operating flow your teams can actually run.",
            ctaDesc: "Keep the same conversion arc while letting each theme express a very different product-site voice.",
            ctaPrimary: "Book team walkthrough",
            ctaSecondary: "Read procurement brief",
            feedbackIdle: "Choose a CTA to reveal the follow-up state.",
            feedbackBooked: "Demo request queued with the current chapter and capability focus attached for the sales handoff.",
            feedbackBrief: "Procurement brief expanded into structured reading mode with governance, security, and rollout guidance.",
            demoModalTitle: "Product Site Demo Path",
            demoModalDesc: "A real product site does more than list features. It sequences media, capability proof, and rollout confidence.",
            demoModalContinue: "Continue exploring",
            close: "Close",
            launchMap: "Launch Map",
            chapterLabel: "Current Chapter",
            buyerSignal: "Buyer Signal",
            selectedPlan: "Selected Plan",
            choosePlan: "Choose plan",
            chosenPlan: "Selected",
            capabilitySignal: "Demo Focus",
            trustSignal: "Adoption Signal"
          },
    [locale]
  );

  const storySections = useMemo<StorySection[]>(
    () =>
      locale === "zh"
        ? [
            {
              id: "hero-device",
              kicker: "01 视觉主角",
              title: "把发布控制台变成官网中的第一主角，而不是背景说明图",
              body: "首屏不再只用文案证明价值，而是直接展示团队如何在一个 launch room 中统一叙事、审批和执行节奏。",
              steps: ["叙事主线固定在同一空间", "各角色状态并排出现", "购买者能一眼理解产品正在做什么"],
              metric: "平均首屏理解时间 22 秒",
              callout: "适合把产品本身当成品牌表达的一部分。"
            },
            {
              id: "story-flow",
              kicker: "02 分段讲述",
              title: "把一次真实发布拆成看得见的章节，而不是卡片并列罗列",
              body: "用户按章节看到目标、素材、审批、上线信号如何前后衔接，滚动时始终知道当前在看哪一个能力片段。",
              steps: ["章节高亮对应 sticky 媒体", "每段只讲一个判断点", "重点从抽象功能转成实际动作"],
              metric: "试用激活率提升 18%",
              callout: "更像设备官网里的逐段高亮叙事。"
            },
            {
              id: "ops-proof",
              kicker: "03 落地证明",
              title: "在末段把治理、采购和团队落地信号讲清楚",
              body: "不是把 pricing 单独挂在底部，而是让定价、信任和 rollout 路径一起回答购买顾虑。",
              steps: ["保留 trust 与 pricing", "把采购判断点前置说明", "让 CTA 紧接真实落地问题"],
              metric: "销售前置问答减少 31%",
              callout: "尤其适合企业型产品的后半段转化。"
            }
          ]
        : [
            {
              id: "hero-device",
              kicker: "01 Media Hero",
              title: "Make the release console the star of the page, not a supporting screenshot.",
              body: "The hero stops relying on copy alone and immediately shows how one launch room aligns messaging, approvals, and execution pace.",
              steps: ["Narrative stays anchored in one place", "Roles and signals appear together", "Buyers instantly understand what the product does"],
              metric: "22s average hero comprehension",
              callout: "Ideal when the product itself should carry brand expression."
            },
            {
              id: "story-flow",
              kicker: "02 Story Chapters",
              title: "Explain one real launch in chapters instead of laying out isolated feature cards.",
              body: "Visitors move through goals, assets, approvals, and launch signals as one sequence, with sticky media keeping the current chapter legible.",
              steps: ["Chapter highlight drives sticky media", "Each block makes one evaluation point", "Capabilities become actions, not abstractions"],
              metric: "+18% trial activation",
              callout: "Much closer to a modern device or product-story page."
            },
            {
              id: "ops-proof",
              kicker: "03 Rollout Proof",
              title: "Close with governance, rollout, and buying confidence instead of a detached pricing block.",
              body: "Pricing, trust, and procurement support answer the last-mile questions together so the CTA feels operationally credible.",
              steps: ["Keep trust and pricing intact", "Surface buyer evaluation signals", "Place CTA next to rollout concerns"],
              metric: "-31% sales pre-call clarification",
              callout: "Especially strong for enterprise software purchase journeys."
            }
          ],
    [locale]
  );

  const demoLanes = useMemo<DemoLane[]>(
    () =>
      locale === "zh"
        ? [
            {
              id: "narrative",
              title: "Narrative Room",
              summary: "产品、市场、运营围绕同一卖点与证据点做协同，而不是各写各的版本。",
              metrics: ["3 个卖点章节", "12 条可复用证据", "4 个角色同时在线"],
              steps: ["统一主叙事", "绑定证据素材", "同步渠道版本"]
            },
            {
              id: "approval",
              title: "Approval Route",
              summary: "法务、财务、品牌和区域团队沿同一路径处理审批，不再靠聊天软件追人。",
              metrics: ["7 个审批节点", "2 条自动升级规则", "风险请求优先级识别"],
              steps: ["识别敏感内容", "按规则路由审批", "把结论回写任务链路"]
            },
            {
              id: "signal",
              title: "Launch Signal",
              summary: "上线前看到 readiness、阻塞项和地区差异，决定是否进入最终发布窗口。",
              metrics: ["88% readiness", "2 个阻塞项", "3 个区域状态并行"],
              steps: ["收集准备度", "暴露阻塞项", "决定是否推进发布时间窗"]
            }
          ]
        : [
            {
              id: "narrative",
              title: "Narrative Room",
              summary: "Product, marketing, and ops align around the same message and proof points instead of writing disconnected versions.",
              metrics: ["3 message chapters", "12 reusable proof points", "4 roles live in-session"],
              steps: ["Align narrative arc", "Attach proof assets", "Sync channel variants"]
            },
            {
              id: "approval",
              title: "Approval Route",
              summary: "Legal, finance, brand, and regional teams move through one approval path instead of chasing decisions in chat.",
              metrics: ["7 approval nodes", "2 auto-escalation rules", "Risk-aware prioritization"],
              steps: ["Identify sensitive content", "Route by policy", "Write outcome back to the workstream"]
            },
            {
              id: "signal",
              title: "Launch Signal",
              summary: "See readiness, blockers, and regional variance before entering the final launch window.",
              metrics: ["88% readiness", "2 blockers", "3 regional states tracked"],
              steps: ["Collect launch readiness", "Expose blockers", "Decide on release window"]
            }
          ],
    [locale]
  );

  const planHighlights = useMemo(() => {
    if (locale === "zh") {
      return {
        Core: ["单条发布主线", "标准 launch room", "基础审批链路"],
        Scale: ["多团队发布治理", "自动策略路由", "区域化上线信号"],
        Enterprise: ["组织级权限边界", "审计与合规支持", "定制 rollout 模板"]
      } as Record<string, string[]>;
    }

    return {
      Core: ["Single launch storyline", "Standard launch rooms", "Baseline approval routing"],
      Scale: ["Multi-team governance", "Automated policy routes", "Regional launch readiness views"],
      Enterprise: ["Org-level permission boundaries", "Audit and compliance support", "Custom rollout frameworks"]
    } as Record<string, string[]>;
  }, [locale]);

  const [heroMode, setHeroMode] = useState<"trial" | "demo">("trial");
  const [activeStoryId, setActiveStoryId] = useState(storySections[0]?.id ?? "");
  const [activeLaneId, setActiveLaneId] = useState(demoLanes[0]?.id ?? "");
  const [activePlan, setActivePlan] = useState<string>(content.pricing[1]?.tier ?? content.pricing[0]?.tier ?? "");
  const [ctaState, setCtaState] = useState<"idle" | "booked" | "brief">("idle");
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    setHeroMode("trial");
    setActiveStoryId(storySections[0]?.id ?? "");
    setActiveLaneId(demoLanes[0]?.id ?? "");
    setActivePlan(content.pricing[1]?.tier ?? content.pricing[0]?.tier ?? "");
    setCtaState("idle");
    setDemoOpen(false);
  }, [content.pricing, demoLanes, storySections]);

  const currentStory = storySections.find((section) => section.id === activeStoryId) ?? storySections[0];
  const currentLane = demoLanes.find((lane) => lane.id === activeLaneId) ?? demoLanes[0];
  const selectedPlan = content.pricing.find((plan) => plan.tier === activePlan) ?? content.pricing[0];
  const currentHeroStats =
    heroMode === "trial"
      ? content.hero.stats
      : locale === "zh"
        ? [
            { label: "演示完成率", value: "86%" },
            { label: "章节停留时长", value: "4.8 分钟" },
            { label: "采购咨询转化", value: "+21%" }
          ]
        : [
            { label: "Demo completion", value: "86%" },
            { label: "Chapter dwell time", value: "4.8 min" },
            { label: "Procurement conversion", value: "+21%" }
          ];

  const ctaFeedback =
    ctaState === "idle"
      ? sceneCopy.feedbackIdle
      : ctaState === "booked"
        ? sceneCopy.feedbackBooked
        : sceneCopy.feedbackBrief;

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="surface-panel relative overflow-hidden p-[var(--card-padding)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--accent-soft),transparent_38%),radial-gradient(circle_at_82%_22%,color-mix(in_hsl,var(--accent)_20%,transparent),transparent_32%)]" />
        <div className="relative grid gap-[var(--space-xl)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="grid gap-[var(--space-lg)]">
            <div className="grid gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="accent">{content.hero.eyebrow}</Badge>
                <Badge>{expressionByTheme[theme].comparison}</Badge>
              </div>
              <div className="max-w-2xl">
                <p className="eyebrow">{expressionByTheme[theme].heroLabel}</p>
                <h2 className="title-display mt-3 text-[var(--scale-hero)] text-token-primary">{content.hero.title}</h2>
                <p className="mt-4 text-token-secondary">{content.hero.description}</p>
                <p className="mt-3 max-w-xl text-sm text-token-tertiary">{expressionByTheme[theme].heroTone}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                variant={heroMode === "trial" ? "primary" : "secondary"}
                onClick={() => setHeroMode("trial")}
              >
                {sceneCopy.trial}
              </Button>
              <Button
                size="lg"
                variant={heroMode === "demo" ? "primary" : "ghost"}
                onClick={() => {
                  setHeroMode("demo");
                  setDemoOpen(true);
                }}
              >
                {sceneCopy.demo}
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {currentHeroStats.map((stat) => (
                <div key={stat.label} className="interactive-panel subtle-panel p-[var(--space-md)]">
                  <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{stat.label}</p>
                  <p className="title-display mt-2 text-3xl text-token-primary">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="interactive-panel subtle-panel grid gap-3 p-[var(--space-md)] md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold text-token-primary">{sceneCopy.launchMap}</p>
                <p className="mt-1 text-sm text-token-secondary">{expressionByTheme[theme].heroNote}</p>
              </div>
              <div className="grid gap-2 text-sm text-token-secondary">
                {content.workflow.slice(0, 3).map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <Badge tone={index === 0 ? "accent" : "neutral"}>{index + 1}</Badge>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[34rem]">
            <div className="absolute inset-0 rounded-[calc(var(--card-radius)*1.1)] border border-[var(--border-subtle)] bg-[color:color-mix(in_hsl,var(--surface)_78%,transparent)]" />
            <div className="absolute left-[5%] top-[8%] h-[82%] w-[62%] rounded-[2.5rem] border border-[var(--border-default)] bg-[linear-gradient(180deg,color-mix(in_hsl,var(--surface)_92%,white_8%),color-mix(in_hsl,var(--surface-muted)_94%,white_6%))] p-4 shadow-[0_24px_80px_color-mix(in_hsl,var(--accent)_12%,transparent)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-token-tertiary">Northstar</p>
                  <p className="mt-1 text-sm font-semibold text-token-primary">{currentStory.title}</p>
                </div>
                <Badge tone="accent">{currentStory.metric}</Badge>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-[1.8rem] border border-[var(--border-subtle)] bg-[linear-gradient(135deg,color-mix(in_hsl,var(--accent)_14%,white_86%),color-mix(in_hsl,var(--surface-muted)_92%,white_8%))] p-4">
                  <div className="flex items-center justify-between text-xs text-token-tertiary">
                    <span>{sceneCopy.chapterLabel}</span>
                    <span>{currentStory.kicker}</span>
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-token-primary">{currentLane.title}</p>
                  <p className="mt-2 text-sm text-token-secondary">{currentLane.summary}</p>
                  <div className="mt-4 grid gap-2">
                    {currentLane.metrics.map((metric) => (
                      <div key={metric} className="rounded-[1.1rem] bg-[color:color-mix(in_hsl,var(--surface)_74%,white_26%)] px-3 py-2 text-sm text-token-primary">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  {currentLane.steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-[1.1rem] border border-[var(--border-subtle)] bg-[var(--surface)] px-3 py-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-token-primary">
                        {index + 1}
                      </span>
                      <span className="text-sm text-token-secondary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-[6%] top-[12%] w-[34%] rounded-[calc(var(--radius-md)+0.4rem)] border border-[var(--border-default)] bg-[var(--surface)] p-4 shadow-[0_22px_48px_color-mix(in_hsl,var(--accent)_12%,transparent)]">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{sceneCopy.buyerSignal}</p>
              <p className="mt-2 text-lg font-semibold text-token-primary">{currentStory.callout}</p>
              <p className="mt-2 text-sm text-token-secondary">{expressionByTheme[theme].storyLead}</p>
            </div>

            <div className="absolute bottom-[7%] right-[2%] w-[46%] rounded-[calc(var(--radius-md)+0.35rem)] border border-[var(--border-subtle)] bg-[color:color-mix(in_hsl,var(--surface)_88%,white_12%)] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{sceneCopy.capabilitySignal}</p>
              <div className="mt-3 grid gap-2">
                {content.valueStrip.map((value) => (
                  <div key={value} className="rounded-[var(--radius-md)] bg-[var(--surface-muted)] px-3 py-2 text-sm text-token-primary">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-[var(--space-lg)]">
        <div className="max-w-3xl">
          <p className="eyebrow">{sceneCopy.storytellingEyebrow}</p>
          <h3 className="title-display mt-3 text-[var(--scale-h2)] text-token-primary">{sceneCopy.storytellingTitle}</h3>
          <p className="mt-3 text-token-secondary">{expressionByTheme[theme].storyLead}</p>
        </div>

        <div className="grid gap-[var(--grid-gap)] lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="surface-panel h-fit p-[var(--panel-padding)] lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-token-primary">{currentStory.kicker}</p>
            <h4 className="title-display mt-3 text-[var(--scale-h2)] text-token-primary">{currentStory.title}</h4>
            <p className="mt-3 text-token-secondary">{currentStory.body}</p>
            <div className="mt-5 rounded-[calc(var(--radius-md)+0.25rem)] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,color-mix(in_hsl,var(--accent)_10%,white_90%),var(--surface))] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-token-primary">Studio Preview</p>
                <Badge tone="accent">{currentStory.metric}</Badge>
              </div>
              <div className="mt-4 grid gap-2">
                {currentStory.steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 rounded-[var(--radius-md)] bg-[var(--surface)] px-3 py-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-token-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm text-token-secondary">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-[var(--radius-md)] bg-[var(--surface-muted)] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{sceneCopy.trustSignal}</p>
              <p className="mt-2 text-sm text-token-primary">{currentStory.callout}</p>
            </div>
          </aside>

          <div className="grid gap-4">
            {storySections.map((section) => {
              const active = section.id === activeStoryId;
              return (
                <button
                  type="button"
                  key={section.id}
                  onClick={() => setActiveStoryId(section.id)}
                  className={`interactive-panel surface-panel grid gap-4 p-[var(--panel-padding)] text-left ${active ? "border-[var(--accent)]" : ""}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-2xl">
                      <p className="eyebrow">{section.kicker}</p>
                      <h4 className="title-display mt-2 text-[var(--scale-h2)] text-token-primary">{section.title}</h4>
                    </div>
                    <Badge tone={active ? "accent" : "neutral"}>{section.metric}</Badge>
                  </div>
                  <p className="text-token-secondary">{section.body}</p>
                  <div className="grid gap-2 md:grid-cols-3">
                    {section.steps.map((step) => (
                      <div key={step} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-3 text-sm text-token-secondary">
                        {step}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-token-tertiary">{section.callout}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-[var(--space-lg)]">
        <div className="max-w-3xl">
          <p className="eyebrow">{sceneCopy.demoEyebrow}</p>
          <h3 className="title-display mt-3 text-[var(--scale-h2)] text-token-primary">{sceneCopy.demoTitle}</h3>
          <p className="mt-3 text-token-secondary">{expressionByTheme[theme].capabilityLead}</p>
        </div>

        <div className="grid gap-[var(--grid-gap)] xl:grid-cols-[0.78fr_1.22fr]">
          <Card>
            <div className="grid gap-3">
              {demoLanes.map((lane) => {
                const active = lane.id === activeLaneId;
                return (
                  <button
                    type="button"
                    key={lane.id}
                    onClick={() => setActiveLaneId(lane.id)}
                    className={`interactive-panel subtle-panel p-4 text-left ${active ? "border-[var(--accent)]" : ""}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-token-primary">{lane.title}</p>
                      <Badge tone={active ? "accent" : "neutral"}>{lane.metrics[0]}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-token-secondary">{lane.summary}</p>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card>
            <div className="grid gap-5">
              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-[calc(var(--radius-md)+0.35rem)] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,color-mix(in_hsl,var(--surface)_92%,white_8%),color-mix(in_hsl,var(--accent)_8%,white_92%))] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{currentLane.title}</p>
                      <p className="mt-1 text-lg font-semibold text-token-primary">{currentLane.summary}</p>
                    </div>
                    <Badge tone="accent">{theme.replace("-", " ")}</Badge>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {currentLane.steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface)] px-4 py-3">
                        <div className="grid gap-1">
                          <span className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{index === 0 ? "Input" : index === 1 ? "Route" : "Output"}</span>
                          <p className="text-sm text-token-primary">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {currentLane.metrics.map((metric) => (
                    <div key={metric} className="interactive-panel subtle-panel p-4">
                      <p className="text-sm font-semibold text-token-primary">{metric}</p>
                      <p className="mt-1 text-sm text-token-secondary">
                        {theme === "apple-hig"
                          ? locale === "zh"
                            ? "以更安静的方式把结果放进画面里。"
                            : "Keeps the outcome quiet and embedded in the scene."
                          : theme === "material-3"
                            ? locale === "zh"
                              ? "通过更清晰的说明帮助用户读懂这一段。"
                              : "Makes the reason and result easier to read at a glance."
                            : locale === "zh"
                              ? "强调它如何映射到组织流程与治理判断。"
                              : "Explains how the signal maps to operations and governance."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {content.features.map((feature) => (
                  <div key={feature.title} className="interactive-panel subtle-panel p-4">
                    <p className="font-semibold text-token-primary">{feature.title}</p>
                    <p className="mt-2 text-sm text-token-secondary">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[0.96fr_1.04fr]">
        <Card title={sceneCopy.trustTitle} description={expressionByTheme[theme].trustLead}>
          <div className="grid gap-3">
            {content.trust.map((item) => (
              <blockquote key={item.source} className="interactive-panel subtle-panel p-4">
                <p className="text-token-primary">"{item.quote}"</p>
                <footer className="mt-3 text-sm text-token-tertiary">{item.source}</footer>
              </blockquote>
            ))}
          </div>
        </Card>

        <Card title={sceneCopy.pricingTitle} description={sceneCopy.ctaDesc}>
          <div className="grid gap-3 md:grid-cols-3">
            {content.pricing.map((plan) => {
              const selected = plan.tier === activePlan;
              return (
                <button
                  type="button"
                  key={plan.tier}
                  onClick={() => setActivePlan(plan.tier)}
                  className={`interactive-panel subtle-panel p-4 text-left ${selected ? "border-[var(--accent)]" : ""}`}
                >
                  <p className="text-sm font-semibold text-token-secondary">{plan.tier}</p>
                  <p className="title-display mt-2 text-3xl text-token-primary">{plan.price}</p>
                  <p className="mt-2 text-sm text-token-secondary">{plan.summary}</p>
                  <div className="mt-3">
                    <Badge tone={selected ? "accent" : "neutral"}>{selected ? sceneCopy.chosenPlan : sceneCopy.choosePlan}</Badge>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-4">
              <p className="text-sm font-semibold text-token-primary">
                {sceneCopy.selectedPlan}: {selectedPlan.tier}
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-token-secondary">
                {(planHighlights[selectedPlan.tier] ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface)] p-4">
              <h4 className="title-display text-[var(--scale-h2)] text-token-primary">{sceneCopy.ctaTitle}</h4>
              <p className="mt-2 text-token-secondary">{sceneCopy.ctaDesc}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button onClick={() => setCtaState("booked")}>{sceneCopy.ctaPrimary}</Button>
                <Button variant="secondary" onClick={() => setCtaState("brief")}>
                  {sceneCopy.ctaSecondary}
                </Button>
              </div>
              <div className="interactive-panel subtle-panel mt-4 p-4">
                <p className="text-sm text-token-secondary">{ctaFeedback}</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Modal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        title={sceneCopy.demoModalTitle}
        description={sceneCopy.demoModalDesc}
        closeLabel={sceneCopy.close}
        backdropLabel={sceneCopy.close}
      >
        <div className="grid gap-3">
          {storySections.map((section, index) => (
            <div key={section.id} className="interactive-panel subtle-panel flex items-start gap-3 p-4">
              <Badge tone="accent">{index + 1}</Badge>
              <div>
                <p className="font-semibold text-token-primary">{section.title}</p>
                <p className="mt-1 text-sm text-token-secondary">{section.body}</p>
              </div>
            </div>
          ))}
          <div className="mt-2 flex justify-end">
            <Button variant="secondary" onClick={() => setDemoOpen(false)}>
              {sceneCopy.demoModalContinue}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
