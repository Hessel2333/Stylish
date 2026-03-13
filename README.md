# Stylish：场景迁移演示

在同一产品场景中，对比三种设计系统语义下的界面表达差异：**Apple HIG / Material 3 / Fluent 2**。

仓库地址：[https://github.com/Hessel2333/Stylish](https://github.com/Hessel2333/Stylish)

## 项目动机
多数“主题切换”只改颜色。Stylish 关注同场景可比较下的深层差异：留白、圆角、边界强度、阴影、密度、控件气质与动效节奏。

## 场景与路由
- 首页（演示入口）：`/`
- Product Marketing：`/scenes/product`
- Admin Workspace：`/scenes/admin`
- Task App：`/scenes/task`
- Methodology：`/methodology`

## 三种主题
- Apple HIG：克制、安静、留白优先、弱边界
- Material 3：亲和、状态可见、圆润、反馈明确
- Fluent 2：结构化、效率导向、信息密度更高

## 当前技术路线（已对齐代码）
### 1. 单组件系统 + 多主题映射
- 只维护一套基础组件（Button/Input/Card/Table/Tabs/Badge/Modal...）
- 不创建 `AppleButton`/`MaterialButton`/`FluentButton` 平行组件

### 2. 分层主题架构
- Invariants：场景模块集合、顺序、叙事主线、核心交互目标
- Primitive Tokens：原始色值、圆角、间距、阴影、字号、控件高度、动效
- Semantic Tokens：background/surface/text/border/accent/status 等语义层
- Component Tokens：组件的结构参数与挂点
- Component Recipes：由主题定义组件最终视觉决策
- Density Profile：页面节奏与信息密度参数

### 3. Source of Truth 职责边界
- `lib/theme/*`：主题定义、tokens、recipes（视觉真相来源）
- `lib/theme/css-vars.ts`：TS -> CSS 变量映射
- `app/globals.css`：结构样式 + 消费变量，不做跨主题硬编码结论
- `styles/tokens.css`：最小基础变量和底层兜底

### 4. Badge 架构（本轮关键更新）
- `Badge` 已拆为三条 recipe 轨道（`appearance`）：
  - `meta`：说明性/信息性胶囊
  - `status`：状态胶囊（可带指示点）
  - `counter`：数字计数胶囊
- 每条轨道均有独立 `tone` 配方（neutral/accent/success/warning/danger）
- 三主题在 Badge 轨道上相互隔离，避免“修一处影响全站”
- 为兼容本地旧 chunk，`globals.css` 增加了向后兼容 fallback 选择器

## 多语言与主题持久化
- 语言：`zh` / `en`，默认中文
- 语言参数：`?lang=zh` / `?lang=en`
- 语言存储：`localStorage['stylish.locale']`
- 主题参数：`?theme=apple-hig|material-3|fluent-2`
- 主题存储：`localStorage['stylish.theme']`
- 兼容旧参数：`apple-like/google-like/microsoft-like` 自动映射到新主题名

## 目录结构
```text
app/
  page.tsx
  methodology/page.tsx
  scenes/product/page.tsx
  scenes/admin/page.tsx
  scenes/task/page.tsx
  globals.css
components/
  layout/
  i18n/
  theme/
  ui/
  patterns/
  scenes/
lib/
  content/
  i18n/
  theme/
    invariants.ts
    primitives.ts
    semantics.ts
    components.ts
    recipes.ts
    density.ts
    registry.ts
    css-vars.ts
styles/
  tokens.css
reference/
  reference.md
```

## 本地运行
```bash
npm install
npm run dev
```
访问：[http://localhost:3000](http://localhost:3000)

## 生产构建
```bash
npm run build
npm run start
```

## Vercel 部署
1. 推送到 GitHub：[https://github.com/Hessel2333/Stylish](https://github.com/Hessel2333/Stylish)
2. 在 Vercel 导入仓库
3. Framework 选择 Next.js（自动识别即可）
4. Build Command：`npm run build`
5. Deploy

## Inspired-by 免责声明
本项目仅提炼 Apple、Google、Microsoft 相关设计语言的通用特征，不代表任何官方合作、授权或背书，不使用其 Logo、商标或品牌专有素材。

## Roadmap
- Side-by-side 比较模式
- Token 可视化/检视页
- 组件展示页
- 主题导出
- 动效与无障碍偏好开关
