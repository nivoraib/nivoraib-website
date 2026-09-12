"use client";

import React, { useState } from "react";
import { ACADEMIC_AGENTS, AcademicAgent } from "@/data/agents";
import { 
  CalendarRange, Clock, FileCheck2, Database, GraduationCap, 
  Sparkles, BookOpen, Bot, FolderSearch, CheckCircle2, ShieldCheck, ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { useComingSoon } from "@/components/ComingSoonModal";

const AGENT_ICONS: Record<string, any> = {
  CalendarRange, Clock, FileCheck2, Database, GraduationCap,
  Sparkles, BookOpen, Bot, FolderSearch, CheckCircle2
};

export default function AgentGrid() {
  const [filter, setFilter] = useState<string>("all");
  const { openComingSoon } = useComingSoon();

  const filtered = ACADEMIC_AGENTS.filter(a => {
    if (filter === "all") return true;
    return a.category === filter;
  });

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "All 10 Agents" },
          { id: "planning", label: "Academic Planning" },
          { id: "assessment", label: "Assessment & Items" },
          { id: "core", label: "IB DP Core (IA / TOK / EE)" },
          { id: "support", label: "Teacher Support & Memory" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === btn.id
                ? "bg-navy-900 dark:bg-white text-white dark:text-navy-950 shadow-sm"
                : "bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800 border border-transparent dark:border-navy-800"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Bento Grid Composition for Agents:
          - 10 Agents ('all'): 6-column Bento (2 + 3 + 3 + 2 = 10)
          - 2 Agents: 2 columns
          - 3 Agents: 3 columns
      */}
      {filtered.length === 10 ? (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Row 1: 2 Flagship Agents (Span 3 each = 50%) */}
          {filtered.slice(0, 2).map((agent) => (
            <div key={agent.id} className="md:col-span-3 flex flex-col">
              <AgentCard agent={agent} onExplore={openComingSoon} featured={true} />
            </div>
          ))}

          {/* Row 2: 3 Agents (Span 2 each = 33.3%) */}
          {filtered.slice(2, 5).map((agent) => (
            <div key={agent.id} className="md:col-span-2 flex flex-col">
              <AgentCard agent={agent} onExplore={openComingSoon} />
            </div>
          ))}

          {/* Row 3: 3 Agents (Span 2 each = 33.3%) */}
          {filtered.slice(5, 8).map((agent) => (
            <div key={agent.id} className="md:col-span-2 flex flex-col">
              <AgentCard agent={agent} onExplore={openComingSoon} />
            </div>
          ))}

          {/* Row 4: 2 Closing Anchor Agents (Span 3 each = 50%) */}
          {filtered.slice(8, 10).map((agent) => (
            <div key={agent.id} className="md:col-span-3 flex flex-col">
              <AgentCard agent={agent} onExplore={openComingSoon} featured={true} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 ${
            filtered.length === 2
              ? "md:grid-cols-2"
              : filtered.length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-3"
          } gap-6`}
        >
          {filtered.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onExplore={openComingSoon} />
          ))}
        </div>
      )}
    </div>
  );
}

function AgentCard({
  agent,
  onExplore,
  featured = false,
}: {
  agent: AcademicAgent;
  onExplore: (name: string) => void;
  featured?: boolean;
}) {
  const IconComp = AGENT_ICONS[agent.icon] || Bot;

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between space-y-5 group h-full ${
        featured
          ? "border-brand-soft/80 dark:border-brand-indigo/40 hover:border-brand-indigo/60 dark:hover:border-brand-indigo/70 bg-gradient-to-br from-white via-white to-brand-light/20 dark:from-navy-900 dark:via-navy-900 dark:to-navy-850 p-6 sm:p-7 shadow-sm hover:shadow-card-hover"
          : "border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-600 bg-white dark:bg-navy-900 p-6 shadow-sm hover:shadow-card-hover"
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-brand-light dark:bg-navy-800 text-brand-dark dark:text-brand-lavender flex items-center justify-center border border-brand-soft/40 dark:border-navy-700 group-hover:scale-105 transition-transform">
            <IconComp className="w-5 h-5" />
          </div>
          <span
            className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
              agent.stage === "Stage 1 Active"
                ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60"
                : "bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-navy-700"
            }`}
          >
            {agent.stage}
          </span>
        </div>

        <div>
          <h3
            className={`font-bold text-navy-900 dark:text-white group-hover:text-brand-indigo dark:group-hover:text-brand-lavender transition-colors ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {agent.name}
          </h3>
          <p className="text-xs font-semibold text-brand-dark dark:text-brand-lavender mt-0.5">
            {agent.role}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {agent.description}
          </p>
        </div>

        {/* Deterministic checks */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-navy-800">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            Audit Invariant:
          </div>
          <div className="flex flex-wrap gap-1">
            {agent.deterministicAuditChecks.map((chk, i) => (
              <span
                key={i}
                className="text-[10px] font-mono bg-slate-50 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800 px-2 py-0.5 rounded"
              >
                {chk}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={() => onExplore(agent.name)}
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 dark:bg-navy-800 hover:bg-brand-light dark:hover:bg-navy-750 text-slate-700 dark:text-slate-200 hover:text-brand-dark dark:hover:text-white text-xs font-bold transition-all duration-150 border border-slate-200 dark:border-navy-700 hover:border-brand-soft/60 dark:hover:border-navy-600 active:scale-[0.98] cursor-pointer"
        >
          <span>Explore {agent.name}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
