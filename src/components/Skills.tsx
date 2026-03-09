"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Server,
  Database,
  Code,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const skillsWithLevel = [
  { name: "AI & Machine Learning", icon: Brain, level: 90, color: "from-cyan-400 to-blue-500" },
  { name: "Generative AI & RAG", icon: Cpu, level: 88, color: "from-blue-400 to-purple-500" },
  { name: "Python Backend", icon: Server, level: 92, color: "from-purple-400 to-pink-500" },
  { name: "Databases & Vector DBs", icon: Database, level: 85, color: "from-cyan-400 to-teal-500" },
  { name: "Frontend & Prototyping", icon: Code, level: 75, color: "from-blue-400 to-cyan-400" },
  { name: "Tools & DevOps", icon: Terminal, level: 82, color: "from-slate-400 to-slate-600" },
];

function SkillRow({
  name,
  icon: Icon,
  level,
  color,
  index,
}: {
  name: string;
  icon: LucideIcon;
  level: number;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-medium text-dark-mode">{name}</span>
        </div>
        <span className="text-sm text-slate-600 dark:text-slate-300 tabular-nums">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden border border-slate-200 dark:border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Skills"
          highlight="& Expertise"
          subtitle="Core competencies in AI, backend, and tooling."
        />
        <div className="space-y-8">
          {skillsWithLevel.map((skill, index) => (
            <SkillRow key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
