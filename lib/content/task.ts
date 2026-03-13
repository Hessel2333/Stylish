export const taskContent = {
  zh: {
    summary: {
      dueToday: 7,
      inProgress: 12,
      completed: 31,
      blocked: 2
    },
    tasks: [
      {
        title: "完成留存活动发布文案",
        project: "Q2 发布",
        owner: "Nina",
        status: "进行中",
        due: "今天"
      },
      {
        title: "与数据团队统一指标命名",
        project: "运营协同",
        owner: "Lucas",
        status: "阻塞",
        due: "明天"
      },
      {
        title: "准备内部赋能演示材料",
        project: "Enablement",
        owner: "Maya",
        status: "待开始",
        due: "3 月 16 日"
      },
      {
        title: "审核 onboarding 引导草稿",
        project: "产品教育",
        owner: "Iris",
        status: "已完成",
        due: "3 月 12 日"
      }
    ],
    detail: {
      title: "完成留存活动发布文案",
      checklist: ["与 PM 同步最新证据点", "确认法务安全表达", "附上已审批图片素材", "交付到活动执行频道"]
    },
    settings: ["默认负责人：组长", "提醒频率：每天 2 次", "阻塞状态升级：已开启"]
  },
  en: {
    summary: {
      dueToday: 7,
      inProgress: 12,
      completed: 31,
      blocked: 2
    },
    tasks: [
      {
        title: "Finalize launch copy for retention campaign",
        project: "Q2 Launch",
        owner: "Nina",
        status: "In Progress",
        due: "Today"
      },
      {
        title: "Align analytics naming with data team",
        project: "Ops Sync",
        owner: "Lucas",
        status: "Blocked",
        due: "Tomorrow"
      },
      {
        title: "Prepare internal enablement deck",
        project: "Enablement",
        owner: "Maya",
        status: "Ready",
        due: "Mar 16"
      },
      {
        title: "Review onboarding walkthrough draft",
        project: "Product Education",
        owner: "Iris",
        status: "Done",
        due: "Mar 12"
      }
    ],
    detail: {
      title: "Finalize launch copy for retention campaign",
      checklist: [
        "Sync latest proof points with PM",
        "Confirm legal-safe phrasing",
        "Attach approved image assets",
        "Hand off to campaign channel"
      ]
    },
    settings: [
      "Default assignee: Team lead",
      "Reminder cadence: 2x per day",
      "Blocked-state escalation: Enabled"
    ]
  }
} as const;
