"use client"

import * as React from "react"
import { X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  
  // reCAPTCHA v3 Hook
  const { executeRecaptcha } = useGoogleReCaptcha()

  if (!isOpen) return null

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.description.trim()) newErrors.description = "Project description is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    try {
      // Check if reCAPTCHA is ready
      if (!executeRecaptcha) {
        console.warn("reCAPTCHA not ready yet")
        setErrors({ ...errors, form: "Security check not ready. Please wait a moment and try again." })
        setIsSubmitting(false)
        return
      }

      console.log("Executing reCAPTCHA...")
      let token = ""
      try {
        token = await executeRecaptcha("submit_quote")
        console.log("reCAPTCHA token received")
      } catch (recaptchaError) {
        console.error("reCAPTCHA execution failed:", recaptchaError)
        setErrors({ ...errors, form: "Security check failed. Please check your connection." })
        setIsSubmitting(false)
        return
      }

      console.log("Submitting form data...")
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken: token }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Form submission success")
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
          setFormData({ firstName: "", lastName: "", email: "", description: "" })
        }, 3000)
      } else {
        console.error("Form submission error:", data)
        setErrors({ ...errors, form: data.error || "Something went wrong" })
      }
    } catch (error) {
      console.error("Form submission critical error:", error)
      setErrors({ ...errors, form: "Failed to submit form. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-white/20">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors z-10 text-slate-400 hover:text-slate-600 touch-target"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] md:h-[500px] text-center p-6 md:p-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl">✓</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Message Sent!</h2>
            <p className="text-slate-500 text-base md:text-lg">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="flex-1 p-4 md:p-8 lg:p-12 pt-14 md:pt-8 lg:pt-12">
              <div className="text-center mb-4 md:mb-6 lg:mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-2 md:mb-3 lg:mb-4 tracking-tight">
                  Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e]">Amazing</span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-slate-500">
                  Connect with us for your requirements or queries. We'll get back to you within 24Hrs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
                   <div className="space-y-3 md:space-y-4 lg:space-y-5">
                      {/* Left Column Inputs */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          className={`w-full px-3 py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base ${
                            errors.firstName ? "ring-2 ring-red-100 border-red-200" : "focus:ring-brand-cyan/20 hover:border-brand-cyan/30"
                          }`}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        {errors.firstName && <p className="text-xs text-red-500 px-1 ml-1">{errors.firstName}</p>}
                      </div>

                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className={`w-full px-3 py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base ${
                            errors.lastName ? "ring-2 ring-red-100 border-red-200" : "focus:ring-brand-cyan/20 hover:border-brand-cyan/30"
                          }`}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                         {errors.lastName && <p className="text-xs text-red-500 px-1 ml-1">{errors.lastName}</p>}
                      </div>

                      <div className="space-y-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className={`w-full px-3 py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base ${
                            errors.email ? "ring-2 ring-red-100 border-red-200" : "focus:ring-brand-cyan/20 hover:border-brand-cyan/30"
                          }`}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-xs text-red-500 px-1 ml-1">{errors.email}</p>}
                      </div>
                   </div>

                   {/* Right Column Textarea */}
                   <div className="space-y-1 h-full">
                      <textarea
                        placeholder="Tell us about your project..."
                        className={`w-full h-full min-h-[120px] md:min-h-[160px] lg:min-h-[200px] px-3 py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 resize-none text-sm md:text-base ${
                          errors.description ? "ring-2 ring-red-100 border-red-200" : "focus:ring-brand-cyan/20 hover:border-brand-cyan/30"
                        }`}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                      {errors.description && <p className="text-xs text-red-500 px-1 ml-1">{errors.description}</p>}
                   </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2 md:gap-3 lg:gap-4 pt-1 md:pt-2">
                   <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 md:px-8 md:py-5 lg:px-10 lg:py-7 bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-bold rounded-xl text-sm md:text-base lg:text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
                   >
                     {isSubmitting ? (
                       <>
                         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                         Sending...
                       </>
                     ) : (
                       "Send Message"
                     )}
                   </Button>
                   <p className="text-xs text-slate-400 text-center">
                     This site is protected by reCAPTCHA and the Google 
                     <a href="https://policies.google.com/privacy" className="text-brand-cyan hover:underline mx-1">Privacy Policy</a> and 
                     <a href="https://policies.google.com/terms" className="text-brand-cyan hover:underline mx-1">Terms of Service</a> apply.
                   </p>
                </div>
                {errors.form && <p className="text-center text-red-500 text-sm bg-red-50 p-2 rounded-lg">{errors.form}</p>}
                {errors.captcha && <p className="text-center text-red-500 text-sm">{errors.captcha}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
