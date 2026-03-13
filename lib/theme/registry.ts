import { componentTokensByTheme } from "@/lib/theme/components";
import { densityProfileByTheme } from "@/lib/theme/density";
import { primitiveTokensByTheme } from "@/lib/theme/primitives";
import { componentRecipesByTheme } from "@/lib/theme/recipes";
import { semanticTokensByTheme } from "@/lib/theme/semantics";
import type { ThemeDefinition, ThemeName } from "@/lib/theme/types";

export const themeDefinitions: Record<ThemeName, ThemeDefinition> = {
  "apple-hig": {
    meta: {
      name: "apple-hig",
      label: "Apple HIG",
      inspiration: "Minimal, quiet, whitespace-first",
      description: "Low-noise layers with subtle borders and generous pacing."
    },
    primitives: primitiveTokensByTheme["apple-hig"],
    semantics: semanticTokensByTheme["apple-hig"],
    components: componentTokensByTheme["apple-hig"],
    recipes: componentRecipesByTheme["apple-hig"],
    density: densityProfileByTheme["apple-hig"]
  },
  "material-3": {
    meta: {
      name: "material-3",
      label: "Material 3",
      inspiration: "Friendly clarity with approachable controls",
      description: "Rounded interaction model with visible states and lively accents."
    },
    primitives: primitiveTokensByTheme["material-3"],
    semantics: semanticTokensByTheme["material-3"],
    components: componentTokensByTheme["material-3"],
    recipes: componentRecipesByTheme["material-3"],
    density: densityProfileByTheme["material-3"]
  },
  "fluent-2": {
    meta: {
      name: "fluent-2",
      label: "Fluent 2",
      inspiration: "Structured productivity for modern workspaces",
      description: "Clear boundaries, stronger navigation, and higher information density."
    },
    primitives: primitiveTokensByTheme["fluent-2"],
    semantics: semanticTokensByTheme["fluent-2"],
    components: componentTokensByTheme["fluent-2"],
    recipes: componentRecipesByTheme["fluent-2"],
    density: densityProfileByTheme["fluent-2"]
  }
};

export const defaultTheme: ThemeName = "apple-hig";

export const themeOrder: ThemeName[] = ["apple-hig", "material-3", "fluent-2"];

export const themeLabelMap: Record<ThemeName, string> = {
  "apple-hig": "Apple HIG",
  "material-3": "Material 3",
  "fluent-2": "Fluent 2"
};

export const isThemeName = (value: string | null | undefined): value is ThemeName =>
  Boolean(value && value in themeDefinitions);
