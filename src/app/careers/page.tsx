import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CareerCard from "@/components/CareerCard";
import CTASection from "@/components/CTASection";
import { CAREER_ROLES } from "@/data/careers";
import { Sparkles, Brain, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers — Join NivoraIB",
  description: "Join the NivoraIB team and help build the AI-powered workspace for IB educators. Open roles in AI engineering, curriculum, and product design.",
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

  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="Join Our Mission"
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

      {/* 3. Open Roles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 dark:text-zinc-100">
              Open Roles &amp; Opportunities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
              Roles across AI engineering, curriculum expertise, and product design.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-850 px-3 py-1 rounded-full border border-slate-200 dark:border-zinc-700">
            {CAREER_ROLES.length} Openings
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAREER_ROLES.map((role) => (
            <CareerCard key={role.id} role={role} />
          ))}
        </div>
      </section>

      {/* 4. Open Application */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white dark:bg-zinc-850 text-navy-900 dark:text-zinc-100 rounded-2xl p-8 sm:p-10 text-center space-y-5 shadow-card dark:shadow-xl border border-slate-200/90 dark:border-zinc-700">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-dark dark:text-zinc-300">
            Open Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100">
            Don&rsquo;t See an Exact Match for Your Domain?
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
            If you are an experienced IB Diploma teacher, examiner, or AI researcher passionate about elevating education through high-reliability tools, we would love to hear from you.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?reason=careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-bold text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
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
