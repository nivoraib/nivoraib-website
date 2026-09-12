import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV } from "@/data/navigation";
import { ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-zinc-300 pt-16 pb-12 border-t border-slate-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-zinc-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 shrink-0 bg-white dark:bg-white/95 rounded-lg p-0.5 border border-slate-200/80 dark:border-zinc-700/80 shadow-2xs">
                <Image
                  src="/logo/1788871377642.jpg"
                  alt="Nivoraib Logo"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="w-full h-full object-contain rounded-md group-hover:scale-105 transition-transform duration-150"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-navy-900 dark:text-zinc-100 group-hover:text-brand-indigo dark:group-hover:text-zinc-200 transition-colors duration-150">
                  Nivoraib
                </span>
                <span className="text-xs text-brand-indigo dark:text-zinc-300 font-medium">
                  AI Workspace for IB Teachers
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              NivoraIB is an AI-powered workspace that helps IB educators plan, teach, assess, and manage their teaching workflows in one place.
            </p>

            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-750 shadow-2xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <div className="font-semibold text-navy-900 dark:text-zinc-100">
                  The Core Reliability Invariant
                </div>
                <div className="font-mono text-emerald-700 dark:text-emerald-300 text-[11px]">
                  Generated ≠ Validated ≠ Approved ≠ Published
                </div>
                <p className="text-slate-500 dark:text-zinc-400 text-[11px] leading-snug">
                  Zero-token deterministic audit gates protect academic integrity before human sign-off.
                </p>
              </div>
            </div>
          </div>

          {/* Product Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-zinc-100">
              Platform &amp; Workflows
            </div>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="text-slate-600 dark:text-zinc-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reliability Architecture Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-zinc-100">
              Reliability &amp; AI
            </div>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.reliability.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="text-slate-600 dark:text-zinc-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-zinc-100">
              Company &amp; Docs
            </div>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="text-slate-600 dark:text-zinc-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_NAV.resources.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="text-slate-600 dark:text-zinc-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-500 dark:text-zinc-400">
          <p className="leading-relaxed">
            <strong className="text-slate-700 dark:text-zinc-300">Disclaimer:</strong> Nivoraib is an independent educational technology startup. International Baccalaureate® and IB® are registered trademarks owned by the International Baccalaureate Organization. Nivoraib is not affiliated with, officially endorsed by, or sponsored by the International Baccalaureate Organization. All curriculum frameworks mentioned are for contextual grounding of teacher-owned academic workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-zinc-800/60 text-slate-500 dark:text-zinc-400">
            <div>
              &copy; 2026 NivoraIB. New Delhi, India. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                Product Philosophy
              </Link>
              <Link href="/contact" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
              <span className="text-slate-300 dark:text-zinc-700">|</span>
              <span className="text-slate-500 dark:text-zinc-400 text-[11px]">
                Built for DP Educators Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
