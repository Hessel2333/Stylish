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
          ? "任务流与交互目标保持一致，在三种主题语言下对比日常使用体验。"
          : "Daily task flow with identical interaction goals and shared mock data under three theme languages."
      }
      moduleOrder={sceneInvariants.task.modules[locale]}
    >
      <TaskAppScene />
    </ScenePageFrame>
  );
}
