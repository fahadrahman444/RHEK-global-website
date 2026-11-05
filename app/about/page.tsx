import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import {
  Building2,
  Target,
  Calendar,
  TrendingUp,
} from "@/components/common/icons";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export const metadata: Metadata = {
  title: "About Us — RHEK GLOBAL",
  description:
    "Learn about RHEK GLOBAL — your trusted partner in intelligent digital, operational, and outsourcing solutions.",
};

export default function AboutPage() {
  const { company, companyProfile, workProcess } = RHEK_CONFIG;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Subpage Header */}
      <div className="site-container pt-4 sm:pt-6">
        <SubpageHeader
          currentLabel="About Us"
          badge="Institutional Profile"
          icon={Building2}
          title="RHEK GLOBAL – Your Dedicated Partner in Business Growth."
          description={company.headline}
        />
      </div>

      {/* 3. Narrative & Mission Flow */}
      <div className="site-container py-8 sm:py-12 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div>
            <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#737373] mb-1">
              Our Purpose
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#101010] tracking-[-0.03em] leading-snug mt-0.5">
              Empowering Businesses Through Intelligent Digital &amp; Outsourcing Solutions
            </h2>
            <div className="mt-3 space-y-2.5 text-[13.5px] sm:text-[14px] text-[#525252] leading-relaxed">
              <p>
                At RHEK GLOBAL, we are passionate about helping businesses grow, innovate, and succeed in an increasingly competitive world. We bring together digital expertise, creative solutions, strategic marketing, sales development, and professional outsourcing services under one platform.
              </p>
              <p>
                Our goal is to simplify business operations, strengthen digital presence, create new opportunities, and deliver solutions that help businesses achieve sustainable growth.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#EBEBEB] flex flex-wrap items-center gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-4 py-2 text-[12.5px] font-semibold text-white transition-all duration-200 shadow-xs min-h-[38px] hover:shadow-md hover:-translate-y-0.5"
              >
                <Calendar className="h-3.5 w-3.5 text-white" />
                <span>Book Consultation</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-4 py-2 text-[12.5px] font-semibold text-[#101010] transition-all duration-200 min-h-[38px] hover:shadow-xs hover:-translate-y-0.5"
              >
                <span>Explore Capabilities &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-3">
            <SpotlightCard
              mode="light"
              className="rounded-xl border border-[#EBEBEB] p-4 sm:p-5 hover:border-[#101010]"
              contentClassName="relative z-10"
            >
              <div className="flex items-center gap-1.5 text-[#E9204F] mb-1 font-semibold text-[10.5px] uppercase tracking-wider">
                <Target className="h-3.5 w-3.5 text-[#E9204F]" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-base font-bold text-[#101010] mb-1">
                {companyProfile.mission.headline}
              </h3>
              <p className="text-[13px] text-[#525252] leading-relaxed">
                {companyProfile.mission.text}
              </p>
            </SpotlightCard>

            <SpotlightCard
              mode="light"
              className="rounded-xl border border-[#EBEBEB] p-4 sm:p-5 hover:border-[#101010]"
              contentClassName="relative z-10"
            >
              <div className="flex items-center gap-1.5 text-[#101010] mb-1 font-semibold text-[10.5px] uppercase tracking-wider">
                <TrendingUp className="h-3.5 w-3.5 text-[#101010]" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-base font-bold text-[#101010] mb-1">
                {companyProfile.vision.headline}
              </h3>
              <p className="text-[13px] text-[#525252] leading-relaxed">
                {companyProfile.vision.text}
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* 5 Core Values — Compact 2-column on mobile */}
        <div className="border-t border-[#EBEBEB] pt-6 sm:pt-8">
          <div className="max-w-[640px] mb-4">
            <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
              Guiding Principles
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#101010] mt-0.5">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {companyProfile.coreValues.map((val, idx) => (
              <SpotlightCard
                key={idx}
                mode="light"
                className="group rounded-xl border border-[#EBEBEB] p-3 sm:p-4 hover:border-[#101010]"
                contentClassName="relative z-10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] mb-2 font-mono font-bold text-[11px] group-hover:bg-[#101010] group-hover:text-white transition-colors duration-200">
                  0{idx + 1}
                </span>
                <h4 className="text-[13px] sm:text-[14px] font-bold text-[#101010] mb-1 leading-snug group-hover:text-[#E9204F] transition-colors">
                  {val.name}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-[#525252] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {val.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* 4 Working Principles */}
        <SpotlightCard
          mode="dark"
          className="rounded-2xl bg-[#101010] text-white p-4 sm:p-7 lg:p-8"
          contentClassName="relative z-10"
        >
          <div className="max-w-[700px] mb-4">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#E9204F]">
              Operating Discipline
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white mt-0.5">
              Execution Standards
            </h3>
            <p className="text-[12.5px] text-[#A3A3A3] mt-0.5 leading-relaxed">
              Every project at RHEK GLOBAL is governed by four strict standards:
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {workProcess.principles.map((pr, idx) => (
              <SpotlightCard
                key={idx}
                mode="dark"
                className="group rounded-xl bg-white/[0.03] border border-white/10 p-3 sm:p-3.5 hover:border-white/30"
                contentClassName="relative z-10"
              >
                <h4 className="text-[12.5px] sm:text-[13.5px] font-bold text-white mb-0.5 group-hover:text-[#E9204F] transition-colors">
                  {pr.title}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-[#A3A3A3] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {pr.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </SpotlightCard>
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}
