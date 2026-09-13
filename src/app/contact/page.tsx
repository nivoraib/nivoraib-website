import React from "react";
import SectionHeader from "@/components/SectionHeader";

import { Mail, MessageSquare, School, ShieldCheck, Clock, MapPin, Server } from "lucide-react";

export const metadata = {
  title: "Contact Nivoraib — Inquiries, Demos & Partnerships",
  description: "Get in touch with the Nivoraib team for pilot access, school partnerships, curriculum inquiries, or partnership questions.",
  alternates: { canonical: "https://www.nivoraib.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col space-y-16 sm:space-y-20 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border-brand-soft/50 dark:border-zinc-700 inline-flex items-center gap-1.5">
              CONTACT
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-navy-900 dark:text-zinc-100">
            Let&apos;s talk about NivoraIB.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
            Schools, educators, and partners can reach us directly.
          </p>
        </div>
      </section>

      {/* 2. Primary Contact Options Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* General Contact */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 flex flex-col items-start space-y-2">
            <Mail className="w-6 h-6 text-brand-indigo dark:text-zinc-300" />
            <h3 className="text-lg font-bold text-navy-900 dark:text-zinc-100">General Contact</h3>
            <a href="mailto:contact@nivoraib.com" className="text-brand-indigo dark:text-zinc-300 hover:underline">contact@nivoraib.com</a>
          </div>
          {/* Information / General Inquiries */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 flex flex-col items-start space-y-2">
            <MessageSquare className="w-6 h-6 text-brand-indigo dark:text-zinc-300" />
            <h3 className="text-lg font-bold text-navy-900 dark:text-zinc-100">Information / General Inquiries</h3>
            <a href="mailto:info@nivoraib.com" className="text-brand-indigo dark:text-zinc-300 hover:underline">info@nivoraib.com</a>
          </div>
          {/* Partnerships */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 flex flex-col items-start space-y-2">
            <School className="w-6 h-6 text-brand-indigo dark:text-zinc-300" />
            <h3 className="text-lg font-bold text-navy-900 dark:text-zinc-100">Partnerships</h3>
            <a href="mailto:partnerships@nivoraib.com" className="text-brand-indigo dark:text-zinc-300 hover:underline">partnerships@nivoraib.com</a>
          </div>
          {/* Technical & Platform Support */}
          <div className="bg-white dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 flex flex-col items-start space-y-2">
            <Server className="w-6 h-6 text-brand-indigo dark:text-zinc-300" />
            <h3 className="text-lg font-bold text-navy-900 dark:text-zinc-100">Technical &amp; Platform Support</h3>
            <a href="mailto:devops@nivoraib.com" className="text-brand-indigo dark:text-zinc-300 hover:underline">devops@nivoraib.com</a>
          </div>
        </div>
      </section>

      {/* 3. Inquiry Routing */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-slate-50 dark:bg-zinc-850 rounded-2xl border border-slate-200 dark:border-zinc-700 p-6 space-y-4 text-sm">
          <h3 className="text-lg font-bold text-navy-900 dark:text-zinc-100">Inquiry Routing</h3>
          <div className="flex items-start gap-3">
            <School className="w-5 h-5 text-brand-indigo dark:text-zinc-300 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-navy-900 dark:text-zinc-100">School & Pilot Partnerships</strong>
              <p className="text-slate-500 dark:text-zinc-400 text-xs">
                For schools, IB DP coordinator teams, department heads, and pilot discussions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Server className="w-5 h-5 text-brand-indigo dark:text-zinc-300 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-navy-900 dark:text-zinc-100">Technical & Platform Matters</strong>
              <p className="text-slate-500 dark:text-zinc-400 text-xs">
                For website or platform issues, bug reports, technical suggestions, and requests for technical improvements.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-slate-500 dark:text-zinc-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-navy-900 dark:text-zinc-100">Headquarters</strong>
              <span className="text-slate-500 dark:text-zinc-400">New Delhi, India — Est. 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Privacy / Data Ethics */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs text-slate-500 dark:text-zinc-400 space-y-1.5">
          <div className="font-semibold text-navy-900 dark:text-zinc-100 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Privacy &amp; Data Ethics Guarantee
          </div>
          <p className="leading-relaxed">
            We never share educator or school contact information with third‑party advertisers. All correspondence adheres to strict academic data ethics.
          </p>
        </div>
      </section>
    </div>
  );
}
