"use client"

import { BarChart3, TrendingUp, ArrowUpRight, Database } from "lucide-react"
import { motion } from "framer-motion"

interface DataAnalyticsHeroProps {
   shortDescription: string
}

export function DataAnalyticsHero({ shortDescription }: DataAnalyticsHeroProps) {
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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
         {/* Animated gradient blobs */}
         <motion.div
            animate={{
               scale: [1, 1.2, 1],
               opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
               duration: 8,
               repeat: Infinity,
               ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-brand-cyan/20 to-blue-500/20 rounded-full blur-3xl"
         />
         <motion.div
            animate={{
               scale: [1, 1.3, 1],
               opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
               duration: 10,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 2
            }}
            className="absolute bottom-10 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-400/15 to-blue-600/15 rounded-full blur-3xl"
         />

         <div className="absolute top-0 right-0 w-[60%] h-full bg-[#0A1A2F] text-white rounded-bl-[100px] shadow-2xl shadow-slate-200/50 -z-10 hidden lg:block" />

         <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
               >
                  <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 text-brand-cyan text-xs font-bold uppercase mb-8 border border-cyan-100">
                     <BarChart3 className="w-4 h-4" style={{ stroke: 'url(#icon-gradient)' }} />
                     Data Intelligence
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                     Turn Raw Data Into <br />
                     <span className="relative inline-block">
                        <span className="relative z-10 text-brand-cyan">Strategic Assets</span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-cyan-100/50 -z-0"></span>
                     </span>
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
                     {shortDescription}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                     <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-deep text-white font-medium rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 group">
                        Get Insights
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                     </a>
                  </motion.div>
               </motion.div>

               {/* Visual: Floating Dashboard Cards (Bento Style) */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative h-[600px] w-full hidden md:block"
               >
                  {/* Card 1: Main Graph */}
                  <motion.div
                     whileHover={{ scale: 1.02 }}
                     className="absolute top-10 left-10 w-[400px] bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20"
                  >
                     <div className="flex justify-between items-center mb-6">
                        <div>
                           <div className="text-sm text-slate-400 font-medium">Monthly Revenue</div>
                           <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-deep">$124,500</div>
                        </div>
                        <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                           <TrendingUp className="w-3 h-3" /> +12%
                        </div>
                     </div>
                     {/* CSS Bar Chart */}
                     <div className="flex items-end gap-3 h-32">
                        <div className="w-full bg-slate-50 rounded-t-lg h-[40%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-slate-50 rounded-t-lg h-[60%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-slate-50 rounded-t-lg h-[30%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-slate-50 rounded-t-lg h-[80%] hover:bg-brand-cyan transition-colors"></div>
                        <div className="w-full bg-[#0A1A2F] rounded-t-lg h-[95%] shadow-lg shadow-blue-900/30"></div>
                     </div>
                  </motion.div>

                  {/* Card 2: Pie Chart / Segments - floating right */}
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="absolute top-40 right-0 w-[280px] bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 z-10"
                  >
                     <div className="text-sm text-slate-400 font-medium mb-4">User Demographics</div>
                     <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full border-[6px] border-brand-cyan border-r-cyan-200 border-b-cyan-200 rotate-45"></div>
                        <div className="text-sm space-y-1">
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-cyan"></div> New</div>
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-200"></div> Returning</div>
                        </div>
                     </div>
                  </motion.div>

                  {/* Card 3: Data Source Badge - bottom left */}
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="absolute bottom-20 left-0 bg-[#0A1A2F] text-white p-6 rounded-3xl shadow-2xl shadow-blue-900/30 z-30 flex items-center gap-4"
                  >
                     <div className="bg-white/10 p-3 rounded-xl border border-brand-cyan/30">
                        <Database className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                     </div>
                     <div>
                        <div className="font-bold">Real-time Sync</div>
                        <div className="text-xs text-slate-400">PostgreSQL • Snowflake • AWS</div>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
