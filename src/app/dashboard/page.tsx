"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Home, CalendarRange, Clock, FileCheck2, Database, GraduationCap, 
  FolderSearch, Bot, Sparkles, Send, ShieldCheck, CheckCircle2, UserCheck, 
  ArrowRight, RefreshCw, BookOpen, Layers, Download, Check, AlertCircle, Eye
} from "lucide-react";

export default function DashboardPreviewPage() {
  const [activeWorkflow, setActiveWorkflow] = useState<string>("lesson");
  const [promptInput, setPromptInput] = useState<string>(
    "Create a 90-minute Higher Level Biology lesson on Cellular Respiration (Topic B.1.2) with differentiated inquiry for standard and EAL students."
  );
  const [validationState, setValidationState] = useState<"generated" | "validating" | "validated" | "approved">("validated");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const sidebarItems = [
    { id: "home", label: "Workspace Home", icon: Home },
    { id: "unit", label: "Unit Planner", icon: CalendarRange, badge: "DP HL/SL" },
    { id: "lesson", label: "Lesson Planner", icon: Clock, badge: "90 min" },
    { id: "assessment", label: "Assessments", icon: FileCheck2 },
    { id: "question-bank", label: "Question Bank", icon: Database },
    { id: "ia-assistant", label: "IA Assistant", icon: GraduationCap, badge: "Moderation" },
    { id: "resource-library", label: "Resource Library", icon: FolderSearch },
    { id: "teaching-assistant", label: "Teaching Assistant", icon: Bot },
  ];

  const quickActions = [
    {
      label: "Plan a 90-min Lesson",
      prompt: "Create a 90-minute Higher Level Biology lesson on Cellular Respiration (Topic B.1.2) with differentiated inquiry for standard and EAL students.",
      workflow: "lesson",
    },
    {
      label: "Create 4-Week Unit Plan",
      prompt: "Synthesize a 4-week inquiry unit for Chemistry HL on Chemical Kinetics (Topic 6 & 16), integrating TOK Knowledge Questions on certainty in experimental error.",
      workflow: "unit",
    },
    {
      label: "Generate Paper 2 Exam",
      prompt: "Produce a 40-mark Paper 2 Section A exam on Macroeconomics for SL Economics, complete with official markschemes and alternative answers.",
      workflow: "assessment",
    },
    {
      label: "Review Student IA Draft",
      prompt: "Scaffold formative criterion-by-criterion feedback for an Economics IA Commentary on indirect taxation, ensuring zero ghostwriting.",
      workflow: "ia-assistant",
    },
  ];

  const [isExported, setIsExported] = useState(false);

  const handleQuickAction = (action: typeof quickActions[0]) => {
    setPromptInput(action.prompt);
    setActiveWorkflow(action.workflow);
    triggerValidationRun();
  };

  const triggerValidationRun = () => {
    setIsSimulating(true);
    setValidationState("validating");
    setTimeout(() => {
      setValidationState("validated");
      setIsSimulating(false);
    }, 900);
  };

  const handleApprove = () => {
    setValidationState("approved");
  };

  const handleExport = () => {
    setIsExported(true);
    setTimeout(() => setIsExported(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#EBF6F7] dark:bg-zinc-950 flex flex-col">
      {/* Workspace Banner Notice */}
      <div className="bg-navy-900 dark:bg-zinc-900 text-slate-300 px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2 border-b border-navy-800 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Nivoraib Product Preview:</span>
          <span>Interactive teacher preview demonstrating curriculum-grounded planning and teacher-governed verification.</span>
        </div>
        <Link
          href="/contact?reason=demo"
          className="text-xs font-bold text-brand-lavender dark:text-zinc-200 hover:text-white underline underline-offset-2"
        >
          Request Full Pilot Access →
        </Link>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto p-3 sm:p-6 gap-4 sm:gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-64 bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-4 shadow-sm flex flex-col justify-between shrink-0 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 px-2 pb-3 border-b border-slate-100 dark:border-zinc-800">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-navy-900/10 dark:border-zinc-700 bg-white dark:bg-white/95">
                <Image
                  src="/logo/logo_mark_clean.png"
                  alt="Nivoraib"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm text-navy-900 dark:text-zinc-100 leading-tight">
                  Nivoraib Workspace
                </span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">
                  DP Educator Preview
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-1">
                Academic Modules
              </span>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeWorkflow === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveWorkflow(item.id);
                      triggerValidationRun();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-navy-900 dark:bg-white text-white dark:text-zinc-950 shadow-sm"
                        : "text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-brand-lavender dark:text-zinc-950" : "text-slate-500 dark:text-zinc-400"}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                          isActive
                            ? "bg-navy-800 dark:bg-zinc-200 text-brand-lavender dark:text-zinc-950"
                            : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Teacher Profile / Scoped School Session */}
          <div className="p-3 bg-slate-50 dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-brand-light dark:bg-zinc-700 text-brand-dark dark:text-zinc-100 font-bold flex items-center justify-center text-xs">
                IB
              </div>
              <div className="flex flex-col truncate">
                <span className="font-bold text-navy-900 dark:text-zinc-100 truncate">DP Faculty Portal</span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 truncate">International School</span>
              </div>
            </div>
            <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              Tenant boundary isolated
            </div>
          </div>
        </aside>

        {/* MAIN WORKSPACE CANVAS */}
        <main className="flex-1 space-y-6 flex flex-col">
          {/* Header Greeting */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-zinc-200 bg-brand-light dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                  Interactive Preview
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                  Status: Connected to DP Graph
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100 tracking-tight">
                Good morning, Teacher
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                What would you like to plan, create, or assess today?
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={triggerValidationRun}
                disabled={isSimulating}
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-750 text-slate-700 dark:text-zinc-200 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin text-brand-indigo dark:text-zinc-200" : ""}`} />
                <span>Simulate Re-Audit</span>
              </button>
            </div>
          </div>

          {/* Quick Action Chips */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 px-1">
              Sample Teacher Workflows (Click to run):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickAction(action)}
                  className="p-3 bg-white dark:bg-zinc-850 hover:bg-brand-light/30 dark:hover:bg-zinc-800 text-left rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-brand-soft dark:hover:border-zinc-600 shadow-2xs transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-900 dark:text-zinc-100 group-hover:text-brand-indigo dark:group-hover:text-white">
                      {action.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-zinc-600 group-hover:text-brand-indigo dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate mt-1">
                    {action.prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Area & Context Scoping */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-navy-900 dark:text-zinc-100 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-indigo dark:text-zinc-300" />
                Prompt &amp; Instruction Harness
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                Agent: {sidebarItems.find(i => i.id === activeWorkflow)?.label || "Lesson Planner"}
              </span>
            </div>

            <div className="relative">
              <textarea
                rows={3}
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-navy-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:border-brand-indigo dark:focus:border-zinc-500 focus:ring-2 focus:ring-brand-indigo/20 text-sm outline-none transition-all resize-none"
                placeholder="Ask the agent to structure a lesson, generate test items, or review an inquiry unit..."
              />
              <button
                onClick={triggerValidationRun}
                className="absolute right-3 bottom-3 p-2 rounded-lg bg-navy-900 hover:bg-navy-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 transition-colors shadow-sm cursor-pointer"
                title="Send instruction to academic agent"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Context Layers Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                Attached Context Layers:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-zinc-700 flex items-center gap-1.5 font-medium">
                  <BookOpen className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  IB DP Subject Guide (2025/2026)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-zinc-700 flex items-center gap-1.5 font-medium">
                  <FolderSearch className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                  Teacher Course Manual (Term 1)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700 flex items-center gap-1.5 font-medium">
                  <Layers className="w-3 h-3 text-slate-600 dark:text-zinc-400" />
                  School Timetable: Period 3 (90 Min)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-zinc-700 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  Previous Unit Assessment Archive
                </span>
              </div>
            </div>
          </div>

          {/* ARTIFACT AUDIT & TRANSITION STATUS */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-bold text-navy-900 dark:text-zinc-100">
                  Stage 1 Verification Engine
                </span>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                Invariant: Generated ≠ Validated ≠ Approved ≠ Published
              </span>
            </div>

            {/* Stepper */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
              <div className={`p-2.5 rounded-xl border transition-all ${
                validationState === "generated"
                  ? "bg-brand-indigo dark:bg-zinc-600 text-white border-brand-indigo dark:border-zinc-500 shadow-sm"
                  : "bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-700"
              }`}>
                1. GENERATED
              </div>
              <div className={`p-2.5 rounded-xl border transition-all ${
                validationState === "validating"
                  ? "bg-amber-500 text-white border-amber-500 animate-pulse shadow-sm"
                  : "bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-700"
              }`}>
                2. VALIDATING...
              </div>
              <div className={`p-2.5 rounded-xl border transition-all ${
                validationState === "validated"
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-700"
              }`}>
                3. VALIDATED ✓
              </div>
              <div className={`p-2.5 rounded-xl border transition-all ${
                validationState === "approved"
                  ? "bg-brand-dark dark:bg-white text-white dark:text-zinc-950 border-brand-dark dark:border-zinc-200 shadow-sm"
                  : "bg-slate-50 dark:bg-zinc-850 text-slate-600 dark:text-zinc-300 border-slate-200 dark:border-zinc-700"
              }`}>
                4. APPROVED
              </div>
            </div>

            {/* Programmatic checks breakdown */}
            <div className="p-3 bg-slate-50 dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 space-y-2 text-xs">
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-zinc-400">
                <span>DETERMINISTIC_AUDIT_REPORT // ID: #AUDIT-2026-90M-OK</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">ALL 5 CHECKS PASSED</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Timing math: Sum strictly = 90 min</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Command terms: &quot;Explain&quot;, &quot;Evaluate&quot;</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Syllabus B.1.2: Coverage verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* GENERATED ARTIFACT RESULT */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-zinc-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark dark:text-zinc-200 bg-brand-light dark:bg-zinc-800 px-2 py-0.5 rounded">
                  Validated Lesson Plan Draft
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 dark:text-zinc-100 mt-1">
                  Topic B.1.2: Cellular Respiration, Glycolysis &amp; ATP Synthesis
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExport}
                  disabled={isExported}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 text-xs font-bold text-slate-700 dark:text-zinc-200 flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  {isExported ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">Exported (DOCX) ✓</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Export</span>
                    </>
                  )}
                </button>
                {validationState !== "approved" ? (
                  <button
                    onClick={handleApprove}
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Teacher Approve &amp; Publish</span>
                  </button>
                ) : (
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Published to Course Library</span>
                  </span>
                )}
              </div>
            </div>

            {/* Paced Lesson Content Mockup */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-navy-900 dark:text-zinc-100">
                  <span>Phase 1: Hook &amp; Molecular Orientation (00–10 min)</span>
                  <span className="text-brand-indigo dark:text-zinc-300 font-mono">10 min</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Screen interactive 3D model of mitochondria. Socratic prompt: &ldquo;Explain why active muscle cells contain up to 2,000 mitochondria per cell while skin cells contain far fewer.&rdquo; (Command Term: Explain).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-navy-900 dark:text-zinc-100">
                  <span>Phase 2: Differentiated Inquiry Investigation (10–50 min)</span>
                  <span className="text-brand-indigo dark:text-zinc-300 font-mono">40 min</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Students split into paired lab stations tracking CO2 respirometer levels across glucose, maltose, and lactose broths.
                  <br />
                  <strong className="text-slate-800 dark:text-zinc-200">Scaffolding (EAL):</strong> Visual chemical equation cards provided with dual-language glossary terms.
                  <br />
                  <strong className="text-slate-800 dark:text-zinc-200">Extension:</strong> Calculate theoretical ATP yield assuming 32 ATP per mol of oxidized glucose.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-navy-900 dark:text-zinc-100">
                  <span>Phase 3: Formative Assessment Check &amp; Exit Ticket (50–90 min)</span>
                  <span className="text-brand-indigo dark:text-zinc-300 font-mono">40 min</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Individual completion of 6-mark IB DP Paper 2 data-response question on cyanide inhibition of cytochrome c oxidase. Self-assessment against generated markscheme.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-zinc-400 border-t border-slate-100 dark:border-zinc-800">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-brand-indigo dark:text-zinc-300" />
                Teacher retains complete editing authority before publication.
              </span>
              <span className="font-mono text-[11px]">
                Audit Pass Hash: #482f-verified
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
