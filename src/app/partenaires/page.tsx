'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const clubPartnersData = [
  {
    id: 1,
    name: 'SL Benfica',
    logo: '/Benfica-Logo.png',
    country: 'Portugal',
    description: 'L\'un des clubs les plus prestigieux du Portugal avec 38 titres de champion national. Double vainqueur de la Ligue des Champions (1961, 1962) et récemment finaliste en 2013 et 2014.',
    achievements: [
      '38 Championnats du Portugal',
      '26 Coupes du Portugal', 
      '2 Ligues des Champions',
      'Finaliste Ligue des Champions 2013-2014'
    ],
    category: 'Club Européen'
  },
  {
    id: 2,
    name: 'FC Como',
    logo: '/como-logo.svg',
    country: 'Italie',
    description: 'Club historique italien fondé en 1907, récemment promu en Serie A. Connu pour son académie de formation exceptionnelle et son développement des jeunes talents.',
    achievements: [
      'Promotion en Serie A 2023-24',
      'Champion de Serie B 2024',
      'Formation de talents internationaux',
      'Partenariats académiques européens'
    ],
    category: 'Club Européen'
  },
  {
    id: 3,
    name: 'Olympique de Marseille',
    logo: '/marseille-logo.png',
    country: 'France',
    description: 'Seul club français vainqueur de la Ligue des Champions (1993). Club mythique du football français avec une passion incomparable de ses supporters.',
    achievements: [
      '1 Ligue des Champions (1993)',
      '10 Championnats de France',
      '10 Coupes de France',
      'Finaliste Ligue Europa 2018'
    ],
    category: 'Club Français'
  },
  {
    id: 4,
    name: 'Olympique Lyonnais',
    logo: '/lyon-logo.svg',
    country: 'France',
    description: 'Septuple champion de France consécutif (2002-2008). Réputé pour son centre de formation d\'excellence qui a produit de nombreux internationaux.',
    achievements: [
      '7 Championnats consécutifs (2002-2008)',
      '5 Coupes de France',
      'Demi-finaliste Ligue des Champions 2020',
      'Centre de formation reconnu mondialement'
    ],
    category: 'Club Français'
  },
  {
    id: 5,
    name: 'Montpellier Hérault SC',
    logo: '/montpellier-logo.png',
    country: 'France',
    description: 'Champion de France 2012 dans une épopée mémorable. Club formateur reconnu avec un centre d\'entraînement moderne et une philosophie de jeu attractive.',
    achievements: [
      'Champion de France 2012',
      '2 Coupes de France',
      'Qualification européenne régulière',
      'Centre de formation labellisé FFF'
    ],
    category: 'Club Français'
  }
]

const institutionalPartnersData = [
  {
    id: 1,
    name: 'Ville de Montpellier - Service des Sports',
    logo: '/ville-montpellier-logo.png',
    description: 'La Ville de Montpellier soutient le développement du sport amateur et l\'accès au sport pour tous. Elle met à disposition des infrastructures modernes et accompagne les initiatives sportives locales.',
    support: [
      'Mise à disposition d\'infrastructures sportives',
      'Soutien aux événements sportifs locaux',
      'Programmes d\'initiation sportive jeunesse',
      'Développement du sport amateur'
    ]
  },
  {
    id: 2,
    name: 'Région Occitanie',
    logo: '/region-occitanie-logo.png',
    description: 'La Région Occitanie promeut l\'excellence sportive et l\'inclusion par le sport. Elle finance les équipements sportifs et soutient les dispositifs de détection de talents.',
    support: [
      'Financement d\'équipements sportifs',
      'Soutien aux centres de formation',
      'Programmes de détection de talents',
      'Aide à la mobilité des jeunes sportifs'
    ]
  }
]

