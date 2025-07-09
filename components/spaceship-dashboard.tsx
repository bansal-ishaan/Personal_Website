"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Rocket, Code, Zap, Shield, Globe } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "RepuFi",
    coordinates: { x: 25, y: 30 },
    type: "planet",
    status: "operational",
    description: "Decentralized SBT-powered reputation lending protocol for Web3 newcomers",
    buildLogs: [
      "Built SoulBound Token verification system",
      "Integrated AI-powered GitHub reputation analysis",
      "Developed Chrome extension for platform validation",
      "Deployed on Polkadot AssetHub with job-matching filters",
    ],
    tech: ["Solidity", "Next.js", "Wagmi", "IPFS", "Polkadot"],
    github: "https://github.com/bansal-ishaan",
    live: "https://repufi.vercel.app",
    icon: Shield,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 2,
    name: "RootInvest",
    coordinates: { x: 70, y: 25 },
    type: "station",
    status: "operational",
    description: "DeFi investment platform on Rootstock with AI-powered portfolio insights",
    buildLogs: [
      "Developed decentralized portfolio investing dApp",
      "Integrated multi-wallet management system",
      "Built real-time rebalancing UI interface",
      "Added OpenAI/Gemini/Claude API integrations",
    ],
    tech: ["Next.js", "Solidity", "Wagmi", "Rootstock", "AI APIs"],
    github: "https://github.com/bansal-ishaan",
    live: "https://rootinvest.vercel.app",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    name: "QuizRizz",
    coordinates: { x: 20, y: 70 },
    type: "planet",
    status: "operational",
    description: "Comprehensive student portal with quizzes, study materials, and collaboration tools",
    buildLogs: [
      "Built modern web portal for student resources",
      "Integrated real-time chat system",
      "Developed academic assistance chatbot",
      "Added previous year question papers database",
    ],
    tech: ["Next.js", "Framer Motion", "SpringBoot", "MySQL"],
    github: "https://github.com/bansal-ishaan",
    live: "https://quizrizz.vercel.app",
    icon: Globe,
    color: "from-green-400 to-cyan-500",
  },
  {
    id: 4,
    name: "Competitive Programming",
    coordinates: { x: 75, y: 65 },
    type: "satellite",
    status: "development",
    description: "450+ problems solved across Codeforces and CodeChef platforms",
    buildLogs: [
      "Mastered algorithmic problem solving",
      "Achieved consistent rating improvements",
      "Participated in multiple contests",
      "Built strong foundation in data structures",
    ],
    tech: ["C++", "Python", "Algorithms", "Data Structures"],
    github: "https://github.com/bansal-ishaan",
    live: "https://codeforces.com/profile/bansal-ishaan",
    icon: Code,
    color: "from-blue-400 to-purple-500",
  },
]

const statusConfig = {
  operational: { label: "OPERATIONAL", color: "text-green-400", glow: "shadow-green-400/50" },
  construction: { label: "UNDER CONSTRUCTION", color: "text-yellow-400", glow: "shadow-yellow-400/50" },
  development: { label: "IN DEVELOPMENT", color: "text-blue-400", glow: "shadow-blue-400/50" },
  planning: { label: "PLANNING PHASE", color: "text-purple-400", glow: "shadow-purple-400/50" },
}

export default function SpaceshipDashboard() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "planet":
        return "🪐"
      case "station":
        return "🛰️"
      case "satellite":
        return "📡"
      default:
        return "⭐"
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
            <Rocket className="text-blue-400" size={20} />
            <span className="text-blue-400 font-mono font-bold">MISSION CONTROL</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECT GALAXY
            </span>
          </h2>
          <p className="text-xl text-cyan-300/80 max-w-3xl mx-auto font-mono">
            Navigate through the digital cosmos of deployed systems and active missions
          </p>
        </motion.div>

        {/* Spaceship Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-black/80 backdrop-blur-xl border-2 border-cyan-400/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-400/10">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-6 bg-gray-900/50 border-b border-cyan-400/30">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono font-bold">NAVIGATION SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-6 text-cyan-400 font-mono text-sm">
                <span>SECTOR: WEB3_DEVELOPMENT</span>
                <span>COORDINATES: IIIT_LUCKNOW</span>
              </div>
            </div>

            {/* Star Map */}
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20 overflow-hidden">
              {/* Background Stars */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-cyber-grid bg-cyber-grid-size" />
              </div>

              {/* Project Nodes */}
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${project.coordinates.x}%`,
                    top: `${project.coordinates.y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Project Icon */}
                  <div
                    className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl shadow-lg ${statusConfig[project.status].glow} border-2 border-white/30`}
                  >
                    {getProjectIcon(project.type)}

                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${project.color} opacity-30`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  {/* Project Label */}
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black/90 border border-cyan-400/50 rounded-lg text-cyan-400 text-sm font-mono whitespace-nowrap z-10"
                    >
                      {project.name}
                      <div className={`text-xs ${statusConfig[project.status].color} mt-1`}>
                        {statusConfig[project.status].label}
                      </div>
                    </motion.div>
                  )}

                  {/* Connection Lines */}
                  {index > 0 && (
                    <svg
                      className="absolute inset-0 pointer-events-none"
                      style={{ width: "200%", height: "200%", left: "-50%", top: "-50%" }}
                    >
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`${projects[index - 1].coordinates.x - project.coordinates.x + 50}%`}
                        y2={`${projects[index - 1].coordinates.y - project.coordinates.y + 50}%`}
                        stroke="rgba(0, 255, 255, 0.3)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </svg>
                  )}
                </motion.div>
              ))}

              {/* Scanning Line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{ y: [0, 500, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            {/* Status Panel */}
            <div className="p-6 bg-gray-900/30 border-t border-cyan-400/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(statusConfig).map(([status, config]) => {
                  const count = projects.filter((p) => p.status === status).length
                  return (
                    <div key={status} className="text-center">
                      <div className={`${config.color} font-mono font-bold text-xl`}>{count}</div>
                      <div className="text-cyan-400/70 font-mono text-xs">{config.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/90 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-cyan-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-cyan-400/30">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedProject.color} shadow-lg`}>
                    <selectedProject.icon className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono">{selectedProject.name}</h3>
                    <div className={`${statusConfig[selectedProject.status].color} font-mono text-sm`}>
                      {statusConfig[selectedProject.status].label}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-cyan-400 font-mono font-bold mb-3">MISSION BRIEFING</h4>
                  <p className="text-green-300/80 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Build Logs */}
                <div>
                  <h4 className="text-cyan-400 font-mono font-bold mb-3">BUILD LOGS</h4>
                  <div className="bg-black/60 rounded-lg border border-green-400/30 p-4">
                    {selectedProject.buildLogs.map((log: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 text-green-400 font-mono text-sm mb-2 last:mb-0"
                      >
                        <span className="text-cyan-400">[{String(index + 1).padStart(2, "0")}]</span>
                        <span>{log}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-cyan-400 font-mono font-bold mb-3">TECHNOLOGY STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 border border-cyan-500/30 font-mono text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black/60 border border-green-400/30 rounded-lg text-green-400 hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 font-mono"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    ACCESS CODE
                  </motion.a>
                  {selectedProject.live !== "#" && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.color} rounded-lg text-black font-bold hover:shadow-lg transition-all duration-300 font-mono`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      LAUNCH SYSTEM
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
