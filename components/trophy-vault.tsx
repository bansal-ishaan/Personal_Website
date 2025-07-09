"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Trophy, Zap, Code, Shield, Globe, Star, Medal } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Polkadot AssetHub Hackathon",
    issuer: "Polkadot Foundation",
    date: "June 2025",
    type: "trophy",
    rarity: "legendary",
    description: "Finalist - Top 18 teams nationwide, invited to Goa finale",
    icon: Trophy,
    nftStyle: "from-purple-400 to-pink-500",
    glowColor: "shadow-purple-500/50",
  },
  {
    id: 2,
    title: "JEE Main 2024",
    issuer: "National Testing Agency",
    date: "2024",
    type: "certification",
    rarity: "legendary",
    description: "99.059 percentile in national engineering entrance",
    icon: Award,
    nftStyle: "from-yellow-400 to-orange-500",
    glowColor: "shadow-yellow-500/50",
  },
  {
    id: 3,
    title: "FOSS Weekend Contributor",
    issuer: "IIIT Lucknow",
    date: "2025",
    type: "badge",
    rarity: "epic",
    description: "Ranked 11th out of 112 contributors",
    icon: Code,
    nftStyle: "from-green-400 to-cyan-500",
    glowColor: "shadow-green-500/50",
  },
  {
    id: 4,
    title: "Competitive Programming",
    issuer: "Codeforces & CodeChef",
    date: "2024-2025",
    type: "certification",
    rarity: "epic",
    description: "450+ problems solved across platforms",
    icon: Zap,
    nftStyle: "from-blue-400 to-purple-500",
    glowColor: "shadow-blue-500/50",
  },
  {
    id: 5,
    title: "E-Cell Leadership",
    issuer: "IIIT Lucknow",
    date: "2024-Present",
    type: "badge",
    rarity: "rare",
    description: "Led sponsor coordination for E-Summit with 50+ startups",
    icon: Shield,
    nftStyle: "from-red-400 to-pink-500",
    glowColor: "shadow-red-500/50",
  },
  {
    id: 6,
    title: "Multi-Club Leadership",
    issuer: "IIIT Lucknow",
    date: "2024-Present",
    type: "badge",
    rarity: "rare",
    description: "Active member in E-Cell, Crotonia, and Eifer clubs",
    icon: Globe,
    nftStyle: "from-cyan-400 to-blue-500",
    glowColor: "shadow-cyan-500/50",
  },
]

const rarityConfig = {
  legendary: {
    label: "LEGENDARY",
    color: "text-yellow-400",
    bg: "bg-yellow-400/20",
    border: "border-yellow-400/50",
    particles: 15,
  },
  epic: {
    label: "EPIC",
    color: "text-purple-400",
    bg: "bg-purple-400/20",
    border: "border-purple-400/50",
    particles: 10,
  },
  rare: {
    label: "RARE",
    color: "text-blue-400",
    bg: "bg-blue-400/20",
    border: "border-blue-400/50",
    particles: 5,
  },
}

