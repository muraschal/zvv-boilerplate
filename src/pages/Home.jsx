import React from 'react'
import ZvvButton from '../components/ui/ZvvButton'
import NewsSection from '../components/sections/NewsSection'

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home 