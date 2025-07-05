"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Fast Food Olirab",
    description:
      "End-to-end restaurant management system with real-time order tracking and role-based access. Comprehensive platform for admins, kitchen staff, servers, and cashiers with Firebase integration and WebSocket notifications.",
    image: "https://media.licdn.com/dms/image/v2/D4E05AQEtWehQF7BXdA/videocover-low/B4EZb.0YhBHMCA-/0/1748033033636?e=1752328800&v=beta&t=k5O6rZW3y6yz-CK5Ct91BV26EIc6FAkwAap4ibZzgkI",
    videoUrl: "https://media.licdn.com/dms/image/v2/D4E05AQEtWehQF7BXdA/videocover-low/B4EZb.0YhBHMCA-/0/1748033033636?e=1752328800&v=beta&t=k5O6rZW3y6yz-CK5Ct91BV26EIc6FAkwAap4ibZzgkI",
    technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Laravel", "MySQL", "Firebase", "WebSockets"],
    category: "Full-Stack",
    liveUrl: "https://olirab-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/fast-food-olirab",
    featured: true,
    period: "January 2024 – Present",
    location: "Jijel, Algeria",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full-Stack",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/ecommerce-platform",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management API",
    description:
      "RESTful API built with Python Django and PostgreSQL. Includes JWT authentication, real-time notifications, and comprehensive documentation.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Django", "PostgreSQL", "Redis"],
    category: "Backend",
    liveUrl: "https://api-docs-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/task-api",
    featured: true,
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description:
      "Modern chat application with React, Socket.io, and MongoDB. Features include group chats, file sharing, and emoji reactions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Socket.io", "MongoDB", "Express"],
    category: "Full-Stack",
    liveUrl: "https://chat-app-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/chat-app",
    featured: false,
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard built with React and D3.js. Displays complex data through beautiful charts and real-time updates.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    category: "Frontend",
    liveUrl: "https://dashboard-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/data-dashboard",
    featured: false,
  },
  {
    id: 6,
    title: "Microservices Architecture",
    description:
      "Scalable microservices system with Docker, Kubernetes, and multiple databases. Includes API gateway and service discovery.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Docker", "Kubernetes", "Node.js", "MongoDB"],
    category: "Backend",
    liveUrl: "https://microservices-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/microservices",
    featured: true,
  },
  {
    id: 7,
    title: "Mobile-First Landing Page",
    description:
      "Responsive landing page built with Next.js and Tailwind CSS. Optimized for performance and SEO with perfect Lighthouse scores.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://landing-demo.com",
    githubUrl: "https://github.com/abdelmadjid-belilet/landing-page",
    featured: false,
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [videoControls, setVideoControls] = useState<{ [key: number]: boolean }>({})
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const toggleVideoControls = useCallback((projectId: number) => {
    setVideoControls(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }, [])

  const handleVideoClick = useCallback((projectId: number) => {
    toggleVideoControls(projectId)
  }, [toggleVideoControls])

  const setVideoRef = useCallback((projectId: number, ref: HTMLVideoElement | null) => {
    if (ref) {
      videoRefs.current[projectId] = ref
    } else {
      delete videoRefs.current[projectId]
    }
  }, [])

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, backend systems, and modern
            web technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {project.videoUrl ? (
                    <video
                      ref={(ref) => setVideoRef(project.id, ref)}
                      src={project.videoUrl}
                      poster={project.image}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                      onClick={() => handleVideoClick(project.id)}
                    />
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  {project.videoUrl && (
                    <>
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        🎥 Video
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/60 backdrop-blur-sm rounded-full p-3">
                          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Video Controls Overlay */}
                  <AnimatePresence>
                    {videoControls[project.id] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center"
                        onClick={() => toggleVideoControls(project.id)}
                      >
                        <div 
                          className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full mx-4 border border-slate-600/50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="text-center mb-6">
                            <h4 className="text-white font-semibold text-lg mb-2">{project.title}</h4>
                            <p className="text-slate-400 text-sm">Video Controls</p>
                          </div>
                          
                          <div className="space-y-4">
                            <Button
                              onClick={() => {
                                const video = videoRefs.current[project.id]
                                if (video) {
                                  if (video.paused) {
                                    video.play()
                                  } else {
                                    video.pause()
                                  }
                                }
                              }}
                              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                            >
                              ▶️ Play/Pause
                            </Button>
                            
                            <Button
                              onClick={() => {
                                const video = videoRefs.current[project.id]
                                if (video) {
                                  video.currentTime = 0
                                  video.play()
                                }
                              }}
                              variant="outline"
                              className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                              🔄 Restart
                            </Button>
                            
                            <Button
                              onClick={() => setSelectedProject(project)}
                              variant="outline"
                              className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                              📺 Full Screen
                            </Button>
                            
                            <Button
                              onClick={() => toggleVideoControls(project.id)}
                              variant="ghost"
                              className="w-full text-slate-400 hover:text-white"
                            >
                              ✕ Close
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Period and Location */}
                  {(project.period || project.location) && (
                    <div className="flex items-center gap-4 mb-3 text-xs text-slate-500">
                      {project.period && (
                        <span className="flex items-center">
                          📅 {project.period}
                        </span>
                      )}
                      {project.location && (
                        <span className="flex items-center">
                          📍 {project.location}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-slate-400 hover:text-cyan-400"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {selectedProject.videoUrl ? (
                    <video
                      src={selectedProject.videoUrl}
                      poster={selectedProject.image}
                      className="w-full h-64 object-cover rounded-t-2xl"
                      controls
                      autoPlay
                      muted
                    />
                  ) : (
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-2xl"
                    />
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </Button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  
                  {/* Project Period and Location */}
                  {(selectedProject.period || selectedProject.location) && (
                    <div className="flex items-center gap-6 mb-4 text-sm text-slate-400">
                      {selectedProject.period && (
                        <span className="flex items-center">
                          📅 {selectedProject.period}
                        </span>
                      )}
                      {selectedProject.location && (
                        <span className="flex items-center">
                          📍 {selectedProject.location}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                      onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
                      onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
