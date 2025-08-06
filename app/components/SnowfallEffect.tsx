'use client'

import { useEffect, useState } from 'react'

export default function SnowfallEffect() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; animationDelay: number }>>([])

  useEffect(() => {
    // Generate snowflakes
    const generateSnowflakes = () => {
      const flakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 10
      }))
      setSnowflakes(flakes)
    }

    generateSnowflakes()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white/30 text-sm animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.animationDelay}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}