"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center overflow-hidden border border-slate-200 shadow-md" style={{ boxShadow: "0 2px 8px 0 rgba(34,139,230,0.10)" }}>
                              <Image
                src="/logoo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              </div>
              <span className="text-xl font-bold text-white whitespace-nowrap">
                Abdelmadjid Belilet
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Computer Engineer passionate about creating innovative solutions 
              through modern web technologies and clean code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>abdelmadjid.belilet@email.com</p>
              <p>Algeria</p>
              <p>Available for freelance work</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Github, href: 'https://github.com/abdelmadjid-belilet', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/abdelmadjid-belilet', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abdelmadjid.belilet@email.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors duration-300" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="text-center text-slate-500 text-sm mt-8">
          &copy; {currentYear} Abdelmadjid Belilet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
