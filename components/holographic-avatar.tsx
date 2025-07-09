"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function HolographicAvatar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-48 h-48 mx-auto mb-6">
      {/* Outer Holographic Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Middle Ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-green-400/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-purple-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Avatar Container */}
      <motion.div
        className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-400/20 via-green-400/20 to-purple-400/20 backdrop-blur-sm border border-cyan-400/30 overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Placeholder Avatar */}
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Pixelated Avatar Effect */}
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg relative overflow-hidden">
            {/* Pixel Grid */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
              {[...Array(64)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/20"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    backgroundColor: [
                      "rgba(255,255,255,0.2)",
                      "rgba(0,255,255,0.4)",
                      "rgba(128,0,255,0.3)",
                      "rgba(0,255,65,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Face Features */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl">🤖</div>
            </div>
          </div>
        </div>

        {/* Scan Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-2"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.div>

      {/* Holographic Glitch Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-400/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 0.5, repeat: 3 }}
        />
      )}

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            initial={{
              x: 96 + Math.cos((i * Math.PI * 2) / 8) * 120,
              y: 96 + Math.sin((i * Math.PI * 2) / 8) * 120,
            }}
            animate={{
              x: 96 + Math.cos((i * Math.PI * 2) / 8 + Date.now() * 0.001) * 120,
              y: 96 + Math.sin((i * Math.PI * 2) / 8 + Date.now() * 0.001) * 120,
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
