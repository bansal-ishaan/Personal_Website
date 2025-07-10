"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, User, Code, Briefcase, Award, Trophy, Mail, X, Cpu, Wifi, Battery, Signal } from "lucide-react"

const navItems = [
  { id: "hero", icon: Terminal, label: "INIT", command: "~/init", color: "#00ff41" },
  { id: "education", icon: User, label: "LEARN", command: "~/edu", color: "#00d4aa" },
  { id: "skills", icon: Code, label: "STACK", command: "~/skills", color: "#ff6b6b" },
  { id: "projects", icon: Briefcase, label: "BUILD", command: "~/projects", color: "#4ecdc4" },
  { id: "achievements", icon: Award, label: "WINS", command: "~/achievements", color: "#ffe66d" },
  { id: "leadership", icon: Trophy, label: "LEAD", command: "~/leadership", color: "#ff8b94" },
  { id: "contact", icon: Mail, label: "PING", command: "~/contact", color: "#95e1d3" },
]

export default function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [currentTime, setCurrentTime] = useState("")
  const [cpuUsage, setCpuUsage] = useState(45)
  const [isHovered, setIsHovered] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Simulate CPU usage fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => Math.max(20, Math.min(80, prev + (Math.random() - 0.5) * 10)))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(
      () => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      },
      8000 + Math.random() * 12000,
    )

    return () => clearInterval(glitchInterval)
  }, [])

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Floating Terminal Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative group p-4 bg-black/90 backdrop-blur-xl border-2 border-green-400/50 rounded-2xl shadow-2xl shadow-green-400/20 hover:shadow-green-400/40 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={
            glitchActive
              ? {
                  x: [-2, 2, -1, 1, 0],
                  filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"],
                }
              : {}
          }
          transition={{ duration: 0.2 }}
        >
          {/* Terminal Icon */}
          <Terminal size={24} className="text-green-400 group-hover:text-white transition-colors duration-300" />

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-green-400/20 -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          {/* Hover Label */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: -10, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3"
              >
                <div className="bg-black/95 backdrop-blur-xl border border-green-400/50 rounded-lg px-3 py-2 shadow-xl">
                  <span className="text-green-400 font-mono text-sm font-bold whitespace-nowrap">// NAV MENU</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </motion.button>
      </motion.div>

      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ opacity: 0, x: 400, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 400, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            >
              <div
                className="bg-black/95 backdrop-blur-xl border-2 border-green-400/50 rounded-2xl shadow-2xl shadow-green-400/20 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,30,30,0.95) 100%)",
                }}
              >
                {/* System Status Bar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-green-400/20 bg-gray-900/50">
                  {/* Left Status */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span className="text-green-400 font-mono text-xs font-bold tracking-wider">NAV_MENU</span>
                  </div>

                  {/* System Stats */}
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <div className="flex items-center gap-1">
                      <Cpu size={10} className="text-cyan-400" />
                      <span className="text-cyan-400">{Math.round(cpuUsage)}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wifi size={10} className="text-green-400" />
                      <span className="text-green-400">SECURE</span>
                    </div>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-lg hover:bg-red-500/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={16} className="text-red-400" />
                  </motion.button>
                </div>

                {/* Header */}
                <div className="px-6 py-4 border-b border-green-400/20">
                  <motion.div
                    className="text-center"
                    animate={
                      glitchActive
                        ? {
                            textShadow: ["0 0 0 transparent", "2px 0 0 #ff0000, -2px 0 0 #00ffff", "0 0 0 transparent"],
                          }
                        : {}
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-green-400 font-mono text-lg font-bold tracking-widest">
                      [ISHAAN_OS_v3.14]
                    </span>
                  </motion.div>
                  <div className="flex items-center justify-center gap-4 mt-2 text-xs font-mono text-green-400/70">
                    <div className="flex items-center gap-1">
                      <Signal size={10} />
                      <span>ONLINE</span>
                    </div>
                    <div>{currentTime}</div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="p-6 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left p-4 rounded-xl font-mono text-sm font-bold transition-all duration-300 group ${
                          isActive
                            ? "bg-gradient-to-r from-green-500/30 to-cyan-500/30 text-white shadow-lg border border-green-400/50"
                            : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-600/30"
                        }`}
                        style={{
                          borderColor: isActive ? `${item.color}40` : undefined,
                          boxShadow: isActive ? `0 0 20px ${item.color}20, inset 0 1px 0 ${item.color}20` : undefined,
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <item.icon
                              size={18}
                              style={{ color: isActive ? item.color : undefined }}
                              className="group-hover:scale-110 transition-transform duration-300"
                            />
                            <div>
                              <div className="text-base">{item.label}</div>
                              <div
                                className="text-xs opacity-70 font-mono"
                                style={{ color: isActive ? item.color : undefined }}
                              >
                                {item.command}
                              </div>
                            </div>
                          </div>

                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: item.color }}
                              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            />
                          )}

                          {/* Arrow */}
                          <span className="text-green-400/50 group-hover:text-green-400 transition-colors duration-300">
                            →
                          </span>
                        </div>

                        {/* Hover Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                          style={{
                            background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)`,
                            filter: "blur(8px)",
                          }}
                        />
                      </motion.button>
                    )
                  })}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-green-400/20 bg-gray-900/30">
                  <div className="flex items-center justify-between text-xs font-mono text-green-400/70">
                    <span>ESC to close</span>
                    <div className="flex items-center gap-2">
                      <Battery size={10} className="text-yellow-400" />
                      <span className="text-yellow-400">98%</span>
                    </div>
                  </div>
                </div>

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent pointer-events-none"
                  animate={{ x: [-100, 400] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                    ease: "linear",
                  }}
                />

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400/50" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400/50" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
