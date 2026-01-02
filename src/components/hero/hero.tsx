"use client"

import { siteConfig } from "@/config/site"
import { VideoBackground } from "@/components/hero/video-background"
import { TypewriterTitle } from "@/components/hero/typewriter-title"
import { motion } from "framer-motion"
import { Rocket, TrendingUp, Target, ArrowUpRight } from "lucide-react"
import { LucideIcon } from "lucide-react"

export function Hero() {
  const scrollToConsultancy = () => {
    const section = document.getElementById('consultancy-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24">
      <VideoBackground />

      <div className="container relative z-10 flex flex-col items-center text-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center max-w-5xl w-full"
        >
          <div className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-50 to-[#29619e]/10 backdrop-blur-md shadow-xl shadow-cyan-500/20 inline-block">
            <span className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-[0.2em] md:tracking-[0.3em]">
              Next-Gen Digital Agency
            </span>
          </div>

          <TypewriterTitle />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl text-base md:text-lg lg:text-xl xl:text-2xl text-slate-700 mb-8 md:mb-12 lg:mb-16 leading-relaxed font-normal px-4"
          >
            {siteConfig.hero.subHeadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 w-full sm:w-auto"
          >
            <button
              onClick={scrollToConsultancy}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-bold rounded-full shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 touch-target"
            >
              <span className="text-sm md:text-base">Let's Talk Business</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={scrollToConsultancy}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-slate-800 font-bold rounded-full hover:bg-gradient-to-r hover:from-brand-cyan/20 hover:to-[#29619e]/20 hover:border-brand-cyan/50 transition-all duration-300 flex items-center justify-center gap-2 touch-target"
            >
              <span className="text-sm md:text-base">Schedule a free call</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 md:mt-8 w-full max-w-4xl"
        >
          <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">
            Driving Digital Transformation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            <StatCard value="2x" label="Faster Time-to-Market" delay={0} icon={Rocket} />
            <StatCard value="40%" label="Cost Optimization" delay={1} icon={TrendingUp} />
            <StatCard value="100%" label="Tailored Strategy" delay={2} icon={Target} />
            <StatCard value="100%" label="Scalability" delay={3} icon={ArrowUpRight} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ value, label, delay, icon: Icon }: { value: string, label: string, delay: number, icon: LucideIcon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + delay * 0.1, duration: 0.5 }}
      className="group cursor-default"
    >
      <div className="p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/15 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        {/* Icon with gradient background */}
        <div className="mb-2 md:mb-3 flex justify-center">
          <div className="p-1.5 md:p-2 lg:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-400/20 to-[#29619e]/20 group-hover:from-cyan-400/30 group-hover:to-[#29619e]/30 transition-all duration-300">
            <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-[#29619e]" style={{
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
              stroke: 'url(#icon-gradient)',
              strokeWidth: 2
            }} />

          </div>
        </div>

        <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-[#29619e] mb-1 md:mb-2">
          {value}
        </div>
        <div className="text-[9px] md:text-[10px] lg:text-xs font-semibold text-slate-700 leading-tight">
          {label}
        </div>
      </div>
    </motion.div>
  )
}
