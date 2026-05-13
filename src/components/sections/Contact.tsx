"use client";

import { m } from "framer-motion";
import {
  Mail,
  Send,
  MessageCircle,
  MapPin,
  Languages,
} from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "jahamine.mezili@gmail.com",
    href: "mailto:jahamine.mezili@gmail.com",
  },
  {
    icon: Send,
    title: "Telegram",
    value: "t.me/JAHMAMMON",
    href: "https://t.me/JAHMAMMON",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+213 797 165 204",
    href: "https://wa.me/213797165204",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Algeria",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "Arabic — French — English",
  },
];

export default function Contact() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <div className="max-w-3xl space-y-5">
          <span className="text-emerald-primary text-xs font-mono uppercase tracking-[0.3em]">
            Communication Channel
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Let&apos;s Build Meaningful Projects
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Open to collaborations involving humanitarian initiatives,
            technical operations, youth engagement, digital awareness programs,
            and strategic communication projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            const content = (
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-emerald-primary/30 transition-colors space-y-5"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-emerald-primary" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {contact.title}
                  </h3>

                  <p className="text-sm text-gray-400 break-all">
                    {contact.value}
                  </p>
                </div>
              </m.div>
            );

            if (contact.href) {
              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={contact.title}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
    }
