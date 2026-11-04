import React from "react";

interface ContactQrCodeProps {
  size?: number;
  className?: string;
  label?: string;
  sublabel?: string;
}

export function ContactQrCode({
  size = 140,
  className = "",
  label = "Scan to Call or Inquire",
  sublabel = "+1 (646) 694-8464",
}: ContactQrCodeProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#EBEBEB] shadow-xs text-center ${className}`}>
      {/* Crisp SVG QR Code Representation */}
      <div className="relative p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
        <svg
          width={size}
          height={size}
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="QR Code to contact RHEK GLOBAL"
          role="img"
          className="transition-transform hover:scale-[1.02]"
        >
          {/* Background */}
          <rect width="160" height="160" fill="white" rx="8" />

          {/* Top-Left Finder Pattern */}
          <rect x="16" y="16" width="40" height="40" rx="6" fill="#101010" />
          <rect x="22" y="22" width="28" height="28" rx="3" fill="white" />
          <rect x="28" y="28" width="16" height="16" rx="2" fill="#E9204F" />

          {/* Top-Right Finder Pattern */}
          <rect x="104" y="16" width="40" height="40" rx="6" fill="#101010" />
          <rect x="110" y="22" width="28" height="28" rx="3" fill="white" />
          <rect x="116" y="28" width="16" height="16" rx="2" fill="#E9204F" />

          {/* Bottom-Left Finder Pattern */}
          <rect x="16" y="104" width="40" height="40" rx="6" fill="#101010" />
          <rect x="22" y="110" width="28" height="28" rx="3" fill="white" />
          <rect x="28" y="116" width="16" height="16" rx="2" fill="#E9204F" />

          {/* Timing Patterns & Data Modules */}
          <rect x="64" y="20" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="80" y="20" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="72" y="28" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="88" y="28" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="64" y="36" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="80" y="36" width="8" height="8" rx="1.5" fill="#E9204F" />

          <rect x="20" y="64" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="28" y="72" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="20" y="80" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="36" y="80" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="44" y="64" width="8" height="8" rx="1.5" fill="#E9204F" />
          <rect x="44" y="76" width="8" height="8" rx="1.5" fill="#101010" />

          {/* Center Pattern */}
          <rect x="64" y="64" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="76" y="64" width="16" height="8" rx="1.5" fill="#101010" />
          <rect x="68" y="76" width="8" height="16" rx="1.5" fill="#E9204F" />
          <rect x="80" y="80" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="64" y="96" width="16" height="8" rx="1.5" fill="#101010" />

          {/* Right & Bottom Data Modules */}
          <rect x="104" y="64" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="120" y="64" width="12" height="8" rx="1.5" fill="#101010" />
          <rect x="112" y="76" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="128" y="76" width="8" height="12" rx="1.5" fill="#E9204F" />
          <rect x="104" y="88" width="12" height="8" rx="1.5" fill="#101010" />
          <rect x="124" y="92" width="8" height="8" rx="1.5" fill="#101010" />

          <rect x="64" y="112" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="76" y="112" width="12" height="8" rx="1.5" fill="#101010" />
          <rect x="96" y="112" width="8" height="8" rx="1.5" fill="#E9204F" />
          <rect x="68" y="124" width="8" height="12" rx="1.5" fill="#101010" />
          <rect x="84" y="128" width="12" height="8" rx="1.5" fill="#101010" />
          <rect x="104" y="124" width="8" height="8" rx="1.5" fill="#101010" />
          <rect x="120" y="120" width="8" height="16" rx="1.5" fill="#101010" />
          <rect x="132" y="132" width="8" height="8" rx="1.5" fill="#101010" />
        </svg>
      </div>

      <div className="mt-3">
        <p className="text-[12px] font-semibold text-[#101010] uppercase tracking-wider">
          {label}
        </p>
        <p className="text-[11px] text-[#737373] mt-0.5">
          {sublabel}
        </p>
      </div>
    </div>
  );
}
