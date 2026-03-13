# Stylish 项目规范文档（优化版）

## 文档状态（2026-03-13）
本文件包含一部分“早期优化建议/术语替换过程”的历史内容。当前仓库已采用以下实现基线：
- 主题命名：`Apple HIG` / `Material 3` / `Fluent 2`
- 场景路由：`/scenes/product`、`/scenes/admin`、`/scenes/task`
- 架构方向：单组件系统 + 主题 token + 组件 recipe
- `Badge` 已按 `meta / status / counter` 三轨道拆分，主题间互不污染

如与历史段落出现术语差异，请以 `README.md` 与代码实现为准。

## 0. 文档目标
本文件用于作为 `Stylish` 项目的统一蓝图，服务于以下目标：
- 统一项目定位、信息架构、场景设计与主题系统边界。
- 为 Codex 或其他代码生成代理提供稳定、可执行、少歧义的实现依据。
- 在不复制品牌界面的前提下，抽象并展示三种不同设计语言的页面表达差异。

---

## 1. 先说结论：这份原文档最值得优化的地方

原文档整体已经很完整，优点是：结构清楚、主题差异定义明确、实现顺序合理、能直接指导首版搭建。

但从“更适合实际落地”和“更适合交给 Codex 执行”两个角度看，还可以进一步优化这 8 点：

### 1.1 路由命名需要统一
原文同时出现了：
- `Product Showcase / Admin Dashboard / Web App`
- `product-showcase / admin-dashboard / web-app`
- `product / dashboard / web-app`

建议统一成一套，避免后续代码、README、导航文案、页面标题不一致。

**推荐统一方案：**
- 展示文案：`Product Marketing`、`Admin Workspace`、`Task App`
- URL 路由：
  - `/scenes/product`
  - `/scenes/admin`
  - `/scenes/task`

原因：
- `Product Marketing` 比 `Product Showcase` 更像完整产品营销页。
- `Admin Workspace` 比 `Admin Dashboard` 更能覆盖表格、审批、筛选、设置、任务流。
- `Task App` 比 `Web App` 更具体，能减少实现时的泛化风险。

### 1.2 场景名称应更具体，减少“泛页面”倾向
原文的 `Web App` 太宽泛，容易被实现成“一个通用壳子 + 几张卡片”。

建议把第三个场景从 `Web App` 具体化为：
- `Task App`，或
- `Collaboration App`

**推荐：`Task App`**

因为它最适合同时容纳：
- 列表
- 详情面板
- 创建弹窗
- 状态标签
- 空状态
- 表单控件

这会更有利于拉开三种设计语言在“日常使用型产品”中的差异。

### 1.3 首版内容生态应再收紧，避免叙事漂移
原文提出“同一个虚构产品生态”是对的，但还不够严格。

建议明确：
- 三个场景都属于同一个虚构产品：`Northstar Workspace`
- 三个页面分别是：
  - 官网营销页
  - 管理后台
  - 任务应用

这样可以确保：
- 文案语气统一
- 色彩、图标、模块语义一致
- 用户能明显感觉是在看“同一个产品的不同面”

否则很容易出现：首页像 AI 产品站、Dashboard 像 CRM、Web App 像笔记工具，比较价值会下降。

### 1.4 首页需要更明确地承担“演示入口”职责
原文首页模块已经合理，但建议补一条硬约束：

**首页首屏必须在不滚动或少滚动的情况下，同时出现：**
- 一句项目定义
- 一个可用的 Theme Switcher
- 至少一个实时变化的 UI 预览区
- 一个进入场景页的 CTA

原因：
这个项目的价值不应该靠阅读解释理解，而应该靠“看见切换”理解。

### 1.5 Methodology 页建议改成“Explain the System”，而不是纯说明页
原文建议保留 `Methodology`，这是对的。

但建议这个页面不要只是长篇文字说明，而应该包含：
- 三主题风格摘要卡片
- Token 分层示意
- 场景优先、主题其次的架构图
- “哪些可变，哪些不可变”的对照说明
- 免责声明

也就是说，`Methodology` 页面应该是一个“可视化方法论页面”，不是单纯的文档页面。

### 1.6 主题系统还需要补一层“不可变约束”
原文把 token 分层讲得很清楚，但建议再加一层：

**Invariant Layer（不变量层）**

用于明确这些内容不允许因主题变化而变化：
- 页面模块集合
- 主要信息层级
- 核心交互目标
- 文案内容主线
- 数据结构

这层很重要，因为它直接保证“同场景可比较性”。

推荐最终主题架构分为：
1. Invariants
2. Primitive Tokens
3. Semantic Tokens
4. Component Tokens
5. Density / Layout Profiles

### 1.7 MVP 范围可以再收一轮
原文首版包含：
- 首页
- 三场景页
- Methodology
- README
- 主题持久化
- 基础动效

这已经可行，但如果你想提高首版完成概率，可以把 MVP 分成两个层次：

**MVP-A（最稳首发）**
- 首页
- `Product Marketing`
- `Admin Workspace`
- 全局 Theme Switcher
- 主题持久化
- README

