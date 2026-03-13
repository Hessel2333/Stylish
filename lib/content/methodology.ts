export const methodologyContent = {
  zh: {
    coreIdea: "Stylish 在共享场景结构内比较设计语言表达差异，先锁定结构不变量，再通过 token 切换视觉变量。",
    dimensions: [
      {
        title: "空间节奏",
        apple: "更大段落留白",
        google: "平衡且亲和的分组",
        microsoft: "更紧凑但保持可读"
      },
      {
        title: "形态与边界",
        apple: "边界更弱、层级更轻",
        google: "圆润控件与状态层",
        microsoft: "边界更清晰、分区更稳"
      },
      {
        title: "控件气质",
        apple: "克制安静",
        google: "友好可亲近",
        microsoft: "高效率导向"
      },
      {
        title: "动效节奏",
        apple: "更慢、更细腻",
        google: "中速、反馈明显",
        microsoft: "更快、不中断任务流"
      }
    ],
    whyScenarioFirst: "如果主题切换会改变模块顺序或内容主线，就无法进行公平比较。因此先固定场景，再注入主题变量。",
    disclaimer:
      "本项目仅提炼 Apple、Google、Microsoft 相关设计语言的通用特征，不代表任何官方合作、授权或背书，也未使用其 logo、商标与品牌专有素材。"
  },
  en: {
    coreIdea:
      "Stylish compares design language expression inside shared product scenarios. We keep structure constant and shift tokenized design variables.",
    dimensions: [
      {
        title: "Spatial Rhythm",
        apple: "Large sectional breathing room",
        google: "Balanced gaps with approachable grouping",
        microsoft: "Compact but readable workspace density"
      },
      {
        title: "Shape + Edge",
        apple: "Softer surfaces, weaker edge contrast",
        google: "Round controls with visible state layers",
        microsoft: "Clear boundaries and structured panel seams"
      },
      {
        title: "Control Character",
        apple: "Quiet controls, restrained emphasis",
        google: "Friendly controls with expressive states",
        microsoft: "Productive controls tuned for throughput"
      },
      {
        title: "Motion Cadence",
        apple: "Slower, polished easing",
        google: "Medium speed, responsive state feedback",
        microsoft: "Fast transitions for task continuity"
      }
    ],
    whyScenarioFirst:
      "If each theme changed module order or content logic, comparison would be meaningless. We lock scene structure first, then express theme through tokenized variables.",
    disclaimer:
      "This project is inspired by broad design language traits associated with Apple, Google, and Microsoft ecosystems. It is not affiliated with or endorsed by those companies, and uses no logos or proprietary brand assets."
  }
} as const;
