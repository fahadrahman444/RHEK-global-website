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
    <div className="pt-6 sm:pt-8">
      {/* Breadcrumb Navigation Trail */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-[13px] text-[#747474] font-medium font-sans">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#E9204F] transition-colors duration-700"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          </li>
          <li className="text-[#101010] font-bold font-display" aria-current="page">
            {currentLabel}
          </li>
        </ol>
      </nav>

      {/* Header Content */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#F3F3F3] bg-[#FAFAFA] px-3.5 py-1 text-[12px] font-extrabold font-display uppercase tracking-wider text-[#E9204F] mb-4 shadow-2xs">
          {Icon && <Icon className="h-3.5 w-3.5 text-[#E9204F]" />}
          <span>{badge}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.04em] text-[#101010] leading-[1.15]">
          {title}
        </h1>

        <p className="mt-4 text-[17px] text-[#747474] font-sans leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
