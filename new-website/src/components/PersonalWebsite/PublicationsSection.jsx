import React from 'react'

export default function PublicationsSection({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Publications</h2>
      <div className="space-y-6">
        {data.map((pub, i) => (
          <div key={i} className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{pub.title}</h3>
            <p className="italic mb-1 text-gray-700 dark:text-gray-300">{pub.journal}</p>
            <div className="text-sm flex justify-between text-gray-600 dark:text-gray-400">
              <span>{pub.authors}</span>
              <span>{pub.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}