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
      theme === "microsoft-like" ? "#6f7884" : theme === "google-like" ? "#756f7e" : "rgba(18, 20, 23, 0.5)",
    accent: p.color.accent,
    accentSoft: p.color.accentSoft,
    borderSubtle: p.color.borderSubtle,
    borderDefault: p.color.borderDefault,
    borderStrong: p.color.borderStrong,
    focusRing: p.color.accent,
    success: p.color.success,
    warning: p.color.warning,
    danger: p.color.danger,
    overlay: theme === "apple-like" ? "rgba(10, 12, 18, 0.34)" : theme === "google-like" ? "rgba(39, 33, 54, 0.4)" : "rgba(15, 23, 42, 0.42)"
  };
};

export const semanticTokensByTheme: Record<ThemeName, SemanticTokens> = {
  "apple-like": fromPrimitive("apple-like"),
  "google-like": fromPrimitive("google-like"),
  "microsoft-like": fromPrimitive("microsoft-like")
};
