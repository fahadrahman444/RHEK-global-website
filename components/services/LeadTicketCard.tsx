import Link from "next/link";
import { CheckCircle2, Building2, MapPin, Calendar, Clock, DollarSign, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import type { ServiceLeadSample } from "@/data/services-data";
import { SpotlightCard } from "@/components/common/SpotlightCard";

interface LeadTicketCardProps {
  sample: ServiceLeadSample;
  serviceTitle: string;
}

export function LeadTicketCard({ sample, serviceTitle }: LeadTicketCardProps) {
  return (
    <SpotlightCard
      mode="light"
      className="group rounded-xl border border-[#EBEBEB] bg-white p-4 sm:p-4.5 shadow-2xs hover:border-[#101010] hover:shadow-xs transition-all duration-200"
      contentClassName="relative z-10 flex flex-col justify-between h-full"
    >
      {/* Top Header Row: Ticket ID + Verified Seal */}
      <div>
        <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-[#F0F0F0]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10.5px] font-semibold text-[#525252] bg-[#FAFAFA] border border-[#EBEBEB] px-2 py-0.5 rounded">
              {sample.ticketId || `TKT-${sample.id.toUpperCase()}`}
            </span>
            {sample.category && (
              <span className="hidden sm:inline-block rounded bg-[#FAFAFA] text-[#525252] border border-[#EBEBEB] text-[10px] font-semibold px-2 py-0.5">
                {sample.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 rounded bg-[#FAFAFA] border border-[#EBEBEB] px-2 py-0.5 text-[10px] font-semibold text-[#101010]">
            <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />
            <span>Verified</span>
          </div>
        </div>

        {/* Facility Title & Location */}
        <div className="pt-2.5 pb-2">
          <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#E9204F] uppercase tracking-wider mb-0.5">
            <ShieldCheck className="h-3 w-3 shrink-0" />
            <span>{sample.badge}</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#101010] font-heading tracking-tight leading-snug group-hover:text-[#E9204F] transition-colors">
            {sample.facility}
          </h3>
          <div className="flex items-center gap-1.5 text-[12px] text-[#525252] mt-0.5">
            <MapPin className="h-3.5 w-3.5 text-[#101010] shrink-0" />
            <span>Territory: <strong className="text-[#101010]">{sample.location}</strong></span>
          </div>
        </div>

        {/* Specs 4-Grid */}
        <div className="grid grid-cols-2 gap-1.5 py-1.5 text-[11.5px]">
          <div className="rounded bg-[#FAFAFA] border border-[#EBEBEB] p-2">
            <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#737373] mb-0.5">
              <Building2 className="h-3 w-3 text-[#101010]" />
              <span>Facility Size</span>
            </div>
            <p className="font-bold text-[#101010] text-[12px]">
              {sample.sqft}
            </p>
          </div>

          <div className="rounded bg-[#FAFAFA] border border-[#EBEBEB] p-2">
            <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#737373] mb-0.5">
              <Calendar className="h-3 w-3 text-[#101010]" />
              <span>Service Scope</span>
            </div>
            <p className="font-bold text-[#101010] text-[11.5px] truncate">
              {sample.serviceType}
            </p>
          </div>

          <div className="rounded bg-[#FAFAFA] border border-[#EBEBEB] p-2">
            <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#737373] mb-0.5">
              <DollarSign className="h-3 w-3 text-[#101010]" />
              <span>Target Budget</span>
            </div>
            <p className="font-bold text-[#E9204F] text-[12px]">
              {sample.budget}
            </p>
          </div>

          <div className="rounded bg-[#FAFAFA] border border-[#EBEBEB] p-2">
            <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#737373] mb-0.5">
              <Clock className="h-3 w-3 text-[#101010]" />
              <span>Start Timeline</span>
            </div>
            <p className="font-bold text-[#101010] text-[11.5px]">
              {sample.startDate}
            </p>
          </div>
        </div>
      </div>

      {/* Ticket Footer Row */}
      <div className="pt-2.5 mt-1 border-t border-[#F0F0F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-[#525252]">
          <UserCheck className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
          <span>Decision Maker: <strong className="text-[#101010]">{sample.contact}</strong></span>
        </div>

        <Link
          href={`/contact?service=${encodeURIComponent(serviceTitle)}&lead=${encodeURIComponent(sample.facility)}`}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#101010] group-hover:text-[#E9204F] transition-colors self-end sm:self-auto"
        >
          <span>Claim Appointment</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </SpotlightCard>
  );
}
