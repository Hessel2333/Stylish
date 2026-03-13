"use client";

import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
  helperText?: string;
  valueText?: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const Slider = ({
  className,
  label,
  helperText,
  valueText,
  id,
  min = 0,
  max = 100,
  value,
  defaultValue,
  ...props
}: SliderProps) => {
  const generatedId = useId();
  const sliderId = id ?? generatedId;

  const minValue = Number(min);
  const maxValue = Number(max);
  const raw = value ?? defaultValue ?? minValue;
  const currentValue = clamp(Number(raw), minValue, maxValue);
  const percent = ((currentValue - minValue) / Math.max(1, maxValue - minValue)) * 100;

  return (
    <label className="grid gap-2 text-sm">
      {label ? (
        <span className="flex items-center justify-between gap-3 text-token-secondary">
          <span>{label}</span>
          <span className="text-xs text-token-tertiary">{valueText ?? currentValue}</span>
        </span>
      ) : null}
      <input
        id={sliderId}
        type="range"
        min={min}
        max={max}
        value={value}
        defaultValue={defaultValue}
        className={cn("ui-slider w-full", className)}
        style={{
          background: `linear-gradient(to right, var(--ui-slider-track-fill) 0%, var(--ui-slider-track-fill) ${percent}%, var(--ui-slider-track-bg) ${percent}%, var(--ui-slider-track-bg) 100%)`
        }}
        {...props}
      />
      {helperText ? <span className="text-xs text-token-tertiary">{helperText}</span> : null}
    </label>
  );
};
