import React from 'react'
import { Link } from 'react-router-dom'
import ZvvFullscreenHeader from '../../components/ui/ZvvFullscreenHeader'

const FullscreenHeaderDemo = () => {
  return (
    <div>
      <ZvvFullscreenHeader 
        title="Willkommen in Zürich"
        subtitle="Entdecken Sie die Stadt mit dem besten öffentlichen Verkehr der Schweiz"
        backgroundImage="https://www.zvv.ch/dam/jcr:26d78b6c-7e4f-4f2f-9f7d-e4b8e1310c1f/hero_desktop.jpg"
        onCtaClick={() => console.log('CTA clicked')}
      />
      
      <div className="py-12">
        <div className="zvv-container">
          <Link to="/" className="text-zvv-blue hover:underline mb-4 inline-block">
            ← Zurück zur Übersicht
          </Link>
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Fullscreen Header
            </h2>
            <p className="text-xl text-zvv-gray-600">
              Ein animierter Fullscreen-Header mit Parallax-Effekt und Call-to-Action.
            </p>
          </div>

          <div className="prose prose-lg mb-12">
            <h3>Verwendung</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-zvv">
              {`import { ZvvFullscreenHeader } from '@zvv/components'

<ZvvFullscreenHeader 
  title="Ihr Titel"
  subtitle="Ihr Untertitel"
  backgroundImage="/path/to/image.jpg"
  ctaText="Button Text"
  onCtaClick={() => {}}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullscreenHeaderDemo 