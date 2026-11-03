"use client";

import { useState } from "react";
import type { ServiceLeadSample } from "@/data/services-data";
import { LeadTicketCard } from "./LeadTicketCard";
import { ShieldCheck, Sparkles, Filter } from "lucide-react";

interface InteractiveLeadShowcaseProps {
  leadSamples: ServiceLeadSample[];
  serviceTitle: string;
}

export function InteractiveLeadShowcase({ leadSamples, serviceTitle }: InteractiveLeadShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(leadSamples.map((s) => s.category).filter(Boolean))) as string[]];

  const filteredSamples = activeCategory === "All"
    ? leadSamples
    : leadSamples.filter((s) => s.category === activeCategory);

  return (
    <div>
      {/* Section Header with Category Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 pb-5 border-b border-[#EBEBEB]">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-md bg-white border border-[#EBEBEB] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#101010] mb-2 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Dispatched Walkthrough Registry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#101010] font-heading tracking-[-0.035em] leading-[1.15]">
            Live Verified Facility Appointments
          </h2>
          <p className="mt-1.5 text-[14.5px] text-[#525252] leading-relaxed max-w-xl">
            Inspect live sample walkthrough dispatches pre-qualified by our dedicated SDR team. Each appointment includes verified square footage, service scope, and decision-maker contact details.
          </p>
        </div>

        {/* Exclusivity Trust Seal */}
        <div className="flex items-center gap-3 bg-white border border-[#EBEBEB] rounded-xl p-3.5 lg:p-4 shrink-0 shadow-2xs">
          <div className="h-9 w-9 rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] text-[#16A34A] flex items-center justify-center shrink-0">
            <ShieldCheck className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#101010]">
              100% Territory Exclusivity
            </p>
            <p className="text-[11.5px] text-[#737373] mt-0.5">
              Zero shared leads • Walkthrough replacement SLA
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 mb-7">
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-wider text-[#737373] mr-2">
            <Filter className="h-3 w-3 text-[#101010]" />
            <span>Filter By Sector:</span>
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === "All" ? leadSamples.length : leadSamples.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-colors min-h-[36px] ${
                  isActive
                    ? "bg-[#101010] text-white shadow-xs"
                    : "bg-white text-[#525252] border border-[#E5E5E5] hover:border-[#101010] hover:text-[#101010]"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] rounded px-1.5 py-0.5 font-mono ${isActive ? "bg-white/20 text-white" : "bg-[#F0F0F0] text-[#737373]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Lead Ticket Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSamples.map((sample) => (
          <LeadTicketCard
            key={sample.id}
            sample={sample}
            serviceTitle={serviceTitle}
          />
        ))}
      </div>
    </div>
  );
}
