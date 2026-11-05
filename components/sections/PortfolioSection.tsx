"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioProjects, type ProjectCaseStudy } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Layers, ArrowRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";

type CategoryFilter = "All" | ProjectCaseStudy["category"];

const categories: CategoryFilter[] = [
  "All",
  "SaaS Platform",
  "Web App",
  "E-Commerce",
  "Design System",
];

interface PortfolioSectionProps {
  isPage?: boolean;
  maxItems?: number;
  variant?: "inset-dark" | "light";
}

export function PortfolioSection({
  isPage = false,
  maxItems,
  variant = "light",
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const isDark = variant === "inset-dark";

  const matchingProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const displayedProjects = maxItems ? matchingProjects.slice(0, maxItems) : matchingProjects;

  if (isDark) {
    return (
      <section id="work" className="site-container">
        {/* Inset Framed Island */}
        <div className="relative overflow-hidden rounded-2xl bg-[#101010] text-white p-5 sm:p-7 lg:p-9 shadow-lg border border-white/10">
          <div className="relative z-10">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#E9204F] bg-white/10 border border-white/15 px-2.5 py-0.5 rounded mb-2">
                  Selected Case Studies
                </span>
                <h2 className="font-heading text-[24px] sm:text-[32px] font-bold tracking-[-0.035em] leading-[1.15] text-white">
                  Proven Results, Engineered for Impact.
                </h2>
                <p className="mt-1.5 text-[14px] text-[#A3A3A3] max-w-xl leading-relaxed">
                  Deep architectural case studies delivering verified performance metrics, zero-downtime reliability, and measurable business growth.
                </p>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-lg px-3 py-1 text-[11.5px] font-semibold transition-colors min-h-[34px] inline-flex items-center ${
                        isActive
                          ? "bg-white text-[#101010]"
                          : "bg-white/5 text-[#A3A3A3] border border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inset Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedProjects.map((project) => (
                <SpotlightCard
                  key={project.id}
                  mode="dark"
                  className="rounded-xl bg-white/[0.03] border border-white/10 p-6 transition-colors hover:border-white/25 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Category & Metric */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        <Layers className="h-3 w-3 text-[#E9204F]" />
                        {project.category}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded bg-[#16A34A]/10 border border-[#16A34A]/30 px-2.5 py-0.5 text-[11px] font-semibold text-[#16A34A]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {project.metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white mb-1.5 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-[#A3A3A3]" />
                    </h3>
                    <p className="text-[12.5px] text-[#A3A3A3] mb-3">
                      Client: {project.client}
                    </p>

                    <p className="text-[13.5px] leading-relaxed text-[#D4D4D4] mb-4">
                      {project.description}
                    </p>

                    <div className="rounded-lg bg-white/5 border border-white/10 p-3.5 mb-5">
                      <p className="text-[12.5px] text-white">
                        <span className="text-[#E9204F] font-semibold">Key Impact: </span>
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-mono text-[#A3A3A3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Bottom Full Directory Link */}
            <div className="mt-10 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[14px] text-[#A3A3A3] text-center sm:text-left">
                Review complete technical architectures, case studies, and engineering benchmarks.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] text-white hover:bg-white hover:text-[#101010] transition-colors px-5 py-2.5 text-[12.5px] font-semibold shrink-0 min-h-[40px]"
              >
                <span>View All Case Studies ({portfolioProjects.length})</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Light Mode (used on /work page)
  return (
    <section id="work" className="bg-white px-6 lg:px-10 py-8 lg:py-12">
      <div className="mx-auto max-w-[1080px]">
        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#EBEBEB]">
          <div className="text-[13px] text-[#737373]">
            Showing <span className="font-bold text-[#101010]">{displayedProjects.length}</span> verified case {displayedProjects.length === 1 ? "study" : "studies"}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-colors min-h-[36px] inline-flex items-center ${
                    isActive
                      ? "bg-[#101010] text-white"
                      : "bg-[#FAFAFA] text-[#525252] border border-[#E5E5E5] hover:border-[#101010] hover:text-[#101010]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayedProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              mode="light"
              className="rounded-xl border border-[#EBEBEB] p-6 hover:border-[#101010] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded bg-white border border-[#EBEBEB] px-2.5 py-0.5 text-[11px] font-semibold text-[#101010]">
                    <Layers className="h-3 w-3 text-[#101010]" />
                    {project.category}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded bg-[#16A34A]/10 border border-[#16A34A]/30 px-2 py-0.5 text-[11px] font-semibold text-[#16A34A]">
                    <CheckCircle2 className="h-3 w-3" />
                    {project.metric}
                  </span>
                </div>

                <h3 className="font-heading text-[18px] font-bold text-[#101010] mb-1 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#737373]" />
                </h3>
                <p className="text-[12px] text-[#737373] mb-3">
                  Client: {project.client}
                </p>

                <p className="text-[13.5px] leading-relaxed text-[#525252] mb-4">
                  {project.description}
                </p>

                <div className="rounded-lg bg-white border border-[#EBEBEB] p-3.5 mb-5">
                  <p className="text-[12.5px] text-[#101010]">
                    <span className="text-[#E9204F] font-semibold">Key Impact: </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-[#EBEBEB]">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-white border border-[#EBEBEB] px-2 py-0.5 text-[11px] font-mono text-[#525252]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-7 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#E9204F] uppercase tracking-wider mb-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
              <span>Bespoke Architecture Available</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-[#101010]">
              Have a similar product vision?
            </h3>
            <p className="mt-1 text-[13.5px] text-[#525252] max-w-xl">
              We design and engineer bespoke web platforms with strict type safety, sub-second response times, and 100% IP ownership.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-5 py-2.5 text-[13px] font-semibold transition-colors shadow-xs shrink-0 min-h-[42px]"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
