'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const tournamentsData = [
  {
    id: 2,
    type: 'tournoi',
    title: 'Tournoi Hérault vs Gard',
    date: '2025-09-15',
    dateFormatted: 'Samedi 15 Septembre 2025',
    time: '9h00 - 18h00',
    city: 'Montpellier',
    venue: 'Complexe Sportif de Grammont',
    venueAddress: 'Avenue Albert Einstein, 34000 Montpellier',
    googleMapsLink: 'https://maps.google.com/?q=Complexe+Sportif+Grammont+Montpellier',
    category: 'u11',
    categoryLabel: 'U11',
    ageRange: '10-11 ans',
    teamsTotal: 16,
    teamsLeft: 4,
    price: '70€',
    priceType: 'par équipe',
    advancePayment: '5€',
    image: '/tournoi-photo.jpg',
    status: 'last-places',
    description: 'Affrontement épique entre les meilleures équipes de l\'Hérault et du Gard dans un tournoi compétitif. Prouve que ton équipe est la meilleure de la région.',
    format: 'Tournoi à élimination directe + Phase finale - Matchs 9vs9',
    registeredTeams: [
      { name: 'FC Montpellier A', city: 'Montpellier' },
      { name: 'AS Béziers', city: 'Béziers' },
      { name: 'SC Sète', city: 'Sète' },
      { name: 'FC Lunel', city: 'Lunel' },
      { name: 'AS Castelnau', city: 'Castelnau' },
      { name: 'FC Frontignan', city: 'Frontignan' },
      { name: 'US Mauguio', city: 'Mauguio' },
      { name: 'ES Paillade', city: 'Montpellier' },
      { name: 'FC Nîmes A', city: 'Nîmes' },
      { name: 'AS Alès', city: 'Alès' },
      { name: 'US Bagnols', city: 'Bagnols' },
      { name: 'FC Beaucaire', city: 'Beaucaire' }
    ]
  },
  {
    id: 4,
    type: 'tournoi',
    title: 'Tournoi Portugal vs France',
    date: '2026-06-30',
    dateFormatted: 'Dimanche 30 Juin 2026',
    time: '8h00 - 19h00',
    city: 'Montpellier',
    venue: 'Stade de la Mosson',
    venueAddress: 'Avenue de Heidelberg, 34000 Montpellier',
    googleMapsLink: 'https://maps.google.com/?q=Stade+de+la+Mosson+Montpellier',
    category: 'u11',
    categoryLabel: 'U11',
    ageRange: '10-11 ans',
    teamsTotal: 20,
    teamsLeft: 8,
    price: '70€',
    priceType: 'par équipe',
    advancePayment: '5€',
    image: '/tournoi-photo.jpg',
    status: 'open',
    description: 'Tournoi international prestigieux entre équipes françaises et portugaises pour une expérience unique. Développe ton esprit de compétition face aux meilleures équipes européennes.',
    format: 'Phase de poules + Phase finale - Matchs 9vs9',
    registeredTeams: [
      { name: 'FC Porto Jeunes', city: 'Porto (PT)' },
      { name: 'Sporting CP U11', city: 'Lisbonne (PT)' },
      { name: 'FC Montpellier Elite', city: 'Montpellier' },
      { name: 'OL Académie', city: 'Lyon' },
      { name: 'OM Formation', city: 'Marseille' },
      { name: 'FC Benfica Youth', city: 'Lisbonne (PT)' },
      { name: 'PSG Academy', city: 'Paris' },
      { name: 'AS Monaco U11', city: 'Monaco' },
      { name: 'FC Braga Jeunes', city: 'Braga (PT)' },
      { name: 'LOSC Formation', city: 'Lille' },
      { name: 'FC Nantes U11', city: 'Nantes' },
      { name: 'Vitoria SC Youth', city: 'Guimarães (PT)' }
    ]
  }
]

