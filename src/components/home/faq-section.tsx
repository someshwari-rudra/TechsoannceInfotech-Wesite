"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const faqs = [
  {
    question: "Why Choose Us As Your Software Development Company In India?",
    answer: "Tagline Infotech stands out by delivering world-class software solutions with a focus on quality, innovation, and client satisfaction. Our diverse talent pool in India allows us to offer premium development services at competitive rates, ensuring you get the best ROI without compromising on performance or scalability."
  },
  {
    question: "How Much Does Custom Software Cost?",
    answer: "The cost of custom software varies based on factors such as the type of technology used, the skills and experience of the developers, and the unique features required to make your project stand out. Rest assured, our pricing is fair and competitive, while maintaining the high quality of our work. The estimated cost starts at $10 per hour or $1600 per month."
  },
  {
    question: "What Software Development Method Do You Use?",
    answer: "We primarily use the Agile software development methodology. This iterative approach allows for flexibility, faster delivery times, and continuous feedback. We break projects into manageable sprints, ensuring transparency and enabling us to adapt to your evolving business needs efficiently."
  },
  {
    question: "How Do You Keep My Ideas And Data Safe?",
    answer: "Security is our top priority. We sign Non-Disclosure Agreements (NDAs) to legally protect your intellectual property. Our development environment follows strict security protocols, including encrypted data transmission, secure code repositories, and restricted access controls to safeguard your sensitive information."
  },
  {
    question: "Can You Help With Updates And Maintenance?",
    answer: "Absolutely. Software development is a journey, not a destination. We offer comprehensive post-launch support and flexible maintenance packages. Whether it's security patches, feature enhancements, or OS updates, our team ensures your application remains robust, secure, and up-to-date."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative elements - Subtle dots for background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-16 border-b border-gray-100 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 leading-tight">
              Frequently Asked <br />
              <span className="text-brand-dark">Questions</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Everything you need to know about working with Techsonance.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-80"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search questions..."
                className="pl-10 h-12 rounded-xl border-slate-200 focus:border-brand-cyan focus:ring-brand-cyan bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              displayNumber={index + 1}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No questions found matching your search.
          </div>
        )}
      </div>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  index,
  displayNumber,
  isOpen,
  onClick
}: {
  question: string,
  answer: string,
  index: number,
  displayNumber: number,
  isOpen: boolean,
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen
          ? "border-brand-cyan/20 shadow-lg shadow-brand-cyan/5"
          : "border-slate-100 shadow-sm hover:shadow-md hover:border-brand-cyan/20"
        }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-4 p-6 text-left focus:outline-none touch-target"
      >
        <span className="text-brand-cyan font-bold text-sm md:text-base mt-1">
          {displayNumber.toString().padStart(2, '0')}
        </span>
        <div className="flex-1">
          <h3 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-brand-dark" : "text-slate-800"}`}>
            {question}
          </h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pt-3 text-slate-500 text-sm md:text-base leading-relaxed">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`flex-shrink-0 ml-2 transition-transform duration-300 text-brand-cyan ${isOpen ? "rotate-45" : "rotate-0"}`}>
          <Plus className="w-5 h-5" />
        </div>
      </button>
    </motion.div>
  )
}
