"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="About"
          highlight="Me"
          subtitle="Turning complex problems into scalable, intelligent solutions."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile image - left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden glass-card border-2 border-cyan-500/20 dark:border-cyan-400/30 shadow-xl"
          >
            <Image
              src="/profile.jpeg"
              alt="Muhammad Umar - AI & Python Developer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </motion.div>
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-slate-200/60 dark:border-white/10">
              <p className="text-lg md:text-xl text-slate-600 dark:text-white leading-relaxed">
                I&apos;m a passionate <span className="text-cyan-600 dark:text-cyan-400 font-medium">AI & Python Developer</span> focused on
                building intelligent systems. With a strong foundation in Machine Learning and Backend Development, I work on
                RAG pipelines, LLM integrations, and production-ready APIs — always with clean code and scalability in mind.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
