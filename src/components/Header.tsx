'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image 
              src="/mfr-logo.png" 
              alt="Montpellier Football Racing" 
              width={40} 
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-3 text-sm md:text-base font-medium text-gray-700 whitespace-nowrap hidden sm:block">
              Football de jeunes d'<span className="text-primary font-semibold">élite</span>
            </span>
          </div>
          
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#evenements" className="text-gray-700 hover:text-primary transition-colors">Événements</a></li>
            <li><a href="#formats" className="text-gray-700 hover:text-primary transition-colors">Nos formats</a></li>
            <li><a href="#comment-ca-marche" className="text-gray-700 hover:text-primary transition-colors">Comment s'inscrire</a></li>
            <li><a href="#clubs-partenaires" className="text-gray-700 hover:text-primary transition-colors">Partenaires</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a></li>
          </ul>
          
          <a href="#evenements" className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
            S'inscrire
          </a>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu mobile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="space-y-4">
              <li><a href="#evenements" className="block text-gray-700 hover:text-primary">Événements</a></li>
              <li><a href="#formats" className="block text-gray-700 hover:text-primary">Nos formats</a></li>
              <li><a href="#comment-ca-marche" className="block text-gray-700 hover:text-primary">Comment s'inscrire</a></li>
              <li><a href="#clubs-partenaires" className="block text-gray-700 hover:text-primary">Partenaires</a></li>
              <li><a href="#contact" className="block text-gray-700 hover:text-primary">Contact</a></li>
            </ul>
            <a href="#evenements" className="mt-4 w-full inline-block text-center bg-primary text-white px-6 py-2 rounded-full">
              S'inscrire
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
