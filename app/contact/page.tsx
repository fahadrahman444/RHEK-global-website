import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Mail, ShieldCheck, MessageSquare, Calendar } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export const metadata: Metadata = {
  title: "Contact & Book a Meeting — RHEK GLOBAL",
  description:
    "Get in touch with RHEK GLOBAL. Book a discovery meeting, request a janitorial lead quote, or discuss custom web development and digital outsourcing.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Subpage Header */}
      <div className="site-container pt-4 sm:pt-6">
        <SubpageHeader
          currentLabel="Contact"
          badge="Direct Consultation & Scoping"
          icon={MessageSquare}
          title="Start a conversation with RHEK GLOBAL."
          description="Whether you need exclusive janitorial leads, B2B sales appointment setting, custom web engineering, or administrative outsourcing, we're ready to partner with you."
        />
      </div>

      {/* 3. Direct Contact Channels Strip */}
      <div className="site-container pt-6 sm:pt-8">
        <div className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] shadow-2xs">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#737373]">
                Direct Channel
              </div>
              <a
                href={`mailto:${RHEK_CONFIG.company.contactEmail}`}
                className="text-[13.5px] sm:text-[14px] font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
              >
                {RHEK_CONFIG.company.contactEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] shadow-2xs">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#737373]">
                Booking
              </div>
              <a
                href="#contact"
                className="text-[13.5px] sm:text-[14px] font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
              >
                Direct Scoping Form &darr;
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] shadow-2xs">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#737373]">
                Client Guarantee
              </div>
              <div className="text-[13.5px] sm:text-[14px] font-semibold text-[#101010]">
                100% Satisfaction SLA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Embedded Contact Form */}
      <div className="site-container py-6 sm:py-10">
        <ContactSection embedded={true} />
      </div>

      {/* 5. FAQ Section */}
      <div className="site-container pb-12 sm:pb-16">
        <FAQSection />
      </div>

      {/* 6. Global Footer */}
      <Footer />
    </main>
  );
}
