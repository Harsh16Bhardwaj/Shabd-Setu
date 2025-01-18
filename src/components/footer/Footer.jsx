import { Globe2 } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Globe2 className="h-8 w-8 text-white" />
            <h2 className="ml-3 text-2xl font-bold text-white">Multilingual Blog</h2>
          </div>
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Multilingual Blog. All rights reserved.
          </p>
        </div>
      </footer>  )
}

export default Footer