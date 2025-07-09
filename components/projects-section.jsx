"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Shield, Coins, Users } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "RepuFi",
    subtitle: "Rent-a-Reputation Platform",
    description: "SoulBound Token reputation dApp on Polkadot",
    longDescription:
      "Built decentralized SBT-powered reputation lending protocol that verifies newcomers via SoulBound Tokens. Used AI to compute reputation from GitHub data and built Chrome extension for on-platform SBT validation. Integrated with Polkadot AssetHub for minting and deployed job-matching filters with reputation logic.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Solidity", "Next.js", "Wagmi", "IPFS", "Polkadot"],
    github: "https://github.com/bansal-ishaan/Repu-Fi",
    live: "https://repufi.vercel.app/",
    icon: Shield,
    color: "from-blue-400 to-purple-500",
    date: "June 2025",
    status: "completed",
    featured: true,
  },
  {
    id: 2,
    title: "RootInvest",
    subtitle: "DeFi Investment Platform",
    description: "AI-powered DeFi platform on Rootstock",
    longDescription:
      "Developed dApp on Rootstock for decentralized portfolio investing and community-curated indexing. Integrated smart contract decks with multi-wallet management and real-time rebalancing UI. Used OpenAI, Gemini, Claude APIs for predictive insights and portfolio summaries.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Solidity", "Wagmi", "Rootstock", "AI APIs"],
    github: "https://github.com/datmedevil17/Farming-Protocol",
    live: "https://farming-protocol.vercel.app/",
    icon: Coins,
    color: "from-yellow-400 to-orange-500",
    date: "May 2025",
    status: "completed",
    featured: true,
  },
  {
    id: 3,
    title: "QuizRizz",
    subtitle: "Comprehensive Student Portal",
    description: "Student portal for quizzes, study tools, academic chatbot",
    longDescription:
      "Built a modern web portal where students can find quizzes, study materials, and previous year question papers. Integrated real-time chat for student-to-student interaction and a chatbot for academic assistance. Designed with a focus on ease of access, collaborative learning, and exam preparation tools.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Framer Motion", "SpringBoot", "MySQL"],
    github: "https://github.com/Rohan-droid7341/Web-Vista2.0",
    live: "https://web-vista2.vercel.app/",
    icon: Users,
    color: "from-green-400 to-cyan-500",
    date: "October 2024",
    status: "completed",
    featured: false,
  },
]

const statusConfig = {
  completed: { label: "DEPLOYED", color: "text-green-400", bg: "bg-green-400/20", border: "border-green-400/50" },
  wip: { label: "🚧 WIP", color: "text-yellow-400", bg: "bg-yellow-400/20", border: "border-yellow-400/50" },
  planning: { label: "PLANNING", color: "text-purple-400", bg: "bg-purple-400/20", border: "border-purple-400/50" },
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 relative">
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
              {"<Projects />"}
            </span>
          </h2>
          <p className="text-xl text-green-300/80 max-w-3xl mx-auto font-mono">
            Building the future one commit at a time — from DeFi protocols to student platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-500/30 hover:border-green-400/50 transition-all duration-300 h-full relative">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold ${statusConfig[project.status].bg} ${statusConfig[project.status].color} border ${statusConfig[project.status].border}`}
                  >
                    {statusConfig[project.status].label}
                  </div>

                  {/* Icon */}
                  <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                    <project.icon className="text-black" size={20} />
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 right-4 text-cyan-400 font-mono text-xs">{project.date}</div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-green-400 text-sm font-mono mb-2">{project.subtitle}</p>
                  <p className="text-green-300/70 mb-4 text-sm line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-400 border border-green-500/30 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-400 border border-green-500/30 font-mono">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-black/60 border border-green-400/30 rounded-lg text-green-400 hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 text-sm font-mono"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-2 bg-gradient-to-r ${project.color} rounded-lg text-black font-bold hover:shadow-lg transition-all duration-300 text-sm font-mono`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      View Project
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
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
              className="bg-black/90 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-green-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/70 rounded-full text-green-400 hover:bg-black/90 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
                <div
                  className={`absolute bottom-4 left-6 p-3 rounded-xl bg-gradient-to-r ${selectedProject.color} shadow-lg`}
                >
                  <selectedProject.icon className="text-black" size={24} />
                </div>
                <div
                  className={`absolute bottom-4 right-6 px-3 py-1 rounded-full text-sm font-mono font-bold ${statusConfig[selectedProject.status].bg} ${statusConfig[selectedProject.status].color} border ${statusConfig[selectedProject.status].border}`}
                >
                  {statusConfig[selectedProject.status].label}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2 font-mono">{selectedProject.title}</h3>
                <p className="text-green-400 text-lg font-mono mb-4">{selectedProject.subtitle}</p>
                <p className="text-green-300/80 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 border border-green-500/30 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black/60 border border-green-400/30 rounded-lg text-green-400 hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 font-mono"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    VIEW CODE
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.color} rounded-lg text-black font-bold hover:shadow-lg transition-all duration-300 font-mono`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    VIEW PROJECT
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
