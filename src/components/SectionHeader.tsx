import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex items-center gap-1.5", isCenter ? "justify-center" : "justify-start")}>
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border inline-flex items-center gap-1.5",
              isDark
                ? "bg-zinc-800 text-zinc-200 border-zinc-700"
                : "bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border-brand-soft/50 dark:border-zinc-700"
            )}
          >
            {badgeIcon}
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]",
          isDark ? "text-zinc-100" : "text-navy-900 dark:text-zinc-100"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            isDark ? "text-zinc-300" : "text-slate-600 dark:text-zinc-300"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
