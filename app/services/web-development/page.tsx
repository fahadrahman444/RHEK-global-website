import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceSubNav } from "@/components/services/ServiceSubNav";
import { WebDevHeroClean } from "@/components/services/web-dev/WebDevHeroClean";
import { WebDevProblemSolution } from "@/components/services/web-dev/WebDevProblemSolution";
import { WebDevServicesGrid } from "@/components/services/web-dev/WebDevServicesGrid";
import { WebDevProcessRoadmap } from "@/components/services/web-dev/WebDevProcessRoadmap";
import { WebDevTechStack } from "@/components/services/web-dev/WebDevTechStack";
import { WebDevPricingClean } from "@/components/services/web-dev/WebDevPricingClean";
import { WebDevFaq } from "@/components/services/web-dev/WebDevFaq";
import { WebDevFinalCta } from "@/components/services/web-dev/WebDevFinalCta";

export const metadata: Metadata = {
  title: "Web Design & Development Services | Rate Global",
  description:
    "High-performing Next.js web design and development engineered for sub-second speeds, authoritative credibility, and qualified B2B pipeline.",
  alternates: {
    canonical: "https://rhekglobal.com/services/web-development",
  },
  openGraph: {
    title: "Web Design & Development Services | Rate Global",
    description:
      "High-performing Next.js web design and development engineered for sub-second speeds, authoritative credibility, and qualified B2B pipeline.",
    url: "https://rhekglobal.com/services/web-development",
    siteName: "Rate Global",
    type: "website",
  },
};

const WEB_DEV_SUBNAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Our Process" },
  { id: "technologies", label: "Technologies" },
  { id: "pricing", label: "Pricing" },
  { id: "faqs", label: "FAQs" },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#525252] selection:bg-[#E9204F] selection:text-white">
      {/* 1. Global Master Navigation (Consistent across the entire site) */}
      <Navbar variant="light" />

      {/* 2. Contextual Secondary Service Navigation (Sticks below master navbar) */}
      <ServiceSubNav
        serviceName="Web Design & Development"
        serviceCategory="Service Navigation"
        items={WEB_DEV_SUBNAV_ITEMS}
        ctaLabel="Book a Meeting"
        ctaTargetId="cta"
      />

      <main>
        {/* 1. Hero section */}
        <WebDevHeroClean />

        {/* 2. Problem and solution */}
        <WebDevProblemSolution />

        {/* 3. What we offer */}
        <WebDevServicesGrid />

        {/* 4. Our process */}
        <WebDevProcessRoadmap />

        {/* 5. Why choose us & Technologies */}
        <WebDevTechStack />

        {/* 6. Pricing / Packages */}
        <WebDevPricingClean />

        {/* 7. FAQs */}
        <WebDevFaq />

        {/* 8. Final CTA — Book a Meeting */}
        <WebDevFinalCta />
      </main>

      {/* Global Agency Footer */}
      <Footer />
    </div>
  );
}
