"use client"

import { motion } from "framer-motion"
import { Check, X, ArrowRight, Zap, Shield, Users, Clock, ChevronDown, MessageSquare, Phone, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useState } from "react"

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const plans = [
        {
            name: "Starter",
            hourlyRate: "$15",
            monthlyCommitment: "$1,200",
            hours: "80 hours/month",
            description: "Perfect for small projects and MVPs",
            features: [
                "1 Dedicated Developer",
                "80 Hours/Month Minimum",
                "No Rollover Hours",
                "48-Hour Response Time",
                "Email Support",
                "Weekly Progress Reports",
                "Source Code Ownership",
                "NDA Protection",
                "15 Days Free Trial"
            ],
            notIncluded: [
                "Priority Support",
                "Dedicated Project Manager",
                "24/7 Availability"
            ],
            popular: false,
            color: "from-slate-600 to-slate-800"
        },
        {
            name: "Growth",
            hourlyRate: "$22",
            monthlyCommitment: "$5,280",
            hours: "240 hours/month",
            description: "Best for growing businesses",
            features: [
                "3 Dedicated Developers",
                "240 Hours/Month Minimum",
                "20% Rollover Hours (48 hrs)",
                "24-Hour Response Time",
                "Email & Slack Support",
                "Bi-weekly Progress Reports",
                "Dedicated Project Manager",
                "Source Code Ownership",
                "NDA Protection",
                "15 Days Free Trial",
                "Priority Bug Fixes"
            ],
            notIncluded: [
                "24/7 Phone Support"
            ],
            popular: true,
            color: "from-brand-cyan to-blue-600"
        },
        {
            name: "Pro",
            hourlyRate: "$20",
            monthlyCommitment: "$9,600",
            hours: "480 hours/month",
            description: "For established companies",
            features: [
                "6 Dedicated Developers",
                "480 Hours/Month Minimum",
                "30% Rollover Hours (144 hrs)",
                "12-Hour Response Time",
                "Email, Slack & Phone Support",
                "Daily Progress Reports",
                "Dedicated Project Manager",
                "Source Code Ownership",
                "NDA Protection",
                "15 Days Free Trial",
                "Priority Support",
                "Custom SLA Available"
            ],
            notIncluded: [],
            popular: false,
            color: "from-purple-600 to-purple-800"
        },
        {
            name: "Enterprise",
            hourlyRate: "Custom",
            monthlyCommitment: "Custom",
            hours: "Unlimited",
            description: "For large-scale projects",
            features: [
                "10+ Dedicated Developers",
                "Flexible Hour Commitments",
                "50% Rollover Hours",
                "Immediate Response Time",
                "24/7 Multi-Channel Support",
                "Real-time Dashboards",
                "Dedicated Account Manager",
                "Source Code Ownership",
                "NDA Protection",
                "15 Days Free Trial",
                "White-Glove Onboarding",
                "Custom SLA Guaranteed",
                "Quarterly Business Reviews"
            ],
            notIncluded: [],
            popular: false,
            color: "from-orange-600 to-red-600"
        }
    ]

    const faqs = [
        {
            question: "How does hourly billing work?",
            answer: "You pay only for the hours your dedicated developers work on your project. Each plan includes a minimum monthly hour commitment at a discounted hourly rate. Hours are tracked transparently through our time-tracking system, and you receive detailed reports."
        },
        {
            question: "What happens to unused hours?",
            answer: "Depending on your plan, unused hours can roll over to the next month (Growth: 20%, Pro: 30%, Enterprise: 50%). Starter plan hours don't roll over. Rollover hours expire after 60 days if not used."
        },
        {
            question: "Can I upgrade or downgrade my plan?",
            answer: "Absolutely! You can upgrade anytime and the change takes effect immediately. Downgrades take effect at the start of your next billing cycle. We'll work with you to ensure a smooth transition."
        },
        {
            question: "What if I need more hours than my plan includes?",
            answer: "Additional hours beyond your plan commitment are billed at your plan's hourly rate + $5/hour. We'll notify you before any overage occurs so you can decide whether to proceed or adjust scope."
        },
        {
            question: "Is there a long-term contract?",
            answer: "No long-term contracts required. All plans are month-to-month. You can cancel anytime with 30 days' notice. We believe in earning your business every month through exceptional work."
        },
        {
            question: "What's included in the 15-day free trial?",
            answer: "Your trial includes up to 40 hours of development work with a dedicated developer, full access to our project management tools, and daily communication. No credit card required to start."
        },
        {
            question: "How do you ensure quality and transparency?",
            answer: "All work is tracked in real-time using tools like Jira and Toggl. You'll have access to daily standups, code repositories, and detailed time logs. We also conduct regular code reviews and provide comprehensive documentation."
        },
        {
            question: "What technologies do your developers specialize in?",
            answer: "Our developers are experts in React, Node.js, Python, React Native, Flutter, AWS, and more. We'll match you with developers who have proven experience in your specific tech stack."
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-brand-cyan rounded-full text-sm font-semibold mb-6">
                            <Clock className="w-4 h-4" />
                            Transparent Hourly Billing
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Pay Only for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-600">Hours Worked</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Flexible, transparent pricing with no hidden fees. Choose a plan that scales with your needs, and only pay for the development hours you use.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-slate-600 mb-12">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-brand-cyan" />
                                <span className="font-medium">15 Days Free Trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-brand-cyan" />
                                <span className="font-medium">No Long-term Contracts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-brand-cyan" />
                                <span className="font-medium">Cancel Anytime</span>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">How Hourly Billing Works</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div>
                                    <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-brand-cyan">1</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">Choose Your Plan</h4>
                                    <p className="text-sm text-slate-600">Select a monthly hour commitment that matches your project needs. Lower hourly rates for higher commitments.</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-brand-cyan">2</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">Track Time Transparently</h4>
                                    <p className="text-sm text-slate-600">Every hour is logged in real-time. You get daily reports showing exactly what was worked on and for how long.</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-brand-cyan">3</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">Pay Only for Work Done</h4>
                                    <p className="text-sm text-slate-600">Monthly billing based on hours used. Unused hours roll over (on eligible plans). No surprises, total transparency.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Perfect Plan</h2>
                        <p className="text-lg text-slate-600">All plans include dedicated developers, transparent time tracking, and source code ownership</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl shadow-xl border-2 ${plan.popular ? 'border-brand-cyan lg:scale-105' : 'border-slate-200'
                                    } overflow-hidden hover:shadow-2xl transition-all duration-300`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-cyan to-blue-600 text-white px-4 py-1.5 text-xs font-bold rounded-bl-2xl">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                                    <p className="text-slate-600 text-sm mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-4xl font-extrabold text-brand-cyan">{plan.hourlyRate}</span>
                                            <span className="text-slate-600">/hour</span>
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            <div className="font-semibold">{plan.hours}</div>
                                            <div>{plan.monthlyCommitment}/month</div>
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className={`w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 text-sm ${plan.popular
                                            ? 'bg-gradient-to-r from-brand-cyan to-[#29619e] text-white hover:shadow-lg hover:shadow-cyan-500/30'
                                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                            }`}
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    <div className="mt-6 space-y-3">
                                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">What's Included:</div>
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-2.5 h-2.5 text-green-600" />
                                                </div>
                                                <span className="text-slate-700 text-xs leading-relaxed">{feature}</span>
                                            </div>
                                        ))}

                                        {plan.notIncluded.length > 0 && (
                                            <>
                                                {plan.notIncluded.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 opacity-50">
                                                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                                            <X className="w-2.5 h-2.5 text-slate-400" />
                                                        </div>
                                                        <span className="text-slate-500 text-xs leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Everything you need to know about our pricing</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-lg transition-all duration-200 overflow-hidden">
                                        {/* Question */}
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full px-6 md:px-8 py-5 md:py-6 flex items-start gap-3 md:gap-4 text-left min-h-[60px]"
                                        >
                                            <div className="flex-1">
                                                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-brand-cyan transition-colors">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-brand-cyan" />
                                            </motion.div>
                                        </button>

                                        {/* Answer with AnimatePresence */}
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                                                    <div className="h-px bg-gradient-to-r from-brand-cyan/20 to-transparent mb-3 md:mb-4" />
                                                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-brand-cyan to-blue-600">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Start your 15-day free trial today. No credit card required. No strings attached.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link
                            href="/contact"
                            className="bg-white text-brand-cyan px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-100 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Get Started Free
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Book a Call
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Request a Quote
                        </Link>
                    </div>

                    <p className="text-center text-white/80 text-sm mt-8">
                        Questions? Email us at <a href="mailto:admin@techsonance.co.in" className="underline font-semibold">admin@techsonance.co.in</a> or call us anytime.
                    </p>
                </div>
            </section>
        </div>
    )
}
