"use client";

import { useEffect, useMemo, useState } from "react";
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

  const navItems = useMemo(
    () => (locale === "zh" ? ["概览", "审批", "策略", "集成", "审计日志"] : ["Overview", "Approvals", "Policies", "Integrations", "Audit Trail"]),
    [locale]
  );
  const tabs = useMemo(
    () => (locale === "zh" ? ["全部", "待处理", "高优先", "自动化"] : ["All", "Pending", "Critical", "Automated"]),
    [locale]
  );

  const [activeNav, setActiveNav] = useState(navItems[0]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [chartRange, setChartRange] = useState<"week" | "month">("week");
  const [selectedQueueTitle, setSelectedQueueTitle] = useState<string>(content.queue[0]?.title ?? "");
  const [actionNote, setActionNote] = useState(locale === "zh" ? "点击顶部操作，查看状态反馈。" : "Click a top action to inspect state feedback.");

  useEffect(() => {
    setActiveNav(navItems[0]);
    setActiveTab(tabs[0]);
    setActiveAction(null);
    setChartRange("week");
    setSelectedQueueTitle(content.queue[0]?.title ?? "");
    setActionNote(locale === "zh" ? "点击顶部操作，查看状态反馈。" : "Click a top action to inspect state feedback.");
  }, [content.queue, locale, navItems, tabs]);

  const filteredQueue = useMemo(() => {
    if (activeTab === tabs[0]) {
      return content.queue;
    }

    if (activeTab === tabs[1]) {
      return content.queue.filter((item) => item.status !== "neutral");
    }

    if (activeTab === tabs[2]) {
      return content.queue.filter((item) => item.status === "danger");
    }

    return content.queue.filter((item) => item.status === "neutral");
  }, [activeTab, content.queue, tabs]);

  const filteredTable = useMemo(() => {
    const rows = content.table as ReadonlyArray<Record<string, string>>;

    if (activeTab === tabs[0]) {
      return rows;
    }

    if (activeTab === tabs[1]) {
      return locale === "zh"
        ? rows.filter((row) => row.state === "待处理" || row.state === "审核中")
        : rows.filter((row) => row.state === "Pending" || row.state === "In Review");
    }

    if (activeTab === tabs[2]) {
      return rows.filter((row) => row.priority === "P1" || row.state === (locale === "zh" ? "阻塞" : "Blocked"));
    }

    return locale === "zh" ? rows.filter((row) => row.state === "已通过") : rows.filter((row) => row.state === "Approved");
  }, [activeTab, content.table, locale, tabs]);

  useEffect(() => {
    if (!filteredQueue.some((item) => item.title === selectedQueueTitle)) {
      setSelectedQueueTitle(filteredQueue[0]?.title ?? "");
    }
  }, [filteredQueue, selectedQueueTitle]);

  const selectedQueue = filteredQueue.find((item) => item.title === selectedQueueTitle) ?? filteredQueue[0] ?? null;

  const chartValues = chartRange === "week" ? [52, 62, 44, 73, 66, 80, 58] : [41, 47, 55, 63, 69, 72, 77];

  const handleAction = (action: string) => {
    setActiveAction(action);

    if (locale === "zh") {
      const notes: Record<string, string> = {
        导出: "已生成本周运营快照，状态将在通知中心同步。",
        规则: "规则草稿面板已展开，当前显示 P1 升级路径。",
        邀请成员: "邀请弹窗已准备，可批量导入协作者邮箱。",
        创建策略: "策略模板向导已切换到第 1 步。"
      };
      setActionNote(notes[action] ?? "操作已触发。");
      return;
    }

    const notes: Record<string, string> = {
      Export: "Weekly operations snapshot is generated and queued to notifications.",
      Rules: "Rule draft panel expanded with P1 escalation path in focus.",
      Invite: "Invite drawer is ready for batch collaborator emails.",
      "Create Policy": "Policy template wizard switched to step 1."
    };
    setActionNote(notes[action] ?? "Action triggered.");
  };

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[0.24fr_0.76fr]">
        <aside className="surface-panel motion-fade-up p-[var(--panel-padding)]">
          <p className="eyebrow mb-3">{locale === "zh" ? "导航" : "Navigation"}</p>
          <ul className="grid gap-2 text-sm text-token-secondary">
            {navItems.map((item) => {
              const active = item === activeNav;
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setActiveNav(item)}
                    className={`interactive-panel w-full rounded-[var(--radius-sm)] px-3 py-2 text-left ${
                      active ? "bg-[var(--accent-soft)] text-token-primary" : "text-token-secondary"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="grid gap-[var(--grid-gap)]">
          <div className="surface-panel motion-fade-up p-[var(--space-md)]">
            <div className="flex min-h-[var(--toolbar-height)] flex-wrap items-center justify-between gap-3">
              <Tabs
                key={`${locale}-admin-tabs`}
                items={tabs}
                defaultItem={tabs[0]}
                onChange={setActiveTab}
                ariaLabel={locale === "zh" ? "筛选标签" : "Filter tabs"}
              />
              <div className="flex flex-wrap gap-2">
                {content.topActions.map((action) => (
                  <Button
                    key={action}
                    variant={activeAction === action ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => handleAction(action)}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
            <div className="interactive-panel subtle-panel mt-3 flex flex-wrap items-center justify-between gap-3 p-3">
              <p className="text-sm text-token-secondary">{actionNote}</p>
              {activeAction ? <Badge tone="accent">{locale === "zh" ? "当前操作" : "Active Action"}: {activeAction}</Badge> : null}
            </div>
          </div>

          <div className="grid gap-[var(--grid-gap)] sm:grid-cols-2 xl:grid-cols-4">
            {content.kpis.map((kpi) => (
              <Card key={kpi.label} className="interactive-panel">
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
              ? "切换周期观察趋势变化，保持同一图形结构。"
              : "Switch range to inspect trend changes while keeping identical chart structure."
          }
        >
          <div className="mb-3 flex gap-2">
            <Button size="sm" variant={chartRange === "week" ? "secondary" : "ghost"} onClick={() => setChartRange("week")}>
              {locale === "zh" ? "7 天" : "7d"}
            </Button>
            <Button size="sm" variant={chartRange === "month" ? "secondary" : "ghost"} onClick={() => setChartRange("month")}>
              {locale === "zh" ? "30 天" : "30d"}
            </Button>
          </div>
          <div className="h-56 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,color-mix(in_hsl,var(--accent)_10%,white),transparent)] p-4">
            <div className="grid h-full grid-cols-7 items-end gap-2">
              {chartValues.map((value, idx) => (
                <div
                  key={`${chartRange}-${idx}`}
                  className="motion-fade-up rounded-t-[var(--radius-xs)] bg-[var(--accent)]/70"
                  style={{ height: `${value}%`, minHeight: "18%", animationDelay: `${idx * 40}ms` }}
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
            {filteredQueue.map((item) => {
              const active = item.title === selectedQueueTitle;
              return (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => setSelectedQueueTitle(item.title)}
                  className={`interactive-panel subtle-panel flex flex-wrap items-center justify-between gap-3 p-3 text-left ${
                    active ? "border-[var(--accent)]" : ""
                  }`}
                >
                  <div>
                    <p className="font-semibold text-token-primary">{item.title}</p>
                    <p className="text-sm text-token-secondary">
                      {item.team} · {item.owner}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge tone={statusToneMap[item.status]}>{item.due}</Badge>
                  </div>
                </button>
              );
            })}
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
          {filteredTable.length > 0 ? (
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
              rows={filteredTable}
            />
          ) : (
            <div className="subtle-panel p-4 text-sm text-token-secondary">
              {locale === "zh" ? "当前筛选没有匹配条目。" : "No rows match this filter."}
            </div>
          )}
        </Card>

        <Card
          title={content.detailPanel.title}
          description={
            locale === "zh"
              ? "详情面板与操作语义在三主题中保持一致。"
              : "Detail panel mirrors the same operations semantics."
          }
        >
          {selectedQueue ? (
            <div className="interactive-panel subtle-panel mb-3 p-3">
              <p className="text-sm font-semibold text-token-primary">{selectedQueue.title}</p>
              <p className="mt-1 text-sm text-token-secondary">{selectedQueue.team} · {selectedQueue.owner}</p>
            </div>
          ) : null}
          <p className="mb-2 text-xs text-token-tertiary">
            {locale === "zh" ? "当前视图" : "Current View"}: {activeNav} / {activeTab}
          </p>
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
