"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { hireDevelopersConfig } from "@/config/hire-developers";
import { Button } from "@/components/ui/button";
import { ChevronDown, Laptop, Server, Smartphone, Layers } from "lucide-react";
import { QuoteModal } from "@/components/quote-modal";

// Icon map helper
const iconMap: any = {
  laptop: Laptop,
  server: Server,
  smartphone: Smartphone,
  layers: Layers,
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(
    null
  ); // Track active menu

  const pathname = usePathname();

  // Desktop Hover Handlers
  const handleMouseEnter = (label: string) => {
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6 relative">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt={`${siteConfig.name} Logo`}
                className="w-full h-full object-contain relative z-10 drop-shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-lg md:text-xl lg:text-2xl tracking-tight text-slate-900 leading-none">
                TechSonance
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-700 tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-slate-900 transition-colors duration-300">
                InfoTech LLP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center h-full">
            {siteConfig.navItems.map((item: any) => (
              <div
                key={item.href}
                className="relative h-full flex items-center"
                onMouseEnter={() =>
                  item.isMegaMenu && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                {item.isMegaMenu ? (
                  <button
                    className={`text-sm font-medium transition-colors relative group flex items-center gap-1 cursor-default
                      ${
                        activeMegaMenu === item.label
                          ? "text-brand-cyan"
                          : "text-slate-700 hover:text-brand-cyan"
                      }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-cyan to-[#29619e] transition-all duration-300 
                      ${
                        activeMegaMenu === item.label
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group flex items-center gap-1
                      ${
                        pathname === item.href
                          ? "text-brand-cyan"
                          : "text-slate-700 hover:text-brand-cyan"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-cyan to-[#29619e] transition-all duration-300 
                      ${
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )}

                {item.isMegaMenu && activeMegaMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl bg-white rounded-b-2xl shadow-2xl border-t-2 border-brand-cyan overflow-hidden p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    {hireDevelopersConfig.categories.map((cat) => {
                      const Icon = iconMap[cat.icon] || Layers;
                      return (
                        <div key={cat.title} className="space-y-4">
                          <div className="flex items-center gap-2 text-brand-cyan font-bold text-base border-b border-slate-100 pb-2">
                            <Icon className="w-5 h-5" />
                            {cat.title}
                          </div>
                          <ul className="space-y-2">
                            {cat.items.map((subItem) => (
                              <li key={subItem.slug}>
                                <Link
                                  href={`/hire/${subItem.slug}`}
                                  className="text-sm text-slate-600 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-[#29619e] hover:translate-x-1 block"
                                >
                                  {subItem.label.replace("Hire ", "")}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <Button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-to-r from-brand-cyan to-[#29619e] text-white border-0 shadow-lg shadow-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/40 transition-all duration-300 rounded-full px-6 font-semibold"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:text-brand-cyan transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <div className="w-6 h-6 text-2xl">✕</div>
            ) : (
              <div className="w-6 h-6 text-2xl">☰</div>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 md:top-20 left-0 w-full bg-white border-b border-white/20 shadow-xl backdrop-blur-xl px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 flex flex-col gap-2 sm:gap-3 md:gap-4 animate-in slide-in-from-top-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {siteConfig.navItems.map((item: any) => (
              <div
                key={item.href}
                className="border-b border-slate-100 last:border-0 pb-2 sm:pb-3 md:pb-4"
              >
                {item.isMegaMenu ? (
                  <div className="space-y-2">
                    <div className="text-base sm:text-lg font-medium text-slate-900 py-2 sm:py-2.5 md:py-3 min-h-[44px] flex items-center">
                      {item.label}
                    </div>
                    {/* Mobile Accordion for Mega Menu */}
                    <div className="pl-2 sm:pl-3 md:pl-4 space-y-2 sm:space-y-3 md:space-y-4">
                      {hireDevelopersConfig.categories.map((cat) => (
                        <div key={cat.title}>
                          <div className="text-xs sm:text-sm font-bold text-brand-cyan mb-2 uppercase tracking-wider">
                            {cat.title}
                          </div>
                          <div className="grid grid-cols-1 gap-1 sm:gap-2 md:gap-3 border-l-2 border-brand-cyan/20 pl-2 sm:pl-2.5 md:pl-3">
                            {cat.items.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/hire/${subItem.slug}`}
                                className="text-sm sm:text-base text-slate-600 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-[#29619e] py-2.5 sm:py-3 min-h-[44px] flex items-center"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label.replace("Hire ", "")}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-base sm:text-lg font-medium text-slate-700 hover:text-brand-cyan py-2.5 sm:py-3 min-h-[44px] flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 pb-4 sm:pb-6 md:pb-10">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full bg-gradient-to-r from-brand-cyan to-[#29619e] text-white border-0 shadow-lg shadow-brand-cyan/30 py-5 sm:py-6 rounded-xl font-bold text-base sm:text-lg min-h-[48px]"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
