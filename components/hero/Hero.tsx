import Image from "next/image";
import Link from "next/link";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function Hero() {
  return (
    <section className="relative pt-8 pb-12 lg:pt-14 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column (Exact Red Sparrow Digital Hero Typography & Layout) */}
        <div className="lg:col-span-6">
          {/* Subtitle */}
          <h2 className="font-display text-[16px] sm:text-[18px] font-extrabold uppercase tracking-wide text-[#101010]">
            <span className="text-[#E9204F]">RHEK</span> GLOBAL AGENCY
          </h2>

          {/* Signature Red Accent Line */}
          <div className="w-14 h-[3.5px] bg-[#E9204F] mt-2 mb-6" />

          {/* Main Headline */}
          <h1 className="font-display text-[38px] sm:text-[48px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#101010]">
            We&apos;re the best digital marketing, leads &amp; web agency.
          </h1>

          {/* Paragraph */}
          <p className="mt-5 text-[17px] leading-[1.7] text-[#747474] font-sans max-w-[520px]">
            {RHEK_CONFIG.company.subheadline}
          </p>

          {/* Action Button (Exact Red Sparrow Button Style: Red Border Box) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border-2 border-[#E9204F] bg-white hover:bg-[#E9204F] hover:text-white px-8 py-3 text-[14px] font-extrabold font-display text-[#101010] uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[46px] shadow-xs"
            >
              <span>Make An Enquiry</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-[#101010] bg-transparent hover:border-[#E9204F] hover:text-[#E9204F] px-8 py-3 text-[14px] font-extrabold font-display text-[#101010] uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[46px]"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Exact Graphical Visual (Website Design, Social Media, Email, SEO, Content) */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[640px]">
            <Image
              src="/images/digital-marketing-banner.webp"
              alt="Website Design, Content Marketing, Social Media, Email Marketing, and SEO"
              width={1472}
              height={627}
              priority
              className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
