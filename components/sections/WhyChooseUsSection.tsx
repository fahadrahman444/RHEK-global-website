"use client";

import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck } from "@/components/common/icons";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { COMPARISON_ROWS } from "@/data/services-data";

export function WhyChooseUsSection() {
  return (
    <section className="site-container">
      {/* Standardized Section Header */}
      <SectionHeader
        badge="Institutional Advantages"
        title="The RHEK Advantage: High Conviction vs. Traditional Models"
        description="See why leading commercial contractors partner with RHEK Global over conventional lead brokers and generic directory listings."
        maxWidth="max-w-[620px]"
        cta={
          <Button
            href="/#contact"
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Claim Protected Territory
          </Button>
        }
      />

      {/* Visual Institutional Comparison Matrix — Clean Light Container */}
      <div className="rounded-xl border border-zinc-200/80 bg-white shadow-2xs overflow-hidden">
        {/* Mobile View: Dedicated Institutional Cards (< md) */}
        <div className="divide-y divide-zinc-200/80 md:hidden">
          {COMPARISON_ROWS.map((row, i) => (
            <div key={i} className="p-3 space-y-1.5">
              <span className="text-[13px] font-bold text-brand-black block">
                {row.feature}
              </span>

              {/* RHEK Advantage */}
              <div className="flex items-start gap-2 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-brand-black text-[12px] leading-snug">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-900 block text-[10px] uppercase tracking-wider">
                    RHEK Global Standard
                  </span>
                  <span className="font-medium text-emerald-950 mt-0.5 block">{row.rhek}</span>
                </div>
              </div>

              {/* Traditional Broker */}
              <div className="flex items-start gap-2 px-2 py-1 rounded text-zinc-500 text-[11.5px] leading-snug">
                <X className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">
                    Traditional Brokers
                  </span>
                  <span className="text-zinc-600">{row.traditional}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Multi-Column Comparison Grid (>= md) */}
        <div className="hidden md:block">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-brand-surface border-b border-zinc-200/80 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider text-brand-black p-3 sm:p-4">
            <div className="col-span-4 text-slate-400">Core Capability</div>
            <div className="col-span-4 text-slate-400">Traditional Lead Brokers</div>
            <div className="col-span-4 flex items-center gap-1.5 font-bold text-brand-red">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>RHEK GLOBAL</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-zinc-100 text-[12.5px] sm:text-[13px]">
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center p-3 sm:p-4 hover:bg-brand-surface/70 transition-colors"
              >
                {/* Feature Title */}
                <div className="col-span-4 font-bold text-brand-black pr-2 text-[13px] sm:text-[13.5px]">
                  {row.feature}
                </div>

                {/* Traditional (Negative) */}
                <div className="col-span-4 flex items-start gap-1.5 sm:gap-2 text-zinc-500 pr-2 leading-snug">
                  <X className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="text-[12px] sm:text-[12.5px]">{row.traditional}</span>
                </div>

                {/* RHEK GLOBAL (Positive / Highlighted) */}
                <div className="col-span-4 flex items-start gap-1.5 sm:gap-2 text-brand-black font-semibold leading-snug bg-emerald-50/40 sm:bg-transparent -my-1 py-1 sm:my-0 sm:py-0 rounded">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[12px] sm:text-[13px] text-brand-black">{row.rhek}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Matrix Footer Banner — Clean Light Background */}
        <div className="bg-brand-surface border-t border-zinc-200/80 p-3.5 sm:p-4 text-brand-black flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] sm:text-[13px]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-600">
              Every partnership backed by our <strong className="text-brand-black">100% Risk-Reversal Commitment</strong>.
            </span>
          </div>
          <Link
            href="/#guarantee"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-red hover:text-brand-black transition-colors whitespace-nowrap"
          >
            <span>Review Full Guarantee Terms</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}