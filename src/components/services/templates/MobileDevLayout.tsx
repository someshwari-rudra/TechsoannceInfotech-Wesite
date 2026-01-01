
import { ServiceData } from "@/config/services"
import { CheckCircle2, Smartphone, ArrowRight, AppWindow, Wifi, Lock, Fingerprint, Battery } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"

export function MobileDevLayout({ service }: { service: ServiceData }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-100">
            <Navbar />

            {/* Hero: Vibrant "App Store" Dark/Gradient Vibe */}
            <section
                className="relative pt-32 pb-20 px-6 overflow-hidden rounded-b-[3rem] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/mobile.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0A1A2F]/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/60 to-[#0A1A2F]/90" />
                {/* Abstract Background Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6">
                                <Smartphone className="w-3 h-3" />
                                Native & Cross-Platform
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Your Brand, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
                                    In Their Pocket.
                                </span>
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                                {service.shortDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-deep text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-500/20 hover:scale-105">
                                    Start Building
                                </a>
                            </div>
                        </div>

                        {/* Visual: Mobile App Image - Enhanced */}
                        <div className="flex-1 relative">
                            {/* Decorative background elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-blue-500/10 rounded-full blur-3xl"></div>

                            {/* Main image container with 3D effect */}
                            <div className="relative mx-auto max-w-md perspective-1000">
                                <div className="relative transform hover:scale-105 transition-transform duration-500 ease-out">
                                    {/* Glow effect behind image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 to-blue-500/30 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>

                                    {/* Main image */}
                                    <img
                                        src="/mobile.jpg"
                                        alt="Mobile App Development - iOS & Android Apps"
                                        className="relative w-full h-auto rounded-3xl shadow-2xl shadow-cyan-500/30 border-4 border-white/10"
                                    />

                                    {/* Floating badge - Top right */}
                                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-cyan to-blue-600 text-white px-4 py-2 rounded-full shadow-lg shadow-cyan-500/50 animate-bounce">
                                        <div className="flex items-center gap-2">
                                            <Smartphone className="w-4 h-4" />
                                            <span className="text-xs font-bold">Native Apps</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative dots pattern */}
                            <div className="absolute top-10 right-0 grid grid-cols-3 gap-2 opacity-20">
                                <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                                <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                                <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                                <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                                <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                                <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Intro & Features - "Widget" Style Cards */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-20 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1A2F] mb-6 font-display">
                                Designed for the <br /><span className="text-brand-cyan">Thumb Zone.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {service.fullDescription}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Decorative Stats Cards */}
                            <div className="p-6 bg-white rounded-3xl shadow-lg shadow-cyan-100 border border-slate-100">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-deep mb-1">4.8</div>
                                <div className="text-sm font-semibold text-slate-500">App Store Rating</div>
                            </div>
                            <div className="p-6 bg-white rounded-3xl shadow-lg shadow-blue-100 border border-slate-100 mt-8">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-deep mb-1">99%</div>
                                <div className="text-sm font-semibold text-slate-500">Crash-Free Users</div>
                            </div>
                            <div className="p-6 bg-[#0A1A2F] rounded-3xl shadow-xl text-white">
                                <Lock className="w-8 h-8 mb-4 text-brand-cyan" /> {/* Keep solid on dark bg */}
                                <div className="text-sm font-semibold text-slate-300">Biometric<br />Security</div>
                            </div>
                            <div className="p-6 bg-white rounded-3xl border border-brand-cyan/20 mt-8 shadow-sm">
                                <Fingerprint className="w-8 h-8 mb-4" style={{ stroke: 'url(#icon-gradient)' }} />
                                <div className="text-sm font-semibold text-cyan-900">TouchID<br />Ready</div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-4 gap-6">
                        {service.features.map((feature, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-white border border-brand-cyan/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                                    <feature.icon className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                                </div>
                                <h3 className="font-bold text-lg text-[#0A1A2F] mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - "Timeline" Style */}
            <section className="py-24 px-6 bg-[#0A1A2F] text-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Lifecycle</h2>
                        <p className="text-slate-400">From concept to App Store, efficiently.</p>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                {/* Icon/Dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A1A2F] bg-slate-800 text-brand-cyan shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-xs font-bold">{step.step}</span>
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/50 transition-colors">
                                    <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-400">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-[#0A1A2F] rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl shadow-blue-900/20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-32 bg-brand-cyan/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    Featured Case Study
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.caseStudy.title}</h2>
                                <div className="space-y-6 text-slate-300">
                                    <div>
                                        <div className="text-xs uppercase opacity-70 mb-1">Challenge</div>
                                        <p>{service.caseStudy.challenge}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase opacity-70 mb-1">Solution</div>
                                        <p>{service.caseStudy.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                <h4 className="font-bold text-xl mb-6">Key Outcomes</h4>
                                <ul className="space-y-4">
                                    {service.caseStudy.results.map((result, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                                            <span className="font-medium">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">Ready to Launch?</h2>
                    <ConsultancyForm serviceName={service.title} />
                </div>
            </section>
        </div>
    )
}
