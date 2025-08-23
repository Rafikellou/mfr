'use client'

// Events component split into three separate sections by type
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
    priceType: 'par joueur',
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
    category: 'u11',
    categoryLabel: 'U11',
    placesLeft: 20,
    price: '70€',
    priceType: 'par équipe',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
    status: 'open'
  },
  {
    id: 3,
    type: 'stage',
    title: 'Stage Elite Montpellier',
    date: '2025-10-15',
    dateFormatted: 'Octobre 2025',
    city: 'Montpellier',
    category: 'u17',
    categoryLabel: 'U17',
    placesLeft: 12,
    price: '150€',
    priceType: 'par joueur',
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
    category: 'u11',
    categoryLabel: 'U11',
    placesLeft: 30,
    price: '70€',
    priceType: 'par équipe',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
    status: 'open'
  },
  {
    id: 5,
    type: 'tournoi',
    title: 'Tournoi Occitanie vs PACA',
    date: '2026-04-15',
    dateFormatted: 'Avril 2026',
    city: 'Marseille',
    category: 'u11',
    categoryLabel: 'U11',
    placesLeft: 25,
    price: '70€',
    priceType: 'par équipe',
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400&h=300&fit=crop',
    status: 'open'
  }
]

export default function Events() {
  // Filter events by type
  const detectionEvents = eventsData.filter(event => event.type === 'detection')
  const tournoiEvents = eventsData.filter(event => event.type === 'tournoi')
  const stageEvents = eventsData.filter(event => event.type === 'stage')

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

  const EventCard = ({ event }: { event: any }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
           event.type === 'tournoi' ? 'Tournoi' : 'Stage Elite'}
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
          <div className="text-right">
            <span className="font-semibold text-lg block">{event.price}</span>
            <span className="text-xs text-gray-500">{event.priceType}</span>
          </div>
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
  )

  const EventSection = ({ title, events, bgColor }: { title: string, events: any[], bgColor: string }) => {
    if (events.length === 0) return null
    
    return (
      <section className={`py-20 ${bgColor}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">{title}</h2>
            <div className="text-gray-600">Inscriptions ouvertes • confirmation instantanée</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div id="evenements">
      {/* Détections Section */}
      <EventSection 
        title="Détections" 
        events={detectionEvents} 
        bgColor="bg-blue-50" 
      />
      
      {/* Tournois Section */}
      <EventSection 
        title="Tournois" 
        events={tournoiEvents} 
        bgColor="bg-green-50" 
      />
      
      {/* Stages Elite Section */}
      <EventSection 
        title="Stages Elite" 
        events={stageEvents} 
        bgColor="bg-purple-50" 
      />
    </div>
  )
}
