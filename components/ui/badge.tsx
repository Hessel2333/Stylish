import { cn } from "@/lib/utils/cn";
import type { BadgeAppearance, BadgeTone } from "@/lib/theme/types";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  appearance?: BadgeAppearance;
  withIndicator?: boolean;
  className?: string;
};

const toneClassMap: Record<BadgeTone, string> = {
  neutral: "ui-badge-neutral",
  accent: "ui-badge-accent",
  success: "ui-badge-success",
  warning: "ui-badge-warning",
  danger: "ui-badge-danger"
};

const appearanceClassMap: Record<BadgeAppearance, string> = {
  meta: "ui-badge-appearance-meta",
  status: "ui-badge-appearance-status",
  counter: "ui-badge-appearance-counter"
};

export const Badge = ({ children, tone = "neutral", appearance = "meta", withIndicator, className }: BadgeProps) => {
  const shouldShowIndicator = withIndicator ?? (appearance === "status" && tone !== "neutral");

  return (
    <span className={cn("ui-badge", appearanceClassMap[appearance], toneClassMap[tone], className)}>
      {shouldShowIndicator ? <span className="ui-badge-indicator" aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  );
};
