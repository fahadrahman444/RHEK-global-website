"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Building2, MapPin, Calendar, UserCheck } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function JanitorialLeadsSection() {
  const janitorialService = RHEK_CONFIG.services.find((s) => s.id === "janitorial-leads");

  return (
    <section id="leads" className="site-container scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-[780px]">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-0.5 text-[10.5px] font-semibold text-[#101010] uppercase tracking-wider mb-2.5 shadow-2xs">
          <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
          <span>Pay Nothing Upfront Available</span>
        </div>

        <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-tight">
          Exclusive Commercial Cleaning Leads &amp; Walkthroughs
        </h2>

        <p className="mt-2 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#525252]">
          We connect commercial cleaning contractors directly with verified facility managers actively seeking daily, weekly, or specialized janitorial contracts.
        </p>
      </div>

      {/* Feature Highlights Grid */}
      <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2.5">
        {janitorialService?.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] p-2.5 sm:p-3 text-[11px] sm:text-[12.5px] font-semibold text-[#101010] transition-all duration-200 hover:bg-white hover:border-[#101010] hover:-translate-y-0.5 hover:shadow-2xs leading-snug"
          >
            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#E9204F] shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Live Leads Sample Showcase */}
      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#EBEBEB]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3.5 sm:mb-5">
          <div>
            <span className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
              Recent Sample Inquiries
            </span>
            <h3 className="text-[17px] sm:text-[22px] font-bold text-[#101010] mt-0.5 tracking-tight">
              Verified Decision-Maker Appointments
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-[#525252] bg-[#FAFAFA] border border-[#E5E5E5] px-3 py-1 rounded-full w-fit">
            <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="font-semibold text-[#101010]">100% Exclusive Protection</span>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-between text-[10.5px] text-[#737373] mb-2.5 px-0.5">
          <span>Swipe to browse verified appointments</span>
          <span className="font-semibold text-[#101010]">4 Samples →</span>
        </div>

        {/* Leads Cards: Structured Data Matrix with Visual Depth */}
        <div className="flex md:grid md:grid-cols-2 gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 scrollbar-none -mx-1 px-1 sm:mx-0 sm:px-0">
          {RHEK_CONFIG.leadSamples.map((lead) => (
            <div
              key={lead.id}
              className="min-w-[84%] sm:min-w-[380px] md:min-w-0 snap-center shrink-0 md:shrink group rounded-xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#101010] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Verified Pill */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#525252] bg-neutral-100/80 px-2 py-0.5 rounded border border-neutral-200/50">
                    {lead.companyType}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[10px] sm:text-[10.5px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Facility Title */}
                <h4 className="text-[15px] sm:text-[17px] font-bold text-[#101010] leading-snug group-hover:text-[#E9204F] transition-colors">
                  {lead.facility}
                </h4>

                {/* Structured 2x2 Data Matrix */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-[12px]">
                  <div className="rounded-lg bg-neutral-50/80 border border-neutral-200/60 p-2 sm:p-2.5">
                    <div className="flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                      <MapPin className="h-3 w-3 text-[#101010]" />
                      <span>Location</span>
                    </div>
                    <div className="font-semibold text-[#101010] mt-0.5 text-[12px] sm:text-[12.5px] truncate">
                      {lead.location}
                    </div>
                  </div>

                  <div className="rounded-lg bg-neutral-50/80 border border-neutral-200/60 p-2 sm:p-2.5">
                    <div className="flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                      <Building2 className="h-3 w-3 text-[#101010]" />
                      <span>Facility Size</span>
                    </div>
                    <div className="font-semibold text-[#101010] mt-0.5 text-[12px] sm:text-[12.5px] truncate">
                      {lead.sqft}
                    </div>
                  </div>

                  <div className="rounded-lg bg-neutral-50/80 border border-neutral-200/60 p-2 sm:p-2.5">
                    <div className="flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                      <Calendar className="h-3 w-3 text-[#101010]" />
                      <span>Schedule</span>
                    </div>
                    <div className="font-semibold text-[#101010] mt-0.5 text-[11.5px] sm:text-[12px] truncate">
                      {lead.schedule}
                    </div>
                  </div>

                  <div className="rounded-lg bg-neutral-50/80 border border-neutral-200/60 p-2 sm:p-2.5">
                    <div className="flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                      <UserCheck className="h-3 w-3 text-[#101010]" />
                      <span>Decision Maker</span>
                    </div>
                    <div className="font-semibold text-[#101010] mt-0.5 text-[11.5px] sm:text-[12px] truncate">
                      {lead.decisionMaker}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="mt-3.5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] sm:text-[11.5px]">
                <span className="text-[#64748B] flex items-center gap-1 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
                  <span>Territory Lock Ready</span>
                </span>
                <Link
                  href={`/contact?service=Janitorial%20Lead%20Generation&facility=${encodeURIComponent(lead.facility)}`}
                  className="text-[#101010] font-semibold group-hover:text-[#E9204F] transition-colors inline-flex items-center gap-1"
                >
                  <span>Request Walkthrough</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-5 sm:mt-7 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 rounded-xl bg-[#101010] p-4 sm:p-6 text-white shadow-md hover:shadow-xl transition-all duration-300">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E9204F] mb-1.5 sm:mb-2">
              <span>Leads From $110 / Scheduled Walkthrough</span>
            </div>
            <p className="font-heading text-[16px] sm:text-[20px] font-bold text-white leading-snug">
              Reserve exclusive janitorial appointments in your county.
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#A3A3A3] mt-1 font-sans">
              Direct Line:{" "}
              <a href="tel:+16466948464" className="text-white hover:text-[#E9204F] font-semibold underline">
                +1 (646) 694-8464
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/services/janitorial-leads"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/10 hover:bg-white hover:text-[#101010] border border-white/20 px-3 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold text-white transition-all min-h-[40px] whitespace-nowrap"
            >
              <span className="hidden sm:inline">Pricing &amp; Details</span>
              <span className="sm:hidden">Pricing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact?service=Janitorial%20Lead%20Generation"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-3 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold text-white transition-all min-h-[40px] whitespace-nowrap"
            >
              <span>Claim Territory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
