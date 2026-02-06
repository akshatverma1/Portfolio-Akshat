'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/akshatverma1',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akshat-verma-7baab7221/',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Akshatv001',
      icon: Twitter,
    },
  ]

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border p-8 overflow-y-auto hidden lg:flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-16 tracking-tight animate-fade-in">
            AV
          </h1>
          <p className="text-muted-foreground mb-12 leading-relaxed animate-fade-up delay-1 text-sm">
            Full stack developer crafting scalable web applications with modern technologies.
          </p>

          {/* Navigation */}
          <nav className="space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block text-sm font-medium transition-smooth pb-2 border-b-2 w-full text-left animate-fade-in ${
                  activeSection === item.id
                    ? 'text-foreground border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground hover:border-primary/50'
                }`}
                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="space-y-6 animate-fade-up delay-5">
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-smooth hover:scale-110 hover-glow"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
          <p className="text-xs text-muted-foreground">Let's connect</p>
        </div>
      </div>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background border-b border-border backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground animate-fade-in">AV</h1>
          <nav className="flex gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-medium transition-smooth ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
