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
      <div className="mb-[var(--space-lg)] flex flex-wrap items-center gap-2">
        <Badge tone="accent">{locale === "zh" ? "不变量模块顺序" : "Invariant Module Order"}</Badge>
        {moduleOrder.map((module) => (
          <Badge key={module}>{module}</Badge>
        ))}
      </div>
      <div className="grid gap-[var(--grid-gap)]">{children}</div>
    </PageShell>
  );
};
