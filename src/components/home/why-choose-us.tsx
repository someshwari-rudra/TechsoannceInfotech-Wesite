"use client"

import { motion } from "framer-motion"
import {
  Rocket,
  Layout,
  Users,
  Wallet,
  Zap,
  CheckCircle2,
  LucideIcon
} from "lucide-react"

// Enhanced content for Techsonance Infotech LLP
const features = [
  {
    icon: Rocket,
    title: "Strategic Vision & Roadmap",
    description: "We don't just write code; we architect success. By leveraging industry-leading tools like Jira and GitHub, we craft progressive roadmaps that keep your goals in clear focus and your milestones on track.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Layout,
    title: "Streamlined Execution",
    description: "Efficiency isn't just a buzzword—it's our protocol. Our agile methodologies and precise project management ensure seamless execution, delivering complex solutions with clarity and speed.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Tailored Engagement",
    description: "Your business is unique, and your engagement model should be too. Whether you need a dedicated team or a project-based squad, we adapt our workflow to fit your specific operational needs.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Wallet,
    title: "Value-Driven Excellence",
    description: "Premium quality shouldn't come with an exorbitant price tag. We engineer cost-effective, high-impact solutions that maximize your ROI without compromising on performance or aesthetics.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    icon: Zap,
    title: "Unwavering Reliability",
    description: "In a fast-paced digital world, consistency is currency. We pride ourselves on delivering fully-featured, bug-free projects before the deadline, every single time.",
    gradient: "from-rose-500 to-pink-500"
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Enhanced Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-brand-cyan/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-gradient-to-tr from-purple-500/10 to-brand-deep/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        {/* Premium Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          {/* Decorative Top Badge */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-cyan" />
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-blue-500/10 border border-brand-cyan/20 text-xs font-bold text-brand-cyan uppercase tracking-[0.2em] backdrop-blur-sm">
              The Techsonance Advantage
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-cyan" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
            Why Choose{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-500 to-brand-deep">
                Techsonance?
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-blue-500 to-brand-deep rounded-full opacity-30" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We merge technical expertise with business intelligence to build digital products that{' '}
            <span className="font-semibold text-brand-dark">scale</span>,{' '}
            <span className="font-semibold text-brand-dark">perform</span>, and{' '}
            <span className="font-semibold text-brand-dark">inspire</span>.
          </p>
        </motion.div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}

          {/* Premium CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative flex flex-col justify-center items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white text-center overflow-hidden group cursor-pointer shadow-2xl shadow-brand-dark/20"
          >
            {/* Animated Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,255,0.3),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.2),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            <div className="relative z-10">
              {/* Icon with Glow Effect */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-6">
                <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center backdrop-blur-sm border border-brand-cyan/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" style={{ stroke: 'url(#icon-gradient)' }} />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                Join the roadmap to digital transformation with a team that actually cares about your growth.
              </p>
              <button className="px-8 py-4 rounded-xl bg-white text-brand-dark font-bold hover:bg-brand-cyan hover:text-white transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-brand-cyan/30 active:scale-95 group-hover:scale-105">
                Let's Talk Business
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  index
}: {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full bg-white/80 backdrop-blur-sm hover:bg-white rounded-3xl p-8 sm:p-9 md:p-10 border-2 border-slate-100 hover:border-brand-cyan/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-cyan/10"
    >


      <div className="relative z-10">
        {/* Number Badge */}
        <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200 rounded-2xl flex items-center justify-center font-bold text-slate-400 text-sm sm:text-base group-hover:border-brand-cyan/50 group-hover:text-brand-cyan transition-all duration-300 shadow-lg">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Premium Icon Container */}
        <div className="relative mb-6">
          {/* Icon Box */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-cyan" />
          </div>
        </div>

        {/* Title with Gradient Hover Effect */}
        <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  )
}
