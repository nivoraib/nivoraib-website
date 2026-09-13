import React from "react";
import Link from "next/link";
import { 
  Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Layers, 
  FileCheck2, GraduationCap, Clock, Brain, UserCheck, Search, Share2 
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import WorkspaceConceptHero from "@/components/WorkspaceConceptHero";
import HeroCTAs from "@/components/HeroCTAs";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const coreValues = [
    {
      title: "Plan",
      scope: "Inquiry Units & Paced Lessons",
      description: "Map 4–8 week inquiry units, syllabus standards, and minute-by-minute paced classroom periods.",
      icon: Layers,
      href: "/features#planning",
    },
    {
      title: "Create",
      scope: "Differentiated Scaffolding",
      description: "Generate tiered learning activities, lab setups, and bilingual glossaries for standard, EAL, and extension learners.",
      icon: Sparkles,
      href: "/features#workspace",
    },
    {
      title: "Assess",
      scope: "Authentic DP Items & Markschemes",
      description: "Produce Paper 1/2/3 exam questions with precise IB command terms, mark allocations, and level descriptors.",
      icon: FileCheck2,
      href: "/features#assessment",
    },
    {
      title: "Teach",
      scope: "IA Guidance & Scoped Memory",
      description: "Scaffold Internal Assessments and TOK knowledge questions with zero ghostwriting and persistent cohort memory.",
      icon: GraduationCap,
      href: "/features#ib-core",
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Teacher Intent",
      description: "Enter your subject, topic, and period duration in plain language.",
      icon: Brain,
    },
    {
      num: "02",
      title: "Context Grounding",
      description: "NivoraIB retrieves official DP subject guides, teacher resources, and school policies.",
      icon: Search,
    },
    {
      num: "03",
      title: "Deterministic Verification",
      description: "Automated audit gates mathematically verify timing, command terms, and syllabus coverage.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Teacher Control & Sign-Off",
      description: "You review, edit nuances, sign off, and export directly to Word, PDF, or your LMS.",
      icon: UserCheck,
    },
  ];

  const differentiators = [
    {
      title: "Curriculum-Grounded",
      description: "Tied directly to official 2025/2026 DP subject guides, eliminating syllabus hallucinations and outdated AP/general standards.",
      icon: Search,
      tag: "5 Context Layers",
      href: "/platform#context-layers",
    },
    {
      title: "Deterministic Validation",
      description: "Programmatic audit gates verify timing arithmetic, command-term taxonomies, and mark allocations before teacher review.",
      icon: ShieldCheck,
      tag: "Zero-Token Audits",
      href: "/platform#validation",
    },
    {
      title: "Teacher Decides, Always",
      description: "Zero autonomous publishing and zero student ghostwriting. The experienced educator retains absolute pedagogical authority.",
      icon: UserCheck,
      tag: "Human Authority",
      href: "/platform#human-in-the-loop",
    },
  ];

  return (
    <div className="flex flex-col space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION (Clear, Focused Main Theme) */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 overflow-hidden bg-transparent dark:bg-zinc-950">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light/80 dark:bg-zinc-800 border border-brand-soft/60 dark:border-zinc-700 shadow-2xs">
              <Sparkles className="w-4 h-4 text-brand-indigo dark:text-zinc-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-zinc-200">
                The AI-Native Workspace for IB Diploma Educators
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 dark:text-zinc-100 leading-[1.08]">
              AI Workspace for <br className="hidden sm:block" />
              <span className="text-brand-indigo dark:text-zinc-200">IB Teachers</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Plan, create, assess, and teach from one curriculum-grounded workspace built around how IB teachers actually work.
            </p>

            <HeroCTAs />

            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
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
                Teacher in total control
              </span>
            </div>
          </div>

          {/* Centerpiece Architectural Concept Visual */}
          <div className="pt-4">
            <WorkspaceConceptHero />
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE SECTION (Plan • Create • Assess • Teach) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <SectionHeader
          badge="Core Capabilities"
          title="One Workspace for Your Entire Teaching Workflow"
          subtitle="NivoraIB unifies the essential stages of IB Diploma instruction into a single intelligent surface grounded in official curriculum standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200/90 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 p-6 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 flex items-center justify-center border border-brand-soft/40 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100 group-hover:text-brand-indigo dark:group-hover:text-white transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-indigo dark:text-zinc-300 mt-0.5">
                      {val.scope}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-zinc-800">
                  <Link
                    href={val.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-indigo dark:text-zinc-200 hover:text-brand-purple dark:hover:text-white transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-indigo dark:text-zinc-200 hover:text-brand-purple dark:hover:text-white transition-colors group"
          >
            <span>Explore all 10 specialized capabilities &amp; AI agents</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. HIGH-LEVEL PRODUCT FLOW (How It Works) */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-16 sm:py-20 border-y border-slate-200/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <SectionHeader
            badge="How It Works"
            title="From Teacher Intent to Verified Classroom Artifact"
            subtitle="A collaborative loop designed to support teacher expertise, verify pedagogical accuracy, and keep you in total control."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200/90 dark:border-zinc-700 p-6 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-zinc-400">
                        Step {step.num}
                      </span>
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-base text-navy-900 dark:text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-indigo dark:text-zinc-200 hover:text-brand-purple dark:hover:text-white transition-colors group"
            >
              <span>Inspect the full 8-step execution loop &amp; comparison table</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TRUST & DIFFERENTIATION (Why IB Teachers Trust NivoraIB) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <SectionHeader
          badge="Pedagogical Integrity"
          title="Engineered for Academic Rigor, Not AI Hype"
          subtitle="Generic chatbots suffer from syllabus hallucinations, dropped criteria, and lack pedagogical memory. NivoraIB solves this at the system level."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 flex items-center justify-center border border-brand-soft/40 dark:border-zinc-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                      {diff.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-zinc-800">
                  <Link
                    href={diff.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-indigo dark:text-zinc-200 hover:text-brand-purple dark:hover:text-white transition-colors"
                  >
                    <span>Read architecture details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-indigo dark:text-zinc-200 hover:text-brand-purple dark:hover:text-white transition-colors group"
          >
            <span>Explore platform architecture, 5 context layers &amp; state machines</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <CTASection
        badgeText="Built for IB Diploma Educators"
        title="Ready to Experience the AI Workspace Built for IB Teachers?"
        subtitle="Step inside a curriculum-grounded environment where specialized agents generate, deterministic rules validate, and educators remain in total control."
        primaryCtaText="Explore the Platform"
        primaryCtaHref="/dashboard"
        secondaryCtaText="Talk to Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
