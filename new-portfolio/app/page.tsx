'use client'

import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import WelcomeSection from './components/WelcomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import StudiesSection from './components/StudiesSection'
import ExperienceSection from './components/ExperienceSection'
import SupportSection from './components/SupportSection'
import ContactSection from './components/ContactSection'
import SnowfallEffect from './components/SnowfallEffect'

export default function Home() {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0)
    
    // Set scroll restoration to manual
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-text">
      <SnowfallEffect />
      
      {/* Audio elements */}
      <audio src="/assets/audio/music.mp3" loop muted={isMuted} />
      <audio src="/assets/audio/click.mp3" muted={isMuted} />
      <audio src="/assets/audio/type.mp3" muted={isMuted} />
      <audio src="/assets/audio/whoosh.mp3" muted={isMuted} />
      
      <Navigation isMuted={isMuted} setIsMuted={setIsMuted} />
      
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <StudiesSection />
      <ExperienceSection />
      <SupportSection />
      <ContactSection />
      
      <footer className="text-center py-8 text-sm text-gray-400">
        <p>&copy; 2024 Binary Quest</p>
      </footer>
    </main>
  )
}