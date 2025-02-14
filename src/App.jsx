import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ZvvButton from './components/ui/ZvvButton'
import Home from './pages/Home'
import KundencenterNews from './pages/news/KundencenterNews'
import NewsTeaserDemo from './pages/components/NewsTeaserDemo'
import FullscreenHeaderDemo from './pages/components/FullscreenHeaderDemo'

const Header = () => (
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
)

const App = () => {
  return (
    <div className="min-h-screen bg-zvv-gray-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/news-teaser" element={<NewsTeaserDemo />} />
          <Route path="/components/fullscreen-header" element={<FullscreenHeaderDemo />} />
          <Route path="/news/kundencenter" element={<KundencenterNews />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 