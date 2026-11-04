"use client";

import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";

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
    feature: "Engineering & Web Tech",
    traditional: "Generic, bloated templates with slow load times",
    rhek: "Bespoke Next.js App Router, 99+ Core Web Vitals & Framer Motion",
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
          <span className="inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
            Institutional Advantages
          </span>
          <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold tracking-[-0.035em] leading-[1.15] text-[#101010]">
            The RHEK Advantage: High Conviction vs. Traditional Models
          </h2>
          <p className="mt-1.5 text-[13px] sm:text-[14.5px] leading-relaxed text-[#525252]">
            See why leading commercial contractors and high-growth enterprises partner with RHEK Global over conventional lead brokers and generic agencies.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 min-h-[38px] shrink-0 self-start md:self-auto shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Claim Protected Territory</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Visual Institutional Comparison Matrix */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-neutral-100/70 border-b border-neutral-200 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#101010] p-3 sm:p-4">
          <div className="col-span-4 sm:col-span-4 text-[#737373]">Core Capability</div>
          <div className="col-span-4 sm:col-span-4 text-[#737373]">Traditional Lead Brokers</div>
          <div className="col-span-4 sm:col-span-4 text-[#101010] flex items-center gap-1.5 font-extrabold text-[#E9204F]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>RHEK GLOBAL</span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-neutral-100 text-[12px] sm:text-[13px]">
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 items-center p-3 sm:p-4 hover:bg-neutral-50/60 transition-colors"
            >
              {/* Feature Title */}
              <div className="col-span-4 font-bold text-[#101010] pr-2">
                {row.feature}
              </div>

              {/* Traditional (Negative) */}
              <div className="col-span-4 flex items-start gap-1.5 sm:gap-2 text-[#737373] pr-2 leading-snug">
                <X className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                <span className="text-[11.5px] sm:text-[12.5px]">{row.traditional}</span>
              </div>

              {/* RHEK GLOBAL (Positive / Highlighted) */}
              <div className="col-span-4 flex items-start gap-1.5 sm:gap-2 text-[#101010] font-semibold leading-snug bg-emerald-50/40 sm:bg-transparent -my-1 py-1 sm:my-0 sm:py-0 rounded">
                <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="text-[11.5px] sm:text-[12.5px] text-[#101010]">{row.rhek}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Matrix Footer Banner */}
        <div className="bg-[#101010] p-3.5 sm:p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-[#A3A3A3]">
              Every partnership backed by our <strong className="text-white">100% Risk-Reversal Commitment</strong>.
            </span>
          </div>
          <Link
            href="/#guarantee"
            className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#E9204F] hover:text-white transition-colors whitespace-nowrap"
          >
            <span>Review Full Guarantee Terms</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
