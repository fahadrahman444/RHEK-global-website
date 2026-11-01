"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Menu, X, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/services",
      label: "Services",
      active: pathname === "/services",
    },
    {
      href: "/work",
      label: "Works",
      active: pathname === "/work",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
    {
      href: "/privacy-policy",
      label: "Privacy Policy",
      active: pathname === "/privacy-policy",
    },
  ];

  return (
    <header className="relative z-50 flex justify-center w-full max-w-[1240px] mx-auto pt-2 pb-4">
      <nav className="flex h-[76px] lg:h-[86px] w-full items-center justify-between border-b border-[#F3F3F3] bg-transparent px-2 sm:px-4 transition-all">
        {/* Brand Logo */}
        <Link
          href="/"
          className="transition hover:opacity-95 shrink-0"
          aria-label="RHEK GLOBAL Homepage"
        >
          <BrandLogo size={36} variant="light" />
        </Link>

        {/* Desktop Nav Links (Exact Red Sparrow Header Navigation) */}
        <div className="hidden lg:flex items-center gap-6 text-[14px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 font-bold font-display uppercase tracking-wider text-[14px] transition-colors duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] ${
                link.active
                  ? "text-[#E9204F]"
                  : "text-[#101010] hover:text-[#E9204F]"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E9204F]" />
              )}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-[#E9204F] bg-white hover:bg-[#E9204F] hover:text-white px-6 py-2.5 text-[13px] font-extrabold font-display uppercase tracking-wider text-[#101010] transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] min-h-[44px] shadow-xs"
          >
            <span>Enquiry</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F3F3F3] bg-white text-[#101010] hover:text-[#E9204F] lg:hidden transition min-h-[44px] min-w-[44px]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[88px] left-4 right-4 z-50 rounded-3xl border border-[#F3F3F3] bg-white p-6 shadow-2xl lg:hidden text-[#101010]">
          <div className="flex flex-col gap-2 text-[15px] font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] ${
                  link.active
                    ? "text-[#E9204F] bg-[#E9204F]/10 font-bold"
                    : "text-[#101010] hover:bg-[#F3F3F3] hover:text-[#E9204F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
        </div>
      )}
    </header>
  );
}
