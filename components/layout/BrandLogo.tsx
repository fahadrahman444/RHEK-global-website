"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "dark" | "light";
}

export function BrandLogo({
  className = "",
  size = 36,
  showText = true,
  variant = "dark",
}: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* 3D Flip Perspective Container */}
      <div style={{ perspective: 1000 }} className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotateY: [0, 180, 360] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative rounded-xl flex items-center justify-center shadow-xs"
        >
          <Image
            src="/images/rhek-logo.png"
            alt="RHEK GLOBAL"
            width={size}
            height={size}
            className="object-contain rounded-lg"
            priority
          />
        </motion.div>
      </div>

      {showText && (
        <span className="font-heading text-[19px] sm:text-[21px] font-bold tracking-tight flex items-center select-none">
          <span className={variant === "dark" ? "text-white" : "text-[#101010]"}>
            RHEK
          </span>
          <span className="text-[#E9204F] ml-1.5 font-bold tracking-normal text-[18px] sm:text-[20px]">
            GLOBAL
          </span>
        </span>
      )}
    </div>
  );
}
