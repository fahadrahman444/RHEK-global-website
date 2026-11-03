"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface MobileServiceStickyBarProps {
  primaryCtaText: string;
  primaryCtaHref: string;
  phoneCta?: {
    phone: string;
    displayPhone: string;
  };
}

export function MobileServiceStickyBar({
  primaryCtaText,
  primaryCtaHref,
  phoneCta,
}: MobileServiceStickyBarProps) {
  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#101010] border-t border-white/15 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {phoneCta && (
          <a
            href={`tel:${phoneCta.phone}`}
            aria-label={`Call direct line ${phoneCta.displayPhone}`}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white hover:text-[#101010] text-white border border-white/20 px-3 py-2.5 text-[12px] font-semibold transition-colors min-h-[42px]"
          >
            <Phone className="h-3.5 w-3.5 text-[#E9204F] shrink-0" />
            <span className="truncate">Call Hotline</span>
          </a>
        )}

        <Link
          href={primaryCtaHref}
          className="flex-[1.4] flex items-center justify-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-[#d01842] text-white px-4 py-2.5 text-[12px] font-semibold transition-colors min-h-[42px] shadow-sm"
        >
          <span className="truncate">{primaryCtaText}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        </Link>
      </div>
    </aside>
  );
}
