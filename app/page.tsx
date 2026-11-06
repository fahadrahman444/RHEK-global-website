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
    <main className="min-h-screen bg-white">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Full-Bleed Panoramic Hero & Partner Trust Logos */}
      <Hero />
      <div className="site-container">
        <PartnerLogos />
      </div>

      <div className="space-y-7 sm:space-y-11 mt-5 sm:mt-8">
        {/* 3. Janitorial Lead Generation Spotlight & Verified Live Samples */}
        <JanitorialLeadsSection />

        {/* 4. Core 8-Service Catalog Bento */}
        <ServicesPreview />

        {/* 5. 7-Step Smarter Work Process & 4 Execution Principles */}
        <ProcessSection />

        {/* 6. 10 Industries We Service */}
        <IndustriesSection />

        {/* 7. 100% Money-Back Guarantee Trust Section */}
        <GuaranteeSection />

        {/* 8. Why Choose RHEK GLOBAL, Mission & Vision */}
        <WhyChooseUsSection />

        {/* 9. Lead Inquiry & Direct Scoping Form */}
        <ContactSection />
      </div>

      {/* 10. Comprehensive Company Footer */}
      <Footer />
    </main>
  );
}
