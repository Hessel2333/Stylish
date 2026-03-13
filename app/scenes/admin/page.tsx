"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { AdminWorkspaceScene } from "@/components/patterns/scenes/admin-workspace-scene";
import { ScenePageFrame } from "@/components/scenes/scene-page-frame";
import { sceneInvariants } from "@/lib/theme/invariants";

export default function AdminScenePage() {
  const { locale } = useLocale();

  return (
    <ScenePageFrame
      sceneName={sceneInvariants.admin.title[locale]}
      description={
        locale === "zh"
          ? "运营工作台结构固定，重点观察密度与操作节奏变化。"
          : "Admin structure stays fixed; compare density and operation rhythm by theme."
      }
      moduleOrder={sceneInvariants.admin.modules[locale]}
    >
      <AdminWorkspaceScene />
    </ScenePageFrame>
  );
}
