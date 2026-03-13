import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { LocaleProvider } from "@/components/i18n/locale-provider";

export const metadata: Metadata = {
  title: "Stylish：场景迁移演示",
  description: "同一产品场景在三种设计语言启发下的可比较表达。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
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
