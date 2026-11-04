"use client";

import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  showIcon?: boolean;
  variant?: "dark" | "light";
}

export function BrandLogo({
  className = "",
  size = 32,
  showText = true,
  showIcon = false,
  variant = "dark",
}: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {showIcon && (
        <div className="relative flex items-center justify-center shrink-0">
          <Image
            src="/images/rhek-logo.png"
            alt="RHEK GLOBAL"
            width={size}
            height={size}
            className="object-contain rounded-lg"
            priority
          />
        </div>
      )}

      {showText && (
        <span className="font-heading text-[17px] sm:text-[20px] font-bold tracking-tight flex items-center select-none whitespace-nowrap">
          <span className={variant === "dark" ? "text-white" : "text-[#101010]"}>
            RHEK
          </span>
          <span className="text-[#E9204F] ml-1 font-bold tracking-normal text-[16px] sm:text-[19px]">
            GLOBAL
          </span>
        </span>
      )}
    </div>
  );
}
