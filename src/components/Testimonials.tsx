'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          What People Say
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-lg p-8 border border-accent/10"
            >
              <p className="text-gray-300 mb-6 italic">\"{ testimonial.quote }\"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-blue-500"></div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
