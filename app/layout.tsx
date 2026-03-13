import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { buildThemeCssVarMap } from "@/lib/theme/css-vars";
import { defaultTheme } from "@/lib/theme/registry";

export const metadata: Metadata = {
  title: "Stylish：场景迁移演示",
  description: "同一产品场景在三种设计语言启发下的可比较表达。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialThemeVars = buildThemeCssVarMap(defaultTheme) as CSSProperties;

  return (
    <html lang="zh" data-theme={defaultTheme} style={initialThemeVars}>
      <body>
        <ThemeProvider>
          <LocaleProvider>
            <SiteHeader />
            <main>{children}</main>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
