'use client'

import { motion } from 'framer-motion'
import { Github, MessageCircle, Instagram, Mail } from 'lucide-react'

const contacts = [
  {
    name: 'GitHub',
    url: 'https://github.com/Binary-Quest',
    icon: Github,
    label: 'Binary Quest'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/BinaryQuest',
    icon: MessageCircle,
    label: 'Visit Us'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/deaduserxyz',
    icon: Instagram,
    label: 'Click me'
  },
  {
    name: 'Email',
    url: '#',
    icon: Mail,
    label: 'Soon'
  }
]

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12 glow-on-hover"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={contact.url}
                  target={contact.name === 'Email' ? '_self' : '_blank'}
                  rel={contact.name === 'Email' ? '' : 'noopener noreferrer'}
                  className="flex items-center space-x-4 p-6 rounded-xl bg-surface/50 hover:bg-primary/20 transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <contact.icon 
                      size={32} 
                      className="text-primary group-hover:text-secondary transition-colors" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary">{contact.name}</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {contact.label}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}