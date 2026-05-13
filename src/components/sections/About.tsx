"use client";

import { m } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-emerald-primary text-xs font-mono uppercase tracking-[0.3em]">
              Identity Profile
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
              Mezili Amine
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
              Industrial engineering technician, operational coordinator,
              humanitarian field organizer, and digital systems enthusiast
              based in Algeria. Specialized in technical operations,
              volunteer medical caravan coordination, and strategic
              communication systems.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="text-xs font-mono text-gray-500 uppercase mt-2">
                Beneficiaries Reached
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
              <p className="text-3xl font-bold text-white">5</p>
              <p className="text-xs font-mono text-gray-500 uppercase mt-2">
                National Missions
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-primary/10 blur-3xl rounded-full" />

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative border border-white/10 rounded-3xl overflow-hidden bg-panel"
          >
            <img
              src="/assets/1000020126.png"
              alt="Mezili Amine"
              className="w-full h-[600px] object-cover"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
