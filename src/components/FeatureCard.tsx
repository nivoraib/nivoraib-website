"use client";

import React from "react";
import Link from "next/link";
import { 
  Layers, Clock, Network, FileCheck2, Database, ShieldAlert, 
  GraduationCap, BookOpen, Sparkles, FolderSearch, HardDrive, 
  ShieldCheck, UserCheck, ArrowRight, Check 
} from "lucide-react";
import { FeatureItem } from "@/data/features";
import { useComingSoon } from "@/components/ComingSoonModal";

const ICON_MAP: Record<string, any> = {
  Layers, Clock, Network, FileCheck2, Database, ShieldAlert,
  GraduationCap, BookOpen, Sparkles, FolderSearch, HardDrive,
  ShieldCheck, UserCheck
};

export default function FeatureCard({ feature }: { feature: FeatureItem }) {
  const IconComponent = ICON_MAP[feature.icon] || Layers;
  const { openComingSoon } = useComingSoon();
  const isDashboardLink = feature.ctaHref?.startsWith("/dashboard");

  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-navy-800 bg-white dark:bg-navy-900 p-6 sm:p-7 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between space-y-6 group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-brand-light dark:bg-navy-800 text-brand-dark dark:text-brand-lavender flex items-center justify-center border border-brand-soft/50 dark:border-navy-700 group-hover:scale-105 transition-transform duration-200">
            <IconComponent className="w-5 h-5" />
          </div>
          {feature.badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              {feature.badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-brand-indigo dark:group-hover:text-brand-lavender transition-colors duration-150">
            {feature.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {feature.summary}
          </p>
        </div>

        <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-navy-800">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {feature.ctaText && feature.ctaHref && (
        <div className="pt-2">
          {isDashboardLink ? (
            <button
              onClick={() => openComingSoon(feature.title)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark dark:text-brand-lavender hover:text-brand-indigo dark:hover:text-white transition-colors duration-150 group-hover:translate-x-0.5 cursor-pointer"
            >
              <span>{feature.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              href={feature.ctaHref}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark dark:text-brand-lavender hover:text-brand-indigo dark:hover:text-white transition-colors duration-150 group-hover:translate-x-0.5"
            >
              <span>{feature.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
