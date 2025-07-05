"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, FileText } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, and TypeScript with pixel-perfect designs.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
 
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture and optimization for both SQL and NoSQL databases.",
    features: ["mysql", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description: "Cloud infrastructure setup, CI/CD pipelines, and containerization for scalable applications.",
    features: ["AWS/Azure", "Docker"],
  },
  {
    icon: FileText,
    title: "Technical Consulting",
    description: "Code reviews, architecture planning, and technical guidance for your development projects.",
    features: ["Code Review", "Architecture Design", "Performance Audit", "Best Practices"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-cyan-400/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center text-slate-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 pt-4 border-t border-slate-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300 group-hover:underline">
                  Learn More →
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your ideas to life with modern web technologies and best practices.
              From concept to deployment, I&apos;ll guide you through every step.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
