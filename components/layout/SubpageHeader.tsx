import Link from "next/link";
import { ChevronRight, Home, type LucideIcon } from "@/components/common/icons";

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
    <div className="pt-2 sm:pt-4">
      {/* Breadcrumb Navigation Trail */}
      <nav aria-label="Breadcrumb" className="mb-3">
        <ol className="flex items-center gap-1.5 text-[12px] text-[#737373] font-medium font-sans">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#101010] transition-colors"
            >
              <Home className="h-3 w-3" />
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
        <div className="inline-flex items-center gap-1.5 rounded-md border border-[#EBEBEB] bg-[#FAFAFA] px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#101010] mb-2 shadow-2xs">
          {Icon && <Icon className="h-3.5 w-3.5 text-[#E9204F]" />}
          <span>{badge}</span>
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-[-0.035em] text-[#101010] leading-tight sm:leading-tight lg:leading-[1.18]">
          {title}
        </h1>

        <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
