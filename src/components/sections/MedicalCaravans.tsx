"use client";

import { m } from "framer-motion";

const regions = [
  {
    title: "Northern Algeria",
    locations: ["Médéa", "Boumerdès"],
  },
  {
    title: "Highlands & Steppe Regions",
    locations: [
      "Djelfa",
      "Laghouat",
      "M'Sila",
      "Barika",
      "Tiaret",
      "Saïda",
      "Khenchela",
      "Tébessa",
    ],
  },
  {
    title: "Sahara & Deep South",
    locations: [
      "Tamanrasset",
      "In Guezzam",
      "Djanet",
      "Illizi",
      "In Salah",
      "Adrar",
      "Timimoun",
      "Béni Abbès",
      "Tindouf",
      "Bordj Badji Mokhtar",
    ],
  },
  {
    title: "Operational Desert Axis",
    locations: [
      "Béchar",
      "Naâma",
      "El Bayadh",
      "Aflou",
      "Messaâd",
      "Ouargla",
      "Ghardaïa",
      "Touggourt",
      "El Oued",
      "El M'Ghair",
      "Biskra",
      "Bou Saâda",
    ],
  },
];

export default function MedicalCaravans() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="max-w-4xl space-y-5">
          <span className="text-emerald-primary text-xs font-mono uppercase tracking-[0.3em]">
            Field Operations
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Volunteer Medical Caravans Across Algeria
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Operational coordination and technical support for volunteer medical
            caravans deployed across remote and underserved regions of Algeria,
            involving multidisciplinary teams, logistics management, and
            humanitarian field operations.
          </p>

          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            These volunteer medical caravans were organized within the framework
            of the Algerian Network of Youth and conducted under the patronage
            of the President of the Republic, bringing multidisciplinary medical
            assistance to remote and underserved populations across Algeria.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["50+", "Field Missions"],
            ["10K+", "Beneficiaries"],
            ["North → Sahara", "Deployment Range"],
            ["National", "Technical Coordination"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
            >
              <p className="text-3xl font-bold text-white">
                {value}
              </p>

              <p className="text-xs font-mono uppercase text-gray-500 mt-3">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Operational Responsibilities
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Technical National Coordinator & Field Operations Support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "National technical coordination",
              "Field mission management",
              "Logistics & deployment support",
              "Medical team coordination",
              "Technical systems support",
              "Remote operations planning",
            ].map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-primary" />
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Deployment */}
        <div className="grid md:grid-cols-2 gap-6">
          {regions.map((region, index) => (
            <m.div
              key={region.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] space-y-5"
            >
              <h3 className="text-xl font-semibold">
                {region.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {region.locations.map((location) => (
                  <span
                    key={location}
                    className="px-3 py-2 rounded-full border border-white/10 text-xs text-gray-400 bg-black/20"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
            }
