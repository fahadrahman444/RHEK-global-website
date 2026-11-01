import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import {
  Building2,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  TrendingUp,
  Award,
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
    <main className="min-h-screen py-4 sm:py-8 space-y-12 sm:space-y-16">
      {/* 1. Hero Island — Floating Elevated Canvas */}
      <div className="site-container">
        <div className="hero-canvas relative overflow-hidden rounded-[32px] bg-white pt-6 pb-10 sm:pb-12 shadow-xs ring-1 ring-slate-900/5 px-6 lg:px-10">
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="About Us"
              badge="Who We Are"
              icon={Building2}
              title="RHEK GLOBAL – Your Trusted Partner in Business Growth."
              description={company.headline}
            />
          </div>
        </div>
      </div>

      {/* 2. Narrative & Mission Island */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-xs border border-[#F3F3F3] overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-[1080px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] bg-[#FAFAFA] border border-[#F3F3F3] px-3.5 py-1 rounded-full mb-3 shadow-2xs font-display">
                Our Purpose
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101010] tracking-[-0.04em] leading-[1.15] mt-1">
                Empowering Businesses Through Intelligent Digital &amp; Outsourcing Solutions
              </h2>
              <div className="mt-5 space-y-4 text-[16px] text-[#747474] font-sans leading-relaxed">
                <p>
                  At RHEK GLOBAL, we are passionate about helping businesses grow, innovate, and succeed in an increasingly competitive world. We bring together digital expertise, creative solutions, strategic marketing, sales development, and professional outsourcing services under one platform.
                </p>
                <p>
                  Our goal is to simplify business operations, strengthen digital presence, create new opportunities, and deliver solutions that help businesses achieve sustainable growth.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F3F3F3] flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E9204F] hover:bg-[#101010] px-6 py-3 text-[13px] font-bold font-display uppercase tracking-wider text-white transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] shadow-xs min-h-[44px]"
                >
                  <Calendar className="h-4 w-4 text-white" />
                  <span>Book a Consultation</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-[13px] font-bold font-display uppercase tracking-wider text-[#101010] hover:text-[#E9204F] transition-colors duration-700"
                >
                  Contact Our Team &rarr;
                </Link>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-[#FAFAFA] border border-[#F3F3F3] p-6 sm:p-8 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F]">
                <div className="flex items-center gap-2 text-[#E9204F] mb-2 font-extrabold font-display text-[12px] uppercase tracking-wider">
                  <Target className="h-4 w-4 text-[#E9204F]" />
                  <span>6.1 Our Mission</span>
                </div>
                <h3 className="text-xl font-extrabold font-display text-[#101010] mb-2">
                  {companyProfile.mission.headline}
                </h3>
                <p className="text-[15px] text-[#747474] font-sans leading-relaxed">
                  {companyProfile.mission.text}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAFAFA] border border-[#F3F3F3] p-6 sm:p-8 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F]">
                <div className="flex items-center gap-2 text-[#101010] mb-2 font-extrabold font-display text-[12px] uppercase tracking-wider">
                  <TrendingUp className="h-4 w-4 text-[#E9204F]" />
                  <span>6.2 Our Vision</span>
                </div>
                <h3 className="text-xl font-extrabold font-display text-[#101010] mb-2">
                  {companyProfile.vision.headline}
                </h3>
                <p className="text-[15px] text-[#747474] font-sans leading-relaxed">
                  {companyProfile.vision.text}
                </p>
              </div>
            </div>
          </div>

          {/* 5 Core Values */}
          <div className="mt-16 pt-12 border-t border-[#F3F3F3]">
            <div className="text-center max-w-[640px] mx-auto mb-10">
              <span className="inline-block text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
                Guiding Principles
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101010] mt-1">
                6.3 Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {companyProfile.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-transparent bg-[#F3F3F3] p-6 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:bg-[#E9204F] hover:text-white group"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#101010] group-hover:bg-white/20 group-hover:text-white mb-3 font-extrabold font-display text-[13px] transition-colors duration-700">
                    0{idx + 1}
                  </span>
                  <h4 className="text-[16px] font-extrabold font-display text-[#101010] group-hover:text-white mb-2 leading-snug transition-colors duration-700">
                    {val.name}
                  </h4>
                  <p className="text-[13.5px] text-[#747474] group-hover:text-white/90 leading-relaxed font-sans transition-colors duration-700">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Working Principles */}
          <div className="mt-16 rounded-2xl bg-[#101010] border border-white/10 text-white p-8 sm:p-10 shadow-xl">
            <div className="max-w-[700px] mb-8">
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
                Operating Discipline
              </span>
              <h3 className="text-2xl font-extrabold font-display text-white mt-1">
                4.2 Our Working Principles
              </h3>
              <p className="text-[15px] text-[#ACACAC] font-sans mt-1 leading-relaxed">
                Every project at RHEK GLOBAL is governed by four strict standards:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workProcess.principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/5 border border-white/10 p-5 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:bg-[#E9204F] hover:border-[#E9204F] group"
                >
                  <h4 className="text-[15px] font-extrabold font-display text-white mb-1.5">
                    {pr.title}
                  </h4>
                  <p className="text-[13px] text-[#ACACAC] group-hover:text-white/90 leading-relaxed font-sans transition-colors duration-700">
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
