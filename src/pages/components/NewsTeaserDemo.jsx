import React from 'react'
import { Link } from 'react-router-dom'
import NewsSection from '../../components/sections/NewsSection'

const NewsTeaserDemo = () => {
  return (
    <div className="py-12">
      <div className="zvv-container">
        <Link to="/" className="text-zvv-blue hover:underline mb-4 inline-block">
          ← Zurück zur Übersicht
        </Link>
        
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            News Teaser Grid
          </h1>
          <p className="text-xl text-zvv-gray-600">
            Ein responsives Grid-Layout für News-Teaser mit Bild, Titel und Beschreibung.
          </p>
        </div>

        <div className="prose prose-lg mb-12">
          <h2>Verwendung</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-zvv">
            {`import { NewsSection } from '@zvv/components'

<NewsSection items={newsItems} />`}
          </pre>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Demo</h2>
          <NewsSection />
        </div>
      </div>
    </div>
  )
}

export default NewsTeaserDemo 