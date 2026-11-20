"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle, Loader2, ArrowRight, Calendar, Clock, MapPin } from "@/components/common/icons";
import { Button } from "@/components/common/Button";
import { TextInput, Select } from "@/components/common/FormControls";

interface ContactSectionProps {
  embedded?: boolean;
  defaultService?: string;
  customTitle?: string;
  customSubtitle?: string;
}

export function ContactSection({
  embedded = false,
  customTitle,
  customSubtitle,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    territory: "",
    volume: "10–20 Walkthroughs / mo ($1,500 – $3,000)",
    facilityFocus: "All Commercial Facilities",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.territory.trim()) {
      setError("Please provide your name, work email, and target territory.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please provide a valid business email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const compiledMessage = `Target Territory: ${formData.territory}. Desired Volume: ${formData.volume}. Facility Focus: ${formData.facilityFocus}.`;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: "Janitorial Lead Generation",
          budget: formData.volume,
          message: compiledMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccess(true);
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
    <section id="contact" className={embedded ? "py-4 px-3 sm:px-4" : "site-container"}>
      <div className="rounded-xl bg-brand-surface border border-brand-border p-5 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
          
          {/* Left Column: Direct Value & Trust Commitments */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="block mb-1 text-xs font-semibold uppercase tracking-widest text-brand-red">
                Territory Availability
              </span>
              <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-brand-black leading-snug tracking-tight">
                {customTitle || "Lock Your Commercial Territory & Walkthrough Flow"}
              </h2>
              <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-zinc-600">
                {customSubtitle ||
                  "Tell us your target county or metro area. We cross-reference active facility contracts and reply with territory availability within 24 hours."}
              </p>
            </div>

            {/* Clean Key Commitments */}
            <div className="space-y-3 pt-3 border-t border-zinc-200/70">
              <div className="flex items-start gap-2.5 text-[13px] text-zinc-700">
                <ShieldCheck className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-black">100% Territory Exclusivity:</span> Zero shared leads. You hold exclusive rights to all appointments in your contracted zone.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-[13px] text-zinc-700">
                <Clock className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-black">24-Hour SLA Delivery:</span> Receive territory availability, current facility volume counts, and onboarding specs.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-[13px] text-zinc-700">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-black">Pay-Nothing-Upfront Available:</span> Performance-aligned terms with zero upfront capital risk options.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Input High-Conversion Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-200/80 bg-white p-4 sm:p-7 shadow-xs">
              {success ? (
                <div className="py-6 text-center space-y-4" role="status">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-[20px] font-bold text-brand-black">
                      Territory Inquiry Logged
                    </h3>
                    <p className="mt-1 text-[13.5px] text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you! Our territory manager will inspect active facilities in <strong>{formData.territory}</strong> and email your custom availability report within 24 hours.
                    </p>
                  </div>

                  {/* Immediate Calendar Scheduling Step */}
                  <div className="pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      href="/book-a-meeting"
                      variant="primary"
                      size="md"
                      icon={<Calendar className="h-4 w-4" />}
                    >
                      Book Immediate 20-Min Strategy Call
                    </Button>
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="text-[12.5px] text-zinc-500 hover:text-black underline cursor-pointer"
                    >
                      Submit another territory
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-2.5 text-[12px] text-red-700" role="alert">
                      {error}
                    </div>
                  )}

                  {/* Input 1: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <TextInput
                      label="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                    />

                    <TextInput
                      label="Work Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@cleaningcompany.com"
                    />
                  </div>

                  {/* Input 2: Target Territory / County Location */}
                  <TextInput
                    label="Target Territory / County or City"
                    required
                    value={formData.territory}
                    onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
                    placeholder="e.g. Dallas & Tarrant County, TX (or list target zip codes)"
                  />

                  {/* Input 3: Desired Monthly Volume / Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Select
                      label="Desired Monthly Walkthroughs"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    >
                      <option value="5–10 Walkthroughs / mo ($800 – $1,500)">5–10 Walkthroughs / mo ($800 – $1,500)</option>
                      <option value="10–20 Walkthroughs / mo ($1,500 – $3,000)">10–20 Walkthroughs / mo ($1,500 – $3,000)</option>
                      <option value="20–40 Walkthroughs / mo ($3,000 – $5,000)">20–40 Walkthroughs / mo ($3,000 – $5,000)</option>
                      <option value="40+ Walkthroughs / mo (Enterprise Scale)">40+ Walkthroughs / mo (Enterprise Scale)</option>
                    </Select>

                    <Select
                      label="Facility Focus"
                      value={formData.facilityFocus}
                      onChange={(e) => setFormData({ ...formData, facilityFocus: e.target.value })}
                    >
                      <option value="All Commercial Facilities">All Commercial Facilities</option>
                      <option value="Medical & Healthcare Centers">Medical &amp; Healthcare Centers</option>
                      <option value="Corporate Office Towers">Corporate Office Towers</option>
                      <option value="Industrial & Warehousing">Industrial &amp; Warehousing</option>
                      <option value="Educational & Campuses">Educational &amp; Campuses</option>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    loading={loading}
                    className="w-full mt-2"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Check Territory Availability &amp; Get Scoping Report
                  </Button>

                  {/* Consolidated SLA Guarantee Note */}
                  <div className="pt-2 text-center text-[11.5px] text-zinc-500 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    <span>100% Exclusive Walkthroughs</span>
                    <span>·</span>
                    <span>Zero Shared Leads</span>
                    <span>·</span>
                    <span>24-Hour SLA Delivery</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}