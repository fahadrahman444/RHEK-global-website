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
  const cls = "h-4 w-4 text-[#101010] group-hover:text-[#E9204F] transition-colors";
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
      <div className="max-w-[760px] mb-6">
        <span className="inline-block text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
          Sector Coverage
        </span>
        <h2 className="font-heading text-[24px] sm:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
          Empowering Enterprises Across Key Verticals
        </h2>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#525252]">
          Our lead generation cadences, digital infrastructure, and dedicated back-office workflows adapt to the unique contract sizes and compliance demands of each industry.
        </p>
      </div>

      {/* 10 Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {RHEK_CONFIG.industries.map((ind: IndustryItem, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-4 transition-all duration-200 hover:border-[#101010] hover:bg-white hover:shadow-2xs"
          >
            <div>
              <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#EBEBEB]">
                {getIndustryIcon(ind.iconName)}
              </div>
              <h3 className="text-[14px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors leading-snug">
                {ind.name}
              </h3>
              <p className="mt-1.5 text-[12px] text-[#525252] leading-relaxed">
                {ind.description}
              </p>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-[#EBEBEB] flex items-center justify-between text-[11px] font-semibold text-[#737373] group-hover:text-[#101010] transition-colors">
              <span>View Fit</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Customized Solutions Sub-banner */}
      <div className="mt-5 rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-[15px] font-bold text-[#101010]">
            Bespoke Scoping for Niche Verticals
          </h4>
          <p className="text-[13px] text-[#525252] mt-0.5">
            Operating in a specialized domain? We build custom targeting filters and verified qualification matrices for your exact criteria.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-4 py-2 text-[12.5px] font-semibold text-white whitespace-nowrap transition-colors duration-200 min-h-[38px] shadow-xs shrink-0"
        >
          <span>Discuss Scope</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
