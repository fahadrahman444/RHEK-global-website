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
} from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export const metadata: Metadata = {
  title: "About Us — RHEK GLOBAL",
  description:
    "Learn about RHEK GLOBAL — your trusted partner in intelligent digital, operational, and outsourcing solutions.",
};

export default function AboutPage() {
  const { company, companyProfile, workProcess } = RHEK_CONFIG;

  return (
    <main className="min-h-screen py-4 sm:py-6 space-y-10 sm:space-y-12 lg:space-y-14">
      {/* 1. Hero Canvas */}
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="About Us"
              badge="Institutional Profile"
              icon={Building2}
              title="RHEK GLOBAL – Your Dedicated Partner in Business Growth."
              description={company.headline}
            />
          </div>
        </div>
      </div>

      {/* 2. Narrative & Mission Island */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-[1080px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-2">
                Our Purpose
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101010] tracking-[-0.035em] leading-[1.15] mt-1">
                Empowering Businesses Through Intelligent Digital &amp; Outsourcing Solutions
              </h2>
              <div className="mt-4 space-y-3.5 text-[15px] text-[#525252] leading-relaxed">
                <p>
                  At RHEK GLOBAL, we are passionate about helping businesses grow, innovate, and succeed in an increasingly competitive world. We bring together digital expertise, creative solutions, strategic marketing, sales development, and professional outsourcing services under one platform.
                </p>
                <p>
                  Our goal is to simplify business operations, strengthen digital presence, create new opportunities, and deliver solutions that help businesses achieve sustainable growth.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EBEBEB] flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors shadow-xs min-h-[42px]"
                >
                  <Calendar className="h-4 w-4 text-white" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-4 py-2.5 text-[13px] font-semibold text-[#101010] transition-colors min-h-[42px]"
                >
                  <span>Explore Capabilities &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              <div className="rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-6 hover:border-[#101010] transition-colors">
                <div className="flex items-center gap-2 text-[#E9204F] mb-1.5 font-semibold text-[11px] uppercase tracking-wider">
                  <Target className="h-3.5 w-3.5 text-[#E9204F]" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-lg font-bold text-[#101010] mb-1.5">
                  {companyProfile.mission.headline}
                </h3>
                <p className="text-[14px] text-[#525252] leading-relaxed">
                  {companyProfile.mission.text}
                </p>
              </div>

              <div className="rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-6 hover:border-[#101010] transition-colors">
                <div className="flex items-center gap-2 text-[#101010] mb-1.5 font-semibold text-[11px] uppercase tracking-wider">
                  <TrendingUp className="h-3.5 w-3.5 text-[#101010]" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-lg font-bold text-[#101010] mb-1.5">
                  {companyProfile.vision.headline}
                </h3>
                <p className="text-[14px] text-[#525252] leading-relaxed">
                  {companyProfile.vision.text}
                </p>
              </div>
            </div>
          </div>

          {/* 5 Core Values */}
          <div className="mt-14 pt-10 border-t border-[#EBEBEB]">
            <div className="max-w-[640px] mb-8">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                Guiding Principles
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#101010] mt-1">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {companyProfile.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-5 hover:bg-white hover:border-[#101010] transition-colors group"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] mb-3 font-mono font-bold text-[12px]">
                    0{idx + 1}
                  </span>
                  <h4 className="text-[15px] font-bold text-[#101010] mb-1.5 leading-snug">
                    {val.name}
                  </h4>
                  <p className="text-[12.5px] text-[#525252] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Working Principles */}
          <div className="mt-12 rounded-xl bg-[#101010] border border-white/10 text-white p-7 sm:p-9 shadow-lg">
            <div className="max-w-[700px] mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                Operating Discipline
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                Execution Standards
              </h3>
              <p className="text-[13.5px] text-[#A3A3A3] mt-1 leading-relaxed">
                Every project at RHEK GLOBAL is governed by four strict standards:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {workProcess.principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-white/[0.03] border border-white/10 p-4 hover:border-white/20 transition-colors"
                >
                  <h4 className="text-[14px] font-bold text-white mb-1">
                    {pr.title}
                  </h4>
                  <p className="text-[12.5px] text-[#A3A3A3] leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
