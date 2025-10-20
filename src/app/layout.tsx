import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Afonso Shepherd — Portfolio",
  description: "MEng Computer Science | RL, ML, Systems | Projects & Experience",
  metadataBase: new URL("https://your-domain.vercel.app"),
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "David Afonso Shepherd — MEng Computer Science",
    description: "Portfolio of David Afonso Shepherd: showcasing AI, ML, and RL projects.",
    url: "https://davidshepherd.dev",
    siteName: "David Afonso Shepherd Portfolio",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Portfolio preview" },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: { canonical: "https://davidshepherd.dev" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <ScrollProgress />
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

<script type="application/ld+json" suppressHydrationWarning>
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Afonso Shepherd",
  url: "https://davidshepherd.dev",
  jobTitle: "MEng Computer Science Student",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "University of Southampton"
  },
  sameAs: [
    "https://github.com/davidafonsoshepherd",
    "https://www.linkedin.com/in/davidafonsoshepherd/"
  ]
})}
</script>
