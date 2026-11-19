"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "dark" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  (
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  );

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red hover:bg-brand-black text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-transparent",
  secondary:
    "border border-zinc-200 bg-white hover:border-brand-black hover:bg-brand-surface text-brand-black hover:shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
  dark:
    "bg-brand-black hover:bg-brand-red text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-transparent",
  outline:
    "border border-brand-border bg-transparent hover:border-brand-black hover:bg-brand-surface text-brand-black",
  ghost:
    "bg-transparent hover:bg-black/5 text-brand-black hover:text-brand-red border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-[12px] sm:text-[13px] min-h-[38px] sm:min-h-[40px] rounded-lg gap-1.5 font-semibold",
  md: "px-5 py-2.5 text-[13.5px] min-h-[44px] rounded-lg gap-2 font-semibold",
  lg: "px-6 py-3.5 text-[14px] sm:text-[15px] min-h-[48px] rounded-xl gap-2.5 font-bold tracking-tight",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      className,
      children,
      icon,
      rightIcon,
      href,
      ...rest
    },
    ref
  ) => {
    const baseClass = cn(
      "inline-flex items-center justify-center transition-all duration-200 whitespace-nowrap select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9204F] focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
      variantStyles[variant],
      sizeStyles[size],
      loading && "pointer-events-none opacity-80",
      className
    );

    const content = (
      <>
        {loading ? (
          <span
            className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin shrink-0"
            aria-hidden="true"
          />
        ) : (
          icon && <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href !== undefined) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseClass}
          aria-disabled={disabled || loading}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type || "button"}
        disabled={disabled || loading}
        className={baseClass}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
