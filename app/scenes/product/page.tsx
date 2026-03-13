"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ProductMarketingScene } from "@/components/patterns/scenes/product-marketing-scene";
import { ScenePageFrame } from "@/components/scenes/scene-page-frame";
import { sceneInvariants } from "@/lib/theme/invariants";

export default function ProductScenePage() {
  const { locale } = useLocale();

  return (
    <ScenePageFrame
      sceneName={sceneInvariants.product.title[locale]}
      description={
        locale === "zh"
          ? "同一转化叙事，切换主题后只比较表达差异。"
          : "One conversion storyline, theme switch only changes visual expression."
      }
      moduleOrder={sceneInvariants.product.modules[locale]}
    >
      <ProductMarketingScene />
    </ScenePageFrame>
  );
}
