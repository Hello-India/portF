'use client'

import { motion } from 'framer-motion'

const studies = [
  {
    id: 1,
    institution: 'XYZ UNIVERSITY',
    degree: 'Hoping for B.Tech in Computer Science & Engineering',
    description: 'Wanna graduate with perfect 10 CGPA - a hallmark of dedication and excellence.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
    stats: {
      expected: '2028',
      cgpa: '10.0 Target'
    },
    position: 'left'
  },
  {
    id: 2,
    institution: 'KENDRIYA VIDYALAYA',
    degree: 'High School - PCM',
    description: 'Completed rigorous academics in Physics, Chemistry, and Mathematics with flying colors.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    stats: {
      completed: '2024',
      stream: 'Science'
    },
    position: 'right'
  }
]

export default function StudiesSection() {
  return (
    <section id="studies" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {studies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ 
                opacity: 0, 
                x: study.position === 'left' ? -100 : 100 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                study.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl glow-on-hover">
                  <img
                    src={study.image}
                    alt={study.institution}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{study.institution}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h4 className="text-2xl font-bold text-primary">{study.degree}</h4>
                <p className="text-lg leading-relaxed text-gray-300">{study.description}</p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {study.stats.expected && (
                    <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                      Expected: {study.stats.expected}
                    </span>
                  )}
                  {study.stats.cgpa && (
                    <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                      CGPA: {study.stats.cgpa}
                    </span>
                  )}
                  {study.stats.completed && (
                    <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                      Completed: {study.stats.completed}
                    </span>
                  )}
                  {study.stats.stream && (
                    <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                      Stream: {study.stats.stream}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}