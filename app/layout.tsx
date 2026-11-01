import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhekglobal.com"),
  title: {
    default: "RHEK GLOBAL — Intelligent Digital, Operational & Outsourcing Solutions",
    template: "%s | RHEK GLOBAL",
  },
  description:
    "RHEK GLOBAL empowers businesses with verified janitorial lead generation, B2B sales development, premium 3D web experiences, performance marketing, and dedicated outsourcing solutions.",
  keywords: [
    "Janitorial Lead Generation",
    "Commercial Cleaning Leads",
    "B2B Appointment Setting",
    "Sales Development Representative",
    "Premium 3D Web Design",
    "Digital Outsourcing",
    "RHEK GLOBAL",
    "Virtual Assistant Support",
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
    title: "RHEK GLOBAL — Intelligent Digital, Operational & Outsourcing Solutions",
    description:
      "Empowering businesses through intelligent digital, operational and outsourcing solutions. 100% exclusive leads, 3D web engineering, and verified outcomes.",
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
    <html lang="en" className={`${poppins.variable} ${robotoCondensed.variable}`}>
      <body className="antialiased selection:bg-[#E9204F] selection:text-white bg-white text-[#747474] font-sans">
        {children}
      </body>
    </html>
  );
}
