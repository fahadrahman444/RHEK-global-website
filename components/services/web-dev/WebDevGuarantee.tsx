import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

export function WebDevGuarantee() {
  const commitments = [
    {
      title: "100% Money-Back Protection",
      desc: "Eligible clients can request a full refund under our applicable guarantee terms.",
    },
    {
      title: "Quality Assurance",
      desc: "Professional service delivery with a focus on excellence and strict code benchmarks.",
    },
    {
      title: "Complete Transparency",
      desc: "Clear agreements, timelines, deliverables, and zero hidden licensing fees.",
    },
    {
      title: "Client-First Commitment",
      desc: "Your satisfaction, ROI, and technical performance remain our highest priority.",
    },
    {
      title: "Reliable Support",
      desc: "Dedicated post-launch assistance to address concerns, resolve bugs, and optimize systems.",
    },
  ];

  return (
    <section id="sec-04" className="border-t border-white/10 bg-[#0E0E10] py-20 lg:py-28 text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Guarantee Statement from PDF */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#10B981] mb-4">
              <ShieldCheck className="h-4 w-4 text-[#10B981]" />
              <span>Section 04 • 100% Money-Back Guarantee</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
              Your Investment Protected.<br />
              <span className="text-[#10B981]">Your Satisfaction Guaranteed.</span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
              At RHEK GLOBAL, we believe in delivering value that meets your expectations. Our 100% Money-Back Guarantee reflects our commitment to service quality, transparency, and client satisfaction.
            </p>
            <p className="mt-3 text-[14px] text-[#A3A3A3] leading-relaxed">
              We stand behind our work and take responsibility for delivering services according to mutually agreed project requirements and deliverables. If our services fail to meet the agreed expectations, we are committed to reviewing your concerns and finding a fair resolution, including a full refund where eligible under our Money-Back Guarantee policy.
            </p>

            <div className="mt-8 space-y-3">
              {commitments.map((c, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[13.5px]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">{c.title}:</strong>{" "}
                    <span className="text-[#A3A3A3]">{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[12px] font-mono text-[#737373] uppercase tracking-wider">
              RHEK GLOBAL – Your Trust, Our Commitment, Your Satisfaction.
            </p>
          </div>

          {/* Right 5 Columns: Visual Assurance Badge Card */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.18)"
              className="p-8 sm:p-10 text-center flex flex-col items-center justify-center border-emerald-500/20 bg-[#121214]"
            >
              <div className="h-20 w-20 rounded-full bg-emerald-950/70 border-2 border-emerald-500/40 flex items-center justify-center text-[#10B981] mb-6 shadow-xl shadow-emerald-950/50">
                <ShieldCheck className="h-10 w-10" />
              </div>

              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                INSTITUTIONAL POLICY
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                100% Money-Back Guarantee
              </h3>
              <p className="text-[13.5px] text-[#A3A3A3] leading-relaxed mb-6 max-w-xs">
                Zero financial risk. Complete milestone accountability on every web application and corporate platform build.
              </p>

              <div className="w-full pt-6 border-t border-white/10 space-y-2 text-[12px] text-[#A3A3A3]">
                <div className="flex items-center justify-between">
                  <span>Scope Milestone Verification</span>
                  <strong className="text-white">Active SLA</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>30-Day Bug Warranty</span>
                  <strong className="text-emerald-400">Included</strong>
                </div>
              </div>

              <Link
                href="#sec-10"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white hover:text-[#101010] text-white py-3 px-4 text-[13px] font-semibold transition-colors duration-200"
              >
                <span>Read Scoping Agreement</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
}
