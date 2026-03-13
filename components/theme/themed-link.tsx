"use client";

import Link, { type LinkProps } from "next/link";
import { useTheme } from "@/components/theme/theme-provider";
import { useLocale } from "@/components/i18n/locale-provider";
import { localeQueryKey } from "@/lib/i18n/storage";
import { appearanceQueryKey } from "@/lib/theme/appearance";
import { themeQueryKey } from "@/lib/theme/storage";

type ThemedLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

export const ThemedLink = ({ href, children, ...props }: ThemedLinkProps) => {
  const { theme, appearance } = useTheme();
  const { locale } = useLocale();

  const safeHref =
    typeof href === "string"
      ? (() => {
          const [base, hash = ""] = href.split("#");
          const [pathname, search = ""] = base.split("?");
          const params = new URLSearchParams(search);
          params.set(themeQueryKey, theme);
          params.set(localeQueryKey, locale);
          if (theme === "apple-hig") {
            params.set(appearanceQueryKey, appearance);
          } else {
            params.delete(appearanceQueryKey);
          }
          const queryString = params.toString();
          const rebuilt = queryString ? `${pathname}?${queryString}` : pathname;
          return hash ? `${rebuilt}#${hash}` : rebuilt;
        })()
      : href;

  return (
    <Link href={safeHref} {...props}>
      {children}
    </Link>
  );
};
