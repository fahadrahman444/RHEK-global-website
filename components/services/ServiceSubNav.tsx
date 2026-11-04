"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export interface ServiceSubNavItem {
  id: string;
  label: string;
}

export interface ServiceSubNavProps {
  serviceName: string;
  serviceCategory?: string;
  items: ServiceSubNavItem[];
  ctaLabel?: string;
  ctaTargetId?: string;
}

export function ServiceSubNav({
  serviceName,
  serviceCategory = "Service Navigation",
  items,
  ctaLabel = "Book a Meeting",
  ctaTargetId = "cta",
}: ServiceSubNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // Total height of sticky navbar + secondary subnav
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      aria-label={`${serviceName} contextual navigation`}
      className={`hidden md:block sticky top-[74px] lg:top-[82px] z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-[#E5E5E5] shadow-xs"
          : "bg-white/90 backdrop-blur-sm border-[#EBEBEB]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex h-[52px] sm:h-[56px] items-center justify-between gap-4">
          {/* Left Contextual Badge & Title */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="hidden sm:flex h-6 items-center px-2 rounded-md bg-[#101010] text-white text-[10px] font-bold uppercase tracking-wider">
              {serviceCategory}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#E9204F] animate-pulse" />
              <span className="text-[13px] sm:text-[14px] font-extrabold text-[#101010] tracking-tight truncate max-w-[180px] sm:max-w-none">
                {serviceName}
              </span>
            </div>
          </div>

          {/* Center Tabs: Horizontal Scrollable */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-[12px] sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-150 min-h-[36px] ${
                    isActive
                      ? "bg-[#101010] text-white shadow-xs"
                      : "text-[#525252] hover:text-[#101010] hover:bg-[#F3F3F3]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Secondary CTA */}
          <div className="shrink-0 hidden md:block">
            <button
              type="button"
              onClick={() => scrollTo(ctaTargetId)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#E9204F]/10 hover:bg-[#E9204F] text-[#E9204F] hover:text-white text-[12px] font-bold transition-all duration-150 min-h-[36px]"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
