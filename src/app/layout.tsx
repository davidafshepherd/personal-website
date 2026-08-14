import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProvider from "@/components/ThemeProvider";

import "./globals.css";


// Self-hosted Inter font.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });


// Mobile viewport sizing.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


// Page/SEO metadata.
export const metadata: Metadata = {
  metadataBase: new URL("https://davidafshepherd.dev"),
  title: "David Afonso Shepherd",
  description: "David Afonso Shepherd's portfolio",
  alternates: { canonical: "https://davidafshepherd.dev" },
  openGraph: {
    title: "David Afonso Shepherd",
    description: "David Afonso Shepherd's portfolio",
    url: "https://davidafshepherd.dev",
    siteName: "David Afonso Shepherd",
    images: [
      {
        url: "/openGraph.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview"
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <NavBar />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
