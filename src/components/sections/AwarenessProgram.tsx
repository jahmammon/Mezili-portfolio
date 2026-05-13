"use client";

import { m } from "framer-motion";
import { Shield, Brain, Users } from "lucide-react";

export default function AwarenessProgram() {
  const pillars = [
    {
      icon: Shield,
      title: "Digital Safety",
      description:
        "Promoting scam awareness, privacy protection, and safer online behavior for vulnerable communities.",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description:
        "Encouraging responsible media consumption and misinformation awareness across generations.",
    },
    {
      icon: Users,
      title: "Community Education",
      description:
        "Building intergenerational digital literacy through accessible workshops and practical guidance.",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="max-w-3xl space-y-5">
          <span className="text-emerald-primary text-xs font-mono uppercase tracking-[0.3em]">
            Community Initiative
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Digital Literacy For All
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            A community-centered awareness initiative designed to improve
            digital safety, critical thinking, and responsible technology use
            among children and elderly populations.
          </p>
        </div>

        {/* Main Infographic */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-panel"
        >
          <img
            src="/assets/digital-literacy-program.jpg"
            alt="Digital Literacy Program"
            className="w-full object-cover"
          />
        </m.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 space-y-5 hover:border-emerald-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-emerald-primary" />
                </div>

                <h3 className="text-xl font-semibold">
                  {pillar.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
    }
