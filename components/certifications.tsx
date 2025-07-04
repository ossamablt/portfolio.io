"use client"

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "JavaScript Foundations Professional Certificate",
    issuer: "Mozilla via LinkedIn Learning",
    date: "Aug 2024",
    duration: "10h 17m",
  },
  {
    title: "Robotics using Arduino Professional Certificate",
    issuer: "Ellaps Enterprise",
    date: "Jan 2025",
    duration: "20h",
  },
  {
    title: "JavaScript Essential Training",
    issuer: "LinkedIn Learning",
    date: "July 2024",
    duration: "6h 14m",
  },
  {
    title: "Learning the JavaScript Language",
    issuer: "LinkedIn Learning",
    date: "July 2024",
    duration: "4h 2m",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recognized achievements and professional development milestones.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex items-center gap-4"
            >
              <Award className="w-10 h-10 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-slate-300 text-sm mb-1">{cert.issuer}</p>
                <div className="flex gap-4 text-slate-400 text-xs">
                  <span>{cert.date}</span>
                  <span>{cert.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 