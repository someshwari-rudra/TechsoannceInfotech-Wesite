"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { servicesConfig } from "@/config/services-config"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Enhanced with Interactive Visuals */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/services-hero-bg.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-deep/80 to-brand-dark/80" />

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Professional Software Development
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
                {servicesConfig.hero.headline}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {servicesConfig.hero.subheadline}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {servicesConfig.hero.highlights.map((highlight, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold hover:bg-white/20 transition-all"
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>

              <Link href={servicesConfig.hero.ctaHref}>
                <Button className="px-8 py-6 bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-white font-bold text-lg rounded-xl">
                  {servicesConfig.hero.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Right Column - Interactive Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] sm:h-[500px] hidden lg:block"
            >
              {/* Central glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-blue-500/20 rounded-full blur-3xl"></div>

              {/* Floating service icons in a circular pattern */}
              {servicesConfig.overview.services.map((service, index) => {
                const angle = (index * 360) / servicesConfig.overview.services.length
                const radius = 180
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2
                    }}
                    className="absolute top-1/2 left-1/2 cursor-pointer group"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon container */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-brand-cyan to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 border-2 border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Service name tooltip */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        <span className="text-xs font-bold bg-white text-brand-dark px-3 py-1 rounded-full shadow-lg">
                          {service.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Center element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/40 to-blue-500/40 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-16 h-16 text-brand-cyan" />
                  </div>
                </div>
              </motion.div>

              {/* Decorative connecting lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
                <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-brand-cyan/30" />
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-brand-cyan/20" />
              </svg>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-3 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">{servicesConfig.overview.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-cyan-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {servicesConfig.overview.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {servicesConfig.overview.services.map((service, index) => (
              <ServiceCard
                key={index}
                id={service.id}
                icon={service.icon}
                name={service.name}
                value={service.value}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Process Section - Timeline Design */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent hidden lg:block" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-3 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">{servicesConfig.process.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-cyan-400 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">{servicesConfig.process.microcopy}</p>
          </motion.div>

          <div className="space-y-8 lg:space-y-16 relative">
            {servicesConfig.process.steps.map((step, index) => (
              <ProcessStepTimeline
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={index * 0.15}
                isLast={index === servicesConfig.process.steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-3 block">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">{servicesConfig.whyChooseUs.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesConfig.whyChooseUs.points.map((point, index) => (
              <WhyChooseCard
                key={index}
                icon={point.icon}
                text={point.text}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Auto-Scrolling Marquee */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-dark to-[#29619e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-3 block">Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{servicesConfig.industries.title}</h2>
          </motion.div>

          {/* Infinite Scrolling Marquee */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#29619e] to-transparent z-10" />

            <div className="flex overflow-hidden">
              {/* First set of industries */}
              <motion.div
                animate={{
                  x: [0, -1000]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
                className="flex gap-6 flex-shrink-0"
              >
                {servicesConfig.industries.list.map((industry, index) => (
                  <div
                    key={`first-${index}`}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg whitespace-nowrap hover:bg-white/20 transition-colors duration-200"
                  >
                    {industry}
                  </div>
                ))}
              </motion.div>

              {/* Duplicate set for seamless loop */}
              <motion.div
                animate={{
                  x: [0, -1000]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
                className="flex gap-6 flex-shrink-0 ml-6"
              >
                {servicesConfig.industries.list.map((industry, index) => (
                  <div
                    key={`second-${index}`}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg whitespace-nowrap hover:bg-white/20 transition-colors duration-200"
                  >
                    {industry}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-brand-cyan to-cyan-500 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {servicesConfig.finalCTA.title}
            </h2>

            <Link href={servicesConfig.finalCTA.href}>
              <Button className="px-12 py-7 bg-white hover:bg-gray-100 text-brand-cyan font-bold text-lg rounded-xl shadow-2xl transition-all duration-200 hover:scale-105">
                {servicesConfig.finalCTA.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <p className="text-white/90 mt-6 text-lg font-medium">
              {servicesConfig.finalCTA.subtext}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Component: Service Card (Enhanced with Click to Scroll)
function ServiceCard({ id, icon: Icon, name, value, delay }: { id: string, icon: any, name: string, value: string, delay: number }) {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group h-full"
    >
      <Link href={`/services/${id}`}>
        <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-all duration-300" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-brand-cyan/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-cyan transition-colors">{name}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{value}</p>
            <div className="flex items-center gap-2 text-brand-cyan text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Component: Detailed Service Section (Enhanced)
function DetailedServiceSection({ service, index }: { service: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      id={`service-${service.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-24`}
    >
      <div className="flex-1 space-y-6">
        <div>
          <span className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-2 block">Service {index + 1}</span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{service.name}</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-brand-cyan to-cyan-400 rounded-full mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-cyan-50/30 p-6 rounded-2xl border border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
            What We Deliver
          </h4>
          <ul className="space-y-3">
            {service.deliverables.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech: string, idx: number) => (
              <span key={idx} className="px-4 py-2 bg-gradient-to-br from-brand-cyan/10 to-cyan-100/50 text-brand-cyan border border-brand-cyan/20 rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="relative bg-gradient-to-br from-brand-cyan/10 via-cyan-100/50 to-brand-cyan/20 rounded-3xl p-16 flex items-center justify-center min-h-[400px] overflow-hidden group">
          <div className="absolute top-10 right-10 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" style={{ transitionDelay: '100ms' }} />

          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-cyan/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <span className="text-white font-black text-6xl">{service.name.charAt(0)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Component: Process Step Timeline (New Design)
function ProcessStepTimeline({ number, title, description, delay, isLast }: { number: number, title: string, description: string, delay: number, isLast: boolean }) {
  const isEven = number % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content Card */}
        <div className="flex-1 w-full">
          <div className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Decorative gradient */}
            <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-all duration-300`} />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-cyan/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  <span className="text-white font-black text-2xl">{number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-gray-900 text-2xl mb-2 group-hover:text-brand-cyan transition-colors">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
                </div>
              </div>
            </div>

            {/* Arrow indicator for desktop */}
            <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-full mr-8' : 'left-full ml-8'}`}>
              <div className={`w-8 h-0.5 bg-gradient-to-r ${isEven ? 'from-brand-cyan to-transparent' : 'from-transparent to-brand-cyan'}`} />
            </div>
          </div>
        </div>

        {/* Center Timeline Dot */}
        <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative z-10">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-full shadow-lg shadow-brand-cyan/50 ring-4 ring-white" />
          {!isLast && (
            <div className="w-0.5 h-16 bg-gradient-to-b from-brand-cyan/50 to-transparent mt-2" />
          )}
        </div>

        {/* Spacer for alignment */}
        <div className="flex-1 hidden lg:block" />
      </div>

      {/* Mobile connector */}
      {!isLast && (
        <div className="lg:hidden flex justify-center my-4">
          <div className="w-0.5 h-8 bg-gradient-to-b from-brand-cyan/50 to-brand-cyan/20" />
        </div>
      )}
    </motion.div>
  )
}

// Component: Why Choose Card (Enhanced)
function WhyChooseCard({ icon: Icon, text, delay }: { icon: any, text: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon container with enhanced design */}
          <div className="relative mb-6">
            {/* Outer ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-cyan-400/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />

            {/* Icon box */}
            <div className="relative w-20 h-20 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-cyan/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Icon className="w-10 h-10 text-white" />
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text content */}
          <p className="text-gray-800 font-bold text-xl leading-relaxed group-hover:text-brand-cyan transition-colors duration-300">
            {text}
          </p>

          {/* Bottom accent line */}
          <div className="mt-6 w-0 h-1 bg-gradient-to-r from-brand-cyan to-cyan-400 rounded-full group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  )
}
