'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const [isImageClear, setIsImageClear] = useState(false)

  const toggleImage = () => {
    setIsImageClear(!isImageClear)
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div 
            className="relative overflow-hidden rounded-2xl cursor-pointer glow-on-hover"
            onClick={toggleImage}
          >
            <img
              src="https://sahildrive.fakefacebook602gmailcom.workers.dev/0:/Welcome%20To%20BinaryQuest/IMG_20250719_124156_336.jpg?auto=format&fit=crop&w=600&q=80"
              alt="Portrait of Binary Quest"
              className={`w-full h-96 object-cover transition-all duration-500 ${
                isImageClear ? 'filter-none' : 'filter blur-sm'
              }`}
            />
            {!isImageClear && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <p className="text-white font-bold text-lg">
                  <b>Click to view</b>
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            About Me
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I'm a passionate web developer and cybersecurity enthusiast dedicated to building secure, intuitive, and beautiful digital experiences. I combine clean, efficient code with creative design principles to deliver solutions that not only function flawlessly but also delight users visually.
            </p>
            <p>
              Always curious and driven by innovation, I focus on learning emerging technologies and integrating best practices in security and usability. Join me on this journey of digital craftsmanship and problem-solving excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}