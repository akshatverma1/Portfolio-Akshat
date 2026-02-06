'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
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

  return (
    <footer className="bg-background border-t border-border lg:ml-64">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="animate-fade-up">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide">Navigation</h4>
            <div className="space-y-4">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth text-sm hover:translate-x-1">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-smooth text-sm hover:translate-x-1">
                Projects
              </a>
              <a href="#achievements" className="block text-muted-foreground hover:text-primary transition-smooth text-sm hover:translate-x-1">
                Achievements
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="animate-fade-up delay-1">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-smooth hover:scale-110 hover-glow"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-up delay-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:akshatverma.dev@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm hover:translate-x-1"
              >
                Email
              </a>
              <a
                href="tel:+919109621850"
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm hover:translate-x-1"
              >
                +91 9109621850
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 animate-fade-up delay-3">
          <p className="text-center text-muted-foreground text-xs">
            © 2024 Akshat Verma. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
