"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Zap, Repeat, Handshake, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { aboutConfig } from "@/config/about-config"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 md:py-28 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/about_us_hero_bg.png')] bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {aboutConfig.hero.headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {aboutConfig.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {aboutConfig.hero.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.whoWeAre.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutConfig.whoWeAre.content}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {aboutConfig.whoWeAre.keyTraits.map((trait, index) => (
              <TraitCard key={index} icon={trait.icon} title={trait.title} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.whatWeDo.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {aboutConfig.whatWeDo.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutConfig.whatWeDo.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{aboutConfig.howWeWork.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic">{aboutConfig.howWeWork.microcopy}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {aboutConfig.howWeWork.steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === aboutConfig.howWeWork.steps.length - 1}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group block h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden hover:border-brand-cyan/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan transform rotate-12 scale-125">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {aboutConfig.missionVision.mission.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                    {aboutConfig.missionVision.mission.content}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative group block h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-deep/30 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden hover:border-brand-deep/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-deep transform -rotate-12 scale-150">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-deep/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {aboutConfig.missionVision.vision.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                    {aboutConfig.missionVision.vision.content}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-deep/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{aboutConfig.whyChooseUs.title}</h2>
            <div className="flex justify-center">
              <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle2, text: aboutConfig.whyChooseUs.points[0] || "Quality Focused" },
              { icon: MessageSquare, text: aboutConfig.whyChooseUs.points[1] || "Clear Communication" },
              { icon: Zap, text: aboutConfig.whyChooseUs.points[2] || "Modern Tech Stack" },
              { icon: Repeat, text: aboutConfig.whyChooseUs.points[3] || "Flexible Models" },
              { icon: Handshake, text: aboutConfig.whyChooseUs.points[4] || "Long-term Partnership" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-deep/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-brand-cyan" style={{ stroke: 'url(#icon-gradient)' }} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">
                    {item.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Mindset */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{aboutConfig.globalMindset.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {aboutConfig.globalMindset.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-brand-deep text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {aboutConfig.finalCTA.title}
            </h2>

            <Link href={aboutConfig.finalCTA.href}>
              <Button className="px-10 py-6 bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg">
                {aboutConfig.finalCTA.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <p className="text-gray-300 mt-6 text-lg">
              {aboutConfig.finalCTA.subtext}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Component: Trait Card
function TraitCard({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      className="group cursor-default h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/15 hover:bg-white/70 hover:border-brand-cyan/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex flex-col items-center text-center">
        {/* Icon with gradient background */}
        <div className="mb-4 flex justify-center">
          <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-brand-cyan" style={{ stroke: 'url(#icon-gradient)' }} />
          </div>
        </div>

        <h4 className="text-gray-900 font-bold text-base leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">
          {title}
        </h4>
      </div>
    </motion.div>
  )
}

// Component: Service Card
function ServiceCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 h-full">
        <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-brand-cyan" style={{ stroke: 'url(#icon-gradient)' }} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Component: Process Step
function ProcessStep({ number, title, description, isLast, delay }: { number: number, title: string, description: string, isLast: boolean, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      <div className="group flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:-translate-y-1">
        <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-deep text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base group-hover:text-brand-cyan transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{description}</p>
      </div>

      {!isLast && (
        <div className="hidden md:block absolute top-11 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-cyan to-brand-deep/30 opacity-30" />
      )}
    </motion.div>
  )
}
