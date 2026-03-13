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

const buildRecipeVarMap = (themeName: ThemeName): CssVarMap => {
  const r = themeDefinitions[themeName].recipes;

  return {
    "--ui-surface-panel-bg": r.surface.panel.bg,
    "--ui-surface-panel-border": r.surface.panel.border,
    "--ui-surface-panel-shadow": r.surface.panel.shadow,
    "--ui-surface-panel-backdrop-blur": r.surface.panel.backdropBlur,
    "--ui-surface-panel-backdrop-saturate": r.surface.panel.backdropSaturate,

    "--ui-subtle-panel-bg": r.surface.subtle.bg,
    "--ui-subtle-panel-border": r.surface.subtle.border,
    "--ui-subtle-panel-shadow": r.surface.subtle.shadow,
    "--ui-subtle-panel-backdrop-blur": r.surface.subtle.backdropBlur,
    "--ui-subtle-panel-backdrop-saturate": r.surface.subtle.backdropSaturate,

    "--ui-btn-radius": r.button.radius,
    "--ui-btn-letter-spacing": r.button.letterSpacing,
    "--ui-btn-hover-transform": r.button.hoverTransform,
    "--ui-btn-active-transform": r.button.activeTransform,

    "--ui-btn-primary-bg": r.button.primary.bg,
    "--ui-btn-primary-color": r.button.primary.color,
    "--ui-btn-primary-border": r.button.primary.border,
    "--ui-btn-primary-shadow": r.button.primary.shadow,
    "--ui-btn-primary-hover-bg": r.button.primary.hoverBg,
    "--ui-btn-primary-hover-color": r.button.primary.hoverColor,
    "--ui-btn-primary-hover-border": r.button.primary.hoverBorder,
    "--ui-btn-primary-hover-shadow": r.button.primary.hoverShadow,
    "--ui-btn-primary-active-bg": r.button.primary.activeBg,
    "--ui-btn-primary-active-color": r.button.primary.activeColor,
    "--ui-btn-primary-active-border": r.button.primary.activeBorder,
    "--ui-btn-primary-active-shadow": r.button.primary.activeShadow,

    "--ui-btn-secondary-bg": r.button.secondary.bg,
    "--ui-btn-secondary-color": r.button.secondary.color,
    "--ui-btn-secondary-border": r.button.secondary.border,
    "--ui-btn-secondary-shadow": r.button.secondary.shadow,
    "--ui-btn-secondary-hover-bg": r.button.secondary.hoverBg,
    "--ui-btn-secondary-hover-color": r.button.secondary.hoverColor,
    "--ui-btn-secondary-hover-border": r.button.secondary.hoverBorder,
    "--ui-btn-secondary-hover-shadow": r.button.secondary.hoverShadow,
    "--ui-btn-secondary-active-bg": r.button.secondary.activeBg,
    "--ui-btn-secondary-active-color": r.button.secondary.activeColor,
    "--ui-btn-secondary-active-border": r.button.secondary.activeBorder,
    "--ui-btn-secondary-active-shadow": r.button.secondary.activeShadow,

    "--ui-btn-outlined-bg": r.button.outlined.bg,
    "--ui-btn-outlined-color": r.button.outlined.color,
    "--ui-btn-outlined-border": r.button.outlined.border,
    "--ui-btn-outlined-shadow": r.button.outlined.shadow,
    "--ui-btn-outlined-hover-bg": r.button.outlined.hoverBg,
    "--ui-btn-outlined-hover-color": r.button.outlined.hoverColor,
    "--ui-btn-outlined-hover-border": r.button.outlined.hoverBorder,
    "--ui-btn-outlined-hover-shadow": r.button.outlined.hoverShadow,
    "--ui-btn-outlined-active-bg": r.button.outlined.activeBg,
    "--ui-btn-outlined-active-color": r.button.outlined.activeColor,
    "--ui-btn-outlined-active-border": r.button.outlined.activeBorder,
    "--ui-btn-outlined-active-shadow": r.button.outlined.activeShadow,

    "--ui-btn-ghost-bg": r.button.ghost.bg,
    "--ui-btn-ghost-color": r.button.ghost.color,
    "--ui-btn-ghost-border": r.button.ghost.border,
    "--ui-btn-ghost-shadow": r.button.ghost.shadow,
    "--ui-btn-ghost-hover-bg": r.button.ghost.hoverBg,
    "--ui-btn-ghost-hover-color": r.button.ghost.hoverColor,
    "--ui-btn-ghost-hover-border": r.button.ghost.hoverBorder,
    "--ui-btn-ghost-hover-shadow": r.button.ghost.hoverShadow,
    "--ui-btn-ghost-active-bg": r.button.ghost.activeBg,
    "--ui-btn-ghost-active-color": r.button.ghost.activeColor,
    "--ui-btn-ghost-active-border": r.button.ghost.activeBorder,
    "--ui-btn-ghost-active-shadow": r.button.ghost.activeShadow,

    "--ui-btn-danger-bg": r.button.danger.bg,
    "--ui-btn-danger-color": r.button.danger.color,
    "--ui-btn-danger-border": r.button.danger.border,
    "--ui-btn-danger-shadow": r.button.danger.shadow,
    "--ui-btn-danger-hover-bg": r.button.danger.hoverBg,
    "--ui-btn-danger-hover-color": r.button.danger.hoverColor,
    "--ui-btn-danger-hover-border": r.button.danger.hoverBorder,
    "--ui-btn-danger-hover-shadow": r.button.danger.hoverShadow,
    "--ui-btn-danger-active-bg": r.button.danger.activeBg,
    "--ui-btn-danger-active-color": r.button.danger.activeColor,
    "--ui-btn-danger-active-border": r.button.danger.activeBorder,
    "--ui-btn-danger-active-shadow": r.button.danger.activeShadow,

    "--ui-input-radius": r.input.radius,
    "--ui-input-default-bg": r.input.default.bg,
    "--ui-input-default-border": r.input.default.border,
    "--ui-input-default-shadow": r.input.default.shadow,
    "--ui-input-default-color": r.input.default.color,
    "--ui-input-default-placeholder": r.input.default.placeholder,
    "--ui-input-default-hover-bg": r.input.default.hoverBg,
    "--ui-input-default-hover-border": r.input.default.hoverBorder,
    "--ui-input-default-focus-bg": r.input.default.focusBg,
    "--ui-input-default-focus-border": r.input.default.focusBorder,
    "--ui-input-default-focus-shadow": r.input.default.focusShadow,

    "--ui-select-radius": r.select.radius,
    "--ui-select-indicator": r.select.indicator,
    "--ui-select-default-bg": r.select.default.bg,
    "--ui-select-default-border": r.select.default.border,
    "--ui-select-default-shadow": r.select.default.shadow,
    "--ui-select-default-color": r.select.default.color,
    "--ui-select-default-hover-bg": r.select.default.hoverBg,
    "--ui-select-default-hover-border": r.select.default.hoverBorder,
    "--ui-select-default-focus-bg": r.select.default.focusBg,
    "--ui-select-default-focus-border": r.select.default.focusBorder,
    "--ui-select-default-focus-shadow": r.select.default.focusShadow,

    "--ui-card-bg": r.card.default.bg,
    "--ui-card-border": r.card.default.border,
    "--ui-card-shadow": r.card.default.shadow,
    "--ui-card-radius": r.card.default.radius,
    "--ui-card-padding": r.card.default.padding,
    "--ui-card-backdrop-blur": r.card.default.backdropBlur,
    "--ui-card-backdrop-saturate": r.card.default.backdropSaturate,

    "--ui-tabs-shell-bg": r.tabs.shell.bg,
    "--ui-tabs-shell-border": r.tabs.shell.border,
    "--ui-tabs-shell-radius": r.tabs.shell.radius,
    "--ui-tabs-shell-padding": r.tabs.shell.padding,

    "--ui-tab-idle-bg": r.tabs.idle.bg,
    "--ui-tab-idle-color": r.tabs.idle.color,
    "--ui-tab-idle-border": r.tabs.idle.border,
    "--ui-tab-idle-shadow": r.tabs.idle.shadow,
    "--ui-tab-idle-hover-bg": r.tabs.idle.hoverBg,
    "--ui-tab-idle-hover-color": r.tabs.idle.hoverColor,
    "--ui-tab-idle-hover-border": r.tabs.idle.hoverBorder,

    "--ui-tab-active-bg": r.tabs.active.bg,
    "--ui-tab-active-color": r.tabs.active.color,
    "--ui-tab-active-border": r.tabs.active.border,
    "--ui-tab-active-shadow": r.tabs.active.shadow,
    "--ui-tab-active-hover-bg": r.tabs.active.hoverBg,
    "--ui-tab-active-hover-color": r.tabs.active.hoverColor,
    "--ui-tab-active-hover-border": r.tabs.active.hoverBorder,

    "--ui-badge-height": r.badge.height,
    "--ui-badge-radius": r.badge.radius,
    "--ui-badge-font-weight": r.badge.fontWeight,
    "--ui-badge-neutral-bg": r.badge.neutral.bg,
    "--ui-badge-neutral-color": r.badge.neutral.color,
    "--ui-badge-neutral-border": r.badge.neutral.border,
    "--ui-badge-accent-bg": r.badge.accent.bg,
    "--ui-badge-accent-color": r.badge.accent.color,
    "--ui-badge-accent-border": r.badge.accent.border,
    "--ui-badge-success-bg": r.badge.success.bg,
    "--ui-badge-success-color": r.badge.success.color,
    "--ui-badge-success-border": r.badge.success.border,
    "--ui-badge-warning-bg": r.badge.warning.bg,
    "--ui-badge-warning-color": r.badge.warning.color,
    "--ui-badge-warning-border": r.badge.warning.border,
    "--ui-badge-danger-bg": r.badge.danger.bg,
    "--ui-badge-danger-color": r.badge.danger.color,
    "--ui-badge-danger-border": r.badge.danger.border,

    "--ui-table-shell-bg": r.table.shell.bg,
    "--ui-table-shell-border": r.table.shell.border,
    "--ui-table-shell-radius": r.table.shell.radius,
    "--ui-table-shell-backdrop-blur": r.table.shell.backdropBlur,
    "--ui-table-shell-backdrop-saturate": r.table.shell.backdropSaturate,
    "--ui-table-head-bg": r.table.header.bg,
    "--ui-table-head-color": r.table.header.color,
    "--ui-table-head-border": r.table.header.border,
    "--ui-table-header-font-weight": r.table.header.fontWeight,
    "--ui-table-row-border": r.table.row.border,
    "--ui-table-row-odd-bg": r.table.row.oddBg,
    "--ui-table-row-hover-bg": r.table.row.hoverBg,
    "--ui-table-cell-color": r.table.row.color,
    "--ui-table-cell-secondary-color": r.table.row.secondaryColor,
    "--ui-table-row-height": r.table.row.height,

    "--ui-slider-track-bg": r.slider.trackBg,
    "--ui-slider-track-fill": r.slider.trackFill,
    "--ui-slider-thumb-bg": r.slider.thumbBg,
    "--ui-slider-thumb-border": r.slider.thumbBorder,
    "--ui-slider-thumb-shadow": r.slider.thumbShadow,
    "--ui-slider-thumb-mask": r.slider.thumbMask,

    "--ui-chart-panel-bg": r.chart.panelBg,
    "--ui-chart-panel-border": r.chart.panelBorder,
    "--ui-chart-panel-overlay": r.chart.panelOverlay,
    "--ui-chart-grid-line": r.chart.gridLine,
    "--ui-chart-bar-radius": r.chart.barRadius,
    "--ui-chart-bar-fill": r.chart.barFill,
    "--ui-chart-bar-fill-alt": r.chart.barFillAlt,
    "--ui-chart-bar-border": r.chart.barBorder,
    "--ui-chart-bar-shadow": r.chart.barShadow,

    "--ui-modal-radius": r.modal.radius,
    "--ui-modal-max-width": r.modal.maxWidth,
    "--ui-modal-backdrop-bg": r.modal.backdropBg,
    "--ui-modal-bg": r.modal.bg,
    "--ui-modal-border": r.modal.border,
    "--ui-modal-shadow": r.modal.shadow,
    "--ui-modal-close-bg": r.modal.closeBg,
    "--ui-modal-close-border": r.modal.closeBorder,
    "--ui-modal-close-color": r.modal.closeColor,
    "--ui-modal-close-hover-bg": r.modal.closeHoverBg,
    "--ui-modal-close-hover-border": r.modal.closeHoverBorder
  };
};

export const buildThemeCssVarMap = (themeName: ThemeName): CssVarMap => ({
  ...buildCssVarMap(themeName),
  ...buildRecipeVarMap(themeName)
});

export const applyThemeCssVars = (themeName: ThemeName) => {
  if (typeof document === "undefined") {
    return;
  }

  const vars = buildThemeCssVarMap(themeName);
  const root = document.documentElement;

  root.setAttribute("data-theme", themeName);

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
