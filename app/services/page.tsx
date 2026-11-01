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
  Calendar,
} from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export const metadata: Metadata = {
  title: "Services & Capabilities — RHEK GLOBAL",
  description:
    "Explore RHEK GLOBAL's 8 core services: Janitorial Lead Generation, Sales Appointment Setting, Paid Social Ads, 3D Web Development, Graphic Design, Video Production, Email Marketing, and Virtual Admin Support.",
};

function getServiceIcon(id: string) {
  const cls = "h-6 w-6 text-[#E9204F]";
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
              currentLabel="Services"
              badge="Integrated Solutions"
              icon={Sparkles}
              title="8 Core Solutions Built for Business Acceleration."
              description="From guaranteed commercial janitorial leads and high-velocity SDR outbound to premium 3D web applications and global outsourcing."
            />
          </div>
        </div>
      </div>

      {/* 2. Detailed Service Offerings */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-xs border border-[#F3F3F3] overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-[1080px] space-y-16">
            {RHEK_CONFIG.services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-14 first:pt-0 ${
                  idx !== 0 ? "border-t border-[#F3F3F3]" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAFAFA] border border-[#F3F3F3] mb-4 shadow-2xs">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-[12px] font-extrabold uppercase tracking-wider text-[#747474]">
                      Service {service.number}
                    </span>
                    {service.badge && (
                      <span className="rounded-full bg-[#FAFAFA] border border-[#F3F3F3] px-2.5 py-0.5 text-[11px] font-bold font-display text-[#E9204F]">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101010] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[16px] text-[#747474] font-sans leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#F3F3F3] flex flex-wrap items-center gap-3">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#E9204F] hover:bg-[#101010] px-6 py-2.5 text-[13px] font-bold font-display uppercase tracking-wider text-white transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] shadow-xs min-h-[44px]"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#F3F3F3] rounded-2xl p-6 sm:p-8">
                  <div className="text-[12px] font-extrabold font-display uppercase tracking-wider text-[#E9204F] mb-4">
                    Key Features & Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0 mt-0.5" />
                        <span className="text-[14px] text-[#101010] font-sans font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {service.id === "janitorial-leads" && (
                    <div className="mt-6 pt-4 border-t border-[#F3F3F3] flex items-center justify-between text-[13px] text-[#101010] bg-white p-3.5 rounded-xl border border-[#F3F3F3]">
                      <span className="font-sans">
                        Exclusive appointments with confirmed facility managers.
                      </span>
                      <span className="font-bold font-display uppercase tracking-wider bg-[#E9204F] text-white px-2.5 py-0.5 rounded-md text-[11px]">
                        Verified
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 100% Money-Back Guarantee Strip */}
          <div className="mt-16 rounded-2xl bg-[#101010] border border-white/10 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-[#E9204F] text-[12px] font-extrabold font-display uppercase tracking-wider px-3.5 py-1 mb-3">
                <ShieldCheck className="h-4 w-4 text-[#E9204F]" />
                <span>Zero Risk Guarantee</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                100% Money-Back Guarantee on Eligible Services
              </h3>
              <p className="text-[15px] text-[#ACACAC] font-sans mt-2 leading-relaxed">
                {RHEK_CONFIG.moneyBackGuarantee.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E9204F] hover:bg-white hover:text-[#101010] px-7 py-3 text-[13px] font-bold font-display uppercase tracking-wider text-white whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] shadow-md min-h-[44px]"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowRight className="h-4 w-4" />
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
