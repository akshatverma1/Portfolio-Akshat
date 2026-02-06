'use client'

import React from "react"

import { useRef, useState } from 'react'
import { Play, Pause, Github, Linkedin, Twitter, Volume2, VolumeX } from 'lucide-react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        videoRef.current.muted = false
        setIsMuted(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
    <section id="about" className="pt-40 lg:pt-32 pb-20 lg:ml-64 min-h-screen flex items-center relative overflow-hidden">
      {/* Background animated gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <h1 className="text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-up">
            I'm Akshat Verma
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6 animate-fade-up delay-1">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12 animate-fade-up delay-2">
            Passionate about creating web applications that combine beautiful design with robust engineering. Currently focused on Next.js, React, and Node.js.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mb-12 animate-fade-up delay-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-smooth hover:scale-110 hover-glow"
                  style={{ animationDelay: `${0.1 * (index + 3)}s` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-2xl mb-16 group animate-fade-up delay-3">
          <div className="relative bg-card rounded-lg overflow-hidden aspect-video hover-glow border border-border/50">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1770323267174781-BanGJE77C1hWdLHKKcwrQigvF58eQ0.MP4"
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
              crossOrigin="anonymous"
            />
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:scale-110 transition-smooth animate-bounce-gentle">
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-primary-foreground ml-0.5" />
                ) : (
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                )}
              </div>
            </button>

            {/* Video badge and sound toggle */}
            <div className="absolute top-4 right-4 flex items-center gap-3">
              {isPlaying && (
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-smooth border border-primary/30 hover-scale"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              )}
              {!isPlaying && (
                <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full backdrop-blur-sm border border-primary/30 animate-pulse-glow">
                  Muted
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
          {[
            { number: '14+', label: 'Projects', delay: 'delay-4' },
            { number: '6+', label: 'Hackathons', delay: 'delay-5' },
            { number: '3+', label: 'Years Experience', delay: 'delay-5' },
          ].map((stat) => (
            <div key={stat.label} className={`animate-fade-up ${stat.delay} group cursor-default`}>
              <p className="text-3xl font-bold text-primary animate-pulse-glow group-hover:scale-110 transition-smooth">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm mt-2 group-hover:text-foreground transition-smooth">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

