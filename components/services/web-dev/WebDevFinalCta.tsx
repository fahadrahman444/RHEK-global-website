"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export function WebDevFinalCta() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tier, setTier] = useState("Professional Business ($4,800)");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!fullName.trim() || !email.trim()) {
      setErrorMsg("Please provide your name and business email address.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          service: "Web Design & Development",
          budget: tier,
          message: notes || `Meeting request for Web Development tier: ${tier}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to transmit meeting request. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="py-20 md:py-28 bg-[#101010] text-white relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 6 Cols */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9204F] text-[11px] font-bold uppercase tracking-wider">
              <Calendar className="h-3.5 w-3.5" />
              <span>Step 8 · Direct Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.12]">
              Ready to Upgrade Your Web Infrastructure? <span className="text-[#E9204F]">Book a Meeting.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
              Schedule a 30-minute technical discovery call with our lead web architects. We will audit your current website, map out your requirements, and deliver a detailed scope with fixed timeline and quotation.
            </p>

            {/* What to Expect Callout */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#A3A3A3]">
                What You Get on the Strategy Call:
              </p>
              <div className="space-y-2.5 text-[13.5px] text-[#E0E0E0]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                  <span>Free architectural and Core Web Vitals diagnostic of your current site.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                  <span>Recommended tech stack, database model, and sitemap blueprint.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                  <span>Guaranteed milestone timeline and transparent fixed-bid quotation.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-2 flex flex-wrap gap-6 text-[13px] text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#E9204F]" />
                <span>30-Min Discovery Call</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#E9204F]" />
                <span>100% Confidential (NDA)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Cols Booking Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Request a Discovery Call
              </h3>
              <p className="text-[13px] text-[#A3A3A3] mb-6">
                Fill in your details below and our lead engineer will confirm your slot within 4 hours.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Meeting Request Received!</h4>
                  <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName}</span>. We have received your project details and will send a calendar invitation to <span className="text-white font-semibold">{email}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[13px]">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#737373] text-[14px] focus:outline-none focus:border-[#E9204F] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#737373] text-[14px] focus:outline-none focus:border-[#E9204F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#737373] text-[14px] focus:outline-none focus:border-[#E9204F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                      Interested Package
                    </label>
                    <select
                      value={tier}
                      onChange={(e) => setTier(e.target.value)}
                      aria-label="Interested Package"
                      className="w-full h-11 px-3 rounded-xl bg-[#1A1A1C] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#E9204F] transition-colors"
                    >
                      <option value="Starter Website ($2,500)">Starter Website ($2,500 · 2 Weeks)</option>
                      <option value="Professional Business ($4,800)">Professional Business ($4,800 · Most Popular)</option>
                      <option value="Enterprise Web App ($9,500+)">Enterprise Web App ($9,500+ · Custom)</option>
                      <option value="Custom Scope / Audit Only">Custom Scope / Free Q4 Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                      Project Notes / Current Website URL
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your project goals or provide your current website link..."
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-[#737373] text-[14px] focus:outline-none focus:border-[#E9204F] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white font-bold text-[15px] shadow-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Scheduling Discovery Call...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm &amp; Book Discovery Meeting</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
