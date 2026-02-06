'use client'

import React from "react"

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 lg:ml-64 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have an idea or want to collaborate? I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up delay-1">
            <div className="hover-lift rounded-lg p-4 -mx-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Email
              </h4>
              <a
                href="mailto:akshatverma.dev@gmail.com"
                className="text-lg text-foreground hover:text-primary transition-smooth font-medium hover:translate-x-1"
              >
                akshatverma.dev@gmail.com
              </a>
            </div>

            <div className="hover-lift rounded-lg p-4 -mx-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Phone
              </h4>
              <a
                href="tel:+919109621850"
                className="text-lg text-foreground hover:text-primary transition-smooth font-medium hover:translate-x-1"
              >
                +91 9109621850
              </a>
            </div>

            <div className="hover-lift rounded-lg p-4 -mx-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Location
              </h4>
              <p className="text-lg text-foreground font-medium">
                Indore, India
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border animate-fade-up delay-2">
              <h4 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">
                Follow
              </h4>
              <div className="flex gap-6">
                <a
                  href="https://github.com/akshatverma1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium hover:scale-110 hover:translate-x-1"
                  aria-label="GitHub"
                >
                  GitHub →
                </a>
                <a
                  href="https://www.linkedin.com/in/akshat-verma-7baab7221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium hover:scale-110 hover:translate-x-1"
                  aria-label="LinkedIn"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://x.com/Akshatv001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium hover:scale-110 hover:translate-x-1"
                  aria-label="Twitter"
                >
                  Twitter →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up delay-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-up delay-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-smooth"
                  placeholder="Your name"
                />
              </div>

              <div className="animate-fade-up delay-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-smooth"
                  placeholder="your@email.com"
                />
              </div>

              <div className="animate-fade-up delay-3">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-smooth resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 hover-scale transition-smooth animate-fade-up delay-4"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-center text-accent text-sm font-medium animate-fade-in">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
