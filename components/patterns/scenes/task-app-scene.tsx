"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { taskContent } from "@/lib/content/task";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Tabs } from "@/components/ui/tabs";

type SceneTask = {
  id: string;
  title: string;
  project: string;
  owner: string;
  status: string;
  due: string;
};

export const TaskAppScene = () => {
  const { locale } = useLocale();
  const content = taskContent[locale];

  const doneStatus = locale === "zh" ? "已完成" : "Done";
  const inProgressStatus = locale === "zh" ? "进行中" : "In Progress";
  const blockedStatus = locale === "zh" ? "阻塞" : "Blocked";
  const readyStatus = locale === "zh" ? "待开始" : "Ready";
  const statusOptions = [inProgressStatus, blockedStatus, readyStatus, doneStatus];

  const [open, setOpen] = useState(false);
  const tabItems = useMemo(
    () => (locale === "zh" ? ["全部", "进行中", "阻塞", "待开始", "已完成"] : ["All", "In Progress", "Blocked", "Ready", "Done"]),
    [locale]
  );

  const [tasks, setTasks] = useState<SceneTask[]>([]);
  const [filter, setFilter] = useState(tabItems[0]);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [feedback, setFeedback] = useState(locale === "zh" ? "请选择任务查看详情。" : "Select a task to inspect details.");
  const [formState, setFormState] = useState({ title: "", owner: "", due: "", status: readyStatus });
  const [preferences, setPreferences] = useState({ defaultOwner: true, reminder: true, escalation: true });

  useEffect(() => {
    const seededTasks = content.tasks.map((task, index) => ({ ...task, id: `${index}-${task.title}` }));
    setTasks(seededTasks);
    setFilter(tabItems[0]);
    setSelectedTaskId(seededTasks[0]?.id ?? "");
    setFeedback(locale === "zh" ? "请选择任务查看详情。" : "Select a task to inspect details.");
    setFormState({ title: "", owner: "", due: "", status: readyStatus });
    setPreferences({ defaultOwner: true, reminder: true, escalation: true });
  }, [content.tasks, locale, readyStatus, tabItems]);

  const badgeToneMap: Record<string, "neutral" | "warning" | "success" | "danger" | "accent"> =
    locale === "zh"
      ? { "进行中": "accent", 阻塞: "danger", 待开始: "warning", 已完成: "success" }
      : { "In Progress": "accent", Blocked: "danger", Ready: "warning", Done: "success" };

  const filteredTasks = useMemo(() => {
    if (filter === tabItems[0]) {
      return tasks;
    }
    return tasks.filter((task) => task.status === filter);
  }, [filter, tabItems, tasks]);

  useEffect(() => {
    if (!selectedTaskId || !tasks.some((task) => task.id === selectedTaskId)) {
      setSelectedTaskId(tasks[0]?.id ?? "");
    }
  }, [selectedTaskId, tasks]);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) ?? tasks[0] ?? null;

  const createTask = () => {
    if (!formState.title.trim()) {
      setFeedback(locale === "zh" ? "请先输入任务标题。" : "Please provide a task title first.");
      return;
    }

    const newTask: SceneTask = {
      id: `${Date.now()}-${formState.title}`,
      title: formState.title,
      owner: formState.owner || (locale === "zh" ? "未指定" : "Unassigned"),
      due: formState.due || (locale === "zh" ? "待定" : "TBD"),
      status: formState.status,
      project: locale === "zh" ? "手动创建" : "Manual Entry"
    };

    setTasks((prev) => [newTask, ...prev]);
    setSelectedTaskId(newTask.id);
    setOpen(false);
    setFormState({ title: "", owner: "", due: "", status: readyStatus });
    setFeedback(locale === "zh" ? "新任务已加入队列并设为当前焦点。" : "New task added and focused in the queue.");
  };

  const updateTaskStatus = (taskId: string, status: string) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, status } : task)));
    setFeedback(
      locale === "zh"
        ? `任务状态已更新为“${status}”。`
        : `Task status updated to "${status}".`
    );
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const savePreferences = () => {
    setFeedback(locale === "zh" ? "偏好设置已保存。" : "Preferences saved.");
  };

  const resetPreferences = () => {
    setPreferences({ defaultOwner: true, reminder: true, escalation: true });
    setFeedback(locale === "zh" ? "偏好设置已重置为默认。" : "Preferences reset to defaults.");
  };

  const preferenceItems =
    locale === "zh"
      ? [
          { key: "defaultOwner", label: "默认负责人：组长" },
          { key: "reminder", label: "提醒频率：每天 2 次" },
          { key: "escalation", label: "阻塞状态升级：已开启" }
        ]
      : [
          { key: "defaultOwner", label: "Default assignee: Team lead" },
          { key: "reminder", label: "Reminder cadence: 2x per day" },
          { key: "escalation", label: "Blocked-state escalation: Enabled" }
        ];

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1fr_auto]">
        <div className="surface-panel motion-fade-up p-[var(--panel-padding)]">
          <p className="eyebrow">{locale === "zh" ? "今日概览" : "Today Overview"}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <article className="interactive-panel subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "今日到期" : "Due Today"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{content.summary.dueToday}</p>
            </article>
            <article className="interactive-panel subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "进行中" : "In Progress"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{tasks.filter((task) => task.status === inProgressStatus).length}</p>
            </article>
            <article className="interactive-panel subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "已完成" : "Completed"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{tasks.filter((task) => task.status === doneStatus).length}</p>
            </article>
            <article className="interactive-panel subtle-panel p-4">
              <p className="text-sm text-token-secondary">{locale === "zh" ? "阻塞" : "Blocked"}</p>
              <p className="title-display mt-1 text-3xl text-token-primary">{tasks.filter((task) => task.status === blockedStatus).length}</p>
            </article>
          </div>
        </div>

        <div className="flex items-end">
          <Button size="lg" onClick={() => setOpen(true)}>
            {locale === "zh" ? "快速创建任务" : "Quick Create Task"}
          </Button>
        </div>
      </section>

      <div className="interactive-panel subtle-panel flex flex-wrap items-center justify-between gap-3 p-3">
        <p className="text-sm text-token-secondary">{feedback}</p>
        <Badge tone="accent">{locale === "zh" ? "当前筛选" : "Current Filter"}: {filter}</Badge>
      </div>

      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[1.2fr_0.8fr]">
        <Card
          title={locale === "zh" ? "任务队列" : "Task Queue"}
          description={locale === "zh" ? "同一任务流程，不同视觉语言。" : "Same task flow, different visual language."}
        >
          <div className="mb-4 flex flex-wrap gap-3">
            <Tabs
              key={`${locale}-task-tabs`}
              items={tabItems}
              defaultItem={tabItems[0]}
              onChange={setFilter}
              ariaLabel={locale === "zh" ? "任务筛选标签" : "Task filter tabs"}
            />
          </div>
          <div className="grid gap-3">
            {filteredTasks.map((task) => {
              const active = task.id === selectedTaskId;
              return (
                <article key={task.id} className={`interactive-panel subtle-panel p-3 ${active ? "border-[var(--accent)]" : ""}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <button type="button" className="min-w-0 text-left" onClick={() => setSelectedTaskId(task.id)}>
                      <p className="truncate font-semibold text-token-primary">{task.title}</p>
                      <p className="text-sm text-token-secondary">
                        {task.project} · {task.owner}
                      </p>
                    </button>
                    <div className="flex items-center gap-2">
                      <Badge tone={badgeToneMap[task.status] ?? "neutral"}>{task.status}</Badge>
                      <Badge>{task.due}</Badge>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap justify-end gap-2">
                    {task.status !== doneStatus ? (
                      <Button size="sm" variant="secondary" onClick={() => updateTaskStatus(task.id, doneStatus)}>
                        {locale === "zh" ? "标记完成" : "Mark Done"}
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" onClick={() => updateTaskStatus(task.id, inProgressStatus)}>
                        {locale === "zh" ? "重新打开" : "Reopen"}
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
            {filteredTasks.length === 0 ? (
              <div className="subtle-panel p-4 text-sm text-token-secondary">
                {locale === "zh" ? "当前筛选下暂无任务。" : "No tasks in this filter."}
              </div>
            ) : null}
          </div>
        </Card>

        <div className="grid gap-[var(--grid-gap)]">
          <Card
            title={locale === "zh" ? "详情窗格" : "Detail Pane"}
            description={
              selectedTask
                ? `${selectedTask.title} · ${selectedTask.owner}`
                : locale === "zh"
                  ? "请选择任务"
                  : "Select a task"
            }
          >
            {selectedTask ? (
              <>
                <ul className="grid gap-2 text-sm text-token-secondary">
                  <li className="subtle-panel p-3">{locale === "zh" ? "项目" : "Project"}: {selectedTask.project}</li>
                  <li className="subtle-panel p-3">{locale === "zh" ? "截止" : "Due"}: {selectedTask.due}</li>
                  <li className="subtle-panel p-3">{locale === "zh" ? "状态" : "Status"}: {selectedTask.status}</li>
                  {content.detail.checklist.map((item) => (
                    <li key={item} className="subtle-panel p-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => updateTaskStatus(selectedTask.id, doneStatus)}
                    disabled={selectedTask.status === doneStatus}
                  >
                    {locale === "zh" ? "完成此任务" : "Complete Task"}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => updateTaskStatus(selectedTask.id, blockedStatus)}
                    disabled={selectedTask.status === blockedStatus}
                  >
                    {locale === "zh" ? "标记阻塞" : "Mark Blocked"}
                  </Button>
                </div>
              </>
            ) : null}
          </Card>

          <Card
            title={locale === "zh" ? "偏好设置" : "Preferences"}
            description={
              locale === "zh" ? "点击切换开关并保存，查看反馈状态。" : "Toggle switches and save to inspect feedback states."
            }
          >
            <ul className="grid gap-2 text-sm text-token-secondary">
              {preferenceItems.map((item) => {
                const enabled = preferences[item.key as keyof typeof preferences];
                return (
                  <li key={item.key} className="interactive-panel subtle-panel flex items-center justify-between gap-3 p-3">
                    <span>{item.label}</span>
                    <Button size="sm" variant={enabled ? "secondary" : "ghost"} onClick={() => togglePreference(item.key as keyof typeof preferences)}>
                      {enabled ? (locale === "zh" ? "开启" : "On") : locale === "zh" ? "关闭" : "Off"}
                    </Button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex gap-2">
              <Button variant="secondary" size="sm" onClick={savePreferences}>
                {locale === "zh" ? "保存" : "Save"}
              </Button>
              <Button variant="ghost" size="sm" onClick={resetPreferences}>
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
          <article className="interactive-panel subtle-panel p-4">
            <Badge tone="success">{locale === "zh" ? "成功" : "Success"}</Badge>
            <p className="mt-2 text-sm text-token-secondary">
              {locale === "zh" ? "最近 2 小时完成了 4 个任务。" : "4 tasks completed in the last 2 hours."}
            </p>
          </article>
          <article className="interactive-panel subtle-panel p-4">
            <Badge tone="warning">{locale === "zh" ? "信息" : "Info"}</Badge>
            <p className="mt-2 text-sm text-token-secondary">
              {locale === "zh" ? "今天没有逾期任务。" : "No overdue tasks for today."}
            </p>
          </article>
          <article className="interactive-panel subtle-panel p-4">
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
            value={formState.title}
            onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
          />
          <Input
            label={locale === "zh" ? "负责人" : "Owner"}
            placeholder={locale === "zh" ? "例如：Nina" : "e.g. Nina"}
            value={formState.owner}
            onChange={(event) => setFormState((prev) => ({ ...prev, owner: event.target.value }))}
          />
          <Input
            label={locale === "zh" ? "截止日期" : "Due Date"}
            placeholder={locale === "zh" ? "例如：2026-03-17" : "e.g. 2026-03-17"}
            value={formState.due}
            onChange={(event) => setFormState((prev) => ({ ...prev, due: event.target.value }))}
          />
          <div className="grid gap-2">
            <p className="text-sm text-token-secondary">{locale === "zh" ? "初始状态" : "Initial Status"}</p>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <Button
                  key={status}
                  size="sm"
                  variant={formState.status === status ? "secondary" : "ghost"}
                  onClick={() => setFormState((prev) => ({ ...prev, status }))}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              {locale === "zh" ? "取消" : "Cancel"}
            </Button>
            <Button onClick={createTask}>{locale === "zh" ? "创建" : "Create"}</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
