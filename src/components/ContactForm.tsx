"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    reason: "demo",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-750 p-6 sm:p-8 lg:p-10 shadow-card">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800/60">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-navy-900 dark:text-white">
            Thank You for Reaching Out
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Your inquiry has been received. A member of our team will contact you directly within 1–2 business days.
          </p>
          <button
            onClick={() => {
              setFormData({ name: "", email: "", organization: "", reason: "demo", message: "" });
              setStatus("idle");
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-navy-900 dark:bg-brand-indigo text-white text-xs font-bold hover:bg-navy-800 dark:hover:bg-brand-indigo/90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
              Get in Touch with Nivoraib
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Inquire about pilot access, teacher workshops, technical architecture, or joining the team.
            </p>
          </div>

          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Please fill in your name, email, and message before submitting.</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Dr. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 text-sm text-navy-900 dark:text-white bg-white dark:bg-navy-850 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah.jenkins@isb.edu"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 text-sm text-navy-900 dark:text-white bg-white dark:bg-navy-850 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="org" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                School or Organization
              </label>
              <input
                id="org"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. International School of Geneva"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 text-sm text-navy-900 dark:text-white bg-white dark:bg-navy-850 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="reason" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Reason for Contact <span className="text-rose-500">*</span>
              </label>
              <select
                id="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-navy-700 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 text-sm text-navy-900 dark:text-white bg-white dark:bg-navy-850 outline-none transition-all"
              >
                <option value="demo">Request Product Demo &amp; Pilot</option>
                <option value="partnership">School / Institutional Partnership</option>
                <option value="careers">Careers &amp; Open Roles</option>
                <option value="research">Research &amp; Curriculum Inquiry</option>
                <option value="general">General Question</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your DP subjects, current teacher planning pain points, or inquiries..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-navy-700 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 text-sm text-navy-900 dark:text-white bg-white dark:bg-navy-850 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all resize-y"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </div>

          <div className="text-center text-[11px] text-slate-500 dark:text-slate-400">
            We respect your privacy. No marketing spam. Inquiries routed directly to founding team.
          </div>
        </form>
      )}
    </div>
  );
}
