import { cn } from "@/lib/utils/cn";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = ({ className, label, helperText, id, ...props }: InputProps) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="grid gap-2 text-sm">
      {label ? <span className="text-token-secondary">{label}</span> : null}
      <input
        id={inputId}
        className={cn(
          "ui-input focus-ring h-[var(--control-md)] w-full rounded-[var(--input-radius)] px-3 text-[var(--text-primary)] transition-colors duration-[var(--motion-fast)] placeholder:text-token-tertiary",
          className
        )}
        {...props}
      />
      {helperText ? <span className="text-xs text-token-tertiary">{helperText}</span> : null}
    </label>
  );
};
