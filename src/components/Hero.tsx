'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContent } from '@/contexts/ContentContext'

export default function Hero() {
  const { getContentBySection, sections } = useContent()
  const heroContent = getContentBySection('hero')
  const heroSection = sections.find(s => s.name === 'hero')

  // Si la section n'est pas visible, ne pas l'afficher
  if (!heroSection?.is_visible) {
    return null
  }

  return (
    <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-photo.jpg"
          alt="Entraînement de football intense"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
      </div>
      
      {/* Content (split top/bottom) */}
      <div className="relative z-10 text-white px-4 max-w-6xl mx-auto w-full min-h-[90vh] flex flex-col justify-between">
        {/* Top group: title only */}
        <div className="pt-24 md:pt-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold mb-4 text-white drop-shadow-2xl tracking-tight">
            {heroContent.title || heroSection?.title || 'Révèle ton talent'}
          </h1>
        </div>

        {/* Bottom group: CTA badges + partners */}
        <div className="pb-12 md:pb-16 text-center">
          {/* Event type CTAs - Discreet text links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 md:mb-10 px-4">
            <Link href="/detections" className="group text-white/90 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-sm">
              <span className="text-lg">🔍</span>
              <span className="text-lg font-medium border-b border-transparent group-hover:border-white/50 transition-all duration-300">Détections</span>
            </Link>
            <Link href="/tournois" className="group text-white/90 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-sm">
              <span className="text-lg">🏆</span>
              <span className="text-lg font-medium border-b border-transparent group-hover:border-white/50 transition-all duration-300">Tournois</span>
            </Link>
            <Link href="/stages-elite" className="group text-white/90 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-sm">
              <span className="text-lg">📈</span>
              <span className="text-lg font-medium border-b border-transparent group-hover:border-white/50 transition-all duration-300">Stages Elite</span>
            </Link>
          </div>
          {/* Football icons section */}
          <div>
            <div className="text-xs text-white/80 mb-4 font-light">Entraîne-toi comme les pros</div>
            <div className="overflow-hidden max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-12 animate-scroll">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Compétition</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Progression</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Détection</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Excellence</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Talent</span>
                </div>
                {/* Duplicate for infinite scroll */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Compétition</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Progression</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Détection</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Excellence</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/80">Talent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}