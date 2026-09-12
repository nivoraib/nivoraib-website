import React from "react";
import { ShieldAlert, CheckCircle2, UserCheck, Send, ArrowRight, ShieldCheck } from "lucide-react";

export default function ReliabilityPipeline() {
  const states = [
    {
      label: "GENERATED",
      role: "AI Agent Output",
      status: "Candidate Draft",
      desc: "Specialized model produces structured instructional or assessment content.",
      color: "border-slate-300 dark:border-navy-700 bg-slate-50 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300",
      badgeColor: "bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-slate-300",
    },
    {
      label: "VALIDATED",
      role: "Deterministic Audit Gate",
      status: "Zero-Token Check",
      desc: "Code-level programmatic checks verify timing arithmetic, IB command terms, and syllabus codes.",
      color: "border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300",
      badgeColor: "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300",
    },
    {
      label: "TEACHER APPROVED",
      role: "Educator Authority",
      status: "Human Sign-off",
      desc: "The educator reviews, edits scaffolds, refines nuances, and formally signs off.",
      color: "border-indigo-300 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-300",
      badgeColor: "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300",
    },
    {
      label: "PUBLISHED",
      role: "Live Course Material",
      status: "Classroom Ready",
      desc: "Saved to persistent school memory, exported to LMS / Word / PDF, ready for students.",
      color: "border-navy-300 dark:border-navy-700 bg-navy-50/50 dark:bg-navy-850/60 text-navy-900 dark:text-slate-200",
      badgeColor: "bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-slate-200",
    },
  ];

  const auditChecks = [
    {
      name: "IB Command-Term Taxonomy",
      rule: "Verifies precise command terms ('State' vs 'Explain' vs 'Evaluate') matched to objective taxonomy.",
      type: "Exact Match",
    },
    {
      name: "Syllabus Statement Coverage",
      rule: "Cross-checks candidate text against official DP subject guide statement codes.",
      type: "Code Check",
    },
    {
      name: "Lesson Timing Arithmetic",
      rule: "Ensures the exact mathematical sum of activity segments strictly equals the allocated period.",
      type: "Math Verification",
    },
    {
      name: "Assessment Criteria & Marks",
      rule: "Validates criterion weighting (A–E) and sums mark allocations before markscheme release.",
      type: "Weighting Check",
    },
    {
      name: "Pydantic Schema Integrity",
      rule: "Strict JSON payload typing ensuring zero malformed payloads or truncated pedagogical fields.",
      type: "Schema Contract",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      {/* Central Invariant Banner */}
      <div className="rounded-2xl bg-white dark:bg-navy-900/90 text-navy-900 dark:text-white p-6 sm:p-8 shadow-card dark:shadow-xl border border-slate-200/90 dark:border-navy-700/80 text-center space-y-4 relative overflow-hidden">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-dark dark:text-brand-lavender">
          The Core Reliability Invariant
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono font-extrabold text-sm sm:text-lg md:text-xl text-navy-900 dark:text-white">
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-100 shadow-2xs">GENERATED</span>
          <span className="text-rose-600 dark:text-rose-400 font-sans text-xl font-bold">≠</span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 shadow-2xs">VALIDATED</span>
          <span className="text-rose-600 dark:text-rose-400 font-sans text-xl font-bold">≠</span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-500/50 text-indigo-800 dark:text-indigo-300 shadow-2xs">TEACHER APPROVED</span>
          <span className="text-rose-600 dark:text-rose-400 font-sans text-xl font-bold">≠</span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-2xs">PUBLISHED</span>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed pt-1">
          <strong className="text-navy-900 dark:text-white font-semibold">&ldquo;AI generates. The system validates. The teacher decides.&rdquo;</strong>
          <br />
          We never allow unverified LLM completions to masquerade as finished pedagogical work.
        </p>
      </div>

      {/* 4-State Stage Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {states.map((st, i) => (
          <div
            key={st.label}
            className={`p-5 rounded-xl border ${st.color} flex flex-col justify-between space-y-3 relative group transition-all hover:shadow-md`}
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400">
                  Step 0{i + 1}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${st.badgeColor}`}>
                  {st.status}
                </span>
              </div>
              <h3 className="font-extrabold text-base tracking-tight text-navy-900 dark:text-white">
                {st.label}
              </h3>
              <div className="text-xs font-semibold text-brand-dark dark:text-brand-lavender">
                {st.role}
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {st.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 5 Deterministic Pedagogical Audit Checks — 6-Column Bento Composition */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200/80 dark:border-navy-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-navy-800 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Stage 1 Deterministic Architecture
            </span>
            <h3 className="text-xl font-extrabold text-navy-900 dark:text-white mt-0.5">
              5 Zero-Token Pedagogical Audit Checks
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-800 px-3 py-1 rounded-full border border-slate-200 dark:border-navy-700 self-start sm:self-auto">
            100% Programmatic • 0ms LLM Delay
          </span>
        </div>

        {/* 6-Column Bento Grid: Row 1 = 2 Checks (Span 3 each = 50%), Row 2 = 3 Checks (Span 2 each = 33.3%) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Top Row: 2 Anchor Verification Checks */}
          {auditChecks.slice(0, 2).map((chk, idx) => (
            <div
              key={chk.name}
              className="md:col-span-3 p-5 rounded-xl bg-slate-50/70 dark:bg-navy-850/70 border border-slate-200/90 dark:border-navy-700/80 hover:border-slate-300 dark:hover:border-navy-600 hover:-translate-y-0.5 hover:shadow-2xs space-y-2 hover:bg-slate-50 dark:hover:bg-navy-850 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  Check 0{idx + 1}
                </span>
                <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50 px-2 py-0.5 rounded">
                  {chk.type}
                </span>
              </div>
              <h4 className="font-bold text-navy-900 dark:text-white text-base">
                {chk.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {chk.rule}
              </p>
            </div>
          ))}

          {/* Bottom Row: 3 Focus Verification Checks */}
          {auditChecks.slice(2, 5).map((chk, idx) => (
            <div
              key={chk.name}
              className="md:col-span-2 p-4 rounded-xl bg-slate-50/70 dark:bg-navy-850/70 border border-slate-200/90 dark:border-navy-700/80 hover:border-slate-300 dark:hover:border-navy-600 hover:-translate-y-0.5 hover:shadow-2xs space-y-2 hover:bg-slate-50 dark:hover:bg-navy-850 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  Check 0{idx + 3}
                </span>
                <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50 px-2 py-0.5 rounded">
                  {chk.type}
                </span>
              </div>
              <h4 className="font-bold text-navy-900 dark:text-white text-sm">
                {chk.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {chk.rule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
