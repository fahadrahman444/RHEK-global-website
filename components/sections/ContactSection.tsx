"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, CheckCircle, Loader2, ArrowRight, Calendar } from "lucide-react";

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
      className={embedded ? "py-4 px-3 sm:px-4" : "site-container"}
    >
      <div
        className={
          embedded
            ? "mx-auto max-w-[1080px]"
            : "bg-white py-1 sm:py-3"
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left Column: Context, Trust Signals & Direct Meeting Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#737373] mb-1">
                Direct Scoping
              </span>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold tracking-[-0.03em] text-[#101010] leading-snug mb-1.5">
                {customTitle || "Start your engagement with a senior team."}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#525252] leading-relaxed">
                {customSubtitle ||
                  "Specify your target territory, project scope, or operational requirements. We reply with scoping details within 24 hours."}
              </p>
            </div>

            {/* Compact Trust Badges (Horizontal / 2-Col on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 pt-3 border-t border-[#EBEBEB]">
              <div className="flex items-center gap-2.5 rounded-lg p-2 bg-[#FAFAFA] border border-[#EBEBEB]/80 text-[#101010]">
                <Clock className="h-4 w-4 text-[#101010] shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-[12px] font-bold text-[#101010] leading-tight">
                    24-Hour SLA Response
                  </h4>
                  <p className="text-[11px] text-[#737373] truncate">
                    Direct tech and outreach consultation.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg p-2 bg-[#FAFAFA] border border-[#EBEBEB]/80 text-[#101010]">
                <ShieldCheck className="h-4 w-4 text-[#101010] shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-[12px] font-bold text-[#101010] leading-tight">
                    Territory Exclusivity &amp; IP
                  </h4>
                  <p className="text-[11px] text-[#737373] truncate">
                    Exclusive county rights &amp; 100% IP ownership.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg p-2 bg-[#FAFAFA] border border-[#EBEBEB]/80 text-[#101010] sm:col-span-2 lg:col-span-1">
                <Mail className="h-4 w-4 text-[#101010] shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-[12px] font-bold text-[#101010] leading-tight">
                    Direct Executive Inbox
                  </h4>
                  <p className="text-[11px] text-[#737373] truncate">
                    {RHEK_CONFIG.company.contactEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Meeting Booking Pill Card */}
            <div className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-3 sm:p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#101010] text-white shrink-0">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#101010] leading-tight">
                    Prefer a live walkthrough?
                  </div>
                  <div className="text-[11px] text-[#737373]">
                    Book a 20-min scoping call directly on our calendar.
                  </div>
                </div>
              </div>
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center gap-1 rounded-lg bg-white border border-[#EBEBEB] hover:border-[#101010] px-3 py-1.5 text-[11.5px] font-semibold text-[#101010] whitespace-nowrap transition-colors shrink-0 shadow-2xs"
              >
                <span>Book Call</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: Compact Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-4 sm:p-5 shadow-2xs">
              
              {success ? (
                <div className="text-center py-6" role="status">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A] mb-2.5">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#101010] mb-1.5">
                    Inquiry Received
                  </h3>
                  <p className="text-[#525252] text-[13px] max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you! Our technical and outreach team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white px-4 py-1.5 text-[12.5px] font-semibold text-[#101010] hover:border-[#101010] transition-colors min-h-[36px]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  
                  {error && (
                    <div
                      className="rounded-lg bg-red-50 border border-red-200 p-2.5 text-[12px] text-red-700"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="name" className="block text-[11.5px] font-semibold text-[#101010] mb-1">
                        Your Name <span className="text-[#E9204F]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-1.5 text-[13px] text-[#101010] placeholder:text-neutral-400 focus:border-[#101010] focus:outline-none transition-colors min-h-[36px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11.5px] font-semibold text-[#101010] mb-1">
                        Work Email <span className="text-[#E9204F]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-1.5 text-[13px] text-[#101010] placeholder:text-neutral-400 focus:border-[#101010] focus:outline-none transition-colors min-h-[36px]"
                      />
                    </div>
                  </div>

                  {/* Service Requirement Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-[11.5px] font-semibold text-[#101010] mb-1">
                      Required Discipline
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-1.5 text-[13px] text-[#101010] focus:border-[#101010] focus:outline-none transition-colors min-h-[36px]"
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
                    <span className="block text-[11.5px] font-semibold text-[#101010] mb-1">
                      Estimated Project Budget
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {budgetOptions.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`rounded-lg px-2.5 py-1 text-[11.5px] font-semibold transition-colors min-h-[34px] inline-flex items-center justify-center ${
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

                  {/* Message Field (Snug 3 rows) */}
                  <div>
                    <label htmlFor="message" className="block text-[11.5px] font-semibold text-[#101010] mb-1">
                      Goals &amp; Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify target county/metro, required cleaning scope, or technical requirements..."
                      className="w-full rounded-lg border border-[#E5E5E5] bg-white p-2.5 text-[13px] text-[#101010] placeholder:text-neutral-400 focus:border-[#101010] focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 py-2.5 px-4 text-[13px] font-semibold text-white shadow-2xs min-h-[42px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Scoping</span>
                        <ArrowRight className="h-3.5 w-3.5 text-white" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#737373]">
                    Strict confidentiality &amp; direct technical correspondence.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Pathway to FAQ */}
        {!embedded && (
          <div className="mt-6 pt-4 border-t border-[#EBEBEB] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[13px] text-[#525252] text-center sm:text-left">
              Questions regarding service level agreements, territory exclusivity, or onboarding?
            </p>
            <Link
              href="/contact#faq"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-3.5 py-1.5 text-[12px] font-semibold text-[#101010] transition-colors min-h-[36px]"
            >
              <span>Read Client FAQs</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
