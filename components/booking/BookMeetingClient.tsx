"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Loader2,
  Mail,
  UserCheck,
} from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

const MEETING_SERVICES = [
  "Janitorial Lead Generation",
  "Sales Development & Appointment Setting",
  "Social Media Advertising",
  "Web Design & Development",
  "Graphic Design & Brand Identity",
  "Video Production & Editing",
  "Email Marketing & Cold Outreach",
  "Virtual Assistant & Operations",
];

const MEETING_PLATFORMS = [
  { id: "google-meet", label: "Google Meet", icon: Video },
  { id: "zoom", label: "Zoom Video", icon: Video },
  { id: "phone", label: "Phone Call", icon: Phone },
];

export function BookMeetingClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: MEETING_SERVICES[0],
    platform: "google-meet",
    preferredDate: "",
    preferredTime: "Morning (9am - 12pm EST)",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: `[Meeting Booking] ${formData.service} via ${formData.platform}`,
          budget: `Preferred Date/Time: ${formData.preferredDate || "Earliest available"} (${formData.preferredTime})`,
          message: `Company: ${formData.company || "Not provided"}\nPlatform: ${formData.platform}\nMeeting Notes: ${formData.notes || "None"}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to schedule meeting request. Please try again.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb & Eyebrow */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9204F]/20 bg-[#E9204F]/5 px-3 py-1 text-[11px] font-bold text-[#E9204F] uppercase tracking-wider mb-3">
            <Calendar className="h-3.5 w-3.5" />
            <span>Dedicated Consultation</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101010] leading-[1.12]">
            Book a Strategy &amp; Discovery Session
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Schedule a 25-minute direct consultation with our growth directors and technical engineers.
            Review territory exclusivity, technical scopes, and receive an upfront action plan with zero obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Agenda, Guarantees & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Call Agenda Card */}
            <div className="rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#EBEBEB] text-[#101010]">
                <Clock className="h-5 w-5 text-[#E9204F]" />
                <h2 className="font-heading text-lg font-bold">25-Minute Call Agenda</h2>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#101010] text-[11px] font-bold text-white">
                    1
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-bold text-[#101010]">
                      Current Pipeline &amp; Scope Audit
                    </h3>
                    <p className="text-[12.5px] text-[#525252] leading-snug mt-0.5">
                      We analyze your target market, geographical territory, or web development technical bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#101010] text-[11px] font-bold text-white">
                    2
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-bold text-[#101010]">
                      Live Feasibility &amp; Proof Walkthrough
                    </h3>
                    <p className="text-[12.5px] text-[#525252] leading-snug mt-0.5">
                      Review verified facility walkthrough samples, past ROI case studies, or live code architectures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#101010] text-[11px] font-bold text-white">
                    3
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-bold text-[#101010]">
                      Fixed-Scope Proposal &amp; SLA
                    </h3>
                    <p className="text-[12.5px] text-[#525252] leading-snug mt-0.5">
                      Get a transparent commercial proposal with verified delivery timelines and replacement guarantees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="mt-6 pt-5 border-t border-[#EBEBEB] space-y-2 text-[12px] text-[#525252]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                  <span>No high-pressure sales tactics — pure technical &amp; operational review</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#16A34A] shrink-0" />
                  <span>100% Confidentiality &amp; mutual NDA protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#E9204F] shrink-0" />
                  <span>Calendar invite sent immediately to your email</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Alternatives Card */}
            <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 shadow-xs space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                Prefer Direct Communication?
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#737373]">Direct Client Line</div>
                  <a
                    href={`tel:${RHEK_CONFIG.company.contactPhone}`}
                    className="text-[14px] font-bold text-[#101010] hover:text-[#E9204F] transition-colors"
                  >
                    {RHEK_CONFIG.company.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#F0F0F0]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#737373]">Direct Executive Email</div>
                  <a
                    href={`mailto:${RHEK_CONFIG.company.contactEmail}`}
                    className="text-[14px] font-bold text-[#101010] hover:text-[#E9204F] transition-colors"
                  >
                    {RHEK_CONFIG.company.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 sm:p-9 shadow-sm">
              {success ? (
                <div className="py-12 text-center space-y-5">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#101010]">
                      Meeting Request Confirmed!
                    </h3>
                    <p className="mt-2 text-[14px] text-[#525252] max-w-md mx-auto">
                      Thank you, <strong className="text-[#101010]">{formData.name}</strong>. Our team has received your request for{" "}
                      <strong className="text-[#101010]">{formData.service}</strong>. A calendar invite and meeting link will be delivered to{" "}
                      <strong className="text-[#101010]">{formData.email}</strong> within 2 hours.
                    </p>
                  </div>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="rounded-lg bg-[#101010] text-white px-5 py-2.5 text-[13px] font-bold hover:bg-[#E9204F] transition-colors"
                    >
                      Book Another Session
                    </button>
                    <Link
                      href="/"
                      className="rounded-lg border border-[#E5E5E5] px-5 py-2.5 text-[13px] font-bold text-[#101010] hover:bg-[#FAFAFA] transition-colors"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#101010]">
                      Select Meeting Details
                    </h3>
                    <p className="text-[13px] text-[#737373] mt-0.5">
                      Fill out the form below and we will confirm your preferred time slot immediately.
                    </p>
                  </div>

                  {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-3.5 text-[13px] text-red-700">
                      {error}
                    </div>
                  )}

                  {/* 1. Service of interest */}
                  <div>
                    <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                      Service Discussion Focus *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[13.5px] text-[#101010] focus:border-[#101010] focus:ring-1 focus:ring-[#101010] outline-none transition"
                      required
                    >
                      {MEETING_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Platform Selection */}
                  <div>
                    <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                      Preferred Meeting Platform *
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {MEETING_PLATFORMS.map((plat) => {
                        const Icon = plat.icon;
                        const isSelected = formData.platform === plat.id;
                        return (
                          <button
                            type="button"
                            key={plat.id}
                            onClick={() => setFormData({ ...formData, platform: plat.id })}
                            className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-[12.5px] font-semibold transition ${
                              isSelected
                                ? "bg-[#101010] border-[#101010] text-white shadow-xs"
                                : "bg-white border-[#E5E5E5] text-[#525252] hover:border-[#101010] hover:text-[#101010]"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            <span>{plat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Contact details grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[13.5px] text-[#101010] focus:border-[#101010] focus:ring-1 focus:ring-[#101010] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[13.5px] text-[#101010] focus:border-[#101010] focus:ring-1 focus:ring-[#101010] outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                        Company Name or Website
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Cleaning Services"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[13.5px] text-[#101010] focus:border-[#101010] focus:ring-1 focus:ring-[#101010] outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                        Preferred Time of Day
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[13.5px] text-[#101010] focus:border-[#101010] focus:ring-1 focus:ring-[#101010] outline-none transition"
                      >
                        <option value="Morning (9am - 12pm EST)">Morning (9am - 12pm EST)</option>
                        <option value="Afternoon (12pm - 4pm EST)">Afternoon (12pm - 4pm EST)</option>
                        <option value="Evening (4pm - 7pm EST)">Evening (4pm - 7pm EST)</option>
                        <option value="Flexible / As soon as possible">Flexible / As soon as possible</option>
                      </select>
                    </div>
                  </div>

                  {/* 4. Notes / Goals */}
                  <div>
                    <label className="block text-[12.5px] font-bold text-[#101010] mb-1.5">
                      Specific Questions or Project Scope (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target market, required volume, or current bottlenecks..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[13.5px] text-[#101010] focus:border-[#101010] focus:ring-1 focus:ring-[#101010] outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-[#101010] text-white py-3.5 px-6 font-bold text-[14px] transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 min-h-[48px]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Scheduling Meeting...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Meeting Reservation</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#737373] mt-2.5 flex items-center justify-center gap-1.5">
                      <UserCheck className="h-3.5 w-3.5 text-[#16A34A]" />
                      <span>Direct 1-on-1 access to decision-maker engineers &amp; directors.</span>
                    </p>
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
