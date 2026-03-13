"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { TaskAppScene } from "@/components/patterns/scenes/task-app-scene";
import { ScenePageFrame } from "@/components/scenes/scene-page-frame";
import { sceneInvariants } from "@/lib/theme/invariants";

export default function TaskScenePage() {
  const { locale } = useLocale();

  return (
    <ScenePageFrame
      sceneName={sceneInvariants.task.title[locale]}
      description={
        locale === "zh"
          ? "任务主流程一致，在三主题下比较日常使用体验。"
          : "Same daily task flow, compared across three theme languages."
      }
      moduleOrder={sceneInvariants.task.modules[locale]}
    >
      <TaskAppScene />
    </ScenePageFrame>
  );
}
