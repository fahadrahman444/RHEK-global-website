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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please provide your name and work email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid work email address.");
      return;
    }

    setLoading(true);
    setError(null);

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
      className={embedded ? "py-6 px-4" : "site-container"}
    >
      <div
        className={
          embedded
            ? "mx-auto max-w-[1080px]"
            : "bg-white py-2 sm:py-4"
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left Column: Context & Trust Signals */}
          <div className="lg:col-span-5">
            <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-1.5">
              Direct Scoping
            </span>
            <h2 className="font-heading text-[22px] sm:text-3xl font-bold tracking-[-0.035em] text-[#101010] leading-tight mb-2 sm:mb-3">
              {customTitle || "Start your engagement with a senior team."}
            </h2>
            <p className="text-[13.5px] sm:text-[15px] text-[#525252] leading-relaxed mb-5 sm:mb-7">
              {customSubtitle ||
                "Specify your target territory, project scope, or operational requirements. We reply with scoping details within 24 hours."}
            </p>

            {/* Trust Points */}
            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-[#EBEBEB]">
              <div className="group flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-[#FAFAFA]">
                <div className="flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#101010]">
                    24-Hour SLA Response
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#525252]">
                    Direct consultation from our lead generation and tech leads.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-[#FAFAFA]">
                <div className="flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#101010]">
                    Strict Exclusivity &amp; IP Protection
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#525252]">
                    Exclusive territory rights for janitorial leads and 100% IP ownership for code.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-[#FAFAFA]">
                <div className="flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#101010]">
                    Direct Correspondence
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#525252]">
                    Reach us directly at <span className="text-[#101010] font-semibold">{RHEK_CONFIG.company.contactEmail}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 sm:p-7 shadow-2xs">
              
              {success ? (
                <div className="text-center py-8" role="status">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A] mb-3">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#101010] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-[#525252] text-[14px] max-w-md mx-auto mb-5">
                    Thank you! Our technical and outreach team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white px-5 py-2 text-[13px] font-semibold text-[#101010] hover:border-[#101010] transition-colors min-h-[40px]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {error && (
                    <div
                      className="rounded-lg bg-red-50 border border-red-200 p-3 text-[13px] text-red-700"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="name" className="block text-[12.5px] font-semibold text-[#101010] mb-1">
                        Your Name <span className="text-[#E9204F]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[14px] text-[#101010] placeholder:text-neutral-400 focus:border-[#101010] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[12.5px] font-semibold text-[#101010] mb-1">
                        Work Email <span className="text-[#E9204F]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[14px] text-[#101010] placeholder:text-neutral-400 focus:border-[#101010] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Requirement Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-[12.5px] font-semibold text-[#101010] mb-1">
                      Required Discipline
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[14px] text-[#101010] focus:border-[#101010] focus:outline-none transition-colors"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <span className="block text-[12.5px] font-semibold text-[#101010] mb-1.5">
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
                            className={`rounded-lg px-3 py-2 text-[12px] font-semibold transition-colors min-h-[40px] inline-flex items-center justify-center ${
                              isSelected
                                ? "bg-[#101010] text-white"
                                : "bg-white border border-[#E5E5E5] text-[#525252] hover:border-[#101010] hover:text-[#101010]"
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
                    <label htmlFor="message" className="block text-[12.5px] font-semibold text-[#101010] mb-1">
                      Goals &amp; Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify target county/metro, required cleaning scope, or technical requirements..."
                      className="w-full rounded-lg border border-[#E5E5E5] bg-white p-3.5 text-[14px] text-[#101010] placeholder:text-neutral-400 focus:border-[#101010] focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 py-3 px-6 text-[13.5px] font-semibold text-white shadow-xs min-h-[46px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Scoping</span>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[12px] text-[#737373]">
                    Strict privacy policy. Direct technical correspondence only.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Pathway to FAQ */}
        {!embedded && (
          <div className="mt-10 pt-7 border-t border-[#EBEBEB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-[#525252] text-center sm:text-left">
              Questions regarding service level agreements, territory exclusivity, or onboarding?
            </p>
            <Link
              href="/contact#faq"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-4 py-2 text-[12.5px] font-semibold text-[#101010] transition-colors min-h-[40px]"
            >
              <span>Read Client FAQs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
