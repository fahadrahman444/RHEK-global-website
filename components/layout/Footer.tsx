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
    <footer className="bg-[#101010] text-white rounded-xl border border-white/10 shadow-2xl py-7 px-5 sm:px-8 lg:px-10">
      {/* Top Newsletter & Callout Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 border-b border-white/10 items-center">
        <div className="lg:col-span-7">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
            Stay Connected
          </span>
          <h3 className="text-[20px] sm:text-[22px] font-extrabold font-display text-white mt-0.5">
            Subscribe to RHEK Market Intelligence
          </h3>
          <p className="text-[13.5px] text-[#ACACAC] mt-1 max-w-[520px] font-sans leading-relaxed">
            Actionable insights on commercial lead generation, B2B sales automation, and high-performance digital systems.
          </p>
        </div>

        <div className="lg:col-span-5 flex items-center">
          {subscribed ? (
            <div className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 p-3 text-[13px] font-medium text-white w-full">
              <CheckCircle2 className="h-4.5 w-4.5 text-[#16A34A] shrink-0" />
              <span>Thank you! You are now subscribed to RHEK Global market insights.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#A3A3A3]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/5 pl-9 pr-3 py-2 text-[13px] text-white placeholder:text-[#A3A3A3] focus:outline-none focus:border-white transition-all min-h-[38px]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-200 whitespace-nowrap min-h-[38px]"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-7 border-b border-white/10">
        <div className="col-span-2">
          <Link href="/" className="inline-block mb-3">
            <BrandLogo size={32} variant="dark" />
          </Link>
          <p className="text-[13px] text-[#ACACAC] max-w-[340px] leading-relaxed font-sans">
            {RHEK_CONFIG.company.headline}
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-white bg-white/10 rounded-md px-2.5 py-1 w-fit border border-white/15">
            <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>100% Money-Back Guarantee Policy</span>
          </div>

          <div className="mt-4">
            <ContactQrCode
              size={90}
              label="Direct Booking & Inquiry"
              sublabel="+1 (646) 694-8464"
              className="w-fit bg-white/5 border-white/15 text-white"
            />
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-white font-display mb-2.5">
            Services
          </h4>
          <ul className="space-y-1.5 text-[13px] text-[#ACACAC] font-sans">
            <li>
              <Link href="/services/janitorial-leads" className="hover:text-[#E9204F] transition-colors duration-700">Janitorial Leads</Link>
            </li>
            <li>
              <Link href="/services/sales-development" className="hover:text-[#E9204F] transition-colors duration-700">Sales Development</Link>
            </li>
            <li>
              <Link href="/services/social-media-ads" className="hover:text-[#E9204F] transition-colors duration-700">Social Media Ads</Link>
            </li>
            <li>
              <Link href="/services/web-development" className="hover:text-[#E9204F] transition-colors duration-700">Web Design & Dev</Link>
            </li>
            <li>
              <Link href="/services/graphic-design" className="hover:text-[#E9204F] transition-colors duration-700">Graphic Design</Link>
            </li>
            <li>
              <Link href="/services/video-production" className="hover:text-[#E9204F] transition-colors duration-700">Video Editing</Link>
            </li>
            <li>
              <Link href="/services/email-marketing" className="hover:text-[#E9204F] transition-colors duration-700">Email Marketing</Link>
            </li>
            <li>
              <Link href="/services/virtual-assistant" className="hover:text-[#E9204F] transition-colors duration-700">Virtual Assistant</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-white font-display mb-2.5">
            Solutions
          </h4>
          <ul className="space-y-1.5 text-[13px] text-[#ACACAC] font-sans">
            <li>
              <Link href="/#industries" className="hover:text-[#E9204F] transition-colors duration-700">Industries We Service</Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-[#E9204F] transition-colors duration-700">7-Step Work Process</Link>
            </li>
            <li>
              <Link href="/#guarantee" className="hover:text-[#E9204F] transition-colors duration-700">Money-Back Guarantee</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E9204F] transition-colors duration-700">Book a Meeting</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-white font-display mb-2.5">
            Company
          </h4>
          <ul className="space-y-1.5 text-[13px] text-[#ACACAC] font-sans">
            <li>
              <Link href="/about" className="hover:text-[#E9204F] transition-colors duration-700">About Us</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#E9204F] transition-colors duration-700">Team</Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-[#E9204F] transition-colors duration-700">Careers</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E9204F] transition-colors duration-700">Contact & Inquiry</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#E9204F] transition-colors duration-700">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#ACACAC] font-sans">
        <p>© {new Date().getFullYear()} {RHEK_CONFIG.company.legalName}. All rights reserved.</p>
        <p>{RHEK_CONFIG.company.tagline}</p>
      </div>
    </footer>
  );
}
