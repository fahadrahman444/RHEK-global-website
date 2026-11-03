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
  const iconClasses = "h-4 w-4 text-[#101010] group-hover:text-[#E9204F] transition-colors";
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-[620px]">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#737373] mb-2">
            Integrated Solutions
          </span>
          <h2 className="font-heading text-[30px] sm:text-[38px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
            Full-Spectrum Services Built for Scale
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-[#525252]">
            From verified commercial sales pipelines to modern web engineering and dedicated operational support.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-5 py-2.5 text-[13px] font-semibold transition-colors duration-200 min-h-[42px] shrink-0 self-start md:self-auto shadow-xs"
        >
          <span>Schedule Discovery</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 8 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {RHEK_CONFIG.services.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-6 transition-all duration-200 hover:bg-white hover:border-[#101010] hover:shadow-md"
          >
            <div>
              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] shadow-2xs">
                  {getServiceIcon(service.id)}
                </span>
                <span className="text-[12px] font-mono font-semibold text-[#A3A3A3]">
                  {service.number}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="mb-2">
                <Link
                  href={`/services#${service.id}`}
                  className="block text-[16px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors leading-snug"
                >
                  <h3>{service.title}</h3>
                </Link>
                {service.badge && (
                  <span className="inline-block mt-1 rounded bg-[#EBEBEB] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#525252]">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[13.5px] leading-relaxed text-[#525252] mb-5">
                {service.shortDesc}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-1.5 border-t border-[#EBEBEB] pt-3.5 mb-5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[12.5px] text-[#525252] leading-snug">
                    <Check className="h-3.5 w-3.5 text-[#101010] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Card Action */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-between pt-3.5 border-t border-[#EBEBEB] text-[12.5px] font-semibold text-[#101010] group-hover:text-[#E9204F] transition-colors min-h-[38px]"
            >
              <span>{service.ctaLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
