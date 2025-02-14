import React from 'react'
import { Link } from 'react-router-dom'

const ContainerDemo = () => {
  return (
    <div className="py-12">
      <div className="zvv-container">
        <Link to="/" className="text-zvv-blue hover:underline mb-4 inline-block">
          ← Zurück zur Übersicht
        </Link>
        
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Container
          </h1>
          <p className="text-xl text-zvv-gray-600">
            Responsive Container mit definierten Breakpoints.
          </p>
        </div>

        <div className="prose prose-lg mb-12">
          <h2>Verwendung</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-zvv">
            {`<div className="zvv-container">
  Ihr Content hier...
</div>`}
          </pre>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Demo</h2>
          <div className="zvv-container border-2 border-dashed border-zvv-blue p-4">
            <div className="bg-zvv-blue/10 p-4 rounded-zvv">
              <p className="text-center text-zvv-blue">
                Container mit maximaler Breite und responsiven Paddings
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg">
          <h2>Breakpoints</h2>
          <ul>
            <li>Default: 1rem padding (16px)</li>
            <li>SM: 1.5rem padding (24px)</li>
            <li>LG: 2rem padding (32px)</li>
            <li>Max-width: 80rem (1280px)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContainerDemo 