import React from 'react'
import { Link } from 'react-router-dom'
import ZvvButton from '../components/ui/ZvvButton'

const ComponentCard = ({ title, description, link }) => (
  <Link 
    to={link}
    className="block bg-white rounded-zvv p-6 hover:shadow-lg transition-shadow"
  >
    <h3 className="text-xl font-bold text-zvv-blue mb-2">{title}</h3>
    <p className="text-zvv-gray-600 mb-4">{description}</p>
    <span className="text-sm text-zvv-blue font-medium">
      Komponente ansehen →
    </span>
  </Link>
)

const COMPONENT_CATEGORIES = [
  {
    title: 'Layout Komponenten',
    components: [
      {
        title: 'Fullscreen Header',
        description: 'Animierter Hero-Header mit Parallax-Effekt und Call-to-Action.',
        link: '/components/fullscreen-header'
      },
      {
        title: 'News Teaser Grid',
        description: 'Responsive Grid-Layout für News-Teaser mit Bild, Titel und Beschreibung.',
        link: '/components/news-teaser'
      },
      {
        title: 'Container',
        description: 'Standard Container mit responsiven Breakpoints.',
        link: '/components/container'
      }
    ]
  },
  {
    title: 'UI Elemente',
    components: [
      {
        title: 'Buttons',
        description: 'Verschiedene Button-Varianten im ZVV Design.',
        link: '/components/buttons'
      },
      {
        title: 'Cards',
        description: 'Card-Komponenten für verschiedene Inhaltstypen.',
        link: '/components/cards'
      }
    ]
  },
  {
    title: 'Formulare',
    components: [
      {
        title: 'Input Fields',
        description: 'Textfelder, Select-Menüs und Checkboxen.',
        link: '/components/inputs'
      }
    ]
  }
]

const Home = () => {
  return (
    <div className="py-12">
      <div className="zvv-container">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            ZVV Design System
          </h1>
          <p className="text-xl text-zvv-gray-600">
            Eine Sammlung von React-Komponenten, die das ZVV Design System implementieren.
          </p>
        </div>

        {COMPONENT_CATEGORIES.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.components.map((component, idx) => (
                <ComponentCard key={idx} {...component} />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 pt-12 border-t border-zvv-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Bereit zum Starten?
              </h2>
              <p className="text-zvv-gray-600">
                Schau dir die Dokumentation an oder starte direkt mit der Integration.
              </p>
            </div>
            <div className="space-x-4">
              <ZvvButton variant="secondary">
                Dokumentation
              </ZvvButton>
              <ZvvButton variant="primary">
                Quick Start
              </ZvvButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 