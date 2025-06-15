import React from 'react'

export default function ExperienceSection({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
      <div className="space-y-8">
        {data.map((exp, i) => (
          <div key={i} className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
            <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">{exp.period}</span>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}