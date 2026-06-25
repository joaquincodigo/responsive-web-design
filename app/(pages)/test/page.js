'use client'

import { useEffect, useState } from 'react'

export default function Demo() {
  const [flashGreen, setFlashGreen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1500px)')

    const handleChange = (e) => {
      if (!e.matches) return

      setFlashGreen(true)

      setTimeout(() => {
        setFlashGreen(false)
      }, 2000)
    }

    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <button
      className={`px-6 py-3 text-white rounded ${
        flashGreen ? 'bg-green-500' : 'bg-blue-500'
      }`}
    >
      Test Button
    </button>
  )
}