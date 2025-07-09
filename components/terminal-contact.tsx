"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, Zap, Terminal, Wifi } from "lucide-react"

export default function TerminalContact() {
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "ISHAAN_OS v3.14159 - COMMUNICATION PROTOCOL ACTIVE",
    "Type 'help' for available commands or start typing your message...",
    "",
  ])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const commands = {
    help: () => [
      "Available commands:",
      "  help     - Show this help message",
      "  about    - Display system information",
      "  contact  - Show contact methods",
      "  clear    - Clear terminal",
      "  ping     - Test connection",
      "Or just type your message to send directly!",
    ],
    about: () => [
      "ISHAAN BANSAL - BLOCKCHAIN DEVELOPER",
      "Location: IIIT Lucknow, India",
      "Status: 1st Year BTech IT Student",
      "Specialization: DeFi Protocols & Smart Contracts",
      "Current Mission: Building reputation-based lending systems",
    ],
    contact: () => [
      "CONTACT CHANNELS:",
      "  Email: ishaanbansal1412@gmail.com",
      "  Mobile: +91-771-7348-110",
      "  GitHub: github.com/bansal-ishaan",
      "  LinkedIn: linkedin.com/in/ishaan-bansal",
    ],
    clear: () => {
      setTerminalHistory([])
      return []
    },
    ping: () => [
      "PING ishaan.dev...",
      "64 bytes from ishaan.dev: icmp_seq=1 ttl=64 time=0.1ms",
      "Connection established - Ready to receive transmissions",
    ],
  }

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const handleCommand = (input: string) => {
    const command = input.toLowerCase().trim()
    const newHistory = [...terminalHistory, `$ ${input}`]

    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands]()
      setTerminalHistory([...newHistory, ...output, ""])
    } else if (command === "") {
      setTerminalHistory([...newHistory, ""])
    } else {
      // Treat as message
      setIsTransmitting(true)
      setTerminalHistory([
        ...newHistory,
        "Transmitting message...",
        "Encrypting payload...",
        "Routing through secure channels...",
      ])

      setTimeout(() => {
        setTerminalHistory((prev) => [
          ...prev,
          "✓ Message transmitted successfully!",
          "✓ Auto-reply protocol activated",
          "✓ Response ETA: 24 hours",
          "",
        ])
        setIsTransmitting(false)
      }, 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(terminalInput)
      setTerminalInput("")
    }
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/bansal-ishaan",
      label: "GitHub",
      command: "ssh git@github.com/bansal-ishaan",
      color: "hover:text-white hover:shadow-white/25",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ishaan-bansal",
      label: "LinkedIn",
      command: "connect --professional",
      color: "hover:text-blue-400 hover:shadow-blue-400/25",
    },
    {
      icon: Mail,
      href: "mailto:ishaanbansal1412@gmail.com",
      label: "Email",
      command: "sendmail ishaanbansal1412@gmail.com",
      color: "hover:text-red-400 hover:shadow-red-400/25",
    },
    {
      icon: Terminal,
      href: "tel:+917717348110",
      label: "Mobile",
      command: "call +91-771-7348-110",
      color: "hover:text-green-400 hover:shadow-green-400/25",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
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
            <Wifi className="text-green-400" size={20} />
            <span className="text-green-400 font-mono font-bold">TRANSMISSION READY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ESTABLISH CONNECTION
            </span>
          </h2>
          <p className="text-xl text-cyan-300/80 max-w-3xl mx-auto font-mono">
            Open secure channel for collaboration, questions, or just to say hello from the digital frontier
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/90 backdrop-blur-xl border-2 border-green-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-green-400/10">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-gray-900/50 border-b border-green-400/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                  <Terminal size={16} />
                  <span>secure_channel@ishaan-bansal.dev</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-96 overflow-y-auto font-mono text-sm">
                {/* Terminal History */}
                <div className="space-y-1 mb-4">
                  {terminalHistory.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`${
                        line.startsWith("$")
                          ? "text-cyan-400"
                          : line.startsWith("✓")
                            ? "text-green-400"
                            : line.includes("ERROR")
                              ? "text-red-400"
                              : "text-green-300"
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>

                {/* Current Input Line */}
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-transparent text-green-400 outline-none"
                    placeholder="Type your message or command..."
                    disabled={isTransmitting}
                  />
                  <motion.span animate={{ opacity: showCursor ? 1 : 0 }} className="text-green-400">
                    █
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Access Panel */}
            <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">QUICK ACCESS CHANNELS</h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 bg-black/40 rounded-lg border border-green-400/20 hover:border-green-400/50 hover:bg-black/60 transition-all duration-300 group ${link.color}`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-400/10 rounded-lg group-hover:bg-green-400/20 transition-colors duration-300">
                        <link.icon size={20} />
                      </div>
                      <div>
                        <div className="text-white font-semibold font-mono">{link.label}</div>
                        <div className="text-green-300/70 text-sm font-mono">{link.command}</div>
                      </div>
                    </div>
                    <div className="text-green-400/50 group-hover:text-green-400 transition-colors duration-300 font-mono">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">SYSTEM STATUS</h3>

              <div className="space-y-4">
                {[
                  { label: "AVAILABILITY", status: "ONLINE", color: "text-green-400" },
                  { label: "RESPONSE TIME", status: "< 24 HOURS", color: "text-cyan-400" },
                  { label: "COLLABORATION", status: "OPEN", color: "text-purple-400" },
                  { label: "LEARNING MODE", status: "ACTIVE", color: "text-yellow-400" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-green-400/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-green-300/80 font-mono text-sm">{item.label}</span>
                    <span className={`${item.color} font-mono font-bold text-sm`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transmission Button */}
            <motion.button
              onClick={() => {
                const message = prompt("Enter your message:")
                if (message) {
                  handleCommand(message)
                }
              }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg text-black font-bold font-mono hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Send size={20} />
              TRANSMIT SIGNAL
              <Zap size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
