import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Mail, Clock, ShieldCheck, MessageSquare, Calendar } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export const metadata: Metadata = {
  title: "Contact & Book a Meeting — RHEK GLOBAL",
  description:
    "Get in touch with RHEK GLOBAL. Book a discovery meeting, request a janitorial lead quote, or discuss custom web development and digital outsourcing.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-4 sm:py-8 space-y-12 sm:space-y-16">
      {/* 1. Hero Island — Floating Elevated Canvas */}
      <div className="site-container">
        <div className="hero-canvas relative overflow-hidden rounded-[32px] bg-white pt-6 pb-10 sm:pb-12 shadow-xs border border-[#F3F3F3] px-6 lg:px-10">
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="Contact"
              badge="Client Inquiry & Booking"
              icon={MessageSquare}
              title="Start a conversation with RHEK GLOBAL."
              description="Whether you need exclusive janitorial leads, B2B sales appointment setting, custom 3D web applications, or administrative outsourcing, we're ready to partner with you."
            />
          </div>
        </div>
      </div>

      {/* 2. Direct Booking Action Strip */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-xs border border-[#F3F3F3] overflow-hidden">
          <div className="border-b border-[#F3F3F3] bg-[#FAFAFA] py-6 px-6 lg:px-10">
            <div className="mx-auto max-w-[1080px] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#F3F3F3] text-[#E9204F] shadow-2xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#747474] font-display">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${RHEK_CONFIG.company.contactEmail}`}
                    className="text-[15px] font-bold text-[#101010] hover:text-[#E9204F] transition-colors duration-700 font-sans"
                  >
                    {RHEK_CONFIG.company.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#F3F3F3] text-[#E9204F] shadow-2xs">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#747474] font-display">
                    Meeting Booking
                  </div>
                  <a
                    href="#contact"
                    className="text-[15px] font-bold text-[#E9204F] hover:underline font-sans"
                  >
                    Direct Consultation Form &darr;
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#F3F3F3] text-[#E9204F] shadow-2xs">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#747474] font-display">
                    Client Guarantee
                  </div>
                  <div className="text-[15px] font-bold text-[#101010] font-sans">
                    100% Money-Back Policy
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
