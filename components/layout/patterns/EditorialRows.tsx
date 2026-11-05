"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/common/icons";
import { cn } from "@/lib/utils";

export interface EditorialRowItem {
  id?: string;
  index: string;
  title: string;
  subtitle?: string;
  description: string;
  deliverables?: string[];
  tags?: string[];
  href?: string;
  actionLabel?: string;
}

interface EditorialRowsProps {
  items: EditorialRowItem[];
  className?: string;
}

export function EditorialRows({ items, className }: EditorialRowsProps) {
  return (
    <div className={cn("w-full border-t border-[#EBEBEB] divide-y divide-[#EBEBEB]", className)}>
      {items.map((item) => {
        const rowContent = (
          <div className="py-7 sm:py-9 transition-colors duration-200 hover:bg-[#FAFAFA] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
              {/* Monospaced Index */}
              <div className="lg:col-span-1 flex items-center justify-between lg:block">
                <span className="font-mono text-[13px] font-bold text-[#A3A3A3] group-hover:text-[#E9204F] transition-colors">
                  {item.index}
                </span>
                {item.subtitle && (
                  <span className="lg:hidden text-[11px] font-bold uppercase tracking-wider text-[#737373] bg-[#EBEBEB]/60 px-2 py-0.5 rounded">
                    {item.subtitle}
                  </span>
                )}
              </div>

              {/* Title & Category */}
              <div className="lg:col-span-4 space-y-1">
                {item.subtitle && (
                  <span className="hidden lg:inline-block text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                    {item.subtitle}
                  </span>
                )}
                <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-bold text-[#101010] leading-snug group-hover:text-[#101010]">
                  {item.title}
                </h3>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-[13.5px] sm:text-[14.5px] text-[#525252] leading-relaxed">
                  {item.description}
                </p>

                {/* Deliverables / Checklist bullets if present */}
                {item.deliverables && item.deliverables.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[12px] sm:text-[12.5px] text-[#262626]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[11px] font-mono font-medium text-[#737373] bg-white border border-[#EBEBEB] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Directional Action */}
              <div className="lg:col-span-1 flex items-center justify-end pt-2 lg:pt-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EBEBEB] bg-white text-[#101010] group-hover:bg-[#101010] group-hover:text-white group-hover:border-[#101010] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        );

        if (item.href) {
          return (
            <Link key={item.index} href={item.href} className="block cursor-pointer">
              {rowContent}
            </Link>
          );
        }

        return <div key={item.index}>{rowContent}</div>;
      })}
    </div>
  );
}
