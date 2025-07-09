"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileText, Clock, Target, Zap } from "lucide-react"

export default function MissionBriefing() {
  const [activeTab, setActiveTab] = useState("past")
  const [terminalText, setTerminalText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  const briefingData = {
    past: {
      title: "PAST LOGS",
      icon: Clock,
      color: "text-cyan-400",
      content: [
        "2024.06 >> JEE Main 2024 - Secured 99.059 percentile",
        "2024.08 >> Enrolled at IIIT Lucknow - Information Technology",
        "2024.10 >> Built first major project - QuizRizz Student Portal",
        "2024.10 >> Joined E-Cell, Crotonia Literary Society, Eifer Sports Club",
        "2025.01 >> Started competitive programming journey",
        "2025.05 >> Launched RootInvest DeFi platform on Rootstock",
      ],
    },
    current: {
      title: "CURRENT MISSION",
      icon: Target,
      color: "text-green-400",
      content: [
        "STATUS: 1st Year Student - IIIT Lucknow (BTech IT)",
        "PRIMARY: Mastering blockchain development & DeFi protocols",
        "FOCUS: Smart contract security & decentralized applications",
        "BUILDING: RepuFi - SBT-powered reputation lending protocol",
        "LEADING: E-Cell sponsor coordination & startup ecosystem",
        "COMPETING: 450+ problems solved on competitive programming",
      ],
    },
    future: {
      title: "FUTURE OPS",
      icon: Zap,
      color: "text-purple-400",
      content: [
        "TARGET: Become a leading DeFi protocol architect",
        "MISSION: Launch revolutionary reputation-based lending",
        "GOAL: Bridge traditional finance with Web3 innovation",
        "VISION: Democratize access to decentralized reputation",
        "PLAN: Build the next unicorn in reputation economy",
        "LEGACY: Redefine trust in the digital economy",
      ],
    },
  }

  const currentData = briefingData[activeTab as keyof typeof briefingData]

  useEffect(() => {
    if (currentLine < currentData.content.length) {
      const timer = setTimeout(() => {
        setTerminalText((prev) => prev + currentData.content[currentLine] + "\n")
        setCurrentLine((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentData.content])

  useEffect(() => {
    setTerminalText("")
    setCurrentLine(0)
  }, [activeTab])

  return (
    <section id="mission" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-full mb-6">
            <FileText className="text-red-400" size={20} />
            <span className="text-red-400 font-mono font-bold">CLASSIFIED</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              MISSION BRIEFING
            </span>
          </h2>
          <p className="text-xl text-cyan-300/80 max-w-3xl mx-auto font-mono">
            CLASSIFIED INTEL ON OPERATIVE ISHAAN BANSAL - CLEARANCE LEVEL: OMEGA
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mission Control Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/80 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10"
          >
            {/* Control Panel Header */}
            <div className="flex items-center justify-between p-6 bg-gray-900/50 border-b border-red-500/30">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 font-mono font-bold">MISSION CONTROL</span>
              </div>
              <div className="text-cyan-400 font-mono text-sm">SECURITY_LEVEL: MAXIMUM</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-96">
              {/* Tab Navigation */}
              <div className="lg:border-r border-red-500/30 bg-gray-900/30">
                <div className="p-6">
                  <h3 className="text-red-400 font-mono font-bold mb-6">SELECT TIMELINE</h3>
                  <div className="space-y-3">
                    {Object.entries(briefingData).map(([key, data]) => (
                      <motion.button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                          activeTab === key
                            ? `bg-${data.color.split("-")[1]}-500/20 border-${data.color.split("-")[1]}-500/50 ${data.color}`
                            : "bg-black/40 border-gray-600/30 text-gray-400 hover:border-gray-500/50"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <data.icon size={20} />
                        <span className="font-mono font-bold">{data.title}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terminal Display */}
              <div className="lg:col-span-2 p-6">
                <div className="bg-black/60 rounded-lg border border-cyan-400/30 h-full">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-3 p-4 border-b border-cyan-400/20">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-cyan-400 font-mono text-sm">{currentData.title} - TERMINAL</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm">
                    <div className={`${currentData.color} mb-4`}>
                      $ access_classified_files --target=ishaan_bansal --timeline={activeTab}
                    </div>

                    <div className="space-y-2">
                      <pre className="text-green-400 whitespace-pre-wrap">{terminalText}</pre>
                      {currentLine < currentData.content.length && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                          className="text-green-400"
                        >
                          █
                        </motion.span>
                      )}
                    </div>

                    {currentLine >= currentData.content.length && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 text-cyan-400"
                      >
                        $ END_OF_FILE
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Status Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: "THREAT LEVEL", value: "MINIMAL", color: "text-green-400" },
              { label: "SKILL LEVEL", value: "ADVANCING", color: "text-yellow-400" },
              { label: "MISSION STATUS", value: "ACTIVE", color: "text-red-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-cyan-400/70 font-mono text-sm mb-2">{stat.label}</div>
                <div className={`${stat.color} font-mono font-bold text-xl`}>{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
