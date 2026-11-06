"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building2,
  Activity,
  Layers,
  Award,
  PhoneCall,
  Calendar,
} from "@/components/common/icons";

type PanoramicTab = "leads" | "engine" | "reach";

export function Hero() {
  const [activeTab, setActiveTab] = useState<PanoramicTab>("leads");
  const deckRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!deckRef.current) return;
    const rect = deckRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-16 overflow-hidden bg-white">
      {/* 1. Ambient Background Atmosphere */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1100px] h-[450px] bg-gradient-to-b from-[#E9204F]/[0.04] via-transparent to-transparent blur-3xl pointer-events-none -z-10"
      />

      {/* 2. Top Editorial Narrative */}
      <div className="site-container">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center">
          {/* Main Editorial Headline */}
          <h1 className="font-heading text-[32px] sm:text-[46px] lg:text-[56px] font-bold leading-[1.08] tracking-tight text-[#101010]">
            Exclusive commercial walkthroughs and high-conversion client acquisition.
          </h1>

          {/* Subheading */}
          <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[17px] leading-relaxed text-[#525252] max-w-[740px]">
            We connect commercial cleaning contractors and enterprise facility service providers directly with verified property managers actively seeking recurring maintenance contracts.
          </p>

          {/* Action CTAs */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/#leads"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white px-6 py-3 text-[13.5px] font-semibold tracking-wide transition-all duration-200 min-h-[46px] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group whitespace-nowrap"
            >
              <span>Claim Your Territory</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services/janitorial-leads"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white hover:border-[#101010] hover:bg-[#FAFAFA] text-[#101010] px-6 py-3 text-[13.5px] font-semibold transition-all duration-200 min-h-[46px] hover:shadow-2xs hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <span>Check Territory Availability</span>
            </Link>
          </div>

          {/* Micro Trust Proof Bar */}
          <div className="mt-6 pt-4 border-t border-[#EBEBEB] w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-[#525252]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">100% Exclusive Walkthroughs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">Pay-Nothing-Upfront Option</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">Direct Facility Decision-Makers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">100% Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Executive Panoramic Dashboard Frame — Light Editorial Architecture */}
      <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 mt-7 sm:mt-10">
        <div
          ref={deckRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-[#FAFAFA] shadow-[0_16px_40px_rgba(0,0,0,0.04)] overflow-hidden text-[#101010] transition-colors duration-300 group"
        >
          {/* Dynamic Cursor Spotlight Radial Glow — Soft Neutral Sheen */}
          <div
            className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300 ease-out"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.02), transparent 70%)`,
            }}
            aria-hidden="true"
          />

          {/* Panoramic Console Top Chrome Bar — Clean Light Header */}
          <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-2.5 px-4 sm:px-6 py-2.5 border-b border-zinc-200/80 bg-white">
            {/* Left: Section Indicator */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] font-semibold text-[#101010] tracking-tight">
                Live Commercial Pipeline
              </span>
            </div>

            {/* Center: Executive View Switcher */}
            <nav aria-label="Showcase Views" className="flex items-center p-0.5 rounded-lg bg-[#F4F5F7] border border-zinc-200/70">
              <button
                type="button"
                onClick={() => setActiveTab("leads")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                  activeTab === "leads"
                    ? "bg-white text-[#101010] font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-[#101010]"
                }`}
              >
                <Activity className="h-3.5 w-3.5" />
                <span>Commercial Pipeline</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("engine")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                  activeTab === "engine"
                    ? "bg-white text-[#101010] font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-[#101010]"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Outreach Engine</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("reach")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                  activeTab === "reach"
                    ? "bg-white text-[#101010] font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-[#101010]"
                }`}
              >
                <Building2 className="h-3.5 w-3.5" />
                <span>Nationwide Verticals</span>
              </button>
            </nav>

            {/* Right: Operational Status */}
            <div className="hidden lg:flex items-center gap-2 text-[11.5px] text-zinc-500 font-medium">
              <span className="text-emerald-600 font-semibold">Active</span>
              <span className="text-zinc-300">·</span>
              <span>100% Territory Exclusive</span>
            </div>
          </div>

          {/* Panoramic Console Content Area */}
          <div className="relative z-20 p-4 sm:p-6 lg:p-8 min-h-[380px] sm:min-h-[400px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              
              {/* VIEW 1: COMMERCIAL LEAD PIPELINE SHOWCASE */}
              {activeTab === "leads" && (
                <motion.div
                  key="leads"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
                >
                  {/* Left Column: Structured Verified Walkthrough Rows */}
                  <div className="lg:col-span-7 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200/80">
                      <div className="flex items-center gap-2">
                        <span className="text-[12.5px] font-semibold text-[#101010]">Verified Appointments</span>
                        <span className="text-[10.5px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md font-medium">Live</span>
                      </div>
                      <span className="text-[11.5px] text-zinc-400 font-medium">Direct Decision-Makers</span>
                    </div>

                    {/* Card 1 */}
                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-400 hover:shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[13.5px] font-bold text-[#101010]">St. Jude Medical Care Plaza</span>
                          <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-medium px-2 py-0.5 rounded-md">
                            Confirmed Walkthrough
                          </span>
                        </div>
                        <p className="text-[12px] text-zinc-500">
                          Dallas, TX · 65,000 sq ft · Tuesday, 10:30 AM
                        </p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-[11px] text-zinc-400">Est. Contract</div>
                        <div className="text-[15px] font-bold text-[#101010]">
                          $6,800 <span className="text-[12px] font-normal text-zinc-500">/ mo</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-400 hover:shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[13.5px] font-bold text-[#101010]">Metro Logistics & Distribution Center</span>
                          <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-medium px-2 py-0.5 rounded-md">
                            Confirmed Walkthrough
                          </span>
                        </div>
                        <p className="text-[12px] text-zinc-500">
                          Atlanta, GA · 140,000 sq ft · Thursday, 2:00 PM
                        </p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-[11px] text-zinc-400">Est. Contract</div>
                        <div className="text-[15px] font-bold text-[#101010]">
                          $11,500 <span className="text-[12px] font-normal text-zinc-500">/ mo</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-400 hover:shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[13.5px] font-bold text-[#101010]">Horizon Corporate Financial Tower</span>
                          <span className="text-[11px] bg-sky-50 text-sky-700 border border-sky-200/60 font-medium px-2 py-0.5 rounded-md">
                            Decision-Maker Ready
                          </span>
                        </div>
                        <p className="text-[12px] text-zinc-500">
                          Chicago, IL · 85,000 sq ft · Friday, 11:00 AM
                        </p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-[11px] text-zinc-400">Est. Contract</div>
                        <div className="text-[15px] font-bold text-[#101010]">
                          $9,200 <span className="text-[12px] font-normal text-zinc-500">/ mo</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Commercial Performance Telemetry */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <div>
                      <div className="text-[10.5px] font-semibold tracking-wider text-[#E9204F] uppercase">
                        Lead Qualification Guarantee
                      </div>
                      <h2 className="text-[19px] sm:text-[20px] font-bold font-heading text-[#101010] mt-1 [text-wrap:balance]">
                        Zero shared prospects. Direct property decision-makers only.
                      </h2>
                      <p className="text-[13px] text-zinc-600 mt-2 leading-relaxed">
                        Unlike shared directory platforms, every facility appointment is locked exclusively to your commercial cleaning business. You meet confirmed operations managers with active maintenance contracts.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100">
                      <div className="p-3 rounded-lg bg-[#FAFAFA] border border-zinc-200/80">
                        <div className="text-[11px] text-zinc-500">Walkthrough Exclusivity</div>
                        <div className="text-[20px] font-bold text-[#101010] mt-0.5">100%</div>
                        <div className="text-[11px] text-emerald-600 font-medium">Zero shared bids</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAFAFA] border border-zinc-200/80">
                        <div className="text-[11px] text-zinc-500">Upfront Financial Risk</div>
                        <div className="text-[20px] font-bold text-[#101010] mt-0.5">$0.00</div>
                        <div className="text-[11px] text-zinc-500">Pay-nothing-upfront option</div>
                      </div>
                    </div>

                    <Link
                      href="/#leads"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white py-2.5 px-4 text-[12.5px] font-semibold transition-all shadow-xs"
                    >
                      <span>Claim Your Exclusive Territory</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* VIEW 2: PROPRIETARY OUTREACH & DATA ENGINE */}
              {activeTab === "engine" && (
                <motion.div
                  key="engine"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
                >
                  {/* Left Column: Targeted Outreach Infrastructure */}
                  <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                        <span className="text-[12.5px] font-semibold text-[#101010]">Proprietary Outreach Engine</span>
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Multi-Touch Pipeline</span>
                      </div>
                      <h2 className="text-[19px] sm:text-[20px] font-bold font-heading text-[#101010] mt-3 [text-wrap:balance]">
                        Dedicated multi-channel outreach to facility executives.
                      </h2>
                      <p className="text-[13px] text-zinc-600 mt-2 leading-relaxed">
                        Our internal outbound SDRs and automated intelligence engines verify property decision-makers, check renewal timelines, and secure direct on-site walkthroughs.
                      </p>
                    </div>

                    {/* 3 Outreach Telemetry Gauges */}
                    <div className="grid grid-cols-3 gap-2.5 my-4">
                      <div className="p-3 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-center">
                        <div className="text-[20px] font-bold text-[#101010]">98.4%</div>
                        <div className="text-[11px] text-zinc-500 mt-1 font-medium">Verified Contacts</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-center">
                        <div className="text-[20px] font-bold text-emerald-600">100%</div>
                        <div className="text-[11px] text-zinc-500 mt-1 font-medium">Territory Lock</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-center">
                        <div className="text-[20px] font-bold text-[#101010]">40-50%</div>
                        <div className="text-[11px] text-zinc-500 mt-1 font-medium">Close Average</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11.5px] text-zinc-500 pt-3 border-t border-zinc-100">
                      <span>Phone Verification: Direct Line</span>
                      <span>Facility Sizing: Pre-Scouted</span>
                    </div>
                  </div>

                  {/* Right Column: Handover & Lead Briefing Package */}
                  <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                        <span className="text-[12.5px] font-semibold text-[#101010]">Handover &amp; Qualification</span>
                        <span className="text-[11px] text-zinc-500">Turnkey Handover</span>
                      </div>
                      <h2 className="text-[18px] font-bold font-heading text-[#101010] mt-3">
                        What You Receive With Every Appointment
                      </h2>
                    </div>

                    <div className="space-y-2.5 my-3">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-[12.5px]">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#E9204F]" />
                          <span className="font-semibold text-[#101010]">Confirmed Calendar Invite</span>
                        </div>
                        <span className="text-zinc-500 text-[11px]">Synced to Google / Outlook</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-[12.5px]">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[#E9204F]" />
                          <span className="font-semibold text-[#101010]">Facility Scope &amp; Sq Ft Audit</span>
                        </div>
                        <span className="text-zinc-500 text-[11px]">Pre-Walkthrough Brief</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-[12.5px]">
                        <div className="flex items-center gap-2">
                          <PhoneCall className="h-4 w-4 text-[#E9204F]" />
                          <span className="font-semibold text-[#101010]">Decision-Maker Direct Line</span>
                        </div>
                        <span className="text-zinc-500 text-[11px]">Operations &amp; Property Head</span>
                      </div>
                    </div>

                    <Link
                      href="/contact?service=Janitorial%20Lead%20Generation"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white py-2.5 px-4 text-[12.5px] font-semibold transition-all shadow-xs"
                    >
                      <span>Check Territory Availability In Your State</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* VIEW 3: NATIONWIDE VERTICALS SHOWCASE */}
              {activeTab === "reach" && (
                <motion.div
                  key="reach"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
                >
                  {/* Left Column: Industries Matrix */}
                  <div className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                        <span className="text-[12.5px] font-semibold text-[#101010]">Commercial Sectors</span>
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">10+ Specialized Verticals</span>
                      </div>
                      <h2 className="text-[19px] sm:text-[20px] font-bold font-heading text-[#101010] mt-3 [text-wrap:balance]">
                        Commercial facilities and enterprises nationwide.
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3">
                      {[
                        "Medical & Healthcare",
                        "Corporate Office Towers",
                        "Industrial Logistics",
                        "Educational Campuses",
                        "Retail & Auto Centers",
                        "Financial Institutions",
                      ].map((ind) => (
                        <div
                          key={ind}
                          className="p-2.5 rounded-lg bg-[#FAFAFA] border border-zinc-200/80 text-[12px] font-semibold text-slate-800 flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E9204F] shrink-0" />
                          <span className="truncate">{ind}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-[12px] text-zinc-500 pt-2 border-t border-zinc-100">
                      Comprehensive facility coverage with dedicated appointment setting and custom CRM telemetry.
                    </div>
                  </div>

                  {/* Right Column: 7-Step Delivery QA Protocol */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <div>
                      <div className="text-[10.5px] font-semibold tracking-wider text-[#E9204F] uppercase">
                        Execution Governance
                      </div>
                      <h2 className="text-[18px] font-bold font-heading text-[#101010] mt-1">
                        7-Step Smarter Work Methodology
                      </h2>
                      <p className="text-[12.5px] text-zinc-600 mt-2 leading-relaxed">
                        Every delivery is backed by rigorous data verification, milestone checks, and client satisfaction validation before sign-off.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-zinc-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-[#101010] font-bold text-[13px]">
                        <ShieldCheck className="h-4 w-4 text-[#E9204F]" />
                        <span>100% Risk Reversal Guarantee</span>
                      </div>
                      <p className="text-[12px] text-zinc-600 leading-relaxed">
                        If any lead does not match agreed facility qualification specifications, it is replaced immediately at no cost.
                      </p>
                    </div>

                    <Link
                      href="/book-a-meeting"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white py-2.5 px-4 text-[12.5px] font-semibold transition-all shadow-xs"
                    >
                      <span>Book a Strategy Consultation</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Panoramic Deck Bottom Utility Bar — Clean Light Footer */}
          <div className="relative z-20 px-4 sm:px-6 py-2.5 border-t border-zinc-200/80 bg-white flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Commercial territory coverage active across 50 US States</span>
            </div>
            <div className="text-[11px] text-zinc-400">
              RHEK GLOBAL LTD. &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}