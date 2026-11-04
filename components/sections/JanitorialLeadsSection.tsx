"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Building2, MapPin, Calendar, UserCheck } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function JanitorialLeadsSection() {
  const janitorialService = RHEK_CONFIG.services.find((s) => s.id === "janitorial-leads");

  return (
    <section id="leads" className="site-container scroll-mt-24">
      <div className="rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] p-5 sm:p-7 lg:p-9">
        {/* Section Header */}
        <div className="max-w-[780px]">
          <div className="inline-flex items-center gap-1.5 rounded-md border border-[#EBEBEB] bg-white px-2.5 py-0.5 text-[10.5px] font-semibold text-[#101010] uppercase tracking-wider mb-2.5 shadow-2xs">
            <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Pay Nothing Upfront Available</span>
          </div>

          <h2 className="font-heading text-[24px] sm:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-tight">
            Exclusive Commercial Cleaning Leads &amp; Walkthroughs
          </h2>

          <p className="mt-2 text-[14.5px] leading-relaxed text-[#525252]">
            We connect commercial cleaning contractors directly with verified facility managers actively seeking daily, weekly, or specialized janitorial contracts.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {janitorialService?.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-lg bg-white border border-[#EBEBEB] p-3 text-[12.5px] font-semibold text-[#101010] transition-colors hover:border-[#101010] shadow-2xs"
            >
              <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Live Leads Sample Showcase */}
        <div className="mt-8 pt-6 border-t border-[#EBEBEB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
                Recent Sample Inquiries
              </span>
              <h3 className="text-[18px] sm:text-[22px] font-bold text-[#101010] mt-0.5">
                Verified Decision-Maker Appointments
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#525252]">
              <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="font-semibold text-[#101010]">100% Exclusive Protection</span>
            </div>
          </div>

          {/* Leads Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {RHEK_CONFIG.leadSamples.map((lead) => (
              <div
                key={lead.id}
                className="rounded-xl border border-[#EBEBEB] bg-white p-6 shadow-xs hover:border-[#101010] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                      {lead.companyType}
                    </span>
                    <h4 className="text-[16px] font-bold text-[#101010] mt-0.5">
                      {lead.facility}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded bg-[#FAFAFA] border border-[#EBEBEB] px-2.5 py-0.5 text-[11px] font-semibold text-[#101010]">
                    <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="space-y-2 text-[13px] text-[#525252] border-t border-[#F0F0F0] pt-3.5">
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
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl bg-[#101010] p-7 text-white shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 rounded bg-white/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#E9204F] mb-2">
                <span>Leads From $110 / Scheduled Walkthrough</span>
              </div>
              <p className="font-heading text-[18px] sm:text-[20px] font-bold text-white">
                Reserve exclusive janitorial appointments in your county.
              </p>
              <p className="text-[13px] text-[#A3A3A3] mt-1 font-sans">
                Direct Line:{" "}
                <a href="tel:+16466948464" className="text-white hover:text-[#E9204F] font-semibold underline">
                  +1 (646) 694-8464
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/services/janitorial-leads"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white hover:text-[#101010] border border-white/20 px-5 py-3 text-[13px] font-semibold text-white transition-all min-h-[44px]"
              >
                <span>Pricing &amp; Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact?service=Janitorial%20Lead%20Generation"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-6 py-3 text-[13px] font-semibold text-white transition-all min-h-[44px]"
              >
                <span>Claim Territory</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
