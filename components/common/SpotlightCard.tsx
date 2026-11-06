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
      ? "rgba(0, 0, 0, 0.025)"
      : "rgba(233, 32, 79, 0.12)");

  const radius = spotlightRadius ?? (mode === "light" ? 300 : 380);

  const baseThemeClasses =
    mode === "light"
      ? "border border-zinc-200/80 bg-white hover:border-zinc-400 hover:bg-[#FAFAFA] hover:shadow-md hover:shadow-zinc-900/5 hover:-translate-y-0.5"
      : "border border-white/10 bg-[#0E1015] hover:border-white/20 hover:shadow-xl hover:-translate-y-0.5";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-200",
        baseThemeClasses,
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight — Placed beneath content to prevent contrast wash */}
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300 ease-out"
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
