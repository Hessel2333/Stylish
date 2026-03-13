import type { ComponentTokens, ThemeName } from "@/lib/theme/types";
import { primitiveTokensByTheme } from "@/lib/theme/primitives";

const createComponentTokens = (theme: ThemeName): ComponentTokens => {
  const p = primitiveTokensByTheme[theme];

  if (theme === "apple-hig") {
    return {
      button: {
        radius: p.radius.full,
        letterSpacing: "-0.01em",
        primaryShadow: "0 12px 24px rgba(32, 119, 255, 0.22)",
        ghostBorder: "1px solid rgba(15, 23, 42, 0.09)"
      },
      input: {
        radius: p.radius.md,
        borderWidth: "1px",
        background: "rgba(255,255,255,0.78)"
      },
      card: {
        radius: p.radius.lg,
        borderWidth: "1px",
        padding: "var(--space-xl)",
        shadow: p.shadow.sm
      },
      table: {
        rowHeight: "52px",
        headerWeight: "600",
        stripeOpacity: "0.5"
      },
      tabs: {
        radius: p.radius.full,
        activeShadow: p.shadow.xs
      },
      modal: {
        radius: p.radius.xl,
        maxWidth: "640px"
      }
    };
  }

  if (theme === "material-3") {
    return {
      button: {
        radius: p.radius.full,
        letterSpacing: "0em",
        primaryShadow: "0 8px 18px rgba(103, 80, 164, 0.26)",
        ghostBorder: "1px solid #d0c8d6"
      },
      input: {
        radius: p.radius.lg,
        borderWidth: "1px",
        background: "#f6f1fb"
      },
      card: {
        radius: p.radius.lg,
        borderWidth: "1px",
        padding: "var(--space-lg)",
        shadow: p.shadow.sm
      },
      table: {
        rowHeight: "50px",
        headerWeight: "600",
        stripeOpacity: "0.6"
      },
      tabs: {
        radius: p.radius.full,
        activeShadow: p.shadow.xs
      },
      modal: {
        radius: p.radius.lg,
        maxWidth: "680px"
      }
    };
  }

  return {
    button: {
      radius: p.radius.sm,
      letterSpacing: "0.005em",
      primaryShadow: "0 4px 14px rgba(17, 94, 163, 0.24)",
      ghostBorder: "1px solid #d2d7dc"
    },
    input: {
      radius: p.radius.sm,
      borderWidth: "1px",
      background: "#ffffff"
    },
    card: {
      radius: p.radius.md,
      borderWidth: "1px",
      padding: "var(--space-lg)",
      shadow: p.shadow.xs
    },
    table: {
      rowHeight: "44px",
      headerWeight: "650",
      stripeOpacity: "0.74"
    },
    tabs: {
      radius: p.radius.sm,
      activeShadow: "none"
    },
    modal: {
      radius: p.radius.lg,
      maxWidth: "620px"
    }
  };
};

export const componentTokensByTheme: Record<ThemeName, ComponentTokens> = {
  "apple-hig": createComponentTokens("apple-hig"),
  "material-3": createComponentTokens("material-3"),
  "fluent-2": createComponentTokens("fluent-2")
};
