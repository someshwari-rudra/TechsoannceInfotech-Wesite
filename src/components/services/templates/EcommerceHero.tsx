"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import eCommerceImage from "@/app/ecommerce.png"

interface EcommerceHeroProps {
  shortDescription: string
}

export function EcommerceHero({ shortDescription }: EcommerceHeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block border-b-2 border-brand-cyan pb-1 mb-6 text-[#0A1A2F] font-bold tracking-widest text-xs uppercase">
              From Visitor to Customer
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-[#0A1A2F] mb-8 leading-none tracking-tight font-display">
              Commerce <br />
              <span className="text-slate-400">Reimagined.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              {shortDescription}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
                Launch Store
              </a>
            </motion.div>
          </motion.div>

          {/* Visual: Image Replacement with Animation */}
          <motion.div
            className="flex-1 relative w-full h-[500px] flex items-center justify-center p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src={eCommerceImage}
                alt="Ecommerce Dashboard"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
