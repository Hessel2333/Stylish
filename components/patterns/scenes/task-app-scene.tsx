"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";

type TaskStatus = "ready" | "progress" | "blocked" | "done";
type TaskView = "list" | "board" | "timeline";

type ChecklistItem = {
  id: string;
  label: string;
  done: boolean;
};

type TaskItem = {
  id: string;
  title: string;
  project: string;
  assignee: string;
  status: TaskStatus;
  dueLabel: string;
  dueDate: string;
  dayBucket: "today" | "upcoming" | "later";
  description: string;
  dependencies: string[];
  checklist: ChecklistItem[];
  comments: { id: string; author: string; text: string; time: string }[];
  activity: string[];
  timelineSpan: { start: number; end: number };
};

export const TaskAppScene = () => {
  const { locale } = useLocale();
  const { theme } = useTheme();

  const copy = useMemo(
    () =>
      locale === "zh"
        ? {
            title: "今日执行面板",
            desc: "同一任务骨架不变，但三种主题通过信息流和操作优先级体现不同的日常使用感。",
            views: {
              list: "List",
              board: "Board",
              timeline: "Timeline"
            },
            summary: {
              today: "Today",
              upcoming: "Upcoming",
              timeline: "Timeline"
            },
            actions: {
              create: "新建任务",
              addToCalendar: "加入日程",
              postpone: "延后一天",
              block: "标记阻塞",
              unblock: "恢复进行中",
              done: "标记完成",
              reopen: "重新打开"
            },
            detail: {
              title: "任务详情",
              checklist: "Checklist",
              comments: "Comments",
              activity: "Activity",
              dependencies: "Dependencies",
              dueDate: "截止时间",
              assignee: "负责人",
              status: "状态"
            },
            createTitle: "创建任务",
            createDesc: "把新任务放进今天、即将到来或后续时间轴，并立即进入执行视图。",
            project: "项目",
            taskTitle: "任务标题",
            assignee: "负责人",
            dueDate: "截止日期",
            lane: "初始状态",
            schedule: "时间区间",
            todayGroup: "Today",
            upcomingGroup: "Upcoming",
            laterGroup: "Timeline Later",
            addComment: "添加评论",
            feedbackIdle: "选择任务后，可以调整状态、排期并查看活动记录。",
            close: "关闭",
            cancel: "取消",
            create: "创建",
            empty: "当前视图暂无任务。",
            themeNote:
              theme === "apple-hig"
                ? "Apple HIG 下更强调当前聚焦任务与安静的时间流。"
                : theme === "material-3"
                  ? "Material 3 下更强调清晰说明、可读分组和易操作反馈。"
                  : "Fluent 2 下更强调结构化台账、状态切换与执行效率。"
          }
        : {
            title: "Today Execution Hub",
            desc: "The task skeleton stays fixed, while each theme changes the feeling of daily work through information flow and action priority.",
            views: {
              list: "List",
              board: "Board",
              timeline: "Timeline"
            },
            summary: {
              today: "Today",
              upcoming: "Upcoming",
              timeline: "Timeline"
            },
            actions: {
              create: "Create task",
              addToCalendar: "Add to calendar",
              postpone: "Postpone 1 day",
              block: "Mark blocked",
              unblock: "Resume progress",
              done: "Mark done",
              reopen: "Reopen"
            },
            detail: {
              title: "Task Detail",
              checklist: "Checklist",
              comments: "Comments",
              activity: "Activity",
              dependencies: "Dependencies",
              dueDate: "Due date",
              assignee: "Assignee",
              status: "Status"
            },
            createTitle: "Create Task",
            createDesc: "Drop a new task into today, upcoming work, or the later timeline and continue execution immediately.",
            project: "Project",
            taskTitle: "Task title",
            assignee: "Assignee",
            dueDate: "Due date",
            lane: "Initial status",
            schedule: "Time bucket",
            todayGroup: "Today",
            upcomingGroup: "Upcoming",
            laterGroup: "Timeline Later",
            addComment: "Add comment",
            feedbackIdle: "Select a task to adjust status, schedule, and activity history.",
            close: "Close",
            cancel: "Cancel",
            create: "Create",
            empty: "No tasks in this view.",
            themeNote:
              theme === "apple-hig"
                ? "Apple HIG emphasizes the focused task and a calmer flow of time."
                : theme === "material-3"
                  ? "Material 3 emphasizes readable grouping, explanation, and approachable actions."
                  : "Fluent 2 emphasizes structured execution, state changes, and work throughput."
          },
    [locale, theme]
  );

  const statusLabels: Record<TaskStatus, string> =
    locale === "zh"
      ? { ready: "待开始", progress: "进行中", blocked: "阻塞", done: "已完成" }
      : { ready: "Ready", progress: "In Progress", blocked: "Blocked", done: "Done" };

  const statusTone: Record<TaskStatus, "warning" | "accent" | "danger" | "success"> = {
    ready: "warning",
    progress: "accent",
    blocked: "danger",
    done: "success"
  };

  const renderSoftPill = (label: string | number, tone: "neutral" | "accent" | "success" | "warning" | "danger" = "neutral") => {
    return (
      <Badge tone={tone} appearance={tone === "neutral" ? "meta" : "status"} className="px-3 text-xs">
        {label}
      </Badge>
    );
  };

  const bucketLabels =
    locale === "zh"
      ? { today: "Today", upcoming: "Upcoming", later: "Timeline Later" }
      : { today: "Today", upcoming: "Upcoming", later: "Timeline Later" };

  const initialTasks = useMemo<TaskItem[]>(
    () =>
      locale === "zh"
        ? [
            {
              id: "task-1",
              title: "完成留存活动发布文案",
              project: "Q2 发布",
              assignee: "Nina",
              status: "progress",
              dueLabel: "今天 17:00",
              dueDate: "2026-03-13 17:00",
              dayBucket: "today",
              description: "需要整合 PM 最新证据点，并把法务确认过的表述回写到渠道版本中。",
              dependencies: ["等待 PM 更新最终证据点", "依赖法务确认竞品措辞"],
              checklist: [
                { id: "1-1", label: "同步最新证据点", done: true },
                { id: "1-2", label: "确认法务安全表达", done: false },
                { id: "1-3", label: "交付渠道版本", done: false }
              ],
              comments: [
                { id: "c-1", author: "Lucas", text: "数据团队已经给出最终 uplift 数字。", time: "今天 09:12" },
                { id: "c-2", author: "Maya", text: "法务希望把比较措辞再收敛一点。", time: "今天 10:05" }
              ],
              activity: ["09:20 移入进行中", "10:10 附加新证据点版本", "11:15 等待法务反馈"],
              timelineSpan: { start: 0, end: 1 }
            },
            {
              id: "task-2",
              title: "与数据团队统一指标命名",
              project: "运营协同",
              assignee: "Lucas",
              status: "blocked",
              dueLabel: "明天 10:00",
              dueDate: "2026-03-14 10:00",
              dayBucket: "today",
              description: "跨团队 dashboard 的 retention 命名不一致，导致评论区和周报口径冲突。",
              dependencies: ["等待数据团队 schema 确认", "依赖 PM 统一产品内展示文案"],
              checklist: [
                { id: "2-1", label: "梳理冲突字段", done: true },
                { id: "2-2", label: "与数据团队确认 schema", done: false },
                { id: "2-3", label: "更新周报模板", done: false }
              ],
              comments: [{ id: "c-3", author: "Iris", text: "schema 变更要等今晚仓库同步。", time: "今天 08:40" }],
              activity: ["昨天 16:40 创建任务", "今天 08:45 标记阻塞"],
              timelineSpan: { start: 1, end: 2 }
            },
            {
              id: "task-3",
              title: "准备内部赋能演示材料",
              project: "Enablement",
              assignee: "Maya",
              status: "ready",
              dueLabel: "3 月 16 日",
              dueDate: "2026-03-16 14:00",
              dayBucket: "upcoming",
              description: "把 Product / Admin / Task 三种场景的对比结论整理成面向销售和 CS 的 enablement 材料。",
              dependencies: ["等待最新产品截图", "依赖运营团队确认重点问题"],
              checklist: [
                { id: "3-1", label: "整理场景切换逻辑", done: false },
                { id: "3-2", label: "准备对外 demo 话术", done: false },
                { id: "3-3", label: "补充 FAQ", done: false }
              ],
              comments: [],
              activity: ["昨天 19:10 加入 upcoming"],
              timelineSpan: { start: 3, end: 4 }
            },
            {
              id: "task-4",
              title: "审核 onboarding 引导草稿",
              project: "产品教育",
              assignee: "Iris",
              status: "done",
              dueLabel: "3 月 12 日",
              dueDate: "2026-03-12 16:00",
              dayBucket: "later",
              description: "检查 onboarding walkthrough 中的术语、顺序与 CTA 引导是否一致。",
              dependencies: ["等待设计稿定版"],
              checklist: [
                { id: "4-1", label: "检查文案一致性", done: true },
                { id: "4-2", label: "确认 CTA 顺序", done: true }
              ],
              comments: [{ id: "c-4", author: "Nina", text: "已在版本 3 中修正 CTA 顺序。", time: "昨天 14:30" }],
              activity: ["昨天 15:10 标记完成"],
              timelineSpan: { start: 2, end: 3 }
            }
          ]
        : [
            {
              id: "task-1",
              title: "Finalize launch copy for retention campaign",
              project: "Q2 Launch",
              assignee: "Nina",
              status: "progress",
              dueLabel: "Today 17:00",
              dueDate: "2026-03-13 17:00",
              dayBucket: "today",
              description: "Pull in the latest PM proof points and write legal-safe phrasing back into every channel variant.",
              dependencies: ["Waiting on PM proof points", "Depends on legal approval for competitor wording"],
              checklist: [
                { id: "1-1", label: "Sync latest proof points", done: true },
                { id: "1-2", label: "Confirm legal-safe language", done: false },
                { id: "1-3", label: "Hand off channel variants", done: false }
              ],
              comments: [
                { id: "c-1", author: "Lucas", text: "Data team shared the final uplift numbers.", time: "Today 09:12" },
                { id: "c-2", author: "Maya", text: "Legal wants the comparison phrasing tightened.", time: "Today 10:05" }
              ],
              activity: ["09:20 moved to In Progress", "10:10 attached new proof draft", "11:15 waiting on legal feedback"],
              timelineSpan: { start: 0, end: 1 }
            },
            {
              id: "task-2",
              title: "Align analytics naming with data team",
              project: "Ops Sync",
              assignee: "Lucas",
              status: "blocked",
              dueLabel: "Tomorrow 10:00",
              dueDate: "2026-03-14 10:00",
              dayBucket: "today",
              description: "Retention terminology is inconsistent across dashboards, comments, and weekly reporting.",
              dependencies: ["Waiting on data-team schema confirmation", "Depends on PM wording update"],
              checklist: [
                { id: "2-1", label: "List conflicting fields", done: true },
                { id: "2-2", label: "Confirm schema with data team", done: false },
                { id: "2-3", label: "Update reporting template", done: false }
              ],
              comments: [{ id: "c-3", author: "Iris", text: "Schema changes are blocked until tonight's sync.", time: "Today 08:40" }],
              activity: ["Yesterday 16:40 created", "Today 08:45 marked blocked"],
              timelineSpan: { start: 1, end: 2 }
            },
            {
              id: "task-3",
              title: "Prepare internal enablement deck",
              project: "Enablement",
              assignee: "Maya",
              status: "ready",
              dueLabel: "Mar 16",
              dueDate: "2026-03-16 14:00",
              dayBucket: "upcoming",
              description: "Turn Product / Admin / Task scene findings into internal enablement for sales and CS.",
              dependencies: ["Waiting on updated product screenshots", "Needs ops confirmation on common objections"],
              checklist: [
                { id: "3-1", label: "Structure scenario comparison", done: false },
                { id: "3-2", label: "Draft external demo talking points", done: false },
                { id: "3-3", label: "Add FAQ", done: false }
              ],
              comments: [],
              activity: ["Yesterday 19:10 moved to upcoming"],
              timelineSpan: { start: 3, end: 4 }
            },
            {
              id: "task-4",
              title: "Review onboarding walkthrough draft",
              project: "Product Education",
              assignee: "Iris",
              status: "done",
              dueLabel: "Mar 12",
              dueDate: "2026-03-12 16:00",
              dayBucket: "later",
              description: "Check wording, sequence, and CTA progression in the onboarding walkthrough.",
              dependencies: ["Waiting on final design file"],
              checklist: [
                { id: "4-1", label: "Review copy consistency", done: true },
                { id: "4-2", label: "Confirm CTA order", done: true }
              ],
              comments: [{ id: "c-4", author: "Nina", text: "CTA order corrected in version 3.", time: "Yesterday 14:30" }],
              activity: ["Yesterday 15:10 marked done"],
              timelineSpan: { start: 2, end: 3 }
            }
          ],
    [locale]
  );

  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState(initialTasks[0]?.id ?? "");
  const [activeView, setActiveView] = useState<TaskView>("list");
  const [feedback, setFeedback] = useState(copy.feedbackIdle);
  const [open, setOpen] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [formState, setFormState] = useState({
    title: "",
    project: "",
    assignee: "",
    dueDate: "",
    status: "ready" as TaskStatus,
    schedule: "today" as "today" | "upcoming" | "later"
  });

  useEffect(() => {
    setTasks(initialTasks);
    setSelectedTaskId(initialTasks[0]?.id ?? "");
    setActiveView("list");
    setFeedback(copy.feedbackIdle);
    setOpen(false);
    setCommentInput("");
    setFormState({ title: "", project: "", assignee: "", dueDate: "", status: "ready", schedule: "today" });
  }, [copy.feedbackIdle, initialTasks]);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) ?? tasks[0] ?? null;

  const todayTasks = tasks.filter((task) => task.dayBucket === "today");
  const upcomingTasks = tasks.filter((task) => task.dayBucket === "upcoming");
  const timelineTasks = tasks.filter((task) => task.dayBucket !== "today");
  const completedCount = tasks.filter((task) => task.status === "done").length;
  const blockedCount = tasks.filter((task) => task.status === "blocked").length;

  const updateTask = (taskId: string, updater: (task: TaskItem) => TaskItem) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? updater(task) : task)));
  };

  const changeStatus = (taskId: string, status: TaskStatus) => {
    updateTask(taskId, (task) => ({
      ...task,
      status,
      activity: [
        locale === "zh" ? `刚刚 状态更新为 ${statusLabels[status]}` : `Just now status changed to ${statusLabels[status]}`,
        ...task.activity
      ]
    }));

    setFeedback(
      locale === "zh"
        ? `任务状态已切换为 ${statusLabels[status]}。`
        : `Task status changed to ${statusLabels[status]}.`
    );
  };

  const toggleChecklist = (taskId: string, itemId: string) => {
    updateTask(taskId, (task) => ({
      ...task,
      checklist: task.checklist.map((item) => (item.id === itemId ? { ...item, done: !item.done } : item))
    }));
  };

  const postponeTask = (taskId: string) => {
    updateTask(taskId, (task) => ({
      ...task,
      dayBucket: task.dayBucket === "today" ? "upcoming" : "later",
      dueLabel: locale === "zh" ? "已延后 1 天" : "Postponed +1 day",
      activity: [locale === "zh" ? "刚刚 延后 1 天" : "Just now postponed by 1 day", ...task.activity]
    }));
    setFeedback(locale === "zh" ? "任务已延后 1 天并移动到后续时间段。" : "Task postponed by one day and moved later in the schedule.");
  };

  const addToCalendar = (taskId: string) => {
    updateTask(taskId, (task) => ({
      ...task,
      activity: [
        locale === "zh" ? "刚刚 已加入团队日程" : "Just now added to team calendar",
        ...task.activity
      ]
    }));
    setFeedback(locale === "zh" ? "任务已加入团队日程。" : "Task added to the team calendar.");
  };

  const addComment = () => {
    if (!selectedTask || !commentInput.trim()) {
      return;
    }

    updateTask(selectedTask.id, (task) => ({
      ...task,
      comments: [
        {
          id: `${Date.now()}-${commentInput}`,
          author: locale === "zh" ? "你" : "You",
          text: commentInput,
          time: locale === "zh" ? "刚刚" : "Just now"
        },
        ...task.comments
      ],
      activity: [locale === "zh" ? "刚刚 添加评论" : "Just now added a comment", ...task.activity]
    }));
    setCommentInput("");
    setFeedback(locale === "zh" ? "评论已加入任务详情。" : "Comment added to the task detail.");
  };

  const createTask = () => {
    if (!formState.title.trim()) {
      setFeedback(locale === "zh" ? "请先填写任务标题。" : "Please enter a task title first.");
      return;
    }

    const newTask: TaskItem = {
      id: `${Date.now()}-${formState.title}`,
      title: formState.title,
      project: formState.project || (locale === "zh" ? "手动创建" : "Manual Entry"),
      assignee: formState.assignee || (locale === "zh" ? "未指定" : "Unassigned"),
      status: formState.status,
      dueLabel: formState.dueDate || (locale === "zh" ? "待排期" : "Unscheduled"),
      dueDate: formState.dueDate || "",
      dayBucket: formState.schedule,
      description: locale === "zh" ? "新建任务，等待补充详细说明。" : "New task created and waiting for fuller task detail.",
      dependencies: [],
      checklist: [],
      comments: [],
      activity: [locale === "zh" ? "刚刚 创建任务" : "Just now created"],
      timelineSpan: formState.schedule === "today" ? { start: 0, end: 1 } : formState.schedule === "upcoming" ? { start: 3, end: 4 } : { start: 4, end: 5 }
    };

    setTasks((prev) => [newTask, ...prev]);
    setSelectedTaskId(newTask.id);
    setOpen(false);
    setFormState({ title: "", project: "", assignee: "", dueDate: "", status: "ready", schedule: "today" });
    setFeedback(locale === "zh" ? "新任务已创建并成为当前焦点。" : "New task created and set as the current focus.");
  };

  const statusOptions = (Object.keys(statusLabels) as TaskStatus[]).map((status) => ({
    value: status,
    label: statusLabels[status]
  }));

  const scheduleOptions = [
    { value: "today", label: bucketLabels.today },
    { value: "upcoming", label: bucketLabels.upcoming },
    { value: "later", label: bucketLabels.later }
  ];

  const renderListGroup = (title: string, items: TaskItem[]) => (
    <div className="grid gap-3">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-token-tertiary">{title}</h4>
          {renderSoftPill(items.length, "neutral")}
        </div>
      {items.length === 0 ? (
        <div className="subtle-panel p-4 text-sm text-token-secondary">{copy.empty}</div>
      ) : (
        items.map((task) => {
          const active = task.id === selectedTaskId;
          return (
            <button
              type="button"
              key={task.id}
              onClick={() => setSelectedTaskId(task.id)}
              className={`interactive-panel surface-panel p-[var(--space-md)] text-left ${active ? "border-[var(--accent)]" : ""}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-token-primary">{task.title}</p>
                  <p className="mt-1 text-sm text-token-secondary">
                    {task.project} · {task.assignee}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {renderSoftPill(statusLabels[task.status], statusTone[task.status])}
                  {renderSoftPill(task.dueLabel, "neutral")}
                </div>
              </div>
              <p className="mt-3 text-sm text-token-secondary">{task.description}</p>
            </button>
          );
        })
      )}
    </div>
  );

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="grid gap-[var(--grid-gap)] lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="surface-panel p-[var(--panel-padding)]">
          <p className="eyebrow">{copy.title}</p>
          <p className="mt-3 max-w-3xl text-token-secondary">{copy.desc}</p>
          <p className="mt-2 text-sm text-token-tertiary">{copy.themeNote}</p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="interactive-panel subtle-panel p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{copy.summary.today}</p>
              <p className="title-display mt-2 text-4xl text-token-primary">{todayTasks.length}</p>
              <p className="mt-2 text-sm text-token-secondary">{locale === "zh" ? "今天要推进的任务" : "Tasks to move today"}</p>
            </div>
            <div className="interactive-panel subtle-panel p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{copy.summary.upcoming}</p>
              <p className="title-display mt-2 text-4xl text-token-primary">{upcomingTasks.length}</p>
              <p className="mt-2 text-sm text-token-secondary">{locale === "zh" ? "已排进后续时间窗" : "Scheduled into the next window"}</p>
            </div>
            <div className="interactive-panel subtle-panel p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{copy.summary.timeline}</p>
              <p className="title-display mt-2 text-4xl text-token-primary">{completedCount}</p>
              <p className="mt-2 text-sm text-token-secondary">{locale === "zh" ? `已完成 ${completedCount} · 阻塞 ${blockedCount}` : `${completedCount} done · ${blockedCount} blocked`}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <Button size="lg" onClick={() => setOpen(true)}>
            {copy.actions.create}
          </Button>
        </div>
      </section>

      <div className="interactive-panel subtle-panel flex flex-wrap items-center justify-between gap-3 p-3">
        <p className="text-sm text-token-secondary">{feedback}</p>
        <div className="flex flex-wrap gap-2">
          {(["list", "board", "timeline"] as TaskView[]).map((view) => (
            <Button
              key={view}
              size="sm"
              variant={activeView === view ? "secondary" : "ghost"}
              onClick={() => setActiveView(view)}
            >
              {copy.views[view]}
            </Button>
          ))}
        </div>
      </div>

      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-[var(--grid-gap)]">
          {activeView === "list" ? (
            <Card>
              <div className="grid gap-6">
                {renderListGroup(copy.todayGroup, todayTasks)}
                {renderListGroup(copy.upcomingGroup, upcomingTasks)}
                {renderListGroup(copy.laterGroup, tasks.filter((task) => task.dayBucket === "later"))}
              </div>
            </Card>
          ) : null}

          {activeView === "board" ? (
            <Card>
              <div className="grid gap-4 lg:grid-cols-4">
                {(["ready", "progress", "blocked", "done"] as TaskStatus[]).map((status) => (
                  <div key={status} className="grid gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-token-primary">{statusLabels[status]}</p>
                      {renderSoftPill(tasks.filter((task) => task.status === status).length, statusTone[status])}
                    </div>
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task) => {
                        const active = task.id === selectedTaskId;
                        return (
                          <button
                            type="button"
                            key={task.id}
                            onClick={() => setSelectedTaskId(task.id)}
                            className={`interactive-panel subtle-panel p-4 text-left ${active ? "border-[var(--accent)]" : ""}`}
                          >
                            <p className="font-semibold text-token-primary">{task.title}</p>
                            <p className="mt-1 text-sm text-token-secondary">{task.project}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {renderSoftPill(task.assignee, "neutral")}
                              {renderSoftPill(task.dueLabel, statusTone[task.status])}
                            </div>
                          </button>
                        );
                      })}
                  </div>
                ))}
              </div>
            </Card>
          ) : null}

          {activeView === "timeline" ? (
            <Card>
              <div className="grid gap-4">
                <div className="grid grid-cols-[1.2fr_repeat(5,minmax(0,1fr))] gap-2 text-xs uppercase tracking-[0.14em] text-token-tertiary">
                  <div>{locale === "zh" ? "任务" : "Task"}</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                </div>
                {tasks.map((task) => {
                  const active = task.id === selectedTaskId;
                  return (
                    <button
                      type="button"
                      key={task.id}
                      onClick={() => setSelectedTaskId(task.id)}
                      className={`interactive-panel grid grid-cols-[1.2fr_repeat(5,minmax(0,1fr))] items-center gap-2 rounded-[var(--radius-md)] border p-3 text-left ${active ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--border-subtle)] bg-[var(--surface)]"}`}
                    >
                      <div>
                        <p className="font-semibold text-token-primary">{task.title}</p>
                        <p className="text-sm text-token-secondary">{task.assignee}</p>
                      </div>
                      {Array.from({ length: 5 }).map((_, dayIndex) => {
                        const activeBar = dayIndex >= task.timelineSpan.start && dayIndex < task.timelineSpan.end;
                        return (
                          <div key={`${task.id}-${dayIndex}`} className="flex h-10 items-center">
                            <div
                              className={`h-3 w-full rounded-full ${activeBar ? "bg-[var(--accent)]" : "bg-[var(--surface-muted)]"}`}
                              aria-hidden="true"
                            />
                          </div>
                        );
                      })}
                    </button>
                  );
                })}
              </div>
            </Card>
          ) : null}
        </div>

        <Card title={copy.detail.title} description={selectedTask ? `${selectedTask.title} · ${selectedTask.project}` : ""}>
          {selectedTask ? (
            <div className="grid gap-5">
              <div className="subtle-panel p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-token-primary">{selectedTask.title}</p>
                    <p className="mt-2 text-sm text-token-secondary">{selectedTask.description}</p>
                  </div>
                  {renderSoftPill(statusLabels[selectedTask.status], statusTone[selectedTask.status])}
                </div>
                <div className="mt-4 grid gap-2 text-sm text-token-secondary">
                  <p>{copy.detail.assignee}: {selectedTask.assignee}</p>
                  <p>{copy.detail.dueDate}: {selectedTask.dueLabel}</p>
                  <p>{copy.detail.status}: {statusLabels[selectedTask.status]}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={() => addToCalendar(selectedTask.id)}>
                  {copy.actions.addToCalendar}
                </Button>
                <Button size="sm" variant="secondary" onClick={() => postponeTask(selectedTask.id)}>
                  {copy.actions.postpone}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    changeStatus(selectedTask.id, selectedTask.status === "blocked" ? "progress" : "blocked")
                  }
                >
                  {selectedTask.status === "blocked" ? copy.actions.unblock : copy.actions.block}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => changeStatus(selectedTask.id, selectedTask.status === "done" ? "progress" : "done")}
                >
                  {selectedTask.status === "done" ? copy.actions.reopen : copy.actions.done}
                </Button>
              </div>

              <div>
                <p className="text-sm font-semibold text-token-primary">{copy.detail.checklist}</p>
                <div className="mt-3 grid gap-2">
                  {selectedTask.checklist.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleChecklist(selectedTask.id, item.id)}
                      className="interactive-panel subtle-panel flex items-center justify-between gap-3 px-3 py-3 text-left"
                    >
                      <span className={`text-sm ${item.done ? "text-token-tertiary line-through" : "text-token-secondary"}`}>{item.label}</span>
                      {renderSoftPill(item.done ? (locale === "zh" ? "完成" : "Done") : (locale === "zh" ? "待办" : "Open"), item.done ? "success" : "warning")}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-token-primary">{copy.detail.dependencies}</p>
                <div className="mt-3 grid gap-2">
                  {selectedTask.dependencies.map((dependency) => (
                    <div key={dependency} className="subtle-panel px-3 py-3 text-sm text-token-secondary">
                      {dependency}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-token-primary">{copy.detail.comments}</p>
                <div className="mt-3 grid gap-2">
                  {selectedTask.comments.map((comment) => (
                    <div key={comment.id} className="subtle-panel p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-token-primary">{comment.author}</p>
                        <p className="text-xs text-token-tertiary">{comment.time}</p>
                      </div>
                      <p className="mt-2 text-sm text-token-secondary">{comment.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid gap-2">
                  <Input
                    label={copy.addComment}
                    value={commentInput}
                    onChange={(event) => setCommentInput(event.target.value)}
                    placeholder={locale === "zh" ? "补充风险、依赖或交接说明" : "Add risks, dependencies, or handoff notes"}
                  />
                  <div className="flex justify-end">
                    <Button size="sm" variant="secondary" onClick={addComment}>
                      {copy.addComment}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-token-primary">{copy.detail.activity}</p>
                <div className="mt-3 grid gap-2">
                  {selectedTask.activity.map((entry) => (
                    <div key={entry} className="subtle-panel px-3 py-3 text-sm text-token-secondary">
                      {entry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </Card>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={copy.createTitle}
        description={copy.createDesc}
        closeLabel={copy.close}
        backdropLabel={copy.close}
      >
        <div className="grid gap-3">
          <Input
            label={copy.taskTitle}
            value={formState.title}
            onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
          />
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              label={copy.project}
              value={formState.project}
              onChange={(event) => setFormState((prev) => ({ ...prev, project: event.target.value }))}
            />
            <Input
              label={copy.assignee}
              value={formState.assignee}
              onChange={(event) => setFormState((prev) => ({ ...prev, assignee: event.target.value }))}
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              label={copy.dueDate}
              value={formState.dueDate}
              onChange={(event) => setFormState((prev) => ({ ...prev, dueDate: event.target.value }))}
              placeholder="2026-03-17 10:00"
            />
            <Select
              label={copy.lane}
              options={statusOptions}
              value={formState.status}
              onChange={(event) => setFormState((prev) => ({ ...prev, status: event.target.value as TaskStatus }))}
            />
          </div>
          <Select
            label={copy.schedule}
            options={scheduleOptions}
            value={formState.schedule}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, schedule: event.target.value as "today" | "upcoming" | "later" }))
            }
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              {copy.cancel}
            </Button>
            <Button onClick={createTask}>{copy.create}</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
