import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Heart, Sparkles, BookOpen, Compass, Target, ArrowRight, MapPin, CalendarDays, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About NivoraIB — AI Workspace for IB Teachers",
  description: "NivoraIB is an AI-powered workspace that helps IB educators plan, teach, assess, and manage their teaching workflows in one place. Founded in New Delhi, 2026.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <SectionHeader
          badge="Our Mission &amp; Philosophy"
          title="Teachers Shouldn’t Have to Rebuild Context Every Time They Ask AI for Help"
          subtitle="NivoraIB is an AI-powered workspace that helps IB educators plan, teach, assess, and manage their teaching workflows in one place."
        />

        {/* Company Identity Strip */}
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-zinc-850 border border-slate-200 dark:border-zinc-700 text-center">
            <Building2 className="w-5 h-5 text-brand-indigo dark:text-zinc-300" />
            <span className="text-xs font-bold text-navy-900 dark:text-zinc-100">NivoraIB</span>
            <span className="text-[11px] text-slate-500 dark:text-zinc-400">Company</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-zinc-850 border border-slate-200 dark:border-zinc-700 text-center">
            <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold text-navy-900 dark:text-zinc-100">New Delhi, India</span>
            <span className="text-[11px] text-slate-500 dark:text-zinc-400">Location</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-zinc-850 border border-slate-200 dark:border-zinc-700 text-center">
            <CalendarDays className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            <span className="text-xs font-bold text-navy-900 dark:text-zinc-100">2026</span>
            <span className="text-[11px] text-slate-500 dark:text-zinc-400">Founded</span>
          </div>
        </div>
      </section>

      {/* 2. The Problem & Founding Story */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="prose prose-lg text-slate-700 dark:text-zinc-300 leading-relaxed space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100 tracking-tight">
            The Reality of IB Diploma Teaching
          </h2>
          <p>
            The International Baccalaureate Diploma Programme is one of the most intellectually rigorous secondary curricula in the world. An experienced DP teacher does not merely lecture from a textbook: they plan multi-week inquiry units, differentiate instructional scaffolding for multilingual classrooms, design authentic criterion-referenced assessments with precise command terms, and supervise 40-hour Extended Essays and Internal Assessments.
          </p>
          <p>
            When generative AI arrived, teachers were promised relief from overwhelming administrative and documentation burdens. But standard chatbots quickly disappointed:
          </p>
          <div className="p-6 bg-slate-50 dark:bg-zinc-850 rounded-2xl border border-slate-200/80 dark:border-zinc-700 space-y-3 font-medium text-sm sm:text-base text-slate-800 dark:text-zinc-200">
            <div className="font-bold text-navy-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-rose-500 font-extrabold">✕</span>
              The Three Fatal Flaws of Generic AI in the Classroom:
            </div>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-zinc-300 text-sm">
              <li><strong>Context Rot:</strong> As conversations grow long, models drop mandatory assessment criteria, forget school period limits, and drift from initial objectives.</li>
              <li><strong>Lack of Curriculum Grounding:</strong> Foundation models hallucinate syllabus codes, use outdated syllabus conventions, or substitute American AP standards for IB Diploma expectations.</li>
              <li><strong>The Self-Declaration Fallacy:</strong> If you ask a generic chatbot if its lesson plan covers all criteria, it almost always answers &ldquo;Yes&rdquo;—even when critical elements were omitted.</li>
            </ul>
          </div>
          <p>
            We realized that teachers did not need another chat window. They needed an <strong>academic workspace</strong>: a persistent environment where curriculum documents, previous semester units, and school policies are automatically scoped, where specialized agents handle distinct pedagogical tasks, and where deterministic rules verify correctness before the teacher signs off.
          </p>

          {/* Official Vision Statement */}
          <blockquote className="border-l-4 border-brand-indigo dark:border-zinc-500 pl-5 my-2 space-y-1">
            <p className="text-sm sm:text-base font-medium text-navy-900 dark:text-zinc-100 italic leading-relaxed">
              &ldquo;We started NivoraIB to help IB educators spend less time on repetitive planning and administrative work and more time teaching. We believe AI should support, not replace, teacher expertise. NivoraIB brings curriculum-grounded AI, resources, personalization, and teaching workflows into one intelligent workspace built around educators.&rdquo;
            </p>
            <footer className="text-xs text-slate-500 dark:text-zinc-400 not-italic">
              — NivoraIB Founding Team, New Delhi, 2026
            </footer>
          </blockquote>
        </div>
      </section>

      {/* 3. Core Principles */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-16 sm:py-20 border-y border-slate-200/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <SectionHeader
            badge="Product Philosophy"
            title="Four Non-Negotiable Principles"
            subtitle="The foundational tenets guiding how we design every prompt harness, state transition, and user interface."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
                Teacher Decides, Always
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Nivoraib is an assistant, not an autonomous agent. The experienced educator retains absolute authority over lesson progression, student differentiation, and publication to classrooms.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
                Deterministic Validation Over Vibes
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                We do not ask an AI model &ldquo;Does this lesson make sense?&rdquo; We verify timing arithmetic mathematically, cross-check command terms against official IB taxonomies, and audit syllabus codes programmatically.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-zinc-200 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
                Scoped Context Over Prompt Stuffing
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Rather than overloading 50-page PDFs into one giant context window, Nivoraib isolates specific subtask contracts, mitigating context rot and maintaining crisp instruction adherence.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-zinc-100">
                Zero Direct Ghostwriting
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                For coursework like Internal Assessments and Extended Essays, our agents scaffold inquiry, formulate knowledge questions, and moderate rubrics—without ever writing essays on behalf of students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Epistemic Boundary Notice */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-zinc-700 bg-white dark:bg-zinc-850 text-navy-900 dark:text-zinc-100 space-y-4 shadow-card dark:shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark dark:text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Epistemic Boundary &amp; Intellectual Honesty
          </div>
          <h2 className="text-xl font-extrabold text-navy-900 dark:text-zinc-100">
            Grounding Research in Educational Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            Our multi-agent architecture is inspired by recent advances in long-horizon LLM research demonstrating that harness engineering, state management, and decoupled auditing can increase task reliability significantly over raw model completions. We adapt these computer science principles specifically to the domain of IB Diploma teaching, while remaining committed to realistic claims: AI is a cognitive partner, not an infallible oracle.
          </p>
          <div className="pt-2">
            <Link
              href="/resources#research-horizon-gap"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-indigo hover:text-brand-purple dark:text-zinc-200 dark:hover:text-white transition-colors group"
            >
              <span>Read our Research to Product Alignment Brief</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection
        title="Join Us in Building the Future of IB Teacher Workspaces"
        subtitle="Discover our architecture, explore our mission, or get in touch with our team."
        primaryCtaText="Explore Platform"
        primaryCtaHref="/dashboard"
        secondaryCtaText="View Open Roles"
        secondaryCtaHref="/careers"
      />
    </div>
  );
}
