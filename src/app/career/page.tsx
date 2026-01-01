"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2, ArrowRight, Loader2, Upload, X, Briefcase, Home
} from "lucide-react"
import { useState, useTransition, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitJobApplication } from "@/actions/career"
import { careerConfig } from "@/config/career-config"

export default function CareerPage() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')

    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setFileError('Only PDF files are accepted')
        setSelectedFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        return
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB')
        setSelectedFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        return
      }

      setSelectedFile(file)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    setFileError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(formData: FormData) {
    setFormStatus({ type: null, message: '' })

    // Manually append the selected file to FormData since it's controlled by React state
    if (selectedFile) {
      formData.set('resume', selectedFile)
    }

    startTransition(async () => {
      const result = await submitJobApplication(formData)

      if (result.success) {
        setFormStatus({ type: 'success', message: result.message })
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
        setSelectedFile(null)
        setFileError('')
      } else {
        setFormStatus({ type: 'error', message: result.message })
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-brand-dark pt-24 pb-20 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/career_hero_bg.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
        </div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan font-semibold text-sm mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              {careerConfig.hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {careerConfig.hero.title.split('With Us')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-deep">With Us</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {careerConfig.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={careerConfig.hero.primaryCTA.href}>
                <Button className="px-8 py-6 bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg">
                  {careerConfig.hero.primaryCTA.text}
                </Button>
              </a>
              <a href={careerConfig.hero.secondaryCTA.href}>
                <Button className="px-8 py-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-semibold text-lg rounded-lg transition-all duration-200">
                  {careerConfig.hero.secondaryCTA.text}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{careerConfig.whyWorkWithUs.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {careerConfig.whyWorkWithUs.points.map((point, index) => (
              <WhyCard key={index} icon={point.icon} title={point.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Life at TechSonance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{careerConfig.lifeAtCompany.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {careerConfig.lifeAtCompany.description}
            </p>
          </div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {careerConfig.lifeAtCompany.benefits.map((item, index) => (
              <BenefitCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {careerConfig.openPositions.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                onApply={() => {
                  setSelectedJob(job.title)
                  document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-brand-cyan/5">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{careerConfig.hiringProcess.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-deep mx-auto rounded-full mb-4" />
            <p className="text-gray-600">{careerConfig.hiringProcess.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {careerConfig.hiringProcess.steps.map((step, index) => (
              <HiringStep key={index} {...step} isLast={index === careerConfig.hiringProcess.steps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">{careerConfig.applySection.title}</h2>
              <p className="text-gray-600 mb-8 text-center">
                {careerConfig.applySection.description}
              </p>

              {formStatus.type === 'success' ? (
                <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Application Submitted!</p>
                    <p className="text-sm">{formStatus.message}</p>
                  </div>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-5">
                  {selectedJob && (
                    <input type="hidden" name="role" value={selectedJob} />
                  )}

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
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      required
                    />
                  </div>

                  {!selectedJob && (
                    <div>
                      <label htmlFor="roleInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                        Role Interested In
                      </label>
                      <Input
                        id="roleInterest"
                        name="role"
                        placeholder="e.g., Full Stack Developer"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume Upload (PDF)
                    </label>

                    {!selectedFile ? (
                      <label className="flex items-center justify-center gap-2 h-12 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand-cyan hover:bg-brand-cyan/5 transition-colors">
                        <Upload className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">Choose PDF file (max 5MB)</span>
                        <input
                          ref={fileInputRef}
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,application/pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-1 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-gray-700 font-medium truncate">{selectedFile.name}</span>
                          <span className="text-xs text-gray-500">({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    )}

                    {fileError && (
                      <p className="text-sm text-red-600 mt-2">{fileError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Short Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about yourself and why you'd like to join our team..."
                      className="min-h-[120px] focus:border-brand-cyan focus:ring-brand-cyan"
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
                        Submitting...
                      </>
                    ) : (
                      careerConfig.applySection.submitButton
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section >

      {/* Final CTA */}
      < section className="py-16 bg-gradient-to-r from-brand-dark to-brand-deep text-white" >
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {careerConfig.finalCTA.title}
            </h2>

            <a href={careerConfig.finalCTA.href}>
              <Button className="px-10 py-6 bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-white font-semibold text-lg rounded-lg">
                {careerConfig.finalCTA.buttonText}
              </Button>
            </a>

            <p className="text-gray-300 mt-4 text-sm">
              {careerConfig.finalCTA.subtitle}
            </p>
          </motion.div>
        </div>
      </section >

    </div >
  )
}

function WhyCard({ icon: Icon, title }: { icon: any, title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-brand-cyan" style={{ stroke: 'url(#icon-gradient)' }} />
      </div>
      <div className="flex-1 flex items-center min-h-[48px]">
        <p className="text-gray-700 font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">{title}</p>
      </div>
    </motion.div>
  )
}

function JobCard({ job, onApply }: { job: any, onApply: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl hover:shadow-brand-cyan/5 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-cyan transition-colors duration-300">{job.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-brand-cyan" />
              {job.experience}
            </span>
            <span className="flex items-center gap-1.5">
              <Home className="w-4 h-4 text-brand-cyan" />
              {job.location}
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-brand-cyan to-brand-deep text-white rounded-full font-medium shadow-sm shadow-brand-cyan/20 text-xs tracking-wide">
              {job.type}
            </span>
          </div>
        </div>
        <Button
          onClick={onApply}
          className="bg-gradient-to-r from-brand-cyan to-brand-deep hover:scale-105 transition-all duration-300 shadow-md shadow-brand-cyan/20 text-white font-semibold px-6 py-3 rounded-lg whitespace-nowrap"
        >
          Apply Now
        </Button>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.techStack.map((tech: string) => (
          <span key={tech} className="px-3 py-1.5 bg-brand-cyan/5 text-slate-700 rounded-lg text-sm font-medium border border-brand-cyan/10 hover:border-brand-cyan/50 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-colors duration-300 cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function HiringStep({ number, title, description, isLast }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.1 }}
      className="relative group flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-deep text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-brand-cyan transition-colors duration-300">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>

      {!isLast && (
        <div className="hidden md:block absolute top-[3.5rem] left-[65%] w-[70%] h-0.5 bg-gradient-to-r from-brand-cyan to-brand-deep/30 opacity-30" />
      )}
    </motion.div>
  )
}

function BenefitCard({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7" style={{ stroke: 'url(#icon-gradient)' }} />
        </div>
        <h4 className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-deep transition-all duration-300">{title}</h4>
      </div>
    </motion.div>
  )
}
