
import { ServiceData } from "@/config/services"
import { CheckCircle2, Cloud, Server, Shield, Terminal, Globe, ArrowRight, Cpu, Activity } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ConsultancyForm } from "@/components/forms/consultancy-form"

export function CloudDevOpsLayout({ service }: { service: ServiceData }) {
   return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0A1A2F] text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-cyan/30 transition-colors duration-300">
         <Navbar />

         {/* Hero: "Matrix" / Tech Infrastructure Vibe */}
         <section
            className="relative pt-32 pb-24 px-6 overflow-hidden rounded-b-[5rem] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/futurise-hero.jpg')" }}
         >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0A1A2F]/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/70 to-[#0A1A2F]/95" />
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Glow Effects */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-mono mb-6">
                        <Terminal className="w-3 h-3" style={{ stroke: 'url(#icon-gradient)' }} />
                        <span>Cycle_Time: Reduced</span>
                     </div>
                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
                           Infrastructure as Code.
                        </span> <br />
                        Business as Usual.
                     </h1>
                     <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                        {service.shortDescription}
                     </p>
                     <div className="flex gap-4">
                        <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-deep text-white font-bold rounded-lg hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                           <Server className="w-4 h-4" />
                           Optimize Infrastructure
                        </a>
                     </div>
                  </div>

                  {/* Visual: "Code/Terminal" Block */}
                  <div className="relative group perspective-[1000px]">
                     <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                     <div className="relative bg-[#0F172A] rounded-xl border border-slate-700 shadow-2xl p-4 font-mono text-sm leading-relaxed overflow-hidden text-slate-300">
                        <div className="flex items-center gap-2 mb-4 px-2 border-b border-slate-800 pb-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                           <span className="ml-2 text-xs text-slate-500">deploy-pipeline.yml</span>
                        </div>
                        <div className="space-y-1">
                           <div className="flex"><span className="text-purple-400 mr-2">resource</span> <span className="text-green-400">"aws_ecs_cluster"</span> <span className="text-blue-300">"main"</span> {"{"}</div>
                           <div className="pl-4"><span className="text-slate-400">name</span> = <span className="text-orange-300">"production-cluster"</span></div>
                           <div className="pl-4"><span className="text-purple-400">setting</span> {"{"}</div>
                           <div className="pl-8"><span className="text-slate-400">name</span>  = <span className="text-orange-300">"containerInsights"</span></div>
                           <div className="pl-8"><span className="text-slate-400">value</span> = <span className="text-orange-300">"enabled"</span></div>
                           <div className="pl-4">{"}"}</div>
                           <div className="flex">{"}"}</div>
                           <div className="h-4"></div>
                           <div className="text-slate-500"># Auto-scaling configuration loaded...</div>
                           <div className="text-green-500 flex items-center gap-2">
                              <span className="animate-pulse">▶</span> Deployment Successful (0.4s)
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Features - Glass Cards */}
         <section className="py-24 px-6 bg-white dark:bg-[#0A1A2F] border-y border-slate-100 dark:border-white/5">
            <div className="container mx-auto max-w-6xl">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Scalability Without Limits</h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{service.fullDescription}</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.features.map((feature, i) => (
                     <div key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-white dark:bg-white/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                           <feature.icon className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                           {feature.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Process - "Architecture Diagram" Flow */}
         <section className="py-24 px-6 bg-slate-50 dark:bg-[#0F172A]/50">
            <div className="container mx-auto max-w-5xl">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                  <Activity className="w-8 h-8" style={{ stroke: 'url(#icon-gradient)' }} />
                  DevOps Workflow
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  {service.process.map((step, idx) => (
                     <div key={idx} className="relative pl-8 border-l border-slate-200 dark:border-slate-700 md:odd:mr-12 md:even:ml-12 md:even:translate-y-12">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white dark:bg-[#0B1120] border-2 border-brand-cyan flex items-center justify-center z-10 shadow-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                        </div>
                        <div className="bg-white dark:bg-[#0A1A2F] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                           <div className="text-xs font-mono text-brand-cyan mb-2">Step_{step.step}</div>
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                           <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Case Study - Terminal Output Style */}
         <section className="py-24 px-6 bg-white dark:bg-[#0A1A2F]">
            <div className="container mx-auto max-w-5xl">
               <div className="border border-slate-700 bg-[#0F172A] rounded-lg overflow-hidden font-mono shadow-2xl">
                  <div className="bg-slate-800 p-3 flex items-center gap-2 border-b border-slate-700">
                     <div className="w-3 h-3 rounded-full bg-slate-600" />
                     <div className="w-3 h-3 rounded-full bg-slate-600" />
                     <div className="w-3 h-3 rounded-full bg-slate-600" />
                     <div className="ml-auto text-xs text-slate-400">bash — 80x24</div>
                  </div>
                  <div className="p-6 md:p-12 text-sm md:text-base text-slate-300">
                     <div className="mb-8">
                        <span className="text-green-500">user@server:~$</span> cat case-study.txt <br />
                        <span className="text-white font-bold text-xl block mt-4">Project: {service.caseStudy.title}</span>
                     </div>

                     <div className="grid md:grid-cols-2 gap-12 mb-8">
                        <div>
                           <span className="text-blue-400 block mb-1"># THE_CHALLENGE</span>
                           <p className="text-slate-400 leading-relaxed">{service.caseStudy.challenge}</p>
                        </div>
                        <div>
                           <span className="text-blue-400 block mb-1"># THE_SOLUTION</span>
                           <p className="text-slate-400 leading-relaxed">{service.caseStudy.solution}</p>
                        </div>
                     </div>

                     <div>
                        <span className="text-blue-400 block mb-2"># RESULTS_LOG</span>
                        {service.caseStudy.results.map((res, i) => (
                           <div key={i} className="flex items-center gap-2 mb-1">
                              <span className="text-green-500">➜</span>
                              <span className="text-slate-300">{res}</span>
                           </div>
                        ))}
                     </div>

                     <div className="mt-8 animate-pulse text-brand-cyan">_</div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA */}
         <section className="py-24 px-6 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0A1A2F]">
            <div className="container mx-auto max-w-4xl text-center">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Stabilize Your Growth</h2>
               <div className="bg-white dark:bg-slate-800 rounded-2xl p-1 inline-block w-full shadow-xl">
                  <ConsultancyForm serviceName={service.title} />
               </div>
            </div>
         </section>
      </div>
   )
}
