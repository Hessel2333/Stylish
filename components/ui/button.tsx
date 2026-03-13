import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "h-[var(--control-sm)] px-3 text-[0.84rem]",
  md: "h-[var(--control-md)] px-4 text-sm",
  lg: "h-[var(--control-lg)] px-5 text-[0.98rem]"
};

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white border-transparent shadow-[var(--button-primary-shadow)] hover:brightness-[1.04] active:translate-y-px",
  secondary:
    "bg-[var(--accent-soft)] text-[var(--text-primary)] border-[var(--border-default)] hover:border-[var(--border-strong)]",
  ghost:
    "bg-transparent text-[var(--text-primary)] border-[var(--border-default)] hover:bg-[var(--surface-muted)]",
  danger: "bg-[var(--danger)] text-white border-transparent hover:brightness-[0.96]"
};

export const Button = ({ className, variant = "primary", size = "md", type = "button", ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--button-radius)] border font-semibold tracking-[var(--button-letter-spacing)] transition-all duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-ring",
        sizeClassMap[size],
        variantClassMap[variant],
        className
      )}
      {...props}
    />
  );
};
