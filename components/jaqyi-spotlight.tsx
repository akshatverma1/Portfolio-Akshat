'use client'

import { ExternalLink, Rocket, Users, Zap } from 'lucide-react'

export default function JaqyiSpotlight() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/3 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/60"></div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Currently Building
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/60"></div>
        </div>

        {/* Main Spotlight Card */}
        <div className="relative group animate-fade-up delay-1">
          {/* Glowing border effect */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 opacity-60 group-hover:opacity-100 transition-smooth blur-sm"></div>

          <div className="relative rounded-2xl border border-amber-500/20 bg-card/80 backdrop-blur-sm p-8 md:p-10 group-hover:border-amber-500/40 transition-smooth">
            {/* Top row: Logo + Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Jaqyi.com
                </h2>
                <p className="text-lg font-medium bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Founder & CEO · Mar 2026 – Present
                </p>
              </div>
              {/* Live Badge */}
              <div className="sm:ml-auto flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">Live</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-2xl group-hover:text-foreground/80 transition-smooth">
              Building Jaqyi — a next-generation platform empowering businesses and creators with intelligent tools. 
              Focused on crafting seamless digital experiences with cutting-edge technology, scalable architecture, 
              and a relentless drive for innovation.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: Rocket,
                  label: 'Full-time',
                  value: 'On-site · Indore, India',
                },
                {
                  icon: Zap,
                  label: 'Tech Stack',
                  value: 'Next.js · React · Node.js',
                },
                {
                  icon: Users,
                  label: 'Role',
                  value: 'Founder & Full Stack Dev',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-amber-500/30 transition-smooth group/item"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover/item:bg-amber-500/20 transition-smooth">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <a
              href="https://jaqyi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold text-sm hover:from-amber-400 hover:to-yellow-400 transition-smooth hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Visit Jaqyi.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
