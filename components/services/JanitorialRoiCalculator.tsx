"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingUp, CheckCircle2, ShieldCheck } from "@/components/common/icons";

export function JanitorialRoiCalculator() {
  const [leadsCount, setLeadsCount] = useState<number>(10);
  const [avgContractValue, setAvgContractValue] = useState<number>(3500);

  // Conversion calculations based on 40% - 50% closing ratio
  const minCloseRatio = 0.40;
  const maxCloseRatio = 0.50;

  const minContracts = Math.max(1, Math.round(leadsCount * minCloseRatio));
  const maxContracts = Math.max(minContracts, Math.round(leadsCount * maxCloseRatio));

  const minMonthlyRevenue = minContracts * avgContractValue;
  const maxMonthlyRevenue = maxContracts * avgContractValue;

  const annualRevenue = minMonthlyRevenue * 12;

  // Approximate package cost ($110/lead standard promo)
  const estLeadInvestment = leadsCount * 110;
  const firstMonthRoiRatio = (minMonthlyRevenue / estLeadInvestment).toFixed(1);

  return (
    <div className="rounded-2xl bg-[#101010] text-white p-5 sm:p-6 lg:p-8 border border-white/10 shadow-lg relative overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mb-5">
          <div className="inline-flex items-center gap-1.5 rounded bg-white/10 border border-white/15 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#E9204F] mb-1.5">
            <Calculator className="h-3 w-3 text-[#E9204F]" />
            <span>Commercial Revenue Modeler</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-white tracking-[-0.03em] leading-snug">
            Calculate Your Commercial Contract ROI
          </h2>
          <p className="mt-1 text-[13.5px] text-[#A3A3A3] leading-relaxed max-w-xl">
            Model recurring monthly revenue based on standard 40%–50% walkthrough close ratios and commercial cleaning contract values.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 rounded-xl bg-white/[0.03] border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              {/* Control 1: Appointment Volume */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="lead-slider" className="text-[12px] font-semibold text-white">
                    Monthly Walkthrough Volume
                  </label>
                  <span className="text-[13.5px] font-bold text-white bg-white/10 border border-white/15 px-2 py-0.5 rounded">
                    {leadsCount} Walkthroughs
                  </span>
                </div>

                <input
                  id="lead-slider"
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={leadsCount}
                  onChange={(e) => setLeadsCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E9204F]"
                />

                <div className="flex justify-between text-[10.5px] text-[#A3A3A3] mt-1.5">
                  <span>5 Leads</span>
                  <span>10 Leads (Starter)</span>
                  <span>20 Leads (Growth)</span>
                  <span>40 Leads (Scale)</span>
                </div>

                {/* Preset quick buttons */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[10, 20, 30].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setLeadsCount(preset)}
                      className={`py-1.5 px-2.5 rounded-lg text-[11.5px] font-semibold transition-colors min-h-[34px] ${
                        leadsCount === preset
                          ? "bg-white text-[#101010]"
                          : "bg-white/5 text-[#A3A3A3] border border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {preset} Leads
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 2: Average Monthly Contract Value */}
              <div>
                <label className="text-[12px] font-semibold text-white block mb-2">
                  Target Monthly Cleaning Contract Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Small / Mid", value: 2500, desc: "2-3x / week" },
                    { label: "Standard", value: 3500, desc: "Nightly 5x/wk" },
                    { label: "Large / Commercial", value: 5000, desc: "Daily + Porter" },
                  ].map((tier) => (
                    <button
                      key={tier.value}
                      type="button"
                      onClick={() => setAvgContractValue(tier.value)}
                      className={`p-2.5 rounded-lg border text-left transition-all min-h-[40px] ${
                        avgContractValue === tier.value
                          ? "border-white bg-white/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-[#A3A3A3] hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#E9204F]">
                        {tier.label}
                      </p>
                      <p className="text-[14px] font-bold text-white mt-0.5">
                        ${tier.value.toLocaleString()}
                        <span className="text-[9.5px] text-[#A3A3A3] font-normal">/mo</span>
                      </p>
                      <p className="text-[10px] text-[#A3A3A3] mt-0.5 truncate">
                        {tier.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom trust note */}
            <div className="pt-3.5 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11.5px] text-[#A3A3A3]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
              <span>Calculated with 40%–50% commercial closing rates from verified walkthroughs.</span>
            </div>
          </div>

          {/* Right Column: Calculated Yield & Revenue Display */}
          <div className="lg:col-span-6 rounded-xl bg-white/[0.04] border border-white/15 text-white p-4 sm:p-5 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10 mb-3.5">
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#A3A3A3]">
                    Projected Outcomes
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                    Estimated Commercial Pipeline
                  </h3>
                </div>
                <span className="rounded bg-white/10 border border-white/15 px-2 py-0.5 text-[10.5px] font-semibold text-[#16A34A]">
                  {firstMonthRoiRatio}x 1st-Month Yield
                </span>
              </div>

              {/* Big Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                <div className="rounded-lg bg-black/40 p-3 sm:p-3.5 border border-white/10">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#A3A3A3]">
                    Contracts Won (40–50%)
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    {minContracts}–{maxContracts}
                  </p>
                  <p className="text-[10px] text-[#A3A3A3] mt-0.5">
                    Recurring monthly accounts
                  </p>
                </div>

                <div className="rounded-lg bg-black/40 p-3 sm:p-3.5 border border-white/10">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#A3A3A3]">
                    New Monthly MRR
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#E9204F] mt-0.5">
                    ${minMonthlyRevenue.toLocaleString()}–${maxMonthlyRevenue.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-[#A3A3A3] mt-0.5">
                    Added to monthly billing
                  </p>
                </div>
              </div>

              {/* Projected Annual Value Banner */}
              <div className="rounded-lg bg-white/5 p-3 border border-white/10 mb-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-[#16A34A]" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#A3A3A3]">
                        Projected Annual Contract Revenue
                      </p>
                      <p className="text-[16px] font-bold text-white">
                        ${annualRevenue.toLocaleString()}+ / Year
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-white">
                    12-Mo Value
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-1 text-[11.5px] text-[#A3A3A3] mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />
                  <span>Estimated Lead Investment: ~${estLeadInvestment.toLocaleString()} (Starter Promo)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />
                  <span>Pays for entire campaign with just 1 closed contract</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />
                  <span>Includes 100% money-back &amp; replacement protection</span>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <Link
              href={`/contact?service=Janitorial%20Lead%20Generation&leads=${leadsCount}&projectedMRR=${minMonthlyRevenue}`}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#E9204F] hover:bg-[#101010] py-2.5 px-4 text-[12.5px] font-bold text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[40px] group"
            >
              <span>Lock In {leadsCount} Walkthroughs in Your Territory</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
