import React from 'react'
import ZvvButton from './components/ui/ZvvButton'
import NewsSection from './components/sections/NewsSection'

const App = () => {
  return (
    <div className="min-h-screen bg-zvv-gray-100">
      <header className="bg-white border-b border-zvv-gray-200">
        <div className="zvv-container py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-zvv-blue">
              ZVV Design System
            </h1>
            <nav>
              <ZvvButton
                as="a"
                href="https://github.com/muraschal/zvv-boilerplate"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </ZvvButton>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white py-12">
          <div className="zvv-container">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Willkommen zur ZVV Boilerplate
              </h2>
              <p className="text-lg text-zvv-gray-600 mb-8">
                Ein modernes Frontend-Setup mit React, Tailwind und dem ZVV Design System.
              </p>
              <ZvvButton variant="primary">
                Los geht's!
              </ZvvButton>
            </div>
          </div>
        </section>

        <NewsSection />
      </main>
    </div>
  )
}

export default App 