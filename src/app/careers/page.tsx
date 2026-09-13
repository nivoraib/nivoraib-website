import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { Sparkles, Brain, Compass, Layers, Palette, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers — Open to Talent at NivoraIB",
  description: "Explore opportunities to build with NivoraIB across Full Stack, AI, and UI/UX. Connect with our founding team.",
};

export default function CareersPage() {
  const values = [
    {
      title: "Pedagogical Empathy",
      desc: "We spend real time observing IB teachers grading Internal Assessments at 10 PM and building lesson plans. We design for their cognitive load, not for AI hype.",
      icon: Compass,
    },
    {
      title: "Deterministic Discipline",
      desc: "We value programmatic guarantees, verifiable arithmetic, and strict typing over brittle prompt hacks. If an agent claims to cover a syllabus code, we verify it in code.",
      icon: Brain,
    },
    {
      title: "Intellectual Honesty",
      desc: "We never exaggerate AI accuracy, claim zero-hallucination silver bullets, or push autonomous publishing. We keep educators firmly in the driver's seat.",
      icon: Sparkles,
    },
  ];

  const focusAreas = [
    {
      title: "Full Stack",
      role: "Platform & Workspace Engineering",
      desc: "Building high-density, real-time teacher workspace interfaces with Next.js, TypeScript, robust state management, and reliable full-stack architecture.",
      icon: Layers,
    },
    {
      title: "AI",
      role: "Multi-Agent Systems & Verification",
      desc: "Engineering decoupled agent pipelines, curriculum-grounded retrieval systems, and deterministic audit gates that eliminate context rot.",
      icon: Brain,
    },
    {
      title: "UI/UX",
      role: "Product Design & Cognitive Ergonomics",
      desc: "Designing intuitive, accessible pedagogical interfaces that reduce teacher burnout, streamline unit pacing, and make complex workflows feel effortless.",
      icon: Palette,
    },
  ];

  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="Careers &amp; Talent"
          title="Build the Academic AI Workspace That Teachers Actually Trust"
          subtitle="We are assembling a team of multi-agent systems engineers, curriculum specialists, and experienced IB educators to build the most reliable AI workspace for IB Diploma teachers."
        />
      </section>

      {/* 2. How We Work / Values */}
      <section className="bg-slate-50 dark:bg-zinc-950 py-16 border-y border-slate-200/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <SectionHeader
            badge="Our Culture"
            title="How We Work"
            subtitle="Grounding cutting-edge long-horizon AI research into reliable, teacher-centered software."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 flex items-center justify-center border border-brand-soft/50 dark:border-zinc-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-zinc-100">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Open to Talent / Conversations */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-dark dark:text-zinc-300 bg-brand-light/80 dark:bg-zinc-800 px-3 py-1 rounded-full border border-brand-soft/60 dark:border-zinc-700 inline-block">
            Open to Talent
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-zinc-100 tracking-tight">
            We&rsquo;re Open to Conversations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            We&rsquo;re open to hearing from talented people interested in building with NivoraIB across Full Stack, AI, and UI/UX. If you&rsquo;d like to explore working with us, share your resume with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 flex items-center justify-center border border-brand-soft/50 dark:border-zinc-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy-900 dark:text-zinc-100">
                      {area.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-indigo dark:text-zinc-300 mt-0.5">
                      {area.role}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resume Submission Box */}
        <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200/90 dark:border-zinc-700 p-8 sm:p-10 text-center space-y-5 shadow-card dark:shadow-xl max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800/60">
            <Mail className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-navy-900 dark:text-zinc-100">
              Share Your Resume with NivoraIB
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-lg mx-auto leading-relaxed">
              While we do not have formal openings listed right now, we actively review resumes and portfolios from talented builders and educators who want to shape the future of IB teacher tools.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:careers@nivoraib.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-bold text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] group"
            >
              <Mail className="w-4 h-4" />
              <span>careers@nivoraib.com</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        badgeText="Careers at NivoraIB"
        title="Ready to Build the AI Workspace for IB Teachers?"
        subtitle="Start a conversation with our team or learn more about the NivoraIB platform."
        primaryCtaText="Contact Us"
        primaryCtaHref="/contact"
        secondaryCtaText="Read Research Briefs"
        secondaryCtaHref="/resources"
      />
    </div>
  );
}
