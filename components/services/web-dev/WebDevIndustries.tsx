import {
  Building2,
  Stethoscope,
  ShoppingBag,
  Laptop,
  UtensilsCrossed,
  GraduationCap,
  Landmark,
  Truck,
  Shirt,
  Rocket,
  CheckCircle2,
} from "@/components/common/icons";
import { SpotlightCard } from "./SpotlightCard";

const INDUSTRIES = [
  { name: "Real Estate & Property", icon: Building2, desc: "High-converting listing hubs, MLS integrations & virtual walkthrough portals." },
  { name: "Healthcare & Medical", icon: Stethoscope, desc: "HIPAA-compliant patient portals, doctor booking systems & clinic apps." },
  { name: "E-commerce & Retail", icon: ShoppingBag, desc: "Headless Shopify storefronts, edge-cached checkout & fluid product catalogs." },
  { name: "Technology & IT", icon: Laptop, desc: "High-velocity B2B SaaS marketing platforms, customer dashboards & API portals." },
  { name: "Hospitality & Tourism", icon: UtensilsCrossed, desc: "Boutique hotel booking engines, visual menus & reservation funnels." },
  { name: "Education & Training", icon: GraduationCap, desc: "Modern LMS learning platforms, student onboarding & course sales funnels." },
  { name: "Finance & Insurance", icon: Landmark, desc: "Institutional fintech dashboards, multi-currency accounting & secure forms." },
  { name: "Logistics & Transportation", icon: Truck, desc: "Fleet management tracking, quote calculators & dispatch portals." },
  { name: "Fashion & Lifestyle", icon: Shirt, desc: "Aesthetic editorial lookbooks, fluid motion showcases & digital flagships." },
  { name: "Startups & Small Businesses", icon: Rocket, desc: "Rapid launch MVP platforms, investor pitch decks & lead acquisition funnels." },
];

export function WebDevIndustries() {
  return (
    <section id="sec-05" className="border-t border-white/10 bg-[#0A0A0B] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
            <span>Section 05 • Industries We Service</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
            Empowering Businesses Across Diverse Industries.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
            At RHEK GLOBAL, we provide intelligent digital, marketing, sales, and web engineering solutions to businesses across multiple industries. Whatever your industry, we deliver solutions aligned with your compliance and growth goals.
          </p>
        </div>

        {/* 10-Industry Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <SpotlightCard
                key={ind.name}
                spotlightColor="rgba(233, 32, 79, 0.12)"
                className="p-5 sm:p-6 group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-[#E9204F] group-hover:border-[#E9204F] transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] text-[#737373] block mb-1">
                    SECTOR 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-[15px] font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-[12px] text-[#A3A3A3] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-[13px] text-[#A3A3A3]">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
            Customized architecture &amp; compliance standards for every enterprise sector.
          </span>
        </div>
      </div>
    </section>
  );
}
