"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Zap } from "lucide-react"

export default function CyberLoader({ onComplete }) {
  const [loadingText, setLoadingText] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const bootSequence = [
    "INITIALIZING NEURAL NETWORK...",
    "LOADING WEB3 PROTOCOLS...",
    "CONNECTING TO BLOCKCHAIN...",
    "DECRYPTING PORTFOLIO DATA...",
    "ESTABLISHING SECURE CONNECTION...",
    "ISHAAN_OS READY FOR DEPLOYMENT",
  ]

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < bootSequence.length) {
        setLoadingText(bootSequence[currentStep])
        setCurrentStep((prev) => prev + 1)
      } else {
        clearInterval(interval)
        setTimeout(onComplete, 500)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [currentStep, onComplete])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-sm"
            initial={{ y: -100, x: Math.random() * dimensions.width }}
            animate={{ y: dimensions.height + 100 }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      {/* Main Loader */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative">
            <Terminal size={80} className="text-green-400 mx-auto" />
            <motion.div
              className="absolute inset-0 border-4 border-green-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold font-mono text-green-400 mb-4"
        >
          ISHAAN_OS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-green-300 font-mono text-lg mb-8"
        >
          {loadingText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          >
            █
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / bootSequence.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 flex items-center justify-center gap-2 text-cyan-400"
        >
          <Zap size={16} />
          <span className="font-mono text-sm">POWERED BY BLOCKCHAIN ENERGY</span>
        </motion.div>
        </div>
        </div>)}