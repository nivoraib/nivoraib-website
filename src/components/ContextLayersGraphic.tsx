import React from "react";
import { BookOpen, FileText, School, History, Target, ArrowDown, CheckCircle2 } from "lucide-react";

export default function ContextLayersGraphic() {
  const layers = [
    {
      step: "01",
      title: "Official IB Curriculum",
      subtitle: "Subject guides, command terms, criteria",
      icon: BookOpen,
      lightColor: "bg-blue-50/80 text-blue-800 border-blue-200/80",
      darkColor: "dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/60",
    },
    {
      step: "02",
      title: "Teacher Documents",
      subtitle: "Lesson notes, lab manuals, slides",
      icon: FileText,
      lightColor: "bg-indigo-50/80 text-indigo-800 border-indigo-200/80",
      darkColor: "dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/60",
    },
    {
      step: "03",
      title: "School Policies",
      subtitle: "Lab safety, grading scale, period times",
      icon: School,
      lightColor: "bg-purple-50/80 text-purple-800 border-purple-200/80",
      darkColor: "dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900/60",
    },
    {
      step: "04",
      title: "Previous Work",
      subtitle: "Past unit assessments, student scaffolds",
      icon: History,
      lightColor: "bg-amber-50/80 text-amber-900 border-amber-200/80",
      darkColor: "dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/60",
    },
    {
      step: "05",
      title: "Current Task Context",
      subtitle: "Today's specific learning outcome",
      icon: Target,
      lightColor: "bg-rose-50/80 text-rose-800 border-rose-200/80",
      darkColor: "dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* 5 Input Pillars — Responsive Bento Composition:
          - Desktop (xl): 5 columns
          - Tablet (md): 6-column Bento (Row 1: 3 cards span 2, Row 2: 2 cards span 3)
          - Mobile: 1 column
      */}
      <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-5 gap-3.5">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          // Bento span classes for tablet (md: 6-column grid):
          // First 3 items span 2 columns (3 * 2 = 6). Next 2 items span 3 columns (2 * 3 = 6).
          const tabletSpan = index < 3 ? "md:col-span-2 xl:col-span-1" : "md:col-span-3 xl:col-span-1";

          return (
            <div
              key={layer.step}
              className={`${tabletSpan} p-4 sm:p-5 rounded-2xl border ${layer.lightColor} ${layer.darkColor} bg-white dark:bg-navy-900 flex flex-col justify-between space-y-4 shadow-subtle hover:shadow-card transition-all group`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                  {layer.step}
                </span>
                <div className={`p-2 rounded-xl ${layer.lightColor} ${layer.darkColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-navy-900 dark:text-white text-sm leading-snug">
                  {layer.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {layer.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center gap-1 text-[11px] font-semibold text-brand-dark dark:text-brand-lavender">
                <span>Scoped Context Stream</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Convergence Connector */}
      <div className="flex flex-col items-center justify-center py-2 text-slate-400">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-navy-900 px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-navy-800 shadow-2xs">
          <span>5 Scoped Context Streams Converge</span>
          <ArrowDown className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-lavender" />
        </div>
      </div>

      {/* Grounded AI Output Result Box */}
      <div className="rounded-2xl border border-emerald-300/80 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/60 px-2.5 py-0.5 rounded-full">
                  Curriculum-Grounded Result
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Zero Hallucination of IB Syllabus
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 dark:text-white">
                Grounded, Structured, &amp; Deterministically Validated Output
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Every generated lesson plan or assessment adheres strictly to your school&rsquo;s timeline and official IB Diploma standards.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 bg-white dark:bg-navy-900 px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-2xs">
              Teacher Decides &amp; Publishes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
