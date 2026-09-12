"use client";

import React, { useState } from "react";
import { 
  Sparkles, CheckCircle2, Clock, BookOpen, ShieldCheck, ArrowRight,
  Layers, UserCheck, RefreshCw, FileText, ChevronRight, Eye
} from "lucide-react";

export default function HeroWorkspaceMockup() {
  const [activeTab, setActiveTab] = useState<"lesson" | "unit" | "assessment">("lesson");
  const [auditStep, setAuditStep] = useState<number>(3); // 1=Generated, 2=Validating, 3=Validated, 4=Approved

  const demoData = {
    lesson: {
      agent: "Biology Lesson Planner Agent",
      prompt: "Generate a 90-minute Higher Level (HL) lesson on Cellular Respiration (Topic B.1.2) with differentiated inquiry for standard and EAL students.",
      contexts: [
        { label: "IB DP Biology (2025)", type: "Curriculum" },
        { label: "Lab Safety Protocol Rev 4", type: "School Policy" },
        { label: "Mitochondria Lab Prep Note", type: "Teacher Resource" },
        { label: "Unit 3 Summative Scope", type: "Previous Work" }
      ],
      duration: "90 Minutes",
      checks: [
        { title: "Timing Arithmetic", detail: "5 min hook + 25 min lab + 35 min analysis + 15 min check + 10 min exit = 90 min", passed: true },
        { title: "Command-Term Verification", detail: "Explicit use of 'Explain', 'Differentiate', and 'Evaluate' (IB taxonomy)", passed: true },
        { title: "Syllabus Statement B.1.2", detail: "Glycolysis substrate-level phosphorylation covered", passed: true }
      ],
      outputTitle: "HL Biology: Cellular Respiration & ATP Synthase Dynamics",
      status: "VALIDATED",
      nextAction: "Ready for Teacher Review"
    },
    unit: {
      agent: "Unit Planner Agent",
      prompt: "Construct a 4-week inquiry unit for Chemistry HL on Chemical Kinetics, integrating TOK Knowledge Questions on experimental certainty.",
      contexts: [
        { label: "IB DP Chemistry Subject Guide", type: "Curriculum" },
        { label: "Lab Inventory & Safety Roster", type: "School Policy" },
        { label: "2025 Grade Boundaries Archive", type: "Previous Work" }
      ],
      duration: "4 Weeks (16 Hours)",
      checks: [
        { title: "Hour Budget Validation", detail: "16 hours scheduled across theory, titration lab, and formative check", passed: true },
        { title: "TOK Integration", detail: "Knowledge Question mapped to Area of Knowledge: Natural Sciences", passed: true },
        { title: "ATL Skill Ladder", detail: "Critical Thinking & Self-Management mapped", passed: true }
      ],
      outputTitle: "Unit Plan: Chemical Kinetics, Rate Laws & Catalyst Selectivity",
      status: "VALIDATED",
      nextAction: "Ready for Teacher Review"
    },
    assessment: {
      agent: "Assessment Generator Agent",
      prompt: "Produce a 40-mark Paper 2 Section A exam on Macroeconomics for SL Economics, complete with official markschemes and alternative answers.",
      contexts: [
        { label: "IB DP Economics Guide", type: "Curriculum" },
        { label: "Nov 2025 Specimen Conventions", type: "Curriculum" },
        { label: "Department Weighting Standard", type: "School Policy" }
      ],
      duration: "40 Marks",
      checks: [
        { title: "Mark Allocation Arithmetic", detail: "Q1 (4m) + Q2 (6m) + Q3 (10m) + Q4 (20m) = 40 Marks", passed: true },
        { title: "Command Term Weights", detail: "'Discuss' (8m) and 'Evaluate' (12m) verified", passed: true },
        { title: "Markscheme Schema", detail: "Level descriptors and error-carried-forward criteria checked", passed: true }
      ],
      outputTitle: "Section A Summative: Fiscal Policy & Inflationary Pressures",
      status: "VALIDATED",
      nextAction: "Ready for Teacher Review"
    }
  };

  const current = demoData[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-navy-900/10 bg-white shadow-2xl overflow-hidden transition-all">
      {/* Workspace App Window Header */}
      <div className="bg-navy-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-navy-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/90" />
            <div className="w-3 h-3 rounded-full bg-amber-500/90" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
          </div>
          <span className="text-xs font-mono text-slate-300 ml-2">
            nivoraib-workspace // academic-workspace
          </span>
        </div>

        {/* Workflow Tab Switcher */}
        <div className="flex items-center bg-navy-850 p-1 rounded-xl border border-navy-700/60">
          <button
            onClick={() => setActiveTab("lesson")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "lesson"
                ? "bg-brand-indigo text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Lesson Planner
          </button>
          <button
            onClick={() => setActiveTab("unit")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "unit"
                ? "bg-brand-indigo text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Unit Planner
          </button>
          <button
            onClick={() => setActiveTab("assessment")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "assessment"
                ? "bg-brand-indigo text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Assessment
          </button>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6 bg-slate-50/50">
        {/* Top: Teacher Prompt & Agent Header */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Active Agent
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-light text-brand-dark border border-brand-soft/40">
                <Sparkles className="w-3.5 h-3.5" />
                {current.agent}
              </span>
            </div>
            <div className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Scope: {current.duration}
            </div>
          </div>

          {/* Teacher Request Text */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm text-navy-900 font-medium leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo block mb-1">
              Teacher Request:
            </span>
            &ldquo;{current.prompt}&rdquo;
          </div>

          {/* 5 Grounding Context Chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Active Context Layers:
            </span>
            <div className="flex flex-wrap gap-2">
              {current.contexts.map((ctx, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
                >
                  <BookOpen className="w-3 h-3 text-brand-indigo" />
                  <span className="font-semibold text-slate-500 text-[10px] uppercase">
                    {ctx.type}:
                  </span>
                  {ctx.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: The Reliability State Bar */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Deterministic Verification State
            </span>
            <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Audit Status: 3/3 Checks Passed
            </span>
          </div>

          {/* Stepper showing Generated -> Validated -> Teacher Review */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
              1. GENERATED
            </div>
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
              2. AUDITING
            </div>
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 ring-2 ring-emerald-500/20">
              3. VALIDATED ✓
            </div>
            <div className="p-2 rounded-lg bg-brand-light text-brand-dark border border-brand-soft/60 animate-pulse">
              4. TEACHER REVIEW
            </div>
          </div>

          {/* Deterministic checks list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
            {current.checks.map((chk, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2 text-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-navy-900">{chk.title}</div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    {chk.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Candidate Artifact Preview & Teacher Decision Bar */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-indigo" />
              <h4 className="font-bold text-navy-900 text-sm sm:text-base">
                {current.outputTitle}
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-slate-500">
              Ready for Export to Word / PDF / ManageBac
            </span>
          </div>

          <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80 font-mono text-xs text-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-500 text-[11px]">
              <span>[Snippet: Paced Instructional Progression]</span>
              <span>Evidence Tag: #DP-BIO-2026-OK</span>
            </div>
            <p className="text-slate-800 font-sans text-xs leading-relaxed">
              <strong>00–05m: Phenomenon Hook:</strong> Present cryo-EM model of ATP synthase rotor mechanism. Quick Socratic inquiry on proton motive force.
              <br />
              <strong>05–30m: Guided Investigation:</strong> Students measure yeast respiration rates under glucose vs lactose substrates. Scaffolding notes provided for EAL learners.
            </p>
          </div>

          {/* Teacher Decision Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <UserCheck className="w-4 h-4 text-brand-indigo" />
              <span>Teacher has full editing and publication authority.</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Refine Prompt
              </button>
              <button className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Teacher Approve & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
