"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";

export function WebDevHeroClean() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="overview"
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#EBEBEB] bg-gradient-to-b from-[#FAFAFA] to-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101010]/5 border border-[#101010]/10 text-[#101010] text-[12px] font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
              <span>Enterprise Web Design & Development</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#101010] tracking-[-0.035em] leading-[1.08]">
              We Build High-Performing Websites That Drive <span className="text-[#E9204F]">Real Pipeline.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#525252] leading-relaxed max-w-2xl">
              Turn your B2B website into a high-converting revenue engine. We engineer custom Next.js web applications, Swiss Minimal user interfaces, and sub-second architectures that generate qualified business inquiries.
            </p>

            {/* Key Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#101010]">
                <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                <span>Sub-Second Load Times</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#101010]">
                <ShieldCheck className="h-4 w-4 text-[#E9204F] shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#101010]">
                <Zap className="h-4 w-4 text-[#E9204F] shrink-0" />
                <span>14-Day Refund Guarantee</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollTo("cta")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-[#101010] text-white px-7 py-3.5 text-[15px] font-bold shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px]"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white hover:bg-[#FAFAFA] text-[#101010] px-6 py-3.5 text-[15px] font-bold transition-all duration-200 min-h-[48px]"
              >
                <span>Explore Capabilities</span>
              </button>
            </div>
          </div>

          {/* Right Column: 5 Cols Interactive Architecture Preview */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-xl relative overflow-hidden"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[12px] font-mono text-[#737373] ml-2">rhek-engine.config.ts</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#E9204F]/10 text-[#E9204F]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F] animate-ping" />
                  LIVE BENCHMARK
                </span>
              </div>

              {/* Benchmark Grid */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">Lighthouse</p>
                  <p className="text-3xl font-extrabold text-[#101010] mt-1">100<span className="text-sm text-[#E9204F]">/100</span></p>
                  <p className="text-[11px] text-[#525252] mt-0.5">Performance & SEO</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">Core Web Vitals</p>
                  <p className="text-3xl font-extrabold text-[#101010] mt-1">&lt;0.9s</p>
                  <p className="text-[11px] text-[#525252] mt-0.5">Largest Contentful Paint</p>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-3.5 rounded-xl bg-[#101010] text-[#E0E0E0] font-mono text-[12px] leading-relaxed">
                <div className="flex items-center gap-2 text-[#737373] pb-2 border-b border-white/10 mb-2">
                  <Terminal className="h-3.5 w-3.5 text-[#E9204F]" />
                  <span>Production Pipeline</span>
                </div>
                <p><span className="text-[#E9204F]">const</span> stack = [<span className="text-[#27C93F]">&quot;Next.js 15&quot;</span>, <span className="text-[#27C93F]">&quot;TypeScript&quot;</span>, <span className="text-[#27C93F]">&quot;Tailwind&quot;</span>];</p>
                <p><span className="text-[#E9204F]">const</span> standard = <span className="text-[#FFBD2E]">&quot;Zero Slop · WCAG 2.2 AA&quot;</span>;</p>
                <p className="text-[#737373] mt-1">{"// Status: Production Grade Ready"}</p>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-4 pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-[12px]">
                <span className="text-[#737373]">Need custom development scope?</span>
                <button
                  type="button"
                  onClick={() => scrollTo("cta")}
                  className="font-bold text-[#E9204F] hover:underline"
                >
                  Request Quote →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
