import React from 'react'

export default function VisitMessage({ count, isDark }) {
  const baseClass = isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'
  let msg = ''
  if (count === 1) msg = "Hey there! Visiting for the first time? Nice to meet you."
  else if (count > 3) msg = (
    <span>Oh, you've been a frequent visitor (#{count})! Check <a href="https://xkcd.com" className="underline">this</a>.</span>
  )
  else msg = `Welcome back! This is visit #${count}.`

  return <div className={`fixed top-6 left-6 p-3 text-sm rounded-lg ${baseClass}`}>{msg}</div>
}
