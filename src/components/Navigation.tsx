'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary">
      <div className="container-max px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Rual
        </Link>
        
        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary">
          <div className="container-max px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
