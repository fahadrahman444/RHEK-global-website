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
    <main className="min-h-screen py-4 sm:py-6 space-y-10 sm:space-y-12 lg:space-y-14">
      {/* 1. Hero Canvas */}
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="Our Work"
              badge="Selected Case Studies"
              icon={Briefcase}
              title="Proven software engineering, measured in verified outcomes."
              description="Explore our archive of production web applications, multi-tenant SaaS architectures, and headless digital storefronts engineered for high-growth teams."
            />
          </div>
        </div>
      </div>

      {/* 2. Full Interactive Portfolio Section */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden">
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
