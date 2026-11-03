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
} from "lucide-react";
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
    id: "janitorial-leads",
    title: "Janitorial Lead Generation",
    shortDesc: "Confirmed facility decision-maker appointments",
    href: "/services/janitorial-leads",
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
    id: "social-media-ads",
    title: "Social Media Advertising",
    shortDesc: "High-ROI paid customer acquisition campaigns",
    href: "/services/social-media-ads",
    icon: Megaphone,
  },
  {
    id: "web-development",
    title: "Web Design & Development",
    shortDesc: "High-performance modern web applications",
    href: "/services/web-development",
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

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close desktop dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="relative z-50 flex justify-center w-full max-w-[1280px] mx-auto pt-2 pb-4">
      <nav className="flex h-[76px] lg:h-[86px] w-full items-center justify-between border-b border-[#F3F3F3] bg-transparent px-2 sm:px-4 transition-all">
        {/* Brand Logo */}
        <Link
          href="/"
          className="transition hover:opacity-95 shrink-0"
          aria-label="RHEK GLOBAL Homepage"
        >
          <BrandLogo size={36} variant="light" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px]">
          {/* Home */}
          <Link
            href="/"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/"
                ? "text-[#101010] font-bold"
                : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#101010]" />
            )}
          </Link>

          {/* About us */}
          <Link
            href="/about"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/about"
                ? "text-[#101010] font-bold"
                : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#101010]" />
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
                    ? "text-[#101010] font-bold"
                    : "text-[#525252] hover:text-[#101010]"
                }`}
              >
                Services
                {isServicesActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#101010]" />
                )}
              </Link>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-label="Toggle Services dropdown"
                className="ml-1 p-1 text-[#525252] hover:text-[#101010] transition-colors focus:outline-none"
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#101010]" : ""
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
                  <div className="rounded-xl border border-[#EBEBEB] bg-white p-5 shadow-xl ring-1 ring-black/5">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#F0F0F0]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                        Core Capabilities
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[12px] font-semibold text-[#101010] hover:text-[#E9204F] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View Overview</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES_LIST.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.id}
                            href={service.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAFAFA] border border-transparent hover:border-[#EBEBEB] transition-all duration-150"
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010] group-hover:text-[#E9204F] transition-colors">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-semibold text-[#101010] group-hover:text-[#E9204F] transition-colors leading-snug truncate">
                                {service.title}
                              </p>
                              <p className="text-[11px] text-[#737373] leading-tight truncate mt-0.5">
                                {service.shortDesc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="mt-3 pt-3 border-t border-[#F0F0F0] flex items-center justify-between bg-[#FAFAFA] -mx-5 -mb-5 px-5 py-3 rounded-b-xl">
                      <p className="text-[12px] text-[#737373]">
                        Need a custom lead cadence or development scope?
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[12px] font-semibold text-[#101010] hover:text-[#E9204F] inline-flex items-center gap-1 transition-colors"
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
                ? "text-[#101010] font-bold"
                : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Team
            {pathname === "/team" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#101010]" />
            )}
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/careers"
                ? "text-[#101010] font-bold"
                : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Careers
            {pathname === "/careers" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#101010]" />
            )}
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`relative py-1 font-semibold text-[13.5px] transition-colors duration-200 ${
              pathname === "/contact"
                ? "text-[#101010] font-bold"
                : "text-[#525252] hover:text-[#101010]"
            }`}
          >
            Contact
            {pathname === "/contact" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#101010]" />
            )}
          </Link>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-5 py-2 text-[13px] font-semibold transition-colors duration-200 min-h-[40px] shadow-xs"
          >
            <span>Inquire</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E5E5] bg-white text-[#101010] hover:border-[#101010] lg:hidden transition min-h-[40px] min-w-[40px]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[88px] left-4 right-4 z-50 rounded-3xl border border-[#F3F3F3] bg-white p-5 shadow-2xl lg:hidden text-[#101010] max-h-[calc(100vh-110px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 text-[15px] font-bold">
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
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#E9204F] hover:bg-[#101010] py-3 px-5 text-[14px] font-bold text-white shadow-md transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] uppercase tracking-wider"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book A Call</span>
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
