import React from 'react'

export default function SectionWrapper({ id, isVisible, pos, mouseHandlers, children }) {
  const { handleMouseMove, handleMouseLeave } = mouseHandlers || {}
  
  return (
    <section 
      id={id}
      className={`py-20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-4'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${pos?.x || 0}px, ${pos?.y || 0}px)`
      }}
    >
      {children}
    </section>
  )
}