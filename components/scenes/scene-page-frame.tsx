"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";

type ScenePageFrameProps = {
  sceneName: string;
  description: string;
  moduleOrder: readonly string[];
  children: React.ReactNode;
};

export const ScenePageFrame = ({ sceneName, description, moduleOrder, children }: ScenePageFrameProps) => {
  const { locale } = useLocale();

  return (
    <PageShell title={sceneName} description={description}>
      <div className="mb-[var(--space-lg)]">
        <details className="surface-panel px-[var(--space-md)] py-[var(--space-sm)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2">
              <Badge tone="accent">{locale === "zh" ? "共享不变量" : "Shared Invariants"}</Badge>
              <span className="text-sm text-token-secondary">
                {locale === "zh" ? "查看模块顺序" : "View module order"}
              </span>
            </span>
            <span className="text-xs text-token-tertiary">{moduleOrder.length}</span>
          </summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {moduleOrder.map((module) => (
              <Badge key={module}>{module}</Badge>
            ))}
          </div>
        </details>
      </div>
      <div className="grid gap-[var(--grid-gap)]">{children}</div>
    </PageShell>
  );
};
