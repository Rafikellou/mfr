'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
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
            Révèle ton talent
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
          {/* Partners section */}
          <div>
            <div className="text-xs text-white/80 mb-4 font-light">En partenariat avec</div>
            <div className="overflow-hidden max-w-4xl mx-auto">
              <div className="flex items-center gap-12 animate-scroll">
                <Image src="/Benfica-Logo.png" alt="SL Benfica" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/como-logo.svg" alt="FC Como" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/marseille-logo.png" alt="Olympique de Marseille" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/lyon-logo.svg" alt="Olympique Lyonnais" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/montpellier-logo.png" alt="Montpellier Hérault SC" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                {/* Duplicate for infinite scroll */}
                <Image src="/Benfica-Logo.png" alt="SL Benfica" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/como-logo.svg" alt="FC Como" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/marseille-logo.png" alt="Olympique de Marseille" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/lyon-logo.svg" alt="Olympique Lyonnais" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
                <Image src="/montpellier-logo.png" alt="Montpellier Hérault SC" width={64} height={64} className="h-8 md:h-10 w-auto object-contain opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
