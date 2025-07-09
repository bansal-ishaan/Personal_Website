"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Zap, Code } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Polkadot AssetHub Hackathon",
    subtitle: "Finalist",
    description: "Selected among top 18 teams nationwide and invited to Goa for Polkadot Finale",
    icon: Trophy,
    color: "from-purple-400 to-pink-500",
    date: "June 2025",
    type: "hackathon",
    rarity: "legendary",
  },
  {
    id: 2,
    title: "JEE Main 2024",
    subtitle: "99.059 Percentile",
    description: "Secured 99.059 percentile in India's national-level engineering entrance exam",
    icon: Award,
    color: "from-yellow-400 to-orange-500",
    date: "2024",
    type: "academic",
    rarity: "legendary",
  },
  {
    id: 3,
    title: "Competitive Programming",
    subtitle: "450+ Problems Solved",
    description: "450+ problems solved on Codeforces and CodeChef platforms",
    icon: Code,
    color: "from-blue-400 to-purple-500",
    date: "2024-2025",
    type: "programming",
    rarity: "epic",
  },
  {
    id: 4,
    title: "FOSS Weekend Contributor",
    subtitle: "Ranked 11th",
    description: "Ranked 11th out of 112 contributors at IIIT Lucknow's FOSS Weekend",
    icon: Zap,
    color: "from-green-400 to-cyan-500",
    date: "2025",
    type: "opensource",
    rarity: "epic",
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

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {"<Achievements />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            Milestones and victories on my journey through competitive programming and Web3 development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
                    `,
                      backgroundSize: "25px 25px",
                    }}
                  />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg`}>
                    <achievement.icon className="text-black" size={24} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${rarityConfig[achievement.rarity].bg} ${rarityConfig[achievement.rarity].color} border ${rarityConfig[achievement.rarity].border}`}
                    >
                      {rarityConfig[achievement.rarity].label}
                    </div>
                    <div className="text-yellow-400 font-mono text-sm">{achievement.date}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 font-mono">
                    {achievement.title}
                  </h3>
                  <p className="text-yellow-400 font-semibold text-sm mb-3 font-mono">{achievement.subtitle}</p>
                  <p className="text-green-300/70 text-sm leading-relaxed">{achievement.description}</p>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(rarityConfig[achievement.rarity].particles)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
                      initial={{
                        x: Math.random() * 400,
                        y: Math.random() * 200,
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

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "4", label: "Major Achievements", color: "from-yellow-400 to-orange-500" },
            { number: "450+", label: "Problems Solved", color: "from-blue-400 to-purple-500" },
            { number: "99.059%", label: "JEE Percentile", color: "from-green-400 to-cyan-500" },
            { number: "Top 18", label: "Hackathon Rank", color: "from-purple-400 to-pink-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`text-3xl md:text-4xl font-bold font-mono mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.number}
              </div>
              <div className="text-green-300/70 font-mono text-sm">{stat.label}</div>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Next Target */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 font-mono font-bold">NEXT TARGET</span>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              International Blockchain Hackathons & Open Source Contributions
            </h3>
            <p className="text-cyan-300/80 max-w-2xl">
              Aiming for top positions in global Web3 hackathons while contributing to major DeFi protocols. The goal:
              become a recognized contributor in the blockchain ecosystem by graduation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
