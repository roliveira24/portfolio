'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary/50">
      <div className="container-max max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Let's Work Together</h2>
          <p className="text-center text-gray-400 mb-12">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          
          <div className="bg-primary p-8 rounded-lg border border-accent/20 mb-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-secondary border border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-secondary border border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  className="w-full bg-secondary border border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors h-32"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Email: <span className="text-accent">{portfolioData.contact.email}</span>
            </p>
            
            <div className="flex gap-6 justify-center">
              {portfolioData.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
