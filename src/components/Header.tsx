'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/mfr-logo.png" 
              alt="Montpellier Football Racing" 
              width={40} 
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xs md:text-base font-medium text-gray-700 whitespace-nowrap">
              Football d&apos;<span className="text-primary font-semibold">Elite</span>
            </span>
          </Link>
          
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link href="/" className="text-gray-700 hover:text-primary transition-colors text-sm">Accueil</Link></li>
            <li><Link href="/detections" className="text-primary font-semibold hover:text-primary/80 transition-colors text-base">Détections</Link></li>
            <li><Link href="/tournois" className="text-primary font-semibold hover:text-primary/80 transition-colors text-base">Tournois</Link></li>
            <li><Link href="/stages-elite" className="text-primary font-semibold hover:text-primary/80 transition-colors text-base">Stages Elite</Link></li>
            <li><Link href="/partenaires" className="text-gray-700 hover:text-primary transition-colors text-sm">Partenaires</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-primary transition-colors text-sm">Contact</Link></li>
          </ul>
          
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
              <li><Link href="/" className="block text-gray-700 hover:text-primary text-sm">Accueil</Link></li>
              <li><Link href="/detections" className="block text-primary font-semibold hover:text-primary/80 text-base">Détections</Link></li>
              <li><Link href="/tournois" className="block text-primary font-semibold hover:text-primary/80 text-base">Tournois</Link></li>
              <li><Link href="/stages-elite" className="block text-primary font-semibold hover:text-primary/80 text-base">Stages Elite</Link></li>
              <li><Link href="/partenaires" className="block text-gray-700 hover:text-primary text-sm">Partenaires</Link></li>
              <li><Link href="/contact" className="block text-gray-700 hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
