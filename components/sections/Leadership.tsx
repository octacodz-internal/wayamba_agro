"use client";

import { motion } from "framer-motion";
import { Crown, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const leaders = [
  {
    name: "Savindu Bhavath Dilsara",
    role: "Chairman",
    icon: Crown,
    accent: "from-amber-500 to-yellow-400",
    accentBg: "bg-amber-50",
    accentText: "text-amber-700",
    accentBorder: "border-amber-200",
    ringColor: "ring-amber-400/30",
  },
  {
    name: "Indika Jayantha",
    role: "Director",
    icon: Briefcase,
    accent: "from-emerald-500 to-green-400",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-200",
    ringColor: "ring-emerald-400/30",
  },
  {
    name: "Ruwan Manjula",
    role: "Director",
    icon: Briefcase,
    accent: "from-emerald-500 to-green-400",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-200",
    ringColor: "ring-emerald-400/30",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 bg-[#F8F9F8] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="badge badge-green font-[family-name:var(--font-dm-sans)] mb-4">
              OUR LEADERSHIP
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Meet the <span className="text-emerald-600">Visionaries</span>
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 text-lg leading-relaxed">
              Our leadership team brings together strategic vision and agricultural expertise to drive Wayamba Corporation&apos;s mission forward.
            </p>
          </ScrollReveal>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              <div className={`relative bg-white rounded-[2rem] p-8 text-center border ${leader.accentBorder} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                {/* Top accent line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full bg-gradient-to-r ${leader.accent}`} />

                {/* Icon avatar */}
                <div className="flex justify-center mb-6 mt-2">
                  <div className={`relative w-24 h-24 rounded-full ${leader.accentBg} flex items-center justify-center ring-4 ${leader.ringColor} transition-all duration-500 group-hover:ring-8`}>
                    <leader.icon size={36} className={leader.accentText} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-gray-900 mb-2">
                  {leader.name}
                </h3>

                {/* Role badge */}
                <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${leader.accentBg} ${leader.accentText} font-[family-name:var(--font-dm-sans)]`}>
                  {leader.role}
                </span>

                {/* Decorative bottom */}
                <div className="mt-6 flex justify-center gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${leader.accent} opacity-30 group-hover:opacity-70 transition-opacity duration-500`}
                      style={{ transitionDelay: `${j * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
