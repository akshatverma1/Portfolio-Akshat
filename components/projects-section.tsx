'use client'

import { ExternalLink, Github } from 'lucide-react'

interface Project {
  name: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    name: 'Medzo',
    description: 'Healthcare platform for managing medical services, patient engagement, and health workflows with modern web interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS'],
    featured: true,
    github: 'https://github.com/akshatverma1',
    live: 'https://medzo.com',
  },
  {
    name: 'Crewzy',
    description: 'Networking and hiring platform connecting businesses with skilled professionals for collaboration and project-based hiring.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe API'],
    featured: true,
    github: 'https://github.com/akshatverma1',
    live: 'https://crewzy.com',
  },
  {
    name: 'AITextify',
    description: 'AI-powered SaaS tool for generating, rewriting, and improving professional content for LinkedIn, ads, and blogs.',
    tech: ['OpenAI API', 'React.js', 'Node.js', 'Firebase'],
    featured: true,
    github: 'https://github.com/akshatverma1',
    live: 'https://aitextify.ai',
  },
  {
    name: 'Scrapersa',
    description: 'Web scraping automation platform to extract structured data from websites and export in CSV/JSON formats.',
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/akshatverma1',
    live: 'https://scrapersa.com',
  },
  {
    name: 'Portfolio Builder',
    description: 'Responsive portfolio builder where users can generate a personal developer portfolio website dynamically.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Firebase'],
    github: 'https://github.com/akshatverma1',
  },
  {
    name: 'E-Commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, inventory, and customer data with secure authentication.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT Auth'],
    github: 'https://github.com/akshatverma1',
  },
]

export default function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-32 lg:ml-64 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of my recent work showcasing full-stack development across various domains.
          </p>
        </div>

        {/* All Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group border-b border-border pb-8 last:border-b-0 hover:bg-card/30 transition-smooth rounded-lg p-4 -mx-4 animate-fade-up hover-lift"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl group-hover:text-foreground/80 transition-smooth">
                      {project.description}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap animate-pulse-glow">
                      Featured
                    </span>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full hover:bg-secondary/80 transition-smooth hover:scale-105 cursor-default"
                      style={{ transitionDelay: `${0.05 * idx}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium hover:translate-x-1"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium hover:translate-x-1"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
