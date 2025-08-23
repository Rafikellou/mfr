'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const stagesData = [
  {
    id: 3,
    type: 'stage',
    title: 'Stage Elite Attaquants',
    date: '2025-10-15',
    dateFormatted: 'Mardi 15 Octobre 2025',
    time: '14h00 - 17h00',
    city: 'Montpellier',
    venue: 'Centre de Formation MHR',
    venueAddress: 'Route de Mende, 34090 Montpellier',
    googleMapsLink: 'https://maps.google.com/?q=Centre+Formation+MHR+Montpellier',
    category: 'u17',
    categoryLabel: 'U17',
    ageRange: '17 ans',
    placesTotal: 20,
    placesLeft: 12,
    price: '150€',
    priceType: 'par joueur',
    advancePayment: '5€',
    image: '/stage-attaquant-photo.webp',
    status: 'open',
    position: 'attaquant',
    positionLabel: 'Attaquant',
    description: 'Développe tes techniques d\'attaque avec des entraîneurs professionnels. Travail sur les finitions, les déplacements et la prise de décision en surface.',
    format: 'Entraînement spécialisé + Situations de jeu réelles',
    registeredPlayers: [
      { firstName: 'Maxime', lastName: 'D.' },
      { firstName: 'Lucas', lastName: 'M.' },
      { firstName: 'Tom', lastName: 'R.' },
      { firstName: 'Nathan', lastName: 'B.' },
      { firstName: 'Hugo', lastName: 'L.' },
      { firstName: 'Enzo', lastName: 'P.' },
      { firstName: 'Clément', lastName: 'F.' },
      { firstName: 'Antoine', lastName: 'G.' }
    ]
  },
  {
    id: 9,
    type: 'stage',
    title: 'Stage Elite Gardiens',
    date: '2025-11-10',
    dateFormatted: 'Lundi 10 Novembre 2025',
    time: '13h30 - 16h30',
    city: 'Lyon',
    venue: 'Centre d\'Entraînement Tola Vologe',
    venueAddress: 'Rue de la Découverte, 69007 Lyon',
    googleMapsLink: 'https://maps.google.com/?q=Centre+Tola+Vologe+Lyon',
    category: 'u15',
    categoryLabel: 'U15',
    ageRange: '15 ans',
    placesTotal: 15,
    placesLeft: 3,
    price: '180€',
    priceType: 'par joueur',
    advancePayment: '5€',
    image: '/stage-goal-photo.jpg',
    status: 'last-places',
    position: 'gardien',
    positionLabel: 'Gardien de but',
    description: 'Formation spécialisée pour gardiens avec techniques avancées de placement, réflexes et jeu au pied. Travail avec un entraîneur spécialisé.',
    format: 'Techniques spécifiques + Mise en situation de match',
    registeredPlayers: [
      { firstName: 'Alexandre', lastName: 'T.' },
      { firstName: 'Baptiste', lastName: 'C.' },
      { firstName: 'Romain', lastName: 'V.' },
      { firstName: 'Kevin', lastName: 'H.' },
      { firstName: 'Julien', lastName: 'N.' },
      { firstName: 'Nicolas', lastName: 'S.' },
      { firstName: 'Mathieu', lastName: 'K.' },
      { firstName: 'Théo', lastName: 'A.' },
      { firstName: 'Paul', lastName: 'E.' },
      { firstName: 'Simon', lastName: 'J.' },
      { firstName: 'Arthur', lastName: 'I.' },
      { firstName: 'Valentin', lastName: 'O.' }
    ]
  }
]

