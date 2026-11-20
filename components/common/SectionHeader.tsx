import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  cta?: React.ReactNode;
  bordered?: boolean;
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  maxWidth?: string;
}

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = "left",
  cta,
  bordered = false,
  className,
  titleAs: TitleTag = "h2",
  maxWidth = "max-w-[680px]",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8",
        cta ? "md:flex-row md:items-end justify-between" : isCentered ? "items-center text-center" : "items-start text-left",
        bordered && "pb-6 border-b border-brand-border",
        className
      )}
    >
      <div className={cn(maxWidth, isCentered && "mx-auto")}>
        {badge && (
          <div
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border border-brand-border bg-brand-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-black mb-2.5 shadow-2xs",
              isCentered && "mx-auto"
            )}
          >
            {badgeIcon && <span className="text-brand-red">{badgeIcon}</span>}
            <span>{badge}</span>
          </div>
        )}

        <TitleTag className="font-heading text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-brand-black tracking-tight leading-[1.18]">
          {title}
        </TitleTag>

        {description && (
          <p className="mt-2 text-[14.5px] sm:text-[16px] leading-relaxed text-brand-body">
            {description}
          </p>
        )}
      </div>

      {cta && <div className="shrink-0 self-start md:self-auto">{cta}</div>}
    </div>
  );
}
