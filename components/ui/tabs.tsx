"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

type TabsProps = {
  items: string[];
  defaultItem?: string;
  onChange?: (item: string) => void;
  className?: string;
  ariaLabel?: string;
};

export const Tabs = ({ items, defaultItem, onChange, className, ariaLabel = "tabs" }: TabsProps) => {
  const [active, setActive] = useState(defaultItem ?? items[0]);

  return (
    <div className={cn("theme-switcher", className)} role="tablist" aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = item === active;
        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => {
              setActive(item);
              onChange?.(item);
            }}
            className={cn(
              "token-tab focus-ring h-[var(--control-sm)] px-3 text-sm",
              isActive ? "token-tab-active" : "token-tab-idle"
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
