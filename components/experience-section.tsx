'use client'

import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'

interface Experience {
  company: string
  position: string
  type: string
  location: string
  locationType: string
  period: string
  duration: string
  description: string
  responsibilities: string[]
  website?: string
  isCurrent?: boolean
}

const experiences: Experience[] = [
  {
    company: 'Jaqyi.com',
    position: 'Founder',
    type: 'Full-time',
    location: 'Indore, Madhya Pradesh, India',
    locationType: 'On-site',
    period: 'Mar 2026 – Present',
    duration: '4 mos',
    description: 'Building a next-generation platform empowering businesses and creators with intelligent tools and scalable digital solutions.',
    responsibilities: [
      'Leading product vision, architecture, and full-stack development',
      'Building scalable backend services and real-time features',
      'Designing and implementing the core platform with modern tech stack',
      'Managing product roadmap and driving business growth',
    ],
    website: 'https://jaqyi.com',
    isCurrent: true,
  },
  {
    company: 'Ashirwad Enterprises',
    position: 'Co-Founder',
    type: 'Full-time',
    location: 'Indore, Madhya Pradesh, India',
    locationType: 'Hybrid',
    period: 'Jun 2022 – Present',
    duration: '4 yrs 1 mo',
    description: 'Co-founded and built the digital presence and tech infrastructure for a growing enterprise business.',
    responsibilities: [
      'Developed and launched the company website and digital platform',
      'Built internal tools and automation systems for business operations',
      'Led technology strategy and digital transformation initiatives',
      'Managed cross-functional teams and vendor relationships',
    ],
    website: 'https://www.ashiwadenterprises.site',
    isCurrent: true,
  },
  {
    company: 'Walkover',
    position: 'Software Engineer',
    type: 'Full-time',
    location: 'Indore, Madhya Pradesh, India',
    locationType: 'On-site',
    period: 'Mar 2026',
    duration: '1 mo',
    description: 'Contributed to enterprise-grade software products, working on scalable applications used by millions of users.',
    responsibilities: [
      'Developed and maintained production-grade software features',
      'Collaborated with engineering teams on system design and architecture',
      'Implemented performance optimizations and code quality improvements',
      'Participated in agile development processes and code reviews',
    ],
  },
  {
    company: 'Deal Source B.V.',
    position: 'Software Engineer Intern',
    type: 'Full-time',
    location: 'Utrecht, Netherlands',
    locationType: 'Remote',
    period: 'May 2025 – Mar 2026',
    duration: '11 mos',
    description: 'Worked as an SDE Intern, developing robust backend solutions and contributing to the full-stack development of the platform.',
    responsibilities: [
      'Developed and maintained backend services using modern tech stack',
      'Collaborated with cross-functional teams on product features',
      'Implemented scalable solutions for growing user base',
      'Participated in code reviews and system design discussions',
    ],
  },
  {
    company: 'Onkaam',
    position: 'Founder',
    type: 'Full-time',
    location: 'Indore, Madhya Pradesh, India',
    locationType: 'On-site',
    period: 'Sep 2021 – Jan 2023',
    duration: '1 yr 5 mos',
    description: 'Founded and built a startup from ground up, gaining deep experience in entrepreneurship, product development, and leadership.',
    responsibilities: [
      'Led end-to-end product development from ideation to launch',
      'Built and managed the development team and business operations',
      'Drove business ownership and startup leadership initiatives',
      'Handled fundraising, customer acquisition, and strategic partnerships',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My professional journey — from founding startups to building enterprise software across India and the Netherlands.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="relative animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-12 h-12 hidden md:flex items-center justify-center">
                <div className={`absolute w-12 h-12 rounded-full ${exp.isCurrent ? 'bg-amber-500/20' : 'bg-primary/20'}`}></div>
                <div className={`relative w-4 h-4 rounded-full ${exp.isCurrent ? 'bg-amber-500' : 'bg-primary'}`}>
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-40"></span>
                  )}
                </div>
              </div>

              {/* Content Card */}
              <div className={`md:ml-24 border rounded-lg p-6 hover:bg-card/50 transition-smooth hover-lift group ${
                exp.isCurrent
                  ? 'border-amber-500/30 hover:border-amber-500/50'
                  : 'border-border hover:border-primary/50'
              }`}>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`text-2xl font-semibold text-foreground transition-smooth ${
                      exp.isCurrent ? 'group-hover:text-amber-400' : 'group-hover:text-primary'
                    }`}>
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className={`font-medium ${exp.isCurrent ? 'text-amber-400' : 'text-primary'}`}>
                        {exp.company}
                      </p>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.isCurrent && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full whitespace-nowrap">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Current
                      </span>
                    )}
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                      exp.isCurrent
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'bg-primary/10 text-primary animate-pulse-glow'
                    }`}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Location & Period */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <span className="px-2 py-0.5 text-xs rounded bg-secondary/50 text-muted-foreground">
                    {exp.locationType}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/80 transition-smooth">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Key Responsibilities:</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-3 group-hover:text-foreground/80 transition-smooth"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          exp.isCurrent ? 'bg-amber-500' : 'bg-primary'
                        }`}></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Website Link */}
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 mt-4 text-sm font-medium transition-smooth hover:scale-105 ${
                      exp.isCurrent
                        ? 'text-amber-400 hover:text-amber-300'
                        : 'text-primary hover:text-foreground'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {exp.website.replace('https://', '').replace('www.', '')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
