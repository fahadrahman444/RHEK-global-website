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
} from "@/components/common/icons";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { SpotlightCard } from "@/components/common/SpotlightCard";

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

const SERVICE_CANONICAL_SLUGS: Record<string, string> = {
  "janitorial-leads": "janitorial-lead-generation",
  "sales-development": "sales-development",
  "social-media-ads": "social-media-advertising",
  "web-development": "web-design-development",
  "graphic-design": "graphic-design",
  "video-production": "video-production",
  "email-marketing": "email-marketing",
  "virtual-assistant": "virtual-assistant",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Subpage Header */}
      <div className="site-container pt-4 sm:pt-6">
        <SubpageHeader
          currentLabel="Services"
          badge="Integrated Solutions"
          icon={Sparkles}
          title="8 Core Solutions Built for Business Acceleration."
          description="From guaranteed commercial janitorial leads and high-velocity SDR outbound to modern web engineering and global outsourcing."
        />
      </div>

      {/* 3. Detailed Service Offerings Flow */}
      <div className="site-container py-8 sm:py-12 space-y-10 sm:space-y-12">
        <div className="space-y-8 sm:space-y-12">
          {RHEK_CONFIG.services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-8 first:pt-0 ${
                idx !== 0 ? "border-t border-[#EBEBEB]" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] mb-2.5">
                  {getServiceIcon(service.id)}
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[10.5px] font-semibold text-[#737373]">
                    Service {service.number}
                  </span>
                  {service.badge && (
                    <span className="rounded bg-[#FAFAFA] border border-[#EBEBEB] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#101010]">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#101010]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] text-[#525252] leading-relaxed">
                  {service.subheadline || service.shortDesc}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/services/${SERVICE_CANONICAL_SLUGS[service.id] || service.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-200 min-h-[38px] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
                  >
                    <span>Deep-Dive Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] hover:bg-[#FAFAFA] text-[#101010] px-4 py-2 text-[12.5px] font-semibold transition-all duration-200 min-h-[38px] hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Inquire Now</span>
                  </Link>
                </div>
              </div>

              {/* Service Features & Execution Bento */}
              <SpotlightCard
                mode="light"
                className="lg:col-span-7 rounded-xl p-4 sm:p-6 hover:border-[#101010]"
                contentClassName="relative z-10"
              >
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#737373] mb-3 block">
                  Core Capabilities &amp; Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 rounded-lg bg-white border border-[#EBEBEB] p-3 text-[13px] text-[#101010] font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee Strip */}
        <SpotlightCard
          mode="dark"
          className="rounded-2xl bg-[#101010] text-white p-5 sm:p-7 border-white/10"
          contentClassName="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#E9204F] mb-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Risk-Reversal Standard</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
              100% Money-Back Guarantee on Eligible Services
            </h3>
            <p className="text-[13px] text-[#A3A3A3] mt-1 leading-relaxed">
              {RHEK_CONFIG.moneyBackGuarantee.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-4 py-2 text-[12.5px] font-semibold text-white whitespace-nowrap transition-all duration-200 min-h-[38px] shrink-0 hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </SpotlightCard>
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}
