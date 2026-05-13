"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  Shield,
  Send,
  Radio,
} from "lucide-react";

export default function MissionInterface() {
  const [missionType, setMissionType] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("Standard");
  const [contactMethod, setContactMethod] = useState("Email");
  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/mission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          missionType,
          organization,
          location,
          priority,
          contactMethod,
          details,
        }),
      });

      if (!response.ok) {
        throw new Error("Transmission failed");
      }

      alert("Mission request transmitted successfully.");

      setMissionType("");
      setOrganization("");
      setLocation("");
      setPriority("Standard");
      setContactMethod("Email");
      setDetails("");

    } catch (error) {
      console.error(error);

      alert("Transmission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl space-y-5 mb-16">
          <span className="text-emerald-primary text-xs font-mono uppercase tracking-[0.3em]">
            Operational Interface
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Initiate Mission Request
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Secure communication gateway for humanitarian,
            technical, educational and strategic collaboration requests.
          </p>
        </div>

        {/* Interface */}
        <m.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 space-y-8"
        >

          {/* Top Status */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-primary" size={20} />

              <span className="text-sm text-gray-300">
                Secure Operational Channel
              </span>
            </div>

            <div className="flex items-center gap-2 text-emerald-primary text-sm">
              <Radio size={16} />
              ONLINE
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Mission Type */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">
                Mission Type
              </label>

              <select
                value={missionType}
                onChange={(e) => setMissionType(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-primary"
              >
                <option value="">Select mission type</option>
                <option>Humanitarian Caravan</option>
                <option>Digital Awareness Program</option>
                <option>Technical Operations</option>
                <option>IT Support</option>
                <option>Media & Documentation</option>
                <option>Strategic Collaboration</option>
              </select>
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">
                Organization / Institution
              </label>

              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-primary"
                placeholder="Organization name"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">
                Target Wilaya / Region
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-primary"
                placeholder="Location"
              />
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">
                Priority Level
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-primary"
              >
                <option>Standard</option>
                <option>Priority</option>
                <option>Critical</option>
              </select>
            </div>

            {/* Contact Method */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-gray-400">
                Preferred Contact Method
              </label>

              <select
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-primary"
              >
                <option>Email</option>
                <option>Telegram</option>
                <option>WhatsApp</option>
              </select>
            </div>

            {/* Details */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-gray-400">
                Operational Brief
              </label>

              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                rows={7}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-emerald-primary resize-none"
                placeholder="Mission details..."
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-emerald-primary text-black font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send size={18} />

            {loading
              ? "Transmitting..."
              : "Transmit Request"}
          </button>
        </m.form>
      </div>
    </section>
  );
  }
