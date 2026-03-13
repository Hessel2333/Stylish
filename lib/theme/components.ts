import type { ComponentTokens, ThemeName } from "@/lib/theme/types";
import { primitiveTokensByTheme } from "@/lib/theme/primitives";

const createComponentTokens = (theme: ThemeName): ComponentTokens => {
  const p = primitiveTokensByTheme[theme];

  if (theme === "apple-hig") {
    return {
      button: {
        radius: p.radius.full,
        letterSpacing: "-0.005em",
        primaryShadow: "0 8px 20px rgba(0, 113, 227, 0.22)",
        ghostBorder: "1px solid rgba(17, 25, 40, 0.1)"
      },
      input: {
        radius: p.radius.md,
        borderWidth: "1px",
        background: "rgba(255,255,255,0.7)"
      },
      card: {
        radius: p.radius.lg,
        borderWidth: "1px",
        padding: "var(--space-xl)",
        shadow: p.shadow.sm
      },
      table: {
        rowHeight: "50px",
        headerWeight: "600",
        stripeOpacity: "0.34"
      },
      tabs: {
        radius: p.radius.full,
        activeShadow: "0 3px 10px rgba(17, 25, 40, 0.08)"
      },
      modal: {
        radius: p.radius.xl,
        maxWidth: "660px"
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
      letterSpacing: "0em",
      primaryShadow: "0 7px 18px rgba(110, 115, 246, 0.26)",
      ghostBorder: "1px solid #d3d9e7"
    },
    input: {
      radius: p.radius.sm,
      borderWidth: "1px",
      background: "rgba(255,255,255,0.9)"
    },
    card: {
      radius: p.radius.lg,
      borderWidth: "1px",
      padding: "var(--space-lg)",
      shadow: p.shadow.sm
    },
    table: {
      rowHeight: "46px",
      headerWeight: "600",
      stripeOpacity: "0.42"
    },
    tabs: {
      radius: p.radius.sm,
      activeShadow: "0 4px 12px rgba(110, 115, 246, 0.16)"
    },
    modal: {
      radius: p.radius.lg,
      maxWidth: "640px"
    }
  };
};

export const componentTokensByTheme: Record<ThemeName, ComponentTokens> = {
  "apple-hig": createComponentTokens("apple-hig"),
  "material-3": createComponentTokens("material-3"),
  "fluent-2": createComponentTokens("fluent-2")
};
