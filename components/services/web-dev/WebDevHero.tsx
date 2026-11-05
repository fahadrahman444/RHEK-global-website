"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Home,
  CheckCircle2,
  Zap,
  Gauge,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Activity,
} from "@/components/common/icons";

export function WebDevHero() {
  const [activeTab, setActiveTab] = useState<"vitals" | "stack" | "lighthouse">("vitals");

  return (
    <section id="sec-01" className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E9204F]/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Swiss Minimal High-Contrast Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Breadcrumb Navigation Trail */}
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-[12px] text-[#A3A3A3] font-medium">
                <li>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <Home className="h-3 w-3" />
                    <span>Home</span>
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3 text-neutral-600" />
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3 text-neutral-600" />
                </li>
                <li className="text-white font-semibold" aria-current="page">
                  Web Design &amp; Development
                </li>
              </ol>
            </nav>

            {/* Eyebrow Micro-Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9204F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E9204F]" />
              </span>
              <span>Web Design · Development · Strategy</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[66px] font-extrabold tracking-[-0.04em] text-white leading-[1.04]">
              WE BUILD DIGITAL<br />
              EXPERIENCES THAT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#E9204F]">
                MOVE BUSINESSES.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#A3A3A3] leading-relaxed max-w-xl">
              Engineered for sub-second page loads, distinctive aesthetics, and qualified lead conversion. Hand-crafted Next.js App Router platforms built without bloated page builders.
            </p>

            {/* Dual Action Conversion Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="#consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] px-7 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#E9204F]/25 hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9204F]"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 text-white px-6 py-3.5 text-[14px] font-semibold transition-all duration-200 min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Case Studies</span>
                <Layers className="h-4 w-4 text-[#A3A3A3] transition-transform duration-200 group-hover:rotate-12 group-hover:text-white" />
              </Link>
            </div>

            {/* Trust Guarantees */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-[12.5px] text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span className="text-white/90">95+ Lighthouse Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span className="text-white/90">Strict TypeScript (No any)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span className="text-white/90">WCAG 2.2 AA Accessible</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Modern Dark Live Architecture Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#121214] p-6 sm:p-7 text-white border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/10">
              
              {/* Subtle Ambient Glow inside card */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-48 h-48 bg-[#E9204F]/20 blur-3xl rounded-full pointer-events-none"
              />

              {/* Architectural Terminal Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  <span className="font-mono text-[11px] font-semibold text-[#A3A3A3] ml-2 flex items-center gap-1.5">
                    <Terminal className="h-3 w-3 text-[#E9204F]" />
                    <span>next-app-router.config.ts</span>
                  </span>
                </div>
                <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-[9.5px] font-semibold text-[#10B981] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Live Edge Verified
                </span>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="relative z-10 flex items-center gap-1.5 my-5 p-1 rounded-xl bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab("vitals")}
                  className={`flex-1 py-2 px-2.5 rounded-lg text-[11.5px] font-semibold transition-all ${
                    activeTab === "vitals"
                      ? "bg-[#E9204F] text-white shadow-md shadow-[#E9204F]/30"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  Core Web Vitals
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("lighthouse")}
                  className={`flex-1 py-2 px-2.5 rounded-lg text-[11.5px] font-semibold transition-all ${
                    activeTab === "lighthouse"
                      ? "bg-[#E9204F] text-white shadow-md shadow-[#E9204F]/30"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  Lighthouse 100
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("stack")}
                  className={`flex-1 py-2 px-2.5 rounded-lg text-[11.5px] font-semibold transition-all ${
                    activeTab === "stack"
                      ? "bg-[#E9204F] text-white shadow-md shadow-[#E9204F]/30"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  Tech Stack
                </button>
              </div>

              {/* Tab 1: Core Web Vitals */}
              {activeTab === "vitals" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5 relative z-10"
                >
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-3 text-center cursor-default">
                      <span className="text-[10px] text-[#A3A3A3] uppercase font-semibold block">LCP</span>
                      <span className="font-heading text-xl font-bold text-[#10B981]">0.68s</span>
                      <span className="text-[9.5px] text-[#737373] block mt-0.5">Target: &lt;2.5s</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-3 text-center cursor-default">
                      <span className="text-[10px] text-[#A3A3A3] uppercase font-semibold block">INP</span>
                      <span className="font-heading text-xl font-bold text-[#10B981]">18ms</span>
                      <span className="text-[9.5px] text-[#737373] block mt-0.5">Target: &lt;200ms</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-3 text-center cursor-default">
                      <span className="text-[10px] text-[#A3A3A3] uppercase font-semibold block">CLS</span>
                      <span className="font-heading text-xl font-bold text-[#10B981]">0.00</span>
                      <span className="text-[9.5px] text-[#737373] block mt-0.5">Target: &lt;0.10</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 text-[12.5px] space-y-2">
                    <div className="flex items-center justify-between text-[#A3A3A3]">
                      <span className="flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 text-[#E9204F]" />
                        Global Edge Latency
                      </span>
                      <strong className="text-white font-mono">24ms (Instant)</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#A3A3A3]">
                      <span className="flex items-center gap-2">
                        <Cpu className="h-3.5 w-3.5 text-[#E9204F]" />
                        Initial JS Footprint
                      </span>
                      <strong className="text-white font-mono">&lt; 85 KB (Zero Bloat)</strong>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Lighthouse Audit */}
              {activeTab === "lighthouse" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5 relative z-10"
                >
                  <div className="grid grid-cols-4 gap-2">
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-2.5 text-center cursor-default">
                      <div className="h-10 w-10 rounded-full border-2 border-[#10B981] mx-auto flex items-center justify-center font-bold text-[13px] text-[#10B981]">
                        99
                      </div>
                      <span className="text-[9.5px] text-[#A3A3A3] uppercase font-semibold block mt-1.5">Speed</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-2.5 text-center cursor-default">
                      <div className="h-10 w-10 rounded-full border-2 border-[#10B981] mx-auto flex items-center justify-center font-bold text-[13px] text-[#10B981]">
                        100
                      </div>
                      <span className="text-[9.5px] text-[#A3A3A3] uppercase font-semibold block mt-1.5">A11y</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-2.5 text-center cursor-default">
                      <div className="h-10 w-10 rounded-full border-2 border-[#10B981] mx-auto flex items-center justify-center font-bold text-[13px] text-[#10B981]">
                        100
                      </div>
                      <span className="text-[9.5px] text-[#A3A3A3] uppercase font-semibold block mt-1.5">Practices</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 p-2.5 text-center cursor-default">
                      <div className="h-10 w-10 rounded-full border-2 border-[#10B981] mx-auto flex items-center justify-center font-bold text-[13px] text-[#10B981]">
                        100
                      </div>
                      <span className="text-[9.5px] text-[#A3A3A3] uppercase font-semibold block mt-1.5">SEO</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-[12px] text-[#A3A3A3] flex items-center gap-2.5">
                    <Gauge className="h-4 w-4 text-[#10B981] shrink-0" />
                    <span>Audited via Google Chrome PageSpeed Engine with sub-second mobile rendering.</span>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Strict Tech Stack */}
              {activeTab === "stack" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2 text-[12.5px] relative z-10"
                >
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[#A3A3A3]">Application Engine</span>
                    <strong className="text-white font-mono">Next.js 15 (App Router)</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[#A3A3A3]">Language Rigor</span>
                    <strong className="text-white font-mono">Strict TypeScript (No any)</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[#A3A3A3]">Layout &amp; Styling</span>
                    <strong className="text-white font-mono">Tailwind CSS 3.4 + Fluid Tokens</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[#A3A3A3]">Motion &amp; Gestures</span>
                    <strong className="text-white font-mono">Framer Motion Declarative</strong>
                  </div>
                </motion.div>
              )}

              {/* Footer Assurance Strip */}
              <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[12px]">
                <span className="text-[#A3A3A3] flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
                  Zero WordPress or page-builder bloat
                </span>
                <span className="font-semibold text-white">Full Source Code Ownership</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
