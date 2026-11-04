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
import { RHEK_CONFIG, IndustryItem } from "@/data/rhek-config";

function getIndustryIcon(iconName: string) {
  const cls = "h-4 w-4 text-[#101010] group-hover:text-white transition-colors duration-300";
  switch (iconName) {
    case "Sparkles":
      return <Sparkles className={cls} />;
    case "Building2":
      return <Building2 className={cls} />;
    case "Activity":
      return <Activity className={cls} />;
    case "ShoppingBag":
      return <ShoppingBag className={cls} />;
    case "Laptop":
      return <Laptop className={cls} />;
    case "Compass":
      return <Compass className={cls} />;
    case "GraduationCap":
      return <GraduationCap className={cls} />;
    case "ShieldCheck":
      return <ShieldCheck className={cls} />;
    case "Truck":
      return <Truck className={cls} />;
    case "Rocket":
      return <Rocket className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

export function IndustriesSection() {
  return (
    <section id="industries" className="site-container scroll-mt-24">
      {/* Header */}
      <div className="max-w-[760px] mb-5 sm:mb-6">
        <span className="inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
          Sector Coverage
        </span>
        <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
          Empowering Enterprises Across Key Verticals
        </h2>
        <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#525252]">
          Our lead generation cadences, digital infrastructure, and dedicated back-office workflows adapt to the unique contract sizes and compliance demands of each industry.
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex items-center justify-between text-[10.5px] text-[#737373] mb-2 px-0.5">
        <span>Swipe across 10 industry verticals</span>
        <span className="font-semibold text-[#101010]">10 Verticals →</span>
      </div>

      {/* 10 Industries: Mobile Horizontal Snap Carousel & Desktop 5-Column Grid */}
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 scrollbar-none -mx-1 px-1 sm:mx-0 sm:px-0">
        {RHEK_CONFIG.industries.map((ind: IndustryItem, i) => (
          <div
            key={i}
            className="min-w-[68%] sm:min-w-[240px] md:min-w-0 snap-center shrink-0 md:shrink group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3 sm:p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#101010] hover:bg-white hover:shadow-lg hover:shadow-black/5"
          >
            <div>
              <div className="mb-2 sm:mb-2.5 flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] group-hover:bg-[#101010] group-hover:border-[#101010] transition-colors duration-300">
                {getIndustryIcon(ind.iconName)}
              </div>
              <h3 className="text-[13px] sm:text-[14px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors leading-snug">
                {ind.name}
              </h3>
              <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-[12px] text-[#525252] leading-relaxed line-clamp-2 sm:line-clamp-none">
                {ind.description}
              </p>
            </div>

            <div className="mt-2.5 pt-2 sm:mt-3.5 sm:pt-2.5 border-t border-[#EBEBEB] flex items-center justify-between text-[10.5px] sm:text-[11px] font-semibold text-[#737373] group-hover:text-[#101010] transition-colors">
              <span>View Fit</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:text-[#E9204F]" />
            </div>
          </div>
        ))}
      </div>

      {/* Customized Solutions Sub-banner */}
      <div className="mt-4 sm:mt-5 rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 transition-all duration-300 hover:border-[#101010]/30 hover:shadow-sm">
        <div>
          <h4 className="text-[13.5px] sm:text-[15px] font-bold text-[#101010]">
            Bespoke Scoping for Niche Verticals
          </h4>
          <p className="text-[11.5px] sm:text-[13px] text-[#525252] mt-0.5">
            Operating in a specialized domain? We build custom targeting filters and verified qualification matrices for your exact criteria.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11.5px] sm:text-[12.5px] font-semibold text-white whitespace-nowrap transition-all duration-200 min-h-[36px] sm:min-h-[38px] shadow-xs shrink-0 hover:shadow-md hover:-translate-y-0.5"
        >
          <span>Discuss Scope</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
