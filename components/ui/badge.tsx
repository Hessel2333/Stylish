import { cn } from "@/lib/utils/cn";

type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const toneClassMap: Record<BadgeTone, string> = {
  neutral: "bg-[var(--surface-muted)] text-token-secondary border-[var(--border-default)]",
  accent: "bg-[var(--accent-soft)] text-[var(--text-primary)] border-[var(--accent)]",
  success: "bg-[color:color-mix(in_hsl,var(--success)_16%,white_84%)] text-[var(--success)] border-[color:color-mix(in_hsl,var(--success)_45%,white_55%)]",
  warning: "bg-[color:color-mix(in_hsl,var(--warning)_16%,white_84%)] text-[var(--warning)] border-[color:color-mix(in_hsl,var(--warning)_45%,white_55%)]",
  danger: "bg-[color:color-mix(in_hsl,var(--danger)_16%,white_84%)] text-[var(--danger)] border-[color:color-mix(in_hsl,var(--danger)_45%,white_55%)]"
};

export const Badge = ({ children, tone = "neutral", className }: BadgeProps) => {
  return (
    <span className={cn("inline-flex h-7 items-center rounded-[var(--radius-full)] border px-3 text-xs font-semibold", toneClassMap[tone], className)}>
      {children}
    </span>
  );
};
