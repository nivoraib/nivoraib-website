import React from "react";
import { ShieldCheck, Layers, BookOpen, UserCheck, Brain, Lock } from "lucide-react";

export default function StatCard() {
  const principles = [
    {
      metric: "5 Layers",
      label: "Context Grounding",
      detail: "Curriculum, teacher resources, school policies, previous work, and current task scope.",
      icon: Layers,
    },
    {
      metric: "10 Agents",
      label: "Specialized Roles",
      detail: "Domain-tuned prompt harnesses for unit planning, exam writing, IA guidance, and TOK.",
      icon: Brain,
    },
    {
      metric: "100%",
      label: "Teacher Decides",
      detail: "Zero autonomous publishing. Every lesson and assessment requires explicit teacher sign-off.",
      icon: UserCheck,
    },
    {
      metric: "5 Gates",
      label: "Deterministic Auditing",
      detail: "Programmatic verification of command terms, timing arithmetic, syllabus coverage, and schemas.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200/90 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 p-6 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100 tracking-tight">
                  {item.metric}
                </span>
                <div className="p-2.5 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border border-brand-soft/40 dark:border-zinc-700 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sm text-navy-900 dark:text-zinc-100">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified System Principle</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
