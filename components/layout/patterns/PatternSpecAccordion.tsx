"use client";

import React, { useState } from "react";
import { ChevronDown, Terminal, ShieldCheck, Gauge, Code2 } from "@/components/common/icons";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PatternSpecAccordionProps } from "./types";

export function PatternSpecAccordion({
  id = "technologies",
  badge = "TECH SPEC",
  title,
  description,
  techStrip,
  accordionTitle = "See the engineering spec sheet & benchmarks",
  benchmarks,
  codeSnippet,
  specDetails,
}: PatternSpecAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-brand-surface">
      <div className="site-container space-y-8">
        {/* Uniform Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          maxWidth="max-w-2xl"
        />

        {/* 1. Scannable Tech Strip (Lightweight, Non-Text UI) */}
        <div className="rounded-2xl border border-brand-border bg-white p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-brand-slate uppercase tracking-wider pb-3 border-b border-brand-border-subtle mb-4">
            <span>Verified Tech Stack</span>
            <span className="text-brand-red">Zero-Slop Standard</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {techStrip.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-black text-[13px] font-semibold"
              >
                <Code2 className="h-3.5 w-3.5 text-brand-red" />
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono uppercase bg-white px-1.5 py-0.5 rounded border border-brand-border text-brand-slate">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Progressive Disclosure Accordion */}
        <div className="rounded-2xl border border-brand-border bg-white overflow-hidden shadow-2xs transition-all">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-surface transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <Terminal className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[14.5px] font-bold text-brand-black">{accordionTitle}</p>
                <p className="text-[12px] text-brand-slate">
                  {isOpen ? "Click to collapse technical details" : "Lighthouse breakdown, architecture config & compliance"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red">
                {isOpen ? "Hide Spec" : "Expand Spec"}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-brand-black transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {isOpen && (
            <div className="px-6 pb-6 pt-2 border-t border-brand-border-subtle space-y-6">
              {/* Benchmark Stat Cards */}
              {benchmarks && benchmarks.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  {benchmarks.map((bench, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-brand-surface border border-brand-border">
                      <p className="text-[10.5px] font-bold uppercase tracking-wider text-brand-slate truncate">
                        {bench.label}
                      </p>
                      <p className="text-2xl font-heading font-bold text-brand-black mt-1">
                        {bench.value}
                      </p>
                      <p className="text-[11px] text-brand-body mt-0.5">{bench.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Code Snippet (Moved down into progressive disclosure) */}
              {codeSnippet && (
                <div className="rounded-xl bg-brand-black text-zinc-200 p-4 font-mono text-[12px] leading-relaxed overflow-x-auto">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5 text-brand-caption">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 text-brand-red" />
                      <span>{codeSnippet.filename}</span>
                    </div>
                    <span className="text-[10.5px] text-emerald-400 font-bold">TYPE CHECK PASSED</span>
                  </div>
                  <pre className="text-[12px] text-gray-200">{codeSnippet.code}</pre>
                </div>
              )}

              {/* Technical Specifications Columns */}
              {specDetails && specDetails.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {specDetails.map((col, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-brand-surface border border-brand-border">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-brand-black mb-2.5">
                        {col.title}
                      </p>
                      <ul className="space-y-1.5 text-[12.5px] text-brand-body">
                        {col.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-brand-red font-bold">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
