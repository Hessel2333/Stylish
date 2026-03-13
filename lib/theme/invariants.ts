export const PRODUCT_ECOSYSTEM_NAME = "Northstar Workspace";

export const sceneInvariants = {
  product: {
    title: {
      zh: "产品营销场景",
      en: "Product Marketing"
    },
    modules: {
      zh: ["首屏 Hero", "价值条", "特性网格", "工作流/用例", "定价", "信任背书", "转化区"],
      en: [
        "Hero",
        "Value Proposition Strip",
        "Feature Grid",
        "Workflow / Use Cases",
        "Pricing",
        "Testimonials / Trust",
        "CTA Footer"
      ]
    },
    interactionGoal: {
      zh: "让用户理解价值并进入试用转化",
      en: "Understand value proposition and move to trial request"
    }
  },
  admin: {
    title: {
      zh: "管理工作台场景",
      en: "Admin Workspace"
    },
    modules: {
      zh: ["侧边栏+工具栏", "KPI 总览", "分析区", "审批队列", "数据表格", "详情面板"],
      en: [
        "Sidebar + Toolbar",
        "KPI Overview",
        "Analytics Block",
        "Approval Queue",
        "Data Table",
        "Detail Panel"
      ]
    },
    interactionGoal: {
      zh: "以高效率完成运营处理与审批操作",
      en: "Process operational work with speed and clarity"
    }
  },
  task: {
    title: {
      zh: "任务应用场景",
      en: "Task App"
    },
    modules: {
      zh: ["顶部导航", "今日摘要", "任务列表", "详情窗格", "快速创建", "设置区", "状态反馈"],
      en: [
        "Top Navigation",
        "Today Summary",
        "Task List",
        "Detail Pane",
        "Quick Create",
        "Settings Panel",
        "State Feedback"
      ]
    },
    interactionGoal: {
      zh: "支撑团队日常任务计划与执行闭环",
      en: "Plan and complete daily team tasks"
    }
  }
} as const;

export const globalInvariants = {
  narrative: {
    zh: "共享同一产品叙事主线，文案语气保持中性一致",
    en: "Shared product story and neutral copy tone"
  },
  dataModel: {
    zh: "使用静态 mock 数据，并保持信息层级一致",
    en: "Static mock content with same information hierarchy across themes"
  },
  prohibited: {
    zh: "不使用 Apple/Google/Microsoft 的 Logo、商标或品牌专有素材",
    en: "No direct use of Apple/Google/Microsoft logos, marks, or proprietary assets"
  }
} as const;
