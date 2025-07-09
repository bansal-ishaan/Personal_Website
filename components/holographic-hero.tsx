"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Zap, Code, Globe } from "lucide-react"
import GlitchText from "@/components/glitch-text"
import HolographicAvatar from "@/components/holographic-avatar"

export default function HolographicHero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const taglines = ["> building the future of web3", "> 1st year @ iiit lucknow", "> defi protocols architect"]

  useEffect(() => {
    const currentText = taglines[currentTagline]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.substring(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentText.substring(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTagline((prev) => (prev + 1) % taglines.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTagline, taglines])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-cyber-grid bg-cyber-grid-size" />
      </div>

      {/* Main Control Panel */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black/60 backdrop-blur-xl border-2 border-cyan-400/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-400/10"
        >
          {/* System Status Bar */}
          <div className="flex items-center justify-between mb-8 p-4 bg-gray-900/50 rounded-lg border border-cyan-400/20">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono text-sm">SYSTEM ONLINE</span>
              </div>
              <div className="text-cyan-400/60 font-mono text-sm">|</div>
              <div className="text-cyan-400 font-mono text-sm">IIIT_LUCKNOW::YEAR_01</div>
            </div>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-sm">
              <Zap size={16} />
              <span>NEURAL_LINK_ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Avatar and Status */}
            <div className="text-center lg:text-left">
              <HolographicAvatar />

              {/* Status Indicators */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                {[
                  { icon: Code, label: "CODING", color: "text-green-400" },
                  { icon: Globe, label: "WEB3", color: "text-cyan-400" },
                  { icon: Zap, label: "LEARNING", color: "text-purple-400" },
                ].map((status, index) => (
                  <motion.div
                    key={status.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-cyan-400/20 rounded-lg"
                  >
                    <status.icon className={status.color} size={16} />
                    <span className={`${status.color} font-mono text-sm`}>{status.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-green-300/80 max-w-2xl">
                Currently in my 1st year at IIIT Lucknow, diving deep into blockchain development and DeFi protocols.
                Every day is a new opportunity to push the boundaries of decentralized finance and Web3 innovation.
              </p>
            </div>

            {/* Right: Name and Tagline */}
            <div className="space-y-6">
              {/* Name with Holographic Effect */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="text-6xl md:text-7xl font-bold font-mono mb-4">
                  <GlitchText
                    text="ISHAAN"
                    className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-6xl md:text-7xl font-bold font-mono">
                  <GlitchText
                    text="BANSAL"
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  />
                </div>
              </motion.div>

              {/* Animated Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="h-16 flex items-center"
              >
                <div className="text-2xl md:text-3xl font-mono text-green-400">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                    className="text-cyan-400"
                  >
                    █
                  </motion.span>
                </div>
              </motion.div>

              {/* Launch Sequence Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <motion.button
                  onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-mono font-bold text-black overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap size={20} />
                    LAUNCH SEQUENCE
                  </span>

                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glitch Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center mt-12"
          >
            <span className="text-cyan-400/70 font-mono text-sm mb-3">SCROLL TO EXPLORE SYSTEM</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ChevronDown className="text-cyan-400" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          "const blockchain = new Revolution()",
          "if (web2) { upgrade.to.web3() }",
          "smart_contracts.deploy()",
          "decentralize.everything()",
          "while(learning) { build.future() }",
        ].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, 100],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
