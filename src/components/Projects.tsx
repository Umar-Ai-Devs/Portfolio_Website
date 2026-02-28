"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Bot, Brain, ExternalLink, Github, LucideIcon } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import projectsData from "@/data/projects.json";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Bot,
  Brain,
};

const projects = projectsData.map((p) => ({
  ...p,
  icon: React.createElement(iconMap[p.icon] || Activity, {
    className: "w-10 h-10 text-cyan-400",
  }),
}));

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-100/80 dark:bg-slate-950/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Featured"
          highlight="Projects"
          subtitle="AI, ML, and software development work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div
                className={`h-full rounded-2xl overflow-hidden glass-card border border-slate-200/60 dark:border-white/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/30 ${project.borderGlow}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-cyan-600 dark:text-cyan-400">
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        aria-label="View code"
                        className="p-2 rounded-lg text-slate-500 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        aria-label="Live demo"
                        className="p-2 rounded-lg text-slate-500 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed mb-5 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-200 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
