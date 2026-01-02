"use client"

import { TrendingUp } from "lucide-react"
import { ReactNode } from "react"

interface Feature {
   title: string
   description: string
   icon: ReactNode
}

interface DataAnalyticsFeaturesProps {
   fullDescription: string
   features: Feature[]
}

export function DataAnalyticsFeatures({ fullDescription, features }: DataAnalyticsFeaturesProps) {
   // We expect exactly 4 features for this specific layout
   const [f1, f2, f3, f4] = features

   return (
      <section className="py-24 px-6 bg-white">
         <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Unlocking The Value of Information</h2>
               <p className="text-lg text-slate-500">{fullDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

               {/* Feature 1: Decision Making (Light + Area Chart) */}
               <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between overflow-hidden group hover:border-blue-100 transition-all duration-300">
                  <div className="mb-8">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <div className="w-6 h-6 flex items-center justify-center [&>svg]:stroke-[url(#icon-gradient)]">{f1.icon}</div>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{f1.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{f1.description}</p>
                  </div>

                  {/* Mock Area Chart */}
                  <div className="relative h-48 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 pt-8 overflow-hidden">
                     <svg viewBox="0 0 100 40" className="w-full h-full text-brand-cyan/10 fill-current overflow-visible" preserveAspectRatio="none">
                        <path d="M0 40 L0 30 Q10 25 20 28 T40 20 T60 25 T80 15 L100 5 V40 H0 Z" />
                     </svg>
                     <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full text-brand-cyan fill-none stroke-current stroke-2 p-4 pt-8 overflow-visible" preserveAspectRatio="none">
                        <path d="M0 30 Q10 25 20 28 T40 20 T60 25 T80 15 L100 5" vectorEffect="non-scaling-stroke" />
                        {/* Dot at end */}
                        <circle cx="100" cy="5" r="3" className="fill-white stroke-brand-cyan stroke-2" />
                     </svg>
                     {/* Grid lines */}
                     <div className="absolute inset-0 flex flex-col justify-between p-4 pt-8 pointer-events-none opacity-20">
                        <div className="w-full h-px bg-slate-300"></div>
                        <div className="w-full h-px bg-slate-300"></div>
                        <div className="w-full h-px bg-slate-300"></div>
                        <div className="w-full h-px bg-slate-300"></div>
                     </div>
                     {/* Legend / Tooltip mock */}
                     <div className="absolute top-2 left-4 flex gap-3 text-[10px] uppercase font-bold text-slate-400">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-cyan"></span> Growth</span>
                     </div>
                  </div>
               </div>

               {/* Feature 2: Operational Efficiency (Dark) */}
               <div className="bg-[#0A1A2F] rounded-[32px] p-10 text-white flex flex-col justify-center relative overflow-hidden group">
                  {/* Background Gradient/Mesh */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>

                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/20 transition-colors border border-white/10">
                        <div className="w-6 h-6 flex items-center justify-center text-brand-cyan">{f2.icon}</div> {/* Keep solid/light on dark bg */}
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{f2.title}</h3>
                     <p className="text-slate-300 leading-relaxed mb-8">{f2.description}</p>

                     <div className="pt-8 border-t border-white/10">
                        <div className="flex items-center gap-4 text-sm font-medium text-brand-cyan">
                           <span className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" /> Efficiency Up 35%
                           </span>
                           <span className="flex items-center gap-2 text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> ROI Optimized
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Feature 3: Customer Personalization (Light + Bar Chart) */}
               <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between overflow-hidden group hover:border-blue-100 transition-all duration-300">
                  <div className="mb-8">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-6 flex items-center justify-center [&>svg]:stroke-[url(#icon-gradient)]">{f3.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900">{f3.title}</h3>
                     </div>
                     <p className="text-slate-500 text-sm leading-relaxed">{f3.description}</p>
                  </div>

                  {/* Mock Bar Chart */}
                  <div className="bg-slate-50 rounded-2xl p-6 h-48 flex items-end justify-between gap-2 md:gap-4 relative">
                     {/* Background lines */}
                     <div className="absolute inset-0 px-6 py-6 flex flex-col justify-between pointer-events-none opacity-50 z-0">
                        <div className="w-full h-px bg-slate-200 border-t border-dashed border-slate-300"></div>
                        <div className="w-full h-px bg-slate-200 border-t border-dashed border-slate-300"></div>
                        <div className="w-full h-px bg-slate-200 border-t border-dashed border-slate-300"></div>
                     </div>

                     {[40, 60, 35, 80, 55, 90].map((h, i) => (
                        <div key={i} className="relative z-10 w-full bg-blue-100 rounded-t-sm hover:bg-brand-cyan transition-colors duration-300 group/bar" style={{ height: `${h}%` }}>
                           {/* Tooltip on hover */}
                           <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded transition-opacity pointer-events-none whitespace-nowrap z-20">
                              {h * 12} Users
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Feature 4: Risk Mitigation (Light + Shield/Line) */}
               <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between overflow-hidden group hover:border-blue-100 transition-all duration-300">
                  <div className="mb-8">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-6 flex items-center justify-center [&>svg]:stroke-[url(#icon-gradient)]">{f4.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900">{f4.title}</h3>
                     </div>
                     <p className="text-slate-500 text-sm leading-relaxed">{f4.description}</p>
                  </div>

                  {/* Mock Line Chart / Status */}
                  <div className="bg-slate-50 rounded-2xl p-6 h-48 flex flex-col justify-center relative overflow-hidden">

                     <div className="flex items-center justify-between mb-4">
                        <div className="text-xs font-bold text-slate-400 uppercase">Risk Level</div>
                        <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Low</div>
                     </div>

                     {/* Chart */}
                     <div className="relative h-24 w-full">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80" preserveAspectRatio="none">
                           {/* Path with sharp drops (risk) then smooth */}
                           <path d="M0 60 L20 50 L40 70 L60 40 L80 45 L100 20 L120 25 L140 10 L160 15 L180 5 L200 10"
                              className="stroke-blue-200 stroke-2 fill-none" />
                           <path d="M0 60 L20 50 L40 70 L60 40 L80 45 L100 20 L120 25 L140 10 L160 15 L180 5 L200 10"
                              className="stroke-brand-cyan stroke-2 fill-none" strokeDasharray="200" strokeDashoffset="0" />
                           {/* Anomaly Point */}
                           <circle cx="40" cy="70" r="4" className="fill-red-400 stroke-white stroke-2 animate-pulse" />
                        </svg>
                        <div className="absolute top-[65px] left-[35px] text-[10px] font-bold text-red-500 bg-red-50 px-1 rounded border border-red-100 transform -translate-x-1/2 translate-y-2 shadow-sm z-10 hidden group-hover:block">
                           Anomaly Detected
                        </div>
                     </div>

                     <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[92%] rounded-full"></div>
                     </div>
                     <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-slate-400">System Status</span>
                        <span className="text-[10px] font-bold text-slate-600">99.9% Secure</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}