export default function TrophyVault() {
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null)
  const [vaultRotation, setVaultRotation] = useState(0)

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-500/20 border border-yellow-500/50 rounded-full mb-6">
            <Medal className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-mono font-bold">TROPHY VAULT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              ACHIEVEMENT NEXUS
            </span>
          </h2>
          <p className="text-xl text-cyan-300/80 max-w-3xl mx-auto font-mono">
            Digital artifacts and proof-of-work from battles won across the Web3 frontier
          </p>
        </motion.div>

        {/* Vault Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-black/80 backdrop-blur-xl border-2 border-yellow-400/30 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-400/10">
            {/* Vault Header */}
            <div className="flex items-center justify-between p-6 bg-gray-900/50 border-b border-yellow-400/30">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 font-mono font-bold">VAULT ACCESS GRANTED</span>
              </div>
              <div className="flex items-center gap-6 text-cyan-400 font-mono text-sm">
                <span>SECURITY: MAXIMUM</span>
                <span>ITEMS: {achievements.length}</span>
              </div>
            </div>

            {/* Rotating Vault Display */}
            <div className="relative h-96 bg-gradient-to-br from-black via-yellow-900/10 to-orange-900/10 overflow-hidden">
              {/* Vault Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-cyber-grid bg-cyber-grid-size" />
              </div>

              {/* Central Vault Mechanism */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-80 h-80 rounded-full border-2 border-yellow-400/30"
                  animate={{ rotate: vaultRotation }}
                  transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                  onUpdate={(latest) => setVaultRotation(latest.rotate as number)}
                >
                  {/* Achievement Orbits */}
                  {achievements.map((achievement, index) => {
                    const angle = (index * 360) / achievements.length
                    const radius = 120
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius

                    return (
                      <motion.div
                        key={achievement.id}
                        className="absolute cursor-pointer group"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                        whileHover={{ scale: 1.3, z: 10 }}
                        onClick={() => setSelectedAchievement(achievement)}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* NFT-style Achievement Card */}
                        <div
                          className={`relative w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.nftStyle} p-1 ${achievement.glowColor} shadow-lg border border-white/30`}
                        >
                          <div className="w-full h-full bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <achievement.icon className="text-white" size={24} />
                          </div>

                          {/* Rarity Indicator */}
                          <div
                            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${rarityConfig[achievement.rarity].bg} ${rarityConfig[achievement.rarity].border} border flex items-center justify-center`}
                          >
                            <Star className={rarityConfig[achievement.rarity].color} size={12} />
                          </div>

                          {/* Floating Particles */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(rarityConfig[achievement.rarity].particles)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
                                initial={{
                                  x: Math.random() * 64,
                                  y: Math.random() * 64,
                                }}
                                animate={{
                                  y: [null, -20, 20],
                                  opacity: [0.6, 1, 0.6],
                                  scale: [1, 1.5, 1],
                                }}
                                transition={{
                                  duration: 2 + Math.random(),
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: Math.random(),
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Hover Tooltip */}
                        <motion.div
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 border border-yellow-400/50 rounded-lg text-yellow-400 text-sm font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                          initial={{ y: 10 }}
                          whileHover={{ y: 0 }}
                        >
                          {achievement.title}
                          <div className={`text-xs ${rarityConfig[achievement.rarity].color} mt-1`}>
                            {rarityConfig[achievement.rarity].label}
                          </div>
                        </motion.div>
                      </motion.div>
                    )
                  })}

                  {/* Central Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Trophy className="text-black" size={32} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Scanning Beam */}
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                animate={{ x: [0, 600, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            {/* Stats Panel */}
            <div className="p-6 bg-gray-900/30 border-t border-yellow-400/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "CERTIFICATIONS",
                    value: achievements.filter((a) => a.type === "certification").length,
                    color: "text-blue-400",
                  },
                  {
                    label: "TROPHIES",
                    value: achievements.filter((a) => a.type === "trophy").length,
                    color: "text-yellow-400",
                  },
                  {
                    label: "BADGES",
                    value: achievements.filter((a) => a.type === "badge").length,
                    color: "text-purple-400",
                  },
                  { label: "TOTAL SCORE", value: "9,750", color: "text-green-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${stat.color} font-mono font-bold text-2xl`}>{stat.value}</div>
                    <div className="text-cyan-400/70 font-mono text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Modal */}
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              className="bg-black/90 backdrop-blur-xl rounded-2xl max-w-md w-full border-2 border-yellow-400/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* NFT Display */}
              <div className={`relative h-64 bg-gradient-to-br ${selectedAchievement.nftStyle} p-8`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <selectedAchievement.icon className="text-white mb-4" size={48} />
                  <h3 className="text-white font-mono font-bold text-xl mb-2">{selectedAchievement.title}</h3>
                  <div
                    className={`px-3 py-1 rounded-full ${rarityConfig[selectedAchievement.rarity].bg} ${rarityConfig[selectedAchievement.rarity].border} border`}
                  >
                    <span className={`${rarityConfig[selectedAchievement.rarity].color} font-mono text-sm font-bold`}>
                      {rarityConfig[selectedAchievement.rarity].label}
                    </span>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      initial={{
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                      }}
                      animate={{
                        y: [null, -30, 30],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3 + Math.random(),
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random(),
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Achievement Details */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-1">ISSUER</div>
                  <div className="text-white font-mono">{selectedAchievement.issuer}</div>
                </div>

                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-1">DATE ACQUIRED</div>
                  <div className="text-white font-mono">{selectedAchievement.date}</div>
                </div>

                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-1">DESCRIPTION</div>
                  <div className="text-green-300/80 text-sm">{selectedAchievement.description}</div>
                </div>

                <motion.button
                  onClick={() => setSelectedAchievement(null)}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-black font-mono font-bold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CLOSE VAULT
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
