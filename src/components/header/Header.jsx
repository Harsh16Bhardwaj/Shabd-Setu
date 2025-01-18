import { Globe2 } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Globe2 className="h-8 w-8 text-indigo-600" />
          <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Multilingual Blog
          </h1>
        </div>
        <button
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium"
        >
          Get Started
        </button>
      </div>
    </div>
  </nav>
)
}

export default Header