import type { SemanticTokens, ThemeName } from "@/lib/theme/types";
import { primitiveTokensByTheme } from "@/lib/theme/primitives";

const fromPrimitive = (theme: ThemeName): SemanticTokens => {
  const p = primitiveTokensByTheme[theme];
  return {
    background: p.color.bgBase,
    backgroundMuted: p.color.bgAmbient,
    surface: p.color.surfaceBase,
    surfaceMuted: p.color.surfaceElevated,
    surfaceElevated: p.color.surfaceElevated,
    textPrimary: p.color.textStrong,
    textSecondary: p.color.textMuted,
    textTertiary:
      theme === "fluent-2" ? "#747b8f" : theme === "material-3" ? "#756f7e" : "rgba(17, 19, 24, 0.44)",
    accent: p.color.accent,
    accentSoft: p.color.accentSoft,
    borderSubtle: p.color.borderSubtle,
    borderDefault: p.color.borderDefault,
    borderStrong: p.color.borderStrong,
    focusRing: p.color.accent,
    success: p.color.success,
    warning: p.color.warning,
    danger: p.color.danger,
    overlay: theme === "apple-hig" ? "rgba(7, 12, 23, 0.28)" : theme === "material-3" ? "rgba(39, 33, 54, 0.4)" : "rgba(34, 42, 63, 0.34)"
  };
};

export const semanticTokensByTheme: Record<ThemeName, SemanticTokens> = {
  "apple-hig": fromPrimitive("apple-hig"),
  "material-3": fromPrimitive("material-3"),
  "fluent-2": fromPrimitive("fluent-2")
};
