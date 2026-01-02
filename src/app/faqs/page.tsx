"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react"
import { faqConfig } from "@/config/faq-config"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqConfig.categories[0].id)
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (categoryId: string, faqIndex: number) => {
    const faqId = `${categoryId}-${faqIndex}`
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {faqConfig.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {faqConfig.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {faqConfig.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-brand-cyan to-[#29619e] text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-brand-cyan/50'
                    }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Accordions */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {faqConfig.categories
                .filter(cat => cat.id === activeCategory)
                .map((category) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {category.faqs.map((faq, index) => {
                      const faqId = `${category.id}-${index}`
                      const isOpen = openFAQ === faqId

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="group"
                        >
                          <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-cyan/50 hover:shadow-lg transition-all duration-200 overflow-hidden">
                            {/* Question */}
                            <button
                              onClick={() => toggleFAQ(category.id, index)}
                              className="w-full px-4 sm:px-6 md:px-8 py-5 sm:py-6 flex items-start gap-3 sm:gap-4 text-left min-h-[60px]"
                            >
                              <div className="flex-1">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-brand-cyan transition-colors">
                                  {faq.question}
                                </h3>
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                              >
                                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
                              </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 pt-2">
                                    <div className="h-px bg-gradient-to-r from-brand-cyan/20 to-transparent mb-3 sm:mb-4" />
                                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-cyan to-cyan-500 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-90" />

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              {faqConfig.cta.title}
            </h2>

            <p className="text-xl text-white/90 mb-8">
              {faqConfig.cta.subtext}
            </p>

            <Link href={faqConfig.cta.href}>
              <Button className="px-10 py-6 bg-white hover:bg-gray-100 text-brand-cyan font-bold text-lg rounded-xl shadow-2xl transition-all duration-200 hover:scale-105">
                {faqConfig.cta.buttonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
