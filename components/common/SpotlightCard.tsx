"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
  mode?: "dark" | "light";
}

export function SpotlightCard({
  children,
  className = "",
  contentClassName,
  spotlightColor,
  spotlightRadius,
  mode = "dark",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const defaultSpotlight =
    spotlightColor ??
    (mode === "light"
      ? "rgba(233, 32, 79, 0.22)"
      : "rgba(233, 32, 79, 0.35)");

  const radius = spotlightRadius ?? (mode === "light" ? 320 : 380);

  const baseThemeClasses =
    mode === "light"
      ? "border border-[#EBEBEB] bg-[#FAFAFA] hover:border-[#101010] hover:shadow-lg hover:shadow-black/5"
      : "border border-white/10 bg-[#121214] hover:border-white/25 hover:shadow-2xl hover:shadow-[#E9204F]/10";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        baseThemeClasses,
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px z-20 transition-opacity duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${defaultSpotlight}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative z-10 h-full",
          contentClassName ?? "flex flex-col justify-between"
        )}
      >
        {children}
      </div>
    </div>
  );
}
