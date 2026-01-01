import { ServiceData } from "@/config/services";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Layers,
  Layout,
  Zap,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { ConsultancyForm } from "@/components/forms/consultancy-form";
import { ScrollToContactButton } from "@/components/ui/scroll-to-contact-button";
import webDevBg from "@/app/web-development.jpg";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import webDevImageMain from "@/app/web dev.png";

export function WebDevLayout({ service }: { service: ServiceData }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-cyan/20">
      {/* Navbar/Back Button - Floating */}
      {/* Navbar/Back Button - Floating */}
      {/* <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
        <Link 
          href="/#services" 
          className="inline-flex pointer-events-auto items-center text-sm font-bold text-white/80 hover:text-brand-cyan transition-colors bg-[#0A1A2F]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div> */}
      <Navbar />

      {/* Hero Section - 50% Height (Half) */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center py-16 mt-20 px-6 overflow-hidden text-white rounded-b-[3rem] shadow-2xl shadow-blue-900/20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${webDevBg.src}')` }}
      >
        {/* Blue Overlay - Heavy opacity to ensure text readability and brand color dominance */}
        <div className="absolute inset-0 bg-[#0A1A2F]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/40 to-[#0A1A2F]/80" />

        {/* Background Patterns (Optional - Keeping delicate pattern) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6 shadow-inner hover:bg-white/10 transition-colors cursor-default">
            <Terminal className="w-3 h-3" />
            Engineering Digital Excellence
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Build Scalable, High Performance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
              Web Applications
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            {service.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScrollToContactButton />
            <a
              href="#features"
              className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm"
            >
              Explore Our Stack
            </a>
          </div>
        </div>
      </section>

      {/* Main Content - White Background for Readability */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              {/* Decorative Image Abstract */}
              <div className="aspect-square rounded-3xl overflow-hidden relative bg-[#efefef]">
                <div className="absolute inset-6 bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-center isolate">
                  {/* Main Image - Scaled & Cover */}
                  <div className="relative w-full h-full z-10">
                    <Image
                      src={webDevImageMain}
                      alt="Web Development Digital Assets"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg border border-brand-cyan/20 shadow-sm">
                    <Zap className="w-5 h-5" style={{ stroke: 'url(#icon-gradient)' }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">
                      Performance
                    </div>
                    <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-deep">
                      99/100
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A1A2F] mb-8 leading-tight">
                Beyond Simple Websites. <br />
                We Build{" "}
                <span className="text-brand-cyan">Digital Assets.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-brand-cyan/20 flex items-center justify-center shadow-sm">
                      <feature.icon className="w-5 h-5" style={{ stroke: 'url(#icon-gradient)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A1A2F] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stack / Technologies */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Core Technologies
              </h3>
              <p className="text-slate-500">
                We choose the right tool for the job, favoring scalability and
                performance.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Tailwind CSS",
                "AWS",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xl md:text-2xl font-bold text-slate-600 hover:text-[#0A1A2F] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Grey Background */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mb-16">
            Our Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative group h-full">
                {/* Connector Line */}
                {idx < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-slate-200 -z-10 animate-pulse" />
                )}

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-xl font-bold text-brand-cyan mb-6 group-hover:scale-110 group-hover:border-brand-cyan/30 transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - Brand Blue */}
      <section className="py-24 px-6 bg-[#0A1A2F] text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-block border-b border-brand-cyan pb-1 text-brand-cyan font-bold tracking-widest text-sm uppercase">
                Success Story
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                {service.caseStudy.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-300">
                <div>
                  <h4 className="text-white font-bold mb-2">Challenge</h4>
                  <p className="text-sm leading-relaxed">
                    {service.caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Solution</h4>
                  <p className="text-sm leading-relaxed">
                    {service.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                {service.caseStudy.results.map((res, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-medium text-white"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                    {res}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center justify-center h-64 text-center">
                  <div>
                    <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-deep mb-2">
                      65%
                    </div>
                    <div className="text-slate-400 uppercase tracking-widest text-sm">
                      Conversion Increase
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Project CTA */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">
              Ready to Build?
            </h2>
            <p className="text-slate-600">
              Let's turn your requirements into a deployed reality.
            </p>
          </div>
          <ConsultancyForm serviceName={service.title} />
        </div>
      </section>
    </div>
  );
}
