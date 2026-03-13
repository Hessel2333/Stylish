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
          ? "同一转化叙事，在不同主题 token 下形成可比较的视觉表达。"
          : "Same conversion narrative, different design expression through theme tokens."
      }
      moduleOrder={sceneInvariants.product.modules[locale]}
    >
      <ProductMarketingScene />
    </ScenePageFrame>
  );
}
