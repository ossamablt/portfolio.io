"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl"
  }



  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      {/* Modern Logo Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.8
        }}
        className={`${sizeClasses[size]} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-2xl border border-slate-700/50 backdrop-blur-sm cursor-pointer`}
        style={{
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }}
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg p-1"
        >
          <Code2 className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5"} text-white`} />
        </motion.div>
      </motion.div>
      
              {/* Logo Text */}
        {showText && (
          <motion.div 
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
            className="flex flex-col cursor-pointer"
          >
            <motion.span 
              whileHover={{ scale: 1.05, x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`${textSizes[size]} font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide`}
            >
              MajidDev
            </motion.span>
            
          </motion.div>
        )}
    </motion.div>
  )
} 