import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work & Case Studies — RHEK GLOBAL",
  description:
    "Explore RHEK GLOBAL's portfolio of custom web platforms, digital systems, and verified client outcomes.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen py-4 sm:py-8 space-y-12 sm:space-y-16">
      {/* 1. Hero Island — Floating Elevated Canvas */}
      <div className="site-container">
        <div className="hero-canvas relative overflow-hidden rounded-[32px] bg-white pt-6 pb-10 sm:pb-12 shadow-xs border border-[#F3F3F3] px-6 lg:px-10">
          {/* Architectural Grid Overlay */}
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            {/* Distinct Subpage Header with Breadcrumbs */}
            <SubpageHeader
              currentLabel="Our Work"
              badge="Selected Portfolio & Case Studies"
              icon={Briefcase}
              title="Proven software engineering, measured in verified outcomes."
              description="Explore our archive of production web applications, multi-tenant SaaS architectures, and headless digital storefronts engineered for high-growth teams."
            />
          </div>
        </div>
      </div>

      {/* 2. Full Interactive Portfolio Section */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-xs border border-[#F3F3F3] overflow-hidden">
          <PortfolioSection isPage={true} />
        </div>
      </div>

      {/* 3. Consistent Company Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
