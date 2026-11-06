"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ListFilter, X, ArrowUp } from "@/components/common/icons";

export interface SectionItem {
  id: string;
  num: string;
  label: string;
  title: string;
}

export const SECTIONS_13: SectionItem[] = [
  { id: "sec-01", num: "01", label: "Overview", title: "Hero & Performance" },
  { id: "sec-02", num: "02", label: "Capabilities", title: "Core Services" },
  { id: "sec-03", num: "03", label: "Pricing", title: "Investment Packages" },
  { id: "sec-04", num: "04", label: "Guarantee", title: "100% Money-Back" },
  { id: "sec-05", num: "05", label: "Industries", title: "10 Sectors We Serve" },
  { id: "sec-06", num: "06", label: "Why Us", title: "Engineering Rigor" },
  { id: "sec-07", num: "07", label: "Statistics", title: "Achievements & Stats" },
  { id: "sec-08", num: "08", label: "Case Studies", title: "Portfolio & Reviews" },
  { id: "sec-09", num: "09", label: "Who We Are", title: "Mission & Values" },
  { id: "sec-10", num: "10", label: "Consultation", title: "Final Call to Action" },
  { id: "sec-11", num: "11", label: "Careers", title: "Grow With Us" },
  { id: "sec-12", num: "12", label: "Newsletter", title: "Market Intelligence" },
  { id: "sec-13", num: "13", label: "Footer", title: "Direct QR & Contact" },
];

export function WebDevLeftNav() {
  const [activeId, setActiveId] = useState<string>("sec-01");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first intersecting entry that is visible
      const visible = entries.find((e) => e.isIntersecting);
      if (visible) {
        setActiveId(visible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    SECTIONS_13.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentSection = SECTIONS_13.find((s) => s.id === activeId) || SECTIONS_13[0];
  const activeIndex = SECTIONS_13.findIndex((s) => s.id === activeId);

  return (
    <>
      {/* Desktop Left-Side Vertical Rail */}
      <aside
        aria-label="Section Quick Navigation"
        className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-start select-none"
      >
        {/* Track container */}
        <div className="relative flex flex-col items-start gap-1 p-2 rounded-2xl bg-[#121214]/80 backdrop-blur-md border border-white/10 shadow-2xl">
          
          <div className="px-2 pt-1 pb-1.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#737373] border-b border-white/10 w-full flex items-center justify-between">
            <span>INDEX</span>
            <span className="text-[#E9204F] font-semibold">{currentSection.num}/13</span>
          </div>

          <div className="flex flex-col gap-1 w-full pt-1">
            {SECTIONS_13.map((sec) => {
              const isActive = sec.id === activeId;
              const isHovered = sec.id === hoveredId;

              return (
                <div
                  key={sec.id}
                  className="relative flex items-center"
                  onMouseEnter={() => setHoveredId(sec.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <button
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`group flex items-center gap-2.5 py-1 px-2 rounded-lg font-mono text-[11px] font-semibold transition-all duration-200 text-left w-full ${
                      isActive
                        ? "bg-[#E9204F] text-white shadow-sm shadow-[#E9204F]/40"
                        : "text-[#A3A3A3] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="w-4 text-center">{sec.num}</span>
                    <span className="text-[11px] font-sans font-medium tracking-tight truncate max-w-[90px]">
                      {sec.label}
                    </span>
                  </button>

                  {/* Flyout Hover Label Tooltip */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full ml-3 py-1.5 px-3 rounded-lg bg-[#18181B] border border-white/15 text-white shadow-xl pointer-events-none whitespace-nowrap z-50 text-[11.5px]"
                      >
                        <span className="font-bold text-[#E9204F] font-mono mr-1.5">
                          #{sec.num}
                        </span>
                        <span>{sec.title}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Jump to top button */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-1 pt-1.5 border-t border-white/10 w-full flex items-center justify-center py-1 text-[#737373] hover:text-white transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </aside>

      {/* Mobile & Tablet Floating Bottom Indicator Pill */}
      <div className="fixed bottom-[max(1.25rem,calc(env(safe-area-inset-bottom,0px)+0.75rem))] left-1/2 -translate-x-1/2 z-40 2xl:hidden">
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="flex items-center gap-2 rounded-full bg-[#121214]/90 backdrop-blur-md border border-white/15 px-4 py-2.5 text-[12px] font-semibold text-white shadow-2xl hover:border-white/30 transition-all min-h-[44px]"
          aria-expanded={mobileDrawerOpen}
          aria-label="Toggle section directory"
        >
          <span className="h-2 w-2 rounded-full bg-[#E9204F] animate-pulse" />
          <span className="font-mono text-[#E9204F]">
            {currentSection.num}/13
          </span>
          <span className="text-white font-medium max-w-[130px] sm:max-w-[180px] truncate">
            {currentSection.label}
          </span>
          <ChevronUp
            className={`h-4 w-4 text-[#A3A3A3] transition-transform duration-200 ${
              mobileDrawerOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Slide-Up Quick Jump Sheet & Overlay */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 2xl:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 bottom-[max(5rem,calc(env(safe-area-inset-bottom,0px)+4.5rem))] z-50 rounded-2xl bg-[#141416] border border-white/15 p-5 shadow-2xl 2xl:hidden max-h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ListFilter className="h-4 w-4 text-[#E9204F]" />
                  <span className="font-heading text-sm font-bold text-white">
                    All 13 Sections Directory
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 rounded-md text-[#A3A3A3] hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close section menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {SECTIONS_13.map((sec) => {
                  const isActive = sec.id === activeId;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-[12.5px] transition-colors text-left min-h-[44px] ${
                        isActive
                          ? "bg-[#E9204F] text-white font-semibold"
                          : "bg-white/5 text-[#A3A3A3] hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="font-mono text-[11px] opacity-80">{sec.num}</span>
                        <span className="truncate">{sec.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
