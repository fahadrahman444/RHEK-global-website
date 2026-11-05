"use client";

import React from "react";
import { CheckCircle, Clock } from "@/components/common/icons";
import { cn } from "@/lib/utils";

export interface TimelineStage {
  step: string;
  stageNumber: string;
  title: string;
  duration: string;
  focus: string;
  description: string;
  deliverables: string[];
  outputArtifact?: string;
  badge?: string;
}

interface VerticalTimelineProps {
  stages: TimelineStage[];
  className?: string;
}

export function VerticalTimeline({ stages, className }: VerticalTimelineProps) {
  return (
    <div className={cn("relative max-w-4xl mx-auto", className)}>
      {/* Central/Left Continuous Spine */}
      <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-px bg-[#EBEBEB]" />

      <div className="space-y-10 sm:space-y-12">
        {stages.map((stage, idx) => (
          <div key={stage.step} className="relative flex items-start gap-5 sm:gap-8 group">
            {/* Numbered Node Anchor */}
            <div className="relative z-10 flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-[#EBEBEB] text-[#101010] shadow-2xs group-hover:border-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-all duration-200">
              <span className="font-mono text-[12px] sm:text-[14px] font-bold">
                {stage.stageNumber || `0${idx + 1}`}
              </span>
            </div>

            {/* Stage Body */}
            <div className="flex-1 rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-5 sm:p-7 hover:border-[#101010] hover:bg-white transition-colors duration-200">
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-[#EBEBEB]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2 py-0.5 rounded">
                    {stage.step}
                  </span>
                  <span className="text-[12px] font-semibold text-[#737373] hidden sm:inline">
                    · {stage.focus}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-medium text-[#737373]">
                  <Clock className="h-3.5 w-3.5 text-[#A3A3A3]" />
                  <span>{stage.duration}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="pt-4 space-y-2">
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#101010]">
                  {stage.title}
                </h4>
                <p className="text-[13px] sm:text-[14px] text-[#525252] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              {stage.deliverables && stage.deliverables.length > 0 && (
                <div className="pt-4 mt-4 border-t border-[#EBEBEB]/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                    Milestone Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] text-[#262626]">
                    {stage.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Output Artifact Pill */}
              {stage.outputArtifact && (
                <div className="mt-4 pt-3 border-t border-[#EBEBEB]/60 flex items-center gap-2 text-[11.5px] sm:text-[12px] font-mono text-[#525252]">
                  <span className="text-[#E9204F] font-bold">Artifact:</span>
                  <span className="bg-white border border-[#EBEBEB] px-2 py-0.5 rounded text-[#101010]">
                    {stage.outputArtifact}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
