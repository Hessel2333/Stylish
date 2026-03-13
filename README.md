# Stylish: Scenario Shift

A static multi-theme showcase that demonstrates how one product scenario can be expressed through three inspired design languages.

## Project Motivation
Most theme demos only swap colors. Stylish focuses on deeper design-language shifts while preserving the same scene structure, content storyline, and interaction goals. This makes comparison meaningful and repeatable.

## Scenes
- Product Marketing
  - Route: `/scenes/product`
  - Focus: hero hierarchy, feature communication, pricing tone, trust narrative
- Admin Workspace
  - Route: `/scenes/admin`
  - Focus: navigation clarity, productivity density, table and approval operations
- Task App
  - Route: `/scenes/task`
  - Focus: daily task flow, detail pane clarity, feedback states, quick-create modal

## Themes
- Apple-like
  - Quiet, restrained, whitespace-first, lighter edges and softer hierarchy
- Google-like
  - Friendly and clear, rounded controls, visible interaction states
- Microsoft-like
  - Structured, productivity-first, clearer boundaries with compact density

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)
- Static mock content only (no backend, no database)

## Project Structure
```text
app/
  page.tsx
  methodology/page.tsx
  scenes/product/page.tsx
  scenes/admin/page.tsx
  scenes/task/page.tsx
components/
  layout/            # Header, page shell
  theme/             # ThemeProvider, switcher, themed link
  ui/                # Shared primitive components
  patterns/          # Scene-level UI composition
  scenes/            # Shared scene frame
lib/
  theme/             # Token layers + registry + css var mapping + persistence
  content/           # Shared static mock content
  utils/             # Utilities
styles/
  tokens.css         # Base token variables
reference/           # Reference docs and CSS inspiration files
```

## Theme System
The implementation follows a layered token architecture:

1. Invariants Layer
- Scene module set and order
- Shared product narrative
- Shared data schema and interaction intent

2. Primitive Tokens
- Raw color values
- Radius scale
- Shadow scale
- Spacing scale
- Typography mapping
- Icon size scale
- Motion duration/easing
- Control heights

3. Semantic Tokens
- `background`, `surface`, `text primary/secondary`
- `accent`, `border`, `focus ring`
- `success/warning/danger`, `overlay`

4. Component Tokens
- Button/Input/Card/Table/Tabs/Modal characteristics
- Border strength, radius, padding, shadow, row height

5. Density / Layout Profile
- Section gap, max width, grid gap
- Toolbar height, panel padding, table density

## Local Development
1. Install dependencies
```bash
npm install
```

2. Run dev server
```bash
npm run dev
```

3. Open
- [http://localhost:3000](http://localhost:3000)

## Build and Run
```bash
npm run build
npm run start
```

## Vercel Deployment
1. Push repository to GitHub.
2. Import the project in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build`
5. Output: default Next.js output (no backend required).
6. Deploy.

The site uses static mock content and is deployment-friendly for Vercel previews and production.

## Inspired-by Disclaimer
This project is inspired by broad design language traits associated with Apple, Google, and Microsoft ecosystems. It is not affiliated with or endorsed by those companies, and it does not use official logos, brand assets, or trademarked interface copies.

## Roadmap
- Side-by-side compare mode
- Theme token inspector page
- Component explorer
- Theme export options
- Optional density slider
- Optional reduced-motion toggle
