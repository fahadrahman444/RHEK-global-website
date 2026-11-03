import Link from "next/link";
import { ChevronRight, Home, type LucideIcon } from "lucide-react";

interface SubpageHeaderProps {
  badge: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  currentLabel: string;
}

export function SubpageHeader({
  badge,
  title,
  description,
  icon: Icon,
  currentLabel,
}: SubpageHeaderProps) {
  return (
    <div className="pt-4 sm:pt-6">
      {/* Breadcrumb Navigation Trail */}
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className="flex items-center gap-2 text-[12.5px] text-[#737373] font-medium font-sans">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#101010] transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 text-neutral-300" />
          </li>
          <li className="text-[#101010] font-semibold" aria-current="page">
            {currentLabel}
          </li>
        </ol>
      </nav>

      {/* Header Content */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-md border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#101010] mb-3.5 shadow-2xs">
          {Icon && <Icon className="h-3.5 w-3.5 text-[#E9204F]" />}
          <span>{badge}</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] text-[#101010] leading-[1.12]">
          {title}
        </h1>

        <p className="mt-3.5 text-[16px] text-[#525252] leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
