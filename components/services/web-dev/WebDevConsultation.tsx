"use client";

import { useState } from "react";
import { Mail, ShieldCheck, Clock, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "@/components/common/icons";

export function WebDevConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Design & Development",
    projectScope: "Corporate Platform ($4,800)",
    budget: "$4,800 - $10,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double-click race condition
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: `Web Dev: ${formData.projectScope}`,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation request.");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sec-10" className="border-t border-white/10 bg-[#0A0A0B] py-20 lg:py-28 text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 Columns): Contact Heading & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E9204F] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
                <span>Section 10 • Final Call to Action (CTA)</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
                Let&apos;s Build Your High-Performing Digital System.
              </h2>

              <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
                Connect directly with our engineering team. We will review your existing product or new specifications and deliver a comprehensive technical roadmap with fixed milestones.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3 text-[13.5px] text-white/90">
                  <Clock className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Guaranteed technical response within 24 business hours.</span>
                </div>
                <div className="flex items-start gap-3 text-[13.5px] text-white/90">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Standard NDA protection for all shared project materials.</span>
                </div>
                <div className="flex items-start gap-3 text-[13.5px] text-white/90">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Direct consultation with lead engineers — zero sales middlemen.</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373] block mb-1.5">
                Direct Contact
              </span>
              <a
                href="mailto:contact@rhekglobal.com"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-white hover:text-[#E9204F] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#E9204F]" />
                <span>contact@rhekglobal.com</span>
              </a>
            </div>
          </div>

          {/* Right Column (7 Columns): Consultation RFP Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121214] border border-white/10 p-7 sm:p-9 shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="h-14 w-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 mx-auto flex items-center justify-center text-[#10B981]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Technical Review Request Received
                </h3>
                <p className="text-[14px] text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                  Thank you. Our senior engineering team has received your project parameters and will reach out to <strong className="text-white">{formData.email}</strong> within 24 business hours with an initial architectural evaluation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#E9204F] hover:text-white transition-colors"
                >
                  <span>Submit another inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-xl bg-red-950/60 border border-red-500/40 p-3.5 text-[13px] text-red-200 flex items-start gap-2.5"
                  >
                    <AlertCircle className="h-4.5 w-4.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-[11.5px] font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-colors"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="email" className="block text-[11.5px] font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Scope Package */}
                  <div>
                    <label htmlFor="projectScope" className="block text-[11.5px] font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
                      Project Scope
                    </label>
                    <select
                      id="projectScope"
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full rounded-xl bg-[#18181B] border border-white/10 px-4 py-3 text-[14px] text-white focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-colors"
                    >
                      <option value="Landing Page ($2,200)">High-Impact Landing Page ($2,200)</option>
                      <option value="Corporate Platform ($4,800)">Full Corporate Platform ($4,800)</option>
                      <option value="Custom Web App">Custom Web Application (Bespoke Scope)</option>
                      <option value="Website Redesign / Audit">Website Redesign &amp; Performance Audit</option>
                    </select>
                  </div>

                  {/* Target Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-[11.5px] font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl bg-[#18181B] border border-white/10 px-4 py-3 text-[14px] text-white focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-colors"
                    >
                      <option value="$2,000 - $3,500">$2,000 – $3,500</option>
                      <option value="$4,800 - $10,000">$4,800 – $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11.5px] font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
                    Project Objectives &amp; Requirements *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your website, key requirements, target timeline, or link to your current platform..."
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-white placeholder-[#737373] focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button with Mutation Lock */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] py-3.5 px-6 text-[14px] font-bold text-white transition-all duration-200 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#E9204F]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9204F]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Technical Review Request</span>
                      <ArrowRight className="h-4.5 w-4.5" />
                    </>
                  )}
                </button>

                <p className="text-[11.5px] text-[#737373] text-center pt-1">
                  Zero spam guarantee. Your details are used strictly to prepare your architecture review.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
