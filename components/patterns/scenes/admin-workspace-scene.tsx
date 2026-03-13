"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { adminContent } from "@/lib/content/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";

const statusToneMap: Record<string, "neutral" | "warning" | "danger"> = {
  warning: "warning",
  danger: "danger",
  neutral: "neutral"
};

export const AdminWorkspaceScene = () => {
  const { locale } = useLocale();
  const content = adminContent[locale];
  const tableRows = content.table as ReadonlyArray<Record<string, string>>;

  const navItems = locale === "zh" ? ["概览", "审批", "策略", "集成", "审计日志"] : ["Overview", "Approvals", "Policies", "Integrations", "Audit Trail"];
  const tabs = locale === "zh" ? ["全部", "待处理", "高优先", "自动化"] : ["All", "Pending", "Critical", "Automated"];

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[0.24fr_0.76fr]">
        <aside className="surface-panel p-[var(--panel-padding)]">
          <p className="eyebrow mb-3">{locale === "zh" ? "导航" : "Navigation"}</p>
          <ul className="grid gap-2 text-sm text-token-secondary">
            {navItems.map((item, index) => (
              <li
                key={item}
                className={
                  index === 0
                    ? "rounded-[var(--radius-sm)] bg-[var(--accent-soft)] px-3 py-2 text-token-primary"
                    : "rounded-[var(--radius-sm)] px-3 py-2"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="grid gap-[var(--grid-gap)]">
          <div className="surface-panel flex min-h-[var(--toolbar-height)] flex-wrap items-center justify-between gap-3 p-[var(--space-md)]">
            <Tabs items={tabs} defaultItem={tabs[0]} ariaLabel={locale === "zh" ? "筛选标签" : "Filter tabs"} />
            <div className="flex flex-wrap gap-2">
              {content.topActions.map((action) => (
                <Button key={action} variant="ghost" size="sm">
                  {action}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-[var(--grid-gap)] sm:grid-cols-2 xl:grid-cols-4">
            {content.kpis.map((kpi) => (
              <Card key={kpi.label}>
                <p className="text-sm text-token-secondary">{kpi.label}</p>
                <p className="title-display mt-2 text-4xl text-token-primary">{kpi.value}</p>
                <p className="mt-2 text-xs text-token-tertiary">{kpi.delta}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[1fr_1fr]">
        <Card
          title={locale === "zh" ? "运营信号" : "Operations Signal"}
          description={
            locale === "zh"
              ? "仅用于对比视觉语言差异的静态分析区块。"
              : "Static analytics panel used to compare visual language only."
          }
        >
          <div className="h-56 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,color-mix(in_hsl,var(--accent)_10%,white),transparent)] p-4">
            <div className="grid h-full grid-cols-7 items-end gap-2">
              {[52, 62, 44, 73, 66, 80, 58].map((value, idx) => (
                <div
                  key={idx}
                  className="rounded-t-[var(--radius-xs)] bg-[var(--accent)]/70"
                  style={{ height: `${value}%`, minHeight: "18%" }}
                />
              ))}
            </div>
          </div>
        </Card>

        <Card
          title={locale === "zh" ? "审批队列" : "Approval Queue"}
          description={
            locale === "zh"
              ? "队列结构在三主题中保持一致。"
              : "Queue structure stays fixed across themes."
          }
        >
          <div className="grid gap-3">
            {content.queue.map((item) => (
              <article key={item.title} className="subtle-panel flex flex-wrap items-center justify-between gap-3 p-3">
                <div>
                  <p className="font-semibold text-token-primary">{item.title}</p>
                  <p className="text-sm text-token-secondary">
                    {item.team} · {item.owner}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone={statusToneMap[item.status]}>{item.due}</Badge>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[1.2fr_0.8fr]">
        <Card
          title={locale === "zh" ? "工作流表格" : "Workflow Table"}
          description={
            locale === "zh"
              ? "共享数据结构，保证场景比较公平。"
              : "Shared data schema for scenario comparability."
          }
        >
          <DataTable<Record<string, string>>
            columns={
              locale === "zh"
                ? [
                    { key: "workflow", label: "流程" },
                    { key: "requester", label: "发起人" },
                    { key: "state", label: "状态" },
                    { key: "sla", label: "SLA" },
                    { key: "priority", label: "优先级" }
                  ]
                : [
                    { key: "workflow", label: "Workflow" },
                    { key: "requester", label: "Requester" },
                    { key: "state", label: "State" },
                    { key: "sla", label: "SLA" },
                    { key: "priority", label: "Priority" }
                  ]
            }
            rows={tableRows}
          />
        </Card>

        <Card
          title={content.detailPanel.title}
          description={
            locale === "zh"
              ? "详情面板与操作语义在三主题中保持一致。"
              : "Detail panel mirrors the same operations semantics."
          }
        >
          <ul className="grid gap-3 text-sm text-token-secondary">
            {content.detailPanel.points.map((point) => (
              <li key={point} className="subtle-panel p-3">
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
};
