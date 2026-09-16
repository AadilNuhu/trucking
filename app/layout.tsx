import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://dotherightthingtruckingandlogistics.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Do the Right Thing Trucking and Logistics",
    template: "%s | Do the Right Thing Trucking and Logistics",
  },
  description:
    "Do the Right Thing Trucking and Logistics provides reliable truckload transportation, freight, and logistics services across Ghana and West Africa.",
  keywords: [
    "Do the Right Thing Trucking and Logistics",
    "trucking and logistics",
    "truckload transportation Ghana",
    "freight services West Africa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Do the Right Thing Trucking and Logistics",
    title: "Do the Right Thing Trucking and Logistics",
    description:
      "Reliable truckload transportation, freight, and logistics services across Ghana and West Africa.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Do the Right Thing Trucking and Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do the Right Thing Trucking and Logistics",
    description:
      "Reliable truckload transportation, freight, and logistics services across Ghana and West Africa.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
