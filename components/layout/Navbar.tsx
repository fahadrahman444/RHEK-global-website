"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Megaphone,
  Code2,
  Palette,
  Video,
  Mail,
  Headphones,
  ArrowRight,
} from "@/components/common/icons";
import { BrandLogo } from "./BrandLogo";

export interface NavServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  href: string;
  icon: typeof Sparkles;
}

export const SERVICES_LIST: NavServiceItem[] = [
  {
    id: "janitorial-lead-generation",
    title: "Janitorial Lead Generation",
    shortDesc: "Confirmed facility decision-maker appointments",
    href: "/services/janitorial-lead-generation",
    icon: Sparkles,
  },
  {
    id: "sales-development",
    title: "Sales Development & Appointment Setting",
    shortDesc: "Multi-touch outbound SDR sales pipelines",
    href: "/services/sales-development",
    icon: PhoneCall,
  },
  {
    id: "social-media-advertising",
    title: "Social Media Advertising",
    shortDesc: "High-ROI paid customer acquisition campaigns",
    href: "/services/social-media-advertising",
    icon: Megaphone,
  },
  {
    id: "web-design-development",
    title: "Web Design & Development",
    shortDesc: "High-performance modern web applications",
    href: "/services/web-design-development",
    icon: Code2,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDesc: "High-converting brand identities & marketing assets",
    href: "/services/graphic-design",
    icon: Palette,
  },
  {
    id: "video-production",
    title: "Video Editing & Production",
    shortDesc: "Engaging commercial video assets and short-form reels",
    href: "/services/video-production",
    icon: Video,
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    shortDesc: "Targeted cold email cadences & newsletter funnels",
    href: "/services/email-marketing",
    icon: Mail,
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant & Administrative Support",
    shortDesc: "Back-office operations & CRM administrative support",
    href: "/services/virtual-assistant",
    icon: Headphones,
  },
];

export interface NavbarProps {
  variant?: "light" | "dark";
}

