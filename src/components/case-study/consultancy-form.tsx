"use client"

import { motion } from "framer-motion"
import { Send, CheckCircle2, Shield, Loader2 } from "lucide-react"
import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/actions/contact"

export function ConsultancyForm() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  async function handleSubmit(formData: FormData) {
    setFormStatus({ type: null, message: '' })
    startTransition(async () => {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormStatus({ type: 'success', message: 'Thanks for reaching out! We will get back to you shortly.' })
        // Reset form
        const form = document.querySelector('#case-study-contact-form') as HTMLFormElement
        form?.reset()
      } else {
        setFormStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' })
      }
    })
  }

  return (
    <div className="w-full">
      {formStatus.type === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-slate-400">{formStatus.message}</p>
        </motion.div>
      ) : (
        <form id="case-study-contact-form" action={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Full Name</label>
              <Input
                name="name"
                placeholder="John Doe"
                className="h-12 md:h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-brand-cyan/50 focus:ring-brand-cyan/20 rounded-xl text-sm md:text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Email Address</label>
              <Input
                name="email"
                type="email"
                placeholder="john@example.com"
                className="h-12 md:h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-brand-cyan/50 focus:ring-brand-cyan/20 rounded-xl text-sm md:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Phone Number (Optional)</label>
            <Input
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="h-12 md:h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-brand-cyan/50 focus:ring-brand-cyan/20 rounded-xl text-sm md:text-base"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Project Details</label>
            <Textarea
              name="message"
              placeholder="Tell us about your goals, timeline, and requirements..."
              className="min-h-[140px] md:min-h-[160px] bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-brand-cyan/50 focus:ring-brand-cyan/20 rounded-xl resize-none text-sm md:text-base"
              required
            />
          </div>

          {formStatus.type === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              {formStatus.message}
            </div>
          )}

          <Button
            disabled={isPending}
            className="w-full h-14 md:h-16 bg-gradient-to-r from-brand-cyan to-[#29619e] hover:scale-[1.02] text-white font-bold text-lg md:text-xl rounded-xl shadow-xl shadow-brand-cyan/20 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            {isPending ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Get Your Free Consultation
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-2">
            <Shield className="w-3" />
            Your data is 100% secure. We never share your information.
          </p>
        </form>
      )}
    </div>
  )
}
