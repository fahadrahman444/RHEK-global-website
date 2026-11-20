"use client";

import { useState } from "react";
import type { ServiceLeadSample } from "@/data/services-data";
import { LeadTicketCard } from "./LeadTicketCard";
import { ShieldCheck, Sparkles, Filter } from "@/components/common/icons";

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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-brand-border">
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-white border border-brand-border px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-brand-black mb-1.5 shadow-2xs">
            <Sparkles className="h-3 w-3 text-brand-red" />
            <span>Dispatched Walkthrough Registry</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-brand-black font-heading tracking-[-0.03em] leading-snug">
            Live Verified Facility Appointments
          </h2>
          <p className="mt-1 text-[13.5px] text-brand-body leading-relaxed max-w-xl">
            Inspect live sample walkthrough dispatches pre-qualified by our dedicated SDR team. Verified square footage, scope, and decision-maker contacts.
          </p>
        </div>

        {/* Exclusivity Trust Seal */}
        <div className="flex items-center gap-2.5 bg-white border border-brand-border rounded-lg p-3 shrink-0 shadow-2xs self-start lg:self-center">
          <div className="h-8 w-8 rounded bg-brand-surface border border-brand-border text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11.5px] font-bold text-brand-black">
              100% Territory Exclusivity
            </p>
            <p className="text-[10.5px] text-brand-caption">
              Zero shared leads • Walkthrough replacement SLA
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-brand-caption mr-1">
            <Filter className="h-3 w-3 text-brand-black" />
            <span>Filter Sector:</span>
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === "All" ? leadSamples.length : leadSamples.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11.5px] font-semibold transition-colors min-h-[32px] ${
                  isActive
                    ? "bg-brand-black text-white shadow-xs"
                    : "bg-white text-brand-body border border-brand-border hover:border-brand-black hover:text-brand-black"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[9.5px] rounded px-1.5 py-0.5 font-mono ${isActive ? "bg-white/20 text-white" : "bg-brand-surface text-brand-caption"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Lead Ticket Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
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
