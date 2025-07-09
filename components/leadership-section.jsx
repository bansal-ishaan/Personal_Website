"use client"

import { motion } from "framer-motion"
import { Briefcase, PenTool, Trophy, Calendar } from "lucide-react"

const leadershipRoles = [
  {
    id: 1,
    organization: "E-Cell, IIIT Lucknow",
    role: "Organizing Committee Member",
    period: "Oct 2024 – Present",
    description:
      "Led sponsor coordination for E-Summit, drawing 50+ startups and investors. Managed logistics and startup-expo curation with industry panel collaboration.",
    icon: Briefcase,
    color: "from-blue-400 to-purple-500",
    achievements: [
      "Coordinated with 50+ startups and investors",
      "Managed E-Summit logistics and execution",
      "Curated startup expo with industry panels",
    ],
    type: "entrepreneurship",
  },
  {
    id: 2,
    organization: "Crotonia – Literary Society",
    role: "Active Member",
    period: "Oct 2024 – Present",
    description:
      "Hosted writing workshops and participated in intercollegiate poetry competitions, fostering creative expression and literary culture.",
    icon: PenTool,
    color: "from-purple-400 to-pink-500",
    achievements: [
      "Hosted writing workshops for students",
      "Participated in intercollegiate poetry competitions",
      "Promoted literary culture and creative expression",
    ],
    type: "literary",
  },
  {
    id: 3,
    organization: "Eifer – Sports Club, IIIT Lucknow",
    role: "Organizing Committee Member",
    period: "Oct 2024 – Present",
    description:
      "Managed Infinito 4.0 event execution with 200+ participants over 4 days, ensuring smooth operations and participant engagement.",
    icon: Trophy,
    color: "from-green-400 to-cyan-500",
    achievements: [
      "Managed Infinito 4.0 sports fest",
      "Coordinated 200+ participants over 4 days",
      "Ensured smooth event operations",
    ],
    type: "sports",
  },
]

const typeConfig = {
  entrepreneurship: { label: "BUSINESS", bg: "bg-blue-400/20", border: "border-blue-400/50", text: "text-blue-400" },
  literary: { label: "CREATIVE", bg: "bg-purple-400/20", border: "border-purple-400/50", text: "text-purple-400" },
  sports: { label: "SPORTS", bg: "bg-green-400/20", border: "border-green-400/50", text: "text-green-400" },
}

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {"<Leadership />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            Leading initiatives across entrepreneurship, literature, and sports — building communities and driving
            impact
          </p>
        </motion.div>

        {/* Leadership Timeline */}
        <div className="max-w-4xl mx-auto">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="bg-black/60 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                    `,
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${role.color} shadow-lg`}>
                      <role.icon className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 font-mono">
                        {role.organization}
                      </h3>
                      <p className="text-purple-400 font-semibold font-mono">{role.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${typeConfig[role.type].bg} ${typeConfig[role.type].text} border ${typeConfig[role.type].border}`}
                    >
                      {typeConfig[role.type].label}
                    </div>
                    <div className="flex items-center gap-1 text-green-400 font-mono text-sm">
                      <Calendar size={14} />
                      <span>{role.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 relative z-10">
                  <p className="text-green-300/80 leading-relaxed">{role.description}</p>
                </div>

                {/* Achievements */}
                <div className="relative z-10">
                  <h4 className="text-purple-400 font-mono font-bold mb-3">KEY ACHIEVEMENTS:</h4>
                  <div className="space-y-2">
                    {role.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-purple-400/20"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-green-300/80 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                      initial={{
                        x: Math.random() * 500,
                        y: Math.random() * 300,
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

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { number: "3", label: "Active Roles", color: "from-purple-400 to-pink-500" },
            { number: "250+", label: "People Impacted", color: "from-blue-400 to-purple-500" },
            { number: "50+", label: "Startups Connected", color: "from-green-400 to-cyan-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-black/60 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
              <span className="text-pink-400 font-mono font-bold">LEADERSHIP VISION</span>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Building Bridges Between Technology and Community</h3>
            <p className="text-pink-300/80 max-w-2xl">
              Leveraging my technical background to drive meaningful initiatives across diverse domains. From connecting
              startups with investors to fostering creative expression and sports culture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
