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
  const iconClasses = "h-5 w-5 transition-colors duration-700 group-hover:text-white";
  switch (id) {
    case "janitorial-leads":
      return <Sparkles className={`${iconClasses} text-[#E9204F]`} />;
    case "sales-development":
      return <PhoneCall className={`${iconClasses} text-[#101010]`} />;
    case "social-media-ads":
      return <Megaphone className={`${iconClasses} text-[#E9204F]`} />;
    case "web-development":
      return <Code2 className={`${iconClasses} text-[#101010]`} />;
    case "graphic-design":
      return <Palette className={`${iconClasses} text-[#E9204F]`} />;
    case "video-production":
      return <Video className={`${iconClasses} text-[#101010]`} />;
    case "email-marketing":
      return <Mail className={`${iconClasses} text-[#E9204F]`} />;
    case "virtual-assistant":
      return <Headphones className={`${iconClasses} text-[#101010]`} />;
    default:
      return <Sparkles className={`${iconClasses} text-[#E9204F]`} />;
  }
}

export function ServicesPreview() {
  return (
    <section id="services" className="site-container scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-[620px]">
          <div className="w-10 h-0.5 bg-[#E9204F] mb-3" />
          <span className="inline-block text-[12px] font-extrabold uppercase tracking-widest text-[#E9204F] mb-1 font-display">
            Integrated Solutions
          </span>
          <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold text-[#101010] tracking-[-0.04em] leading-[1.15]">
            Full-Spectrum Services Built for{" "}
            <span className="text-[#E9204F]">
              Growth &amp; Scale
            </span>
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-[#747474] font-sans">
            From high-conversion sales pipelines to cutting-edge 3D web platforms and operational outsourcing, we supply the dedicated talent and technology to accelerate your business.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#101010] bg-[#101010] hover:bg-[#E9204F] hover:border-[#E9204F] text-white px-6 py-3 text-[13px] font-bold font-display uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] shrink-0 self-start md:self-auto shadow-sm"
        >
          <span>Schedule Service Discovery</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 8 Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {RHEK_CONFIG.services.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="group flex flex-col justify-between rounded-2xl bg-[#F3F3F3] p-7 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:bg-[#E9204F] hover:shadow-2xl"
          >
            <div>
              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white group-hover:bg-white/20 transition-all duration-700">
                  {getServiceIcon(service.id)}
                </span>
                <span className="font-display text-[13px] font-extrabold text-[#101010] group-hover:text-white transition-colors duration-700">
                  {service.number}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="mb-3">
                <Link
                  href={`/services#${service.id}`}
                  className="block text-[19px] font-extrabold font-display text-[#101010] leading-snug group-hover:text-white transition-colors duration-700"
                >
                  <h3>{service.title}</h3>
                </Link>
                {service.badge && (
                  <span className="inline-block mt-1.5 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold font-display text-[#101010] group-hover:bg-white/20 group-hover:text-white transition-all duration-700">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-[#747474] font-sans group-hover:text-white/90 transition-colors duration-700 mb-6">
                {service.shortDesc}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2 border-t border-[#101010]/10 group-hover:border-white/20 pt-4 mb-6 transition-colors duration-700">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[13px] text-[#101010] group-hover:text-white leading-snug font-sans transition-colors duration-700">
                    <Check className="h-4 w-4 text-[#E9204F] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-700" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Card Action */}
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-between pt-4 border-t border-[#101010]/10 group-hover:border-white/20 text-[13px] font-bold font-display uppercase tracking-wider text-[#101010] group-hover:text-white transition-colors duration-700 min-h-[44px]"
            >
              <span>{service.ctaLabel}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
