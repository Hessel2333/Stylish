"use client";

import { useId } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  helperText?: string;
  options: SelectOption[];
};

export const Select = ({ className, label, helperText, id, options, ...props }: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <label className="grid gap-2 text-sm">
      {label ? <span className="text-token-secondary">{label}</span> : null}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "ui-select h-[var(--control-md)] w-full appearance-none rounded-[var(--ui-select-radius,var(--input-radius))] px-3 pr-9 text-[var(--text-primary)] transition-colors duration-[var(--motion-fast)]",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-sm text-[var(--ui-select-indicator)]">
          ▾
        </span>
      </div>
      {helperText ? <span className="text-xs text-token-tertiary">{helperText}</span> : null}
    </label>
  );
};