export default function StagesElitePage() {
  const filteredStages = stagesData

  const getStatusBadge = (stage: any) => {
    if (stage.status === 'full') {
      return <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">Complet</div>
    } else if (stage.status === 'last-places') {
      return <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Dernières places</div>
    }
    return null
  }

  const getPlacesText = (stage: any) => {
    if (stage.status === 'full') {
      return <span className="text-red-500 font-medium">Complet</span>
    } else if (stage.placesLeft <= 5) {
      return <span className="text-orange-500 font-medium">{stage.placesLeft} places restantes</span>
    } else {
      return <span className="text-green-500 font-medium">{stage.placesLeft} places disponibles</span>
    }
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/stage-photo.jpg"
            alt="Elite training session"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            Développe ton{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              potentiel
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Booste tes compétences spécifiques à ton poste.
            <br className="hidden md:block" />
            Découvre les techniques des professionnels avec des entraîneurs experts.
          </p>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="text-sm opacity-80 animate-pulse font-medium tracking-wide text-white">Découvre les stages</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <svg className="w-5 h-5 text-white/80 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredStages.length > 0 ? (
            <div className="space-y-12 max-w-7xl mx-auto">
              {filteredStages.map((stage, index) => (
                <div key={stage.id}>
                  {/* Visual separator between cards */}
                  {index > 0 && (
                    <div className="flex items-center justify-center mb-12">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                      <div className="mx-6 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                    {/* Large Event Image */}
                    <div className="relative h-80">
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Stage Elite
                      </div>
                      {getStatusBadge(stage)}
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{stage.title}</h3>
                        <p className="text-lg opacity-90">{stage.positionLabel}</p>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {/* Date and Time */}
                          <div>
                            <div className="flex items-center gap-2 text-gray-800 mb-2">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="font-semibold">{stage.dateFormatted}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{stage.time}</span>
                            </div>
                          </div>

                          {/* Location */}
                          <div>
                            <div className="flex items-start gap-2 text-gray-800 mb-1">
                              <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <div>
                                <div className="font-semibold">{stage.venue}</div>
                                <div className="text-sm text-gray-600">{stage.venueAddress}</div>
                                <a 
                                  href={stage.googleMapsLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 mt-1"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                  Voir sur Google Maps
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div>
                            <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                          </div>

                          {/* Format */}
                          <div>
                            <div className="flex items-center gap-2 text-gray-800">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span className="font-medium">Format:</span>
                              <span className="text-gray-600">{stage.format}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Age Category and Pricing */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Catégorie d'âge</div>
                              <div className="font-semibold text-gray-800">{stage.categoryLabel}</div>
                              <div className="text-xs text-gray-500">{stage.ageRange}</div>
                            </div>
                            <div className="bg-primary/5 p-3 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Prix total</div>
                              <div className="font-bold text-xl text-primary">{stage.price}</div>
                              <div className="text-xs text-gray-500">{stage.priceType}</div>
                            </div>
                          </div>

                          {/* Advance Payment */}
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-yellow-800">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                              <span className="font-medium">Avance pour réserver: {stage.advancePayment}</span>
                            </div>
                          </div>

                          {/* Places Available */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-800">Places disponibles</span>
                              {getPlacesText(stage)}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  stage.placesLeft <= 5 ? 'bg-orange-500' : 'bg-green-500'
                                }`}
                                style={{ width: `${(stage.placesLeft / stage.placesTotal) * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {stage.placesLeft} / {stage.placesTotal} places
                            </div>
                          </div>

                          {/* Registered Players */}
                          <div>
                            <div className="font-medium text-gray-800 mb-3">
                              Joueurs déjà inscrits ({stage.registeredPlayers.length})
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-sm">
                              {stage.registeredPlayers.map((player, index) => (
                                <div key={index} className="text-gray-600">
                                  {player.firstName} {player.lastName}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-8 pb-8 mt-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                              <button 
                                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg ${
                                  stage.status === 'full' 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl transform hover:scale-105'
                                }`}
                                disabled={stage.status === 'full'}
                              >
                                {stage.status === 'full' ? 'Complet' : "S&apos;inscrire maintenant"}
                              </button>
                              <a href="/contact" className="w-full sm:w-auto text-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200">
                                Plus d&apos;infos
                              </a>
                            </div>
                            <div className="text-center lg:text-right">
                              <div className="text-3xl font-bold text-primary mb-2">{stage.price}</div>
                              <div className="text-lg text-gray-600">Avance: <span className="font-semibold text-green-600">{stage.advancePayment}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun stage ne correspond à vos critères de filtrage.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}