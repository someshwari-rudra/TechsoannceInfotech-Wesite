import { ServiceData } from "@/config/services"
import { CheckCircle2, TrendingUp, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"
import { EcommerceHero } from "./EcommerceHero"

export function EcommerceLayout({ service }: { service: ServiceData }) {

    // Helper to get icons safely (for the server-rendered part)
    const FeatureIcon1 = service.features[0].icon;
    const FeatureIcon2 = service.features[1].icon;
    const FeatureIcon3 = service.features[2].icon;
    const FeatureIcon4 = service.features[3].icon;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-100">
            <Navbar />

            <EcommerceHero shortDescription={service.shortDescription} />

            {/* Features - Conversion Funnel Grid */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold mb-4 text-[#0A1A2F]">Built for Transactions</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">{service.fullDescription}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                <FeatureIcon1 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[0].title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{service.features[0].description}</p>
                        </div>
                        {/* Repeat manual mapping to ensure no errors with loop variables */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                <FeatureIcon2 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[1].title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{service.features[1].description}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                <FeatureIcon3 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[2].title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{service.features[2].description}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-14 h-14 bg-white border border-brand-cyan/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                <FeatureIcon4 className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-[#0A1A2F]">{service.features[3].title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{service.features[3].description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process - Horizontal Funnel */}
            <section className="py-24 px-6 bg-[#0A1A2F] text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-16 text-center">Path to Purchase</h2>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-750 transition-colors">
                                    <div className="w-12 h-12 bg-brand-cyan text-[#0A1A2F] rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Phase {idx + 1}</p>
                                    <p className="text-sm text-slate-300">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 items-center">
                        <div className="flex-1">
                            <div className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-2">Success Story</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mb-6">{service.caseStudy.title}</h2>
                            <div className="prose prose-neutral mb-8">
                                <p className="italic text-slate-500 mb-4">"{service.caseStudy.challenge}"</p>
                                <p className="font-medium text-slate-900">{service.caseStudy.solution}</p>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h3 className="font-bold text-lg mb-6 text-[#0A1A2F]">Growth Metrics</h3>
                            <div className="space-y-4">
                                {service.caseStudy.results.map((res, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                                            <TrendingUp className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-[#29619e]">{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">Start Selling More</h2>
                    <ConsultancyForm serviceName={service.title} />
                </div>
            </section>
        </div>
    )
}
