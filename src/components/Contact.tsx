"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { siteConfig } from "@/lib/siteConfig";

export function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbdabbyg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-200/50 dark:via-slate-900/20 to-cyan-100/30 dark:to-cyan-950/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Get In"
          highlight="Touch"
          subtitle="Interested in collaborating or have a question? Reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <ContactItem
              icon={<Mail className="w-6 h-6" />}
              label="Email"
              value={siteConfig.contact.email}
              href={siteConfig.contact.email}
            />
            <ContactItem
              icon={<Phone className="w-6 h-6" />}
              label="Phone"
              value={siteConfig.contact.phone}
            />
            <ContactItem
              icon={<MapPin className="w-6 h-6" />}
              label="Location"
              value={siteConfig.contact.location}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 md:p-10 border border-slate-200/60 dark:border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="text-red-600 dark:text-red-400 text-sm">
                  Failed to send message. Please try again.
                </div>
              )}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-slate-200/60 dark:border-white/10 hover:border-cyan-500/20 transition-colors duration-300 group">
      <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-shadow">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-300 mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="text-slate-900 dark:text-slate-50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-slate-900 dark:text-slate-50">{value}</p>
        )}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
