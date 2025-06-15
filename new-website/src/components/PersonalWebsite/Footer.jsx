import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="text-gray-300 mb-6">Interested in collaboration?</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:alex@example.com">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">Google Scholar</a>
          <a href="#">GitHub</a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">© 2025 Dr. Alex Chen. All rights reserved.</div>
      </div>
    </footer>
  )
}
