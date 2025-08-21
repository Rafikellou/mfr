'use client'

import Image from 'next/image'

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
        {/* Top group: title + badges */}
        <div className="pt-24 md:pt-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold mb-4 text-white drop-shadow-2xl tracking-tight">
            Révèle ton talent
          </h1>
          {/* 2) Pills simplifiées (petites) */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Détections
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Tournois
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Stages
            </span>
          </div>
        </div>

        {/* Bottom group: CTA + partners */}
        <div className="pb-12 md:pb-16 text-center">
          {/* 3) CTA principal (plus petit) */}
          <div className="flex justify-center mb-6 md:mb-8">
            <button className="bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-primary/90 transition-colors shadow-lg">
              Voir les événements à venir
            </button>
          </div>
          {/* 4) Partenaires */}
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
