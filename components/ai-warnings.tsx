"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Zap, Shield, X } from "lucide-react"

const warnings = [
  {
    id: 1,
    type: "SYSTEM",
    message: "Neural network optimization in progress...",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
  },
  {
    id: 2,
    type: "SECURITY",
    message: "Blockchain protocols secured and verified",
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
  },
  {
    id: 3,
    type: "WARNING",
    message: "High creativity levels detected - proceed with caution",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
  },
]

export default function AIWarnings() {
  const [activeWarning, setActiveWarning] = useState(0)
  const [showWarning, setShowWarning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWarning((prev) => (prev + 1) % warnings.length)
      setShowWarning(true)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const currentWarning = warnings[activeWarning]

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 right-6 z-40 max-w-sm"
        >
          <div
            className={`${currentWarning.bg} ${currentWarning.border} border backdrop-blur-sm rounded-lg p-4 shadow-lg`}
          >
            <div className="flex items-start gap-3">
              <currentWarning.icon className={currentWarning.color} size={20} />
              <div className="flex-1">
                <div className={`${currentWarning.color} font-mono font-bold text-sm mb-1`}>{currentWarning.type}</div>
                <div className="text-white/80 text-sm font-mono">{currentWarning.message}</div>
              </div>
              <button
                onClick={() => setShowWarning(false)}
                className="text-white/50 hover:text-white/80 transition-colors duration-300"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
