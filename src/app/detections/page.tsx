"use client"

import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

type RegisteredPlayer = { firstName: string; lastName: string }
type Detection = {
  id: number
  type: "detection"
  title: string
  date: string
  dateFormatted: string
  time: string
  city: string
  venue: string
  venueAddress: string
  googleMapsLink: string
  category: string
  categoryLabel: string
  ageRange: string
  placesTotal: number
  placesLeft: number
  price: string
  priceType: string
  advancePayment: string
  image: string
  status: "open" | "full" | "last-places" | "closed"
  club: string
  description: string
  format: string
  registeredPlayers: RegisteredPlayer[]
  ctaUrl?: string
}

const detectionsData: Detection[] = [
  {
    id: 1,
    type: "detection",
    title: "Détection Benfica",
    date: "2025-08-27",
    dateFormatted: "Mercredi 27 Août 2025",
    time: "14h00 - 17h00",
    city: "Montpellier",
    venue: "Stade de la Mosson",
    venueAddress: "Avenue de Heidelberg, 34000 Montpellier",
    googleMapsLink: "https://maps.google.com/?q=Stade+de+la+Mosson+Montpellier",
    category: "u17",
    categoryLabel: "U17-U19",
    ageRange: "17-19 ans",
    placesTotal: 30,
    placesLeft: 15,
    price: "50€",
    priceType: "par joueur",
    advancePayment: "5€",
    image: "/detection-benfica.jpg",
    status: "closed",
    club: "SL Benfica",
    description:
      "Une opportunité unique de montrer tes talents devant les recruteurs du SL Benfica. Les détecteurs évalueront ton niveau technique, tactique et mental.",
    format: "Matchs 7vs7 + Tests techniques individuels",
    registeredPlayers: [
      { firstName: "Lucas", lastName: "M." },
      { firstName: "Tom", lastName: "D." },
      { firstName: "Nathan", lastName: "B." },
      { firstName: "Hugo", lastName: "L." },
      { firstName: "Enzo", lastName: "R." },
      { firstName: "Maxime", lastName: "F." },
      { firstName: "Clément", lastName: "P." },
      { firstName: "Antoine", lastName: "G." },
      { firstName: "Théo", lastName: "M." },
      { firstName: "Alexandre", lastName: "T." },
      { firstName: "Baptiste", lastName: "C." },
      { firstName: "Romain", lastName: "V." },
      { firstName: "Kevin", lastName: "H." },
      { firstName: "Julien", lastName: "N." },
      { firstName: "Nicolas", lastName: "S." },
    ],
  },
  {
    id: 2,
    type: "detection",
    title: "Détection USA Football & Études",
    date: "2025-11-11",
    dateFormatted: "Mardi 11 Novembre 2025",
    time: "Heure communiquée ultérieurement",
    city: "Mireval",
    venue: "Ville de Mireval",
    venueAddress: "(Hérault) – Adresse exacte communiquée ultérieurement",
    googleMapsLink: "#",
    category: "u18-u23",
    categoryLabel: "U18 à U23",
    ageRange: "18-23 ans",
    placesTotal: 25,
    placesLeft: 25,
    price: "50€",
    priceType: "par joueur",
    advancePayment: "50€",
    image: "/detection-usa.jpg",
    status: "open",
    club: "NextChampUSA",
    description:
      "Obtiens une bourse pour intégrer une université américaine, poursuis tes études dans un cadre reconnu à l’international et joue au football dans des stades remplis, au cœur d’infrastructures dignes du monde professionnel. Détection ouverte uniquement aux joueurs en terminale ou dans les trois premières années post-bac.",
    format:
      "Ouvert U18–U23 (min R1/R2/centre). Exigences: Bac, test d’anglais (Duolingo/TOEFL), dossier académique et sportif. Bourses 70–100% via NextChampUSA.",
    registeredPlayers: [],
    ctaUrl:
      "https://www.payasso.fr/montpellier-football-racing/detection-usa-nov-2025",
  },
]

