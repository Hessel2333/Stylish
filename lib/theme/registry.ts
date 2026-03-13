import { componentTokensByTheme } from "@/lib/theme/components";
import { densityProfileByTheme } from "@/lib/theme/density";
import { primitiveTokensByTheme } from "@/lib/theme/primitives";
import { semanticTokensByTheme } from "@/lib/theme/semantics";
import type { ThemeDefinition, ThemeName } from "@/lib/theme/types";

export const themeDefinitions: Record<ThemeName, ThemeDefinition> = {
  "apple-like": {
    meta: {
      name: "apple-like",
      label: "Apple-like",
      inspiration: "Minimal, quiet, whitespace-first",
      description: "Low-noise layers with subtle borders and generous pacing."
    },
    primitives: primitiveTokensByTheme["apple-like"],
    semantics: semanticTokensByTheme["apple-like"],
    components: componentTokensByTheme["apple-like"],
    density: densityProfileByTheme["apple-like"]
  },
  "google-like": {
    meta: {
      name: "google-like",
      label: "Google-like",
      inspiration: "Friendly clarity with approachable controls",
      description: "Rounded interaction model with visible states and lively accents."
    },
    primitives: primitiveTokensByTheme["google-like"],
    semantics: semanticTokensByTheme["google-like"],
    components: componentTokensByTheme["google-like"],
    density: densityProfileByTheme["google-like"]
  },
  "microsoft-like": {
    meta: {
      name: "microsoft-like",
      label: "Microsoft-like",
      inspiration: "Structured productivity for modern workspaces",
      description: "Clear boundaries, stronger navigation, and higher information density."
    },
    primitives: primitiveTokensByTheme["microsoft-like"],
    semantics: semanticTokensByTheme["microsoft-like"],
    components: componentTokensByTheme["microsoft-like"],
    density: densityProfileByTheme["microsoft-like"]
  }
};

export const defaultTheme: ThemeName = "apple-like";

export const themeOrder: ThemeName[] = ["apple-like", "google-like", "microsoft-like"];

export const themeLabelMap: Record<ThemeName, string> = {
  "apple-like": "Apple-like",
  "google-like": "Google-like",
  "microsoft-like": "Microsoft-like"
};

export const isThemeName = (value: string | null | undefined): value is ThemeName =>
  Boolean(value && value in themeDefinitions);
