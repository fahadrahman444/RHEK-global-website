"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Building2,
  PhoneCall,
  Activity,
} from "@/components/common/icons";

export function ServicesPreview() {
  return (
    <section id="services" className="site-container scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="max-w-[680px]">
          <span className="block mb-1 text-xs font-semibold uppercase tracking-widest text-[#E9204F]">
            Operating Infrastructure
          </span>
          <h2 className="font-heading text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#101010] tracking-tight leading-tight">
            How Our Commercial Client Acquisition System Operates
          </h2>
          <p className="mt-2 text-[15px] sm:text-[16px] leading-relaxed text-zinc-600">
            We deploy dedicated outbound prospecting teams, local territory intelligence, and verified facility handovers to keep your commercial pipeline predictable.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 hover:border-[#101010] bg-white hover:bg-[#FAFAFA] text-[#101010] px-4 py-2 text-[13px] font-semibold transition-all duration-200 min-h-[42px] shrink-0 self-start md:self-auto shadow-2xs hover:-translate-y-0.5"
        >
          <span>All Services &amp; Capabilities</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Modern Light Bento Grid — Continuous Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
        {/* Bento Card 1: Dedicated Outbound SDR Cadences */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-200/80 bg-white p-4 sm:p-7 flex flex-col justify-between hover:border-zinc-400 transition-all duration-200 shadow-2xs group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-rose-50 text-[#E9204F]">
                  <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Outbound Sales Development
                </span>
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                Live Intake Active
              </span>
            </div>

            <h3 className="font-heading text-[17px] sm:text-[20px] font-bold text-[#101010] leading-snug">
              Exclusive Commercial Appointments With Zero Shared Prospects
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-zinc-600 mt-1.5 sm:mt-2 leading-relaxed">
              Dedicated outbound SDRs call property managers, qualify facility square footage, verify dissatisfaction with incumbent cleaners, and schedule confirmed on-site walkthroughs.
            </p>

            {/* Clean Structured Handover Preview */}
            <div className="mt-4 sm:mt-5 rounded-xl bg-[#FAFAFA] border border-zinc-200/70 p-3 sm:p-4">
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-zinc-200/60 text-[11.5px] sm:text-[12px]">
                <span className="font-semibold text-[#101010] flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Walkthrough Handover</span>
                </span>
                <span className="text-slate-400 text-[10.5px] sm:text-[11px]">Direct Calendar Dispatch</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px]">
                <div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Facility Type</div>
                  <div className="font-semibold text-slate-800 text-[13px] mt-0.5">Surgical Plaza</div>
                  <div className="text-[11.5px] text-zinc-500">42,000 sq ft</div>
                </div>

                <div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Target Territory</div>
                  <div className="font-semibold text-slate-800 text-[13px] mt-0.5">Dallas Metro</div>
                  <div className="text-[11.5px] text-emerald-600 font-medium">100% Exclusive Lock</div>
                </div>

                <div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Appointment Time</div>
                  <div className="font-semibold text-slate-800 text-[13px] mt-0.5">Thursday 10:30 AM</div>
                  <div className="text-[11.5px] text-emerald-600 font-medium">Walkthrough Set</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[12.5px]">
            <span className="text-zinc-600 font-medium">
              Pay-Nothing-Upfront Option Available
            </span>
            <Link
              href="/services/janitorial-leads"
              className="inline-flex items-center gap-1 font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
            >
              <span>Lead Specifications</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bento Card 2: Proprietary Facility Intelligence */}
        <div className="lg:col-span-5 rounded-2xl border border-zinc-200/80 bg-white p-4 sm:p-7 flex flex-col justify-between hover:border-zinc-400 transition-all duration-200 shadow-2xs group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-rose-50 text-[#E9204F]">
                  <Activity className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Data &amp; Targeting Engine
                </span>
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                Proprietary DB
              </span>
            </div>

            <h3 className="font-heading text-[17px] sm:text-[20px] font-bold text-[#101010] leading-snug">
              Commercial Facility Intelligence &amp; Renewal Mapping
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-zinc-600 mt-1.5 sm:mt-2 leading-relaxed">
              We track commercial facility square footage, tenant density, and expiring cleaning contracts across your territory to contact facilities at the ideal time.
            </p>

            <div className="mt-5 space-y-2.5 pt-3 border-t border-zinc-100">
              <div className="flex items-center justify-between text-[13px] py-1 border-b border-zinc-100">
                <span className="text-zinc-600">Decision-Maker Verification</span>
                <span className="font-semibold text-slate-800">Direct Operations Head</span>
              </div>
              <div className="flex items-center justify-between text-[13px] py-1 border-b border-zinc-100">
                <span className="text-zinc-600">Territory Overlap Protection</span>
                <span className="font-semibold text-emerald-600">Zero Competitor Sharing</span>
              </div>
              <div className="flex items-center justify-between text-[13px] py-1">
                <span className="text-zinc-600">Average Contract Size</span>
                <span className="font-semibold text-slate-800">$4,500 – $14,000 / mo</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[12.5px]">
            <span className="text-zinc-500">
              Verified County Coverage
            </span>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
            >
              <span>Check County Lock</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Seamless Transition Strip to Full Capabilities */}
      <div className="mt-4 rounded-xl bg-[#FAFAFA] border border-zinc-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Enterprise Solutions
          </span>
          <p className="text-[13.5px] font-semibold text-[#101010] mt-0.5">
            Looking for dedicated digital architecture, custom web platforms, or back-office operational teams?
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-900 px-4 py-2 text-[12.5px] font-semibold text-slate-800 hover:text-black whitespace-nowrap transition-all shadow-2xs shrink-0"
        >
          <span>Explore All 8 Services</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}