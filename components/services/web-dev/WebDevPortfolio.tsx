import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, Star, Quote } from "@/components/common/icons";
import { portfolioProjects } from "@/data/portfolio";
import { SpotlightCard } from "./SpotlightCard";

export function WebDevPortfolio() {
  const strata = portfolioProjects.find((p) => p.id === "strata-fintech") || portfolioProjects[0];
  const aurora = portfolioProjects.find((p) => p.id === "aurora-health") || portfolioProjects[1];
  const vanguard = portfolioProjects.find((p) => p.id === "vanguard-design") || portfolioProjects[3];
  const nordic = portfolioProjects.find((p) => p.id === "nordic-craft") || portfolioProjects[2];

  const testimonials = [
    {
      quote:
        "The site built by RHEK Global loads instantly and doubled our inbound inquiry rate from Google Ads. Handing over clean TypeScript code gave us complete freedom.",
      author: "Julian Reynolds",
      role: "Managing Director",
      company: "Apex Commercial Partners",
      metric: "+114% Qualified Inquiries",
    },
    {
      quote:
        "RHEK Global replaced our clunky legacy portal with a sub-second Next.js architecture that handles 50k+ active sessions with zero downtime. Pure engineering excellence.",
      author: "Elena Rostova",
      role: "Head of Product",
      company: "Strata Global Financial",
      metric: "99.99% Production Uptime",
    },
  ];

  return (
    <section id="sec-08" className="border-t border-white/10 bg-[#0A0A0B] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Left-Aligned Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Section 08 • Testimonials &amp; Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
            Client Testimonials &amp; Asymmetric Case Studies.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
            Explore real-world client architectures built with Next.js, TypeScript, and modern design systems. Each system is engineered to solve acute business bottlenecks.
          </p>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="space-y-8">
          
          {/* Row 1: 7-Column + 5-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Strata Financial OS (7 Columns) */}
            <SpotlightCard className="lg:col-span-7 p-7 sm:p-9 group hover:-translate-y-1.5 transition-all duration-300">
              <div>
                {/* Simulated UI Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-white/10 text-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider">
                      {strata.category}
                    </span>
                    <span className="text-[12.5px] font-medium text-[#A3A3A3]">
                      • {strata.client}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#10B981] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full group-hover:border-emerald-500/50 transition-colors">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {strata.metric}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-white transition-colors">
                    {strata.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-[#A3A3A3] leading-relaxed">
                    {strata.description}
                  </p>
                </div>

                {/* Outcome Highlight Box */}
                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4 text-[13px] flex items-start gap-2.5 group-hover:border-white/15 transition-colors">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-white">
                    <strong className="text-white font-semibold">Verified Impact:</strong>{" "}
                    <span className="text-white/90">{strata.outcome}</span>
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills & CTA */}
              <div className="pt-7 mt-7 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {strata.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-[#A3A3A3] hover:text-white hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white group-hover:text-[#E9204F] transition-colors"
                >
                  <span>Read Full Spec</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Aurora Health Portal (5 Columns) */}
            <SpotlightCard className="lg:col-span-5 p-7 sm:p-8 group hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="rounded-full bg-white/10 text-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider">
                    {aurora.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#10B981] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full group-hover:border-emerald-500/50 transition-colors">
                    {aurora.metric}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {aurora.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#A3A3A3] leading-relaxed">
                    {aurora.description}
                  </p>
                </div>

                <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-3.5 text-[12.5px] flex items-start gap-2.5 group-hover:border-white/15 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    <strong className="text-white">Outcome:</strong> {aurora.outcome}
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {aurora.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-[#A3A3A3] hover:text-white hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white group-hover:text-[#E9204F] transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Row 2: 5-Column + 7-Column Split (Asymmetric Alternation) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Vanguard Design System (5 Columns) */}
            <SpotlightCard className="lg:col-span-5 p-7 sm:p-8 group hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="rounded-full bg-white/10 text-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider">
                    {vanguard.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#E9204F] bg-red-950/60 border border-red-500/30 px-2.5 py-1 rounded-full group-hover:border-red-500/50 transition-colors">
                    {vanguard.metric}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {vanguard.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#A3A3A3] leading-relaxed">
                    {vanguard.description}
                  </p>
                </div>

                <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-3.5 text-[12.5px] flex items-start gap-2.5 group-hover:border-white/15 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    <strong className="text-white">Standardized:</strong> {vanguard.outcome}
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {vanguard.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-[#A3A3A3] hover:text-white hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white group-hover:text-[#E9204F] transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Nordic Minimalist E-Commerce (7 Columns) */}
            <SpotlightCard className="lg:col-span-7 p-7 sm:p-9 group hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-white/10 text-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider">
                      {nordic.category}
                    </span>
                    <span className="text-[12.5px] font-medium text-[#A3A3A3]">
                      • {nordic.client}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#10B981] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full group-hover:border-emerald-500/50 transition-colors">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {nordic.metric}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-white transition-colors">
                    {nordic.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-[#A3A3A3] leading-relaxed">
                    {nordic.description}
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4 text-[13px] flex items-start gap-2.5 group-hover:border-white/15 transition-colors">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-white">
                    <strong className="text-white font-semibold">Verified Impact:</strong>{" "}
                    <span className="text-white/90">{nordic.outcome}</span>
                  </span>
                </div>
              </div>

              <div className="pt-7 mt-7 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {nordic.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-[#A3A3A3] hover:text-white hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white group-hover:text-[#E9204F] transition-colors"
                >
                  <span>Read Full Spec</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Client Testimonials Strip from genetorial.pdf Section 8 */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E9204F] block">
                VERIFIED CONTRACTOR &amp; CLIENT EXPERIENCES
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                What Leaders Say About Building With Us
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="text-[12px] font-bold text-white ml-1.5">5.0 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <SpotlightCard key={idx} className="p-7 bg-[#141417]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[10.5px] font-bold text-[#10B981] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    {t.metric}
                  </span>
                </div>

                <Quote className="h-6 w-6 text-[#E9204F]/40 mb-2" />
                <p className="text-[13.5px] text-white/95 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[12.5px]">
                  <div>
                    <strong className="text-white block font-semibold">{t.author}</strong>
                    <span className="text-[#737373] text-[11.5px]">{t.role}, {t.company}</span>
                  </div>
                  <span className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-[#A3A3A3] font-mono">
                    Verified Partner
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
