export const productContent = {
  zh: {
    hero: {
      eyebrow: "场景：产品营销",
      title: "让产品发布协同不再被团队割裂",
      description: "Northstar Workspace 把叙事、审批、素材与发布任务放在同一条协同链路中。",
      stats: [
        { label: "活动交付效率", value: "提升 2.4 倍" },
        { label: "审批周期", value: "缩短 37%" },
        { label: "每周协同时间", value: "节省 9 小时" }
      ]
    },
    valueStrip: ["从战略到执行只需一份简报", "每一个决策都可追溯", "面向产品、市场、运营的一体化协同"],
    features: [
      {
        title: "Launch Rooms",
        description: "在启动前先定义里程碑、频道与责任边界。"
      },
      {
        title: "智能审批路径",
        description: "通过策略模板自动路由文案、法务与设计审核。"
      },
      {
        title: "叙事素材库",
        description: "统一管理核心卖点、证据点与可复用表达。"
      },
      {
        title: "发布信号面板",
        description: "实时识别准备度与阻塞点，降低上线风险。"
      }
    ],
    workflow: ["定义发布范围与目标指标", "统一产品叙事与证据素材", "完成跨职能审批", "上线并持续追踪健康度"],
    pricing: [
      {
        tier: "Core",
        price: "$19",
        summary: "适合单产品小队与标准发布模板"
      },
      {
        tier: "Scale",
        price: "$49",
        summary: "适合多团队协作与治理分析"
      },
      {
        tier: "Enterprise",
        price: "定制",
        summary: "适合全球化组织与高级控制策略"
      }
    ],
    trust: [
      {
        quote: "Northstar 让我们的发布节奏从混乱变成统一流程。",
        source: "Avery Lin，产品市场负责人"
      },
      {
        quote: "团队终于把精力放在策略，而不是找文件。",
        source: "Chris Park，增长总监"
      }
    ]
  },
  en: {
    hero: {
      eyebrow: "Scenario: Product Marketing",
      title: "Coordinate Product Launches Without Fragmented Teams",
      description:
        "Northstar Workspace keeps messaging, approvals, campaign assets, and launch tasks aligned in one shared flow.",
      stats: [
        { label: "Campaign Delivery", value: "2.4x faster" },
        { label: "Approval Cycle", value: "-37%" },
        { label: "Weekly Coordination", value: "9h saved" }
      ]
    },
    valueStrip: [
      "One brief from strategy to execution",
      "Traceable decisions across every launch",
      "Designed for product, marketing, and operations"
    ],
    features: [
      {
        title: "Launch Rooms",
        description: "Create one mission room with milestones, channels, and ownership rules before kickoff."
      },
      {
        title: "Smart Approval Paths",
        description: "Route copy, legal, and design reviews using policy templates instead of manual ping loops."
      },
      {
        title: "Narrative Library",
        description: "Keep messaging pillars, proof points, and reusable snippets synchronized across teams."
      },
      {
        title: "Signal Dashboard",
        description: "Monitor readiness and blockers with campaign-level confidence signals in real time."
      }
    ],
    workflow: [
      "Define launch scope and success indicators",
      "Align product narrative and proof points",
      "Collect cross-functional approvals",
      "Ship campaign assets and monitor launch health"
    ],
    pricing: [
      {
        tier: "Core",
        price: "$19",
        summary: "For one product squad with shared launch templates"
      },
      {
        tier: "Scale",
        price: "$49",
        summary: "For multi-team programs needing governance and analytics"
      },
      {
        tier: "Enterprise",
        price: "Custom",
        summary: "For global organizations with advanced controls"
      }
    ],
    trust: [
      {
        quote: "Northstar turned launch chaos into one clear operating rhythm.",
        source: "Avery Lin, Product Marketing Lead"
      },
      {
        quote: "Our teams now debate strategy, not where files live.",
        source: "Chris Park, Growth Director"
      }
    ]
  }
} as const;
