'use client'

import { Trophy, Award, Star } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  category: string
  year: string
  rank?: string
}

const achievements: Achievement[] = [
  {
    title: 'DRDO India Training Internship',
    description: 'Selected for a prestigious defense research training internship program at Defence Research and Development Organisation (DRDO), India.',
    category: 'Internship / Research',
    year: '2024',
  },
  {
    title: 'IIT Indore Hackathon - Runner-Up',
    description: 'Secured Runner-Up position in IIT Indore\'s hackathon, competing in coding, innovation, and real-world problem-solving challenges.',
    category: 'Hackathon',
    rank: 'Runner-Up',
    year: '2024',
  },
  {
    title: 'Skitech Hackathon Indore - Top 7',
    description: 'Achieved 7th place among 200+ participants in a competitive programming and innovation-based hackathon.',
    category: 'Hackathon',
    rank: '7th Place',
    year: '2024',
  },
  {
    title: 'Innov8 Hackathon Jaipur - Top 30',
    description: 'Ranked in the Top 30 teams in an inter-collegiate hackathon focused on software development and problem-solving.',
    category: 'Hackathon',
    rank: 'Top 30',
    year: '2024',
  },
  {
    title: 'Hackbytes Hackathon IIIT Jabalpur - Top 10',
    description: 'Secured a Top 10 position in Hackbytes Hackathon hosted by IIIT Jabalpur, showcasing strong coding and innovation skills.',
    category: 'Hackathon',
    rank: 'Top 10',
    year: '2024',
  },
  {
    title: 'Flipkart Grid 6.0 - National Shortlisting',
    description: 'Shortlisted for Flipkart Grid 6.0, a national-level engineering and product-building competition among thousands of applicants.',
    category: 'National Competition',
    year: '2024',
  },
]

function getIcon(category: string) {
  if (category.includes('Hackathon')) return <Trophy className="w-5 h-5" />
  if (category.includes('Competition') || category.includes('National'))
    return <Star className="w-5 h-5" />
  return <Award className="w-5 h-5" />
}

function getCategoryColor(category: string): string {
  if (category.includes('Hackathon')) return 'bg-blue-500 bg-opacity-20 text-blue-300'
  if (category.includes('Competition') || category.includes('National'))
    return 'bg-yellow-500 bg-opacity-20 text-yellow-300'
  return 'bg-green-500 bg-opacity-20 text-green-300'
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 md:py-32 lg:ml-64 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Recognition for innovation and competitive excellence across various platforms and competitions.
          </p>
        </div>

        {/* Achievements List */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="border-b border-border pb-8 last:border-b-0 hover:bg-card/30 transition-smooth rounded-lg p-4 -mx-4 animate-fade-up hover-lift"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {achievement.title}
                  </h3>
                  {achievement.rank && (
                    <p className="text-sm font-medium text-primary mb-2 animate-pulse-glow">
                      {achievement.rank}
                    </p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {achievement.year}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-3 hover:text-foreground/80 transition-smooth">
                {achievement.description}
              </p>

              <div className="inline-block px-3 py-1 bg-secondary text-foreground text-xs rounded-full hover:bg-secondary/80 transition-smooth hover:scale-105 cursor-default">
                {achievement.category}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Hackathons', delay: 'delay-1' },
            { number: '1', label: 'Runner-Up', delay: 'delay-2' },
            { number: '1', label: 'DRDO Internship', delay: 'delay-3' },
            { number: 'Top 10', label: 'Placements', delay: 'delay-4' },
          ].map((stat, idx) => (
            <div key={stat.label} className={`text-center animate-fade-up ${stat.delay}`}>
              <p className="text-3xl font-bold text-primary animate-pulse-glow">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground mt-2 hover:text-foreground transition-smooth">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