const privatePartnersData = [
  {
    id: 1,
    name: 'Macron',
    logo: '/macron-logo.png',
    description: 'Équipementier sportif italien de référence, Macron équipe de nombreux clubs professionnels européens. Reconnu pour la qualité technique et le design innovant de ses produits.',
    partnership: [
      'Fourniture d\'équipements techniques haute performance',
      'Textile adapté aux conditions de jeu intensives',
      'Design personnalisé pour événements spéciaux',
      'Support technique et logistique'
    ]
  },
  {
    id: 2,
    name: 'Decathlon',
    logo: '/decathlon-logo.webp',
    description: 'Leader mondial de la distribution d\'articles de sport, Decathlon démocratise l\'accès au sport. Partenaire idéal pour équiper les jeunes sportifs avec du matériel accessible et de qualité.',
    partnership: [
      'Équipement sportif accessible à tous',
      'Matériel d\'entraînement spécialisé',
      'Conseils techniques et expertise produit',
      'Accompagnement des jeunes talents'
    ]
  },
  {
    id: 3,
    name: 'Powerade',
    logo: '/Powerade-logo.png',
    description: 'Boisson énergisante de référence pour les sportifs de haut niveau. Powerade accompagne la performance sportive avec des produits scientifiquement développés pour l\'hydratation et la récupération.',
    partnership: [
      'Hydratation optimale pendant l\'effort',
      'Boissons de récupération après entraînement',
      'Conseil en nutrition sportive',
      'Soutien logistique lors des événements'
    ]
  }
]

export default function PartenairesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/parteniaire-photo.jpg"
            alt="Partnership and collaboration"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            Nos{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              partenaires
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Ensemble, nous créons les opportunités de demain.
            <br className="hidden md:block" />
            Découvre les clubs, institutions et entreprises qui nous accompagnent.
          </p>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="text-sm opacity-80 animate-pulse font-medium tracking-wide text-white">Découvre nos partenaires</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <svg className="w-5 h-5 text-white/80 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Club Partners Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
              ⚽ Clubs Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des clubs d'exception qui partagent notre vision de l'excellence sportive
            </p>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {clubPartnersData.map((club, index) => (
              <div key={club.id}>
                {/* Visual separator between cards */}
                {index > 0 && (
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <div className="mx-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  </div>
                )}
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Club Logo */}
                      <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <Image
                            src={club.logo}
                            alt={`${club.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {club.category}
                        </div>
                      </div>
                      
                      {/* Club Information */}
                      <div className="lg:col-span-2 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{club.name}</h3>
                          <div className="flex items-center gap-2 text-gray-600 mb-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{club.country}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed">{club.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">🏆 Palmarès récent :</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {club.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
              🏛️ Partenaires Institutionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le soutien des collectivités pour développer le sport pour tous
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {institutionalPartnersData.map((partner, index) => (
              <div key={partner.id}>
                {/* Visual separator between cards */}
                {index > 0 && (
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <div className="mx-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  </div>
                )}
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                      {/* Partner Logo */}
                      <div className="text-center">
                        <div className="relative w-24 h-24 mx-auto">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Partner Information */}
                      <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                        <p className="text-gray-700 leading-relaxed">{partner.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">🎯 Actions de soutien :</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {partner.support.map((action, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Partners Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
              💼 Partenaires Privés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des marques de confiance qui accompagnent notre mission
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {privatePartnersData.map((partner, index) => (
              <div key={partner.id}>
                {/* Visual separator between cards */}
                {index > 0 && (
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <div className="mx-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  </div>
                )}
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                      {/* Partner Logo */}
                      <div className="text-center">
                        <div className="relative w-32 h-16 mx-auto">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Partner Information */}
                      <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                        <p className="text-gray-700 leading-relaxed">{partner.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">🤝 Notre partenariat :</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {partner.partnership.map((service, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Rejoignez notre réseau de partenaires
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Vous partagez notre passion pour le football et l&apos;excellence sportive ? 
            Découvrez comment devenir partenaire et accompagner les talents de demain.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Devenir partenaire
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
