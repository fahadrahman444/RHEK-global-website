import React from "react";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "@/components/common/icons";
import { Button } from "@/components/common/Button";
import type { PatternCtaBandProps } from "./types";

export function PatternCtaBand({
  id = "cta",
  badge = "START YOUR PROJECT",
  title,
  subhead,
  primaryCta,
  secondaryCta,
  riskReversal = "14-day refund guarantee · 100% intellectual property ownership · Fixed milestone pricing",
  bullets,
}: PatternCtaBandProps) {
  return (
    <section id={id} className="py-16 sm:py-24 bg-brand-black text-white relative overflow-hidden border-t border-brand-border">
      <div className="site-container relative z-10 text-center max-w-3xl mx-auto space-y-6">
        {badge && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            <span>{badge}</span>
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold text-white tracking-tight leading-tight sm:leading-tight lg:leading-[1.15]">
          {title}
        </h2>

        <p className="text-[15px] sm:text-[17px] text-brand-dim leading-relaxed max-w-2xl mx-auto font-sans">
          {subhead}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="lg"
            href={primaryCta.href}
            onClick={primaryCta.onClick}
            rightIcon={<ArrowUpRight className="h-4 w-4" />}
          >
            {primaryCta.label}
          </Button>

          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white"
              href={secondaryCta.href}
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        {/* Bullets (if provided) */}
        {bullets && bullets.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-[13px] text-zinc-300">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        )}

        {/* Risk Reversal Guarantee Line */}
        {riskReversal && (
          <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[12px] font-mono text-brand-muted">
            <ShieldCheck className="h-4 w-4 text-brand-red shrink-0" />
            <span>{riskReversal}</span>
          </div>
        )}
      </div>
    </section>
  );
}
