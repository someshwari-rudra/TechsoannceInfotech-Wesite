"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { contactConfig } from "@/config/contact-config"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  Smartphone,
  Globe,
  Palette,
  Megaphone,
  Code2,
  Database,
  Server,
  LayoutTemplate,
  Terminal,
  Cpu,
  Layers,
  Rocket,
  Clock,
  ShoppingCart
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-white/5 pt-6 sm:pt-8 md:pt-10 pb-4 md:pb-6">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-8">

          {/* Column 1: Company Branding & Contact */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2.5">
              <Link href="/" className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  className="h-9 md:h-10 w-auto object-contain"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-base md:text-lg text-white leading-none">
                  TechSonance
                </span>
                <span className="text-[10px] md:text-xs font-medium text-slate-400 tracking-[0.2em] uppercase leading-none mt-0.5">
                  InfoTech LLP
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-sm md:text-base font-bold text-white tracking-tight">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${contactConfig.contactOptions.options[0].value}`}
                    className="flex items-start gap-2 hover:text-brand-cyan transition-colors group py-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm break-words">{contactConfig.contactOptions.options[0].value}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactConfig.contactOptions.options[1].value.replace(/\s/g, '')}`}
                    className="flex items-start gap-2 hover:text-brand-cyan transition-colors group py-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm break-words">{contactConfig.contactOptions.options[1].value}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 py-0.5">
                    <Clock className="w-3.5 h-3.5 text-brand-cyan/70 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm break-words">{contactConfig.contactOptions.options[3].value}</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2 py-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan/70 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm break-words">{contactConfig.contactOptions.options[2].value}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Help & Advice */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white tracking-tight">Help & Advice</h3>
            <ul className="space-y-2">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
                { label: "FAQs", href: "/faqs" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5 text-xs md:text-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-brand-cyan/50 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white tracking-tight">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Globe className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Web Development</span>
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Smartphone className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Mobile Development</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Server className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Cloud & DevOps</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <ShoppingCart className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">E-Commerce</span>
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Database className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Data Analytics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hire Developers */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold text-white tracking-tight">Hire Developers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hire/reactjs-developers" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Code2 className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">ReactJS Developers</span>
                </Link>
              </li>
              <li>
                <Link href="/hire/nodejs-developers" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Node.js Developers</span>
                </Link>
              </li>
              <li>
                <Link href="/hire/react-native-developers" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Smartphone className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">React Native Devs</span>
                </Link>
              </li>
              <li>
                <Link href="/hire/python-developers" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Database className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Python Developers</span>
                </Link>
              </li>
              <li>
                <Link href="/hire/full-stack-developers" className="flex items-center gap-2 hover:text-brand-cyan transition-colors group py-0.5">
                  <Cpu className="w-3.5 h-3.5 text-brand-cyan/70 group-hover:text-brand-cyan transition-colors" />
                  <span className="text-xs md:text-sm">Full Stack Developers</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media Row */}
        <div className="border-t border-white/10 pt-4 md:pt-5 pb-3 md:pb-4">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 md:gap-3 justify-center">
            <span className="text-xs md:text-sm font-semibold text-white">Follow Us:</span>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/company/techsonance-infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-brand-cyan rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 touch-target"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/techsonance_in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-brand-cyan rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 touch-target"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/techsonance_infotech/?igsh=MTZqNm04enMxaGZmbg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-brand-cyan rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 touch-target"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/TechSonance-InfoTech/61583918872159/?rdid=hWr8x5FiMIPKTaVJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1TKgqjwQ9u%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-brand-cyan rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 touch-target"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-3 md:pt-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              {/* Small Text Logo */}
              <span className="text-brand-cyan font-bold text-xl md:text-2xl tracking-tighter">TI</span>
            </div>
            <p className="text-xs md:text-sm text-slate-500 text-center md:text-left">
              © {currentYear} All rights reserved by <span className="text-brand-cyan font-medium">TechSonance InfoTech LLP</span>
            </p>
            <div className="bg-orange-500 text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded flex items-center gap-1">
              <span>DMCA</span>
              <span className="bg-black/20 px-1 rounded-sm">PROTECTED</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-3 md:gap-5 text-[11px] md:text-xs font-medium text-slate-400">
            <Link href="/career" className="hover:text-brand-cyan transition-colors">Career</Link>
            <Link href="/about" className="hover:text-brand-cyan transition-colors">About Us</Link>
            <Link href="/legal/privacy-policy" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-conditions" className="hover:text-brand-cyan transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-brand-cyan transition-colors">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
