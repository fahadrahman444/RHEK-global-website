import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — RHEK GLOBAL",
  description:
    "Learn about how RHEK GLOBAL collects, uses, and safeguards information collected through our website and inquiry channels.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 28, 2026";

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
              currentLabel="Privacy Policy"
              badge="Legal & Data Protection"
              icon={Lock}
              title="Privacy Policy & Data Safeguards"
              description={`Effective Date: ${lastUpdated}. We adhere to strict data minimization, TLS 1.3 encryption, and GDPR/CCPA consumer protections.`}
            />
          </div>
        </div>
      </div>

      {/* 2. Privacy Policy Document Island */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-xs border border-[#F3F3F3] overflow-hidden">
          {/* Content Body */}
          <div className="py-12 lg:py-16 px-6 lg:px-10 bg-white">
          <div className="mx-auto max-w-[780px] prose prose-slate text-[16px] leading-relaxed text-[#747474] font-sans space-y-8">
            <section>
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                1. Overview and Scope
              </h2>
              <p>
                RHEK GLOBAL (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal data and respecting your privacy. This Privacy Policy details our practices concerning data collection, usage, and safeguarding when you interact with our website (<span className="text-[#101010] font-bold">rhekglobal.com</span>) or submit project inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                2. Information We Collect
              </h2>
              <p>
                We only collect information that you knowingly and voluntarily provide to us when communicating or requesting service estimates:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li><strong className="text-[#101010] font-bold">Contact Details:</strong> Your full name and business email address.</li>
                <li><strong className="text-[#101010] font-bold">Project Details:</strong> Requested service categories, estimated budget ranges, and project descriptions submitted via our contact forms.</li>
                <li><strong className="text-[#101010] font-bold">Technical Logs:</strong> Standard web server telemetry (IP address, browser type, referral URLs, access timestamps) used strictly for security monitoring and fraud prevention.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                3. Purpose of Data Processing
              </h2>
              <p>We process your information solely to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Evaluate project requirements and deliver technical proposals.</li>
                <li>Communicate directly regarding inquiries and schedule discovery sessions.</li>
                <li>Maintain the security, integrity, and performance of our web infrastructure.</li>
                <li>Comply with legal obligations and protect intellectual property rights.</li>
              </ul>
              <p className="mt-2 font-bold font-display text-[#101010]">
                We do not sell, rent, monetize, or trade your personal data to third parties under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                4. Data Security and Retention
              </h2>
              <p>
                All data transmission between your browser and our servers is secured using modern TLS 1.3 encryption. We retain inquiry information only for as long as necessary to fulfill project evaluation or comply with legal record-keeping obligations.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                5. Cookies and Tracking
              </h2>
              <p>
                Our website utilizes minimal functional cookies required for core navigation, CSRF protection, and anonymous aggregate performance diagnostics. We do not employ third-party surveillance ad trackers.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                6. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction (including GDPR and CCPA protections), you retain the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Request access to copies of your personal data.</li>
                <li>Request correction of inaccurate or incomplete records.</li>
                <li>Request complete erasure (&quot;right to be forgotten&quot;) of your information.</li>
                <li>Object to or restrict specific processing operations.</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-[#F3F3F3]">
              <h2 className="text-[22px] font-extrabold font-display text-[#101010] mb-3">
                7. Contact Our Privacy Team
              </h2>
              <p>
                If you have questions, privacy requests, or wish to exercise your rights, please reach out to us at:
              </p>
              <div className="mt-3 p-5 rounded-2xl bg-[#FAFAFA] border border-[#F3F3F3] text-[15px]">
                <div className="font-extrabold font-display text-[#101010]">RHEK GLOBAL Privacy Operations</div>
                <div className="text-[#747474] font-sans mt-1">Email: <a href="mailto:privacy@rhekglobal.com" className="text-[#E9204F] hover:underline font-bold">privacy@rhekglobal.com</a></div>
              </div>
            </section>

            <div className="pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[14px] font-bold font-display uppercase tracking-wider text-[#101010] hover:text-[#E9204F] transition-colors duration-700 min-h-[44px]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Consistent Company Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
