export const adminContent = {
  zh: {
    topActions: ["导出", "规则", "邀请成员", "创建策略"],
    kpis: [
      { label: "待处理审批", value: "124", delta: "今日 +8" },
      { label: "SLA 风险", value: "17", delta: "较昨日 -5" },
      { label: "自动化执行", value: "932", delta: "本周 +13%" },
      { label: "结案率", value: "96.2%", delta: "+1.4 个百分点" }
    ],
    queue: [
      {
        title: "发布简报法务审核",
        team: "合规",
        owner: "M. Harper",
        due: "今天 17:00",
        status: "warning"
      },
      {
        title: "区域定价文档审批",
        team: "财务",
        owner: "S. Ito",
        due: "明天 09:30",
        status: "neutral"
      },
      {
        title: "Q2 数据留存策略更新",
        team: "安全",
        owner: "L. Gomez",
        due: "3 月 15 日 14:00",
        status: "danger"
      }
    ],
    table: [
      {
        workflow: "Launch-447",
        requester: "A. Kim",
        state: "待处理",
        sla: "5h",
        priority: "P1"
      },
      {
        workflow: "Legal-232",
        requester: "J. Patel",
        state: "审核中",
        sla: "12h",
        priority: "P2"
      },
      {
        workflow: "Budget-101",
        requester: "D. Stone",
        state: "已通过",
        sla: "完成",
        priority: "P3"
      },
      {
        workflow: "Policy-309",
        requester: "R. Chen",
        state: "阻塞",
        sla: "2h",
        priority: "P1"
      }
    ],
    detailPanel: {
      title: "策略引擎 - 路由规则",
      points: [
        "P1 请求 90 分钟无处理则自动升级",
        "法务敏感发布优先经过合规再到财务",
        "状态进入阻塞时通知活动负责人"
      ]
    }
  },
  en: {
    topActions: ["Export", "Rules", "Invite", "Create Policy"],
    kpis: [
      { label: "Open Approvals", value: "124", delta: "+8 today" },
      { label: "SLA Risk", value: "17", delta: "-5 vs yesterday" },
      { label: "Automation Runs", value: "932", delta: "+13% this week" },
      { label: "Resolution Rate", value: "96.2%", delta: "+1.4 pt" }
    ],
    queue: [
      {
        title: "Launch brief legal review",
        team: "Compliance",
        owner: "M. Harper",
        due: "Today 17:00",
        status: "warning"
      },
      {
        title: "Regional pricing doc approval",
        team: "Finance",
        owner: "S. Ito",
        due: "Tomorrow 09:30",
        status: "neutral"
      },
      {
        title: "Q2 campaign data retention update",
        team: "Security",
        owner: "L. Gomez",
        due: "Mar 15, 14:00",
        status: "danger"
      }
    ],
    table: [
      {
        workflow: "Launch-447",
        requester: "A. Kim",
        state: "Pending",
        sla: "5h",
        priority: "P1"
      },
      {
        workflow: "Legal-232",
        requester: "J. Patel",
        state: "In Review",
        sla: "12h",
        priority: "P2"
      },
      {
        workflow: "Budget-101",
        requester: "D. Stone",
        state: "Approved",
        sla: "Done",
        priority: "P3"
      },
      {
        workflow: "Policy-309",
        requester: "R. Chen",
        state: "Blocked",
        sla: "2h",
        priority: "P1"
      }
    ],
    detailPanel: {
      title: "Policy Engine - Routing Rules",
      points: [
        "Escalate P1 requests if no owner action in 90 minutes",
        "Route legal-sensitive launches to compliance before finance",
        "Notify campaign manager on blocker state transition"
      ]
    }
  }
} as const;
