'use client'

import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'React / Next.js',
    'TypeScript',
    'Full Stack Dev',
    'Digital Marketing',
    'Growth Strategy',
    'SEO & Analytics',
  ]

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a developer and marketer passionate about creating beautiful, high-performing digital products. With expertise in both technical development and growth marketing, I help businesses achieve their goals.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My background spans startup environments, agency work, and independent projects, giving me a unique perspective on what it takes to build and scale products.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
                  >
                    <span className="text-sm font-semibold">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