**MVP-B（完整版首版）**
- 再加 `Task App`
- 再加 `Methodology`

这样即使时间有限，也能先交出一个完整度高的版本。

### 1.8 需要补充“验收时看什么”的更具体标准
原文已有验收标准，但建议进一步量化成“页面审查问题”，方便你自己验收或让 Codex 自检：

- 不看颜色，仅看形状和边界，三主题是否仍然可分辨？
- 同一页面切换主题后，至少 4 个组件是否有明显气质变化？
- 任一场景页首屏是否能在 3 秒内识别这是哪个场景？
- 首页首屏是否能在 10 秒内让陌生访客明白项目价值？
- 任一主题下移动端导航和主题切换是否都可用？

---

## 2. 优化后的推荐版本

### 2.1 项目名称建议
- 仓库名：`Stylish`
- 对外标题：`Stylish: Scenario Shift`
- 英文副标题：`A multi-theme interface showcase across shared product scenarios`

原因：
- `Stylish` 保留简洁和品牌感。
- `Scenario Shift` 补足“同场景多表达”的核心概念。
- 对 GitHub、Vercel、README、作品集展示都友好。

---

## 3. 优化后的信息架构

### 3.1 顶部导航
- `Home`
- `Product`
- `Admin`
- `Task`
- `Methodology`
- `GitHub`

### 3.2 推荐路由
- `/`
- `/scenes/product`
- `/scenes/admin`
- `/scenes/task`
- `/methodology`

### 3.3 导航原则
- 场景是主导航。
- 主题是全局状态，不进入一级导航。
- Theme Switcher 在 Header 中全局常驻。
- 页面内可以有二次 Theme Switcher，但不应喧宾夺主。

---

## 4. 统一产品生态建议

建议整个站点围绕同一个虚构产品生态构建。

### 4.1 推荐虚构产品
**Northstar Workspace**

### 4.2 三个场景对应关系
- `Product`：Northstar Workspace 的官网营销页
- `Admin`：Northstar Workspace 的管理后台
- `Task`：Northstar Workspace 的日常任务应用

### 4.3 这样做的好处
- 保持跨页面叙事一致
- 降低内容漂移
- 提高“同一产品、不同表达”的可理解性
- 让首页、README、截图素材更统一

---

## 5. 场景优化建议

### 5.1 Product Marketing（替代 Product Showcase）

**页面目标**
展示同一产品在三种设计语言下的品牌表达、信任构建和转化方式差异。

**建议模块顺序**
1. Hero
2. Value proposition strip
3. Feature grid
4. Workflow / use cases
5. Pricing
6. Testimonials / trust block
7. CTA footer

**最能拉开主题差异的模块**
- Hero
- Feature cards
- Pricing
- CTA

**建议补充**
这一页不要只像 landing page，要像“完整产品营销页”。

### 5.2 Admin Workspace（替代 Admin Dashboard）

**页面目标**
展示同一后台工作环境在三种设计语言下的信息组织、筛选效率、面板结构与生产力表达差异。

**建议模块顺序**
1. Sidebar + top toolbar
2. KPI overview
3. Chart / analytics block
4. Approval queue / pending items
5. Table section
6. Side detail panel / settings drawer

**最能拉开主题差异的模块**
- Sidebar
- Toolbar + filters
- KPI cards
- Table
- Detail drawer

**建议补充**
不要只做“仪表盘首页”，要让它像真正的工作台。

### 5.3 Task App（替代 Web App）

**页面目标**
展示同一日常使用型应用在三种设计语言下的可用性气质、反馈机制和任务流组织差异。

**建议模块顺序**
1. Top navigation
2. Summary / today overview
3. Main task list or board
4. Detail pane
5. Quick create action / modal trigger
6. Settings or preference panel
7. Empty / success / info states

**最能拉开主题差异的模块**
- 顶部导航
- 列表卡片
- 状态标签
- 详情面板
- 空状态
- 创建任务弹窗

**建议补充**
这一页要具体到“任务应用”，不要停留在泛泛的 Web App 壳子。

---

## 6. 首页优化建议

首页不是目录页，而是“演示入口页”。

### 6.1 首页首屏必须包含
- 项目标题与一句话定义
- Theme Switcher
- 可实时切换的视觉预览区
- 三场景入口中的至少一个 CTA

### 6.2 推荐模块顺序
1. Hero + live preview
2. 项目一句话说明
3. 三场景入口卡片
4. 三主题特征概览
5. 为什么这不是普通组件库
6. Methodology teaser
7. GitHub / Live site CTA

### 6.3 首页首屏的核心标准
陌生用户在 10 秒内应能理解：
- 这不是业务产品站
- 这是一个多设计语言展示项目
- 主题切换是核心功能
- 三个场景是主要浏览入口

---

## 7. 主题系统优化建议

### 7.1 推荐最终分层
1. **Invariants**
2. **Primitive Tokens**
3. **Semantic Tokens**
4. **Component Tokens**
5. **Density / Layout Profiles**

