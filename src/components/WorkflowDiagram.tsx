"use client";

import React, { useState } from "react";
import { 
  MessageSquare, Brain, Search, Bot, FileCode, ShieldCheck, UserCheck, Share2, 
  ArrowRight, CheckCircle2 
} from "lucide-react";

export default function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Teacher Request",
      desc: "Teacher expresses intent in plain natural language (e.g. 90-min DP Physics lesson, Paper 2 economics test, or IA criterion feedback).",
      icon: MessageSquare,
      output: "Raw pedagogical intent + constraints",
    },
    {
      num: "02",
      title: "Intent Understanding",
      desc: "System parses subject, cohort level (SL/HL), topic codes, learning objectives, and time limits.",
      icon: Brain,
      output: "Structured execution contract",
    },
    {
      num: "03",
      title: "Curriculum & Context Retrieval",
      desc: "Fetches official IB syllabus guide, teacher lab notes, school policy, and previous unit history using 5-layer RAG.",
      icon: Search,
      output: "Zero-rot scoped context package",
    },
    {
      num: "04",
      title: "Specialized AI Agent",
      desc: "Dispatches the contract to a domain-tuned pedagogical agent (e.g. Physics Lesson Planner, Question Bank Agent).",
      icon: Bot,
      output: "Role-specific prompt harness",
    },
    {
      num: "05",
      title: "Structured Generation",
      desc: "Produces rich, multi-tiered instructional materials strictly conforming to Pydantic typing specifications.",
      icon: FileCode,
      output: "Candidate instructional artifact",
    },
    {
      num: "06",
      title: "Deterministic Validation",
      desc: "5 zero-token programmatic gates test timing math, syllabus statements, command terms, and criteria weights.",
      icon: ShieldCheck,
      output: "Verifiable Audit Report ID",
    },
    {
      num: "07",
      title: "Teacher Review",
      desc: "Teacher inspects candidate artifact alongside audit report, edits nuances, and decides whether to approve.",
      icon: UserCheck,
      output: "Teacher approval timestamp",
    },
    {
      num: "08",
      title: "Save, Reuse & Export",
      desc: "Saved to persistent course memory, exported to PDF/Word/LMS, and cached for future cross-unit recall.",
      icon: Share2,
      output: "Classroom-ready publishable artifact",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* 8-Step Interactive Grid (4 columns desktop, 2 tablet, 1 mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-4 rounded-xl border text-left transition-all relative group ${
                isSelected
                  ? "bg-white dark:bg-navy-900 border-brand-indigo ring-2 ring-brand-indigo/20 shadow-md scale-[1.02]"
                  : "bg-slate-50/70 dark:bg-navy-900/60 border-slate-200 dark:border-navy-800 hover:bg-white dark:hover:bg-navy-850 hover:border-slate-300 dark:hover:border-navy-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs font-bold ${isSelected ? "text-brand-indigo dark:text-brand-lavender" : "text-slate-500 dark:text-slate-400"}`}>
                  Step {step.num}
                </span>
                <div className={`p-2 rounded-lg ${isSelected ? "bg-brand-indigo text-white" : "bg-white dark:bg-navy-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-700"}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-extrabold text-sm text-navy-900 dark:text-white leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                {step.desc}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-[11px]">
                <span className="font-mono text-slate-500 dark:text-slate-400 truncate max-w-[140px]">
                  {step.output}
                </span>
                <span className={`font-semibold ${isSelected ? "text-brand-indigo dark:text-brand-lavender" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"}`}>
                  {isSelected ? "Active" : "Inspect →"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Step Detail Inspector */}
      <div className="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-lavender bg-brand-light dark:bg-brand-indigo/20 px-2.5 py-0.5 rounded-full border border-brand-soft/50 dark:border-brand-indigo/30">
              Phase {steps[activeStep].num} Deep Dive
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">• Click any step above to explore</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            {steps[activeStep].title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </div>

        <div className="shrink-0 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-navy-800 space-y-2 min-w-[240px]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Step Artifact Contract:
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-navy-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{steps[activeStep].output}</span>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            State validated &amp; persisted to task graph.
          </div>
        </div>
      </div>
    </div>
  );
}
