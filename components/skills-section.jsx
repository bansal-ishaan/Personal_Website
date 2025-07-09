"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Zap, Rocket, Brain, Server, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    subtitle: "Core Programming Arsenal",
    color: "from-green-400 to-cyan-400",
    borderColor: "border-green-400/50",
    icon: Code,
    skills: [
      { name: "Python", level: 90, description: "Data Structures, Algorithms, Automation" },
      { name: "JavaScript", level: 85, description: "ES6+, Async/Await, DOM Manipulation" },
      { name: "Solidity", level: 80, description: "Smart Contracts, DeFi Protocols" },
      { name: "C++", level: 85, description: "Competitive Programming, DSA" },
      { name: "Rust", level: 70, description: "Systems Programming, Performance" },
      { name: "Java", level: 75, description: "Backend Development, SpringBoot" },
      { name: "Bash", level: 80, description: "Shell Scripting, Automation" },
    ],
  },
  {
    title: "Frameworks",
    subtitle: "Web3 & Development Stack",
    color: "from-purple-400 to-pink-400",
    borderColor: "border-purple-400/50",
    icon: Rocket,
    skills: [
      { name: "HardHat", level: 85, description: "Ethereum Development Environment" },
      { name: "Foundry", level: 80, description: "Smart Contract Testing & Deployment" },
      { name: "Next.js", level: 90, description: "SSR, API Routes, Performance" },
      { name: "Ethers.js", level: 85, description: "Blockchain Interaction Library" },
      { name: "Wagmi", level: 80, description: "React Hooks for Ethereum" },
      { name: "RainbowKit", level: 75, description: "Wallet Connection UI" },
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Development & Deployment",
    color: "from-blue-400 to-cyan-400",
    borderColor: "border-blue-400/50",
    icon: Server,
    skills: [
      { name: "Docker", level: 80, description: "Containerization, DevOps" },
      { name: "Git", level: 90, description: "Version Control, Collaboration" },
      { name: "MySQL", level: 85, description: "Database Design & Management" },
      { name: "OpenZeppelin", level: 80, description: "Smart Contract Security" },
      { name: "Infura", level: 75, description: "Blockchain Infrastructure" },
      { name: "IPFS", level: 80, description: "Decentralized Storage" },
      { name: "Pinata", level: 75, description: "IPFS Pinning Service" },
    ],
  },
  {
    title: "Blockchain",
    subtitle: "Web3 Ecosystem",
    color: "from-yellow-400 to-orange-400",
    borderColor: "border-yellow-400/50",
    icon: Zap,
    skills: [
      { name: "Ethereum", level: 85, description: "Smart Contracts, dApps" },
      { name: "Rootstock", level: 80, description: "Bitcoin-based Smart Contracts" },
      { name: "Polkadot AssetHub", level: 75, description: "Cross-chain Asset Management" },
      { name: "Smart Contracts", level: 85, description: "DeFi, NFTs, DAOs" },
      { name: "dApp Development", level: 80, description: "Full-stack Web3 Apps" },
    ],
  },
  {
    title: "Platforms",
    subtitle: "Operating Systems",
    color: "from-cyan-400 to-blue-400",
    borderColor: "border-cyan-400/50",
    icon: Globe,
    skills: [
      { name: "Linux", level: 85, description: "Command Line, Server Management" },
      { name: "Web", level: 90, description: "Frontend & Backend Development" },
      { name: "Windows", level: 80, description: "Development Environment" },
    ],
  },
  {
    title: "Soft Skills",
    subtitle: "Leadership & Communication",
    color: "from-pink-400 to-purple-400",
    borderColor: "border-pink-400/50",
    icon: Brain,
    skills: [
      { name: "Leadership", level: 90, description: "Team Management, Vision" },
      { name: "Event Management", level: 85, description: "E-Summit, Sports Fest" },
      { name: "Writing", level: 80, description: "Technical Documentation" },
      { name: "Public Speaking", level: 85, description: "Presentations, Workshops" },
      { name: "Time Management", level: 90, description: "Project Coordination" },
    ],
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {"<Skills />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            My technical arsenal — from blockchain protocols to leadership skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-black/60 backdrop-blur-sm border-2 ${category.borderColor} rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                  `,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Category Header */}
              <div className="text-center mb-8 relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}>
                    <category.icon className="text-black" size={24} />
                  </div>
                </div>
                <h3
                  className={`text-2xl font-bold font-mono mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <p className="text-green-300/60 text-sm font-mono">{category.subtitle}</p>
              </div>

              {/* Skills List */}
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="relative group/skill cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold font-mono text-sm">{skill.name}</span>
                      <span className="text-green-400 text-xs font-mono">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-green-500/20 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 border border-green-400/50 rounded-lg text-green-400 text-xs font-mono whitespace-nowrap"
                      >
                        {skill.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-400/50" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Category Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
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
              <span className="text-purple-400 font-mono font-bold">CURRENT FOCUS</span>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">DeFi Protocol Development & Smart Contract Security</h3>
            <p className="text-purple-300/80 max-w-2xl">
              Deep diving into Solidity best practices, building reputation-based lending systems, and exploring
              cross-chain interoperability with Polkadot and Rootstock ecosystems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
