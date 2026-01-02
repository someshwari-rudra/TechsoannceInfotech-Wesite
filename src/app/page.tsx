import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero/hero";
import { ServicesSection } from "@/components/services/services-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CaseStudies } from "@/components/home/case-studies";
import FAQWithSpiral from "@/components/ui/faq-spiral";
import { ConsultancyForm } from "@/components/case-study/consultancy-form";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudies />
      <FAQWithSpiral />
      {/* Contact Form Section */}
      <section id="consultancy-section" className="bg-white scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="bg-brand-dark rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side: Content */}
              <div className="p-5 sm:p-6 md:p-10 lg:p-16 flex flex-col justify-center text-white relative lg:border-r border-white/10">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 rounded-full text-brand-cyan text-sm font-bold uppercase mb-8 border border-brand-cyan/30">
                    <Sparkles className="w-4 h-4" /> Ready to Build?
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
                    Let's turn your requirements into a deployed reality.
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-md">
                    Take the first step towards your high-performance software solution. Our experts are ready to consult on your unique challenges.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free technical consultation",
                      "Custom project roadmap",
                      "NDA Protected Architecture"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-6 md:p-10 lg:p-16 bg-slate-900/30">
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 md:mb-4">Get A FREE Consultancy Today!</h2>
                  <p className="text-slate-400 text-lg">Tell us about your project and get a custom roadmap.</p>
                </div>
                <ConsultancyForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
