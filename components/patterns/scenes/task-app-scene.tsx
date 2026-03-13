"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { taskContent } from "@/lib/content/task";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Tabs } from "@/components/ui/tabs";

export const TaskAppScene = () => {
  const { locale } = useLocale();
  const content = taskContent[locale];
  const [open, setOpen] = useState(false);

  const tabItems = locale === "zh" ? ["全部", "进行中", "阻塞", "待开始", "已完成"] : ["All", "In Progress", "Blocked", "Ready", "Done"];
  const statusToTabMap = locale === "zh"
    ? { "进行中": "进行中", 阻塞: "阻塞", "待开始": "待开始", "已完成": "已完成" }
    : { "In Progress": "In Progress", Blocked: "Blocked", Ready: "Ready", Done: "Done" };
  const badgeToneMap: Record<string, "neutral" | "warning" | "success" | "danger" | "accent"> =
    locale === "zh"
      ? { "进行中": "accent", 阻塞: "danger", "待开始": "warning", "已完成": "success" }
      : { "In Progress": "accent", Blocked: "danger", Ready: "warning", Done: "success" };

  const [filter, setFilter] = useState(tabItems[0]);

  const filteredTasks = useMemo(() => {
    if (filter === tabItems[0]) {
      return content.tasks;
    }
    return content.tasks.filter((task) => statusToTabMap[task.status as keyof typeof statusToTabMap] === filter);
  }, [content.tasks, filter, statusToTabMap, tabItems]);

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1fr_auto]">
        <div className="surface-panel p-[var(--panel-padding)]">
          <p className="eyebrow">{locale === "zh" ? "今日概览" : "Today Overview"}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <article className="subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "今日到期" : "Due Today"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{content.summary.dueToday}</p>
            </article>
            <article className="subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "进行中" : "In Progress"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{content.summary.inProgress}</p>
            </article>
            <article className="subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "已完成" : "Completed"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{content.summary.completed}</p>
            </article>
            <article className="subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "阻塞" : "Blocked"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{content.summary.blocked}</p>
            </article>
          </div>
        </div>

        <div className="flex items-end">
          <Button size="lg" onClick={() => setOpen(true)}>
            {locale === "zh" ? "快速创建任务" : "Quick Create Task"}
          </Button>
        </div>
      </section>

      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[1.2fr_0.8fr]">
        <Card
          title={locale === "zh" ? "任务队列" : "Task Queue"}
          description={locale === "zh" ? "同一任务流程，不同视觉语言。" : "Same task flow, different visual language."}
        >
          <div className="mb-4 flex flex-wrap gap-3">
            <Tabs
              items={tabItems}
              defaultItem={tabItems[0]}
              onChange={setFilter}
              ariaLabel={locale === "zh" ? "任务筛选标签" : "Task filter tabs"}
            />
          </div>
          <div className="grid gap-3">
            {filteredTasks.map((task) => (
              <article key={task.title} className="subtle-panel flex flex-wrap items-center justify-between gap-3 p-3">
                <div>
                  <p className="font-semibold text-token-primary">{task.title}</p>
                  <p className="text-sm text-token-secondary">
                    {task.project} · {task.owner}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone={badgeToneMap[task.status] ?? "neutral"}>{task.status}</Badge>
                  <Badge>{task.due}</Badge>
                </div>
              </article>
            ))}
          </div>
        </Card>

        <div className="grid gap-[var(--grid-gap)]">
          <Card title={locale === "zh" ? "详情窗格" : "Detail Pane"} description={content.detail.title}>
            <ul className="grid gap-2 text-sm text-token-secondary">
              {content.detail.checklist.map((item) => (
                <li key={item} className="subtle-panel p-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card
            title={locale === "zh" ? "偏好设置" : "Preferences"}
            description={
              locale === "zh" ? "用于补全场景体验的轻量设置区块。" : "Small settings block for scene completeness."
            }
          >
            <ul className="grid gap-2 text-sm text-token-secondary">
              {content.settings.map((item) => (
                <li key={item} className="subtle-panel p-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <Button variant="secondary" size="sm">
                {locale === "zh" ? "保存" : "Save"}
              </Button>
              <Button variant="ghost" size="sm">
                {locale === "zh" ? "重置" : "Reset"}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="surface-panel p-[var(--panel-padding)]">
        <h3 className="title-display text-[var(--scale-h2)] text-token-primary">{locale === "zh" ? "状态反馈" : "State Feedback"}</h3>
        <p className="mt-2 max-w-2xl text-token-secondary">
          {locale === "zh"
            ? "空状态、成功态、提示态在三主题下结构一致，确保对比质量。"
            : "Empty, success, and info states remain structurally identical across themes to preserve comparison quality."}
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="subtle-panel p-4">
            <Badge tone="success">{locale === "zh" ? "成功" : "Success"}</Badge>
            <p className="mt-2 text-sm text-token-secondary">
              {locale === "zh" ? "最近 2 小时完成了 4 个任务。" : "4 tasks completed in the last 2 hours."}
            </p>
          </article>
          <article className="subtle-panel p-4">
            <Badge tone="warning">{locale === "zh" ? "信息" : "Info"}</Badge>
            <p className="mt-2 text-sm text-token-secondary">
              {locale === "zh" ? "今天没有逾期任务。" : "No overdue tasks for today."}
            </p>
          </article>
          <article className="subtle-panel p-4">
            <Badge>{locale === "zh" ? "空状态" : "Empty"}</Badge>
            <p className="mt-2 text-sm text-token-secondary">
              {locale === "zh" ? "Design Ops 队列当前没有分配任务。" : "No tasks assigned to Design Ops queue."}
            </p>
          </article>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={locale === "zh" ? "创建任务" : "Create Task"}
        description={
          locale === "zh"
            ? "同一 Modal 组件通过 token 在三主题中复用。"
            : "A single modal component reused across all themes via component tokens."
        }
        closeLabel={locale === "zh" ? "关闭弹窗" : "Close modal"}
        backdropLabel={locale === "zh" ? "关闭弹窗背景层" : "Close modal backdrop"}
      >
        <div className="grid gap-3">
          <Input
            label={locale === "zh" ? "任务标题" : "Task Title"}
            placeholder={locale === "zh" ? "例如：准备活动 QA 清单" : "e.g. Prepare campaign QA checklist"}
          />
          <Input label={locale === "zh" ? "负责人" : "Owner"} placeholder={locale === "zh" ? "例如：Nina" : "e.g. Nina"} />
          <Input
            label={locale === "zh" ? "截止日期" : "Due Date"}
            placeholder={locale === "zh" ? "例如：2026-03-17" : "e.g. 2026-03-17"}
          />
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              {locale === "zh" ? "取消" : "Cancel"}
            </Button>
            <Button onClick={() => setOpen(false)}>{locale === "zh" ? "创建" : "Create"}</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
