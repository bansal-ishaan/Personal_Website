"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import CyberLoader from "@/components/cyber-loader"
import HeroSection from "@/components/hero-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import AchievementsSection from "@/components/achievements-section"
import LeadershipSection from "@/components/leadership-section"
import ContactSection from "@/components/contact-section"
import FloatingNav from "@/components/floating-nav"
import MatrixRain from "@/components/matrix-rain"
import CircuitLines from "@/components/circuit-lines"
import ScanLines from "@/components/scan-lines"
import CursorTrail from "@/components/cursor-trail"

export default function CyberPortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [systemBooted, setSystemBooted] = useState(false)

  useEffect(() => {
    const bootSequence = setTimeout(() => {
      setIsLoading(false)
      setSystemBooted(true)
    }, 3000)

    return () => clearTimeout(bootSequence)
  }, [])

  if (isLoading) {
    return <CyberLoader onComplete={() => setIsLoading(false)} />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        {/* Background Effects */}
        <MatrixRain />
        <CircuitLines />
        <ScanLines />
        <CursorTrail />

        {/* Navigation */}
        <FloatingNav />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <LeadershipSection />
          <ContactSection />
        </main>

        {/* Ambient Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
      </div>
    </ThemeProvider>
  )
}
