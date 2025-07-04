"use client"

import { motion } from "framer-motion"
import { ArrowDown, Eye, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypewriterEffect from "@/components/typewriter-effect"
import CVDownload from "./cv-download"
import ParticleBackground from "./particle-background"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <ParticleBackground />
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 mb-8 md:mb-0 md:mr-2 flex justify-center md:justify-start w-full md:w-1/2"
        >
          <Image
            src="/3.jpg"
            alt="Abdelmadjid Belilet photo"
            width={800}
            height={900}
            className="rounded-2xl border-4 border-cyan-400 shadow-2xl object-cover object-top w-72 h-72 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]"
            priority
          />
        </motion.div>
        {/* Right: Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Abdelmadjid{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Belilet</span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 mb-8 h-16">
              <TypewriterEffect
                words={["Computer Engineer", "Full-Stack Developer", "Problem Solver", "Machine Learning Engineer"]}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Passionate about creating innovative solutions through clean code and modern technologies. Specialized in
            building scalable web applications and robust backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <CVDownload size="lg" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center md:justify-start space-x-6 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com/ossamablt", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abdelmadjid-belilet-6a322724a/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abdelmadjid.belilet@email.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
            Jijel, Algeria
          </div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-slate-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
