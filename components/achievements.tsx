"use client"

import { motion } from "framer-motion"
import { Award, Star, Target, TrendingUp, Users } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "AWS Certified Developer",
    description: "Professional cloud development certification",
    year: "2024",
    color: "#FF9900"
  },
  
  {
    icon: Star,
    title: "3+ Years Experience",
    description: "Proven track record in full-stack development",
    year: "2022-2025",
    color: "#FF6B6B"
  },
  {
    icon: Target,
    title: "10+ Projects and mini projects Completed",
    description: "Successfully delivered projects across various industries",
    year: "2024",
    color: "#4ECDC4"
  },
  {
    icon: TrendingUp,
    title: "40% Performance Improvement",
    description: "Optimized application performance for enterprise clients",
    year: "2023",
    color: "#45B7D1"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led development teams of 2+ developers",
    year: "2023-2024",
    color: "#96CEB4"
  }
]

export default function Achievements() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recognized expertise and proven track record in delivering high-quality solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <achievement.icon 
                    className="w-6 h-6" 
                    style={{ color: achievement.color }}
                  />
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "2+", label: "Years Experience", icon: TrendingUp },
            { number: "10+", label: "Projects Completed", icon: Target }
           
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 