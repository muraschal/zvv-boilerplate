import React from 'react'
import { motion } from 'framer-motion'
import ZvvButton from './ZvvButton'
import PropTypes from 'prop-types'

const ZvvFullscreenHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = 'https://www.zvv.ch/dam/jcr:26d78b6c-7e4f-4f2f-9f7d-e4b8e1310c1f/hero_desktop.jpg',
  ctaText = 'Mehr erfahren',
  onCtaClick
}) => {
  return (
    <motion.header 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-black/40 z-10"
          style={{ backdropFilter: 'blur(4px)' }}
        />
        <img 
          src={backgroundImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            {subtitle}
          </p>
          <ZvvButton 
            onClick={onCtaClick}
            className="bg-white text-zvv-blue hover:bg-white/90"
          >
            {ctaText}
          </ZvvButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5 
          }}
        >
          <svg 
            className="w-6 h-6 text-white"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </div>
    </motion.header>
  )
}

ZvvFullscreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func.isRequired
};

export default ZvvFullscreenHeader 