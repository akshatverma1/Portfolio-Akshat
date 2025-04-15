"use client"
import { motion } from "framer-motion"
import { Home, Github, Linkedin, Twitter, Disc } from "lucide-react"
import { Link } from "react-router-dom"

function SocialLinks() {
  const links = [
    { icon: <Home size={20} />, href: "/", label: "Home" },
    { icon: <Github size={20} />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <Disc size={20} />, href: "https://discord.com", label: "Discord" },
  ]

  return (
    <motion.div
      className="flex items-center gap-4 glass-effect px-6 py-3 rounded-full shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {links.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {link.href.startsWith("http") ? (
            <a
              href={link.href}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ) : (
            <Link
              to={link.href}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SocialLinks
