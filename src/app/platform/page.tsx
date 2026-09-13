import React from "react";
import Link from "next/link";
import { 
  Layers, Brain, ShieldCheck, UserCheck, HardDrive, RefreshCw, 
  Share2, ArrowRight, CheckCircle2, Sparkles, Database, FileText, School, History 
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContextLayersGraphic from "@/components/ContextLayersGraphic";
import ReliabilityPipeline from "@/components/ReliabilityPipeline";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Platform Architecture — The AI-Native Workspace",
  description: "Explore the Nivoraib platform architecture: multi-agent orchestration, 5-layer contextual grounding, persistent task state, and deterministic validation.",
  alternates: { canonical: "https://www.nivoraib.com/platform" },
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border-brand-soft/50 dark:border-zinc-700 inline-flex items-center gap-1.5">
              Platform Architecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-navy-900 dark:text-zinc-100">
            One Workspace for the Teacher&apos;s Academic Workflow
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
            Nivoraib combines specialized multi-agent orchestration with external curriculum memory and deterministic audit gates. Here is how the system operates under the hood.
          </p>
        </div>
      </section>

      {/* 2. Platform Core Architecture Pillars */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 flex items-center justify-center border border-brand-soft/50 dark:border-zinc-700 font-bold">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
              Decoupled Agent Orchestration
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Rather than overloading a single model with hundreds of rules, Nivoraib dispatches distinct subtasks to specialized prompt harnesses (e.g. Unit Planners, Assessment Generators, IA Scaffolding).
            </p>
            <ul className="space-y-2 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero prompt pollution between subtasks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Domain-specific rubric and command-term injection</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/60 font-bold">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
              Persistent Task State
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Long-horizon academic tasks take hours or days to synthesize. Nivoraib persists state across sessions in durable PostgreSQL tables, preventing loss of context when teachers navigate away.
            </p>
            <ul className="space-y-2 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Evidence-backed subtask completion records</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Audit trail and revision history preservation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-zinc-200 flex items-center justify-center border border-indigo-200 dark:border-zinc-700 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
              Independent Verification Gates
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              To eliminate self-affirming hallucinations, validation is handled by independent deterministic code and dedicated read-only auditor nodes before presenting to educators.
            </p>
            <ul className="space-y-2 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Timing arithmetic verified mathematically</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Command terms matched against IB taxonomy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: Context Grounding Graphic */}
      <section id="context-layers" className="bg-slate-50 dark:bg-zinc-900/50 py-16 sm:py-20 border-y border-slate-200/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <SectionHeader
            badge="Context Scoping"
            title="How Scoped Context Prevents Model Degradation"
            subtitle="Extended conversational threads degrade prompt fidelity. Nivoraib feeds agents only the specific scoped context necessary for the immediate academic subtask."
          />
          <ContextLayersGraphic />
        </div>
      </section>

      {/* 4. Deep Dive: Reliability Pipeline */}
      <section id="validation" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <SectionHeader
          badge="Deterministic Auditing"
          title="Stage 1 Verification Engine"
          subtitle="Our deterministic pipeline guarantees that generated drafts meet syllabus coverage and duration requirements before the teacher makes their final pedagogical call."
        />
        <ReliabilityPipeline />
      </section>

      {/* 5. Human-in-the-Loop Authority */}
      <section id="human-in-the-loop" className="bg-slate-50 dark:bg-zinc-900 text-navy-900 dark:text-zinc-100 py-16 sm:py-20 border-y border-slate-200/80 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-dark dark:text-zinc-300 bg-brand-light/80 dark:bg-zinc-800 px-3 py-1 rounded-full border border-brand-soft/60 dark:border-zinc-700 inline-block">
                Teacher Decision Invariant
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-navy-900 dark:text-zinc-100">
                AI Generates. The System Validates. The Teacher Decides.
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                Nivoraib rejects fully autonomous publishing. The final authority always resides with the experienced educator who knows their students, classroom dynamics, and nuances best.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                    <strong className="text-navy-900 dark:text-zinc-100 font-semibold">Full In-Line Editing:</strong> Modify any lesson segment, prompt question, or mark allocation before approval.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                    <strong className="text-navy-900 dark:text-zinc-100 font-semibold">Frictionless Export:</strong> One-click output to Word, PDF, LMS platforms, or department course drives.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                    <strong className="text-navy-900 dark:text-zinc-100 font-semibold">Reusable Departmental Memory:</strong> Validated units automatically update your school cohort history for future years.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200/90 dark:border-zinc-700 p-6 sm:p-8 space-y-4 font-mono text-xs text-slate-700 dark:text-zinc-300 shadow-card dark:shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-700 pb-3">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">STATE_MACHINE // INVARIANT_GUARD</span>
                <span className="text-slate-500 dark:text-zinc-400">Node: AuditComplete</span>
              </div>
              <div className="space-y-2 text-[11px] leading-relaxed">
                <p className="text-slate-500 dark:text-zinc-400">// Stage 1 State Transition Rule</p>
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">if (artifact.audit_report.passed === true) &#123;</p>
                <p className="pl-4 text-navy-900 dark:text-zinc-100 font-semibold">state = &quot;TEACHER_REVIEW&quot;;</p>
                <p className="pl-4 text-slate-500 dark:text-zinc-400">// Strict constraint: No direct publish without teacher review token</p>
                <p className="pl-4 text-amber-700 dark:text-amber-300 font-medium">assert(requires_human_approval === true);</p>
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">&#125; else &#123;</p>
                <p className="pl-4 text-rose-700 dark:text-rose-300 font-medium">state = &quot;NEEDS_REVIEW&quot;;</p>
                <p className="pl-4 text-slate-500 dark:text-zinc-400">flag_pedagogical_omissions(artifact.audit_report.failures);</p>
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">&#125;</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[11px] text-slate-600 dark:text-zinc-400 font-sans">
                Status: Verified Invariant Active across all 10 academic agents.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        badgeText="Platform Architecture"
        title="Experience the Architecture of NivoraIB"
        subtitle="Join IB Diploma coordinators and educators experiencing curriculum-grounded planning and deterministic verification."
        primaryCtaText="Explore the Platform"
        primaryCtaHref="/dashboard"
        secondaryCtaText="Talk to Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
