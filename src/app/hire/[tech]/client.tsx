"use client"

import { motion } from "framer-motion"
import { hireDevelopersConfig } from "@/config/hire-developers"
import { CheckCircle2, AlertCircle, Loader2, CalendarClock, Search, Users, Handshake } from "lucide-react"
import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
// import { sendConsultancyEmail } from "@/actions/consultancy"

export function HireTechClient({ techSlug }: { techSlug: string }) {
    const content = (hireDevelopersConfig.content as any)[techSlug as string]

    const [isPending, startTransition] = useTransition()
    const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

    async function handleSubmit(formData: FormData) {
        setFormStatus({ type: null, message: '' })
        startTransition(async () => {
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1000))

            console.log('Form submitted:', Object.fromEntries(formData))
            // Mock success for static export
            setFormStatus({ type: 'success', message: 'Request received! We will contact you shortly.' })
        })
    }

    if (!content) {
        return (
            <div className="min-h-screen pt-32 text-center text-slate-900">
                <h1 className="text-4xl font-bold">Technology Not Found</h1>
                <p className="mt-4 text-slate-600">The technology you are looking for does not exist.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-0">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-4"
                    >
                        <div className="inline-block px-3 py-1.5 bg-cyan-50 text-brand-cyan rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
                            Hire {content.tech} Developer
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
                            {content.title}
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                            {content.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <FeatureItem text="99% customer satisfaction" />
                            <FeatureItem text="7+ years of expertise" />
                            <FeatureItem text="NDA protection" />
                            <FeatureItem text="Flexible contracts" />
                            <FeatureItem text="Transparent pricing" />
                            <FeatureItem text="15 days Free Trial" />
                            <FeatureItem text="4-step hiring process" />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    const form = document.getElementById('hire-form');
                                    if (form) {
                                        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                }}
                                className="px-6 py-3.5 bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-200 hover:shadow-lg shadow-cyan-500/20"
                            >
                                Start 15 Days 100% FREE Trial
                            </button>
                            <a
                                href="/pricing"
                                className="px-6 py-3.5 bg-white text-brand-cyan border-2 border-brand-cyan font-semibold rounded-lg hover:bg-cyan-50 transition-all duration-200 inline-flex items-center"
                            >
                                Checkout Our Pricing
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-xl scroll-mt-24"
                        id="hire-form"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            Reduce The Project <span className="text-brand-cyan">Costs By 30%</span>
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            We are awarded 5/5 ratings by clients for our exceptional mobile and web app development services.
                        </p>

                        {formStatus.type === 'success' ? (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                {formStatus.message}
                            </div>
                        ) : (
                            <form action={handleSubmit} className="space-y-4">
                                <input type="hidden" name="service" value={`Hire ${content.tech} Developer`} />

                                <Input name="name" placeholder="Full Name" className="bg-gray-50 border-gray-200 h-12 focus:border-brand-cyan focus:ring-brand-cyan" required />
                                <Input name="email" placeholder="Email Address" type="email" className="bg-gray-50 border-gray-200 h-12 focus:border-brand-cyan focus:ring-brand-cyan" required />
                                <Input name="phone" placeholder="Contact Number" className="bg-gray-50 border-gray-200 h-12 focus:border-brand-cyan focus:ring-brand-cyan" />
                                <Textarea name="message" placeholder="Message" className="bg-gray-50 border-gray-200 min-h-[100px] focus:border-brand-cyan focus:ring-brand-cyan" required />

                                <div className="border border-gray-200 bg-gray-50 p-3 rounded flex items-center gap-3 w-fit">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded" />
                                    <span className="text-sm text-gray-700">I'm not a robot</span>
                                    <div className="ml-2 flex flex-col items-center opacity-60">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="w-5" />
                                        <span className="text-[8px] text-gray-500">reCAPTCHA</span>
                                    </div>
                                </div>

                                {formStatus.type === 'error' && (
                                    <div className="text-red-500 text-sm flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> {formStatus.message}
                                    </div>
                                )}

                                <Button
                                    disabled={isPending}
                                    className="w-full h-12 bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-105 text-white font-semibold text-base rounded-lg shadow-md transition-all duration-200 shadow-cyan-500/20"
                                >
                                    {isPending ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                                    {isPending ? "Sending..." : "Get FREE Expert Consultation"}
                                </Button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>

            {/* Value Proposition Banner */}
            <div className="w-full border-t border-gray-200 flex flex-col lg:flex-row">

                {/* Left: Features */}
                <div className="flex-1 bg-cyan-50/30 py-12 md:py-16 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <ValueItem icon={CalendarClock} title="On-Time Delivery" />
                            <ValueItem icon={Search} title="100% Transparency" />
                            <ValueItem icon={Users} title="One-to-one Communication" />
                            <ValueItem icon={Handshake} title="Engagement Models" />
                        </div>
                    </div>
                </div>

                {/* Right: CTA */}
                <div className="lg:w-[420px] bg-cyan-50 py-12 md:py-16 px-6 md:px-10 flex flex-col justify-center items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight relative z-10">
                        Empower <span className="text-brand-cyan">Your Business</span> with Dedicated Developers
                    </h3>

                    <button
                        onClick={() => {
                            const form = document.getElementById('hire-form');
                            if (form) {
                                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }}
                        className="bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-105 text-white font-semibold py-3.5 px-8 text-base rounded-lg shadow-md relative z-10 transition-all duration-200 hover:shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                    >
                        Hire Us
                    </button>
                </div>

            </div>
        </div>
    )
}

function ValueItem({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex flex-col items-center text-center space-y-3 group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-sm flex items-center justify-center border border-cyan-100 group-hover:scale-105 transition-transform duration-200">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand-cyan" />
            </div>
            <span className="text-gray-700 font-semibold text-xs md:text-sm max-w-[100px] md:max-w-[120px]">{title}</span>
        </div>
    )
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-brand-cyan flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-700 font-medium text-sm">{text}</span>
        </div>
    )
}
