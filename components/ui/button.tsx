import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "danger";
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
  primary: "ui-button-primary",
  secondary: "ui-button-secondary",
  outlined: "ui-button-outlined",
  ghost: "ui-button-ghost",
  danger: "ui-button-danger"
};

export const Button = ({ className, variant = "primary", size = "md", type = "button", ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn("ui-button focus-ring", sizeClassMap[size], variantClassMap[variant], className)}
      {...props}
    />
  );
};
