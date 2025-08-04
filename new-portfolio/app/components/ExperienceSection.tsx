'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Magnificent Bot Coding & Hosting',
    description: 'Coding and hosting innovative bots for 5+ years, specializing in automation and intelligent integrations.',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708060989/catalog/1535344606243815424/tgdcouungqnmx9krpfsg.webp?auto=format&fit=crop&w=600&q=80',
    alt: 'Bot coding'
  },
  {
    id: 2,
    title: '10+ Web Development Projects',
    description: 'Certified experience freelancing building sleek and responsive websites for clients worldwide.',
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png?auto=format&fit=crop&w=600&q=80',
    alt: 'Web development'
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl glow-on-hover"
            >
              <div className="relative h-80">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">{experience.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{experience.description}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}