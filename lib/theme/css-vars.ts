import { themeDefinitions } from "@/lib/theme/registry";
import type { ThemeName } from "@/lib/theme/types";

export type CssVarMap = Record<string, string>;

export const buildCssVarMap = (themeName: ThemeName): CssVarMap => {
  const t = themeDefinitions[themeName];

  return {
    "--bg": t.semantics.background,
    "--bg-ambient": t.semantics.backgroundMuted,
    "--surface": t.semantics.surface,
    "--surface-muted": t.semantics.surfaceMuted,
    "--surface-elevated": t.semantics.surfaceElevated,
    "--text-primary": t.semantics.textPrimary,
    "--text-secondary": t.semantics.textSecondary,
    "--text-tertiary": t.semantics.textTertiary,
    "--accent": t.semantics.accent,
    "--accent-soft": t.semantics.accentSoft,
    "--border-subtle": t.semantics.borderSubtle,
    "--border-default": t.semantics.borderDefault,
    "--border-strong": t.semantics.borderStrong,
    "--focus-ring": t.semantics.focusRing,
    "--success": t.semantics.success,
    "--warning": t.semantics.warning,
    "--danger": t.semantics.danger,
    "--overlay": t.semantics.overlay,

    "--radius-xs": t.primitives.radius.xs,
    "--radius-sm": t.primitives.radius.sm,
    "--radius-md": t.primitives.radius.md,
    "--radius-lg": t.primitives.radius.lg,
    "--radius-xl": t.primitives.radius.xl,
    "--radius-full": t.primitives.radius.full,

    "--shadow-xs": t.primitives.shadow.xs,
    "--shadow-sm": t.primitives.shadow.sm,
    "--shadow-md": t.primitives.shadow.md,
    "--shadow-lg": t.primitives.shadow.lg,

    "--space-xxs": t.primitives.spacing.xxs,
    "--space-xs": t.primitives.spacing.xs,
    "--space-sm": t.primitives.spacing.sm,
    "--space-md": t.primitives.spacing.md,
    "--space-lg": t.primitives.spacing.lg,
    "--space-xl": t.primitives.spacing.xl,
    "--space-xxl": t.primitives.spacing.xxl,
    "--section-gap": t.primitives.spacing.section,

    "--font-display": t.primitives.typography.fontDisplay,
    "--font-body": t.primitives.typography.fontBody,
    "--font-mono": t.primitives.typography.fontMono,
    "--scale-hero": t.primitives.typography.scaleHero,
    "--scale-h1": t.primitives.typography.scaleH1,
    "--scale-h2": t.primitives.typography.scaleH2,
    "--scale-body": t.primitives.typography.scaleBody,
    "--scale-small": t.primitives.typography.scaleSmall,
    "--tracking-display": t.primitives.typography.trackingDisplay,

    "--icon-sm": t.primitives.icon.sm,
    "--icon-md": t.primitives.icon.md,
    "--icon-lg": t.primitives.icon.lg,

    "--control-sm": t.primitives.control.sm,
    "--control-md": t.primitives.control.md,
    "--control-lg": t.primitives.control.lg,

    "--motion-fast": t.primitives.motion.fast,
    "--motion-base": t.primitives.motion.base,
    "--motion-slow": t.primitives.motion.slow,
    "--ease-standard": t.primitives.motion.easeStandard,
    "--ease-emphasis": t.primitives.motion.easeEmphasis,

    "--button-radius": t.components.button.radius,
    "--button-letter-spacing": t.components.button.letterSpacing,
    "--button-primary-shadow": t.components.button.primaryShadow,
    "--button-ghost-border": t.components.button.ghostBorder,

    "--input-radius": t.components.input.radius,
    "--input-border-width": t.components.input.borderWidth,
    "--input-bg": t.components.input.background,

    "--card-radius": t.components.card.radius,
    "--card-border-width": t.components.card.borderWidth,
    "--card-padding": t.components.card.padding,
    "--card-shadow": t.components.card.shadow,

    "--table-row-height": t.components.table.rowHeight,
    "--table-header-weight": t.components.table.headerWeight,
    "--table-stripe-opacity": t.components.table.stripeOpacity,

    "--tabs-radius": t.components.tabs.radius,
    "--tabs-active-shadow": t.components.tabs.activeShadow,

    "--modal-radius": t.components.modal.radius,
    "--modal-max-width": t.components.modal.maxWidth,

    "--density": t.density.density,
    "--content-max-width": t.density.contentMaxWidth,
    "--grid-gap": t.density.gridGap,
    "--toolbar-height": t.density.toolbarHeight,
    "--panel-padding": t.density.panelPadding,
    "--table-density": t.density.tableDensity
  };
};

export const applyThemeCssVars = (themeName: ThemeName) => {
  if (typeof document === "undefined") {
    return;
  }

  const vars = buildCssVarMap(themeName);
  const root = document.documentElement;

  root.setAttribute("data-theme", themeName);

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
