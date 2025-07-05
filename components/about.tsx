"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, Code, Database, Server } from "lucide-react"
import Image from "next/image"
import CVDownload from "./cv-download"

const skills = [
  { name: "JavaScript/TypeScript", level:60, icon: Code },
  { name: "React/Next.js", level: 80, icon: Code },
  { name: "Python/Django", level: 40, icon: Server },
  { name: "Node.js/Express", level: 30, icon: Server },
  { name: "PostgreSQL/MongoDB", level:82, icon: Database },
  { name: "AWS/Docker", level: 11, icon: Server },
]

const experience = [
  
  {
    title: "Junior Developer",
    company: "WebDev Agency",
    period: "2019 - 2020",
    description: "Developed responsive websites and learned modern web technologies.",
    achievements: ["Built 10+ websites", "Learned React and Node.js", "Collaborated with design team"],
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate computer engineer with expertise in full-stack development and a love for creating innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative flex justify-center lg:justify-start">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-150 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-purple-500/20 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                <Image
                  src="/3.jpg"
                  alt="Abdelmadjid Belilet"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Algeria</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Calendar className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Award className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Computer Engineering Degree</span>
                </div>
              </div>
            </div>
            <CVDownload variant="card" />
          </motion.div>

          {/* Description & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  As a passionate Computer Engineer, I specialize in building robust, scalable web applications that
                  solve real-world problems. My journey in software development began during my university years, where
                  I discovered my love for creating digital solutions.
                </p>
                <p>
                  With over 3 years of experience in full-stack development, I&apos;ve worked with startups and established
                  companies, helping them bring their ideas to life through clean, efficient code and modern
                  technologies.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with the latest technologies. When I&apos;m not
                  coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 mr-3 text-cyan-400" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Experience Timeline</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <span key={i} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm">
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
