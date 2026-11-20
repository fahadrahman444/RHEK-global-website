import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhekglobal.com"),
  title: {
    default: "RHEK GLOBAL — Commercial Growth, Digital Infrastructure & Pipeline Solutions",
    template: "%s | RHEK GLOBAL",
  },
  description:
    "RHEK GLOBAL engineers qualified B2B sales pipelines, high-performance Next.js web applications, performance marketing, and dedicated outsourcing solutions for growing enterprises.",
  keywords: [
    "B2B Pipeline Growth",
    "Janitorial Lead Generation",
    "Web Design & Development",
    "Next.js Development",
    "Sales Development Representative",
    "Social Media Advertising",
    "Graphic Design & Branding",
    "Video Production",
    "Virtual Assistant Support",
    "RHEK GLOBAL",
  ],
  authors: [{ name: "RHEK GLOBAL Team" }],
  creator: "RHEK GLOBAL",
  publisher: "RHEK GLOBAL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RHEK GLOBAL — Commercial Growth, Digital Infrastructure & Pipeline Solutions",
    description:
      "RHEK GLOBAL engineers qualified B2B sales pipelines, high-performance Next.js web applications, performance marketing, and dedicated outsourcing solutions for growing enterprises.",
    url: "https://rhekglobal.com",
    siteName: "RHEK GLOBAL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RHEK GLOBAL — Intelligent Digital & Outsourcing Solutions",
    description:
      "Empowering businesses through intelligent digital, operational and outsourcing solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${instrumentSans.variable}`}>
      <body className="antialiased selection:bg-brand-red selection:text-white bg-white text-brand-body font-sans">
        {children}
      </body>
    </html>
  );
}
