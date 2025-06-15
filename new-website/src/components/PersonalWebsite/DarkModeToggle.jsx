import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle({ isDark, toggle }) {
  return (
    <button onClick={toggle} className="fixed top-6 right-6 p-3">
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}