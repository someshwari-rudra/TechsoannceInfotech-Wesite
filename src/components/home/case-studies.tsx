"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"

const caseStudies = [
  {
    number: "01",
    title: "Custom Modular POS System",
    category: "FINTECH & HOSPITALITY",
    description: "A Progressive Web App engineered for offline reliability. Features a modular architecture where businesses only enable and pay for the features they actually use.",
    imgSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "PWA"],
    link: "/case-studies/transaction-engine",
  },
  {
    number: "02",
    title: "Skill 2 Career AI",
    category: "EDTECH & CAREER",
    description: "A comprehensive career platform for students and job seekers. Find off-portal jobs, practice with AI-powered mock interviews, and access scholarship support—all in one place.",
    imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "OpenAI", "Python", "MongoDB"],
    link: "/case-studies/skill-2-career-ai",
  },
  {
    number: "03",
    title: "Futurise Desktop",
    category: "WEB APPLICATION",
    description: "A cutting-edge web application that combines modern technologies to deliver an exceptional user experience. Built with React, TypeScript, Vite, and Tailwind CSS for performance and scalability.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Vite", "Tailwind"],
    link: "/case-studies/futurise-desktop",
  },
  {
    number: "04",
    title: "Interactive LMS Platform",
    category: "EDTECH INFRASTRUCTURE",
    description: "A comprehensive Learning Management System with high-concurrency video streaming, real-time progress tracking, interactive assessments, and advanced analytics. Supports 10,000+ concurrent users.",
    imgSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    technologies: ["Next.js", "WebRTC", "Redis", "AWS"],
    link: "/case-studies/lms-platform",
  }
]

export function CaseStudies() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-brand-cyan font-bold tracking-wider uppercase text-sm mb-4 block">
            Proprietary Enterprise Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
            Engineering Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Showcasing our best work - where creativity meets functionality
          </p>
        </motion.div>

        {/* Case Studies - Vertical Stack with Alternating Layout */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              <ProjectCard
                {...study}
                imageOnRight={index % 2 !== 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
