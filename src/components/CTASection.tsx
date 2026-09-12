"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useComingSoon } from "@/components/ComingSoonModal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  onPrimaryClick?: () => void;
}

export default function CTASection({
  title = "Ready to Experience the AI Workspace Built for IB Teachers?",
  subtitle = "Step inside a curriculum-grounded environment where specialized agents generate, deterministic rules validate, and educators remain in total control.",
  badgeText = "Built for IB Diploma Educators",
  primaryCtaText = "Explore the Platform",
  primaryCtaHref,
  secondaryCtaText = "Talk to Us",
  secondaryCtaHref = "/contact",
  onPrimaryClick,
}: CTASectionProps) {
  const { openComingSoon } = useComingSoon();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else if (!primaryCtaHref || primaryCtaHref === "/dashboard") {
      openComingSoon();
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white overflow-hidden border-t border-slate-200 dark:border-slate-800">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/5 dark:bg-brand-indigo/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-light/80 dark:bg-navy-900 border border-brand-soft/60 dark:border-brand-indigo/40 text-xs font-mono text-brand-dark dark:text-brand-lavender">
          <Sparkles className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-lavender" />
          <span>{badgeText}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight text-navy-900 dark:text-white">
          {title}
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {primaryCtaHref && primaryCtaHref !== "/dashboard" ? (
            <Link
              href={primaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-navy-950 font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 group"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </Link>
          ) : (
            <button
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-navy-950 font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 group cursor-pointer"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </button>
          )}

          <Link
            href={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-navy-850 dark:hover:bg-navy-800 text-slate-800 dark:text-white font-semibold text-sm border border-slate-300 dark:border-navy-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 shadow-2xs"
          >
            <span>{secondaryCtaText}</span>
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Curriculum Grounded
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            5 Deterministic Gates
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Teacher Decides &amp; Publishes
          </span>
        </div>
      </div>
    </section>
  );
}
