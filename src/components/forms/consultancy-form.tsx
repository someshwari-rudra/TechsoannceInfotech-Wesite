"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { sendConsultancyEmail } from "@/actions/consultancy"
import { ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react"

export function ConsultancyForm({ serviceName }: { serviceName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setStatus("loading")

    // Append service name if not present (though we use hidden input)
    if (!formData.get("service")) {
      formData.append("service", serviceName)
    }

    try {
      const result = await sendConsultancyEmail(formData)
      if (result.success) {
        setStatus("success")
        setMessage(result.message || "Request sent successfully!")
      } else {
        setStatus("error")
        setMessage(result.message || "Something went wrong.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("An unexpected error occurred.")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg mx-auto bg-[#0A1A2F] border border-brand-cyan/30 rounded-3xl p-10 text-center shadow-2xl shadow-brand-cyan/20 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-brand-cyan/20 blur-[60px] rounded-full pointing-events-none" />

        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-tr from-brand-cyan to-[#29619e] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Request Received!</h3>

          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Thank you for trusting <span className="text-brand-cyan font-semibold">TechSonance</span>. <br />
            Our experts will analyze your requirements and reach out within 24 hours.
          </p>

          <button
            onClick={() => setStatus("idle")}
            className="px-8 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-brand-cyan/50 transition-all duration-300 font-medium text-sm flex items-center gap-2 mx-auto group"
          >
            <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Send another request
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-[#0F2645] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get A FREE Consultancy Today!</h3>
        <p className="text-slate-400 mb-8">Tell us about your project and get a custom roadmap.</p>

        <form action={handleSubmit} className="space-y-6">
          <input type="hidden" name="service" value={serviceName} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-300 ml-1">Phone Number (Optional)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your goals, timeline, and requirements..."
              className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all resize-none"
            />
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-gradient-to-r from-brand-cyan to-[#29619e] rounded-xl text-white font-bold text-lg shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Request...
              </>
            ) : (
              <>
                Get Your Free Consultation
                <Send className="w-5 h-5 ml-1" />
              </>
            )}
          </button>

          <p className="text-xs text-center text-slate-500">
            Or email us directly at <a href="mailto:admin@techsonance.co.in" className="text-brand-cyan hover:underline">admin@techsonance.co.in</a>
          </p>
        </form>
      </div>
    </div>
  )
}
