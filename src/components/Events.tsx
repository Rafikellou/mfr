'use client'

import { useState } from 'react'
import Image from 'next/image'

const eventsData = [
  {
    id: 1,
    type: 'detection',
    title: 'Détection Benfica',
    date: '2025-08-27',
    dateFormatted: '27 Août 2025',
    city: 'Montpellier',
    category: 'u17',
    categoryLabel: 'U17-U19',
    placesLeft: 15,
    price: '50€',
    image: '/Benfica-Logo.png',
    status: 'open'
  },
  {
    id: 2,
    type: 'tournoi',
    title: 'Tournoi Hérault vs Gard',
    date: '2025-09-15',
    dateFormatted: 'Septembre 2025',
    city: 'Montpellier',
    category: 'u15',
    categoryLabel: 'U15',
    placesLeft: 20,
    price: '20€',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
    status: 'open'
  },
  {
    id: 3,
    type: 'tournoi',
    title: 'Tournoi Occitanie vs PACA',
    date: '2026-04-15',
    dateFormatted: 'Avril 2026',
    city: 'Marseille',
    category: 'u17',
    categoryLabel: 'U17',
    placesLeft: 25,
    price: '20€',
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400&h=300&fit=crop',
    status: 'open'
  },
  {
    id: 4,
    type: 'tournoi',
    title: 'Tournoi Portugal vs France',
    date: '2026-06-30',
    dateFormatted: 'Fin Juin 2026',
    city: 'Montpellier',
    category: 'u19',
    categoryLabel: 'U19',
    placesLeft: 30,
    price: '85€',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
    status: 'open'
  }
]

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [locationFilter, setLocationFilter] = useState('')

  const filteredEvents = eventsData.filter(event => {
    const typeMatch = activeFilter === 'all' || event.type === activeFilter
    const categoryMatch = !categoryFilter || event.category === categoryFilter
    const locationMatch = !locationFilter || event.city.toLowerCase() === locationFilter
    return typeMatch && categoryMatch && locationMatch
  })

  const getStatusBadge = (event: any) => {
    if (event.status === 'full') {
      return <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">Complet</div>
    } else if (event.status === 'last-places') {
      return <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Dernières places</div>
    }
    return null
  }

  const getPlacesText = (event: any) => {
    if (event.status === 'full') {
      return <span className="text-red-500 font-medium">Complet</span>
    } else if (event.placesLeft <= 5) {
      return <span className="text-orange-500 font-medium">{event.placesLeft} places restantes</span>
    } else {
      return <span className="text-green-500 font-medium">{event.placesLeft} places disponibles</span>
    }
  }

  return (
    <section className="py-20 bg-gray-50" id="evenements">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">Prochaines dates</h2>
          <div className="text-gray-600">Inscriptions ouvertes • confirmation instantanée</div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex gap-2">
            {['all', 'detection', 'tournoi', 'stage'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter === 'all' ? 'Tous' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="">Catégorie</option>
              <option value="u13">U13</option>
              <option value="u15">U15</option>
              <option value="u17">U17</option>
              <option value="u19">U19</option>
            </select>
            
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="">Lieu</option>
              <option value="montpellier">Montpellier</option>
              <option value="marseille">Marseille</option>
              <option value="lyon">Lyon</option>
            </select>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredEvents.slice(0, 3).map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'detection' ? 'bg-blue-500 text-white' :
                  event.type === 'tournoi' ? 'bg-green-500 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  {event.type === 'detection' ? 'Détection' : 
                   event.type === 'tournoi' ? 'Tournoi' : 'Stage'}
                </div>
                {getStatusBadge(event)}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.dateFormatted}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.city}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {event.categoryLabel}
                  </span>
                  <span className="font-semibold text-lg">{event.price}</span>
                </div>
                
                <div className="mb-4">
                  {getPlacesText(event)}
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    event.status === 'full' 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  disabled={event.status === 'full'}
                >
                  {event.status === 'full' ? 'Complet' : "S'inscrire"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
