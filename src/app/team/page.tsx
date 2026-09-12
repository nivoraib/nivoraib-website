import React from "react";
import SectionHeader from "@/components/SectionHeader";
import TeamCard from "@/components/TeamCard";
import CTASection from "@/components/CTASection";
import { TEAM_MEMBERS } from "@/data/team";
import Link from "next/link";

export const metadata = {
  title: "Team — NivoraIB",
  description: "Meet the founding team behind NivoraIB — the AI-powered workspace built for IB educators. Founded in New Delhi, 2026.",
};

export default function TeamPage() {
  // Only show departments that have at least one confirmed or TBD member in team.ts
  const departments = [
    "Founding Leadership",
    "AI & Systems Engineering",
    "Curriculum & Pedagogy",
    "Product & Design",
  ] as const;

  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="Our Team"
          title="Founded in New Delhi. Built for IB Teachers Worldwide."
          subtitle="NivoraIB was founded in 2026 by a team combining multi-agent AI engineering, IB curriculum expertise, and teacher-centered product design."
        />
      </section>

      {/* 2. Team Cards by Functional Department — Bento Balanced */}
      {departments.map((dept) => {
        const members = TEAM_MEMBERS.filter((m) => m.department === dept);
        if (members.length === 0) return null;

        return (
          <section key={dept} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-800 pb-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
                {dept}
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {members.length} {members.length === 1 ? "Role" : "Roles"}
              </span>
            </div>

            <div
              className={`grid grid-cols-1 ${
                members.length === 1
                  ? "max-w-2xl mx-auto w-full"
                  : members.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              } gap-6`}
            >
              {members.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        );
      })}

      {/* 3. CTA */}
      <CTASection
        badgeText="Our Team"
        title="Interested in Collaborating with Our Team?"
        subtitle="We actively partner with IB Diploma coordinators, experienced subject examiners, and systems engineers."
        primaryCtaText="Explore Open Roles"
        primaryCtaHref="/careers"
        secondaryCtaText="Contact Our Team"
        secondaryCtaHref="/contact?reason=partnership"
      />
    </div>
  );
}
