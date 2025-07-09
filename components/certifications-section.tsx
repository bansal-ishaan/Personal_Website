"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Zap, Code, Shield, Globe } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Ethereum Developer Bootcamp",
    issuer: "Alchemy University",
    date: "2024",
    description: "Comprehensive Web3 development program covering smart contracts, dApps, and DeFi",
    icon: Shield,
    color: "from-blue-400 to-purple-500",
    type: "certification",
    verified: true,
  },
  {
    id: 2,
    title: "Smart Contract Security",
    issuer: "ConsenSys Academy",
    date: "2024",
    description: "Advanced security practices for Solidity development and vulnerability assessment",
    icon: Code,
    color: "from-red-400 to-pink-500",
    type: "certification",
    verified: true,
  },
  {
    id: 3,
    title: "HackIndia 2024 - 2nd Place",
    issuer: "National Hackathon",
    date: "March 2024",
    description: "Built a blockchain-based supply chain tracking system in 48 hours",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    type: "hackathon",
    verified: true,
  },
  {
    id: 4,
    title: "Web3 Builders Hackathon",
    issuer: "Polygon",
    date: "February 2024",
    description: "Developed a decentralized voting platform with privacy features",
    icon: Zap,
    color: "from-purple-400 to-pink-500",
    type: "hackathon",
    verified: true,
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "300+ hours of hands-on coding covering React, Node.js, and databases",
    icon: Globe,
    color: "from-green-400 to-cyan-500",
    type: "certification",
    verified: true,
  },
  {
    id: 6,
    title: "IIIT Lucknow Coding Contest",
    issuer: "IIIT Lucknow",
    date: "2023",
    description: "1st place in college-wide competitive programming competition",
    icon: Award,
    color: "from-cyan-400 to-blue-500",
    type: "achievement",
    verified: true,
  },
]

const typeConfig = {
  certification: { label: "CERT", bg: "bg-blue-400/20", border: "border-blue-400/50", text: "text-blue-400" },
  hackathon: { label: "HACK", bg: "bg-yellow-400/20", border: "border-yellow-400/50", text: "text-yellow-400" },
  achievement: { label: "WIN", bg: "bg-green-400/20", border: "border-green-400/50", text: "text-green-400" },
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
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
              {"<Achievements />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            Proof of work — certifications, hackathon victories, and milestones on my journey to Web3 mastery
          </p>
        </motion.div>

        {/* Horizontal scrolling container */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0 w-80"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg`}>
                      <cert.icon className="text-black" size={24} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${typeConfig[cert.type].bg} ${typeConfig[cert.type].text} border ${typeConfig[cert.type].border}`}
                      >
                        {typeConfig[cert.type].label}
                      </div>
                      {cert.verified && (
                        <div className="flex items-center gap-1 text-green-400 text-xs font-mono">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          VERIFIED
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300 font-mono">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-green-400 font-semibold text-sm">{cert.issuer}</span>
                      <span className="text-green-300/60 text-sm">•</span>
                      <span className="text-green-300/60 text-sm font-mono">{cert.date}</span>
                    </div>
                    <p className="text-green-300/70 text-sm leading-relaxed">{cert.description}</p>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400/50 rounded-full"
                        initial={{
                          x: Math.random() * 300,
                          y: Math.random() * 200,
                        }}
                        animate={{
                          y: [null, -20, 20],
                          opacity: [0.5, 1, 0.5],
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
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {certifications.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-green-400/30 rounded-full hover:bg-green-400/60 transition-colors duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "6+", label: "Certifications", color: "from-blue-400 to-purple-500" },
            { number: "3+", label: "Hackathons", color: "from-yellow-400 to-orange-500" },
            { number: "2+", label: "Awards Won", color: "from-green-400 to-cyan-500" },
            { number: "500+", label: "Hours Learning", color: "from-purple-400 to-pink-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
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

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Current goal */}
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
            <h3 className="text-xl font-bold text-white mb-2">Certified Ethereum Developer (CED)</h3>
            <p className="text-cyan-300/80 max-w-2xl">
              Working towards the official Ethereum Foundation certification while building production-ready dApps. The
              goal: become a recognized expert in blockchain development by graduation.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
