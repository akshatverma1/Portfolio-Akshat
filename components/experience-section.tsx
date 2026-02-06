'use client'

import { Briefcase, MapPin, Calendar } from 'lucide-react'

interface Experience {
  company: string
  position: string
  location: string
  period: string
  description: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    company: 'Dealsource B.V',
    position: 'Software Development Engineer (SDE) Intern',
    location: 'Netherlands',
    period: '2024 - Present',
    description: 'Currently working as an SDE Intern, developing robust backend solutions and contributing to the full-stack development of the platform.',
    responsibilities: [
      'Develop and maintain backend services using modern tech stack',
      'Collaborate with cross-functional teams on product features',
      'Implement scalable solutions for growing user base',
      'Participate in code reviews and system design discussions',
    ],
  },
  {
    company: 'Ashirwad Enterprises',
    position: 'Software Development Engineer (SDE) Intern',
    location: 'Indore, MP, India',
    period: '2023 - 2024',
    description: 'Gained hands-on experience in full-stack development, working on enterprise applications and contributing to multiple projects.',
    responsibilities: [
      'Developed web applications using React.js and Node.js',
      'Implemented database solutions with MongoDB and PostgreSQL',
      'Collaborated with senior developers on feature development',
      'Participated in sprint planning and agile development cycles',
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
            My professional journey as a Software Development Engineer, working on impactful projects and learning cutting-edge technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-12 h-12 hidden md:flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full"></div>
                <div className="relative w-4 h-4 bg-primary rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="md:ml-24 border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/50 transition-smooth hover-lift group">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap animate-pulse-glow">
                    {exp.period}
                  </span>
                </div>

                {/* Location & Period */}
                <div className="flex flex-wrap gap-6 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
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
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
