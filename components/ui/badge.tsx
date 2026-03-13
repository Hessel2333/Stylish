import { cn } from "@/lib/utils/cn";

type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const toneClassMap: Record<BadgeTone, string> = {
  neutral: "ui-badge-neutral",
  accent: "ui-badge-accent",
  success: "ui-badge-success",
  warning: "ui-badge-warning",
  danger: "ui-badge-danger"
};

export const Badge = ({ children, tone = "neutral", className }: BadgeProps) => {
  return <span className={cn("ui-badge", toneClassMap[tone], className)}>{children}</span>;
};
