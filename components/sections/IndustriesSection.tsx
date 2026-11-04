"use client";

import Link from "next/link";
import {
  Sparkles,
  Building2,
  Activity,
  ShoppingBag,
  Laptop,
  Compass,
  GraduationCap,
  ShieldCheck,
  Truck,
  Rocket,
  ArrowRight,
} from "lucide-react";

const SECTOR_DATA = [
  {
    name: "Medical & Healthcare",
    icon: Activity,
    typicalScope: "35,000 sq ft avg",
    cadence: "7-Day Night Shift",
    compliance: "Terminal Clean Protocol",
  },
  {
    name: "Corporate Tech Campuses",
    icon: Laptop,
    typicalScope: "45,000–80,000 sq ft",
    cadence: "Day Porter + Evening",
    compliance: "High-Security Access",
  },
  {
    name: "Commercial Real Estate",
    icon: Building2,
    typicalScope: "Class-A Atriums",
    cadence: "Daily Scheduled Cadence",
    compliance: "Multi-Tenant Management",
  },
  {
    name: "Education & Academies",
    icon: GraduationCap,
    typicalScope: "Campus Classrooms & Gyms",
    cadence: "Daily Porter Service",
    compliance: "Child Safety Clearance",
  },
  {
    name: "Logistics & Warehouses",
    icon: Truck,
    typicalScope: "100,000+ sq ft",
    cadence: "Floor Scrub & Dust Control",
    compliance: "OSHA & Heavy Machine",
  },
  {
    name: "Retail & Dealerships",
    icon: ShoppingBag,
    typicalScope: "High-Traffic Showrooms",
    cadence: "Glass & Floor Buffing",
    compliance: "Public Presentation",
  },
  {
    name: "Financial Institutions",
    icon: ShieldCheck,
    typicalScope: "Multi-Branch Bank Retail",
    cadence: "Nightly Sanitization",
    compliance: "Vault & Teller Security",
  },
  {
    name: "Hospitality & Venues",
    icon: Compass,
    typicalScope: "Event & Banquet Halls",
    cadence: "Turnover Between Events",
    compliance: "Rapid Incident Response",
  },
  {
    name: "Industrial Facilities",
    icon: Rocket,
    typicalScope: "Cleanrooms & Assembly",
    cadence: "HEPA Filtration & Sanitizing",
    compliance: "ISO Standard Cleans",
  },
  {
    name: "Professional Offices",
    icon: Sparkles,
    typicalScope: "Law & CPA Suites",
    cadence: "5-Day Weekly Janitorial",
    compliance: "Document Confidentiality",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="site-container scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="max-w-[620px]">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#737373] mb-1">
            Sector Coverage
          </span>
          <h2 className="font-heading text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-tight">
            Tailored Lead Criteria Across 10 Commercial Verticals
          </h2>
          <p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-[#525252]">
            Every industry has unique cleaning schedules, compliance gates, and decision-maker profiles. We filter specifically for your ideal account profile.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 min-h-[38px] shrink-0 self-start md:self-auto shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Target My Sector</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Visual Sector Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {SECTOR_DATA.map((sector, i) => {
          const Icon = sector.icon;
          return (
            <div
              key={i}
              className="group rounded-xl border border-neutral-200/80 bg-white p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#101010] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#737373] bg-neutral-50 px-1.5 py-0.5 rounded border border-neutral-200/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#101010] leading-snug group-hover:text-[#E9204F] transition-colors">
                  {sector.name}
                </h3>

                <div className="mt-2.5 space-y-1">
                  <div className="text-[11px] sm:text-[11.5px] font-semibold text-[#101010] bg-neutral-50 rounded px-1.5 py-0.5 border border-neutral-100 truncate">
                    {sector.typicalScope}
                  </div>
                  <div className="text-[11px] text-[#525252] truncate">
                    {sector.cadence}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11.5px] font-semibold text-[#737373] group-hover:text-[#101010]">
                <span>Scope Ready</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:text-[#E9204F]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Customized Scope Callout Banner */}
      <div className="mt-4 sm:mt-5 rounded-xl border border-neutral-200/90 bg-[#FAFAFA] p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <div className="text-[13.5px] sm:text-[14.5px] font-bold text-[#101010]">
            Operating in a specialized regional niche?
          </div>
          <p className="text-[12px] sm:text-[13px] text-[#525252] mt-0.5">
            We configure custom square footage thresholds, emergency cleaning filters, and local zip codes for your exact capability profile.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#101010] px-3.5 py-1.5 text-[12px] font-semibold text-[#101010] whitespace-nowrap transition-colors min-h-[36px] shrink-0 shadow-2xs"
        >
          <span>Request Custom Scoping</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
