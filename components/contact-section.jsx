"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Zap, Terminal, Twitter } from "lucide-react"

export default function ContactSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const terminalRef = useRef(null)

  const terminalCommands = [
    "> cd /ishaan/portfolio/contact",
    '> echo "Ping me on GitHub, LinkedIn or Email for collabs, ideas, and chaos 🧠🚀"',
    "> open https://github.com/bansal-ishaan",
    "> open https://www.linkedin.com/in/ishaan-bansal-2977a7317/",
    "> mailto:ishaanbansal1412@gmail.com",
    '> echo "Ready to build the future together? Let\'s connect!"',
    "> system_status --collaboration=OPEN --learning_mode=ACTIVE",
  ]

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Intersection Observer for auto-start
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          setIsTyping(true)
        }
      },
      { threshold: 0.3 },
    )

    if (terminalRef.current) {
      observer.observe(terminalRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  // Typing animation effect
  useEffect(() => {
    if (!isTyping || currentLineIndex >= terminalCommands.length) return

    const currentLine = terminalCommands[currentLineIndex]

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + currentLine[currentCharIndex])
          setCurrentCharIndex((prev) => prev + 1)
        },
        50,
      ) // Random typing speed for realism

      return () => clearTimeout(timeout)
    } else {
      // Line completed, move to next line
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n")
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, 80) // Pause between lines

      return () => clearTimeout(timeout)
    }
  }, [currentCharIndex, currentLineIndex, isTyping, terminalCommands])

  // Restart animation on hover
  const handleTerminalHover = () => {
    if (!isTyping) {
      setDisplayedText("")
      setCurrentLineIndex(0)
      setCurrentCharIndex(0)
      setIsTyping(true)
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
      href: "https://linkedin.com/in/ishaan-bansal-2977a7317",
      label: "LinkedIn",
      command: "connect --professional",
      color: "hover:text-blue-400 hover:shadow-blue-400/25",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/b_ishaan_1412",
      label: "X (Twitter)",
      command: "follow @b_ishaan_1412",
      color: "hover:text-sky-400 hover:shadow-sky-400/25",
    },
    {
      icon: Mail,
      href: "mailto:ishaanbansal1412@gmail.com",
      label: "Email",
      command: "sendmail ishaanbansal1412@gmail.com",
      color: "hover:text-red-400 hover:shadow-red-400/25",
    },
    {
      icon: Phone,
      href: "tel:+917717348110",
      label: "Mobile",
      command: "call +91-771-7348-110",
      color: "hover:text-green-400 hover:shadow-green-400/25",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {"<Contact />"}
            </span>
          </h2>
          <p className="text-xl text-cyan-300/80 max-w-3xl mx-auto font-mono">
            Ready to build the future together? Let's connect through the matrix
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Full-Width Hacker Terminal */}
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              className="bg-black/95 backdrop-blur-xl border-2 border-green-400/40 rounded-2xl overflow-hidden shadow-2xl shadow-green-400/20 relative"
              onHoverStart={handleTerminalHover}
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(34, 197, 94, 0.3)" }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-gray-900/80 border-b border-green-400/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                  <Terminal size={16} />
                  <span>ishaan@hacker-os:~$</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 min-h-[300px] relative overflow-hidden">
                {/* Code Rain Background */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-green-400 font-mono text-xs"
                      style={{
                        left: `${(i * 5) % 100}%`,
                        top: -20,
                      }}
                      animate={{
                        y: [0, 400],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    >
                      {Math.random().toString(36).substring(7)}
                    </motion.div>
                  ))}
                </div>

                {/* Terminal Text */}
                <div className="relative z-10">
                  <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {displayedText}
                    <motion.span
                      animate={{ opacity: showCursor ? 1 : 0 }}
                      className="text-green-400 bg-green-400/20 px-1"
                    >
                      █
                    </motion.span>
                  </pre>
                </div>

                {/* Glitch Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent"
                  animate={{
                    x: [-100, window.innerWidth + 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                />
              </div>

              {/* Terminal Footer */}
              <div className="px-6 py-3 bg-gray-900/50 border-t border-green-400/30">
                <div className="flex items-center justify-between text-green-400/70 font-mono text-xs">
                  <span>HACKER_OS v2.0.24 - Contact Protocol Active</span>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">// Social Channels</h3>

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
              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">// System Status</h3>

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

            {/* Quick Contact */}
            <motion.div
              className="bg-black/60 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono font-bold">DIRECT CONTACT</span>
              </div>
              <div className="space-y-2">
                <div className="text-white font-mono">ishaanbansal1412@gmail.com</div>
                <div className="text-green-400 font-mono">+91-771-7348-110</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-mono">
                <Zap size={16} />
                <span>Powered by curiosity and caffeine</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
