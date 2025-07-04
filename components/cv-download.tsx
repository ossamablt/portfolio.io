"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CVDownloadProps {
  variant?: "button" | "card"
  size?: "sm" | "default" | "lg"
  className?: string
}

export default function CVDownload({ variant = "button", size = "default", className = "" }: CVDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "success" | "error">("idle")

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadStatus("idle")

    try {
      // Simulate download delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if CV file exists
      const response = await fetch("/cv.pdf", { method: "HEAD" })

      if (response.ok) {
        // File exists, proceed with download
        const link = document.createElement("a")
        link.href = "/cv.pdf"
        link.download = "cv.pdf"
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setDownloadStatus("success")

        // Track download event (you can integrate with analytics)
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "cv_download", {
            event_category: "engagement",
            event_label: "CV Download",
          })
        }
      } else {
        // File doesn't exist, generate and download
        await generateAndDownloadCV()
      }
    } catch (error) {
      console.error("Download failed:", error)
      setDownloadStatus("error")
    } finally {
      setIsDownloading(false)

      // Reset status after 3 seconds
      setTimeout(() => setDownloadStatus("idle"), 3000)
    }
  }

  const generateAndDownloadCV = async () => {
    // Generate CV content
    const cvContent = generateCVContent()

    // Create blob and download
    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "CV-Abdelmadjid-Belilet.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
    setDownloadStatus("success")
  }

  const generateCVContent = () => {
    return `
ABDELMADJID BELILET
Computer Engineer & Full-Stack Developer

CONTACT INFORMATION
Email: abdelmadjid.belilet@email.com
Phone: +213 XXX XXX XXX
Location: Algeria
LinkedIn: linkedin.com/in/abdelmadjid-belilet
GitHub: github.com/abdelmadjid-belilet

PROFESSIONAL SUMMARY
Passionate Computer Engineer with 5+ years of experience in full-stack development.
Specialized in building scalable web applications using React, Next.js, and Python.
Proven track record of delivering high-quality solutions for enterprise clients and startups.
Committed to writing clean, maintainable code and staying current with emerging technologies.

TECHNICAL SKILLS
Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Python, Django, Express.js, FastAPI
Databases: PostgreSQL, MongoDB, Redis, MySQL
Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD
Tools: Git, VS Code, Figma, Postman

PROFESSIONAL EXPERIENCE

Senior Full-Stack Developer | Tech Solutions Inc. | 2022 - Present
• Leading development of enterprise web applications using React, Node.js, and AWS
• Improved application performance by 40% through optimization techniques
• Led a team of 5 developers and implemented CI/CD pipelines
• Collaborated with cross-functional teams to deliver projects on time

Backend Developer | StartupXYZ | 2020 - 2022
• Built scalable APIs and microservices using Python and PostgreSQL
• Designed and implemented RESTful APIs serving 10,000+ daily requests
• Optimized database queries reducing response time by 60%
• Implemented JWT authentication and authorization systems

Junior Developer | WebDev Agency | 2019 - 2020
• Developed responsive websites using HTML, CSS, and JavaScript
• Built 20+ websites for various clients across different industries
• Learned React and Node.js while contributing to team projects
• Collaborated closely with design team to implement pixel-perfect designs

EDUCATION
Bachelor's Degree in Computer Engineering
University Name | 2015 - 2019

PROJECTS
E-Commerce Platform
• Full-stack solution with React, Node.js, and PostgreSQL
• Features: user authentication, payment processing, admin dashboard
• Technologies: React, Node.js, PostgreSQL, Stripe

Task Management API
• RESTful API with Python Django and PostgreSQL
• Features: JWT authentication, real-time notifications
• Technologies: Python, Django, PostgreSQL, Redis

Real-time Chat Application
• Modern chat app with React and Socket.io
• Features: group chats, file sharing, emoji reactions
• Technologies: React, Socket.io, MongoDB, Express

CERTIFICATIONS
• AWS Certified Developer Associate
• MongoDB Certified Developer
• React Developer Certification

LANGUAGES
• Arabic (Native)
• English (Fluent)
• French (Intermediate)

INTERESTS
• Open Source Contributions
• Technical Writing
• Continuous Learning
• Problem Solving
    `.trim()
  }

  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 ${className}`}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-white font-bold">Download CV</h3>
            <p className="text-slate-400 text-sm">Get my complete resume</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-4">
          Download my comprehensive CV with detailed information about my experience, skills, and projects.
        </p>

        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transition-all duration-300"
        >
          {isDownloading ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Preparing...
            </div>
          ) : downloadStatus === "success" ? (
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Downloaded!
            </div>
          ) : downloadStatus === "error" ? (
            <div className="flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              Try Again
            </div>
          ) : (
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </div>
          )}
        </Button>

        {downloadStatus === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-xs mt-2 text-center"
          >
            CV downloaded successfully!
          </motion.p>
        )}

        {downloadStatus === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-2 text-center">
            Download failed. Please try again.
          </motion.p>
        )}
      </motion.div>
    )
  }

  const buttonSizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      size={size}
      className={`bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 ${buttonSizes[size]} ${className}`}
    >
      {isDownloading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
          Preparing...
        </div>
      ) : downloadStatus === "success" ? (
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          Downloaded!
        </div>
      ) : downloadStatus === "error" ? (
        <div className="flex items-center">
          <AlertCircle className="w-4 h-4 mr-2" />
          Try Again
        </div>
      ) : (
        <div className="flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </div>
      )}
    </Button>
  )
}
