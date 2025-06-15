import React from 'react'

export default function GallerySlider({ images }) {
  const renderLevel = (level, dirClass) => (
    <div className={`flex ${dirClass}`}>      
      {[...images[level], ...images[level]].map((item, i) => (
        <div key={i} className="relative w-80 h-52 mx-3 flex-shrink-0 rounded-lg overflow-hidden">
          <img src={item.src} alt={item.caption} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-lg">{item.caption}</div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold">Gallery</h2>
        <p className="text-gray-600">A collection of moments...</p>
      </div>
      {renderLevel('level1', 'animate-scroll-right')}
      {renderLevel('level2', 'animate-scroll-left')}
      {renderLevel('level3', 'animate-scroll-right-slow')}
    </section>
  )
}