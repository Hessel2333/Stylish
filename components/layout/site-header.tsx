"use client";

import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { AppearanceSwitcher } from "@/components/theme/appearance-switcher";
import { ThemedLink } from "@/components/theme/themed-link";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLocale } from "@/components/i18n/locale-provider";
import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";

const navItems = {
  zh: [
    { href: "/", label: "首页" },
    { href: "/scenes/product", label: "产品场景" },
    { href: "/scenes/admin", label: "管理场景" },
    { href: "/scenes/task", label: "任务场景" },
    { href: "/methodology", label: "方法论" }
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/scenes/product", label: "Product" },
    { href: "/scenes/admin", label: "Admin" },
    { href: "/scenes/task", label: "Task" },
    { href: "/methodology", label: "Methodology" }
  ]
} as const;

export const SiteHeader = () => {
  const pathname = usePathname();
  const { locale } = useLocale();
  const items = navItems[locale];

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[color:color-mix(in_hsl,var(--bg)_76%,white_24%)] backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--toolbar-height)] w-[min(var(--content-max-width),92vw)] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ThemedLink href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-[calc(var(--radius-sm)+2px)] bg-[var(--accent)] text-xs font-semibold text-white">
              SS
            </span>
            <div>
              <p className="font-[var(--font-display)] text-sm font-semibold tracking-[0.01em]">Stylish</p>
              <p className="text-token-tertiary text-[0.7rem] leading-none">
                {locale === "zh" ? "场景迁移" : "Scenario Shift"}
              </p>
            </div>
          </ThemedLink>
          <nav className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <ThemedLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors duration-[var(--motion-fast)]",
                    active
                      ? "bg-[var(--accent-soft)] text-[var(--text-primary)]"
                      : "text-token-secondary hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {item.label}
                </ThemedLink>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <AppearanceSwitcher />
          <ThemeSwitcher compact />
          <a
            className="hidden rounded-[var(--radius-sm)] border border-[var(--border-default)] px-3 py-2 text-xs text-token-secondary transition hover:border-[var(--border-strong)] hover:text-token-primary sm:inline-flex"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            {locale === "zh" ? "代码仓库" : "GitHub"}
          </a>
        </div>
      </div>
    </header>
  );
};
