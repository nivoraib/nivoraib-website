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
                ? "bg-brand-indigo/20 text-brand-lavender border-brand-indigo/40"
                : "bg-brand-light dark:bg-brand-indigo/20 text-brand-dark dark:text-brand-lavender border-brand-soft/50 dark:border-brand-indigo/30"
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
          isDark ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
