"use client";

import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck } from "@/components/common/icons";

const COMPARISON_ROWS = [
  {
    feature: "Lead Exclusivity",
    traditional: "Shared with 3–5 local cleaning competitors",
    rhek: "100% Territory Exclusivity — Never resold or distributed",
  },
  {
    feature: "Financial Risk",
    traditional: "$3,000–$6,000 non-refundable upfront retainers",
    rhek: "Pay-Nothing-Upfront Option with explicit performance targets",
  },
  {
    feature: "Appointment Verification",
    traditional: "Unverified scrape lists and non-committal callbacks",
    rhek: "Confirmed Date & Time, Square Footage, and Decision-Maker",
  },
  {
    feature: "Outreach & Targeting Tech",
    traditional: "Generic mass email blasts and stale directory scrapers",
    rhek: "Proprietary Facility Intelligence, Verified Phone Outreach & Direct Calendar Handover",
  },
  {
    feature: "Account Management",
    traditional: "Outsourced call centers with high churn and no context",
    rhek: "Dedicated US/CA B2B SDRs with direct executive slack access",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="site-container">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="max-w-[620px]">
          <span className="block mb-1 text-xs font-semibold uppercase tracking-widest text-[#E9204F]">
            Institutional Advantages
          </span>
          <h2 className="font-heading text-[24px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-[1.15] text-[#101010]">
            The RHEK Advantage: High Conviction vs. Traditional Models
          </h2>
          <p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-zinc-600">
            See why leading commercial contractors partner with RHEK Global over conventional lead brokers and generic directory listings.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-200 min-h-[38px] shrink-0 self-start md:self-auto shadow-xs hover:-translate-y-0.5"
        >
          <span>Claim Protected Territory</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Visual Institutional Comparison Matrix — Clean Light Container */}
      <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-2xs overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-[#FAFAFA] border-b border-zinc-200/80 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider text-[#101010] p-3 sm:p-4">
          <div className="col-span-4 text-slate-400">Core Capability</div>
          <div className="col-span-4 text-slate-400">Traditional Lead Brokers</div>
          <div className="col-span-4 flex items-center gap-1.5 font-extrabold text-[#E9204F]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>RHEK GLOBAL</span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-zinc-100 text-[12.5px] sm:text-[13px]">
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 items-center p-3 sm:p-4 hover:bg-[#FAFAFA]/70 transition-colors"
            >
              {/* Feature Title */}
              <div className="col-span-4 font-bold text-[#101010] pr-2 text-[13px] sm:text-[13.5px]">
                {row.feature}
              </div>

              {/* Traditional (Negative) */}
              <div className="col-span-4 flex items-start gap-1.5 sm:gap-2 text-zinc-500 pr-2 leading-snug">
                <X className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                <span className="text-[12px] sm:text-[12.5px]">{row.traditional}</span>
              </div>

              {/* RHEK GLOBAL (Positive / Highlighted) */}
              <div className="col-span-4 flex items-start gap-1.5 sm:gap-2 text-[#101010] font-semibold leading-snug bg-emerald-50/40 sm:bg-transparent -my-1 py-1 sm:my-0 sm:py-0 rounded">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[12px] sm:text-[13px] text-[#101010]">{row.rhek}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Matrix Footer Banner — Clean Light Background */}
        <div className="bg-[#FAFAFA] border-t border-zinc-200/80 p-3.5 sm:p-4 text-[#101010] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] sm:text-[13px]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-600">
              Every partnership backed by our <strong className="text-[#101010]">100% Risk-Reversal Commitment</strong>.
            </span>
          </div>
          <Link
            href="/#guarantee"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#E9204F] hover:text-[#101010] transition-colors whitespace-nowrap"
          >
            <span>Review Full Guarantee Terms</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}