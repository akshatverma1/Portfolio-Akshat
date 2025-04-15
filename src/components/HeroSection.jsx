"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedText from "./AnimatedText"
import AnimatedButton from "./AnimatedButton"
import { Link } from "react-router-dom"

function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <AnimatedText text="Hi, I'm " animation="letters" />
          <AnimatedText text="Akshat Verma" className="text-yellow-400" animation="letters" delay={0.5} />
          <AnimatedText text=" 👋" animation="fade" delay={1.2} />
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <AnimatedText
            text="A passionate developer focused on creating interactive and user-friendly web experiences."
            animation="typing"
            delay={1.5}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="pt-4"
        >
          <AnimatedButton variant="primary">
            <Link to="/work">View My Work
            </Link>
            <ArrowRight size={16} ></ArrowRight>
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
