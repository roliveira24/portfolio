'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-accent/20 to-blue-500/20"></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-secondary">
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.results.map((result) => (
                      <li key={result}>✓ {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
