"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-0" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 style = {{marginLeft:"1rem"}}className="text-3xl font-bold ">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-4 glass-effect p-6 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-400">
              I'm a full-stack developer with a passion for building beautiful, functional, and user-friendly websites
              and applications. With expertise in modern web technologies, I create solutions that help businesses grow
              and succeed online.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities.
            </p>
          </motion.div>

          {/* <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="glass-effect p-6 rounded-lg mb-4"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-2">
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400">University Name, 2018-2022</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-effect p-6 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="mt-2">
                <p className="font-medium">Senior Frontend Developer</p>
                <p className="text-gray-400">Company Name, 2022-Present</p>
              </div>
            </motion.div>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
