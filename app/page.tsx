"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
