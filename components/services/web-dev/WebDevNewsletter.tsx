"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function WebDevNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 400);
  };

  return (
    <section id="sec-12" className="border-t border-white/10 bg-[#0A0A0B] py-20 lg:py-24 text-white">
      <div className="site-container">
        <SpotlightCard
          spotlightColor="rgba(233, 32, 79, 0.2)"
          className="p-8 sm:p-12 lg:p-14 bg-[#141417] border-white/15"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E9204F] block mb-2">
                SECTION 12 • MARKET INTELLIGENCE
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                Subscribe to RHEK Architectural Insights.
              </h2>
              <p className="mt-3 text-[14.5px] text-[#A3A3A3] leading-relaxed max-w-xl">
                Actionable engineering teardowns, Next.js performance optimizations, and conversion case studies delivered bi-weekly. Zero spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="rounded-xl bg-emerald-950/60 border border-emerald-500/40 p-4 text-[13.5px] text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#10B981] shrink-0" />
                  <span>You are subscribed! Welcome to RHEK Market Intelligence.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#737373]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      className="w-full rounded-xl border border-white/15 bg-white/5 pl-10 pr-4 py-3 text-[13.5px] text-white placeholder-[#737373] focus:border-[#E9204F] focus:outline-none focus:ring-1 focus:ring-[#E9204F] transition-colors min-h-[46px]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] px-6 py-3 text-[13.5px] font-semibold text-white transition-all duration-200 min-h-[46px] disabled:opacity-50 shadow-md whitespace-nowrap"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
