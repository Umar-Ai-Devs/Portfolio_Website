"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const timeline = [
  {
    year: "2025",
    title: "Generative AI Training Program (6 Months)",
    institution: "Tecrix",
    description:
      "Hands-on training in Generative AI, NLP, Transformers, RAG systems, LangChain, and ML deployment.",
  },
  {
    year: "2026",
    title: "Generative AI & Backend Flask Course",
    institution: "Akhuwat Foundation",
    description:
      "Python backend with Flask, REST APIs, database integration, and AI-powered web applications.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Experience"
          highlight="& Education"
          subtitle="Training and certifications in AI and backend development."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent -translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 pb-16 last:pb-0"
            >
              <div className="md:w-1/2 md:text-right md:pr-12 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-cyan-100 dark:bg-cyan-500/15 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30">
                  <Award className="w-3.5 h-3.5" />
                  {item.year}
                </span>
              </div>
              <div className="md:w-1/2 md:pl-12 relative flex-1">
                <div className="absolute left-[19px] md:left-[-25px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 border-white dark:border-[#030712] shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                <div className="glass-card rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 hover:border-cyan-500/20 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="flex items-center gap-1.5 text-sm text-cyan-600 dark:text-cyan-400 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.institution}
                  </p>
                  <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
