'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Resume Builder',
    description: 'Craft professional resumes effortlessly with sleek templates.',
    longDescription: 'A clean and interactive tool to create customizable resumes with drag-and-drop editing and instant downloads.',
    image: 'https://play-lh.googleusercontent.com/JbYSifXLD71pQ8NB7tyaSsReFwfU3mVsqDBdpf__-B10RWdCHB_X2U5nfL4_7j9M0WE=w480-h960-rw?auto=format&fit=crop&w=600&q=80',
    alt: 'Resume Builder'
  },
  {
    id: 2,
    title: 'API Explorer',
    description: 'Test, authenticate, and learn various public APIs with ease.',
    longDescription: 'Interactive platform to explore live API calls with response visualization, supporting developers to experiment and learn.',
    image: 'https://sinay.ai/wp-content/uploads/2022/09/api-e1649279794668-1024x502.webp?auto=format&fit=crop&w=600&q=80',
    alt: 'API Explorer'
  },
  {
    id: 3,
    title: 'CyberShield',
    description: 'Real-time cybersecurity monitoring with visual alerts and analytics.',
    longDescription: 'Enterprise-grade dashboard tracking network threats and activity with customizable profiles and analytics.',
    image: 'https://www.raxatechnosecuritysolutions.in/assets/img/Cyber-Security_Banner.jpg?auto=format&fit=crop&w=600&q=80',
    alt: 'CyberShield Dashboard'
  },
  {
    id: 4,
    title: 'Task Tracker',
    description: 'Manage daily to-dos with tagging, deadlines, and collaboration.',
    longDescription: 'Lightweight productivity app with intuitive task management features designed for maximum efficiency.',
    image: 'https://spp.co/img/containers/assets/content/track-tasks.jpg/d7041c84bf145d187dd026d635e49a12/track-tasks.webp?auto=format&fit=crop&w=600&q=80',
    alt: 'Task Tracker'
  },
  {
    id: 5,
    title: 'Crypto Insights',
    description: 'Visualize and analyze cryptocurrency market trends in real-time.',
    longDescription: 'Real-time crypto analytics dashboard with charts, historical data, and predictive insights for traders.',
    image: 'https://www.fidelity.com/bin-public/600_Fidelity_Com_English/images/learning-center/heros/crypto-outlook_600977965_banner.png?auto=format&fit=crop&w=600&q=80',
    alt: 'Crypto Insights'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden glow-on-hover"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90 mb-4">{project.description}</p>
                
                {/* Flip effect on hover */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-sm text-center leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}