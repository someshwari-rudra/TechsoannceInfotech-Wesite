"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Clock, Globe, CheckCircle2, ArrowRight, Loader2, Shield, Zap, Users, MessageSquare, Wrench, Rocket, Sparkles } from "lucide-react"
import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/actions/contact"
import { contactConfig } from "@/config/contact-config"

export default function ContactPage() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  async function handleSubmit(formData: FormData) {
    setFormStatus({ type: null, message: '' })
    startTransition(async () => {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormStatus({ type: 'success', message: contactConfig.form.successMessage })
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
      } else {
        setFormStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' })
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 md:py-28 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/contact_hero_bg.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {contactConfig.hero.title.split('Powerful Together')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-deep">Powerful Together</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {contactConfig.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={contactConfig.hero.primaryCTA.href}>
                <Button className="px-8 py-6 bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg">
                  {contactConfig.hero.primaryCTA.text}
                </Button>
              </a>
              <a href={contactConfig.hero.secondaryCTA.href}>
                <Button className="px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-semibold text-lg rounded-lg transition-all duration-200">
                  {contactConfig.hero.secondaryCTA.text}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              id="contact-form"
            >
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-deep mb-3">{contactConfig.form.title}</h2>
                <p className="text-gray-600 mb-6 sm:mb-8">
                  {contactConfig.form.description}
                </p>

                {formStatus.type === 'success' ? (
                  <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Message Sent Successfully!</p>
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  </div>
                ) : (
                  <form action={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name <span className="text-gray-400">(optional)</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="service"
                        className="w-full h-12 px-3 border border-gray-200 rounded-md focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan focus:outline-none"
                      >
                        <option value="">Select a project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="AI / Automation">AI / Automation</option>
                        <option value="SaaS / MVP">SaaS / MVP</option>
                        <option value="Dedicated Developers">Dedicated Developers</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message / Project Brief <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="min-h-[140px] focus:border-brand-cyan focus:ring-brand-cyan"
                        required
                      />
                    </div>

                    {formStatus.type === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {formStatus.message}
                      </div>
                    )}

                    <Button
                      disabled={isPending}
                      className="w-full h-14 bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-md shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      {contactConfig.form.privacyText}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Column: Alternative Contact & Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Alternative Contact Options */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-deep mb-4 sm:mb-6">{contactConfig.contactOptions.title}</h3>

                <div className="space-y-5">
                  {contactConfig.contactOptions.options.map((option, index) => (
                    <ContactOption
                      key={index}
                      icon={option.icon}
                      title={option.title}
                      value={option.value}
                      href={option.href}
                    />
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-deep mb-4 sm:mb-6">{contactConfig.whyChooseUs.title}</h3>

                <div className="space-y-4">
                  {contactConfig.whyChooseUs.points.map((point, index) => (
                    <WhyItem key={index} text={point} />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div >
      </section >

      {/* Final CTA Strip */}
      < section className="py-16 bg-gradient-to-r from-brand-dark to-brand-deep text-white" >
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {contactConfig.finalCTA.title}
            </h2>

            <a href={contactConfig.finalCTA.href}>
              <Button className="px-10 py-6 bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg">
                {contactConfig.finalCTA.buttonText}
              </Button>
            </a>

            <p className="text-gray-400 mt-4 text-sm">
              {contactConfig.finalCTA.subtext}
            </p>
          </motion.div>
        </div>
      </section >

    </div >
  )
}

function ContactOption({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
      </div>
      <div className="flex-1 text-left">
        <p className="font-semibold text-gray-900 mb-1">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
      {href && <ArrowRight className="w-5 h-5 text-gray-400 mt-3" />}
    </div>
  )

  if (href) {
    return <a href={href} className="block">{content}</a>
  }
  return content
}

function WhyItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 group p-3 rounded-lg hover:bg-brand-cyan/5 transition-colors duration-300">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <CheckCircle2 className="w-5 h-5 text-brand-cyan" style={{ stroke: 'url(#icon-gradient)' }} />
      </div>
      <span className="text-gray-700 font-medium group-hover:text-brand-cyan transition-colors duration-300">{text}</span>
    </div>
  )
}
