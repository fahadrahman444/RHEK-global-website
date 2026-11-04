"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { ContactQrCode } from "../common/ContactQrCode";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#0d0d0d] text-white border-t border-white/10 mt-8 sm:mt-14">
      <div className="site-container py-5 sm:py-8 px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Strip (Compact) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
                Stay Connected
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] text-[#A3A3A3]">RHEK Market Intelligence</span>
            </div>
            <p className="text-[13px] text-white font-medium mt-0.5">
              Actionable insights on commercial lead gen, B2B sales automation &amp; web engineering.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[340px]">
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-[12px] font-medium text-white">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                <span>Subscribed! Check your inbox shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-1.5 w-full">
                <div className="relative flex-1">
                  <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#A3A3A3]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Business email"
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 pl-8 pr-2.5 py-1.5 text-[12px] text-white placeholder:text-[#737373] focus:outline-none focus:border-white transition-all min-h-[36px]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors duration-200 whitespace-nowrap min-h-[36px] shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5 border-b border-white/10 text-[12px]">
          {/* Brand Info & QR */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-2">
              <BrandLogo size={24} variant="dark" />
            </Link>
            <p className="text-[12px] text-[#A3A3A3] max-w-[320px] leading-relaxed">
              {RHEK_CONFIG.company.headline}
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] font-semibold text-white bg-white/10 rounded-md px-2 py-0.5 w-fit border border-white/10">
              <ShieldCheck className="h-3 w-3 text-[#E9204F]" />
              <span>100% Money-Back Guarantee Policy</span>
            </div>

            {/* Desktop-only Compact QR */}
            <div className="hidden lg:block mt-3">
              <ContactQrCode
                size={70}
                label="Direct Booking"
                sublabel="+1 (646) 694-8464"
                className="w-fit bg-white/5 border-white/10 text-white p-2.5"
              />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-white font-display mb-2">
              Services
            </h4>
            <ul className="space-y-1 text-[#A3A3A3]">
              <li>
                <Link href="/services/janitorial-lead-generation" className="hover:text-white transition-colors">Janitorial Leads</Link>
              </li>
              <li>
                <Link href="/services/sales-development" className="hover:text-white transition-colors">Sales Development</Link>
              </li>
              <li>
                <Link href="/services/social-media-advertising" className="hover:text-white transition-colors">Social Ads</Link>
              </li>
              <li>
                <Link href="/services/web-design-development" className="hover:text-white transition-colors">Web Dev &amp; 3D</Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="hover:text-white transition-colors">Graphic Design</Link>
              </li>
              <li>
                <Link href="/services/video-production" className="hover:text-white transition-colors">Video Editing</Link>
              </li>
              <li>
                <Link href="/services/email-marketing" className="hover:text-white transition-colors">Email Marketing</Link>
              </li>
              <li>
                <Link href="/services/virtual-assistant" className="hover:text-white transition-colors">Virtual Assistant</Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-white font-display mb-2">
              Solutions
            </h4>
            <ul className="space-y-1 text-[#A3A3A3]">
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">7-Step Process</Link>
              </li>
              <li>
                <Link href="/#guarantee" className="hover:text-white transition-colors">Guarantee</Link>
              </li>
              <li>
                <Link href="/book-a-meeting" className="hover:text-white transition-colors">Book a Meeting</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-white font-display mb-2">
              Company
            </h4>
            <ul className="space-y-1 text-[#A3A3A3]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">Leadership &amp; Team</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Inquiries</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#737373]">
          <p>© {new Date().getFullYear()} {RHEK_CONFIG.company.legalName}. All rights reserved.</p>
          <p>{RHEK_CONFIG.company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
