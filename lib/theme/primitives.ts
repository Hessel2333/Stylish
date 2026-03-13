import type { PrimitiveTokens, ThemeName } from "@/lib/theme/types";

export const primitiveTokensByTheme: Record<ThemeName, PrimitiveTokens> = {
  "apple-hig": {
    color: {
      bgBase: "#f5f6f8",
      bgAmbient: "radial-gradient(1200px 600px at 10% 0%, rgba(96,165,250,0.14), transparent 55%), radial-gradient(800px 420px at 90% 10%, rgba(255,255,255,0.75), transparent 60%)",
      surfaceBase: "rgba(255, 255, 255, 0.84)",
      surfaceElevated: "rgba(255, 255, 255, 0.94)",
      textStrong: "#121417",
      textMuted: "rgba(18, 20, 23, 0.66)",
      accent: "#2077ff",
      accentSoft: "rgba(32, 119, 255, 0.14)",
      success: "#0f9f72",
      warning: "#c27d1a",
      danger: "#cf3f52",
      borderSubtle: "rgba(255, 255, 255, 0.84)",
      borderDefault: "rgba(15, 23, 42, 0.08)",
      borderStrong: "rgba(15, 23, 42, 0.14)"
    },
    radius: {
      xs: "10px",
      sm: "14px",
      md: "20px",
      lg: "28px",
      xl: "36px",
      full: "999px"
    },
    shadow: {
      xs: "0 2px 8px rgba(15, 23, 42, 0.04)",
      sm: "0 10px 24px rgba(15, 23, 42, 0.06)",
      md: "0 18px 38px rgba(15, 23, 42, 0.08)",
      lg: "0 34px 74px rgba(15, 23, 42, 0.1)"
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
      fontDisplay: "'Sora', 'Avenir Next', 'Segoe UI', sans-serif",
      fontBody: "'Manrope', 'Avenir Next', 'Segoe UI', sans-serif",
      fontMono: "'IBM Plex Mono', 'SFMono-Regular', ui-monospace, monospace",
      scaleHero: "clamp(2.6rem, 4.8vw, 4.4rem)",
      scaleH1: "clamp(2rem, 3.6vw, 3.2rem)",
      scaleH2: "clamp(1.45rem, 2.6vw, 2rem)",
      scaleBody: "1.02rem",
      scaleSmall: "0.9rem",
      trackingDisplay: "-0.03em"
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
      fast: "180ms",
      base: "280ms",
      slow: "440ms",
      easeStandard: "cubic-bezier(0.22, 1, 0.36, 1)",
      easeEmphasis: "cubic-bezier(0.16, 1, 0.3, 1)"
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
      bgBase: "#f4f6f8",
      bgAmbient: "linear-gradient(165deg, rgba(255,255,255,0.9) 0%, rgba(240,243,247,0.9) 60%, rgba(228,234,242,0.9) 100%)",
      surfaceBase: "#ffffff",
      surfaceElevated: "#f9fbfd",
      textStrong: "#1b1c1f",
      textMuted: "#5d626a",
      accent: "#115ea3",
      accentSoft: "rgba(17, 94, 163, 0.12)",
      success: "#107c10",
      warning: "#986f0b",
      danger: "#c50f1f",
      borderSubtle: "#eceef1",
      borderDefault: "#d2d7dc",
      borderStrong: "#a3acb7"
    },
    radius: {
      xs: "6px",
      sm: "10px",
      md: "14px",
      lg: "18px",
      xl: "22px",
      full: "999px"
    },
    shadow: {
      xs: "0 1px 3px rgba(16, 24, 40, 0.08)",
      sm: "0 4px 10px rgba(16, 24, 40, 0.1)",
      md: "0 10px 24px rgba(16, 24, 40, 0.14)",
      lg: "0 18px 40px rgba(16, 24, 40, 0.16)"
    },
    spacing: {
      xxs: "3px",
      xs: "6px",
      sm: "10px",
      md: "14px",
      lg: "18px",
      xl: "24px",
      xxl: "32px",
      section: "56px"
    },
    typography: {
      fontDisplay: "'Archivo', 'Public Sans', 'Segoe UI', sans-serif",
      fontBody: "'Public Sans', 'Segoe UI', sans-serif",
      fontMono: "'IBM Plex Mono', ui-monospace, monospace",
      scaleHero: "clamp(2.3rem, 4.2vw, 3.7rem)",
      scaleH1: "clamp(1.85rem, 3vw, 2.6rem)",
      scaleH2: "clamp(1.3rem, 2vw, 1.7rem)",
      scaleBody: "0.96rem",
      scaleSmall: "0.84rem",
      trackingDisplay: "-0.015em"
    },
    icon: {
      sm: "14px",
      md: "18px",
      lg: "22px"
    },
    control: {
      sm: "32px",
      md: "38px",
      lg: "46px"
    },
    motion: {
      fast: "120ms",
      base: "180ms",
      slow: "300ms",
      easeStandard: "cubic-bezier(0.1, 0.9, 0.2, 1)",
      easeEmphasis: "cubic-bezier(0.3, 0, 0.2, 1)"
    }
  }
};
