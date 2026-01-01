
import { ServiceData } from "@/config/services"
import { CheckCircle2, User, Users, Code, Globe, MessageSquare, Clock, ArrowRight, Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"

export function HireDevelopersLayout({ service }: { service: ServiceData }) {
    // Helper to get icons safely
    const FeatureIcon1 = service.features[0].icon;
    const FeatureIcon2 = service.features[1].icon;
    const FeatureIcon3 = service.features[2].icon;
    const FeatureIcon4 = service.features[3].icon;

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />

            {/* Hero: People-Centric / Trust */}
            <section className="relative pt-32 pb-24 px-6 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase mb-6">
                                <Users className="w-3 h-3" />
                                Staff Augmentation
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                Scale Your Team, <br />
                                <span className="text-blue-600">Not Your Overhead.</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                                {service.shortDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-deep text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
                                    View Developer Profiles
                                </a>
                            </div>
                        </div>

                        {/* Visual: Profile Cards Stack */}
                        <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
                            {/* Background Elements */}
                            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl transform scale-75"></div>

                            {/* Card 3 (Back) */}
                            <div className="absolute top-10 right-10 w-64 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 opacity-60 scale-90 rotate-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                    <div>
                                        <div className="h-3 w-24 bg-slate-200 rounded mb-1"></div>
                                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 (Middle) */}
                            <div className="absolute top-6 right-6 w-64 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 opacity-80 scale-95 rotate-3">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">JD</div>
                                    <div>
                                        <div className="font-bold text-sm">Jane Doe</div>
                                        <div className="text-xs text-slate-400">Senior UX Designer</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <span className="text-[10px] bg-slate-50 border px-1.5 py-0.5 rounded">Figma</span>
                                    <span className="text-[10px] bg-slate-50 border px-1.5 py-0.5 rounded">React</span>
                                </div>
                            </div>

                            {/* Card 1 (Front) - Full Detail */}
                            <div className="relative w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-10 hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                                        JS
                                    </div>
                                    <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Available
                                    </div>
                                </div>

                                <h3 className="font-bold text-xl text-slate-900">John Smith</h3>
                                <p className="text-sm text-slate-500 mb-4">Senior Full Stack Engineer</p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Code className="w-4 h-4 text-blue-500" /> 8+ Years Experience
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Globe className="w-4 h-4 text-blue-500" /> EST Timezone overlap
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-2">
                                    <span className="bg-slate-50 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-200">React</span>
                                    <span className="bg-slate-50 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-200">Node.js</span>
                                    <span className="bg-slate-50 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-200">AWS</span>
                                </div>
                            </div>

                            {/* Floaters */}
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 flex items-center gap-3 animate-bounce-slow">
                                <Shield className="w-8 h-8" style={{ stroke: 'url(#icon-gradient)' }} />
                                <div>
                                    <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-deep">Top 1%</div>
                                    <div className="text-xs text-slate-500">Vetted Talent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features - Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Hire Through Us?</h2>
                        <p className="text-slate-500 text-lg">{service.fullDescription}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-brand-cyan/20 group hover:shadow-lg">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                <FeatureIcon1 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">{service.features[0].title}</h3>
                                <p className="text-slate-500 leading-relaxed">{service.features[0].description}</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-brand-cyan/20 group hover:shadow-lg">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                <FeatureIcon2 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">{service.features[1].title}</h3>
                                <p className="text-slate-500 leading-relaxed">{service.features[1].description}</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-brand-cyan/20 group hover:shadow-lg">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                <FeatureIcon3 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">{service.features[2].title}</h3>
                                <p className="text-slate-500 leading-relaxed">{service.features[2].description}</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <FeatureIcon4 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">{service.features[3].title}</h3>
                                <p className="text-slate-500 leading-relaxed">{service.features[3].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process - Step Cards */}
            <section className="py-24 px-6 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-16 text-center">Hiring Made Simple</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-5xl font-bold text-slate-700 absolute top-4 right-6 select-none opacity-50">{step.step}</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 text-blue-400">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study - Success Story */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">{service.caseStudy.title}</h2>
                        <div className="text-blue-600 font-bold uppercase text-xs tracking-widest mt-2">{service.caseStudy.clientIndustry}</div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span> Challenge
                            </h4>
                            <p className="text-slate-600 text-sm">{service.caseStudy.challenge}</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Solution
                            </h4>
                            <p className="text-slate-600 text-sm">{service.caseStudy.solution}</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Results
                            </h4>
                            <ul className="space-y-3">
                                {service.caseStudy.results.map((res, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                        {res}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Your Perfect Match</h2>
                    <ConsultancyForm serviceName={service.title} />
                </div>
            </section>
        </div>
    )
}
