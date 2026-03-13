import type { DensityProfile, ThemeName } from "@/lib/theme/types";

export const densityProfileByTheme: Record<ThemeName, DensityProfile> = {
  "apple-hig": {
    density: "airy",
    contentMaxWidth: "1180px",
    sectionGap: "var(--space-xxl)",
    gridGap: "var(--space-xl)",
    toolbarHeight: "58px",
    panelPadding: "var(--space-xl)",
    tableDensity: "comfortable"
  },
  "material-3": {
    density: "balanced",
    contentMaxWidth: "1220px",
    sectionGap: "calc(var(--space-xxl) - 6px)",
    gridGap: "var(--space-lg)",
    toolbarHeight: "56px",
    panelPadding: "var(--space-lg)",
    tableDensity: "balanced"
  },
  "fluent-2": {
    density: "compact",
    contentMaxWidth: "1280px",
    sectionGap: "calc(var(--space-xxl) - 18px)",
    gridGap: "var(--space-md)",
    toolbarHeight: "48px",
    panelPadding: "var(--space-md)",
    tableDensity: "compact"
  }
};
