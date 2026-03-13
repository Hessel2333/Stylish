"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { useTheme } from "@/components/theme/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Tabs } from "@/components/ui/tabs";

type NavKey = "overview" | "ledger" | "rules" | "audit";
type ModalKey = "export" | "invite" | "policy" | "ledger-detail" | null;

type LedgerItem = {
  id: string;
  workflow: string;
  title: string;
  requester: string;
  team: string;
  owner: string;
  state: string;
  priority: string;
  sla: string;
  amount: string;
  summary: string;
  submittedAt: string;
  approvals: string[];
  log: string[];
};

type PolicyRule = {
  id: string;
  name: string;
  scope: string;
  trigger: string;
  action: string;
  status: string;
  hits: string;
  owner: string;
  note: string;
};

type AuditEntry = {
  id: string;
  title: string;
  detail: string;
  time: string;
  tone: "neutral" | "accent" | "warning" | "success";
};

export const AdminWorkspaceScene = () => {
  const { locale } = useLocale();
  const { theme } = useTheme();

  const copy = useMemo(
    () =>
      locale === "zh"
        ? {
            nav: {
              overview: "Overview",
              ledger: "Approval Ledger",
              rules: "Policy Rules",
              audit: "Audit Log"
            },
            tabs: ["全部", "待处理", "高优先", "自动化"],
            actions: {
              export: "导出",
              rules: "规则",
              invite: "邀请成员",
              policy: "创建策略"
            },
            search: "搜索流程、申请人或团队",
            teamFilter: "团队",
            allTeams: "全部团队",
            sortBy: "排序方式",
            sortSla: "按 SLA",
            sortPriority: "按优先级",
            sortRecent: "按最近提交",
            batchApprove: "批量通过",
            batchEscalate: "批量升级",
            clearSelection: "清空选择",
            queueTitle: "待处理队列",
            queueDesc: "点击任一请求，用弹窗打开完整详情与审批动作，同时保持当前工作上下文。",
            overviewTitle: "运营总览",
            overviewDesc: "同一信息骨架下，让主题差异体现在工作节奏、主次关系和效率感。",
            ledgerTitle: "审批台账",
            ledgerDesc: "筛选、排序、批量处理和单条审批都在同一视图完成。",
            rulesTitle: "策略规则",
            rulesDesc: "规则不再只是说明文字，而是可创建、切换和追踪命中情况的配置对象。",
            auditTitle: "审计日志",
            auditDesc: "每次审批、升级、策略变更都会回流到同一条可追溯时间线。",
            detailTitle: "当前处理项",
            detailEmpty: "请选择一条审批项",
            viewDetail: "查看详情",
            detailHint: "详细信息改为弹窗承载，避免压缩主台账宽度。",
            decisionNote: "处理说明",
            approve: "通过",
            requestChanges: "退回修改",
            escalate: "升级处理",
            openLedger: "进入台账",
            createRule: "创建规则",
            saveDraft: "保存草稿",
            activateRule: "启用规则",
            disableRule: "停用规则",
            exportTitle: "导出运营快照",
            exportDesc: "导出当前筛选结果、审批状态和策略命中概览。",
            inviteTitle: "邀请协作者",
            inviteDesc: "批量邀请法务、财务或区域负责人进入审批工作台。",
            policyTitle: "新建策略规则",
            policyDesc: "把审批升级条件、路由逻辑和通知动作写进系统。",
            emails: "协作者邮箱",
            policyName: "规则名称",
            policyScope: "作用范围",
            policyTrigger: "触发条件",
            policyAction: "执行动作",
            notes: "说明",
            submit: "提交",
            cancel: "取消",
            actionIdle: "当前工作台已准备好处理审批、策略和日志流。",
            stats: [
              { label: "待处理审批", value: "124", delta: "今日 +8" },
              { label: "SLA 风险", value: "17", delta: "较昨日 -5" },
              { label: "自动化命中", value: "932", delta: "本周 +13%" },
              { label: "一次通过率", value: "96.2%", delta: "+1.4 个百分点" }
            ],
            overviewPanels: {
              throughput: "今日处理节奏",
              coverage: "策略覆盖",
              automation: "自动化状态"
            },
            ruleComposer: "规则编辑器",
            ruleImpact: "命中情况",
            selectedCount: "已选记录",
            reviewChecklist: "处理清单",
            recentActivity: "最近活动",
            close: "关闭"
          }
        : {
            nav: {
              overview: "Overview",
              ledger: "Approval Ledger",
              rules: "Policy Rules",
              audit: "Audit Log"
            },
            tabs: ["All", "Pending", "Critical", "Automated"],
            actions: {
              export: "Export",
              rules: "Rules",
              invite: "Invite",
              policy: "Create Policy"
            },
            search: "Search workflows, requesters, or teams",
            teamFilter: "Team",
            allTeams: "All teams",
            sortBy: "Sort by",
            sortSla: "SLA",
            sortPriority: "Priority",
            sortRecent: "Most recent",
            batchApprove: "Approve selected",
            batchEscalate: "Escalate selected",
            clearSelection: "Clear selection",
            queueTitle: "Active Queue",
            queueDesc: "Click a request to open full detail and approval actions in a modal while keeping your current workspace context.",
            overviewTitle: "Operations Overview",
            overviewDesc: "Keep the same information skeleton while letting theme expression change rhythm, hierarchy, and efficiency cues.",
            ledgerTitle: "Approval Ledger",
            ledgerDesc: "Filtering, sorting, batching, and single-request review happen in one operational view.",
            rulesTitle: "Policy Rules",
            rulesDesc: "Rules become editable operating objects with status, impact, and ownership instead of static copy.",
            auditTitle: "Audit Log",
            auditDesc: "Every approval, escalation, and policy change returns to one traceable timeline.",
            detailTitle: "Active Work Item",
            detailEmpty: "Select an approval item",
            viewDetail: "View detail",
            detailHint: "Details now live in a modal so the ledger can stay wider and easier to scan.",
            decisionNote: "Decision note",
            approve: "Approve",
            requestChanges: "Request changes",
            escalate: "Escalate",
            openLedger: "Open in ledger",
            createRule: "Create rule",
            saveDraft: "Save draft",
            activateRule: "Enable rule",
            disableRule: "Disable rule",
            exportTitle: "Export Operations Snapshot",
            exportDesc: "Export current filters, approval status, and policy-hit summary.",
            inviteTitle: "Invite Collaborators",
            inviteDesc: "Batch invite legal, finance, or regional owners into the workspace.",
            policyTitle: "Create Policy Rule",
            policyDesc: "Write escalation conditions, routing logic, and notification actions into the system.",
            emails: "Collaborator emails",
            policyName: "Rule name",
            policyScope: "Scope",
            policyTrigger: "Trigger",
            policyAction: "Action",
            notes: "Notes",
            submit: "Submit",
            cancel: "Cancel",
            actionIdle: "Workspace is ready for approvals, policy changes, and audit review.",
            stats: [
              { label: "Open approvals", value: "124", delta: "+8 today" },
              { label: "SLA risk", value: "17", delta: "-5 vs yesterday" },
              { label: "Automation hits", value: "932", delta: "+13% this week" },
              { label: "First-pass resolution", value: "96.2%", delta: "+1.4 pt" }
            ],
            overviewPanels: {
              throughput: "Today's handling rhythm",
              coverage: "Policy coverage",
              automation: "Automation status"
            },
            ruleComposer: "Rule Composer",
            ruleImpact: "Impact",
            selectedCount: "Selected rows",
            reviewChecklist: "Review checklist",
            recentActivity: "Recent activity",
            close: "Close"
          },
    [locale]
  );

  const navItems = useMemo(
    () => [
      { key: "overview" as const, label: copy.nav.overview },
      { key: "ledger" as const, label: copy.nav.ledger },
      { key: "rules" as const, label: copy.nav.rules },
      { key: "audit" as const, label: copy.nav.audit }
    ],
    [copy.nav]
  );

  const initialLedger = useMemo<LedgerItem[]>(
    () =>
      locale === "zh"
        ? [
            {
              id: "launch-447",
              workflow: "Launch-447",
              title: "发布简报法务审核",
              requester: "A. Kim",
              team: "合规",
              owner: "M. Harper",
              state: "待处理",
              priority: "P1",
              sla: "5h",
              amount: "¥ 220k",
              summary: "需要确认留存活动文案中的竞品对比描述与隐私条款引用。",
              submittedAt: "今天 10:15",
              approvals: ["产品市场", "法务", "区域运营"],
              log: ["提交发布简报", "自动标记为敏感内容", "等待法务负责人确认"]
            },
            {
              id: "budget-101",
              workflow: "Budget-101",
              title: "区域定价文档审批",
              requester: "D. Stone",
              team: "财务",
              owner: "S. Ito",
              state: "审核中",
              priority: "P2",
              sla: "12h",
              amount: "¥ 480k",
              summary: "APAC 区域定价文档正在等待财务和本地市场双签。",
              submittedAt: "今天 08:30",
              approvals: ["财务", "区域市场", "销售运营"],
              log: ["财务已给出预算边界", "等待区域市场确认价格注释"]
            },
            {
              id: "policy-309",
              workflow: "Policy-309",
              title: "Q2 数据留存策略更新",
              requester: "R. Chen",
              team: "安全",
              owner: "L. Gomez",
              state: "阻塞",
              priority: "P1",
              sla: "2h",
              amount: "高风险",
              summary: "数据保留策略与当前区域合规模板冲突，需要升级到安全负责人。",
              submittedAt: "昨天 18:20",
              approvals: ["安全", "合规", "法务"],
              log: ["规则命中跨区数据保留限制", "自动升级等待确认"]
            },
            {
              id: "ops-221",
              workflow: "Ops-221",
              title: "内部 enablement 资料发布",
              requester: "N. Rivera",
              team: "运营",
              owner: "T. Malik",
              state: "已通过",
              priority: "P3",
              sla: "完成",
              amount: "内部项目",
              summary: "内部赋能资料已完成审核并回写发布日历。",
              submittedAt: "昨天 11:40",
              approvals: ["运营", "品牌"],
              log: ["品牌通过", "自动写入 enablement 日历"]
            }
          ]
        : [
            {
              id: "launch-447",
              workflow: "Launch-447",
              title: "Launch brief legal review",
              requester: "A. Kim",
              team: "Compliance",
              owner: "M. Harper",
              state: "Pending",
              priority: "P1",
              sla: "5h",
              amount: "$220k",
              summary: "Legal needs to confirm competitor-comparison language and privacy references in the retention launch brief.",
              submittedAt: "Today 10:15",
              approvals: ["Product Marketing", "Legal", "Regional Ops"],
              log: ["Launch brief submitted", "Auto-flagged as sensitive content", "Waiting on legal owner review"]
            },
            {
              id: "budget-101",
              workflow: "Budget-101",
              title: "Regional pricing doc approval",
              requester: "D. Stone",
              team: "Finance",
              owner: "S. Ito",
              state: "In Review",
              priority: "P2",
              sla: "12h",
              amount: "$480k",
              summary: "APAC pricing documentation is waiting on finance and regional marketing sign-off.",
              submittedAt: "Today 08:30",
              approvals: ["Finance", "Regional Marketing", "Sales Ops"],
              log: ["Finance shared budget guardrails", "Waiting on regional market annotations"]
            },
            {
              id: "policy-309",
              workflow: "Policy-309",
              title: "Q2 data retention policy update",
              requester: "R. Chen",
              team: "Security",
              owner: "L. Gomez",
              state: "Blocked",
              priority: "P1",
              sla: "2h",
              amount: "High risk",
              summary: "Retention policy conflicts with the current regional compliance template and requires security escalation.",
              submittedAt: "Yesterday 18:20",
              approvals: ["Security", "Compliance", "Legal"],
              log: ["Rule hit on cross-region retention limits", "Auto-escalation waiting for owner action"]
            },
            {
              id: "ops-221",
              workflow: "Ops-221",
              title: "Internal enablement release",
              requester: "N. Rivera",
              team: "Operations",
              owner: "T. Malik",
              state: "Approved",
              priority: "P3",
              sla: "Done",
              amount: "Internal",
              summary: "Enablement materials completed review and were written back to the release calendar.",
              submittedAt: "Yesterday 11:40",
              approvals: ["Operations", "Brand"],
              log: ["Brand approved", "Auto-written to enablement calendar"]
            }
          ],
    [locale]
  );

  const initialRules = useMemo<PolicyRule[]>(
    () =>
      locale === "zh"
        ? [
            {
              id: "rule-01",
              name: "P1 90 分钟无人处理自动升级",
              scope: "所有对外发布",
              trigger: "P1 请求在 90 分钟内无 owner 行为",
              action: "升级到审批经理并通知发起人",
              status: "启用中",
              hits: "本周 24 次",
              owner: "Ops Governance",
              note: "保障高优请求不会在跨团队链路中沉没。"
            },
            {
              id: "rule-02",
              name: "敏感内容先走合规再到财务",
              scope: "法务敏感发布",
              trigger: "文案中包含竞品、隐私或地区限制词",
              action: "先路由合规，再进入财务审批",
              status: "启用中",
              hits: "本周 11 次",
              owner: "Compliance Systems",
              note: "减少返工，避免财务先审后被合规打回。"
            },
            {
              id: "rule-03",
              name: "阻塞状态写入审计日志",
              scope: "全局",
              trigger: "请求状态进入阻塞",
              action: "追加审计记录并提醒活动负责人",
              status: "草稿",
              hits: "待发布",
              owner: "Risk Ops",
              note: "准备与新的通知策略一起上线。"
            }
          ]
        : [
            {
              id: "rule-01",
              name: "Escalate unattended P1 after 90 minutes",
              scope: "All external launches",
              trigger: "No owner action on a P1 request within 90 minutes",
              action: "Escalate to approvals manager and notify requester",
              status: "Enabled",
              hits: "24 hits this week",
              owner: "Ops Governance",
              note: "Keeps priority requests from stalling across functions."
            },
            {
              id: "rule-02",
              name: "Sensitive content routes to compliance before finance",
              scope: "Legal-sensitive launches",
              trigger: "Copy contains competitor, privacy, or regional restriction language",
              action: "Send to compliance before finance review",
              status: "Enabled",
              hits: "11 hits this week",
              owner: "Compliance Systems",
              note: "Avoids finance review before compliance is satisfied."
            },
            {
              id: "rule-03",
              name: "Write blocker state into audit log",
              scope: "Global",
              trigger: "Request status changes to blocked",
              action: "Append audit record and notify campaign owner",
              status: "Draft",
              hits: "Not released",
              owner: "Risk Ops",
              note: "Planned for rollout with the next notification policy."
            }
          ],
    [locale]
  );

  const initialAudit = useMemo<AuditEntry[]>(
    () =>
      locale === "zh"
        ? [
            {
              id: "audit-01",
              title: "规则命中: 敏感内容先走合规",
              detail: "Launch-447 在提交时命中策略，已自动调整审批顺序。",
              time: "今天 10:16",
              tone: "accent"
            },
            {
              id: "audit-02",
              title: "审批升级: Policy-309",
              detail: "因 2h SLA 风险自动升级到安全负责人。",
              time: "今天 09:50",
              tone: "warning"
            },
            {
              id: "audit-03",
              title: "审批完成: Ops-221",
              detail: "运营资料已通过并写入发布日历。",
              time: "昨天 14:10",
              tone: "success"
            }
          ]
        : [
            {
              id: "audit-01",
              title: "Rule hit: Sensitive content routes to compliance",
              detail: "Launch-447 matched policy on submission and had its routing order updated.",
              time: "Today 10:16",
              tone: "accent"
            },
            {
              id: "audit-02",
              title: "Escalation: Policy-309",
              detail: "Auto-escalated to the security owner due to 2h SLA risk.",
              time: "Today 09:50",
              tone: "warning"
            },
            {
              id: "audit-03",
              title: "Approval complete: Ops-221",
              detail: "Operations materials approved and written to the release calendar.",
              time: "Yesterday 14:10",
              tone: "success"
            }
          ],
    [locale]
  );

  const pendingState = locale === "zh" ? "待处理" : "Pending";
  const reviewState = locale === "zh" ? "审核中" : "In Review";
  const blockedState = locale === "zh" ? "阻塞" : "Blocked";
  const approvedState = locale === "zh" ? "已通过" : "Approved";
  const enabledStatus = locale === "zh" ? "启用中" : "Enabled";
  const draftStatus = locale === "zh" ? "草稿" : "Draft";

  const [activeNav, setActiveNav] = useState<NavKey>("overview");
  const [activeTab, setActiveTab] = useState(copy.tabs[0]);
  const [sortBy, setSortBy] = useState<"sla" | "priority" | "recent">("sla");
  const [teamFilter, setTeamFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [ledger, setLedger] = useState<LedgerItem[]>(initialLedger);
  const [rules, setRules] = useState<PolicyRule[]>(initialRules);
  const [auditEntries, setAuditEntries] = useState<AuditEntry[]>(initialAudit);
  const [selectedLedgerId, setSelectedLedgerId] = useState(initialLedger[0]?.id ?? "");
  const [selectedRuleId, setSelectedRuleId] = useState(initialRules[0]?.id ?? "");
  const [feedback, setFeedback] = useState(copy.actionIdle);
  const [modal, setModal] = useState<ModalKey>(null);
  const [decisionNote, setDecisionNote] = useState("");
  const [inviteEmails, setInviteEmails] = useState("");
  const [policyDraft, setPolicyDraft] = useState({
    name: "",
    scope: "",
    trigger: "",
    action: "",
    note: ""
  });

  useEffect(() => {
    setActiveNav("overview");
    setActiveTab(copy.tabs[0]);
    setSortBy("sla");
    setTeamFilter("all");
    setQuery("");
    setSelectedIds([]);
    setLedger(initialLedger);
    setRules(initialRules);
    setAuditEntries(initialAudit);
    setSelectedLedgerId(initialLedger[0]?.id ?? "");
    setSelectedRuleId(initialRules[0]?.id ?? "");
    setFeedback(copy.actionIdle);
    setModal(null);
    setDecisionNote("");
    setInviteEmails("");
    setPolicyDraft({ name: "", scope: "", trigger: "", action: "", note: "" });
  }, [copy.actionIdle, copy.tabs, initialAudit, initialLedger, initialRules]);

  const teamOptions = useMemo(
    () => [
      { value: "all", label: copy.allTeams },
      ...Array.from(new Set(initialLedger.map((item) => item.team))).map((team) => ({ value: team, label: team }))
    ],
    [copy.allTeams, initialLedger]
  );

  const appendAudit = (title: string, detail: string, tone: AuditEntry["tone"] = "neutral") => {
    setAuditEntries((prev) => [{ id: `${Date.now()}-${title}`, title, detail, time: locale === "zh" ? "刚刚" : "Just now", tone }, ...prev]);
  };

  const openLedgerDetail = (itemId: string) => {
    setSelectedLedgerId(itemId);
    setModal("ledger-detail");
  };

  const filteredLedger = useMemo(() => {
    return ledger
      .filter((item) => {
        if (teamFilter !== "all" && item.team !== teamFilter) {
          return false;
        }

        const text = `${item.workflow} ${item.title} ${item.requester} ${item.team}`.toLowerCase();
        if (query && !text.includes(query.toLowerCase())) {
          return false;
        }

        if (activeTab === copy.tabs[1]) {
          return item.state === pendingState || item.state === reviewState;
        }

        if (activeTab === copy.tabs[2]) {
          return item.priority === "P1" || item.state === blockedState;
        }

        if (activeTab === copy.tabs[3]) {
          return item.log.some((entry) => entry.toLowerCase().includes(locale === "zh" ? "自动" : "auto"));
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "priority") {
          return a.priority.localeCompare(b.priority);
        }

        if (sortBy === "recent") {
          return b.submittedAt.localeCompare(a.submittedAt);
        }

        return a.sla.localeCompare(b.sla);
      });
  }, [activeTab, blockedState, copy.tabs, ledger, locale, pendingState, query, reviewState, sortBy, teamFilter]);

  useEffect(() => {
    if (!filteredLedger.some((item) => item.id === selectedLedgerId)) {
      setSelectedLedgerId(filteredLedger[0]?.id ?? "");
    }
  }, [filteredLedger, selectedLedgerId]);

  const selectedLedger = filteredLedger.find((item) => item.id === selectedLedgerId) ?? ledger.find((item) => item.id === selectedLedgerId) ?? null;
  const selectedRule = rules.find((rule) => rule.id === selectedRuleId) ?? rules[0] ?? null;

  const queueItems = filteredLedger.filter((item) => item.state !== approvedState).slice(0, 3);
  const pendingCount = ledger.filter((item) => item.state === pendingState || item.state === reviewState).length;
  const blockedCount = ledger.filter((item) => item.state === blockedState).length;

  const handleAction = (action: keyof typeof copy.actions) => {
    if (action === "export") {
      setModal("export");
      return;
    }

    if (action === "invite") {
      setModal("invite");
      return;
    }

    if (action === "policy") {
      setModal("policy");
      return;
    }

    setActiveNav("rules");
    setFeedback(
      locale === "zh"
        ? "已切换到策略规则视图，准备查看当前生效逻辑。"
        : "Switched to policy rules view with active routing logic in focus."
    );
  };

  const updateLedgerState = (ids: string[], state: string, note: string) => {
    setLedger((prev) =>
      prev.map((item) =>
        ids.includes(item.id)
          ? {
              ...item,
              state,
              log: [note, ...item.log]
            }
          : item
      )
    );
  };

  const handleDecision = (state: string) => {
    if (!selectedLedger) {
      return;
    }

    const note =
      decisionNote.trim() ||
      (locale === "zh"
        ? `${selectedLedger.workflow} 已处理为 ${state}`
        : `${selectedLedger.workflow} handled as ${state}`);

    updateLedgerState([selectedLedger.id], state, note);
    appendAudit(
      locale === "zh" ? `审批更新: ${selectedLedger.workflow}` : `Approval update: ${selectedLedger.workflow}`,
      note,
      state === approvedState ? "success" : state === blockedState ? "warning" : "accent"
    );
    setFeedback(note);
    setDecisionNote("");
  };

  const handleBatch = (mode: "approve" | "escalate") => {
    if (selectedIds.length === 0) {
      setFeedback(locale === "zh" ? "请先在台账中选择记录。" : "Select ledger rows first.");
      return;
    }

    const nextState = mode === "approve" ? approvedState : blockedState;
    const note =
      mode === "approve"
        ? locale === "zh"
          ? "批量通过所选请求并写入审计日志。"
          : "Selected requests approved in batch and written to audit log."
        : locale === "zh"
          ? "批量升级所选请求，等待负责人接管。"
          : "Selected requests escalated in batch for owner takeover.";

    updateLedgerState(selectedIds, nextState, note);
    appendAudit(
      mode === "approve"
        ? locale === "zh"
          ? "批量审批通过"
          : "Batch approval completed"
        : locale === "zh"
          ? "批量升级请求"
          : "Batch escalation issued",
      note,
      mode === "approve" ? "success" : "warning"
    );
    setSelectedIds([]);
    setFeedback(note);
  };

  const handleCreateRule = () => {
    if (!policyDraft.name.trim() || !policyDraft.trigger.trim() || !policyDraft.action.trim()) {
      setFeedback(locale === "zh" ? "请先填写规则名称、触发条件和执行动作。" : "Fill in rule name, trigger, and action first.");
      return;
    }

    const newRule: PolicyRule = {
      id: `${Date.now()}-${policyDraft.name}`,
      name: policyDraft.name,
      scope: policyDraft.scope || (locale === "zh" ? "全局" : "Global"),
      trigger: policyDraft.trigger,
      action: policyDraft.action,
      status: draftStatus,
      hits: locale === "zh" ? "待发布" : "Not released",
      owner: "Ops Governance",
      note: policyDraft.note || (locale === "zh" ? "新建规则草稿" : "New rule draft")
    };

    setRules((prev) => [newRule, ...prev]);
    setSelectedRuleId(newRule.id);
    setActiveNav("rules");
    setModal(null);
    setPolicyDraft({ name: "", scope: "", trigger: "", action: "", note: "" });
    appendAudit(
      locale === "zh" ? `创建规则: ${newRule.name}` : `Rule created: ${newRule.name}`,
      locale === "zh" ? "新规则已保存为草稿，等待启用。" : "New rule saved as draft and ready for activation.",
      "accent"
    );
    setFeedback(locale === "zh" ? "新规则已创建，并进入策略规则视图。" : "New rule created and opened in policy rules.");
  };

  const toggleRuleStatus = () => {
    if (!selectedRule) {
      return;
    }

    const nextStatus = selectedRule.status === enabledStatus ? draftStatus : enabledStatus;

    setRules((prev) =>
      prev.map((rule) =>
        rule.id === selectedRule.id
          ? {
              ...rule,
              status: nextStatus,
              note:
                nextStatus === enabledStatus
                  ? locale === "zh"
                    ? "规则已启用并开始参与路由。"
                    : "Rule enabled and participating in routing."
                  : locale === "zh"
                    ? "规则已停用并保留为草稿。"
                    : "Rule disabled and retained as draft."
            }
          : rule
      )
    );

    appendAudit(
      locale === "zh" ? `规则状态更新: ${selectedRule.name}` : `Rule status changed: ${selectedRule.name}`,
      nextStatus === enabledStatus
        ? locale === "zh"
          ? "规则已启用。"
          : "Rule enabled."
        : locale === "zh"
          ? "规则已停用。"
          : "Rule disabled.",
      nextStatus === enabledStatus ? "success" : "warning"
    );
    setFeedback(
      nextStatus === enabledStatus
        ? locale === "zh"
          ? "规则已启用，后续审批会按新逻辑路由。"
          : "Rule enabled. Future approvals now follow the updated route."
        : locale === "zh"
          ? "规则已停用，系统保留草稿等待后续调整。"
          : "Rule disabled and kept as a draft for future adjustment."
    );
  };

  const overviewChart = [78, 62, 84, 71, 66, 89, 74];
  const themeNarrative =
    theme === "apple-hig"
      ? locale === "zh"
        ? "用更安静的大块面板让工作视线落在关键处理项上。"
        : "Uses quieter, larger surfaces so attention stays on the active work item."
      : theme === "material-3"
        ? locale === "zh"
          ? "用更友好的解释和清晰分组帮助运营人员快速上手。"
          : "Uses friendlier grouping and explanations to reduce workspace friction."
        : locale === "zh"
          ? "用更强结构和更高信息密度强化台账效率感。"
          : "Uses stronger structure and higher density to emphasize ledger efficiency.";

  const renderSoftPill = (
    label: string | number,
    tone: "neutral" | "accent" | "success" | "warning" | "danger" = "neutral",
    appearance: "meta" | "status" | "counter" = "status"
  ) => (
    <Badge tone={tone} appearance={appearance} className="px-3 text-xs">
      {label}
    </Badge>
  );

  const ruleStatusTone = (status: string): "accent" | "neutral" => (status === enabledStatus ? "accent" : "neutral");

  const ledgerStateTone = (state: string): "accent" | "success" | "danger" =>
    state === blockedState ? "danger" : state === approvedState ? "success" : "accent";

  return (
    <div className="grid gap-[var(--section-gap)]">
      <section className="grid gap-[var(--grid-gap)] xl:grid-cols-[0.24fr_0.76fr]">
        <aside className="surface-panel h-fit p-[var(--panel-padding)]">
          <p className="eyebrow">{copy.nav.overview}</p>
          <p className="mt-2 text-sm text-token-secondary">{themeNarrative}</p>
          <div className="mt-5 grid gap-2">
            {navItems.map((item) => {
              const active = item.key === activeNav;
              return (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setActiveNav(item.key)}
                  className={`interactive-panel rounded-[var(--radius-md)] px-4 py-3 text-left ${active ? "bg-[var(--accent-soft)] text-token-primary" : "subtle-panel text-token-secondary"}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{item.label}</span>
                    {item.key === "ledger" ? <Badge tone="accent" appearance="counter">{pendingCount}</Badge> : null}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3">
            <div className="subtle-panel p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{copy.queueTitle}</p>
              <p className="mt-2 text-2xl font-semibold text-token-primary">{pendingCount}</p>
              <p className="mt-1 text-sm text-token-secondary">{locale === "zh" ? "等待处理中的请求" : "Requests waiting for action"}</p>
            </div>
            <div className="subtle-panel p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-token-tertiary">{locale === "zh" ? "阻塞风险" : "Blocker Risk"}</p>
              <p className="mt-2 text-2xl font-semibold text-token-primary">{blockedCount}</p>
              <p className="mt-1 text-sm text-token-secondary">{locale === "zh" ? "需要升级处理的项" : "Items requiring escalation"}</p>
            </div>
          </div>
        </aside>

        <div className="grid gap-[var(--grid-gap)]">
          <div className="surface-panel p-[var(--space-md)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Tabs
                key={`${locale}-admin-tabs`}
                items={copy.tabs}
                defaultItem={copy.tabs[0]}
                onChange={setActiveTab}
                ariaLabel={locale === "zh" ? "审批筛选标签" : "Approval filter tabs"}
              />
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="ghost" onClick={() => handleAction("export")}>
                  {copy.actions.export}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleAction("rules")}>
                  {copy.actions.rules}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleAction("invite")}>
                  {copy.actions.invite}
                </Button>
                <Button size="sm" variant="secondary" onClick={() => handleAction("policy")}>
                  {copy.actions.policy}
                </Button>
              </div>
            </div>
            <div className="interactive-panel subtle-panel mt-3 flex flex-wrap items-center justify-between gap-3 p-3">
              <p className="text-sm text-token-secondary">{feedback}</p>
              <Badge tone="accent">{navItems.find((item) => item.key === activeNav)?.label}</Badge>
            </div>
          </div>

          {activeNav === "overview" ? (
            <div className="grid gap-[var(--grid-gap)]">
              <div className="grid gap-3 md:grid-cols-4">
                {copy.stats.map((stat) => (
                  <article key={stat.label} className="interactive-panel surface-panel p-[var(--space-md)]">
                    <p className="text-sm text-token-secondary">{stat.label}</p>
                    <p className="title-display mt-2 text-4xl text-token-primary">{stat.value}</p>
                    <p className="mt-2 text-xs text-token-tertiary">{stat.delta}</p>
                  </article>
                ))}
              </div>

              <div className="grid gap-[var(--grid-gap)] xl:grid-cols-[1.05fr_0.95fr]">
                <Card title={copy.queueTitle} description={copy.queueDesc}>
                  <div className="grid gap-3">
                    {queueItems.map((item) => {
                      const active = item.id === selectedLedgerId;
                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => openLedgerDetail(item.id)}
                          className={`interactive-panel subtle-panel flex flex-wrap items-center justify-between gap-3 p-4 text-left ${active ? "border-[var(--accent)]" : ""}`}
                        >
                          <div>
                            <p className="font-semibold text-token-primary">{item.title}</p>
                            <p className="mt-1 text-sm text-token-secondary">
                              {item.team} · {item.owner} · {item.sla}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {renderSoftPill(item.priority, item.priority === "P1" ? "warning" : "neutral")}
                            {renderSoftPill(item.state, ledgerStateTone(item.state))}
                            <span className="text-xs text-token-tertiary">{copy.viewDetail}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </Card>

                <Card title={copy.overviewTitle} description={copy.overviewDesc}>
                  <div className="ui-chart-panel">
                    <div className="ui-chart-grid-line is-top" />
                    <div className="ui-chart-grid-line is-mid" />
                    <div className="ui-chart-grid-line is-low" />
                    <div className="ui-chart-grid">
                      {overviewChart.map((value, index) => (
                        <div
                          key={`${value}-${index}`}
                          className={`ui-chart-bar motion-fade-up ${index % 2 === 0 ? "" : "is-alt"}`}
                          style={{ height: `${value}%`, minHeight: "18%", animationDelay: `${index * 45}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div className="subtle-panel p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{copy.overviewPanels.throughput}</p>
                      <p className="mt-2 text-sm text-token-primary">{locale === "zh" ? "高峰在 14:00 后，P1 请求占比上升。" : "Peak volume appears after 14:00 with rising P1 share."}</p>
                    </div>
                    <div className="subtle-panel p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{copy.overviewPanels.coverage}</p>
                      <p className="mt-2 text-sm text-token-primary">{locale === "zh" ? "92% 请求被规则覆盖，剩余项多来自区域例外。" : "92% of requests are rule-covered. The remainder are regional exceptions."}</p>
                    </div>
                    <div className="subtle-panel p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{copy.overviewPanels.automation}</p>
                      <p className="mt-2 text-sm text-token-primary">{locale === "zh" ? "过去 24 小时 2 条自动升级，0 条误路由。" : "2 auto-escalations and 0 misroutes in the last 24 hours."}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ) : null}

          {activeNav === "ledger" ? (
            <div className="grid gap-[var(--grid-gap)]">
              <Card title={copy.ledgerTitle} description={copy.ledgerDesc}>
                <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr_0.7fr]">
                  <Input
                    label={copy.search}
                    placeholder={copy.search}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Select label={copy.teamFilter} options={teamOptions} value={teamFilter} onChange={(event) => setTeamFilter(event.target.value)} />
                  <Select
                    label={copy.sortBy}
                    options={[
                      { value: "sla", label: copy.sortSla },
                      { value: "priority", label: copy.sortPriority },
                      { value: "recent", label: copy.sortRecent }
                    ]}
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value as "sla" | "priority" | "recent")}
                  />
                </div>

                <div className="interactive-panel subtle-panel mt-4 flex flex-wrap items-center justify-between gap-3 p-3">
                  <div className="flex items-center gap-2">
                    {renderSoftPill(`${copy.selectedCount}: ${selectedIds.length}`, "neutral", "counter")}
                    <span className="text-sm text-token-secondary">{copy.detailHint}</span>
                    {selectedIds.length > 0 ? (
                      <Button size="sm" variant="ghost" onClick={() => setSelectedIds([])}>
                        {copy.clearSelection}
                      </Button>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary" onClick={() => handleBatch("approve")}>
                      {copy.batchApprove}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleBatch("escalate")}>
                      {copy.batchEscalate}
                    </Button>
                  </div>
                </div>

                <div className="ui-table-shell mt-4">
                  <table className="ui-table text-left text-sm">
                    <thead>
                      <tr className="ui-table-head-row">
                        <th className="ui-table-head-cell px-4 py-3">#</th>
                        <th className="ui-table-head-cell px-4 py-3">{locale === "zh" ? "流程" : "Workflow"}</th>
                        <th className="ui-table-head-cell px-4 py-3">{locale === "zh" ? "团队" : "Team"}</th>
                        <th className="ui-table-head-cell px-4 py-3">{locale === "zh" ? "状态" : "State"}</th>
                        <th className="ui-table-head-cell px-4 py-3">SLA</th>
                        <th className="ui-table-head-cell px-4 py-3">{locale === "zh" ? "优先级" : "Priority"}</th>
                        <th className="ui-table-head-cell px-4 py-3">{locale === "zh" ? "操作" : "Action"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLedger.map((item) => {
                        const selected = selectedIds.includes(item.id);
                        const active = item.id === selectedLedgerId;
                        return (
                          <tr
                            key={item.id}
                            className={`ui-table-row cursor-pointer ${active ? "bg-[var(--accent-soft)]" : ""}`}
                            onClick={() => setSelectedLedgerId(item.id)}
                          >
                            <td className="ui-table-cell px-4">
                              <input
                                type="checkbox"
                                checked={selected}
                                onChange={() =>
                                  setSelectedIds((prev) =>
                                    prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                                  )
                                }
                                onClick={(event) => event.stopPropagation()}
                              />
                            </td>
                            <td className="ui-table-cell px-4">
                              <div>
                                <p className="font-semibold text-token-primary">{item.workflow}</p>
                                <p className="text-xs text-token-tertiary">{item.title}</p>
                              </div>
                            </td>
                            <td className="ui-table-cell px-4">{item.team}</td>
                            <td className="ui-table-cell px-4">{item.state}</td>
                            <td className="ui-table-cell px-4">{item.sla}</td>
                            <td className="ui-table-cell px-4">{item.priority}</td>
                            <td className="ui-table-cell px-4">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  openLedgerDetail(item.id);
                                }}
                              >
                                {copy.viewDetail}
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          ) : null}

          {activeNav === "rules" ? (
            <div className="grid gap-[var(--grid-gap)] xl:grid-cols-[0.92fr_1.08fr]">
              <Card title={copy.rulesTitle} description={copy.rulesDesc}>
                <div className="grid gap-3">
                  {rules.map((rule) => {
                    const active = rule.id === selectedRuleId;
                    return (
                      <button
                        type="button"
                        key={rule.id}
                        onClick={() => setSelectedRuleId(rule.id)}
                        className={`interactive-panel subtle-panel p-4 text-left ${active ? "border-[var(--accent)]" : ""}`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-semibold text-token-primary">{rule.name}</p>
                          {renderSoftPill(rule.status, ruleStatusTone(rule.status))}
                        </div>
                        <p className="mt-2 text-sm text-token-secondary">{rule.trigger}</p>
                        <p className="mt-2 text-xs text-token-tertiary">{rule.hits}</p>
                      </button>
                    );
                  })}
                </div>
              </Card>

              <Card title={copy.ruleComposer} description={selectedRule ? selectedRule.scope : copy.detailEmpty}>
                {selectedRule ? (
                  <div className="grid gap-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="subtle-panel p-4">
                        <p className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{copy.policyTrigger}</p>
                        <p className="mt-2 text-sm text-token-primary">{selectedRule.trigger}</p>
                      </div>
                      <div className="subtle-panel p-4">
                        <p className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{copy.policyAction}</p>
                        <p className="mt-2 text-sm text-token-primary">{selectedRule.action}</p>
                      </div>
                    </div>

                    <div className="subtle-panel p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-token-primary">{copy.ruleImpact}</p>
                          <p className="mt-1 text-sm text-token-secondary">{selectedRule.hits}</p>
                          <p className="mt-1 text-xs text-token-tertiary">{selectedRule.owner}</p>
                        </div>
                        {renderSoftPill(selectedRule.status, ruleStatusTone(selectedRule.status))}
                      </div>
                      <p className="mt-3 text-sm text-token-secondary">{selectedRule.note}</p>
                    </div>

                    <div className="grid gap-3">
                      <Input
                        label={copy.policyName}
                        value={policyDraft.name}
                        onChange={(event) => setPolicyDraft((prev) => ({ ...prev, name: event.target.value }))}
                        placeholder={locale === "zh" ? "例如：区域预算超阈值自动升级" : "e.g. Escalate regional budget over threshold"}
                      />
                      <div className="grid gap-3 md:grid-cols-2">
                        <Input
                          label={copy.policyScope}
                          value={policyDraft.scope}
                          onChange={(event) => setPolicyDraft((prev) => ({ ...prev, scope: event.target.value }))}
                          placeholder={locale === "zh" ? "例如：APAC 发布" : "e.g. APAC launches"}
                        />
                        <Input
                          label={copy.policyTrigger}
                          value={policyDraft.trigger}
                          onChange={(event) => setPolicyDraft((prev) => ({ ...prev, trigger: event.target.value }))}
                          placeholder={locale === "zh" ? "例如：预算 > 500k 且优先级 P1" : "e.g. Budget > 500k and priority P1"}
                        />
                      </div>
                      <Input
                        label={copy.policyAction}
                        value={policyDraft.action}
                        onChange={(event) => setPolicyDraft((prev) => ({ ...prev, action: event.target.value }))}
                        placeholder={locale === "zh" ? "例如：升级到财务负责人并提醒区域总监" : "e.g. Escalate to finance lead and notify regional director"}
                      />
                      <label className="grid gap-2 text-sm">
                        <span className="text-token-secondary">{copy.notes}</span>
                        <textarea
                          className="ui-input min-h-[110px] rounded-[var(--input-radius)] px-3 py-3 text-[var(--text-primary)]"
                          value={policyDraft.note}
                          onChange={(event) => setPolicyDraft((prev) => ({ ...prev, note: event.target.value }))}
                          placeholder={locale === "zh" ? "记录规则意图、风险和 rollout 说明" : "Describe intent, risk, and rollout notes"}
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" onClick={handleCreateRule}>
                        {copy.saveDraft}
                      </Button>
                      <Button size="sm" variant="secondary" onClick={toggleRuleStatus}>
                        {selectedRule.status === enabledStatus ? copy.disableRule : copy.activateRule}
                      </Button>
                    </div>
                  </div>
                ) : null}
              </Card>
            </div>
          ) : null}

          {activeNav === "audit" ? (
            <div className="grid gap-[var(--grid-gap)] xl:grid-cols-[1.05fr_0.95fr]">
              <Card title={copy.auditTitle} description={copy.auditDesc}>
                <div className="grid gap-3">
                  {auditEntries.map((entry) => (
                    <div key={entry.id} className="interactive-panel subtle-panel p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-token-primary">{entry.title}</p>
                          <p className="mt-1 text-sm text-token-secondary">{entry.detail}</p>
                        </div>
                        {renderSoftPill(entry.time, entry.tone)}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title={copy.detailTitle} description={selectedLedger ? selectedLedger.workflow : copy.detailEmpty}>
                {selectedLedger ? (
                  <div className="grid gap-3">
                    <div className="subtle-panel p-4">
                      <p className="text-sm font-semibold text-token-primary">{selectedLedger.title}</p>
                      <p className="mt-2 text-sm text-token-secondary">{selectedLedger.summary}</p>
                    </div>
                    <div className="subtle-panel p-4">
                      <p className="text-xs uppercase tracking-[0.12em] text-token-tertiary">{locale === "zh" ? "关联规则" : "Linked rules"}</p>
                      <p className="mt-2 text-sm text-token-primary">
                        {rules
                          .filter((rule) => rule.scope === (locale === "zh" ? "全局" : "Global") || rule.scope.includes(selectedLedger.team))
                          .map((rule) => rule.name)
                          .slice(0, 2)
                          .join(" · ")}
                      </p>
                    </div>
                    <Button variant="secondary" onClick={() => setActiveNav("ledger")}>
                      {copy.openLedger}
                    </Button>
                  </div>
                ) : null}
              </Card>
            </div>
          ) : null}
        </div>
      </section>

      <Modal
        open={modal === "ledger-detail"}
        onClose={() => setModal(null)}
        title={copy.detailTitle}
        description={selectedLedger ? `${selectedLedger.workflow} · ${selectedLedger.owner}` : copy.detailEmpty}
        closeLabel={copy.close}
        backdropLabel={copy.close}
      >
        {selectedLedger ? (
          <div className="grid gap-4">
            <div className="subtle-panel p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-token-primary">{selectedLedger.title}</p>
                  <p className="mt-1 text-sm text-token-secondary">{selectedLedger.summary}</p>
                </div>
                {renderSoftPill(selectedLedger.state, ledgerStateTone(selectedLedger.state))}
              </div>
              <div className="mt-4 grid gap-2 text-sm text-token-secondary md:grid-cols-2">
                <p>{locale === "zh" ? "申请人" : "Requester"}: {selectedLedger.requester}</p>
                <p>{locale === "zh" ? "Owner" : "Owner"}: {selectedLedger.owner}</p>
                <p>{locale === "zh" ? "审批金额" : "Approval amount"}: {selectedLedger.amount}</p>
                <p>{locale === "zh" ? "提交时间" : "Submitted"}: {selectedLedger.submittedAt}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-token-primary">{copy.reviewChecklist}</p>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {selectedLedger.approvals.map((item) => (
                  <div key={item} className="subtle-panel px-3 py-3 text-sm text-token-secondary">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <label className="grid gap-2 text-sm">
              <span className="text-token-secondary">{copy.decisionNote}</span>
              <textarea
                className="ui-input min-h-[120px] rounded-[var(--input-radius)] px-3 py-3 text-[var(--text-primary)]"
                value={decisionNote}
                onChange={(event) => setDecisionNote(event.target.value)}
                placeholder={locale === "zh" ? "写下审批理由、风险说明或回退建议" : "Add rationale, risks, or requested changes"}
              />
            </label>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={() => {
                  handleDecision(approvedState);
                  setModal(null);
                }}
              >
                {copy.approve}
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  handleDecision(reviewState);
                  setModal(null);
                }}
              >
                {copy.requestChanges}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  handleDecision(blockedState);
                  setModal(null);
                }}
              >
                {copy.escalate}
              </Button>
            </div>

            <div>
              <p className="text-sm font-semibold text-token-primary">{copy.recentActivity}</p>
              <div className="mt-3 grid gap-2">
                {selectedLedger.log.map((entry) => (
                  <div key={entry} className="subtle-panel px-3 py-3 text-sm text-token-secondary">
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Modal>

      <Modal
        open={modal === "export"}
        onClose={() => setModal(null)}
        title={copy.exportTitle}
        description={copy.exportDesc}
        closeLabel={copy.close}
        backdropLabel={copy.close}
      >
        <div className="grid gap-3">
          <div className="subtle-panel p-4 text-sm text-token-secondary">
            {locale === "zh"
              ? `将导出 ${filteredLedger.length} 条台账记录、${rules.length} 条规则和 ${auditEntries.length} 条最近日志。`
              : `Will export ${filteredLedger.length} ledger rows, ${rules.length} rules, and ${auditEntries.length} recent audit entries.`}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setModal(null)}>
              {copy.cancel}
            </Button>
            <Button
              onClick={() => {
                setModal(null);
                setFeedback(locale === "zh" ? "运营快照已生成并进入下载队列。" : "Operations snapshot generated and queued for download.");
                appendAudit(
                  locale === "zh" ? "导出运营快照" : "Operations snapshot exported",
                  locale === "zh" ? "导出当前台账、策略和审计视图。" : "Exported current ledger, policy, and audit views.",
                  "accent"
                );
              }}
            >
              {copy.submit}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={modal === "invite"}
        onClose={() => setModal(null)}
        title={copy.inviteTitle}
        description={copy.inviteDesc}
        closeLabel={copy.close}
        backdropLabel={copy.close}
      >
        <div className="grid gap-3">
          <Input
            label={copy.emails}
            value={inviteEmails}
            onChange={(event) => setInviteEmails(event.target.value)}
            placeholder={locale === "zh" ? "例如：legal@northstar.com, finance@northstar.com" : "e.g. legal@northstar.com, finance@northstar.com"}
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setModal(null)}>
              {copy.cancel}
            </Button>
            <Button
              onClick={() => {
                setModal(null);
                setFeedback(locale === "zh" ? "协作者邀请已发送，待他们加入审批工作台。" : "Collaborator invites sent to join the approvals workspace.");
                appendAudit(
                  locale === "zh" ? "发送协作者邀请" : "Collaborator invites sent",
                  inviteEmails || (locale === "zh" ? "已发送到默认协作组。" : "Sent to the default collaborator group."),
                  "neutral"
                );
                setInviteEmails("");
              }}
            >
              {copy.submit}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={modal === "policy"}
        onClose={() => setModal(null)}
        title={copy.policyTitle}
        description={copy.policyDesc}
        closeLabel={copy.close}
        backdropLabel={copy.close}
      >
        <div className="grid gap-3">
          <Input
            label={copy.policyName}
            value={policyDraft.name}
            onChange={(event) => setPolicyDraft((prev) => ({ ...prev, name: event.target.value }))}
          />
          <Input
            label={copy.policyScope}
            value={policyDraft.scope}
            onChange={(event) => setPolicyDraft((prev) => ({ ...prev, scope: event.target.value }))}
          />
          <Input
            label={copy.policyTrigger}
            value={policyDraft.trigger}
            onChange={(event) => setPolicyDraft((prev) => ({ ...prev, trigger: event.target.value }))}
          />
          <Input
            label={copy.policyAction}
            value={policyDraft.action}
            onChange={(event) => setPolicyDraft((prev) => ({ ...prev, action: event.target.value }))}
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setModal(null)}>
              {copy.cancel}
            </Button>
            <Button onClick={handleCreateRule}>{copy.createRule}</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