### 7.2 Invariants（新增）
用于约束以下内容在所有主题中保持不变：
- 模块集合
- 核心信息顺序
- 数据结构
- 主要交互意图
- 页面目标

这样可以避免不同主题被实现成不同产品。

### 7.3 Primitive Tokens
包括：
- raw colors
- radius scale
- spacing scale
- shadow scale
- stroke width
- typography scale
- motion duration
- easing

### 7.4 Semantic Tokens
包括：
- `bg`
- `surface`
- `surface-muted`
- `text-primary`
- `text-secondary`
- `accent`
- `border`
- `focus-ring`
- `success`
- `warning`
- `error`
- `overlay`

### 7.5 Component Tokens
包括：
- button height / radius / emphasis
- input density / border style
- card padding / visual weight
- table row height / header emphasis
- tabs style
- toolbar height
- drawer width

### 7.6 Density / Layout Profiles
包括：
- section gap
- content max width
- grid gap
- toolbar density
- table density
- card density

---

## 8. 三主题的进一步优化建议

### 8.1 Apple HIG（旧称 Apple-like）
保留原文定义，但建议再加两条约束：
- 不使用过度玻璃拟态，不把“高级感”误做成“模糊堆叠”。
- 表达重点是安静、留白、表面层次，而不是炫技材质。

### 8.2 Material 3（旧称 Google-like）
保留原文定义，但建议再加两条约束：
- 避免多色滥用，重点是“清晰、友好、可理解”，不是“热闹”。
- 强化状态与层级，不要做成普通圆角 SaaS 模板。

### 8.3 Fluent 2（旧称 Microsoft-like）
保留原文定义，但建议再加两条约束：
- 保持现代和清爽，避免落入“传统企业后台”的沉闷感。
- 强调结构与效率，而不是单纯加边框和压缩留白。

---

## 9. 组件与模式层优化建议

### 9.1 首版高优先组件
建议首版先做这批，而不是一开始铺太全：
- Button
- Card
- Input
- Badge
- Tabs
- SidebarNav
- TopBar
- StatCard
- TableBlock
- EmptyState
- Drawer
- Modal

### 9.2 首版高优先模式层
- HeroBlock
- FeatureGrid
- PricingBlock
- KPIOverview
- ToolbarFilters
- DataTableBlock
- TaskListBlock
- DetailPane
- SettingsPanel

这样更利于尽快完成完整演示，而不是先陷入大而全组件库建设。

---

## 10. 状态管理建议

### 10.1 推荐方案
- query 参数：用于分享和直达
- localStorage：用于跨页面记忆
- React Context：用于当前运行时同步

### 10.2 优先级建议
1. query
2. localStorage
3. default theme

### 10.3 为什么这样更好
- 便于你截图、分享、写 README 示例链接
- 更适合静态站点
- 不需要复杂状态管理库

---

## 11. MVP 建议（更稳的版本）

### 11.1 MVP-A
- 首页
- Product Marketing
- Admin Workspace
- 全局 Theme Switcher
- 主题持久化
- README

### 11.2 MVP-B
- 新增 Task App
- 新增 Methodology
- 增加更完整的空状态和反馈状态

### 11.3 v2
- Compare mode
- Theme inspector
- Component explorer
- Theme export
- Density slider
- Motion toggle

---

## 12. 给 Codex 的更强执行约束

Codex 在执行时，建议额外加入以下硬约束：

1. 先完成主题系统骨架，再做页面。
2. 先用一个场景验证三主题差异，再扩展到其他场景。
3. 不要一上来建设完整组件库，只做首版所需组件。
4. 首页首屏必须可直接感知主题切换效果。
5. 页面差异必须至少同时体现在颜色之外的 4 个维度：
   - 圆角
   - 边界
   - 密度
   - 留白
   - 控件气质
   - 动效节奏
6. 任何主题都不能增删核心模块集合。
7. 所有页面内容必须属于同一个虚构产品生态。

---

## 13. 最终推荐的精简蓝图

如果你想让这个项目首版更稳、更容易出效果，我最推荐的定稿是：

### 项目标题
**Stylish: Scenario Shift**

### 三个场景
- Product Marketing
- Admin Workspace
- Task App

### 三个主题
- Apple HIG
- Material 3
- Fluent 2

### 核心实现顺序
1. 主题系统
2. 首页首屏演示
3. Product Marketing
4. Admin Workspace
5. Task App
6. Methodology
7. README 与部署包装

### 核心验证标准
- 不看解释也能理解项目价值
- 不看颜色也能分辨主题差异
- 不看代码也能感受到“同场景，不同表达”

---

## 14. 简短结论

你的这份原始架构文档已经足够好，真正需要优化的不是“再加更多内容”，而是：
- 命名更统一
- 场景更具体
- 首页更强调演示入口
- 主题系统加入不变量层
- MVP 再收一轮
- 给 Codex 更强的执行约束

如果按这版优化稿推进，项目会更像一个真正可落地、可展示、可维护的开源作品，而不是一份只有方向感的概念说明。
