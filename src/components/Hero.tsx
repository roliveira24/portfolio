'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="section min-h-screen flex items-center justify-center pt-20">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full Stack Developer &
            <span className="gradient-text block">Marketing Strategist</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building digital products that drive growth. Expert in React, Next.js, and data-driven marketing strategies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
