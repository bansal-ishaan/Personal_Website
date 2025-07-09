"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, User, Shield, Rocket, Trophy, Wifi, Zap, Power } from "lucide-react"

const navItems = [
  { id: "hero", icon: Terminal, label: "BOOT", color: "text-green-400" },
  { id: "mission", icon: User, label: "INTEL", color: "text-cyan-400" },
  { id: "arsenal", icon: Shield, label: "ARSENAL", color: "text-purple-400" },
  { id: "projects", icon: Rocket, label: "MISSIONS", color: "text-blue-400" },
  { id: "achievements", icon: Trophy, label: "VAULT", color: "text-yellow-400" },
  { id: "contact", icon: Wifi, label: "CONNECT", color: "text-red-400" },
]

export default function CyberNavigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [systemPower, setSystemPower] = useState(100)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)

      // Simulate power consumption based on scroll
      const powerLevel = Math.max(85, 100 - currentScrollY / 100)
      setSystemPower(powerLevel)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/80 backdrop-blur-xl border-2 border-green-400/30 rounded-2xl shadow-2xl shadow-green-400/10 overflow-hidden">
        {/* System Header */}
        <div className="flex items-center justify-between px-6 py-2 bg-gray-900/50 border-b border-green-400/20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono text-xs font-bold">ISHAAN_OS</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Power size={12} className="text-cyan-400" />
              <span className="text-cyan-400 font-mono text-xs">{Math.round(systemPower)}%</span>
            </div>
            <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
                animate={{ width: `${systemPower}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-2 p-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? `bg-gradient-to-r from-green-500/20 to-cyan-500/20 ${item.color} shadow-lg border border-green-400/30`
                  : "text-green-300/70 hover:text-green-400 hover:bg-green-500/10 border border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-1">
                <item.icon size={18} />
                <span className="font-mono text-xs font-bold">{item.label}</span>
              </div>

              {/* Glitch Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-green-400/20 opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              />

              {/* Active Indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}

          {/* System Status */}
          <div className="ml-4 flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-400/30 rounded-lg">
            <Zap size={14} className="text-green-400" />
            <span className="text-green-400 font-mono text-xs font-bold">ACTIVE</span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
