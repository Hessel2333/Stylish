"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { cn } from "@/lib/utils/cn";

type PageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export const PageShell = ({ title, description, children, className }: PageShellProps) => {
  const { locale } = useLocale();

  return (
    <div className={cn("mx-auto w-[min(var(--content-max-width),92vw)] pb-[var(--space-xxl)] pt-[var(--space-xl)]", className)}>
      <div className="mb-[var(--space-xl)]">
        <p className="eyebrow mb-2">{locale === "zh" ? "Northstar 工作空间" : "Northstar Workspace"}</p>
        <h1 className="title-display text-[var(--scale-h1)] text-token-primary">{title}</h1>
        <p className="mt-3 max-w-3xl text-token-secondary">{description}</p>
      </div>
      {children}
    </div>
  );
};
