import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileQuestion, ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen py-4 sm:py-8 space-y-12 sm:space-y-16">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-900/5">
          
          {/* Header Canvas */}
          <div className="hero-canvas relative overflow-hidden pt-6 pb-20 border-b border-slate-100">
            <div
              className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-[1080px] px-6 lg:px-10">
              <Navbar />

              {/* Error Content */}
              <div className="pt-20 pb-12 text-center max-w-xl mx-auto">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 text-brand-blue mb-6 border border-blue-100">
                  <FileQuestion className="h-8 w-8" />
                </div>
                
                <div className="text-[13px] font-semibold uppercase tracking-wider text-brand-blue mb-2">
                  404 Error — Page Not Found
                </div>

                <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-brand-charcoal">
                  The page you are looking for does not exist.
                </h1>

                <p className="mt-4 text-[15px] text-brand-slate leading-relaxed">
                  The resource or link you followed may have been updated, moved, or temporarily retired. Let&apos;s get you back on track.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-2.5 text-[14px] font-medium text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-600 min-h-[44px]"
                  >
                    <Home className="h-4 w-4" />
                    <span>Return to Homepage</span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[14px] font-medium text-brand-charcoal transition hover:bg-slate-50 min-h-[44px]"
                  >
                    <Compass className="h-4 w-4" />
                    <span>Explore Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consistent Company Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
