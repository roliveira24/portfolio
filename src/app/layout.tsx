import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rual Portfolio | Developer & Marketing Expert',
  description: 'Full-stack developer and digital marketing specialist showcasing projects and expertise.',
  keywords: 'developer, marketing, portfolio, web development, digital marketing',
  authors: [{ name: 'Rual' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
