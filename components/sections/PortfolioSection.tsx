"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioProjects, type ProjectCaseStudy } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Layers, ArrowRight, Sparkles } from "lucide-react";

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
        {/* Inset Framed Island — Solid #101010 near-black */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#101010] text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-white/10">
          <div className="relative z-10">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] bg-white/10 border border-white/20 px-3.5 py-1 rounded-full mb-3 shadow-2xs font-display">
                  Selected Work &amp; Case Studies
                </span>
                <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold tracking-[-0.04em] leading-[1.15] text-white">
                  Proven results, engineered for impact.
                </h2>
                <p className="mt-3 text-[16px] text-[#ACACAC] max-w-xl leading-relaxed font-sans">
                  Deep architectural case studies delivering verified performance metrics, zero-downtime reliability, and measurable business growth.
                </p>
              </div>

              {/* Category Filter Pills (Solid Fill) */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-full px-4 py-2 text-[13px] font-display font-bold uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] inline-flex items-center ${
                        isActive
                          ? "bg-[#E9204F] text-white shadow-xs"
                          : "bg-white/10 text-[#ACACAC] hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inset Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative rounded-2xl bg-white/5 border border-white/10 p-7 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F] hover:bg-white/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Category & Metric */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11.5px] font-display font-bold uppercase tracking-wider text-[#E9204F]">
                        <Layers className="h-3 w-3" />
                        {project.category}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E9204F]/20 border border-[#E9204F]/40 px-3 py-0.5 text-[11.5px] font-bold text-[#E9204F]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {project.metric}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[22px] font-extrabold text-white group-hover:text-[#E9204F] transition-colors duration-700 mb-1.5 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-[#ACACAC] group-hover:text-[#E9204F] transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-[13px] font-sans text-[#ACACAC] mb-4">
                      Client: {project.client}
                    </p>

                    <p className="text-[15px] leading-relaxed text-[#ACACAC] font-sans mb-5">
                      {project.description}
                    </p>

                    {/* Outcome Box */}
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-6">
                      <p className="text-[13.5px] font-sans text-white">
                        <span className="text-[#E9204F] font-bold font-display">Key Impact: </span>
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11.5px] font-sans text-[#ACACAC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Pathway Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[15px] text-[#ACACAC] font-sans text-center sm:text-left">
                Want to examine our complete repository of case studies, tech stacks, and benchmarks?
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-[#E9204F] text-white hover:bg-white hover:text-[#101010] transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] px-6 py-3 text-[13px] font-bold font-display uppercase tracking-wider shadow-md shrink-0 min-h-[44px]"
              >
                <span>View All Case Studies ({portfolioProjects.length})</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Light Mode (used on /work page)
  return (
    <section id="work" className="bg-white px-6 lg:px-10 py-10 lg:py-14">
      <div className="mx-auto max-w-[1080px]">
        {/* Filter Pills Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#F3F3F3]">
          <div className="text-sm font-sans text-[#747474]">
            Showing <span className="font-extrabold text-[#101010] font-display">{displayedProjects.length}</span> verified case {displayedProjects.length === 1 ? "study" : "studies"}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-[13px] font-bold font-display uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] inline-flex items-center ${
                    isActive
                      ? "bg-[#E9204F] text-white shadow-xs"
                      : "bg-[#F3F3F3] text-[#101010] hover:bg-[#101010] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-[#F3F3F3] border border-transparent p-7 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F] hover:bg-white hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#101010]/10 px-3 py-1 text-[11.5px] font-bold font-display uppercase tracking-wider text-[#101010] group-hover:text-[#E9204F] transition-colors duration-700">
                    <Layers className="h-3 w-3 text-[#E9204F]" />
                    {project.category}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E9204F]/10 border border-[#E9204F]/30 px-3 py-0.5 text-[11.5px] font-bold text-[#E9204F]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {project.metric}
                  </span>
                </div>

                <h3 className="font-display text-[22px] font-extrabold text-[#101010] group-hover:text-[#E9204F] transition-colors duration-700 mb-1.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#747474] group-hover:text-[#E9204F] transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-[13px] font-sans text-[#747474] mb-4">
                  Client: {project.client}
                </p>

                <p className="text-[15px] leading-relaxed text-[#747474] font-sans mb-5">
                  {project.description}
                </p>

                <div className="rounded-xl bg-white border border-[#101010]/10 p-4 mb-6">
                  <p className="text-[13.5px] font-sans text-[#101010]">
                    <span className="text-[#E9204F] font-bold font-display">Key Impact: </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#101010]/10">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white border border-[#101010]/10 px-2.5 py-1 text-[11.5px] font-sans text-[#747474]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-[#F3F3F3] bg-[#FAFAFA] rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-[#E9204F] uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
              <span>Custom Architecture Available</span>
            </div>
            <h3 className="text-2xl font-extrabold font-display text-[#101010] tracking-tight">
              Have a similar product vision?
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-[#747474] font-sans max-w-xl">
              We design and engineer bespoke web platforms with strict type safety, sub-second response times, and 100% IP ownership.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E9204F] hover:bg-[#101010] transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] px-6 py-3 text-[13.5px] font-bold font-display uppercase tracking-wider text-white shadow-xs shrink-0 min-h-[44px]"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