export function Navbar({ variant = "light" }: NavbarProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isDark = variant === "dark";

  // Close desktop dropdown and mobile menu on escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");
  const isWebDevPage = pathname === "/services/web-development";

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isDark
          ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10"
          : "bg-white/95 backdrop-blur-md border-b border-[#F0F0F0]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6">
        <nav
          className="flex h-[58px] sm:h-[68px] lg:h-[76px] w-full items-center justify-between"
        >
        {/* Brand Logo — Clean, static typography */}
        <Link
          href="/"
          className="transition hover:opacity-90 shrink-0"
          aria-label="RHEK GLOBAL Homepage"
        >
          <BrandLogo showIcon={false} variant={variant} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px]">
          {/* Home */}
          <Link
            href="/"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/"
                ? isDark
                  ? "text-white font-bold"
                  : "text-[#101010] font-bold"
                : isDark
                  ? "text-[#A3A3A3] hover:text-white"
                  : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isDark ? "bg-[#E9204F]" : "bg-[#101010]"}`} />
            )}
          </Link>

          {/* About us */}
          <Link
            href="/about"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/about"
                ? isDark
                  ? "text-white font-bold"
                  : "text-[#101010] font-bold"
                : isDark
                  ? "text-[#A3A3A3] hover:text-white"
                  : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            About Us
            {pathname === "/about" && (
              <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isDark ? "bg-[#E9204F]" : "bg-[#101010]"}`} />
            )}
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center">
              <Link
                href="/services"
                className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
                  isServicesActive
                    ? isDark
                      ? "text-white font-bold"
                      : "text-[#101010] font-bold"
                    : isDark
                      ? "text-[#A3A3A3] hover:text-white"
                      : "text-[#525252] hover:text-[#101010]"
                }`}
              >
                Services
                {isServicesActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isDark ? "bg-[#E9204F]" : "bg-[#101010]"}`} />
                )}
              </Link>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-label="Toggle Services dropdown"
                className={`ml-1 p-1 transition-colors focus:outline-none ${isDark ? "text-[#A3A3A3] hover:text-white" : "text-[#525252] hover:text-[#101010]"}`}
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? `rotate-180 ${isDark ? "text-white" : "text-[#101010]"}` : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop Two-Column Dropdown Panel */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.99 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[600px]"
                >
                  <div
                    className={`rounded-xl border p-5 shadow-2xl ${
                      isDark
                        ? "border-white/10 bg-[#141416] text-white ring-1 ring-white/10"
                        : "border-[#EBEBEB] bg-white text-[#101010] ring-1 ring-black/5"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between pb-3 mb-2 border-b ${
                        isDark ? "border-white/10" : "border-[#F0F0F0]"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isDark ? "text-[#A3A3A3]" : "text-[#737373]"
                        }`}
                      >
                        Core Capabilities
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`text-[12px] font-semibold hover:text-[#E9204F] inline-flex items-center gap-1 transition-colors ${
                          isDark ? "text-white" : "text-[#101010]"
                        }`}
                      >
                        <span>View Overview</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES_LIST.map((service) => {
                        const Icon = service.icon;
                        const isCurrent = pathname === service.href;
                        return (
                          <Link
                            key={service.id}
                            href={service.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={`group flex items-start gap-3 p-2.5 rounded-lg border transition-all duration-150 ${
                              isCurrent
                                ? isDark
                                  ? "bg-white/10 border-[#E9204F]/60 text-white"
                                  : "bg-[#E9204F]/5 border-[#E9204F]/40 text-[#101010]"
                                : isDark
                                  ? "hover:bg-white/5 border-transparent hover:border-white/10"
                                  : "hover:bg-[#FAFAFA] border-transparent hover:border-[#EBEBEB]"
                            }`}
                          >
                            <div
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                isCurrent
                                  ? "bg-[#E9204F] text-white border-[#E9204F]"
                                  : isDark
                                    ? "bg-white/10 border-white/10 text-white group-hover:text-[#E9204F]"
                                    : "bg-[#FAFAFA] border-[#EBEBEB] text-[#101010] group-hover:text-[#E9204F]"
                              }`}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <p
                                  className={`text-[13px] font-semibold leading-snug truncate ${
                                    isCurrent
                                      ? "text-[#E9204F] font-bold"
                                      : isDark
                                        ? "text-white group-hover:text-[#E9204F]"
                                        : "text-[#101010] group-hover:text-[#E9204F]"
                                  }`}
                                >
                                  {service.title}
                                </p>
                                {isCurrent && (
                                  <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#E9204F]/10 text-[#E9204F]">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p
                                className={`text-[11px] leading-tight truncate mt-0.5 ${
                                  isDark ? "text-[#A3A3A3]" : "text-[#737373]"
                                }`}
                              >
                                {service.shortDesc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom CTA bar */}
                    <div
                      className={`mt-3 pt-3 border-t flex items-center justify-between -mx-5 -mb-5 px-5 py-3 rounded-b-xl ${
                        isDark ? "border-white/10 bg-white/5" : "border-[#F0F0F0] bg-[#FAFAFA]"
                      }`}
                    >
                      <p className={`text-[12px] ${isDark ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                        Need a custom lead cadence or development scope?
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`text-[12px] font-semibold hover:text-[#E9204F] inline-flex items-center gap-1 transition-colors ${
                          isDark ? "text-white" : "text-[#101010]"
                        }`}
                      >
                        <span>Consult Our Team</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Team */}
          <Link
            href="/team"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/team"
                ? isDark
                  ? "text-white font-bold"
                  : "text-[#101010] font-bold"
                : isDark
                  ? "text-[#A3A3A3] hover:text-white"
                  : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Team
            {pathname === "/team" && (
              <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isDark ? "bg-[#E9204F]" : "bg-[#101010]"}`} />
            )}
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/careers"
                ? isDark
                  ? "text-white font-bold"
                  : "text-[#101010] font-bold"
                : isDark
                  ? "text-[#A3A3A3] hover:text-white"
                  : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Careers
            {pathname === "/careers" && (
              <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isDark ? "bg-[#E9204F]" : "bg-[#101010]"}`} />
            )}
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/contact"
                ? isDark
                  ? "text-white font-bold"
                  : "text-[#101010] font-bold"
                : isDark
                  ? "text-[#A3A3A3] hover:text-white"
                  : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Contact
            {pathname === "/contact" && (
              <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${isDark ? "bg-[#E9204F]" : "bg-[#101010]"}`} />
            )}
          </Link>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white px-2.5 sm:px-4 py-2 text-[12px] sm:text-[13px] font-bold transition-all duration-200 min-h-[38px] sm:min-h-[40px] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <Calendar className="h-3.5 w-3.5 sm:hidden" />
            <span className="hidden sm:inline">Book a Meeting</span>
            <span className="sm:hidden">Book Call</span>
            <ArrowUpRight className="h-3.5 w-3.5 hidden sm:inline transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button — 44x44px touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden transition min-h-[44px] min-w-[44px] ${
              isDark
                ? "border-white/15 bg-white/5 text-white hover:border-white"
                : "border-[#E5E5E5] bg-white text-[#101010] hover:border-[#101010]"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[58px] sm:top-[68px] lg:hidden bg-black/20 z-40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-[64px] sm:top-[74px] left-3 right-3 sm:left-4 sm:right-4 z-50 rounded-2xl sm:rounded-3xl border border-[#F3F3F3] bg-white p-4 sm:p-5 shadow-2xl lg:hidden text-[#101010] max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 text-[15px] font-bold">
              {/* Contextual Jump Index if on Web Development Page */}
              {isWebDevPage && (
                <div className="mb-2 p-3 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB]">
                  <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-[#F0F0F0]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#737373] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
                      On This Page
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#E9204F]">Web Dev</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[12px]">
                    {[
                      { id: "overview", label: "Overview" },
                      { id: "services", label: "Capabilities" },
                      { id: "process", label: "Process" },
                      { id: "technologies", label: "Tech Stack" },
                      { id: "pricing", label: "Pricing" },
                      { id: "faqs", label: "FAQs" },
                    ].map((sec) => (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white border border-[#EFEFEF] hover:border-[#101010] text-[#101010] font-semibold text-left transition-colors min-h-[44px]"
                      >
                        <span className="truncate">{sec.label}</span>
                        <ArrowRight className="h-3 w-3 text-[#A3A3A3] shrink-0 ml-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                  pathname === "/"
                    ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                    : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                }`}
              >
                Home
              </Link>

              {/* About us */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                  pathname === "/about"
                    ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                    : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                }`}
              >
                About us
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  aria-expanded={mobileServicesExpanded}
                  className={`w-full py-3 px-4 rounded-xl flex items-center justify-between text-left transition-all duration-300 min-h-[44px] ${
                    isServicesActive
                      ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                      : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileServicesExpanded ? "rotate-180 text-[#E9204F]" : ""
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="pl-3 pr-1 py-1 mt-1 space-y-1 bg-[#FAFAFA] rounded-2xl border border-[#F3F3F3]">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2.5 px-3 rounded-lg text-[13px] text-[#E9204F] font-extrabold flex items-center justify-between min-h-[44px]"
                    >
                      <span>Overview All Services</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {SERVICES_LIST.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.id}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-[13px] font-semibold text-[#101010] hover:text-[#E9204F] hover:bg-white transition min-h-[44px]"
                        >
                          <Icon className="h-4 w-4 text-[#E9204F] shrink-0" />
                          <span className="truncate">{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Team */}
              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                  pathname === "/team"
                    ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                    : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                }`}
              >
                Team
              </Link>

              {/* Careers */}
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                  pathname === "/careers"
                    ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                    : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                }`}
              >
                Careers
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                  pathname === "/contact"
                    ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                    : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                }`}
              >
                Contact
              </Link>

              {/* Bottom Mobile CTA */}
              <div className="pt-3 mt-2 border-t border-[#F3F3F3]">
                <Link
                  href="/book-a-meeting"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-[#101010] py-3 px-5 text-[14px] font-bold text-white shadow-md transition-all duration-200 min-h-[44px]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book a Meeting</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
