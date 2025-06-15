import React from 'react'

export default function ResearchSection({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Current Research</h2>
      <div className="grid gap-8">
        {data.map((item, i) => (
          <div key={i} className="p-8 rounded-lg shadow-lg border-l-4 border-blue-500 bg-white dark:bg-gray-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{item.title}</h3>
            <span className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">{item.period}</span>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{item.description}</p>
            <p className="mt-1 italic text-gray-600 dark:text-gray-400">In collaboration with {item.collaboration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}