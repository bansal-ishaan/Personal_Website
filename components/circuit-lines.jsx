"use client"

import { motion } from "framer-motion"

export default function CircuitLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      {/* Horizontal Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            top: `${(i + 1) * 12.5}%`,
            left: 0,
            right: 0,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        />
      ))}

      {/* Vertical Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent"
          style={{
            left: `${(i + 1) * 16.66}%`,
            top: 0,
            bottom: 0,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 4,
          }}
        />
      ))}

      {/* Circuit Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </div>
  )
}
