"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import VideoPlayer from "./VideoPlayer"

const projects = [
  {
    title: "Aitextify.space",
    description: "A single, AI-powered image analysis platform that helps you find insights and understand your visual content.",
    video: "F:/Portfolio/src/Assets/Aitextify.mp4",
    poster: "https://i.pinimg.com/736x/ea/01/6e/ea016eb30a1b4e73b7b97752186d418b.jpg",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://www.aitextify.space/",
    githubLink: "https://github.com/akshatverma1/Image-Reader-F",
  },
  {
    title: "Meditativewings.com",
    description: "I developed a responsive blog website featuring a clean and user-friendly interface.",
    video: "/videos/project2.mp4",
    poster: "https://i.pinimg.com/736x/3d/dc/19/3ddc193d625e595f9ba02cd5266b7681.jpg",
    tags: ["React.js", "Node.js", "Express", "MongoDB","JavaScript",],
    liveLink: "https://www.meditativewings.com/",
    githubLink: "https://github.com/akshatverma1/Meditative_Wings_FE",
  },
  {
    title: "Suraksha.site",
    description: "SafeGuard is a cutting-edge family safety app designed to provide peace of mind in an increasingly connected world.",
    video: "/videos/project3.mp4",
    poster: "https://i.pinimg.com/736x/69/27/29/6927293f0afd33655007a2d7e655d489.jpg",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    liveLink: "https://suraksha.site/",
    githubLink: "https://github.com/akshatverma1/Safety_webF",
  },
]

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="py-10" id="projects">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}  
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{margin:"1rem"}}
            className="glass-effect rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform shadow-lg"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="relative h-48">
              <VideoPlayer src={project.video} poster={project.poster} className="w-full h-full" />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 213, 79, 0.2)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <motion.a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
                  whileHover={{ scale: 1.05, x: 3 }}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  className="flex items-center gap-1 text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, x: 3 }}
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ProjectsSection
