import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileQuestion, Home, Compass } from "@/components/common/icons";

export default function NotFound() {
  return (
    <main className="min-h-screen py-3 sm:py-5 space-y-6 sm:space-y-8">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xs border border-[#EBEBEB]">
          <div className="relative z-10 mx-auto max-w-[1080px] p-5 sm:p-7 lg:p-8">
            <Navbar />

            {/* Error Content */}
            <div className="pt-10 pb-10 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#FAFAFA] text-[#101010] mb-4 border border-[#EBEBEB]">
                <FileQuestion className="h-6 w-6" />
              </div>
              
              <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                404 Error — Page Not Found
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#101010]">
                The page you are looking for does not exist.
              </h1>

              <p className="mt-2.5 text-[14px] text-[#525252] leading-relaxed">
                The resource or link you followed may have been updated, moved, or temporarily retired. Let&apos;s get you back on track.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] px-4 py-2 text-[12.5px] font-semibold text-white shadow-xs transition-colors min-h-[38px]"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span>Return to Homepage</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] px-4 py-2 text-[12.5px] font-semibold text-[#101010] transition-colors min-h-[38px]"
                >
                  <Compass className="h-3.5 w-3.5" />
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
