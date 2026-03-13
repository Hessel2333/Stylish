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
          ? "运营工作台结构保持不变，通过主题切换观察密度与控件气质变化。"
          : "Operational dashboard structure remains invariant while density and control tone shift by theme."
      }
      moduleOrder={sceneInvariants.admin.modules[locale]}
    >
      <AdminWorkspaceScene />
    </ScenePageFrame>
  );
}
