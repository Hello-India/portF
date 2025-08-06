'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isMuted, setIsMuted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0)
  }, [])

  const toggleSound = () => {
    setIsMuted(!isMuted)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Audio elements like shx404 */}
      <audio src="/assets/audio/music.mp3" loop muted={isMuted} />
      <audio src="/assets/audio/click.mp3" muted={isMuted} />
      <audio src="/assets/audio/type.mp3" muted={isMuted} />
      <audio src="/assets/audio/whoosh.mp3" muted={isMuted} />

      {/* Navigation like shx404 */}
      <nav>
        <div className="movement title">.binaryquest</div>
        <div className="line">
          <div className="movement item" onClick={toggleSound}>
            <img 
              alt="*" 
              src={isMuted ? "/assets/icons/unmute.svg" : "/assets/icons/mute.svg"}
            />
            sound
          </div>
          <div className="movement item" onClick={toggleMenu}>
            <img alt="*" src="/assets/icons/menu.svg" />
            menu
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        {/* Welcome Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Hello, I'm{' '}
              <span className="text-blue-400">Binary Quest</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Welcome to my portfolio, where creativity meets clean code.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://sahildrive.fakefacebook602gmailcom.workers.dev/0:/Welcome%20To%20BinaryQuest/IMG_20250719_124156_336.jpg?auto=format&fit=crop&w=600&q=80"
                alt="Portrait of Binary Quest"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
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
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Resume Builder */}
              <div className="group relative h-80 rounded-lg overflow-hidden">
                <img
                  src="https://play-lh.googleusercontent.com/JbYSifXLD71pQ8NB7tyaSsReFwfU3mVsqDBdpf__-B10RWdCHB_X2U5nfL4_7j9M0WE=w480-h960-rw?auto=format&fit=crop&w=600&q=80"
                  alt="Resume Builder"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Resume Builder</h3>
                  <p className="text-sm opacity-90">Craft professional resumes effortlessly with sleek templates.</p>
                </div>
              </div>

              {/* API Explorer */}
              <div className="group relative h-80 rounded-lg overflow-hidden">
                <img
                  src="https://sinay.ai/wp-content/uploads/2022/09/api-e1649279794668-1024x502.webp?auto=format&fit=crop&w=600&q=80"
                  alt="API Explorer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">API Explorer</h3>
                  <p className="text-sm opacity-90">Test, authenticate, and learn various public APIs with ease.</p>
                </div>
              </div>

              {/* CyberShield */}
              <div className="group relative h-80 rounded-lg overflow-hidden">
                <img
                  src="https://www.raxatechnosecuritysolutions.in/assets/img/Cyber-Security_Banner.jpg?auto=format&fit=crop&w=600&q=80"
                  alt="CyberShield Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">CyberShield</h3>
                  <p className="text-sm opacity-90">Real-time cybersecurity monitoring with visual alerts and analytics.</p>
                </div>
              </div>

              {/* Task Tracker */}
              <div className="group relative h-80 rounded-lg overflow-hidden">
                <img
                  src="https://spp.co/img/containers/assets/content/track-tasks.jpg/d7041c84bf145d187dd026d635e49a12/track-tasks.webp?auto=format&fit=crop&w=600&q=80"
                  alt="Task Tracker"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Task Tracker</h3>
                  <p className="text-sm opacity-90">Manage daily to-dos with tagging, deadlines, and collaboration.</p>
                </div>
              </div>

              {/* Crypto Insights */}
              <div className="group relative h-80 rounded-lg overflow-hidden">
                <img
                  src="https://www.fidelity.com/bin-public/600_Fidelity_Com_English/images/learning-center/heros/crypto-outlook_600977965_banner.png?auto=format&fit=crop&w=600&q=80"
                  alt="Crypto Insights"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Crypto Insights</h3>
                  <p className="text-sm opacity-90">Visualize and analyze cryptocurrency market trends in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studies Section */}
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16">
              Education
            </h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                    alt="XYZ UNIVERSITY"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-400">XYZ UNIVERSITY</h3>
                  <h4 className="text-xl font-semibold">Hoping for B.Tech in Computer Science & Engineering</h4>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Wanna graduate with perfect 10 CGPA - a hallmark of dedication and excellence.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <span className="px-4 py-2 bg-blue-400/20 rounded-full text-blue-400 font-medium">
                      Expected: 2028
                    </span>
                    <span className="px-4 py-2 bg-blue-400/20 rounded-full text-blue-400 font-medium">
                      CGPA: 10.0 Target
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
                    alt="KENDRIYA VIDYALAYA"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-400">KENDRIYA VIDYALAYA</h3>
                  <h4 className="text-xl font-semibold">High School - PCM</h4>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Completed rigorous academics in Physics, Chemistry, and Mathematics with flying colors.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <span className="px-4 py-2 bg-blue-400/20 rounded-full text-blue-400 font-medium">
                      Completed: 2024
                    </span>
                    <span className="px-4 py-2 bg-blue-400/20 rounded-full text-blue-400 font-medium">
                      Stream: Science
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16">
              Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-lg">
                <div className="relative h-80">
                  <img
                    src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708060989/catalog/1535344606243815424/tgdcouungqnmx9krpfsg.webp?auto=format&fit=crop&w=600&q=80"
                    alt="Bot coding"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3">Magnificent Bot Coding & Hosting</h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      Coding and hosting innovative bots for 5+ years, specializing in automation and intelligent integrations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg">
                <div className="relative h-80">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png?auto=format&fit=crop&w=600&q=80"
                    alt="Web development"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3">10+ Web Development Projects</h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      Certified experience freelancing building sleek and responsive websites for clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16">
              Support Me
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex-shrink-0">
                  <div className="bg-white p-4 rounded-2xl">
                    <img
                      src="https://sahildrive.fakefacebook602gmailcom.workers.dev/0:/Welcome%20To%20BinaryQuest/IMG_20250726_161629_729.jpg"
                      alt="UPI QR Code"
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-400">UPI Details</h3>
                    <div className="space-y-2">
                      <p className="text-lg">
                        <strong className="text-blue-400">UPI ID:</strong>{' '}
                        <span className="font-mono bg-blue-400/20 px-3 py-1 rounded-lg">
                          sahilherewithyou@okicici
                        </span>
                      </p>
                      <p className="text-gray-300">
                        Thank you for your support!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16">
              Contact Me
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="https://github.com/Binary-Quest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 rounded-xl bg-gray-800/50 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <div className="text-blue-400 text-2xl">🐙</div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400">GitHub</h3>
                    <p className="text-gray-300">Binary Quest</p>
                  </div>
                </a>

                <a
                  href="https://t.me/BinaryQuest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 rounded-xl bg-gray-800/50 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <div className="text-blue-400 text-2xl">📱</div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400">Telegram</h3>
                    <p className="text-gray-300">Visit Us</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/deaduserxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 rounded-xl bg-gray-800/50 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <div className="text-blue-400 text-2xl">📸</div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400">Instagram</h3>
                    <p className="text-gray-300">Click me</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-6 rounded-xl bg-gray-800/50">
                  <div className="text-blue-400 text-2xl">📧</div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400">Email</h3>
                    <p className="text-gray-300">Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400">
        <p>&copy; 2024 Binary Quest</p>
      </footer>
    </>
  )
}