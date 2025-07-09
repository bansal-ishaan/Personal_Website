"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Code, Zap, Terminal } from "lucide-react"
import GlitchText from "@/components/glitch-text"
import TypewriterText from "@/components/typewriter-text"

export default function HeroSection() {
  const [showTerminal, setShowTerminal] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Glitch Logo */}
        <motion.div
          initial={{ scale: 0, rotateX: -90 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="text-8xl md:text-9xl font-bold font-mono">
              <GlitchText text="IB" className="text-green-400" />
            </div>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse" />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ISHAAN BANSAL
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-green-300 mb-6 font-mono">
            <TypewriterText
              texts={[
                "> Web3 in Progress...",
                "> Solidity + Rust + Chaos",
                "> B.Tech @ IIIT Lucknow",
                "> Building DeFi Protocols",
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={2000}
            />
          </div>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center gap-6 mb-8 text-sm font-mono flex-wrap"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400">ONLINE</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Code size={14} className="text-cyan-400" />
            <span className="text-cyan-400">CODING</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <Zap size={14} className="text-purple-400" />
            <span className="text-purple-400">LEARNING</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <Terminal size={14} className="text-yellow-400" />
            <span className="text-yellow-400">2ND YEAR</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg text-black font-bold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 rounded-lg font-bold hover:bg-green-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect
          </motion.button>

          <motion.button
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 rounded-lg font-bold hover:bg-purple-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Mind
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-green-400/70 text-sm font-mono mb-2">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="text-green-400" size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          "const future = await buildWeb3()",
          "blockchain.revolutionize()",
          "if (web2) { upgrade.to.web3() }",
          "smart_contracts.deploy()",
          "decentralize.everything()",
          "while(learning) { build() }",
        ].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 font-mono text-sm"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, -50, 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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
