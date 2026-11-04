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
    <main className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Subpage Header */}
      <div className="site-container pt-4 sm:pt-6">
        <SubpageHeader
          currentLabel="Our Work"
          badge="Selected Case Studies"
          icon={Briefcase}
          title="Proven software engineering, measured in verified outcomes."
          description="Explore our archive of production web applications, multi-tenant SaaS architectures, and headless digital storefronts engineered for high-growth teams."
        />
      </div>

      {/* 3. Full Interactive Portfolio Section */}
      <div className="site-container py-8 sm:py-12">
        <PortfolioSection isPage={true} />
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}
