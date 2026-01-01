"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import {
  Code2,
  Smartphone,
  Cloud,
  BarChart3,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react"
import { LucideIcon } from "lucide-react"

// Icon mapping for each service
const serviceIcons: LucideIcon[] = [
  Code2,        // Web Development
  Smartphone,   // Mobile Development
  Cloud,        // Cloud & DevOps
  BarChart3,    // Data Analytics
  ShoppingCart, // E-Commerce
  Users,        // Hire Developers
]

// Badge color configurations - Updated to match brand feel
const badgeColors: Record<string, string> = {
  "Popular": "bg-brand-cyan text-brand-dark",
  "Trending": "bg-brand-dark text-white border border-brand-cyan/30",
  "Enterprise": "bg-gradient-to-r from-brand-dark to-slate-900 text-white",
  "Growth": "bg-emerald-500 text-white",
  "Quick Start": "bg-amber-500 text-white",
  "Featured": "bg-brand-deep text-white",
}

export function ServicesSection() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(10,26,47,0.03),transparent_50%)]" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <p className="text-xs md:text-sm font-bold text-brand-cyan uppercase tracking-[0.3em] mb-4">
            Our Core Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and accelerate growth
          </p>
        </motion.div>

        {/* Services Grid - Properly aligned with max-width */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                badge={service.badge}
                number={service.number}
                slug={service.slug}
                icon={serviceIcons[index]}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Not sure which service is right for you?
          </p>
          <Link
            href="#consultancy-section"
            className="group inline-flex items-center px-8 py-4 rounded-full bg-brand-cyan text-white font-semibold shadow-lg shadow-brand-cyan/20 hover:bg-brand-dark hover:shadow-brand-dark/30 transition-all duration-300"
          >
            Schedule a free call
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const ServiceIcon3D = ({ icon: Icon, color }: { icon: LucideIcon, color: string }) => (
  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 perspective-1000 group-hover:scale-110 transition-transform duration-500 ease-out">
    {/* Back Layer - Dark Shadow */}
    <div className="absolute inset-0 bg-brand-dark/20 rounded-2xl transform rotate-6 scale-90 translate-y-2 blur-sm" />

    {/* Middle Layer - Accent Color */}
    <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl transform -rotate-6 scale-95" />

    {/* Front Layer - Glassmorphism Container */}
    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-white/60 shadow-xl shadow-brand-cyan/10 flex items-center justify-center backdrop-blur-md transform transition-transform duration-500 group-hover:-translate-y-2">
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent rounded-2xl" />

      {/* The Icon */}
      <Icon
        className="relative w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-brand-dark filter drop-shadow-md group-hover:text-brand-cyan transition-colors duration-300"
        strokeWidth={1.5}
      />

      {/* Shine Effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent rounded-tr-2xl opacity-50" />
    </div>
  </div>
)

function ServiceCard({
  title,
  description,
  badge,
  icon,
  slug,
  delay
}: {
  title: string
  description: string
  badge: string
  number: string
  icon: LucideIcon
  slug: string
  delay: number
}) {
  return (
    <Link href={`/services/${slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        className="group cursor-pointer h-full"
      >
        <div className="relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center">

          {/* Top Accent Bar - Brand Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-deep transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

          {/* Badge */}
          <div className="relative mb-6 md:mb-8">
            <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full ${badgeColors[badge]} shadow-sm uppercase tracking-wide`}>
              {badge}
            </span>
          </div>

          {/* 3D Icon Visualization */}
          <ServiceIcon3D icon={icon} color={badgeColors[badge]} />

          {/* Content Wrapper - Flex Grow to push button down */}
          <div className="relative flex-1 flex flex-col w-full">
            <div className="space-y-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">
                {title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* Discover More Link - Pushed to bottom */}
            <div className="mt-auto pt-4 flex justify-center">
              <span className="inline-flex items-center text-sm font-bold text-brand-cyan group-hover:text-brand-dark transition-colors duration-300">
                Discover More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" style={{ stroke: 'url(#icon-gradient)' }} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
