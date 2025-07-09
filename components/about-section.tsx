"use client"

import { motion } from "framer-motion"
import { Code, Zap, BookOpen, Rocket } from "lucide-react"

const journeyEvents = [
  {
    year: "2023",
    title: "Joined IIIT Lucknow",
    description: "Started my Computer Science journey, diving deep into algorithms and data structures",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-400",
    status: "Foundation Built",
  },
  {
    year: "2023",
    title: "First Web Development Project",
    description: "Built my first full-stack application using React and Node.js",
    icon: Code,
    color: "from-green-400 to-blue-400",
    status: "Skills Unlocked",
  },
  {
    year: "2024",
    title: "Discovered Web3",
    description: "Fell into the blockchain rabbit hole, started learning Solidity and smart contracts",
    icon: Zap,
    color: "from-purple-400 to-pink-400",
    status: "Mind Blown",
  },
  {
    year: "2024",
    title: "Entering 2nd Year",
    description: "Leveling up with advanced CS concepts while building Web3 projects",
    icon: Rocket,
    color: "from-yellow-400 to-red-400",
    status: "Power Mode: ON",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
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
              {"<Journey />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            From curious freshman to Web3 architect in training — mapping my path through the digital frontier
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-cyan-400 to-purple-400 opacity-30" />

          {journeyEvents.map((event, index) => (
            <motion.div
              key={event.year + event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <motion.div
                  className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Status badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${event.color} text-black font-bold`}
                    >
                      {event.status}
                    </div>
                    <div className="text-green-400 font-mono text-sm">{event.year}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-green-300/70 leading-relaxed">{event.description}</p>

                  {/* Glitch effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </div>

              {/* Central icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-2xl`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <event.icon className="text-black" size={24} />
                </motion.div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Current status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono font-bold">CURRENT STATUS</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Building Tomorrow's Internet</h3>
            <p className="text-green-300/80 max-w-2xl">
              Currently in my 2nd year at IIIT Lucknow, balancing academic excellence with hands-on Web3 development.
              Every day is a new opportunity to push the boundaries of what's possible in the decentralized world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
