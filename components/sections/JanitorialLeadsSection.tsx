"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Building2, MapPin, Calendar, UserCheck } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function JanitorialLeadsSection() {
  const janitorialService = RHEK_CONFIG.services.find((s) => s.id === "janitorial-leads");

  return (
    <section id="leads" className="site-container scroll-mt-24">
      <div className="rounded-[32px] bg-[#FAFAFA] border border-[#F3F3F3] p-8 sm:p-12 lg:p-16">
        {/* Section Header */}
        <div className="max-w-[780px]">
          <div className="w-10 h-0.5 bg-[#E9204F] mb-4" />
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9204F]/20 bg-[#E9204F]/10 px-4 py-1.5 text-[12px] font-bold text-[#E9204F] uppercase tracking-wider mb-4 font-display">
            <ShieldCheck className="h-4 w-4 text-[#E9204F]" />
            <span>Pay Nothing Upfront Available</span>
          </div>

          <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold text-[#101010] tracking-[-0.04em] leading-tight">
            Get Exclusive Commercial Cleaning Leads —{" "}
            <span className="text-[#E9204F]">
              Pay Nothing Upfront!
            </span>
          </h2>

          <p className="mt-4 text-[17px] leading-[1.7] text-[#747474]">
            We help commercial cleaning companies secure high-quality appointments with verified facility decision-makers, connecting them with businesses actively seeking trusted cleaning partners and long-term service contracts.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {janitorialService?.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 rounded-2xl bg-[#F3F3F3] p-4 text-[14px] font-bold text-[#101010] transition-agency hover:bg-[#E9204F] hover:text-white group"
            >
              <CheckCircle2 className="h-5 w-5 text-[#E9204F] group-hover:text-white shrink-0 transition-colors" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Live Leads Sample Showcase */}
        <div className="mt-14 pt-10 border-t border-[#F3F3F3]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#E9204F]">
                Recent Sample Appointments
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#101010] mt-0.5">
                Verified Decision-Maker Leads
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#747474]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E9204F] animate-pulse" />
              <span className="font-bold text-[#101010]">100% Exclusive • Zero Shared Leads</span>
            </div>
          </div>

          {/* Leads Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RHEK_CONFIG.leadSamples.map((lead) => (
              <div
                key={lead.id}
                className="group relative rounded-2xl border border-[#F3F3F3] bg-white p-6 shadow-xs hover:border-[#E9204F] transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)]"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                      {lead.companyType}
                    </span>
                    <h4 className="text-[18px] font-extrabold text-[#101010] mt-0.5">
                      {lead.facility}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E9204F]" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="space-y-2.5 text-[13px] text-[#747474] border-t border-[#F3F3F3] pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span>Location: <strong className="text-[#101010]">{lead.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span>Facility Size: <strong className="text-[#101010]">{lead.sqft}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span>Service Frequency: <strong className="text-[#101010]">{lead.schedule}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span>Contact: <strong className="text-[#101010]">{lead.decisionMaker}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip (Full-bleed solid black #101010) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#101010] p-8 text-white shadow-xl">
            <div>
              <p className="font-display text-[18px] sm:text-[20px] font-extrabold text-white">
                Want exclusive janitorial appointments in your local territory?
              </p>
              <p className="text-[13.5px] text-[#ACACAC] mt-1">
                We confirm decision-maker calendar walkthroughs so you only pay for genuine opportunities.
              </p>
            </div>
            <Link
              href="/contact?service=Janitorial%20Lead%20Generation"
              className="inline-flex items-center gap-2 rounded-full bg-[#E9204F] hover:bg-white hover:text-[#101010] px-7 py-3.5 text-[13px] font-bold text-white uppercase tracking-wider whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[48px] shrink-0"
            >
              <span>Claim Your Territory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
