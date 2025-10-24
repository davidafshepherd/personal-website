import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "David Afonso Shepherd",
  description: "David Afonso Shepherd's portfolio",
  metadataBase: new URL("https://davidafshepherd.dev"),
  openGraph: {
    title: "David Afonso Shepherd",
    description: "David Afonso Shepherd's portfolio",
    url: "https://davidafshepherd.dev",
    siteName: "David Afonso Shepherd Portfolio",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Portfolio preview" },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: { canonical: "https://davidafshepherd.dev" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const ls = localStorage.getItem('theme'); const useDark = ls ? ls === 'dark' : false; const root = document.documentElement; const body = document.body; root.classList.toggle('dark', useDark); body.classList.toggle('dark', useDark); } catch(_) {} })();`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased dark:bg-[#121212] dark:text-[#EAEAEA]`}>
        <ScrollProgress />
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David Afonso Shepherd",
              url: "https://davidafshepherd.dev",
              jobTitle: "MEng Computer Science Student",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "University of Southampton",
              },
              sameAs: [
                "https://github.com/davidafshepherd",
                "https://www.linkedin.com/in/david-afonso-shepherd-986b10295/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

