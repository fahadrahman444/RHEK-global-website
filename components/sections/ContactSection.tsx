"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, CheckCircle, Loader2, ArrowRight } from "lucide-react";

import { RHEK_CONFIG } from "@/data/rhek-config";

const budgetOptions = ["< $5k", "$5k – $15k", "$15k – $30k", "$30k+"];

const serviceOptions = [
  "Janitorial Lead Generation",
  "Sales Development & Appointment Setting",
  "Social Media Advertising",
  "Web Design & Development (3D & Full-Stack)",
  "Graphic Design & Brand Identity",
  "Video Editing & Production",
  "Email Marketing & Outreach",
  "Virtual Assistant & Administrative Support",
];

interface ContactSectionProps {
  embedded?: boolean;
  defaultService?: string;
  customTitle?: string;
  customSubtitle?: string;
}

export function ContactSection({
  embedded = false,
  defaultService,
  customTitle,
  customSubtitle,
}: ContactSectionProps) {
  const initialService = defaultService
    ? serviceOptions.find((s) => s.toLowerCase() === defaultService.toLowerCase()) || defaultService
    : serviceOptions[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialService,
    budget: budgetOptions[1],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultService) {
      const matched = serviceOptions.find(
        (s) =>
          s.toLowerCase() === defaultService.toLowerCase() ||
          s.toLowerCase().replace(/[^a-z0-9]/g, "-") === defaultService.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched }));
      }
    }
  }, [defaultService]);

  useEffect(() => {
    function selectService(serviceName: string) {
      const decoded = decodeURIComponent(serviceName).trim().toLowerCase();
      const matched = serviceOptions.find((s) => {
        const item = s.toLowerCase();
        return (
          item === decoded ||
          item.replace(/[^a-z0-9]/g, "-") === decoded.replace(/[^a-z0-9]/g, "-") ||
          item.includes(decoded)
        );
      });
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched }));
      }
    }

    function syncServiceFromUrl() {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        selectService(serviceParam);
      }
    }

    function handleCustomEvent(e: Event) {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        selectService(customEvent.detail);
      }
    }

    syncServiceFromUrl();
    window.addEventListener("popstate", syncServiceFromUrl);
    window.addEventListener("hashchange", syncServiceFromUrl);
    window.addEventListener("rhek-select-service", handleCustomEvent);

    return () => {
      window.removeEventListener("popstate", syncServiceFromUrl);
      window.removeEventListener("hashchange", syncServiceFromUrl);
      window.removeEventListener("rhek-select-service", handleCustomEvent);
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return; // Mutation lock prevents double submission race condition

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        service: serviceOptions[0],
        budget: budgetOptions[1],
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className={embedded ? "py-12 lg:py-16 px-6 lg:px-10" : "site-container"}
    >
      <div
        className={
          embedded
            ? "mx-auto max-w-[1080px]"
            : "bg-white rounded-[32px] shadow-sm border border-[#F3F3F3] p-8 sm:p-12 lg:p-14"
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Trust Signals */}
          <div className="lg:col-span-5">
            <span className="inline-block text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] bg-[#FAFAFA] border border-[#F3F3F3] px-3.5 py-1 rounded-full mb-3 shadow-2xs font-display">
              Direct Inquiry &amp; Scoping
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-[#101010] leading-tight mb-4">
              {customTitle || "Start your project with a senior technical team."}
            </h2>
            <p className="text-[17px] text-[#747474] leading-relaxed mb-8 font-sans">
              {customSubtitle ||
                "Tell us about your product vision, timeline, and goals. We review every inquiry carefully and reply with technical feedback within 24 hours."}
            </p>

            {/* Trust Points */}
            <div className="space-y-4 pt-4 border-t border-[#F3F3F3]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#F3F3F3] text-[#E9204F]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold font-display text-[#101010]">
                    &lt; 24-Hour Response SLA
                  </h4>
                  <p className="text-[14px] text-[#747474] font-sans">
                    Direct feedback from senior full-stack developers, not automated sales reps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#F3F3F3] text-[#E9204F]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold font-display text-[#101010]">
                    Strict NDA &amp; IP Protection
                  </h4>
                  <p className="text-[14px] text-[#747474] font-sans">
                    100% of the intellectual property, designs, and code belong entirely to you upon completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#F3F3F3] text-[#E9204F]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold font-display text-[#101010]">
                    Direct Client Channel
                  </h4>
                  <p className="text-[14px] text-[#747474] font-sans">
                    Reach us directly at <span className="text-[#E9204F] font-bold font-display">{RHEK_CONFIG.company.contactEmail}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#F3F3F3] bg-[#FAFAFA] p-6 sm:p-8 shadow-sm">
              
              {success ? (
                <div className="text-center py-10" role="status">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9204F]/10 text-[#E9204F] mb-4">
                    <CheckCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-[#101010] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-[#747474] text-[15px] max-w-md mx-auto mb-6 font-sans">
                    Thank you! An engineer will review your project requirements and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#101010] bg-white px-6 py-2.5 text-[13px] font-bold font-display uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {error && (
                    <div
                      className="rounded-xl bg-red-50 border border-red-200 p-3.5 text-[13px] text-red-700"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-bold font-display text-[#101010] mb-1.5">
                        Your Name <span className="text-[#E9204F]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-[#F3F3F3] bg-white px-4 py-2.5 text-[14px] text-[#101010] placeholder:text-slate-400 focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[13px] font-bold font-display text-[#101010] mb-1.5">
                        Work Email <span className="text-[#E9204F]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-[#F3F3F3] bg-white px-4 py-2.5 text-[14px] text-[#101010] placeholder:text-slate-400 focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Requirement Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-[13px] font-bold font-display text-[#101010] mb-1.5">
                      Required Service Discipline
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-[#F3F3F3] bg-white px-4 py-2.5 text-[14px] text-[#101010] focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-all"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <span className="block text-[13px] font-bold font-display text-[#101010] mb-2">
                      Estimated Project Budget
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`rounded-full px-3.5 py-1.5 text-[12px] font-bold font-display uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] inline-flex items-center justify-center ${
                              isSelected
                                ? "bg-[#E9204F] text-white shadow-xs"
                                : "bg-white border border-[#F3F3F3] text-[#101010] hover:bg-[#101010] hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-[13px] font-bold font-display text-[#101010] mb-1.5">
                      Project Goals &amp; Scope Overview
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you want to build, current challenges, and ideal timeline..."
                      className="w-full rounded-xl border border-[#F3F3F3] bg-white p-4 text-[14px] text-[#101010] placeholder:text-slate-400 focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E9204F] hover:bg-[#101010] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] py-3 px-6 text-[14px] font-extrabold font-display uppercase tracking-wider text-white shadow-md min-h-[48px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[12px] text-[#747474] font-sans">
                    We respect your privacy. No marketing spam, ever.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Pathway to FAQ & Full Contact Hub */}
        {!embedded && (
          <div className="mt-12 pt-8 border-t border-[#F3F3F3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[15px] text-[#747474] font-sans text-center sm:text-left">
              Have questions about pricing, IP ownership, sprint timelines, or our tech stack?
            </p>
            <Link
              href="/contact#faq"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#101010] bg-white hover:bg-[#101010] hover:text-white px-6 py-2.5 text-[13px] font-bold font-display uppercase tracking-wider text-[#101010] shadow-xs transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px]"
            >
              <span>Read Client FAQs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
