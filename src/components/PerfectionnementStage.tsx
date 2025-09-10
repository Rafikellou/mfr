'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PerfectionnementStage() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">Stage de Perfectionnement</h2>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8">Tous les postes</p>
        
        <div className="max-w-4xl mx-auto mb-10 relative">
          {/* Dark overlay filter - contained within image boundaries */}
          <div className="absolute inset-0 bg-black/40 rounded-xl z-10 w-full h-full"></div>
          
          {/* Date and CTA on top of image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4">
            <p className="text-xl md:text-2xl font-bold mb-4 text-center">Du 27/10/2025 au 31/10/2025 inclus à Montpellier</p>
            <Link 
              href="/stages-elite" 
              className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white font-bold py-3 px-6 rounded-full text-base md:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Découvrir le stage
            </Link>
          </div>
          
          {/* Image */}
          <Image 
            src="/stage-attaquant-photo.webp" 
            alt="Stage de Perfectionnement" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-lg mx-auto w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}