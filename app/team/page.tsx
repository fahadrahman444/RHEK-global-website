import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import {
  Users,
  Sparkles,
  PhoneCall,
  Code2,
  Palette,
  Video,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Team — RHEK GLOBAL",
  description:
    "Meet RHEK GLOBAL's specialist divisions in commercial lead generation, B2B sales development, full-stack web engineering, and creative production.",
};

const TEAM_DIVISIONS = [
  {
    icon: Sparkles,
    name: "Commercial Lead Intelligence",
    focus: "Janitorial & Commercial Facilities",
    description:
      "Dedicated market researchers mapping facility managers, property executives, and verified commercial contracts with zero upfront risk options.",
    capabilities: [
      "Territory-Exclusive Lead Research",
      "Facility Walkthrough Qualification",
      "Decision-Maker Verification",
      "Zero-Upfront Performance Pipeline",
    ],
  },
  {
    icon: PhoneCall,
    name: "B2B Outbound & Sales Development",
    focus: "SDR Cadences & Pipeline Building",
    description:
      "Skilled sales development representatives executing high-touch cold calling, bespoke email workflows, and LinkedIn outreach to secure qualified executive meetings.",
    capabilities: [
      "Custom Outbound Playbooks",
      "Multi-Touch Omni-Channel Outreach",
      "Lead Qualification & Objection Handling",
      "Seamless CRM Synchronization",
    ],
  },
  {
    icon: Code2,
    name: "Full-Stack Web Engineering",
    focus: "Modern Web Apps & Scalable Systems",
    description:
      "Engineers delivering modern Next.js and TypeScript web platforms with performance-first architectures, strict accessibility, and high conversion mechanics.",
    capabilities: [
      "Next.js App Router Architecture",
      "Sub-second Core Web Vitals",
      "API Integrations & CRM Pipelines",
      "Strict TypeScript & Modern React",
    ],
  },
  {
    icon: Palette,
    name: "Brand Design & Creative Strategy",
    focus: "Visual Identity & High-Converting UI",
    description:
      "Designers crafting distinctive visual collateral, company decks, and digital experiences that elevate brand credibility and command attention in competitive markets.",
    capabilities: [
      "Corporate Brand Identity Systems",
      "Sales Decks & Marketing Collateral",
      "Ad Creative & Social Visuals",
      "Responsive UI/UX Layouts",
    ],
  },
  {
    icon: Video,
    name: "Commercial Video Production",
    focus: "Short-Form, Explainer & Ad Media",
    description:
      "Producers and motion artists delivering punchy commercial reels, video sales letters (VSLs), and social ads that increase trust and customer retention.",
    capabilities: [
      "High-Paced Social Ad Creatives",
      "B2B Explainer & Product Demos",
      "Motion Graphics & Color Grading",
      "Multi-Platform Aspect Ratios",
    ],
  },
  {
    icon: Headphones,
    name: "Operations & Virtual Administration",
    focus: "Back-Office & Executive Support",
    description:
      "Dedicated administrative assistants handling scheduling, inbox management, CRM data hygiene, and recurring back-office tasks so leadership can focus on growth.",
    capabilities: [
      "Executive Calendar & Inbox Management",
      "HubSpot, Close & Salesforce Hygiene",
      "Data Verification & Audit Reports",
      "Bilingual Support Availability",
    ],
  },
];

const WORKING_VALUES = [
  {
    title: "100% Accountability",
    description:
      "We operate under measurable KPIs and performance milestones, backed by our 100% satisfaction policy.",
  },
  {
    title: "Territory Exclusivity",
    description:
      "We never double-sell leads or pit clients against each other in the same commercial territory.",
  },
  {
    title: "Specialist-Led Execution",
    description:
      "Every project is handled by dedicated domain experts, not generic multi-role contractors.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Real-time pipeline transparency, call recordings, verified lead sheets, and direct communication channels.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen py-3 sm:py-5 space-y-6 sm:space-y-8">
      {/* 1. Hero Canvas */}
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white p-5 sm:p-7 lg:p-8 shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="Team"
              badge="Domain Divisions"
              icon={Users}
              title="The Specialist Divisions Behind Your Business Engine."
              description="A multidisciplinary collective of commercial lead researchers, B2B sales development representatives, creative producers, and full-stack engineers."
            />
          </div>
        </div>
      </div>

      {/* 2. Functional Team Divisions */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden p-5 sm:p-7 lg:p-9">
          <div className="mx-auto max-w-[1080px]">
            <div className="max-w-2xl mb-6">
              <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#737373] mb-1">
                Dedicated Domain Experts
              </span>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#101010] tracking-[-0.03em] leading-snug">
                Specialized Teams for Every Stage of Your Pipeline
              </h2>
              <p className="text-[13.5px] text-[#525252] leading-relaxed mt-1.5">
                We organize our talent into focused functional units so you receive industry-tested methodology and reliable execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {TEAM_DIVISIONS.map((team) => {
                const Icon = team.icon;
                return (
                  <div
                    key={team.name}
                    className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-4 sm:p-5 flex flex-col justify-between hover:border-[#101010] hover:bg-white transition-colors"
                  >
                    <div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] mb-3">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#737373]">
                        {team.focus}
                      </span>
                      <h3 className="text-base font-bold text-[#101010] mt-0.5 mb-1.5 leading-snug">
                        {team.name}
                      </h3>
                      <p className="text-[12.5px] text-[#525252] leading-relaxed mb-3">
                        {team.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EBEBEB]">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#737373] mb-1.5">
                        Core Disciplines:
                      </p>
                      <ul className="space-y-1">
                        {team.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-center gap-1.5 text-[11.5px] text-[#525252]"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#16A34A] shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Values / Work Ethic */}
            <div className="mt-8 pt-6 border-t border-[#EBEBEB]">
              <div className="max-w-xl mb-4">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
                  Execution Standards
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#101010] mt-0.5">
                  How Our Team Delivers Reliable Results
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {WORKING_VALUES.map((val, idx) => (
                  <div
                    key={val.title}
                    className="rounded-lg border border-[#EBEBEB] bg-[#FAFAFA] p-3.5 hover:border-[#101010] transition-colors"
                  >
                    <span className="font-mono text-[11px] font-bold text-[#101010]">
                      0{idx + 1}
                    </span>
                    <h4 className="text-[13.5px] font-bold text-[#101010] mt-0.5 mb-1">
                      {val.title}
                    </h4>
                    <p className="text-[12px] text-[#525252] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Consultation CTA */}
            <div className="mt-8 rounded-xl bg-[#101010] border border-white/10 p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-md">
              <div className="max-w-[620px]">
                <div className="inline-flex items-center gap-1.5 rounded bg-white/10 border border-white/15 text-[#E9204F] text-[10.5px] font-semibold uppercase tracking-wider px-2 py-0.5 mb-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
                  <span>Direct Team Access</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                  Ready to Deploy a Dedicated Extension to Your Business?
                </h3>
                <p className="text-[12.5px] text-[#A3A3A3] mt-0.5 leading-relaxed">
                  Schedule an initial consultation to review your requirements, market territory, or production scope with our specialists.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-4 py-2 text-[12.5px] font-semibold text-white whitespace-nowrap transition-colors min-h-[38px] shrink-0"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Schedule Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
