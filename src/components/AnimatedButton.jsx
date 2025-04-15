"use client"
import { motion } from "framer-motion"

function AnimatedButton({ children, onClick, className = "", type = "button", variant = "primary" }) {
  // Base styles for different variants
  const baseStyles = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-400",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    outline: "bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10",
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 font-medium rounded-md transition-colors relative overflow-hidden ${baseStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Ripple effect on hover */}
      <motion.span
        className="absolute inset-0 bg-white/20 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.3 }}
        transition={{ duration: 0.6 }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  )
}

export default AnimatedButton
