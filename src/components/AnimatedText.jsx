"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function AnimatedText({ text, className = "", animation = "typing", delay = 0 }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  // Typing animation
  useEffect(() => {
    if (animation !== "typing") return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50) // Adjust speed here

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, animation])

  // Letters animation (each letter animates individually)
  if (animation === "letters") {
    return (
      <motion.span className={className} initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delay }}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  // Fade animation (whole text fades in)
  if (animation === "fade") {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {text}
      </motion.span>
    )
  }

  // Default typing animation
  return <span className={className}>{displayText}</span>
}

export default AnimatedText
