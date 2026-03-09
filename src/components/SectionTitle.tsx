"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function SectionTitle({ title, highlight, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-dark-mode">
        {title}
        {highlight && <span className="text-gradient"> {highlight}</span>}
      </h2>
      <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mt-4" />
      {subtitle && (
        <p className="mt-6 text-lg text-dark-mode max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
