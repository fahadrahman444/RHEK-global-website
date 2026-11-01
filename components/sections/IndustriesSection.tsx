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
  const cls = "h-5 w-5 text-[#E9204F] group-hover:scale-110 transition-transform duration-700";
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
      <div className="max-w-[760px] mb-12">
        <div className="w-10 h-0.5 bg-[#E9204F] mb-3" />
        <span className="inline-block text-[12px] font-extrabold uppercase tracking-widest text-[#E9204F] mb-1 font-display">
          Industries We Service
        </span>
        <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold text-[#101010] tracking-[-0.04em] leading-[1.15]">
          Empowering Businesses Across{" "}
          <span className="text-[#E9204F]">Diverse Sectors</span>
        </h2>
        <p className="mt-3 text-[17px] leading-relaxed text-[#747474] font-sans">
          At RHEK GLOBAL, we provide intelligent digital, marketing, sales, and outsourcing solutions to businesses across multiple industries. Our flexible services are designed to meet different business needs, improve operational efficiency, and support sustainable growth.
        </p>
      </div>

      {/* 10 Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {RHEK_CONFIG.industries.map((ind: IndustryItem, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between rounded-2xl bg-[#F3F3F3] border border-transparent p-6 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F] hover:bg-white hover:shadow-lg"
          >
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#E9204F]/10 group-hover:bg-[#E9204F]/10 transition-colors duration-700">
                {getIndustryIcon(ind.iconName)}
              </div>
              <h3 className="text-[16px] font-extrabold font-display text-[#101010] group-hover:text-[#E9204F] transition-colors duration-700">
                {ind.name}
              </h3>
              <p className="mt-2 text-[14px] text-[#747474] leading-relaxed font-sans">
                {ind.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#101010]/10 flex items-center justify-between text-[12px] font-bold font-display uppercase tracking-wider text-[#747474] group-hover:text-[#E9204F] transition-colors duration-700">
              <span>Tailored Solutions</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-700 group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Customized Solutions Sub-banner */}
      <div className="mt-8 rounded-2xl border border-[#F3F3F3] bg-[#FAFAFA] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-[18px] font-extrabold font-display text-[#101010]">
            Customized Solutions for Every Industry
          </h4>
          <p className="text-[15px] text-[#747474] mt-1 font-sans">
            Whatever your industry, RHEK GLOBAL is committed to understanding your business needs and delivering professional solutions aligned with your goals.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#101010] hover:bg-[#E9204F] px-6 py-3 text-[13px] font-bold font-display uppercase tracking-wider text-white whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] shadow-sm shrink-0"
        >
          <span>Discuss Your Industry</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
