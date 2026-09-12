"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useComingSoon } from "@/components/ComingSoonModal";

export default function HeroCTAs() {
  const { openComingSoon } = useComingSoon();

  return (
    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
      <button
        onClick={() => openComingSoon("Homepage Hero")}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 group cursor-pointer"
      >
        <span>Explore the Platform</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
      </button>

      <Link
        href="/contact"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-navy-900 dark:hover:bg-navy-850 text-slate-800 dark:text-slate-100 font-semibold text-base border border-slate-300 dark:border-navy-700 shadow-2xs hover:border-slate-400 dark:hover:border-navy-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150"
      >
        <span>Talk to Us</span>
      </Link>
    </div>
  );
}
