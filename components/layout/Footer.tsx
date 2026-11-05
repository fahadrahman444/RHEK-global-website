"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { ArrowRight, CheckCircle2, Mail, ArrowUpRight } from "@/components/common/icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 mt-6 sm:mt-10">
      <div className="site-container py-5 sm:py-7 px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid: Brand/Newsletter (left) + Dense 4-column Links (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 pb-5 border-b border-white/10">
          
          {/* Brand & Compact Newsletter (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2.5">
                <Link href="/" className="inline-block">
                  <BrandLogo size={22} variant="dark" />
                </Link>
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#E9204F] bg-[#E9204F]/10 border border-[#E9204F]/20 px-2 py-0.5 rounded">
                  B2B Growth Engine
                </span>
              </div>
              <p className="text-[12px] text-[#8e8e8e] mt-2 max-w-[360px] leading-relaxed">
                {RHEK_CONFIG.company.headline}
              </p>
            </div>

            {/* Compact Newsletter */}
            <div className="max-w-[360px]">
              <span className="block text-[10px] font-semibold text-[#8e8e8e] uppercase tracking-wider mb-1.5">
                Market Intelligence Newsletter
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/15 px-3 py-1.5 text-[11.5px] text-white">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                  <span>Subscribed to RHEK briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#666]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="business@company.com"
                      required
                      className="w-full rounded-lg border border-white/15 bg-white/5 pl-8 pr-2.5 py-1.5 text-[12px] text-white placeholder:text-[#666] focus:outline-none focus:border-white transition-all min-h-[34px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-3 py-1.5 text-[11.5px] font-semibold text-white transition-colors whitespace-nowrap min-h-[34px] shrink-0"
                  >
                    <span>Join</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Grid: 4 columns, perfectly balanced 4 items each */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-[12px]">
            {/* Col 1: Commercial Services */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 font-display">
                Commercial
              </h4>
              <ul className="space-y-1.5 text-[#a3a3a3]">
                <li>
                  <Link href="/services/janitorial-lead-generation" className="hover:text-white transition-colors">
                    Janitorial Leads
                  </Link>
                </li>
                <li>
                  <Link href="/services/sales-development" className="hover:text-white transition-colors">
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media-advertising" className="hover:text-white transition-colors">
                    Paid Social Ads
                  </Link>
                </li>
                <li>
                  <Link href="/services/email-marketing" className="hover:text-white transition-colors">
                    Email Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Engineering & Creative */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 font-display">
                Digital &amp; Ops
              </h4>
              <ul className="space-y-1.5 text-[#a3a3a3]">
                <li>
                  <Link href="/services/web-design-development" className="hover:text-white transition-colors">
                    Web Dev &amp; 3D
                  </Link>
                </li>
                <li>
                  <Link href="/services/graphic-design" className="hover:text-white transition-colors">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/video-production" className="hover:text-white transition-colors">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link href="/services/virtual-assistant" className="hover:text-white transition-colors">
                    Virtual Assistant
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Solutions */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 font-display">
                Platform
              </h4>
              <ul className="space-y-1.5 text-[#a3a3a3]">
                <li>
                  <Link href="/#industries" className="hover:text-white transition-colors">
                    Target Sectors
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-white transition-colors">
                    7-Step Process
                  </Link>
                </li>
                <li>
                  <Link href="/#guarantee" className="hover:text-white transition-colors">
                    Risk-Reversal
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Company */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 font-display">
                Company
              </h4>
              <ul className="space-y-1.5 text-[#a3a3a3]">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Team &amp; Ops
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Utility Strip */}
        <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#666]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3.5">
            <span>© {new Date().getFullYear()} {RHEK_CONFIG.company.legalName}</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <Link href="/privacy-policy" className="hover:text-[#a3a3a3] transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-white/10">|</span>
            <Link href="/book-a-meeting" className="hover:text-[#a3a3a3] transition-colors inline-flex items-center gap-0.5">
              <span>Book Call</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-[#888]">Institutional Capacity: Open Q4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
