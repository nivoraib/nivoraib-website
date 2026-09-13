"use client";

import React from "react";
import CTASection from "@/components/CTASection";
import { ROADMAP_DATA } from "@/data/roadmap";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useComingSoon } from "@/components/ComingSoonModal";

export default function RoadmapClient() {
  const { openComingSoon } = useComingSoon();

  return (
    <>
      {/* Authenticity Policy Notice */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-50 dark:bg-zinc-850 border border-slate-200 dark:border-zinc-700 text-xs text-slate-600 dark:text-zinc-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              <strong>Authenticity Policy:</strong> Features listed under Stage 2 and Stage 3 represent planned milestones and are not claimed as production-ready.
            </span>
          </div>
          <button
            onClick={() => openComingSoon("Roadmap Status")}
            className="shrink-0 text-brand-indigo dark:text-zinc-200 font-bold hover:underline cursor-pointer text-xs"
          >
            Pilot Cohort Status →
          </button>
        </div>
      </section>

      {/* 2. Timeline Stages */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {ROADMAP_DATA.map((stage, idx) => (
          <div
            key={stage.stageNumber}
            className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200/90 dark:border-zinc-700 p-6 sm:p-8 lg:p-10 shadow-subtle hover:shadow-card transition-all space-y-6 relative overflow-hidden"
          >
            {/* Top Phase Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-zinc-800 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-slate-500 dark:text-zinc-400">
                    {stage.stageNumber}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${stage.badgeColor}`}>
                    {stage.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100">
                  {stage.stageName}
                </h3>
              </div>

              <div className="text-xs font-mono font-semibold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 self-start sm:self-auto">
                {stage.timeframe}
              </div>
            </div>

            {/* Description & Headline */}
            <div className="space-y-2">
              <h4 className="text-base font-bold text-brand-dark dark:text-zinc-200">
                {stage.headline}
              </h4>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {stage.description}
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {stage.deliverables.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className={`p-4 rounded-xl border space-y-1.5 ${
                    item.isKeyDifferentiator
                      ? "bg-emerald-50/40 dark:bg-emerald-950/30 border-emerald-200/90 dark:border-emerald-800/60"
                      : "bg-slate-50/60 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-sm text-navy-900 dark:text-zinc-100">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${item.isKeyDifferentiator ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-zinc-400"}`} />
                      <span>{item.title}</span>
                    </div>
                    {item.isKeyDifferentiator && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                        Key Invariant
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA */}
      <CTASection
        badgeText="Product Roadmap"
        title="Help Shape the Stage 2 Pedagogical Roadmap"
        subtitle="We collaborate directly with DP subject teachers to prioritize model-based auditing rules and criterion moderation tools."
        primaryCtaText="Schedule Teacher Interview"
        primaryCtaHref="/contact?reason=research"
        secondaryCtaText="Explore Platform"
        secondaryCtaHref="/dashboard"
      />
    </>
  );
}
