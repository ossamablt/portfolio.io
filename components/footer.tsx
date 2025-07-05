"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo size="lg" />
            <p className="text-slate-400 leading-relaxed max-w-md">
              Crafting digital experiences with modern technologies and clean code. 
              Let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:majidblt0777@gmail.com"
                  className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  majidblt0777@gmail.com
                </a>
                <div className="flex items-center text-slate-400">
                  <div className="w-4 h-4 mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                  Algeria
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/ossamablt', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abdelmadjid-belilet-6a322724a/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:majidblt0777@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-700/50"
        >
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} MajidDev. All rights reserved.
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-2 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
