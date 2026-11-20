import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/common/icons";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PatternBentoGridProps } from "./types";

export function PatternBentoGrid({
  id = "capabilities",
  badge = "CAPABILITIES",
  title,
  description,
  items,
  columns = 3,
}: PatternBentoGridProps) {
  const gridColsClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={id} className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white">
      <div className="site-container">
        {/* Uniform Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          maxWidth="max-w-2xl"
        />

        {/* Bento Grid */}
        <div className={`grid ${gridColsClass} gap-6 items-stretch`}>
          {items.map((item, idx) => {
            const IconComp = item.icon;
            const CardWrapper = item.href ? Link : "div";

            return (
              <CardWrapper
                key={idx}
                href={item.href || "#"}
                className={`group rounded-2xl border border-brand-border bg-brand-surface hover:bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  item.href
                    ? "hover:border-brand-black hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    : "hover:border-brand-black"
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Arrow Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-white border border-brand-border group-hover:border-brand-red flex items-center justify-center text-brand-red transition-colors shadow-2xs">
                      <IconComp className="h-5 w-5" />
                    </div>
                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 text-brand-slate group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>

                  {/* Outcome Title (4-7 words) */}
                  <h3 className="text-[17px] font-heading font-bold text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* 1-Line Body (3-line limit, 8-12 words) */}
                  <p className="text-[13.5px] text-brand-body leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Tech Enabler Caption Tag */}
                {item.caption && (
                  <div className="pt-4 mt-4 border-t border-brand-border-subtle flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-brand-slate uppercase tracking-wide">
                      {item.caption}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE →
                    </span>
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
