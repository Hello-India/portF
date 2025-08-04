'use client'

import { ChevronDown } from 'lucide-react'

export default function WelcomeSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/50" />
      
      <div className="relative z-10 text-center px-6">
        <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-4xl mx-auto glow-on-hover">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hello, I'm{' '}
            <span className="text-primary font-dancing">Binary Quest</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome to my portfolio, where creativity meets clean code.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-primary hover:text-secondary transition-colors animate-bounce"
        aria-label="Scroll down to About Me"
      >
        <span className="text-sm font-medium">scroll down</span>
        <ChevronDown size={24} />
      </button>
    </section>
  )
}