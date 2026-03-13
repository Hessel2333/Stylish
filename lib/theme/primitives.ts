import type { PrimitiveTokens, ThemeName } from "@/lib/theme/types";

export const primitiveTokensByTheme: Record<ThemeName, PrimitiveTokens> = {
  "apple-hig": {
    color: {
      bgBase: "#f2f3f7",
      bgAmbient:
        "radial-gradient(900px 500px at 12% -6%, rgba(142, 186, 255, 0.15), transparent 62%), radial-gradient(760px 460px at 88% 0%, rgba(255, 255, 255, 0.68), transparent 68%), linear-gradient(180deg, #f6f8fc 0%, #eff3f8 100%)",
      surfaceBase: "rgba(255, 255, 255, 0.72)",
      surfaceElevated: "rgba(255, 255, 255, 0.9)",
      textStrong: "#111318",
      textMuted: "rgba(17, 19, 24, 0.62)",
      accent: "#0071e3",
      accentSoft: "rgba(0, 113, 227, 0.12)",
      success: "#0a8f5d",
      warning: "#ad6a00",
      danger: "#c83b49",
      borderSubtle: "rgba(255, 255, 255, 0.72)",
      borderDefault: "rgba(17, 25, 40, 0.09)",
      borderStrong: "rgba(17, 25, 40, 0.16)"
    },
    radius: {
      xs: "8px",
      sm: "12px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      full: "999px"
    },
    shadow: {
      xs: "0 1px 3px rgba(10, 18, 35, 0.06)",
      sm: "0 8px 20px rgba(10, 18, 35, 0.08)",
      md: "0 18px 36px rgba(10, 18, 35, 0.1)",
      lg: "0 30px 64px rgba(10, 18, 35, 0.13)"
    },
    spacing: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
      section: "88px"
    },
    typography: {
      fontDisplay: "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif",
      fontBody: "'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif",
      fontMono: "'IBM Plex Mono', 'SFMono-Regular', ui-monospace, monospace",
      scaleHero: "clamp(2.55rem, 4.7vw, 4.25rem)",
      scaleH1: "clamp(2rem, 3.55vw, 3.05rem)",
      scaleH2: "clamp(1.42rem, 2.45vw, 1.95rem)",
      scaleBody: "1rem",
      scaleSmall: "0.88rem",
      trackingDisplay: "-0.022em"
    },
    icon: {
      sm: "14px",
      md: "18px",
      lg: "22px"
    },
    control: {
      sm: "32px",
      md: "40px",
      lg: "48px"
    },
    motion: {
      fast: "160ms",
      base: "240ms",
      slow: "360ms",
      easeStandard: "cubic-bezier(0.25, 1, 0.5, 1)",
      easeEmphasis: "cubic-bezier(0.2, 0.9, 0.25, 1)"
    }
  },
  "material-3": {
    color: {
      bgBase: "#f8f7fb",
      bgAmbient: "radial-gradient(900px 560px at 7% 0%, rgba(37, 99, 235, 0.14), transparent 62%), radial-gradient(1100px 700px at 100% 12%, rgba(147, 197, 253, 0.22), transparent 64%)",
      surfaceBase: "#ffffff",
      surfaceElevated: "#f4eff8",
      textStrong: "#1f1b24",
      textMuted: "#615f6a",
      accent: "#6750a4",
      accentSoft: "#eaddff",
      success: "#117550",
      warning: "#9f6000",
      danger: "#b3261e",
      borderSubtle: "#e6dfeb",
      borderDefault: "#d0c8d6",
      borderStrong: "#a99db3"
    },
    radius: {
      xs: "12px",
      sm: "16px",
      md: "22px",
      lg: "30px",
      xl: "38px",
      full: "999px"
    },
    shadow: {
      xs: "0 1px 2px rgba(65, 40, 92, 0.08)",
      sm: "0 6px 14px rgba(65, 40, 92, 0.1)",
      md: "0 14px 28px rgba(65, 40, 92, 0.14)",
      lg: "0 24px 48px rgba(65, 40, 92, 0.16)"
    },
    spacing: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "28px",
      xxl: "40px",
      section: "72px"
    },
    typography: {
      fontDisplay: "'Outfit', 'Nunito Sans', 'Segoe UI', sans-serif",
      fontBody: "'Nunito Sans', 'Segoe UI', sans-serif",
      fontMono: "'IBM Plex Mono', ui-monospace, monospace",
      scaleHero: "clamp(2.5rem, 4.6vw, 4.1rem)",
      scaleH1: "clamp(1.95rem, 3.4vw, 3rem)",
      scaleH2: "clamp(1.4rem, 2.3vw, 1.9rem)",
      scaleBody: "1rem",
      scaleSmall: "0.9rem",
      trackingDisplay: "-0.02em"
    },
    icon: {
      sm: "16px",
      md: "20px",
      lg: "24px"
    },
    control: {
      sm: "36px",
      md: "44px",
      lg: "52px"
    },
    motion: {
      fast: "160ms",
      base: "240ms",
      slow: "380ms",
      easeStandard: "cubic-bezier(0.2, 0, 0, 1)",
      easeEmphasis: "cubic-bezier(0.2, 0, 0, 1)"
    }
  },
  "fluent-2": {
    color: {
      bgBase: "#edf1f8",
      bgAmbient:
        "radial-gradient(900px 520px at 96% -8%, rgba(196, 212, 236, 0.18), transparent 70%), linear-gradient(180deg, #edf1f8 0%, #eaf0f8 100%)",
      surfaceBase: "rgba(255, 255, 255, 0.82)",
      surfaceElevated: "rgba(255, 255, 255, 0.94)",
      textStrong: "#242731",
      textMuted: "#62697a",
      accent: "#6e73f6",
      accentSoft: "rgba(110, 115, 246, 0.16)",
      success: "#107c10",
      warning: "#a56a08",
      danger: "#c2394b",
      borderSubtle: "#e5e9f2",
      borderDefault: "#d3d9e7",
      borderStrong: "#b3bdd1"
    },
    radius: {
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "28px",
      full: "999px"
    },
    shadow: {
      xs: "0 1px 2px rgba(52, 63, 93, 0.08)",
      sm: "0 7px 18px rgba(59, 72, 108, 0.12)",
      md: "0 16px 36px rgba(59, 72, 108, 0.16)",
      lg: "0 28px 64px rgba(59, 72, 108, 0.2)"
    },
    spacing: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "22px",
      xl: "30px",
      xxl: "42px",
      section: "66px"
    },
    typography: {
      fontDisplay: "'Segoe UI Variable Display', 'Segoe UI', 'Avenir Next', sans-serif",
      fontBody: "'Segoe UI Variable Text', 'Segoe UI', 'Avenir Next', sans-serif",
      fontMono: "'IBM Plex Mono', ui-monospace, monospace",
      scaleHero: "clamp(2.4rem, 4.4vw, 3.95rem)",
      scaleH1: "clamp(1.9rem, 3.1vw, 2.75rem)",
      scaleH2: "clamp(1.34rem, 2.12vw, 1.78rem)",
      scaleBody: "0.99rem",
      scaleSmall: "0.87rem",
      trackingDisplay: "-0.01em"
    },
    icon: {
      sm: "14px",
      md: "18px",
      lg: "22px"
    },
    control: {
      sm: "34px",
      md: "42px",
      lg: "50px"
    },
    motion: {
      fast: "130ms",
      base: "210ms",
      slow: "340ms",
      easeStandard: "cubic-bezier(0.1, 0.9, 0.2, 1)",
      easeEmphasis: "cubic-bezier(0.2, 0.8, 0.2, 1)"
    }
  }
};
