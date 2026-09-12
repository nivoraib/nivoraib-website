import React from "react";
import { CareerRole } from "@/data/careers";
import { Briefcase, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareerCard({ role }: { role: CareerRole }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 bg-white dark:bg-zinc-850 p-6 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-6 group">
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-zinc-200 bg-brand-light dark:bg-zinc-800 px-2.5 py-0.5 rounded-full border border-brand-soft/40 dark:border-zinc-700">
            {role.department}
          </span>
          <h3 className="text-xl font-extrabold text-navy-900 dark:text-zinc-100 mt-2 group-hover:text-brand-indigo dark:group-hover:text-white transition-colors">
            {role.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-zinc-400 mt-2">
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
              {role.type}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
              {role.location}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
          {role.summary}
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            Key Focus Areas:
          </div>
          <ul className="space-y-1.5">
            {role.focusAreas.map((area, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-end">
        <Link
          href={`/contact?subject=Career Inquiry - ${encodeURIComponent(role.title)}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-dark dark:text-zinc-200 hover:text-brand-indigo dark:hover:text-white transition-colors group-hover:translate-x-0.5"
        >
          <span>Apply / Express Interest</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
