import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontJakarta.variable
        )}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />

        {/* Global Icon Gradient Definition */}
        <svg width="0" height="0" className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* brand-cyan */}
              <stop offset="100%" stopColor="#141d2f" /> {/* brand-deep (darker) */}
            </linearGradient>
            <linearGradient id="icon-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" /> {/* cyan-300 */}
              <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
            </linearGradient>
          </defs>
        </svg>
      </body>
    </html>
  );
}
