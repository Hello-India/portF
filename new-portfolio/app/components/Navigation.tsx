'use client'

import { useState } from 'react'
import { Menu, Volume2, VolumeX } from 'lucide-react'

interface NavigationProps {
  isMuted: boolean
  setIsMuted: (muted: boolean) => void
}

export default function Navigation({ isMuted, setIsMuted }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <>
      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="https://sahildrive.fakefacebook602gmailcom.workers.dev/0:/Welcome%20To%20BinaryQuest/IMG_20241220_022556_811.jpg" 
                alt="Binary Quest Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primary font-bold text-lg">.binaryquest</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              <span className="hidden sm:inline">sound</span>
            </button>
            
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={20} />
              <span className="hidden sm:inline">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      <nav 
        className={`fixed inset-0 z-40 bg-surface/90 backdrop-blur-md transition-transform duration-500 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="text-center space-y-8">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-4xl md:text-6xl font-bricolage font-bold text-primary hover:text-secondary transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-4xl md:text-6xl font-bricolage font-bold text-primary hover:text-secondary transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('studies')}
                className="text-4xl md:text-6xl font-bricolage font-bold text-primary hover:text-secondary transition-colors"
              >
                Studies
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-4xl md:text-6xl font-bricolage font-bold text-primary hover:text-secondary transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('support')}
                className="text-4xl md:text-6xl font-bricolage font-bold text-primary hover:text-secondary transition-colors"
              >
                Support
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-4xl md:text-6xl font-bricolage font-bold text-primary hover:text-secondary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}