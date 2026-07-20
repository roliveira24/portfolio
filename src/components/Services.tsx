'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const Services = () => {
  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          What I Offer
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
