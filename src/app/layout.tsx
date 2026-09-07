import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/images/can-caramany/brand/apple-icon.png",
    apple: "/images/can-caramany/brand/apple-icon.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
