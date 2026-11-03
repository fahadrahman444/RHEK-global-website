import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import {
  Sparkles,
  PhoneCall,
  Megaphone,
  Code2,
  Palette,
  Video,
  Mail,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export const metadata: Metadata = {
  title: "Services & Capabilities — RHEK GLOBAL",
  description:
    "Explore RHEK GLOBAL's 8 core services: Janitorial Lead Generation, Sales Appointment Setting, Paid Social Ads, 3D Web Development, Graphic Design, Video Production, Email Marketing, and Virtual Admin Support.",
};

function getServiceIcon(id: string) {
  const cls = "h-5 w-5 text-[#101010]";
  switch (id) {
    case "janitorial-leads":
      return <Sparkles className={cls} />;
    case "sales-development":
      return <PhoneCall className={cls} />;
    case "social-media-ads":
      return <Megaphone className={cls} />;
    case "web-development":
      return <Code2 className={cls} />;
    case "graphic-design":
      return <Palette className={cls} />;
    case "video-production":
      return <Video className={cls} />;
    case "email-marketing":
      return <Mail className={cls} />;
    case "virtual-assistant":
      return <Headphones className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-4 sm:py-6 space-y-10 sm:space-y-12 lg:space-y-14">
      {/* 1. Hero Canvas */}
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            <SubpageHeader
              currentLabel="Services"
              badge="Integrated Solutions"
              icon={Sparkles}
              title="8 Core Solutions Built for Business Acceleration."
              description="From guaranteed commercial janitorial leads and high-velocity SDR outbound to modern web engineering and global outsourcing."
            />
          </div>
        </div>
      </div>

      {/* 2. Detailed Service Offerings */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-[1080px] space-y-12">
            {RHEK_CONFIG.services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-12 first:pt-0 ${
                  idx !== 0 ? "border-t border-[#EBEBEB]" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] mb-3.5">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[11px] font-semibold text-[#737373]">
                      Service {service.number}
                    </span>
                    {service.badge && (
                      <span className="rounded bg-[#FAFAFA] border border-[#EBEBEB] px-2 py-0.5 text-[10.5px] font-semibold text-[#101010]">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#101010] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] text-[#525252] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#EBEBEB] flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-4 py-2 text-[12.5px] font-semibold text-white transition-colors min-h-[40px]"
                    >
                      <span>Explore Detail</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-4 py-2 text-[12.5px] font-semibold text-[#101010] transition-colors min-h-[40px]"
                    >
                      <span>{service.ctaLabel}</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-3.5">
                    Key Features &amp; Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span className="text-[13px] text-[#101010] font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {service.id === "janitorial-leads" && (
                    <div className="mt-5 pt-3.5 border-t border-[#EBEBEB] flex items-center justify-between text-[12.5px] text-[#525252] bg-white p-3 rounded-lg border border-[#EBEBEB]">
                      <span>
                        Exclusive appointments with confirmed facility managers.
                      </span>
                      <span className="font-semibold uppercase tracking-wider bg-[#FAFAFA] text-[#101010] border border-[#EBEBEB] px-2 py-0.5 rounded text-[10.5px]">
                        Verified
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 100% Money-Back Guarantee Strip */}
          <div className="mt-12 rounded-xl bg-[#101010] border border-white/10 p-7 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 rounded bg-white/10 border border-white/15 text-[#E9204F] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 mb-2.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
                <span>Zero Risk Guarantee</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                100% Money-Back Guarantee on Eligible Services
              </h3>
              <p className="text-[13.5px] text-[#A3A3A3] mt-1 leading-relaxed">
                {RHEK_CONFIG.moneyBackGuarantee.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-5 py-2.5 text-[13px] font-semibold text-white whitespace-nowrap transition-colors min-h-[42px] shrink-0"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
