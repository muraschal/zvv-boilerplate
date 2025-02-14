import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-zvv-gray-100">
      <header className="bg-white border-b border-zvv-gray-200">
        <div className="zvv-container py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-zvv-condensed font-bold text-zvv-blue">
              ZVV Design System
            </h1>
            <nav>
              <a 
                href="https://github.com/muraschal/zvv-boilerplate"
                className="zvv-button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="zvv-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Template Cards hier */}
        </div>
      </main>
    </div>
  )
}

export default App 