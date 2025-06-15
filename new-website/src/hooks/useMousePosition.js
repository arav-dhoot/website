import { useState } from 'react'

export default function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPos({
      x: (e.clientX - centerX) * 0.05,
      y: (e.clientY - centerY) * 0.05
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  return { pos, handleMouseMove, handleMouseLeave }
}