import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookMeetingClient } from "@/components/booking/BookMeetingClient";

export const metadata: Metadata = {
  title: "Book a Meeting — Rate Global",
  description:
    "Schedule a 25-minute strategy session with Rate Global. Discuss commercial cleaning leads, B2B sales pipelines, or custom web development with our leadership team.",
  alternates: {
    canonical: "https://rhekglobal.com/book-a-meeting",
  },
  openGraph: {
    title: "Book a Meeting — Rate Global",
    description:
      "Schedule a 25-minute strategy session with Rate Global. Discuss commercial cleaning leads, B2B sales pipelines, or custom web development with our leadership team.",
    url: "https://rhekglobal.com/book-a-meeting",
    siteName: "Rate Global",
    type: "website",
  },
};

export default function BookMeetingPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#525252] selection:bg-[#E9204F] selection:text-white">
      {/* 1. Global Master Navigation */}
      <Navbar variant="light" />

      {/* 2. Interactive Booking Experience */}
      <main>
        <BookMeetingClient />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
