import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle({ isDark, toggle }) {
  return (
    <button 
      onClick={toggle} 
      className={`fixed top-6 right-6 p-3 rounded-full z-50 transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}