export default function DetectionsPage() {
  const filteredDetections = detectionsData
  // Met la détection USA en premier
  const sortedDetections = [...filteredDetections].sort((a, b) =>
    a.id === 2 ? -1 : b.id === 2 ? 1 : 0
  )

  const getStatusBadge = (d: Detection) => {
    if (d.status === "full") {
      return (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          Complet
        </div>
      )
    }
    if (d.status === "last-places") {
      return (
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          Dernières places
        </div>
      )
    }
    if (d.status === "closed") {
      return (
        <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
          Détection finalisée
        </div>
      )
    }
    return null
  }

  const getPlacesText = (d: Detection) => {
    if (d.status === "full") {
      return <span className="text-red-500 font-medium">Complet</span>
    }
    if (d.placesLeft <= 5) {
      return (
        <span className="text-orange-500 font-medium">
          {d.placesLeft} places restantes
        </span>
      )
    }
    return (
      <span className="text-green-500 font-medium">
        {d.placesLeft} places disponibles
      </span>
    )
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/detection-photo.jpg"
            alt="Young football player"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            Ta chance de{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              briller
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Chaque détection est une porte vers ton rêve.
            <br className="hidden md:block" />
            Montre ton talent devant des recruteurs de clubs prestigieux.
          </p>
        </div>
      </section>

      {/* Detections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sortedDetections.length > 0 ? (
            <div className="space-y-12 max-w-7xl mx-auto">
              {sortedDetections.map((detection, index) => (
                <div key={detection.id}>
                  {index > 0 && (
                    <div className="flex items-center justify-center mb-12">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                      <div className="mx-6 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                    </div>
                  )}

                  <div
                    className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow ${
                      detection.status === "closed" ? "opacity-70" : ""
                    }`}
                  >
                    {/* Large Event Image */}
                    <div className="relative h-80">
                      <Image
                        src={detection.image}
                        alt={detection.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Détection
                      </div>
                      {getStatusBadge(detection)}
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">
                          {detection.title}
                        </h3>
                        <p className="text-lg opacity-90">{detection.club}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {/* Date and Time */}
                          <div>
                            <div className="flex items-center gap-2 text-gray-800 mb-2">
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="font-semibold">
                                {detection.dateFormatted}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{detection.time}</span>
                            </div>
                          </div>

                          {/* Location */}
                          <div>
                            <div className="flex items-start gap-2 text-gray-800 mb-1">
                              <svg
                                className="w-5 h-5 text-primary mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <div className="font-semibold">
                                  {detection.venue}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {detection.venueAddress}
                                </div>
                                <a
                                  href={detection.googleMapsLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 mt-1"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                  Voir sur Google Maps
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div>
                            <p className="text-gray-700 leading-relaxed">
                              {detection.description}
                            </p>
                          </div>

                          {/* Format */}
                          <div className="flex items-center gap-2 text-gray-800">
                            <svg
                              className="w-5 h-5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                            <span className="font-medium">Format:</span>
                            <span className="text-gray-600">
                              {detection.format}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Age Category and Pricing */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">
                                Catégorie d'âge
                              </div>
                              <div className="font-semibold text-gray-800">
                                {detection.categoryLabel}
                              </div>
                              <div className="text-xs text-gray-500">
                                {detection.ageRange}
                              </div>
                            </div>
                            <div className="bg-primary/5 p-3 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">
                                Prix total
                              </div>
                              <div className="font-bold text-xl text-primary">
                                {detection.price}
                              </div>
                              <div className="text-xs text-gray-500">
                                {detection.priceType}
                              </div>
                            </div>
                          </div>

                          {/* Avance */}
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-yellow-800">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                />
                              </svg>
                              <span className="font-medium">
                                Avance pour réserver: {detection.advancePayment}
                              </span>
                            </div>
                          </div>

                          {/* Places Available */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-800">
                                Places disponibles
                              </span>
                              {getPlacesText(detection)}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  detection.placesLeft <= 5
                                    ? "bg-orange-500"
                                    : "bg-green-500"
                                }`}
                                style={{
                                  width: `${
                                    (detection.placesLeft /
                                      detection.placesTotal) *
                                    100
                                  }%`,
                                }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {detection.placesLeft} / {detection.placesTotal}{" "}
                              places
                            </div>
                          </div>

                          {/* Registered Players */}
                          <div>
                            <div className="font-medium text-gray-800 mb-3">
                              Joueurs déjà inscrits (
                              {detection.registeredPlayers.length})
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-sm">
                              {detection.registeredPlayers.map(
                                (player, idx) => (
                                  <div key={idx} className="text-gray-600">
                                    {player.firstName} {player.lastName}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA + Price footer */}
                  <div className="px-8 pb-8 mt-8">
                    <div
                      className={`p-6 rounded-xl ${
                        detection.status === "closed"
                          ? "bg-gray-200"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                          {detection.ctaUrl ? (
                            <a
                              href={detection.ctaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl transform hover:scale-105 text-center"
                            >
                              S'inscrire maintenant
                            </a>
                          ) : (
                            <button
                              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg ${
                                detection.status === "full" ||
                                detection.status === "closed"
                                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                  : "bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl transform hover:scale-105"
                              }`}
                              disabled={
                                detection.status === "full" ||
                                detection.status === "closed"
                              }
                            >
                              {detection.status === "full"
                                ? "Complet"
                                : detection.status === "closed"
                                ? "Détection finalisée"
                                : "S'inscrire maintenant"}
                            </button>
                          )}
                          <a
                            href="/contact"
                            className="w-full sm:w-auto text-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
                          >
                            Plus d'infos
                          </a>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {detection.price}
                          </div>
                          <div className="text-lg text-gray-600">
                            Avance:{" "}
                            <span className="font-semibold text-green-600">
                              {detection.advancePayment}
                            </span>
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
              <p className="text-gray-700 text-lg">
                Prochaines détections seront bientôt disponibles.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}