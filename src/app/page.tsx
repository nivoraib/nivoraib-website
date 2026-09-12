import React from "react";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import WorkspaceConceptHero from "@/components/WorkspaceConceptHero";
import ContextLayersGraphic from "@/components/ContextLayersGraphic";
import ReliabilityPipeline from "@/components/ReliabilityPipeline";
import StatCard from "@/components/StatCard";
import HeroCTAs from "@/components/HeroCTAs";

const AgentGrid = dynamic(() => import("@/components/AgentGrid"));
const WorkflowDiagram = dynamic(() => import("@/components/WorkflowDiagram"));
const CTASection = dynamic(() => import("@/components/CTASection"));

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION (Turing Inspired Editorial Hierarchy & Solid Typography) */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 overflow-hidden bg-white dark:bg-navy-950">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light/80 dark:bg-brand-indigo/15 border border-brand-soft/60 dark:border-brand-indigo/30 shadow-2xs">
              <Sparkles className="w-4 h-4 text-brand-indigo dark:text-brand-lavender" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-light">
                The AI-Native Workspace for IB Diploma Educators
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.08]">
              AI Workspace for <br className="hidden sm:block" />
              <span className="text-brand-indigo dark:text-brand-lavender">IB Teachers</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Plan, create, assess, and teach from one curriculum-grounded workspace built around how IB teachers actually work.
            </p>

            <HeroCTAs />

            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Zero-token deterministic audit gates
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Authoritative IB command terms
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                No direct ghostwriting invariant
              </span>
            </div>
          </div>

          {/* Centerpiece Architectural Concept Visual (No simulated live tool) */}
          <div className="pt-4">
            <WorkspaceConceptHero />
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC PRINCIPLES / "BUILT AROUND TEACHER CONTROL" */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-10">
          <SectionHeader
            badge="Engineering Integrity"
            title="Built Around Teacher Control"
            subtitle="Nivoraib rejects generic prompt boxes and black-box automation. We engineer for deterministic verification, scoped memory, and educator authority."
          />
          <StatCard />
        </div>
      </section>

      {/* 3. POSITIONING: NOT A GENERIC CHATBOT */}
      <section className="bg-slate-50 dark:bg-navy-900/50 py-16 sm:py-20 border-y border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <SectionHeader
            badge="Product Positioning"
            title="Why IB Teaching Requires an AI-Native Workspace"
            subtitle="Generic chatbots suffer from context rot, loose hallucinated syllabus statements, and lack pedagogical state. Nivoraib solves this at the system level."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-750 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-200 dark:border-rose-900/60 font-bold">
                ✕
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                Generic Chatbots
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Single-turn prompt stuffing leads to &ldquo;context rot&rdquo;—failing to remember previous units, dropping mandatory assessment criteria, and hallucinating lesson timings.
              </p>
              <div className="text-xs font-mono text-rose-600 dark:text-rose-300 font-semibold bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/60">
                Fragile • Self-Declaration Fallacy
              </div>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-750 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-900/60 font-bold">
                ⊘
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                Traditional School LMS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Static databases designed for administrative grading and student document dropboxes, not active creative lesson synthesis or curriculum alignment.
              </p>
              <div className="text-xs font-mono text-amber-700 dark:text-amber-300 font-semibold bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/60">
                Administrative • Zero Pedagogical Assistance
              </div>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-2xl border-2 border-brand-indigo bg-gradient-to-b from-brand-light/30 dark:from-brand-indigo/15 to-white dark:to-navy-900 p-6 sm:p-8 space-y-4 shadow-md hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-dark dark:bg-brand-indigo text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                Nivoraib AI Workspace
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                One unified surface orchestrated by specialized agents over persistent task state, grounded by 5 context layers, and validated by deterministic audit rules.
              </p>
              <div className="text-xs font-mono text-brand-dark dark:text-brand-light font-semibold bg-brand-light dark:bg-brand-indigo/20 p-2.5 rounded-lg border border-brand-soft/60 dark:border-brand-indigo/40">
                Curriculum-Grounded • Teacher Decides
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FIVE CONTEXT LAYERS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <SectionHeader
          badge="Contextual Grounding"
          title="Five Contextual Layers. Zero Hallucination."
          subtitle="Teachers shouldn't have to rebuild context every time they prompt an AI. Nivoraib maintains scoped, persistent memory across five key dimensions."
        />
        <ContextLayersGraphic />
      </section>

      {/* 5. SPECIALIZED AI AGENTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <SectionHeader
          badge="Specialized Architecture"
          title="Specialized AI Agents Over Shared Infrastructure"
          subtitle="From 4-week inquiry units to criterion-referenced IA guidance, each agent is engineered with role-specific prompt harnesses and validation contracts."
        />
        <AgentGrid />
      </section>

      {/* 6. RELIABILITY INVARIANT & DETERMINISTIC AUDITING */}
      <section className="bg-slate-50 dark:bg-navy-900/50 py-16 sm:py-20 border-y border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <SectionHeader
            badge="The Trust Differentiator"
            title="Generated ≠ Validated ≠ Teacher Approved"
            subtitle="An AI should never be allowed to declare a task complete simply because it produced text. Stage 1 implements evidence-backed verification before teacher sign-off."
          />
          <ReliabilityPipeline />
        </div>
      </section>

      {/* 7. HOW IT WORKS WORKFLOW OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <SectionHeader
          title="The Complete 8-Step Teacher Workflow"
          subtitle="How a simple teacher prompt travels through intent parsing, context retrieval, agent execution, validation gates, and final export."
        />
        <WorkflowDiagram />
      </section>

      {/* 8. CLOSING CTA BANNER */}
      <CTASection />
    </div>
  );
}
