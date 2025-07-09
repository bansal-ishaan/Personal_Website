"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const arsenalCategories = {
  core: {
    title: "CORE ARSENAL",
    subtitle: "Battle-tested weapons of mass creation",
    color: "from-green-400 to-cyan-400",
    borderColor: "border-green-400/50",
    weapons: [
      { name: "Python", icon: "🐍", power: 90, type: "LANGUAGE", description: "Primary development language" },
      { name: "JavaScript", icon: "⚡", power: 88, type: "WEB", description: "Frontend & backend mastery" },
      { name: "Solidity", icon: "💎", power: 85, type: "BLOCKCHAIN", description: "Smart contract development" },
      { name: "C++", icon: "⚙️", power: 82, type: "SYSTEMS", description: "Competitive programming weapon" },
      { name: "Next.js", icon: "▲", power: 85, type: "FRAMEWORK", description: "React-based web applications" },
      { name: "Git", icon: "📚", power: 90, type: "TOOLS", description: "Version control mastery" },
    ],
  },
  experimental: {
    title: "EXPERIMENTAL MODULES",
    subtitle: "Advanced protocols under development",
    color: "from-purple-400 to-pink-400",
    borderColor: "border-purple-400/50",
    weapons: [
      {
        name: "HardHat",
        icon: "⚒️",
        power: 80,
        type: "ETHEREUM",
        description: "Smart contract development environment",
      },
      { name: "Foundry", icon: "🔨", power: 75, type: "TESTING", description: "Advanced contract testing framework" },
      { name: "Wagmi", icon: "🌊", power: 78, type: "WEB3", description: "React hooks for Ethereum" },
      { name: "Ethers.js", icon: "🔗", power: 80, type: "LIBRARY", description: "Ethereum interaction library" },
      { name: "IPFS", icon: "🌍", power: 70, type: "STORAGE", description: "Decentralized file storage" },
      { name: "Docker", icon: "🐳", power: 72, type: "DEVOPS", description: "Containerization platform" },
    ],
  },
  target: {
    title: "TARGET ACQUISITIONS",
    subtitle: "Next-generation tech on the radar",
    color: "from-yellow-400 to-red-400",
    borderColor: "border-yellow-400/50",
    weapons: [
      { name: "Rust", icon: "🦀", power: 45, type: "SYSTEMS", description: "Memory-safe systems programming" },
      { name: "Java", icon: "☕", power: 60, type: "ENTERPRISE", description: "Backend development language" },
      { name: "Bash", icon: "💻", power: 65, type: "SCRIPTING", description: "System automation scripts" },
      { name: "MySQL", icon: "🗄️", power: 70, type: "DATABASE", description: "Relational database management" },
      { name: "RainbowKit", icon: "🌈", power: 55, type: "WEB3", description: "Wallet connection library" },
      { name: "OpenZeppelin", icon: "🛡️", power: 60, type: "SECURITY", description: "Smart contract security library" },
    ],
  },
}

export default function ArsenalDisplay() {
  const [selectedWeapon, setSelectedWeapon] = useState<any>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="arsenal" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full mb-6">
            <Shield className="text-green-400" size={20} />
            <span className="text-green-400 font-mono font-bold">WEAPONS CACHE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TECH ARSENAL
            </span>
          </h2>
          <p className="text-xl text-cyan-300/80 max-w-3xl mx-auto font-mono">
            Advanced weaponry for digital warfare and Web3 domination
          </p>
        </motion.div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.entries(arsenalCategories).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`bg-black/60 backdrop-blur-xl border-2 ${category.borderColor} rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300 group relative overflow-hidden`}
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold font-mono mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <p className="text-cyan-400/60 text-sm font-mono">{category.subtitle}</p>
              </div>

              {/* Weapons Grid */}
              <div className="space-y-4">
                {category.weapons.map((weapon, weaponIndex) => (
                  <motion.div
                    key={weapon.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + weaponIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group/weapon cursor-pointer"
                    onClick={() => setSelectedWeapon(weapon)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-black/60">
                      {/* Weapon Icon */}
                      <div className="text-2xl">{weapon.icon}</div>

                      {/* Weapon Info */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold font-mono">{weapon.name}</span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-mono px-2 py-1 rounded bg-gradient-to-r ${category.color} text-black`}
                            >
                              {weapon.type}
                            </span>
                            <span className="text-cyan-400 text-sm font-mono">{weapon.power}%</span>
                          </div>
                        </div>

                        {/* Power Bar */}
                        <div className="h-2 bg-cyan-500/20 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${weapon.power}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + weaponIndex * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hover Tooltip */}
                    <motion.div
                      className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 border border-cyan-400/50 rounded-lg text-cyan-400 text-sm font-mono whitespace-nowrap opacity-0 group-hover/weapon:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {weapon.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyan-400/50" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Category Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Floating Particles */}
              {hoveredCategory === key && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                      initial={{
                        x: Math.random() * 300,
                        y: Math.random() * 400,
                      }}
                      animate={{
                        y: [null, -20, 20],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random(),
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-purple-400 font-mono font-bold">CURRENT RESEARCH</span>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">SoulBound Token Reputation Systems</h3>
            <p className="text-purple-300/80 max-w-2xl font-mono text-sm">
              Developing next-generation reputation lending protocols using SoulBound Tokens and AI-powered GitHub
              analysis. Current focus: RepuFi platform for democratizing access to DeFi through verifiable reputation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
