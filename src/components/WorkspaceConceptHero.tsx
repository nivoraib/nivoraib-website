import React from "react";
import { 
  Sparkles, ShieldCheck, BookOpen, Layers, Clock, FileCheck2, 
  GraduationCap, CheckCircle2, Lock, Cpu
} from "lucide-react";
import ExploreWorkspaceButton from "@/components/ExploreWorkspaceButton";

export default function WorkspaceConceptHero() {

  const coreModules = [
    {
      title: "Unit Planner",
      scope: "4–8 Week Inquiry Units",
      detail: "Cross-topic syllabus mapping, conceptual understandings, ATL skill progression, and TOK touchpoints.",
      icon: Layers,
      tag: "Academic Planning",
    },
    {
      title: "Lesson Planner",
      scope: "45–90 Min Periods",
      detail: "Minute-by-minute activity pacing, differentiated tiers (Standard, EAL, SEN, Extension), and formative checks.",
      icon: Clock,
      tag: "Instructional Design",
    },
    {
      title: "Assessment Generator",
      scope: "Paper 1, 2 & 3 Authentic Styling",
      detail: "Authoritative IB command terms ('Explain' vs 'Evaluate'), verified mark allocations, and full markschemes.",
      icon: FileCheck2,
      tag: "Summative & Items",
    },
    {
      title: "IA & Core Assistant",
      scope: "Criterion-Referenced Scaffolding",
      detail: "Formative research question feasibility and criterion A–E rubrics with zero direct ghostwriting.",
      icon: GraduationCap,
      tag: "Coursework & Moderation",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-card overflow-hidden transition-all duration-200">
      {/* Concept Architecture Window Bar */}
      <div className="bg-navy-900 text-white px-5 sm:px-7 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-navy-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500/80" />
          </div>
          <span className="text-xs font-mono font-medium text-slate-300">
            nivoraib // academic-workspace-architecture
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-semibold text-brand-lavender bg-navy-850 px-2.5 py-1 rounded-lg border border-navy-700">
            Stage 1 Workspace In Preparation
          </span>
        </div>
      </div>

      {/* Main Architectural Concept Canvas */}
      <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-slate-50/50 dark:bg-navy-950/60">
        {/* Top: The Grounded Workspace Framework Banner */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-navy-800 shadow-subtle space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-lavender bg-brand-light dark:bg-brand-indigo/20 px-2.5 py-0.5 rounded-full border border-brand-soft/40 dark:border-brand-indigo/30">
                  The Core Concept
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Multi-Agent Orchestration • 5 Scoped Context Layers
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
                One Curriculum-Grounded Environment for IB Educators
              </h2>
            </div>

            <ExploreWorkspaceButton />
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Nivoraib unites repetitive DP academic workflows into one teacher-centered surface. Instead of asking teachers to rebuild context across fragmented generic chatbots, specialized agents operate over official curriculum documents, persistent lesson histories, and school guidelines.
          </p>

          {/* 5 Scoped Context Layers Flow */}
          <div className="pt-2 border-t border-slate-100 dark:border-navy-800 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Continuous Grounding Streams:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-blue-900 dark:text-blue-300 font-medium text-[11px] flex items-center gap-1.5 truncate">
                <BookOpen className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="truncate">IB Subject Guides</span>
              </div>
              <div className="p-2 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-300 font-medium text-[11px] flex items-center gap-1.5 truncate">
                <BookOpen className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="truncate">Teacher Resources</span>
              </div>
              <div className="p-2 rounded-lg bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/70 dark:border-purple-900/60 text-purple-900 dark:text-purple-300 font-medium text-[11px] flex items-center gap-1.5 truncate">
                <BookOpen className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0" />
                <span className="truncate">School Timetables</span>
              </div>
              <div className="p-2 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/60 text-amber-900 dark:text-amber-300 font-medium text-[11px] flex items-center gap-1.5 truncate">
                <BookOpen className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="truncate">Previous Cohorts</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-2 rounded-lg bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-900/60 text-rose-900 dark:text-rose-300 font-medium text-[11px] flex items-center gap-1.5 truncate">
                <BookOpen className="w-3 h-3 text-rose-600 dark:text-rose-400 shrink-0" />
                <span className="truncate">Current Task Scope</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Academic Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coreModules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200/90 dark:border-navy-800 p-5 space-y-3 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-light dark:bg-navy-800 text-brand-dark dark:text-brand-lavender flex items-center justify-center border border-brand-soft/40 dark:border-navy-700 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-800 px-2.5 py-0.5 rounded-full border border-transparent dark:border-navy-700">
                    {mod.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-navy-900 dark:text-white group-hover:text-brand-indigo dark:group-hover:text-brand-lavender transition-colors duration-150">
                    {mod.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-dark dark:text-brand-lavender mt-0.5">
                    {mod.scope}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {mod.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reliability Guarantee Floor */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200/90 dark:border-navy-800 p-5 sm:p-6 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-200/80 dark:border-emerald-800/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy-900 dark:text-white">
                Deterministic State Transition Invariant
              </div>
              <div className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                Generated ≠ Validated ≠ Teacher Approved ≠ Published
              </div>
            </div>
          </div>

          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-navy-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-navy-700">
            5 Zero-Token Code Verification Gates
          </span>
        </div>
      </div>
    </div>
  );
}
