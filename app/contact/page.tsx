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
    <main className="min-h-screen py-4 sm:py-6 space-y-10 sm:space-y-12 lg:space-y-14">
      {/* 1. Hero Canvas */}
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="Contact"
              badge="Direct Consultation & Scoping"
              icon={MessageSquare}
              title="Start a conversation with RHEK GLOBAL."
              description="Whether you need exclusive janitorial leads, B2B sales appointment setting, custom web engineering, or administrative outsourcing, we're ready to partner with you."
            />
          </div>
        </div>
      </div>

      {/* 2. Direct Channels & Form */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden">
          <div className="border-b border-[#EBEBEB] bg-[#FAFAFA] py-5 px-6 lg:px-10">
            <div className="mx-auto max-w-[1080px] grid grid-cols-1 sm:grid-cols-3 gap-5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Direct Channel
                  </div>
                  <a
                    href={`mailto:${RHEK_CONFIG.company.contactEmail}`}
                    className="text-[14px] font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
                  >
                    {RHEK_CONFIG.company.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010]">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Booking
                  </div>
                  <a
                    href="#contact"
                    className="text-[14px] font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
                  >
                    Direct Scoping Form &darr;
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Client Guarantee
                  </div>
                  <div className="text-[14px] font-semibold text-[#101010]">
                    100% Satisfaction SLA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Contact Form */}
          <ContactSection embedded={true} />

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>

      {/* Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
