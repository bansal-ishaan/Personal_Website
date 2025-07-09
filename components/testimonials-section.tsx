"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at DeFi Innovations",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Ishaan delivered an exceptional DeFi protocol that exceeded our expectations. His deep understanding of blockchain technology and attention to security details is remarkable.",
    rating: 5,
    company: "DeFi Innovations",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder at NFT Studios",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Working with Ishaan was a game-changer for our NFT marketplace. His full-stack expertise and innovative approach helped us launch ahead of schedule.",
    rating: 5,
    company: "NFT Studios",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager at Web3 Labs",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Ishaan's ability to translate complex blockchain concepts into user-friendly interfaces is unmatched. He's a true Web3 visionary.",
    rating: 5,
    company: "Web3 Labs",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Developer at Crypto Ventures",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The smart contracts Ishaan developed for our project were flawless. His code quality and security practices are top-notch.",
    rating: 5,
    company: "Crypto Ventures",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            What People Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Testimonials from clients and collaborators who've experienced the magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Floating quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Quote className="text-white" size={20} />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-white/80 text-lg mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-sm opacity-75" />
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating testimonial bubbles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -50, 50],
                x: [null, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
