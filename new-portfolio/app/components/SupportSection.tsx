'use client'

import { motion } from 'framer-motion'

export default function SupportSection() {
  return (
    <section id="support" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          Support Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12 glow-on-hover"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* QR Code */}
            <div className="flex-shrink-0">
              <div className="relative overflow-hidden rounded-2xl bg-white p-4">
                <img
                  src="https://sahildrive.fakefacebook602gmailcom.workers.dev/0:/Welcome%20To%20BinaryQuest/IMG_20250726_161629_729.jpg"
                  alt="UPI QR Code"
                  className="w-64 h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* UPI Info */}
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">UPI Details</h3>
                <div className="space-y-2">
                  <p className="text-lg">
                    <strong className="text-primary">UPI ID:</strong>{' '}
                    <span className="font-mono bg-primary/20 px-3 py-1 rounded-lg">
                      sahilherewithyou@okicici
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Thank you for your support!
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-400">
                  Scan the QR code or use the UPI ID to support my work and projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}