# Stylish：场景迁移演示

在同一产品场景中，展示三种设计语言启发下的不同界面表达。

## 项目动机
多数主题切换只变颜色。Stylish 强调在保持场景结构不变的前提下，对比更深层的设计差异：留白、圆角、边界、阴影、密度、控件气质与动效节奏。

## 场景说明
- 产品营销（Product Marketing）
  - 路由：`/scenes/product`
  - 重点：首屏层级、价值传达、定价与信任构建
- 管理工作台（Admin Workspace）
  - 路由：`/scenes/admin`
  - 重点：导航结构、信息密度、审批与数据处理效率
- 任务应用（Task App）
  - 路由：`/scenes/task`
  - 重点：任务流、详情窗格、状态反馈与快速创建

## 主题说明
- Apple HIG
  - 克制、安静、留白优先，边界更弱
- Material 3
  - 友好、清晰、圆润，状态反馈更明显
- Fluent 2
  - 结构化、生产力导向，边界更清晰、密度更高

## 技术栈
- Next.js（App Router）
- TypeScript
- Tailwind CSS v4
- 静态 mock 内容（无后端、无数据库）

## 项目结构
```text
app/
  page.tsx
  methodology/page.tsx
  scenes/product/page.tsx
  scenes/admin/page.tsx
  scenes/task/page.tsx
components/
  layout/            # Header、页面壳层
  i18n/              # 中英文切换与 locale 上下文
  theme/             # 主题上下文、主题切换、带参数链接
  ui/                # 统一基础组件
  patterns/          # 场景级模式组合
  scenes/            # 场景公共框架
lib/
  theme/             # token 分层、registry、css 变量映射、持久化
  content/           # 场景静态内容（中英文）
  i18n/              # locale 类型与存储逻辑
  utils/             # 工具函数
styles/
  tokens.css         # 基础 token 变量
reference/           # 设计参考与风格参考
```

## 主题系统
项目采用分层 token 架构：

1. 不变量层（Invariants）
- 场景模块集合与顺序
- 叙事主线与核心交互目标
- 数据结构

2. Primitive Tokens
- 原始色值
- 圆角、阴影、间距尺度
- 字体映射、图标尺寸
- 控件高度与动效参数

3. Semantic Tokens
- `background`、`surface`
- `text primary/secondary`
- `accent`、`border`、`focus ring`
- `success/warning/danger`

4. Component Tokens
- Button/Input/Card/Table/Tabs/Modal 的视觉与交互参数

5. Density / Layout Profile
- section 间距、内容宽度、网格间距
- 工具栏高度、面板内边距、表格密度

## 多语言说明
- 支持中文与英文完整切换
- 默认中文展示
- URL 参数：`lang=zh` / `lang=en`
- 本地持久化：`localStorage` 键 `stylish.locale`

## 本地运行
1. 安装依赖
```bash
npm install
```

2. 启动开发环境
```bash
npm run dev
```

3. 访问
- [http://localhost:3000](http://localhost:3000)

## 构建与启动
```bash
npm run build
npm run start
```

## Vercel 部署
1. 将仓库推送到 GitHub。
2. 在 Vercel 导入该仓库。
3. Framework 选择 Next.js（通常可自动识别）。
4. Build Command：`npm run build`
5. Output 使用 Next.js 默认输出。
6. 点击 Deploy 完成发布。

## Inspired-by 免责声明
本项目仅提炼 Apple、Google、Microsoft 相关设计语言的通用特征，不代表任何官方合作、授权或背书，不使用其 Logo、商标或品牌专有素材。

## Roadmap
- Side-by-side 对比模式
- 主题 token 检视页
- 组件演示页
- 主题导出
- 密度滑杆
- 降低动效开关
