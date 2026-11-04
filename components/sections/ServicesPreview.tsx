"use client";

import Link from "next/link";
import {
  Sparkles,
  PhoneCall,
  Megaphone,
  Code2,
  Palette,
  Video,
  Mail,
  Headphones,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { RHEK_CONFIG, ServiceItem } from "@/data/rhek-config";

// Map service id to specific icon
function getServiceIcon(id: string) {
  const iconClasses = "h-4 w-4 text-[#101010] group-hover:text-white transition-colors duration-300";
  switch (id) {
    case "janitorial-leads":
      return <Sparkles className={iconClasses} />;
    case "sales-development":
      return <PhoneCall className={iconClasses} />;
    case "social-media-ads":
      return <Megaphone className={iconClasses} />;
    case "web-development":
      return <Code2 className={iconClasses} />;
    case "graphic-design":
      return <Palette className={iconClasses} />;
    case "video-production":
      return <Video className={iconClasses} />;
    case "email-marketing":
      return <Mail className={iconClasses} />;
    case "virtual-assistant":
      return <Headphones className={iconClasses} />;
    default:
      return <Sparkles className={iconClasses} />;
  }
}

export function ServicesPreview() {
  return (
    <section id="services" className="site-container scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="max-w-[620px]">
          <span className="inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
            Integrated Solutions
          </span>
          <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
            Full-Spectrum Services Built for Scale
          </h2>
          <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#525252]">
            From verified commercial sales pipelines to modern web engineering and dedicated operational support.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 min-h-[38px] shrink-0 self-start md:self-auto shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Schedule Discovery</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex items-center justify-between text-[10.5px] text-[#737373] mb-2 px-0.5">
        <span>Swipe to explore 8 specialized solutions</span>
        <span className="font-semibold text-[#101010]">8 Services →</span>
      </div>

      {/* 8 Services: Mobile Horizontal Snap Carousel & Desktop 4-Column Grid */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 scrollbar-none -mx-1 px-1 sm:mx-0 sm:px-0">
        {RHEK_CONFIG.services.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="min-w-[82%] sm:min-w-[340px] md:min-w-0 snap-center shrink-0 md:shrink group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3.5 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:border-[#101010] hover:shadow-xl hover:shadow-black/5"
          >
            <div>
              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] shadow-2xs group-hover:bg-[#101010] group-hover:border-[#101010] transition-colors duration-300">
                  {getServiceIcon(service.id)}
                </span>
                <span className="text-[11px] sm:text-[12px] font-mono font-semibold text-[#A3A3A3] group-hover:text-[#101010] transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="mb-1.5 sm:mb-2">
                <Link
                  href={`/services#${service.id}`}
                  className="block text-[14.5px] sm:text-[16px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors leading-snug"
                >
                  <h3>{service.title}</h3>
                </Link>
                {service.badge && (
                  <span className="inline-block mt-1 rounded bg-[#EBEBEB] px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#525252]">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[12px] sm:text-[13.5px] leading-relaxed text-[#525252] mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">
                {service.shortDesc}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-1 sm:space-y-1.5 border-t border-[#EBEBEB] pt-2.5 sm:pt-3.5 mb-3 sm:mb-5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[11.5px] sm:text-[12.5px] text-[#525252] leading-snug">
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#101010] shrink-0 mt-0.5 group-hover:text-[#E9204F] transition-colors" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Card Action */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-between pt-2.5 sm:pt-3.5 border-t border-[#EBEBEB] text-[11.5px] sm:text-[12.5px] font-semibold text-[#101010] group-hover:text-[#E9204F] transition-colors min-h-[36px] sm:min-h-[38px]"
            >
              <span>{service.ctaLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