export default function TournoisPage() {
  const filteredTournaments = tournamentsData

  const getStatusBadge = (tournament: any) => {
    if (tournament.status === 'full') {
      return <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">Complet</div>
    } else if (tournament.status === 'last-places') {
      return <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Dernières places</div>
    }
    return null
  }

  const getPlacesText = (tournament: any) => {
    const teamsText = tournament.teamsLeft > 1 ? 'équipes restantes' : 'équipe restante'
    const teamsAvailable = tournament.teamsLeft > 1 ? 'équipes disponibles' : 'équipe disponible'
    
    if (tournament.status === 'full') {
      return <span className="text-red-500 font-medium">Complet</span>
    } else if (tournament.teamsLeft <= 3) {
      return <span className="text-orange-500 font-medium">{tournament.teamsLeft} {teamsText}</span>
    } else {
      return <span className="text-green-500 font-medium">{tournament.teamsLeft} {teamsAvailable}</span>
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
            src="/tournoi-photo.jpg"
            alt="Tournament action"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            Prouve ta{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              valeur
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Démontre que ton équipe est l'une des meilleures de sa catégorie.
            <br className="hidden md:block" />
            Affrontez les équipes les plus compétitives et forgez votre légende sur le terrain.
          </p>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="text-sm opacity-80 animate-pulse font-medium tracking-wide text-white">Découvre les tournois</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <svg className="w-5 h-5 text-white/80 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTournaments.length > 0 ? (
            <div className="space-y-12 max-w-7xl mx-auto">
              {filteredTournaments.map((tournament, index) => (
                <div key={tournament.id}>
                  {/* Visual separator between cards */}
                  {index > 0 && (
                    <div className="flex items-center justify-center mb-12">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                      <div className="mx-6 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                    {/* Large Event Image */}
                    <div className="relative h-80">
                      <Image
                        src={tournament.image}
                        alt={tournament.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        🏆 Tournoi
                      </div>
                      {getStatusBadge(tournament)}
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{tournament.title}</h3>
                        <p className="text-lg opacity-90">{tournament.categoryLabel} • {tournament.teamsTotal} équipes</p>
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
                              <span className="font-semibold">{tournament.dateFormatted}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{tournament.time}</span>
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
                                <div className="font-semibold">{tournament.venue}</div>
                                <div className="text-sm text-gray-600">{tournament.venueAddress}</div>
                                <a 
                                  href={tournament.googleMapsLink} 
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
                            <p className="text-gray-700 leading-relaxed">{tournament.description}</p>
                          </div>

                          {/* Format */}
                          <div>
                            <div className="flex items-center gap-2 text-gray-800">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span className="font-medium">Format:</span>
                              <span className="text-gray-600">{tournament.format}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Age Category and Pricing */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Catégorie d'âge</div>
                              <div className="font-semibold text-gray-800">{tournament.categoryLabel}</div>
                              <div className="text-xs text-gray-500">{tournament.ageRange}</div>
                            </div>
                            <div className="bg-primary/5 p-3 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">Prix total</div>
                              <div className="font-bold text-xl text-primary">{tournament.price}</div>
                              <div className="text-xs text-gray-500">{tournament.priceType}</div>
                            </div>
                          </div>

                          {/* Advance Payment */}
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-yellow-800">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                              <span className="font-medium">Avance pour réserver: {tournament.advancePayment}</span>
                            </div>
                          </div>

                          {/* Teams Available */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-800">Équipes disponibles</span>
                              {getPlacesText(tournament)}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  tournament.teamsLeft <= 3 ? 'bg-orange-500' : 'bg-green-500'
                                }`}
                                style={{ width: `${(tournament.teamsLeft / tournament.teamsTotal) * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {tournament.teamsLeft} / {tournament.teamsTotal} équipes
                            </div>
                          </div>

                          {/* Registered Teams */}
                          <div>
                            <div className="font-medium text-gray-800 mb-3">
                              Équipes déjà inscrites ({tournament.registeredTeams.length})
                            </div>
                            <div className="grid grid-cols-1 gap-2 text-sm max-h-48 overflow-y-auto">
                              {tournament.registeredTeams.map((team, index) => (
                                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded text-gray-700">
                                  <span className="font-medium">{team.name}</span>
                                  <span className="text-xs text-gray-500">{team.city}</span>
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
                                  tournament.status === 'full' 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl transform hover:scale-105'
                                }`}
                                disabled={tournament.status === 'full'}
                              >
                                {tournament.status === 'full' ? 'Complet' : "Inscrire l&apos;équipe"}
                              </button>
                              <a href="/contact" className="w-full sm:w-auto text-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200">
                                Plus d&apos;infos
                              </a>
                            </div>
                            <div className="text-center lg:text-right">
                              <div className="text-3xl font-bold text-primary mb-2">{tournament.price}</div>
                              <div className="text-lg text-gray-600">Avance: <span className="font-semibold text-green-600">{tournament.advancePayment}</span></div>
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
              <p className="text-gray-500 text-lg">Aucun tournoi disponible pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}