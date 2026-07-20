'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
