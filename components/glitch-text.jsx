"use client"

import { motion } from "framer-motion"

export default function GlitchText({ text, className = "" }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: ["0 0 0 transparent", "2px 0 0 #ff0000, -2px 0 0 #00ffff", "0 0 0 transparent"],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>

      <motion.span
        className="absolute top-0 left-0 text-red-500 opacity-70"
        animate={{
          x: [0, 2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>

      <motion.span
        className="absolute top-0 left-0 text-cyan-500 opacity-70"
        animate={{
          x: [0, -2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
          delay: 0.05,
        }}
      >
        {text}
      </motion.span>
    </div>
  )
}
