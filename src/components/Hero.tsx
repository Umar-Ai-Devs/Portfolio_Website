"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const headlineWords = ["Building", "Intelligent", "AI", "&", "Web", "Systems"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[35%] max-w-md h-[35%] max-h-md bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[5%] w-[40%] max-w-lg h-[40%] max-h-lg bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[25%] h-[25%] bg-blue-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/20 dark:border-cyan-400/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 dark:bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600 dark:bg-cyan-500" />
            </span>
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Available for Hire</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {},
              }}
            >
              {headlineWords.map((word, i) => {
                const isHighlight = word === "AI" || word === "Web";
                return (
                  <motion.span
                    key={i}
                    className={isHighlight ? "inline-block mr-[0.25em] text-gradient" : "inline-block mr-[0.25em] hero-text-dark"}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-dark-mode max-w-2xl mx-auto"
          >
            {siteConfig.heroTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/90 to-blue-600/90 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="Muhammad Umar Resume.pdf"
              download="Muhammad_Umar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card border border-slate-200/60 dark:border-white/10 text-slate-800 dark:text-white font-medium hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              Download Resume
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="flex items-center justify-center gap-5 mt-12"
          >
            <SocialLink href={siteConfig.social.github} icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href={siteConfig.social.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href={siteConfig.social.email} icon={<Mail className="w-5 h-5" />} label="Email" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-full border-2 border-slate-500 dark:border-cyan-500/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-xl glass-card border border-slate-200/50 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-105 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
