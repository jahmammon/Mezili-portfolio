"use client";

import { m } from "framer-motion";

const skillGroups = [
  {
    title: "IT & Digital Systems",
    skills: [
      "IT support",
      "Networks & systems",
      "Digital communication",
      "Content management",
      "Technical troubleshooting",
    ],
  },
  {
    title: "Industrial & Technical Operations",
    skills: [
      "Industrial maintenance",
      "Asphalt plant diagnostics",
      "Machinery systems",
      "Field troubleshooting",
      "Technical coordination",
    ],
  },
  {
    title: "Humanitarian Operations",
    skills: [
      "Medical caravans",
      "Field logistics",
      "Volunteer coordination",
      "Mission planning",
      "Remote operations",
    ],
  },
  {
    title: "International & Civic Engagement",
    skills: [
      "Election observation missions",
      "International youth engagement",
      "Diplomatic participation",
      "Cross-cultural coordination",
      "Public affairs awareness",
    ],
  },
  {
    title: "Communication & Outreach",
    skills: [
      "Digital campaigns",
      "Community engagement",
      "Awareness initiatives",
      "Strategic communication",
      "Multilingual coordination",
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="max-w-3xl space-y-5">
          <span className="text-emerald-primary text-xs font-mono uppercase tracking-[0.3em]">
            Operational Capabilities
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Technical, Humanitarian & Strategic Systems
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Multidisciplinary operational experience combining engineering,
            humanitarian coordination, digital systems, and international engagement.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <m.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 space-y-6 hover:border-emerald-primary/30 transition-colors"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  {group.title}
                </h3>

                <div className="w-12 h-[2px] bg-emerald-primary" />
              </div>

              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-gray-400 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
              }
