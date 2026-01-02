"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap, Code } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("all")

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Apps" },
        { id: "mobile", label: "Mobile Apps" },
        { id: "cloud", label: "Cloud & DevOps" },
        { id: "ai", label: "AI & ML" },
        { id: "ecommerce", label: "E-Commerce" }
    ]

    const projects = [
        {
            id: 1,
            title: "Custom Modular POS System",
            category: "web",
            slug: "transaction-engine",
            image: "/mock-up-1.png",
            description: "Progressive Web App with offline-first architecture for hospitality businesses",
            tags: ["PWA", "React", "Node.js"],
            color: "from-orange-500 to-red-500"
        },
        {
            id: 2,
            title: "Skill 2 Career AI",
            category: "ai",
            slug: "skill-2-career-ai",
            image: "/skill2career-mockup.png",
            description: "AI-powered platform for job matching and interview preparation",
            tags: ["AI/ML", "React", "OpenAI"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            title: "Futurise Desktop",
            category: "web",
            slug: "futurise-desktop",
            image: "/futurise-desktop-mockup.png",
            description: "Unified desktop application for team collaboration and workflow management",
            tags: ["Electron", "React", "WebSockets"],
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            title: "Enterprise LMS Platform",
            category: "web",
            slug: "lms-platform",
            image: "/lms-dashboard.png",
            description: "Scalable Learning Management System with interactive courses and analytics",
            tags: ["React", "Node.js", "PostgreSQL"],
            color: "from-green-500 to-teal-500"
        },
        {
            id: 5,
            title: "E-Commerce Platform",
            category: "ecommerce",
            slug: null,
            image: "/ecommerce-mockup.png",
            description: "Headless e-commerce solution with multi-vendor marketplace features",
            tags: ["Next.js", "Stripe", "Redis"],
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 6,
            title: "Healthcare Management System",
            category: "web",
            slug: null,
            image: "/healthcare-mockup.png",
            description: "HIPAA-compliant system with EHR, telemedicine, and billing integration",
            tags: ["React", "AWS", "WebRTC"],
            color: "from-red-500 to-pink-500"
        },
        {
            id: 7,
            title: "Real Estate Portal",
            category: "web",
            slug: null,
            image: "/real-estate-mockup.png",
            description: "Modern platform with 3D virtual tours and AI-powered property matching",
            tags: ["Next.js", "Three.js", "Maps API"],
            color: "from-indigo-500 to-blue-500"
        },
        {
            id: 8,
            title: "Supply Chain Dashboard",
            category: "cloud",
            slug: null,
            image: "/supply-chain-mockup.png",
            description: "Real-time analytics dashboard with IoT integration and predictive forecasting",
            tags: ["React", "Python", "AWS IoT"],
            color: "from-cyan-500 to-blue-500"
        }
    ]

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const stats = [
        { value: "2+", label: "Years in Business", icon: CheckCircle2 },
        { value: "100%", label: "Client Satisfaction", icon: Users },
        { value: "5+", label: "Industries Served", icon: TrendingUp },
        { value: "24/7", label: "Support Available", icon: Zap }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('/portfolio-hero-bg.png')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-deep/80 to-brand-dark/80" />

                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-10 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-cyan/10 to-[#29619e]/10 backdrop-blur-sm border border-brand-cyan/20 rounded-full text-sm font-medium mb-6 text-brand-cyan">
                            <Code className="w-4 h-4" style={{ stroke: 'url(#portfolio-gradient)' }} />
                            Our Work Portfolio
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e]">Speaks for Itself</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Transforming businesses through innovative software solutions. Real projects, real results, real impact.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                                <span>Proven Track Record</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-brand-cyan" />
                                <span>Measurable Results</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-brand-cyan" />
                                <span>Client-Focused Approach</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Local Gradient Definition for Portfolio Page */}
                    <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true">
                        <defs>
                            <linearGradient id="portfolio-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#29619e" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-white border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-cyan/10 to-[#29619e]/10 rounded-xl mb-4 border border-brand-cyan/10">
                                    <stat.icon className="w-6 h-6" style={{ stroke: 'url(#portfolio-gradient)' }} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-[#29619e] mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section with Category Tabs */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] mb-4">Featured Projects</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Explore our portfolio of successful projects across various industries and technologies
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-brand-cyan to-[#29619e] text-white shadow-lg shadow-brand-cyan/30'
                                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-brand-cyan/50'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {project.slug ? (
                                    <Link
                                        href={`/case-studies/${project.slug}`}
                                        className="group block bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                                    >
                                        {/* Project Image */}
                                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-[#29619e] transition-all">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-xs rounded-full font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* View Case Study Link */}
                                            <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e] font-bold text-sm group-hover:gap-3 transition-all">
                                                View Case Study
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="block bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden opacity-75">
                                        {/* Project Image */}
                                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Coming Soon */}
                                            <div className="text-slate-500 font-semibold text-sm">
                                                Case Study Coming Soon
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* No Results Message */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-slate-600 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-brand-cyan to-[#29619e]">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's transform your ideas into reality. Our team is ready to deliver results that exceed expectations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-brand-cyan font-bold rounded-xl hover:bg-slate-100 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white font-bold rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
