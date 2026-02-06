import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akshat Verma - Full Stack Developer',
  description: 'Full stack developer building scalable web applications. 14+ projects, 6+ hackathons, DRDO internship.',
  generator: 'v0.app',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'Node.js'],
  openGraph: {
    title: 'Akshat Verma - Full Stack Developer',
    description: 'Full stack developer building scalable web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
