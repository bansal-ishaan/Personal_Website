"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {"<Education />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            Currently decoding the mysteries of Information Technology at one of India's premier institutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/60 backdrop-blur-xl border-2 border-blue-400/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-400/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-900/50 rounded-lg border border-blue-400/20 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-400 font-mono font-bold">ACADEMIC PROTOCOL ACTIVE</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400 font-mono text-sm">
                <BookOpen size={16} />
                <span>YEAR 02/04</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left: Institution Logo/Icon */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="relative inline-block mb-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 mx-auto lg:mx-0">
                    <GraduationCap size={64} className="text-white" />
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                        initial={{
                          x: Math.random() * 128,
                          y: Math.random() * 128,
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
                </motion.div>

                {/* Status Indicators */}
                <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-mono text-sm">ENROLLED</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <BookOpen size={14} className="text-blue-400" />
                    <span className="text-blue-400 font-mono text-sm">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Right: Education Details */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">Bachelor of Technology</h3>
                  <p className="text-xl text-blue-400 mb-4 font-mono">Information Technology</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 p-4 bg-black/40 rounded-lg border border-blue-400/20">
                    <GraduationCap className="text-blue-400" size={20} />
                    <div>
                      <div className="text-white font-semibold">Indian Institute of Information Technology</div>
                      <div className="text-blue-300/70 text-sm">Lucknow, India</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-black/40 rounded-lg border border-purple-400/20">
                    <Calendar className="text-purple-400" size={20} />
                    <div>
                      <div className="text-white font-semibold">Aug 2024 – Jun 2028</div>
                      <div className="text-purple-300/70 text-sm">4 Year Program</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-black/40 rounded-lg border border-green-400/20">
                    <MapPin className="text-green-400" size={20} />
                    <div>
                      <div className="text-white font-semibold">Currently in 2nd Year</div>
                      <div className="text-green-300/70 text-sm">Specializing in Web3 & Blockchain</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 relative z-10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400 font-mono text-sm">ACADEMIC PROGRESS</span>
                <span className="text-blue-400 font-mono text-sm">25%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            {/* Glitch Effect */}
            <motion.div
              className="absolute inset-0 bg-blue-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
              animate={{
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
