import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactQrCode } from "@/components/common/ContactQrCode";
import { InteractiveLeadShowcase } from "@/components/services/InteractiveLeadShowcase";
import { JanitorialRoiCalculator } from "@/components/services/JanitorialRoiCalculator";
import { MobileServiceStickyBar } from "@/components/services/MobileServiceStickyBar";
import { SERVICES_DETAILED_DATA } from "@/data/services-data";
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
  ShieldCheck,
  ArrowRight,
  Phone,
  Quote,
  Star,
  ChevronRight,
  Home,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DETAILED_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAILED_DATA[slug];

  if (!service) {
    return {
      title: "Service Not Found — RHEK GLOBAL",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://rhekglobal.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DETAILED_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen py-4 sm:py-6 space-y-10 sm:space-y-12 lg:space-y-14">
      {/* 1. Hero Canvas */}
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 w-full">
            <Navbar />

            {/* Hero Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-6 sm:pt-8 pb-2">
              {/* Left 7 Columns: Authority Pitch & Conversions */}
              <div className="lg:col-span-7">
                {/* Breadcrumb Navigation Trail */}
                <nav aria-label="Breadcrumb" className="mb-4">
                  <ol className="flex items-center gap-2 text-[12.5px] text-[#737373] font-medium font-sans">
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 hover:text-[#101010] transition-colors"
                      >
                        <Home className="h-3.5 w-3.5" />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3 w-3 text-neutral-300" />
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-[#101010] transition-colors"
                      >
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3 w-3 text-neutral-300" />
                    </li>
                    <li className="text-[#101010] font-semibold" aria-current="page">
                      {service.title}
                    </li>
                  </ol>
                </nav>

                {/* Eyebrow Micro-Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-md border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#101010] mb-3 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
                  <span>Service {service.number} • {service.badge}</span>
                </div>

                {/* Display Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] text-[#101010] leading-[1.12]">
                  {service.headline}
                </h1>

                {/* Value Proposition */}
                <p className="mt-3.5 text-[15.5px] text-[#525252] leading-relaxed max-w-xl">
                  {service.subheadline}
                </p>

                {/* Dual Action Conversion Group */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={service.primaryCtaHref}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-6 py-3 text-[13.5px] font-semibold text-white shadow-xs transition-colors duration-200 min-h-[44px]"
                  >
                    <span>{service.primaryCtaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {service.phoneCta && (
                    <a
                      href={`tel:${service.phoneCta.phone}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-5 py-3 text-[13.5px] font-semibold text-[#101010] transition-colors duration-200 min-h-[44px]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#101010]" />
                      <span>{service.phoneCta.displayPhone}</span>
                    </a>
                  )}
                </div>

                {/* Trust Indicator */}
                <div className="mt-4 flex items-center gap-2 text-[12px] text-[#737373]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                  <span>100% Territory Exclusivity Guarantee • Zero Shared Contacts</span>
                </div>
              </div>

              {/* Right 5 Columns: Compact Architectural Proof Card */}
              <div className="lg:col-span-5">
                {service.leadSamples && service.leadSamples.length > 0 ? (
                  <div className="relative rounded-xl bg-[#101010] p-6 text-white border border-white/10 shadow-lg overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
                          <span className="font-mono text-[10.5px] font-bold text-white uppercase tracking-wider">
                            DISPATCH #{service.leadSamples[0].ticketId || "TKT-01"}
                          </span>
                        </div>
                        <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white uppercase tracking-wider">
                          Verified Walkthrough
                        </span>
                      </div>

                      <div className="pt-4 pb-3">
                        <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#E9204F]">
                          {service.leadSamples[0].badge}
                        </span>
                        <h3 className="text-[18px] sm:text-[20px] font-bold text-white font-heading mt-0.5 leading-snug">
                          {service.leadSamples[0].facility}
                        </h3>
                        <p className="text-[12px] text-[#A3A3A3] mt-1">
                          Target Territory: <strong className="text-white">{service.leadSamples[0].location}</strong>
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 py-2 text-[12px]">
                        <div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
                          <span className="text-[10px] text-[#A3A3A3] uppercase font-semibold block">Facility Size</span>
                          <span className="font-bold text-white text-[13px]">{service.leadSamples[0].sqft}</span>
                        </div>
                        <div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
                          <span className="text-[10px] text-[#A3A3A3] uppercase font-semibold block">Target Budget</span>
                          <span className="font-bold text-[#E9204F] text-[13px]">{service.leadSamples[0].budget}</span>
                        </div>
                      </div>

                      <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11.5px] text-[#A3A3A3]">Decision-Maker Confirmed</span>
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}&lead=${encodeURIComponent(service.leadSamples[0].facility)}`}
                          className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-white hover:text-[#E9204F] transition-colors"
                        >
                          <span>Claim Appointment</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-xl bg-[#101010] p-6 text-white border border-white/10 shadow-lg overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="font-mono text-[10.5px] font-bold text-white uppercase tracking-wider">
                          CLIENT SLA ASSURANCE
                        </span>
                        <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white uppercase tracking-wider">
                          100% Protected
                        </span>
                      </div>

                      <div className="py-4">
                        <h3 className="text-[18px] sm:text-[20px] font-bold text-white font-heading leading-snug">
                          Guaranteed Deliverables &amp; Dedicated SDRs
                        </h3>
                        <p className="text-[12.5px] text-[#A3A3A3] mt-1.5 leading-relaxed">
                          Every campaign is backed by verified decision-maker criteria, strict confidentiality, and our satisfaction policy.
                        </p>
                      </div>

                      <div className="space-y-2 py-3 border-t border-white/10 text-[12px] text-white/90">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                          <span>Zero shared contacts or recycled leads</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                          <span>Appointment replacement protection SLA</span>
                        </div>
                      </div>

                      <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11.5px] text-[#A3A3A3]">Direct Line Available 24/7</span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-white hover:text-[#E9204F] transition-colors"
                        >
                          <span>Book Scoping Call</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Lead Samples Showcase (If Lead Generation Service) */}
      {service.leadSamples && service.leadSamples.length > 0 && (
        <div className="site-container">
          <div className="rounded-2xl bg-[#FAFAFA] shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-8 lg:p-10">
            <InteractiveLeadShowcase
              leadSamples={service.leadSamples}
              serviceTitle={service.title}
            />
          </div>
        </div>
      )}

      {/* 3. Special Limited-Time Offer Banner */}
      {service.specialOfferBanner && (
        <div className="site-container">
          <div className="rounded-2xl bg-[#101010] text-white p-6 sm:p-8 lg:p-10 border border-white/10 shadow-lg relative overflow-hidden">
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded bg-white/10 border border-white/15 px-3 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#E9204F] mb-3">
                  <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
                  <span>{service.specialOfferBanner.badge}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-white tracking-[-0.035em] leading-[1.15]">
                  {service.specialOfferBanner.headline}
                </h2>

                <p className="mt-2 text-[14.5px] text-[#A3A3A3] leading-relaxed max-w-xl">
                  {service.specialOfferBanner.subheadline}
                </p>

                <div className="mt-4 space-y-2">
                  {service.specialOfferBanner.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[13.5px] text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[11.5px] text-[#737373] italic">
                  {service.specialOfferBanner.note}
                </p>
              </div>

              {/* Right Offer Callout Box */}
              <div className="lg:col-span-4 rounded-xl bg-white/5 border border-white/10 p-6 text-center flex flex-col items-center justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A3A3A3]">
                  Promotional Rate
                </span>
                <span className="text-4xl sm:text-5xl font-bold font-heading text-white mt-1 mb-0.5">
                  $110
                </span>
                <span className="text-[11.5px] text-[#E9204F] font-semibold uppercase tracking-wider mb-4">
                  Per Exclusive Lead
                </span>

                <a
                  href={`tel:${service.specialOfferBanner.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] py-3 px-5 text-[13px] font-semibold text-white transition-colors min-h-[44px]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{service.specialOfferBanner.displayPhone}</span>
                </a>

                <Link
                  href={service.primaryCtaHref}
                  className="mt-2.5 text-[11.5px] font-semibold uppercase tracking-wider text-[#A3A3A3] hover:text-white transition-colors"
                >
                  Or Claim Territory Online →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Why Choose Our Service */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl mb-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-2">
              Performance First
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
              {service.whyChooseHeadline}
            </h2>
            <p className="text-[14.5px] text-[#525252] leading-relaxed mt-2">
              {service.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 flex flex-col justify-between hover:bg-white hover:border-[#101010] transition-colors shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[12px] font-bold text-[#101010]">
                      0{idx + 1}
                    </span>
                    {item.highlight && (
                      <span className="rounded bg-white border border-[#EBEBEB] px-2 py-0.5 text-[10.5px] font-semibold text-[#525252]">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#101010] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#525252] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Pricing Packages */}
      <div className="site-container">
        <div className="rounded-2xl bg-[#FAFAFA] shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl mb-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-2">
              Transparent Investment
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
              Pricing Packages &amp; Service Options
            </h2>
            <p className="text-[14.5px] text-[#525252] leading-relaxed mt-2">
              Empower your business with authentic, verified execution backed by our 100% money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
            {service.pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  tier.highlighted
                    ? "bg-[#101010] text-white border border-white/20 shadow-md"
                    : "bg-white text-[#101010] border border-[#EBEBEB] hover:border-[#101010] shadow-2xs"
                }`}
              >
                <div>
                  {tier.badge && (
                    <span className="inline-block rounded bg-[#E9204F] text-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold font-heading">
                    {tier.name}
                  </h3>
                  <div className="mt-2 mb-1.5 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold font-heading">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className={`text-[12px] ${tier.highlighted ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                        / {tier.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-[13px] leading-relaxed mt-1 mb-4 ${tier.highlighted ? "text-[#A3A3A3]" : "text-[#525252]"}`}>
                    {tier.description}
                  </p>

                  <div className={`pt-4 border-t ${tier.highlighted ? "border-white/10" : "border-[#EBEBEB]"}`}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-2 text-[#737373]">
                      Included Scope:
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[12.5px]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className={tier.highlighted ? "text-white/90" : "text-[#101010]"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}&plan=${encodeURIComponent(tier.name)}`}
                    className={`w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-4 text-[12.5px] font-semibold transition-colors min-h-[42px] ${
                      tier.highlighted
                        ? "bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white shadow-xs"
                        : "bg-[#101010] hover:bg-[#E9204F] text-white shadow-xs"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Commercial Contract ROI Calculator (For Janitorial Leads) */}
      {slug === "janitorial-leads" && (
        <div className="site-container">
          <JanitorialRoiCalculator />
        </div>
      )}

      {/* 7. Achievements & Numerical Statistics */}
      <div className="site-container">
        <div className="rounded-2xl bg-[#101010] text-white p-6 sm:p-8 border border-white/10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 pb-5 border-b border-white/10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                Institutional Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                Driving Growth. Delivering Outcomes.
              </h2>
            </div>
            <p className="text-[13px] text-[#A3A3A3] max-w-md">
              Empowering commercial enterprises with guaranteed execution, SDR pipelines, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {service.statistics.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="py-3 sm:py-2 px-3 sm:px-4 text-center flex flex-col justify-center"
              >
                <span className="text-3xl sm:text-4xl font-bold font-heading text-[#E9204F]">
                  {stat.value}
                </span>
                <span className="text-[13px] font-bold text-white mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#A3A3A3] mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Target Commercial Industries */}
      <div className="site-container">
        <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl mb-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-2">
              Commercial Sectors
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
              Industries We Partner With
            </h2>
            <p className="text-[14.5px] text-[#525252] leading-relaxed mt-2">
              Customized solutions tailored to strict facility standards, compliance requirements, and operating schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.targetIndustries.map((ind, iIdx) => (
              <div
                key={iIdx}
                className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-5 hover:bg-white hover:border-[#101010] transition-colors shadow-2xs"
              >
                <h3 className="text-[15px] font-bold text-[#101010] mb-1.5">
                  {ind.name}
                </h3>
                <p className="text-[12.5px] text-[#525252] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9. 100% Money-Back Guarantee */}
      <div className="site-container">
        <div className="rounded-2xl bg-[#FAFAFA] shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded bg-white border border-[#EBEBEB] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#101010] mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" />
                <span>Zero Risk Client Protection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#101010] leading-snug">
                {service.guarantee.headline}
              </h2>
              <p className="text-[14px] text-[#525252] leading-relaxed mt-2 mb-4">
                {service.guarantee.description}
              </p>

              <div className="space-y-2">
                {service.guarantee.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-[13px] text-[#101010]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl bg-white border border-[#EBEBEB] p-6 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] flex items-center justify-center text-[#16A34A] mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-[15px] font-bold text-[#101010]">
                100% Satisfaction Policy
              </h3>
              <p className="text-[12px] text-[#525252] mt-1 mb-4 leading-relaxed">
                Clear agreements, full transparency, and replacement protection on every campaign.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
              >
                <span>Read Guarantee Terms</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 10. Client Testimonials & Reviews */}
      {service.testimonials && service.testimonials.length > 0 && (
        <div className="site-container">
          <div className="rounded-2xl bg-white shadow-xs border border-[#EBEBEB] overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                Client Reviews
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#101010] mt-1 leading-snug">
                What Contractors Say About Partnering With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-2.5 text-[#E9204F]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-[#E9204F]/30 mb-1" />
                    <p className="text-[14px] text-[#101010] leading-relaxed italic mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EBEBEB] flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-bold text-[#101010]">
                        {t.author}
                      </p>
                      <p className="text-[11.5px] text-[#737373]">
                        {t.role}, {t.company}
                      </p>
                    </div>
                    {t.metric && (
                      <span className="rounded bg-white border border-[#EBEBEB] px-2 py-0.5 text-[10.5px] font-semibold text-[#101010]">
                        {t.metric}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 11. Final Call to Action Strip + Scannable QR Code */}
      <div className="site-container">
        <div className="rounded-2xl bg-[#101010] text-white p-6 sm:p-8 lg:p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#E9204F] mb-1.5">
                Ready to Grow?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white leading-tight tracking-[-0.035em]">
                Claim Your Territory &amp; Schedule Walkthroughs Today.
              </h2>
              <p className="text-[14px] text-[#A3A3A3] mt-2 max-w-xl leading-relaxed">
                Connect directly with our team to lock down your commercial territory, review pre-screened facility leads, or request a custom quote.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={service.primaryCtaHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-6 py-3 text-[13px] font-semibold text-white shadow-xs transition-colors min-h-[44px]"
                >
                  <span>{service.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {service.phoneCta && (
                  <a
                    href={`tel:${service.phoneCta.phone}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white hover:text-[#101010] px-5 py-3 text-[13px] font-semibold text-white transition-colors min-h-[44px]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#E9204F]" />
                    <span>{service.phoneCta.displayPhone}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Scannable QR Code */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <ContactQrCode
                size={115}
                label="Direct Territory Line"
                sublabel={service.phoneCta?.displayPhone || "Scan to Contact RHEK"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 12. Footer */}
      <div className="site-container pb-24 md:pb-6">
        <Footer />
      </div>

      {/* 13. Mobile Sticky Quick-Action Dock */}
      <MobileServiceStickyBar
        primaryCtaText={service.primaryCtaText}
        primaryCtaHref={service.primaryCtaHref}
        phoneCta={service.phoneCta}
      />
    </main>
  );
}
