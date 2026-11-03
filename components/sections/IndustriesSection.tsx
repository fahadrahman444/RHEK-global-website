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
      <div className="max-w-[760px] mb-10">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#737373] mb-2">
          Sector Coverage
        </span>
        <h2 className="font-heading text-[30px] sm:text-[38px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
          Empowering Enterprises Across Key Verticals
        </h2>
        <p className="mt-3 text-[16px] leading-relaxed text-[#525252]">
          Our lead generation cadences, digital infrastructure, and dedicated back-office workflows adapt to the unique contract sizes and compliance demands of each industry.
        </p>
      </div>

      {/* 10 Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {RHEK_CONFIG.industries.map((ind: IndustryItem, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-5 transition-all duration-200 hover:border-[#101010] hover:bg-white hover:shadow-sm"
          >
            <div>
              <div className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#EBEBEB]">
                {getIndustryIcon(ind.iconName)}
              </div>
              <h3 className="text-[14.5px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors leading-snug">
                {ind.name}
              </h3>
              <p className="mt-2 text-[12.5px] text-[#525252] leading-relaxed">
                {ind.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EBEBEB] flex items-center justify-between text-[11.5px] font-semibold text-[#737373] group-hover:text-[#101010] transition-colors">
              <span>View Fit</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Customized Solutions Sub-banner */}
      <div className="mt-7 rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h4 className="text-[16px] font-bold text-[#101010]">
            Bespoke Scoping for Niche Verticals
          </h4>
          <p className="text-[14px] text-[#525252] mt-0.5">
            Operating in a specialized domain? We build custom targeting filters and verified qualification matrices for your exact criteria.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-5 py-2.5 text-[13px] font-semibold text-white whitespace-nowrap transition-colors duration-200 min-h-[42px] shadow-xs shrink-0"
        >
          <span>Discuss Scope</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
