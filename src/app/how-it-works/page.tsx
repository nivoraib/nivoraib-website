import React from "react";
import SectionHeader from "@/components/SectionHeader";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import ReliabilityPipeline from "@/components/ReliabilityPipeline";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "How It Works — The 8-Step Teacher Workflow",
  description: "Learn how Nivoraib moves from natural teacher requests through intent parsing, context retrieval, specialized agent generation, deterministic auditing, and teacher review.",
  alternates: { canonical: "https://www.nivoraib.com/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header (Clean Heading without "Product Execution Flow" badge) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-navy-900 dark:text-zinc-100">
            From Teacher Intent to Verified Classroom Artifact
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
            Explore the complete 8-step lifecycle of how Nivoraib grounds, orchestrates, validates, and preserves teacher-driven instructional content.
          </p>
        </div>
      </section>

      {/* 2. Interactive 8-Step Product Loop */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <WorkflowDiagram />
      </section>

      {/* 3. Deep Dive into Invariant */}
      <section id="invariant" className="bg-slate-50 dark:bg-zinc-900/50 py-16 sm:py-20 border-y border-slate-200/80 dark:border-zinc-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <SectionHeader
            title="The Deterministic State Transition Guarantee"
            subtitle="Stage 1 enforces that an agent cannot transition an artifact to 'Ready' without a verifiable programmatic audit report."
          />
          <ReliabilityPipeline />
        </div>
      </section>

      {/* 4. Comparison Table: Chatbot Flow vs Nivoraib Flow */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100">
            How Nivoraib Compares to Standard AI
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
            The difference between superficial text generation and an auditable academic workspace.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-850">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-slate-500 dark:text-zinc-400">Standard Generic Chatbot</th>
                <th className="p-4 sm:p-5 text-brand-dark dark:text-zinc-200 bg-brand-light/40 dark:bg-zinc-750">Nivoraib AI Workspace</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-navy-900 dark:text-zinc-100">Curriculum Grounding</td>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-300">Vague training data recall; prone to outdated guides</td>
                <td className="p-4 sm:p-5 text-navy-900 dark:text-zinc-100 font-medium bg-brand-light/10 dark:bg-zinc-800/60">Official 2025/2026 DP Subject Guides retrieved via 5-layer RAG</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-navy-900 dark:text-zinc-100">Task State &amp; Memory</td>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-300">Ephemeral chat context; degraded by context rot</td>
                <td className="p-4 sm:p-5 text-navy-900 dark:text-zinc-100 font-medium bg-brand-light/10 dark:bg-zinc-800/60">Persistent PostgreSQL task state records across 4-week units</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-navy-900 dark:text-zinc-100">Timing Arithmetic</td>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-300">Hallucinates segment durations that don&rsquo;t sum to period</td>
                <td className="p-4 sm:p-5 text-navy-900 dark:text-zinc-100 font-medium bg-brand-light/10 dark:bg-zinc-800/60">Deterministic math checks verify exact sum = period duration</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-navy-900 dark:text-zinc-100">Command Terms</td>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-300">Random conversational verbs (&quot;write&quot;, &quot;tell&quot;)</td>
                <td className="p-4 sm:p-5 text-navy-900 dark:text-zinc-100 font-medium bg-brand-light/10 dark:bg-zinc-800/60">Exact IB Command-Term taxonomy (&quot;Explain&quot;, &quot;Evaluate&quot;, &quot;Determine&quot;)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-navy-900 dark:text-zinc-100">Publishing Gate</td>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-300">Outputs directly; relies on teacher to spot subtle omissions</td>
                <td className="p-4 sm:p-5 text-navy-900 dark:text-zinc-100 font-medium bg-brand-light/10 dark:bg-zinc-800/60">Mandatory Teacher Review gate with structured audit report</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection
        badgeText="How It Works"
        title="Ready to See the Academic Workflow in Action?"
        subtitle="Join educators testing curriculum-grounded planning, 5-layer context scoping, and verified classroom artifacts."
        primaryCtaText="Explore the Platform"
        primaryCtaHref="/dashboard"
        secondaryCtaText="Talk to Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
