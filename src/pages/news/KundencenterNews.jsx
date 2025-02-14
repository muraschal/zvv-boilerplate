import React from 'react'
import { Link } from 'react-router-dom'
import ZvvButton from '../../components/ui/ZvvButton'

const KundencenterNews = () => {
  return (
    <article className="py-12">
      <div className="zvv-container">
        <Link to="/" className="text-zvv-blue hover:underline mb-4 inline-block">
          ← Zurück zur Übersicht
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            ZVV-Contact-Kundencenter am Zürich HB
          </h1>
          
          <img 
            src="https://www.zvv.ch/dam/jcr:d5a87d6a-7bce-4345-a5f9-5c4d8a03e1f6/kontaktstelle_hb_teaser.jpg"
            alt="ZVV Kundencenter"
            className="w-full rounded-zvv mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-zvv-gray-600 mb-6">
              Das ZVV-Kundencenter am HB zieht um. Ab dem 10. März 2025 begrüssen wir Sie in der Halle Landesmuseum.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Neue Location - Bewährter Service
            </h2>
            <p>
              Detaillierte Informationen folgen in den kommenden Monaten.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default KundencenterNews 