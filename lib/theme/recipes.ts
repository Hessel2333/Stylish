import { componentTokensByTheme } from "@/lib/theme/components";
import { primitiveTokensByTheme } from "@/lib/theme/primitives";
import { semanticTokensByTheme } from "@/lib/theme/semantics";
import type { ComponentRecipes, ThemeName } from "@/lib/theme/types";

const createRecipes = (theme: ThemeName): ComponentRecipes => {
  const p = primitiveTokensByTheme[theme];
  const s = semanticTokensByTheme[theme];
  const c = componentTokensByTheme[theme];

  if (theme === "apple-hig") {
    return {
      surface: {
        panel: {
          bg: "linear-gradient(165deg, rgba(255, 255, 255, 0.72) 0%, rgba(244, 249, 255, 0.62) 48%, rgba(238, 244, 252, 0.7) 100%), color-mix(in hsl, var(--surface) 74%, white 26%)",
          border: "rgba(255, 255, 255, 0.66)",
          shadow: "0 14px 36px rgba(17, 25, 40, 0.12)",
          backdropBlur: "16px",
          backdropSaturate: "148%"
        },
        subtle: {
          bg: "linear-gradient(170deg, rgba(255, 255, 255, 0.46) 0%, rgba(239, 246, 255, 0.34) 100%), color-mix(in hsl, var(--surface-muted) 74%, white 26%)",
          border: "rgba(255, 255, 255, 0.58)",
          shadow: "none",
          backdropBlur: "12px",
          backdropSaturate: "142%"
        }
      },
      button: {
        radius: c.button.radius,
        letterSpacing: c.button.letterSpacing,
        hoverTransform: "translateY(0)",
        activeTransform: "translateY(0.5px)",
        primary: {
          bg: "linear-gradient(180deg, #2a94ff 0%, var(--accent) 100%)",
          color: "#ffffff",
          border: "1px solid color-mix(in hsl, var(--accent) 56%, white 44%)",
          shadow: "0 8px 20px rgba(0, 113, 227, 0.23)",
          hoverBg: "linear-gradient(180deg, #4aa4ff 0%, color-mix(in hsl, var(--accent) 88%, white 12%) 100%)",
          hoverColor: "#ffffff",
          hoverBorder: "1px solid color-mix(in hsl, var(--accent) 62%, white 38%)",
          hoverShadow: "0 10px 24px rgba(0, 113, 227, 0.24)",
          activeBg: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 78%, black 22%) 0%, color-mix(in hsl, var(--accent) 88%, black 12%) 100%)",
          activeColor: "#ffffff",
          activeBorder: "1px solid color-mix(in hsl, var(--accent) 70%, black 30%)",
          activeShadow: "0 5px 14px rgba(0, 113, 227, 0.2)"
        },
        secondary: {
          bg: "rgba(255, 255, 255, 0.58)",
          color: "var(--text-primary)",
          border: "1px solid color-mix(in hsl, var(--border-default) 48%, transparent 52%)",
          shadow: "none",
          hoverBg: "rgba(255, 255, 255, 0.74)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "1px solid color-mix(in hsl, var(--border-default) 62%, transparent 38%)",
          hoverShadow: "0 3px 10px rgba(17, 25, 40, 0.08)",
          activeBg: "rgba(255, 255, 255, 0.68)",
          activeColor: "var(--text-primary)",
          activeBorder: "1px solid color-mix(in hsl, var(--border-default) 68%, transparent 32%)",
          activeShadow: "0 2px 7px rgba(17, 25, 40, 0.08)"
        },
        outlined: {
          bg: "transparent",
          color: "var(--text-primary)",
          border: "1px solid color-mix(in hsl, var(--border-strong) 58%, transparent 42%)",
          shadow: "none",
          hoverBg: "rgba(255, 255, 255, 0.4)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 74%, transparent 26%)",
          hoverShadow: "none",
          activeBg: "rgba(255, 255, 255, 0.34)",
          activeColor: "var(--text-primary)",
          activeBorder: "1px solid color-mix(in hsl, var(--border-strong) 82%, transparent 18%)",
          activeShadow: "none"
        },
        ghost: {
          bg: "rgba(255, 255, 255, 0.26)",
          color: "var(--text-secondary)",
          border: "1px solid transparent",
          shadow: "none",
          hoverBg: "rgba(255, 255, 255, 0.42)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "1px solid transparent",
          hoverShadow: "none",
          activeBg: "rgba(255, 255, 255, 0.34)",
          activeColor: "var(--text-primary)",
          activeBorder: "1px solid transparent",
          activeShadow: "none"
        },
        danger: {
          bg: "linear-gradient(180deg, color-mix(in hsl, var(--danger) 82%, white 18%) 0%, var(--danger) 100%)",
          color: "#ffffff",
          border: "1px solid color-mix(in hsl, var(--danger) 68%, black 32%)",
          shadow: "0 8px 18px color-mix(in hsl, var(--danger) 34%, transparent)",
          hoverBg: "linear-gradient(180deg, color-mix(in hsl, var(--danger) 90%, white 10%) 0%, color-mix(in hsl, var(--danger) 90%, black 10%) 100%)",
          hoverColor: "#ffffff",
          hoverBorder: "1px solid color-mix(in hsl, var(--danger) 74%, black 26%)",
          hoverShadow: "0 10px 20px color-mix(in hsl, var(--danger) 36%, transparent)",
          activeBg: "color-mix(in hsl, var(--danger) 88%, black 12%)",
          activeColor: "#ffffff",
          activeBorder: "1px solid color-mix(in hsl, var(--danger) 78%, black 22%)",
          activeShadow: "0 5px 12px color-mix(in hsl, var(--danger) 30%, transparent)"
        }
      },
      input: {
        radius: c.input.radius,
        default: {
          bg: "rgba(255, 255, 255, 0.48)",
          border: "1px solid rgba(255, 255, 255, 0.68)",
          shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.82)",
          color: "var(--text-primary)",
          placeholder: "color-mix(in hsl, var(--text-tertiary) 90%, white 10%)",
          hoverBg: "rgba(255, 255, 255, 0.58)",
          hoverBorder: "1px solid rgba(255, 255, 255, 0.76)",
          focusBg: "rgba(255, 255, 255, 0.66)",
          focusBorder: "1px solid color-mix(in hsl, var(--accent) 38%, white 62%)",
          focusShadow: "0 0 0 3px color-mix(in hsl, var(--accent) 20%, transparent)"
        }
      },
      select: {
        radius: c.input.radius,
        indicator: "color-mix(in hsl, var(--text-secondary) 90%, white 10%)",
        default: {
          bg: "rgba(255, 255, 255, 0.48)",
          border: "1px solid rgba(255, 255, 255, 0.68)",
          shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.82)",
          color: "var(--text-primary)",
          placeholder: "var(--text-tertiary)",
          hoverBg: "rgba(255, 255, 255, 0.58)",
          hoverBorder: "1px solid rgba(255, 255, 255, 0.76)",
          focusBg: "rgba(255, 255, 255, 0.66)",
          focusBorder: "1px solid color-mix(in hsl, var(--accent) 38%, white 62%)",
          focusShadow: "0 0 0 3px color-mix(in hsl, var(--accent) 20%, transparent)"
        }
      },
      card: {
        default: {
          bg: "linear-gradient(165deg, rgba(255, 255, 255, 0.72) 0%, rgba(244, 249, 255, 0.62) 48%, rgba(238, 244, 252, 0.7) 100%), color-mix(in hsl, var(--surface) 74%, white 26%)",
          border: "1px solid rgba(255, 255, 255, 0.66)",
          shadow: "0 14px 36px rgba(17, 25, 40, 0.12)",
          radius: c.card.radius,
          padding: c.card.padding,
          backdropBlur: "16px",
          backdropSaturate: "148%"
        }
      },
      tabs: {
        shell: {
          bg: "color-mix(in hsl, var(--surface-muted) 88%, white 12%)",
          border: "var(--border-subtle)",
          radius: "calc(var(--tabs-radius) + 2px)",
          padding: "3px"
        },
        idle: {
          bg: "rgba(255, 255, 255, 0.38)",
          color: "color-mix(in hsl, var(--text-secondary) 90%, white 10%)",
          border: "rgba(255, 255, 255, 0.58)",
          shadow: "none",
          hoverBg: "rgba(255, 255, 255, 0.5)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "rgba(255, 255, 255, 0.7)"
        },
        active: {
          bg: "rgba(255, 255, 255, 0.66)",
          color: "var(--text-primary)",
          border: "rgba(255, 255, 255, 0.82)",
          shadow: "0 7px 18px rgba(17, 25, 40, 0.1)",
          hoverBg: "rgba(255, 255, 255, 0.72)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "rgba(255, 255, 255, 0.88)"
        }
      },
      badge: {
        height: "27px",
        radius: p.radius.full,
        fontWeight: "600",
        neutral: {
          bg: "rgba(255, 255, 255, 0.38)",
          color: "color-mix(in hsl, var(--text-secondary) 88%, white 12%)",
          border: "rgba(255, 255, 255, 0.6)"
        },
        accent: {
          bg: "rgba(190, 224, 255, 0.5)",
          color: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
          border: "rgba(255, 255, 255, 0.66)"
        },
        success: {
          bg: "color-mix(in hsl, var(--success) 20%, rgba(255, 255, 255, 0.8))",
          color: "var(--success)",
          border: "rgba(255, 255, 255, 0.62)"
        },
        warning: {
          bg: "color-mix(in hsl, var(--warning) 20%, rgba(255, 255, 255, 0.82))",
          color: "var(--warning)",
          border: "rgba(255, 255, 255, 0.62)"
        },
        danger: {
          bg: "color-mix(in hsl, var(--danger) 18%, rgba(255, 255, 255, 0.82))",
          color: "var(--danger)",
          border: "rgba(255, 255, 255, 0.62)"
        }
      },
      table: {
        shell: {
          bg: "linear-gradient(165deg, rgba(255, 255, 255, 0.52) 0%, rgba(236, 246, 255, 0.3) 100%), color-mix(in hsl, var(--surface) 72%, white 28%)",
          border: "rgba(255, 255, 255, 0.6)",
          radius: c.card.radius,
          backdropBlur: "10px",
          backdropSaturate: "142%"
        },
        header: {
          bg: "rgba(255, 255, 255, 0.4)",
          color: "color-mix(in hsl, var(--text-secondary) 92%, white 8%)",
          border: "rgba(255, 255, 255, 0.54)",
          fontWeight: c.table.headerWeight
        },
        row: {
          border: "rgba(255, 255, 255, 0.4)",
          oddBg: "rgba(255, 255, 255, 0.16)",
          hoverBg: "rgba(187, 223, 255, 0.26)",
          color: "var(--text-primary)",
          secondaryColor: "var(--text-secondary)",
          height: c.table.rowHeight
        }
      },
      slider: {
        trackBg: "rgba(255, 255, 255, 0.54)",
        trackFill: "var(--accent)",
        thumbBg: "rgba(255, 255, 255, 0.92)",
        thumbBorder: "2px solid rgba(255, 255, 255, 0.92)",
        thumbShadow: "0 6px 16px rgba(17, 25, 40, 0.16)",
        thumbMask: "0 0 0 4px color-mix(in hsl, var(--surface-elevated) 82%, white 18%)"
      },
      chart: {
        panelBg: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 9%, white) 0%, transparent 100%)",
        panelBorder: "rgba(255, 255, 255, 0.54)",
        panelOverlay: "linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 58%)",
        gridLine: "rgba(255, 255, 255, 0.44)",
        barRadius: "var(--radius-full)",
        barFill: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 72%, white 28%) 0%, var(--accent) 100%)",
        barFillAlt: "linear-gradient(180deg, color-mix(in hsl, var(--accent-soft) 55%, white 45%) 0%, color-mix(in hsl, var(--accent) 62%, white 38%) 100%)",
        barBorder: "1px solid color-mix(in hsl, var(--accent) 28%, white 72%)",
        barShadow: "0 8px 18px color-mix(in hsl, var(--accent) 16%, transparent)"
      },
      modal: {
        radius: c.modal.radius,
        maxWidth: c.modal.maxWidth,
        backdropBg: "rgba(7, 12, 23, 0.28)",
        bg: "linear-gradient(160deg, rgba(255, 255, 255, 0.66) 0%, rgba(232, 244, 255, 0.38) 100%), color-mix(in hsl, var(--surface) 72%, white 28%)",
        border: "rgba(255, 255, 255, 0.64)",
        shadow: "0 20px 52px rgba(22, 36, 62, 0.2)",
        closeBg: "rgba(255, 255, 255, 0.42)",
        closeBorder: "rgba(255, 255, 255, 0.64)",
        closeColor: "var(--text-secondary)",
        closeHoverBg: "rgba(255, 255, 255, 0.58)",
        closeHoverBorder: "rgba(255, 255, 255, 0.8)"
      }
    };
  }

  if (theme === "material-3") {
    return {
      surface: {
        panel: {
          bg: "color-mix(in hsl, var(--surface) 96%, white 4%)",
          border: "color-mix(in hsl, var(--border-default) 94%, transparent 6%)",
          shadow: "0 12px 28px rgba(57, 45, 76, 0.11)",
          backdropBlur: "0px",
          backdropSaturate: "100%"
        },
        subtle: {
          bg: "color-mix(in hsl, var(--surface-muted) 92%, white 8%)",
          border: "color-mix(in hsl, var(--border-subtle) 90%, transparent 10%)",
          shadow: "none",
          backdropBlur: "0px",
          backdropSaturate: "100%"
        }
      },
      button: {
        radius: c.button.radius,
        letterSpacing: c.button.letterSpacing,
        hoverTransform: "translateY(0)",
        activeTransform: "translateY(1px)",
        primary: {
          bg: "var(--accent)",
          color: "#ffffff",
          border: "1px solid color-mix(in hsl, var(--accent) 78%, black 22%)",
          shadow: "0 8px 18px rgba(103, 80, 164, 0.24)",
          hoverBg: "color-mix(in hsl, var(--accent) 88%, white 12%)",
          hoverColor: "#ffffff",
          hoverBorder: "1px solid color-mix(in hsl, var(--accent) 72%, black 28%)",
          hoverShadow: "0 10px 22px rgba(103, 80, 164, 0.28)",
          activeBg: "color-mix(in hsl, var(--accent) 84%, black 16%)",
          activeColor: "#ffffff",
          activeBorder: "1px solid color-mix(in hsl, var(--accent) 80%, black 20%)",
          activeShadow: "0 5px 12px rgba(103, 80, 164, 0.2)"
        },
        secondary: {
          bg: "color-mix(in hsl, var(--accent-soft) 88%, white 12%)",
          color: "color-mix(in hsl, var(--accent) 72%, var(--text-primary) 28%)",
          border: "1px solid var(--border-strong)",
          shadow: "none",
          hoverBg: "color-mix(in hsl, var(--accent-soft) 78%, white 22%)",
          hoverColor: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
          hoverBorder: "1px solid color-mix(in hsl, var(--accent) 36%, var(--border-strong) 64%)",
          hoverShadow: "none",
          activeBg: "color-mix(in hsl, var(--accent-soft) 72%, white 28%)",
          activeColor: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
          activeBorder: "1px solid color-mix(in hsl, var(--accent) 42%, var(--border-strong) 58%)",
          activeShadow: "none"
        },
        outlined: {
          bg: "transparent",
          color: "color-mix(in hsl, var(--accent) 74%, var(--text-primary) 26%)",
          border: "1px solid color-mix(in hsl, var(--border-strong) 94%, transparent 6%)",
          shadow: "none",
          hoverBg: "color-mix(in hsl, var(--accent-soft) 30%, transparent)",
          hoverColor: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
          hoverBorder: "1px solid color-mix(in hsl, var(--accent) 44%, var(--border-strong) 56%)",
          hoverShadow: "none",
          activeBg: "color-mix(in hsl, var(--accent-soft) 36%, transparent)",
          activeColor: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
          activeBorder: "1px solid color-mix(in hsl, var(--accent) 52%, var(--border-strong) 48%)",
          activeShadow: "none"
        },
        ghost: {
          bg: "color-mix(in hsl, var(--surface-muted) 92%, white 8%)",
          color: "var(--text-primary)",
          border: "1px solid color-mix(in hsl, var(--border-strong) 82%, var(--border-default) 18%)",
          shadow: "none",
          hoverBg: "color-mix(in hsl, var(--surface-muted) 84%, white 16%)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 90%, var(--border-default) 10%)",
          hoverShadow: "none",
          activeBg: "color-mix(in hsl, var(--surface-muted) 78%, white 22%)",
          activeColor: "var(--text-primary)",
          activeBorder: "1px solid color-mix(in hsl, var(--border-strong) 94%, var(--border-default) 6%)",
          activeShadow: "none"
        },
        danger: {
          bg: "var(--danger)",
          color: "#ffffff",
          border: "1px solid color-mix(in hsl, var(--danger) 72%, black 28%)",
          shadow: "0 8px 18px rgba(179, 38, 30, 0.24)",
          hoverBg: "color-mix(in hsl, var(--danger) 90%, white 10%)",
          hoverColor: "#ffffff",
          hoverBorder: "1px solid color-mix(in hsl, var(--danger) 78%, black 22%)",
          hoverShadow: "0 10px 20px rgba(179, 38, 30, 0.28)",
          activeBg: "color-mix(in hsl, var(--danger) 86%, black 14%)",
          activeColor: "#ffffff",
          activeBorder: "1px solid color-mix(in hsl, var(--danger) 82%, black 18%)",
          activeShadow: "0 5px 12px rgba(179, 38, 30, 0.2)"
        }
      },
      input: {
        radius: c.input.radius,
        default: {
          bg: "color-mix(in hsl, var(--surface-elevated) 92%, white 8%)",
          border: "1px solid color-mix(in hsl, var(--border-default) 95%, transparent 5%)",
          shadow: "none",
          color: "var(--text-primary)",
          placeholder: "var(--text-tertiary)",
          hoverBg: "color-mix(in hsl, var(--surface-elevated) 88%, white 12%)",
          hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 88%, transparent 12%)",
          focusBg: "color-mix(in hsl, var(--surface-elevated) 86%, white 14%)",
          focusBorder: "1px solid color-mix(in hsl, var(--accent) 44%, var(--border-strong) 56%)",
          focusShadow: "0 0 0 3px color-mix(in hsl, var(--accent) 22%, transparent)"
        }
      },
      select: {
        radius: c.input.radius,
        indicator: "var(--text-secondary)",
        default: {
          bg: "color-mix(in hsl, var(--surface-elevated) 92%, white 8%)",
          border: "1px solid color-mix(in hsl, var(--border-default) 95%, transparent 5%)",
          shadow: "none",
          color: "var(--text-primary)",
          placeholder: "var(--text-tertiary)",
          hoverBg: "color-mix(in hsl, var(--surface-elevated) 88%, white 12%)",
          hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 88%, transparent 12%)",
          focusBg: "color-mix(in hsl, var(--surface-elevated) 86%, white 14%)",
          focusBorder: "1px solid color-mix(in hsl, var(--accent) 44%, var(--border-strong) 56%)",
          focusShadow: "0 0 0 3px color-mix(in hsl, var(--accent) 22%, transparent)"
        }
      },
      card: {
        default: {
          bg: "color-mix(in hsl, var(--surface) 96%, white 4%)",
          border: "1px solid color-mix(in hsl, var(--border-default) 94%, transparent 6%)",
          shadow: "0 12px 28px rgba(57, 45, 76, 0.11)",
          radius: c.card.radius,
          padding: c.card.padding,
          backdropBlur: "0px",
          backdropSaturate: "100%"
        }
      },
      tabs: {
        shell: {
          bg: "color-mix(in hsl, var(--surface-muted) 88%, white 12%)",
          border: "color-mix(in hsl, var(--border-subtle) 90%, transparent 10%)",
          radius: "calc(var(--tabs-radius) + 2px)",
          padding: "3px"
        },
        idle: {
          bg: "color-mix(in hsl, var(--surface-muted) 90%, white 10%)",
          color: "var(--text-secondary)",
          border: "color-mix(in hsl, var(--border-default) 95%, transparent 5%)",
          shadow: "none",
          hoverBg: "color-mix(in hsl, var(--surface-muted) 84%, white 16%)",
          hoverColor: "var(--text-primary)",
          hoverBorder: "color-mix(in hsl, var(--border-strong) 90%, transparent 10%)"
        },
        active: {
          bg: "color-mix(in hsl, var(--accent-soft) 84%, white 16%)",
          color: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
          border: "color-mix(in hsl, var(--accent) 52%, white 48%)",
          shadow: p.shadow.xs,
          hoverBg: "color-mix(in hsl, var(--accent-soft) 80%, white 20%)",
          hoverColor: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
          hoverBorder: "color-mix(in hsl, var(--accent) 58%, white 42%)"
        }
      },
    badge: {
      height: "28px",
      radius: p.radius.sm,
      fontWeight: "650",
      neutral: {
        bg: "color-mix(in hsl, var(--surface-muted) 95%, white 5%)",
        color: "var(--text-secondary)",
        border: "color-mix(in hsl, var(--border-default) 84%, transparent 16%)"
      },
        accent: {
          bg: "color-mix(in hsl, var(--accent-soft) 84%, white 16%)",
          color: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
          border: "color-mix(in hsl, var(--accent) 52%, white 48%)"
        },
        success: {
          bg: "color-mix(in hsl, var(--success) 14%, white 86%)",
          color: "var(--success)",
          border: "color-mix(in hsl, var(--success) 42%, white 58%)"
        },
        warning: {
          bg: "color-mix(in hsl, var(--warning) 16%, white 84%)",
          color: "var(--warning)",
          border: "color-mix(in hsl, var(--warning) 44%, white 56%)"
        },
        danger: {
          bg: "color-mix(in hsl, var(--danger) 14%, white 86%)",
          color: "var(--danger)",
          border: "color-mix(in hsl, var(--danger) 42%, white 58%)"
        }
      },
      table: {
        shell: {
          bg: "color-mix(in hsl, var(--surface) 94%, white 6%)",
          border: "color-mix(in hsl, var(--border-default) 94%, transparent 6%)",
          radius: c.card.radius,
          backdropBlur: "0px",
          backdropSaturate: "100%"
        },
        header: {
          bg: "color-mix(in hsl, var(--surface-muted) 93%, white 7%)",
          color: "var(--text-secondary)",
          border: "color-mix(in hsl, var(--border-subtle) 88%, transparent 12%)",
          fontWeight: c.table.headerWeight
        },
        row: {
          border: "color-mix(in hsl, var(--border-subtle) 92%, transparent 8%)",
          oddBg: "color-mix(in hsl, var(--surface-muted) calc(var(--table-stripe-opacity) * 100%), transparent)",
          hoverBg: "color-mix(in hsl, var(--accent-soft) 30%, transparent)",
          color: "var(--text-primary)",
          secondaryColor: "var(--text-secondary)",
          height: c.table.rowHeight
        }
      },
      slider: {
        trackBg: "color-mix(in hsl, var(--border-default) 62%, white 38%)",
        trackFill: "var(--accent)",
        thumbBg: "#ffffff",
        thumbBorder: "1px solid color-mix(in hsl, var(--accent) 28%, white 72%)",
        thumbShadow: "0 2px 8px rgba(53, 44, 72, 0.2)",
        thumbMask: "0 0 0 2px color-mix(in hsl, var(--surface) 90%, white 10%)"
      },
      chart: {
        panelBg: "linear-gradient(180deg, color-mix(in hsl, var(--accent-soft) 34%, white 66%) 0%, transparent 100%)",
        panelBorder: "color-mix(in hsl, var(--border-default) 92%, transparent 8%)",
        panelOverlay: "linear-gradient(180deg, color-mix(in hsl, var(--surface-elevated) 90%, white 10%) 0%, transparent 62%)",
        gridLine: "color-mix(in hsl, var(--border-subtle) 92%, transparent 8%)",
        barRadius: "var(--radius-sm)",
        barFill: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 78%, white 22%) 0%, var(--accent) 100%)",
        barFillAlt: "linear-gradient(180deg, color-mix(in hsl, var(--accent-soft) 64%, white 36%) 0%, color-mix(in hsl, var(--accent) 58%, white 42%) 100%)",
        barBorder: "1px solid color-mix(in hsl, var(--accent) 26%, white 74%)",
        barShadow: "0 4px 12px rgba(103, 80, 164, 0.22)"
      },
      modal: {
        radius: c.modal.radius,
        maxWidth: c.modal.maxWidth,
        backdropBg: s.overlay,
        bg: "color-mix(in hsl, var(--surface) 94%, white 6%)",
        border: "color-mix(in hsl, var(--border-default) 94%, transparent 6%)",
        shadow: "0 22px 54px rgba(37, 35, 43, 0.14)",
        closeBg: "color-mix(in hsl, var(--surface-muted) 96%, white 4%)",
        closeBorder: "color-mix(in hsl, var(--border-default) 92%, transparent 8%)",
        closeColor: "var(--text-secondary)",
        closeHoverBg: "color-mix(in hsl, var(--accent-soft) 22%, white 78%)",
        closeHoverBorder: "color-mix(in hsl, var(--accent) 35%, var(--border-strong) 65%)"
      }
    };
  }

  return {
    surface: {
      panel: {
        bg: "linear-gradient(162deg, rgba(255, 255, 255, 0.84) 0%, rgba(247, 250, 255, 0.8) 100%), color-mix(in hsl, var(--surface) 92%, white 8%)",
        border: "color-mix(in hsl, var(--border-default) 88%, white 12%)",
        shadow: "0 12px 30px rgba(69, 80, 112, 0.12)",
        backdropBlur: "0px",
        backdropSaturate: "100%"
      },
      subtle: {
        bg: "color-mix(in hsl, var(--surface-muted) 90%, white 10%)",
        border: "color-mix(in hsl, var(--border-subtle) 86%, white 14%)",
        shadow: "none",
        backdropBlur: "0px",
        backdropSaturate: "100%"
      }
    },
    button: {
      radius: c.button.radius,
      letterSpacing: c.button.letterSpacing,
      hoverTransform: "translateY(0)",
      activeTransform: "translateY(1px)",
      primary: {
        bg: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 86%, white 14%) 0%, var(--accent) 100%)",
        color: "#ffffff",
        border: "1px solid color-mix(in hsl, var(--accent) 42%, white 58%)",
        shadow: "0 8px 18px rgba(110, 115, 246, 0.25)",
        hoverBg: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 90%, white 10%) 0%, color-mix(in hsl, var(--accent) 92%, black 8%) 100%)",
        hoverColor: "#ffffff",
        hoverBorder: "1px solid color-mix(in hsl, var(--accent) 48%, white 52%)",
        hoverShadow: "0 10px 22px rgba(110, 115, 246, 0.3)",
        activeBg: "color-mix(in hsl, var(--accent) 88%, black 12%)",
        activeColor: "#ffffff",
        activeBorder: "1px solid color-mix(in hsl, var(--accent) 56%, white 44%)",
        activeShadow: "0 4px 10px rgba(110, 115, 246, 0.2)"
      },
      secondary: {
        bg: "color-mix(in hsl, var(--surface-elevated) 94%, white 6%)",
        color: "color-mix(in hsl, var(--accent) 72%, var(--text-primary) 28%)",
        border: "1px solid var(--border-strong)",
        shadow: "none",
        hoverBg: "color-mix(in hsl, var(--surface-elevated) 88%, white 12%)",
        hoverColor: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
        hoverBorder: "1px solid color-mix(in hsl, var(--accent) 42%, var(--border-strong) 58%)",
        hoverShadow: "none",
        activeBg: "color-mix(in hsl, var(--surface-elevated) 84%, white 16%)",
        activeColor: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
        activeBorder: "1px solid color-mix(in hsl, var(--accent) 52%, var(--border-strong) 48%)",
        activeShadow: "none"
      },
      outlined: {
        bg: "transparent",
        color: "color-mix(in hsl, var(--accent) 76%, var(--text-primary) 24%)",
        border: "1px solid color-mix(in hsl, var(--border-strong) 90%, white 10%)",
        shadow: "none",
        hoverBg: "color-mix(in hsl, var(--accent-soft) 22%, transparent)",
        hoverColor: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
        hoverBorder: "1px solid color-mix(in hsl, var(--accent) 54%, white 46%)",
        hoverShadow: "none",
        activeBg: "color-mix(in hsl, var(--accent-soft) 30%, transparent)",
        activeColor: "color-mix(in hsl, var(--accent) 84%, var(--text-primary) 16%)",
        activeBorder: "1px solid color-mix(in hsl, var(--accent) 60%, white 40%)",
        activeShadow: "none"
      },
      ghost: {
        bg: "color-mix(in hsl, var(--surface) 80%, white 20%)",
        color: "var(--text-primary)",
        border: "1px solid color-mix(in hsl, var(--border-default) 94%, white 6%)",
        shadow: "none",
        hoverBg: "color-mix(in hsl, var(--surface) 74%, white 26%)",
        hoverColor: "var(--text-primary)",
        hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 72%, white 28%)",
        hoverShadow: "none",
        activeBg: "color-mix(in hsl, var(--surface) 70%, white 30%)",
        activeColor: "var(--text-primary)",
        activeBorder: "1px solid color-mix(in hsl, var(--border-strong) 80%, white 20%)",
        activeShadow: "none"
      },
      danger: {
        bg: "linear-gradient(180deg, color-mix(in hsl, var(--danger) 84%, white 16%) 0%, var(--danger) 100%)",
        color: "#ffffff",
        border: "1px solid color-mix(in hsl, var(--danger) 72%, black 28%)",
        shadow: "0 8px 16px rgba(194, 57, 75, 0.2)",
        hoverBg: "linear-gradient(180deg, color-mix(in hsl, var(--danger) 90%, white 10%) 0%, color-mix(in hsl, var(--danger) 92%, black 8%) 100%)",
        hoverColor: "#ffffff",
        hoverBorder: "1px solid color-mix(in hsl, var(--danger) 78%, black 22%)",
        hoverShadow: "0 10px 20px rgba(194, 57, 75, 0.24)",
        activeBg: "color-mix(in hsl, var(--danger) 88%, black 12%)",
        activeColor: "#ffffff",
        activeBorder: "1px solid color-mix(in hsl, var(--danger) 82%, black 18%)",
        activeShadow: "0 4px 10px rgba(194, 57, 75, 0.18)"
      }
    },
    input: {
      radius: c.input.radius,
      default: {
        bg: "color-mix(in hsl, var(--surface-elevated) 94%, white 6%)",
        border: "1px solid color-mix(in hsl, var(--border-default) 94%, white 6%)",
        shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.72)",
        color: "var(--text-primary)",
        placeholder: "var(--text-tertiary)",
        hoverBg: "color-mix(in hsl, var(--surface-elevated) 90%, white 10%)",
        hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 88%, white 12%)",
        focusBg: "color-mix(in hsl, var(--surface-elevated) 88%, white 12%)",
        focusBorder: "1px solid color-mix(in hsl, var(--accent) 44%, var(--border-strong) 56%)",
        focusShadow: "0 0 0 3px color-mix(in hsl, var(--accent) 20%, transparent)"
      }
    },
    select: {
      radius: c.input.radius,
      indicator: "var(--text-secondary)",
      default: {
        bg: "color-mix(in hsl, var(--surface-elevated) 94%, white 6%)",
        border: "1px solid color-mix(in hsl, var(--border-default) 94%, white 6%)",
        shadow: "inset 0 1px 0 rgba(255, 255, 255, 0.72)",
        color: "var(--text-primary)",
        placeholder: "var(--text-tertiary)",
        hoverBg: "color-mix(in hsl, var(--surface-elevated) 90%, white 10%)",
        hoverBorder: "1px solid color-mix(in hsl, var(--border-strong) 88%, white 12%)",
        focusBg: "color-mix(in hsl, var(--surface-elevated) 88%, white 12%)",
        focusBorder: "1px solid color-mix(in hsl, var(--accent) 44%, var(--border-strong) 56%)",
        focusShadow: "0 0 0 3px color-mix(in hsl, var(--accent) 20%, transparent)"
      }
    },
    card: {
      default: {
        bg: "linear-gradient(162deg, rgba(255, 255, 255, 0.84) 0%, rgba(247, 250, 255, 0.8) 100%), color-mix(in hsl, var(--surface) 92%, white 8%)",
        border: "1px solid color-mix(in hsl, var(--border-default) 88%, white 12%)",
        shadow: "0 12px 30px rgba(69, 80, 112, 0.12)",
        radius: c.card.radius,
        padding: c.card.padding,
        backdropBlur: "0px",
        backdropSaturate: "100%"
      }
    },
    tabs: {
      shell: {
        bg: "color-mix(in hsl, var(--surface-muted) 90%, white 10%)",
        border: "color-mix(in hsl, var(--border-subtle) 86%, white 14%)",
        radius: "calc(var(--tabs-radius) + 2px)",
        padding: "3px"
      },
      idle: {
        bg: "color-mix(in hsl, var(--surface-elevated) 94%, white 6%)",
        color: "var(--text-secondary)",
        border: "color-mix(in hsl, var(--border-default) 90%, white 10%)",
        shadow: "none",
        hoverBg: "color-mix(in hsl, var(--surface-elevated) 90%, white 10%)",
        hoverColor: "var(--text-primary)",
        hoverBorder: "color-mix(in hsl, var(--border-strong) 88%, white 12%)"
      },
      active: {
        bg: "color-mix(in hsl, var(--accent-soft) 84%, white 16%)",
        color: "color-mix(in hsl, var(--accent) 78%, var(--text-primary) 22%)",
        border: "color-mix(in hsl, var(--accent) 54%, white 46%)",
        shadow: "0 4px 12px rgba(110, 115, 246, 0.16)",
        hoverBg: "color-mix(in hsl, var(--accent-soft) 80%, white 20%)",
        hoverColor: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
        hoverBorder: "color-mix(in hsl, var(--accent) 60%, white 40%)"
      }
    },
    badge: {
      height: "27px",
      radius: p.radius.full,
      fontWeight: "600",
      neutral: {
        bg: "color-mix(in hsl, var(--surface-elevated) 97%, white 3%)",
        color: "var(--text-secondary)",
        border: "color-mix(in hsl, var(--border-default) 82%, white 18%)"
      },
      accent: {
        bg: "color-mix(in hsl, var(--accent-soft) 84%, white 16%)",
        color: "color-mix(in hsl, var(--accent) 82%, var(--text-primary) 18%)",
        border: "color-mix(in hsl, var(--accent) 52%, white 48%)"
      },
      success: {
        bg: "color-mix(in hsl, var(--success) 12%, white 88%)",
        color: "var(--success)",
        border: "color-mix(in hsl, var(--success) 32%, white 68%)"
      },
      warning: {
        bg: "color-mix(in hsl, var(--warning) 12%, white 88%)",
        color: "var(--warning)",
        border: "color-mix(in hsl, var(--warning) 34%, white 66%)"
      },
      danger: {
        bg: "color-mix(in hsl, var(--danger) 12%, white 88%)",
        color: "var(--danger)",
        border: "color-mix(in hsl, var(--danger) 32%, white 68%)"
      }
    },
    table: {
      shell: {
        bg: "color-mix(in hsl, var(--surface) 94%, white 6%)",
        border: "color-mix(in hsl, var(--border-default) 88%, white 12%)",
        radius: c.card.radius,
        backdropBlur: "0px",
        backdropSaturate: "100%"
      },
      header: {
        bg: "color-mix(in hsl, var(--surface-muted) 92%, white 8%)",
        color: "var(--text-secondary)",
        border: "color-mix(in hsl, var(--border-subtle) 88%, white 12%)",
        fontWeight: c.table.headerWeight
      },
      row: {
        border: "color-mix(in hsl, var(--border-subtle) 86%, white 14%)",
        oddBg: "color-mix(in hsl, var(--accent-soft) 7%, transparent)",
        hoverBg: "color-mix(in hsl, var(--accent-soft) 24%, transparent)",
        color: "var(--text-primary)",
        secondaryColor: "var(--text-secondary)",
        height: c.table.rowHeight
      }
    },
    slider: {
      trackBg: "color-mix(in hsl, var(--border-default) 62%, white 38%)",
      trackFill: "var(--accent)",
      thumbBg: "#ffffff",
      thumbBorder: "1px solid color-mix(in hsl, var(--accent) 34%, white 66%)",
      thumbShadow: "0 2px 8px rgba(52, 60, 89, 0.2)",
      thumbMask: "0 0 0 2px color-mix(in hsl, var(--surface) 90%, white 10%)"
    },
    chart: {
      panelBg: "linear-gradient(180deg, color-mix(in hsl, var(--accent-soft) 28%, white 72%) 0%, transparent 100%)",
      panelBorder: "color-mix(in hsl, var(--border-default) 88%, white 12%)",
      panelOverlay: "linear-gradient(180deg, color-mix(in hsl, var(--surface-elevated) 82%, white 18%) 0%, transparent 58%)",
      gridLine: "color-mix(in hsl, var(--border-subtle) 88%, white 12%)",
      barRadius: "var(--radius-xs)",
      barFill: "linear-gradient(180deg, color-mix(in hsl, var(--accent) 84%, white 16%) 0%, var(--accent) 100%)",
      barFillAlt: "linear-gradient(180deg, color-mix(in hsl, var(--accent-soft) 60%, white 40%) 0%, color-mix(in hsl, var(--accent) 64%, white 36%) 100%)",
      barBorder: "1px solid color-mix(in hsl, var(--border-strong) 54%, var(--accent) 46%)",
      barShadow: "0 3px 10px rgba(68, 78, 112, 0.14)"
    },
    modal: {
      radius: c.modal.radius,
      maxWidth: c.modal.maxWidth,
      backdropBg: s.overlay,
      bg: "linear-gradient(162deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 251, 255, 0.9) 100%), color-mix(in hsl, var(--surface) 92%, white 8%)",
      border: "color-mix(in hsl, var(--border-default) 90%, white 10%)",
      shadow: "0 20px 52px rgba(52, 60, 89, 0.18)",
      closeBg: "color-mix(in hsl, var(--surface-elevated) 94%, white 6%)",
      closeBorder: "color-mix(in hsl, var(--border-default) 90%, white 10%)",
      closeColor: "var(--text-secondary)",
      closeHoverBg: "color-mix(in hsl, var(--accent-soft) 24%, white 76%)",
      closeHoverBorder: "color-mix(in hsl, var(--accent) 48%, var(--border-strong) 52%)"
    }
  };
};

export const componentRecipesByTheme: Record<ThemeName, ComponentRecipes> = {
  "apple-hig": createRecipes("apple-hig"),
  "material-3": createRecipes("material-3"),
  "fluent-2": createRecipes("fluent-2")
};
