"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { siteConfig } from "@/lib/siteConfig";

const quickLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-950/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <Link to="home" smooth duration={500} className="inline-block cursor-pointer">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gradient">{siteConfig.brandPrimary}</span>
                <span className="text-slate-700 dark:text-slate-100">{siteConfig.brandSuffix}</span>
              </span>
            </Link>
            <p className="text-slate-700 dark:text-slate-200 text-sm max-w-xs">
              {siteConfig.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={500}
                  className="text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Connect</h4>
            <div className="flex gap-3">
              <SocialIcon href={siteConfig.social.github} icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialIcon href={siteConfig.social.linkedin} icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialIcon href={siteConfig.social.email} icon={<Mail className="w-4 h-4" />} label="Email" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-700 dark:text-slate-200">
            © {new Date().getFullYear()} {siteConfig.footer.copyrightOwner}. All rights reserved.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-200">
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
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
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
