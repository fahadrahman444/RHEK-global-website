import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileQuestion, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen py-4 sm:py-6 space-y-10 sm:space-y-12 lg:space-y-14">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px] p-6 sm:p-8 lg:p-10">
            <Navbar />

            {/* Error Content */}
            <div className="pt-16 pb-16 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#FAFAFA] text-[#101010] mb-5 border border-[#EBEBEB]">
                <FileQuestion className="h-7 w-7" />
              </div>
              
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373] mb-2">
                404 Error — Page Not Found
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#101010]">
                The page you are looking for does not exist.
              </h1>

              <p className="mt-3.5 text-[15px] text-[#525252] leading-relaxed">
                The resource or link you followed may have been updated, moved, or temporarily retired. Let&apos;s get you back on track.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-5 py-2.5 text-[13px] font-semibold text-white shadow-xs transition-colors min-h-[42px]"
                >
                  <Home className="h-4 w-4" />
                  <span>Return to Homepage</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-5 py-2.5 text-[13px] font-semibold text-[#101010] transition-colors min-h-[42px]"
                >
                  <Compass className="h-4 w-4" />
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
