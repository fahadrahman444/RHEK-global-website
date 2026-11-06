"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight } from "@/components/common/icons";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export function JanitorialLeadsSection() {
  return (
    <section id="leads" className="site-container scroll-mt-24">
      {/* 1. Section Header & Value Positioning */}
      <div className="max-w-[820px]">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200/60 px-3 py-1 text-[11px] font-semibold text-[#E9204F] uppercase tracking-wider mb-3">
          <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
          <span>Pay Nothing Upfront Available</span>
        </div>

        <h2 className="font-heading text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-[#101010] tracking-tight leading-[1.15]">
          Exclusive Commercial Cleaning Leads &amp; Walkthroughs
        </h2>

        <p className="mt-2.5 text-[15px] sm:text-[17px] leading-relaxed text-zinc-600 max-w-[720px]">
          We connect commercial cleaning contractors directly with verified facility managers actively seeking daily, weekly, or specialized janitorial contracts.
        </p>

        {/* Primary In-Flow Conversion CTA */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
          <Link
            href="/contact?service=Janitorial%20Lead%20Generation"
            className="inline-flex items-center gap-2 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Claim Your Territory</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services/janitorial-leads"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2.5 text-[13.5px] font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Check Territory Availability</span>
          </Link>
        </div>
      </div>

      {/* 2. 3 Clear Value Pillars — Compact on mobile */}
      <div className="mt-4 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4">
        <div className="p-3 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] transition-all hover:border-slate-300 hover:bg-white hover:shadow-2xs">
          <div className="flex items-center gap-2 text-[#101010] font-bold text-[13.5px] sm:text-[14.5px]">
            <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
            <span>Zero Shared Bids</span>
          </div>
          <p className="mt-1 sm:mt-1.5 text-[12px] sm:text-[13px] text-zinc-600 leading-snug sm:leading-relaxed">
            Every lead is locked exclusively to your cleaning business in your local territory. Never resold or shared with competitors.
          </p>
        </div>

        <div className="p-3 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] transition-all hover:border-slate-300 hover:bg-white hover:shadow-2xs">
          <div className="flex items-center gap-2 text-[#101010] font-bold text-[13.5px] sm:text-[14.5px]">
            <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
            <span>Pre-Vetted Decision Makers</span>
          </div>
          <p className="mt-1 sm:mt-1.5 text-[12px] sm:text-[13px] text-zinc-600 leading-snug sm:leading-relaxed">
            Walkthroughs are booked directly with verified property managers, facility heads, and operational directors with budget authority.
          </p>
        </div>

        <div className="p-3 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] transition-all hover:border-slate-300 hover:bg-white hover:shadow-2xs">
          <div className="flex items-center gap-2 text-[#101010] font-bold text-[13.5px] sm:text-[14.5px]">
            <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
            <span>Confirmed Walkthroughs</span>
          </div>
          <p className="mt-1 sm:mt-1.5 text-[12px] sm:text-[13px] text-zinc-600 leading-snug sm:leading-relaxed">
            Every scheduled walkthrough includes verified facility square footage, cleaning frequency, and exact appointment time.
          </p>
        </div>
      </div>

      {/* 3. Live Leads Sample Showcase */}
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-[#EBEBEB]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 sm:mb-6">
          <div>
            <span className="block mb-1 text-xs font-semibold uppercase tracking-widest text-[#E9204F]">
              Recent Sample Inquiries
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#101010] tracking-tight">
              Verified Decision-Maker Appointments
            </h3>
          </div>
          <span className="text-xs font-medium text-slate-500">
            Exclusive Territory Allocation · 100% Protected
          </span>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-[#737373] mb-2.5 px-0.5">
          <span>Swipe to browse verified appointments</span>
          <span className="font-semibold text-[#101010]">4 Samples →</span>
        </div>

        {/* Leads Cards: Clean, Borderless Metadata Grid */}
        <div className="flex md:grid md:grid-cols-2 gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 md:pb-0 scrollbar-none -mx-3 sm:mx-0 px-3 sm:px-0 scroll-pl-3">
          {RHEK_CONFIG.leadSamples.map((lead) => (
            <SpotlightCard
              key={lead.id}
              mode="light"
              className="w-[86%] xs:w-[82%] sm:min-w-[380px] md:min-w-0 snap-start shrink-0 md:shrink group rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-slate-400 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Clean Category Overline & Subtle Verified Pill */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    {lead.companyType}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Facility Title */}
                <h4 className="text-base sm:text-[17px] font-bold text-[#101010] leading-snug tracking-tight group-hover:text-[#E9204F] transition-colors">
                  {lead.facility}
                </h4>

                {/* Clean Borderless 2x2 Key-Value Grid */}
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 pt-3 border-t border-slate-100">
                  <div>
                    <div className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                      Location
                    </div>
                    <div className="font-semibold text-slate-800 text-sm mt-0.5 truncate">
                      {lead.location}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                      Facility Size
                    </div>
                    <div className="font-semibold text-slate-800 text-sm mt-0.5 truncate">
                      {lead.sqft}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                      Schedule
                    </div>
                    <div className="font-semibold text-slate-800 text-sm mt-0.5 truncate">
                      {lead.schedule}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                      Decision Maker
                    </div>
                    <div className="font-semibold text-slate-800 text-sm mt-0.5 truncate">
                      {lead.decisionMaker}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar: Crisp Outlined Button */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                  <span>Territory Lock Ready</span>
                </span>
                <Link
                  href={`/contact?service=Janitorial%20Lead%20Generation&facility=${encodeURIComponent(lead.facility)}`}
                  className="border border-slate-200 hover:border-slate-900 bg-white hover:bg-slate-900 hover:text-white text-slate-900 font-medium px-3.5 py-1.5 rounded-lg text-xs sm:text-sm transition-all duration-200 inline-flex items-center gap-1"
                >
                  <span>Request Walkthrough</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom Action Strip — Clean Light Architecture */}
        <div className="mt-6 sm:mt-7 rounded-xl bg-[#FAFAFA] p-5 sm:p-6 text-[#101010] border border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-2xs">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded bg-rose-50 border border-rose-200/50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#E9204F] mb-1.5">
              <span>Leads From $110 / Scheduled Walkthrough</span>
            </div>
            <p className="font-heading text-[17px] sm:text-[20px] font-bold text-[#101010] leading-snug">
              Reserve exclusive janitorial appointments in your county.
            </p>
            <p className="text-[12.5px] sm:text-[13px] text-zinc-600 mt-1 font-sans">
              Direct Inquiries:{" "}
              <a href="tel:+16466948464" className="text-[#101010] hover:text-[#E9204F] font-semibold underline">
                +1 (646) 694-8464
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/services/janitorial-leads"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-white hover:bg-[#FAFAFA] hover:border-zinc-400 border border-zinc-200/80 px-3 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-semibold text-[#101010] transition-all min-h-[44px] whitespace-nowrap"
            >
              <span className="hidden sm:inline">Pricing &amp; Details</span>
              <span className="sm:hidden">Pricing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact?service=Janitorial%20Lead%20Generation"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#E9204F] hover:bg-[#101010] px-3 sm:px-6 py-2.5 text-[12.5px] sm:text-[13px] font-semibold text-white transition-all min-h-[44px] whitespace-nowrap shadow-xs"
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