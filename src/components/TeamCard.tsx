import React from "react";
import { TeamMember } from "@/data/team";
import { User, CheckCircle2, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-600 bg-white dark:bg-navy-900 p-6 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5 relative overflow-hidden group">
      <div className="space-y-4">
        {/* Avatar + Name/Role Row */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-brand-light dark:group-hover:bg-navy-750 group-hover:text-brand-dark dark:group-hover:text-brand-lavender transition-colors shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            {member.name ? (
              <>
                <h4 className="font-extrabold text-base text-navy-900 dark:text-white leading-snug">
                  {member.name}
                </h4>
                <span className="text-xs font-semibold text-brand-indigo dark:text-brand-lavender">
                  {member.roleTitle}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {member.department}
                </span>
              </>
            ) : (
              <>
                <h4 className="font-extrabold text-base text-navy-900 dark:text-white leading-snug">
                  {member.roleTitle}
                </h4>
                <span className="text-xs font-semibold text-brand-indigo dark:text-brand-lavender block">
                  {member.department}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Domain Focus */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Domain Focus:
          </div>
          <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
            {member.scope}
          </p>
        </div>

        {/* Core Scope */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-navy-800">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Core Scope:
          </div>
          <ul className="space-y-1.5">
            {member.responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-normal"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: LinkedIn link for confirmed members, or careers link for unconfirmed role */}
      <div className="pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
        {member.linkedIn ? (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name ?? member.roleTitle}'s LinkedIn profile`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-indigo dark:text-brand-lavender hover:text-brand-purple dark:hover:text-white transition-colors duration-150 group/li"
          >
            <Linkedin className="w-4 h-4 group-hover/li:scale-110 transition-transform duration-150" />
            <span>LinkedIn Profile</span>
          </a>
        ) : (
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-indigo dark:text-brand-lavender hover:text-brand-purple dark:hover:text-white transition-colors group/link"
          >
            <span>Explore Open Roles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}

