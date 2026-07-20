'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-accent/10 py-8">
      <div className="container-max text-center text-gray-400">
        <p>© {currentYear} Rual. All rights reserved.</p>
        <p className="text-sm mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
