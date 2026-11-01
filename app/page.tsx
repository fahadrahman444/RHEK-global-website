import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { JanitorialLeadsSection } from "@/components/sections/JanitorialLeadsSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white space-y-16 sm:space-y-24">
      {/* 1. Hero Wrapper (#FAFAFA) */}
      <div className="site-container pt-4">
        <div className="bg-[#FAFAFA] border border-[#F3F3F3] rounded-[32px] px-6 sm:px-10 lg:px-12 pt-3 pb-12 shadow-xs">
          <Navbar />
          <Hero />
          <PartnerLogos />
        </div>
      </div>

      {/* 2. Janitorial Lead Generation Spotlight & Verified Live Samples */}
      <JanitorialLeadsSection />

      {/* 3. Core 8-Service Catalog Bento */}
      <ServicesPreview />

      {/* 4. 7-Step Smarter Work Process & 4 Execution Principles */}
      <ProcessSection />

      {/* 5. 10 Industries We Service */}
      <IndustriesSection />

      {/* 6. 100% Money-Back Guarantee Trust Section */}
      <GuaranteeSection />

      {/* 7. Why Choose RHEK GLOBAL, Mission & Vision */}
      <WhyChooseUsSection />

      {/* 8. Lead Inquiry & Direct Scoping Form */}
      <ContactSection />

      {/* 9. Comprehensive Company Footer */}
      <div className="site-container pb-8">
        <Footer />
      </div>
    </main>
  );
}
