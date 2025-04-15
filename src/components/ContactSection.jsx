"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
    alert("Message sent! (This is a demo)")
  }

  return (
    <section ref={ref} className="py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm currently available for freelance work or full-time positions. If you have a project that needs some
              creative work, or if you're looking to hire, feel free to contact me.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-effect p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-yellow-400">akshatv00001@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-effect p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Bhopal-Indore, India</p>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-effect p-6 rounded-lg space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="name" className="block mb-2 text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="email" className="block mb-2 text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="contactNumber" className="block mb-2 text-gray-400">
                Contact Number
              </label>
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label htmlFor="message" className="block mb-2 text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <AnimatedButton type="submit" variant="primary" className="flex items-center gap-2">
                Send Message
                <Send size={16} />
              </AnimatedButton>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
