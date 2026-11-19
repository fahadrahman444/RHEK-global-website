"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CapabilityStripItem {
  icon?: React.ComponentType<{ className?: string }>;
  tag?: string;
  title: string;
  description: string;
  metric?: string;
}

interface CapabilityStripProps {
  items: CapabilityStripItem[];
  className?: string;
}

export function CapabilityStrip({ items, className }: CapabilityStripProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border bg-brand-surface divide-y lg:divide-y-0 lg:divide-x divide-[#EBEBEB] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="p-5 sm:p-6 hover:bg-white transition-colors duration-200 flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                {Icon && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-brand-border text-brand-black group-hover:border-brand-black transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                )}
                {item.tag && (
                  <span className="font-mono text-[10.5px] font-semibold text-[#737373] uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
              </div>

              <h4 className="font-heading text-base font-bold text-brand-black">
                {item.title}
              </h4>
              <p className="text-[12.5px] text-[#525252] leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.metric && (
              <div className="pt-2 border-t border-brand-border/60 font-mono text-[12px] font-bold text-brand-red">
                {item.metric}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
