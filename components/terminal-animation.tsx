"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TerminalAnimationProps {
  onComplete: () => void
}

export default function TerminalAnimation({ onComplete }: TerminalAnimationProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const lines = [
    "$ whoami",
    "ishaan_bansal",
    "$ pwd",
    "/home/ishaan/web3_journey",
    "$ ls -la skills/",
    "drwxr-xr-x  blockchain/",
    "drwxr-xr-x  frontend/",
    "drwxr-xr-x  backend/",
    "-rw-r--r--  ambition.txt",
    "$ cat ambition.txt",
    "Building the future, one block at a time...",
    "$ ./initialize_portfolio.sh",
    "Loading portfolio...",
    "████████████████████████ 100%",
    "Welcome to my digital realm.",
  ]

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(onComplete, 1000)
      return
    }

    const currentText = lines[currentLine]

    if (currentChar < currentText.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, lines, onComplete])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="bg-gray-900 rounded-lg border border-green-500/30 shadow-2xl shadow-green-500/20">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-t-lg border-b border-green-500/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="flex-1 text-center text-green-400 font-mono text-sm">ishaan@iiit-lucknow:~</div>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-green-400 min-h-96">
            {lines.slice(0, currentLine).map((line, index) => (
              <div key={index} className="mb-1">
                {line.startsWith("$") ? (
                  <span className="text-cyan-400">{line}</span>
                ) : line.includes("████") ? (
                  <span className="text-yellow-400">{line}</span>
                ) : line.includes("drwxr-xr-x") ? (
                  <span className="text-blue-400">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </div>
            ))}

            {currentLine < lines.length && (
              <div className="mb-1">
                <span className={lines[currentLine].startsWith("$") ? "text-cyan-400" : ""}>
                  {lines[currentLine].slice(0, currentChar)}
                </span>
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>█</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
