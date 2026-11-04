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
        <div className="inline-flex items-center gap-1.5 rounded-md border border-[#EBEBEB] bg-white px-2.5 py-0.5 text-[10.5px] font-semibold text-[#101010] uppercase tracking-wider mb-2.5 shadow-2xs">
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

        {/* Feature Highlights Grid — Compact 2-column on mobile */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2.5">
          {janitorialService?.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 sm:gap-2.5 rounded-lg bg-white border border-[#EBEBEB] p-2 sm:p-3 text-[11px] sm:text-[12.5px] font-semibold text-[#101010] transition-all duration-200 hover:border-[#101010] hover:-translate-y-0.5 hover:shadow-2xs shadow-2xs leading-snug"
            >
              <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#E9204F] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Live Leads Sample Showcase */}
        <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-[#EBEBEB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-5">
            <div>
              <span className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
                Recent Sample Inquiries
              </span>
              <h3 className="text-[16px] sm:text-[22px] font-bold text-[#101010] mt-0.5">
                Verified Decision-Maker Appointments
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#525252]">
              <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="font-semibold text-[#101010]">100% Exclusive Protection</span>
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-between text-[10.5px] text-[#737373] mb-2 px-0.5">
            <span>Swipe to browse verified appointments</span>
            <span className="font-semibold text-[#101010]">4 Samples →</span>
          </div>

          {/* Leads Cards: Mobile Horizontal Swipe Carousel & Desktop 2-Column Grid */}
          <div className="flex md:grid md:grid-cols-2 gap-2.5 sm:gap-3.5 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 scrollbar-none -mx-1 px-1 sm:mx-0 sm:px-0">
            {RHEK_CONFIG.leadSamples.map((lead) => (
              <div
                key={lead.id}
                className="min-w-[84%] sm:min-w-[380px] md:min-w-0 snap-center shrink-0 md:shrink rounded-xl border border-[#EBEBEB] bg-white p-3.5 sm:p-6 shadow-xs hover:border-[#101010] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5 sm:mb-4">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                        {lead.companyType}
                      </span>
                      <h4 className="text-[14px] sm:text-[16px] font-bold text-[#101010] mt-0.5 leading-snug">
                        {lead.facility}
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded bg-[#FAFAFA] border border-[#EBEBEB] px-2 py-0.5 text-[10.5px] font-semibold text-[#101010] shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div className="space-y-1 sm:space-y-2 text-[11.5px] sm:text-[13px] text-[#525252] border-t border-[#F0F0F0] pt-2.5 sm:pt-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#101010] shrink-0" />
                      <span>Location: <strong className="text-[#101010]">{lead.location}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-[#101010] shrink-0" />
                      <span>Facility Size: <strong className="text-[#101010]">{lead.sqft}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-[#101010] shrink-0" />
                      <span>Schedule: <strong className="text-[#101010]">{lead.schedule}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-3.5 w-3.5 text-[#101010] shrink-0" />
                      <span>Decision Maker: <strong className="text-[#101010]">{lead.decisionMaker}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip — Compact 2-column buttons on mobile */}
          <div className="mt-5 sm:mt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 rounded-xl bg-[#101010] p-4 sm:p-7 text-white shadow-md hover:shadow-xl transition-all duration-300">
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
                className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/10 hover:bg-white hover:text-[#101010] border border-white/20 px-3 sm:px-5 py-2 sm:py-3 text-[12px] sm:text-[13px] font-semibold text-white transition-all min-h-[40px] whitespace-nowrap"
              >
                <span className="hidden sm:inline">Pricing &amp; Details</span>
                <span className="sm:hidden">Pricing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact?service=Janitorial%20Lead%20Generation"
                className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-3 sm:px-6 py-2 sm:py-3 text-[12px] sm:text-[13px] font-semibold text-white transition-all min-h-[40px] whitespace-nowrap"
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
