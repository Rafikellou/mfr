"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

type EventCard = {
  title: string
  subtitle?: string
  date: string
  location?: string
  image: string
  description: string
  ctaLabel: string
  href: string
  external?: boolean
}

export default function UpcomingEventsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const events: EventCard[] = [
    {
      title: "Clasico Cup",
      subtitle: "Hérault vs. Gard",
      date: "18 Avril 2026 — Bellegarde",
      location: "",
      image: "/clasico-cup.png",
      description: "Match d'exception pour écrire l'histoire locale. Rejoins-nous pour une expérience unique.",
      ctaLabel: "Se pré-inscrire",
      href: "/clasico-cup",
    },
    {
      title: "Stage Perfectionnement",
      subtitle: "Tous les postes",
      date: "27 → 31 Octobre 2025 — Montpellier",
      location: "",
      image: "/stage-photo.jpg",
      description: "Développe tes compétences techniques et tactiques avec nos coachs experts.",
      ctaLabel: "S'inscrire au stage",
      href: "https://www.payasso.fr/monptellier-football-racing/stage-perfectionnement-toussaint-2025",
      external: true,
    },
    {
      title: "Détection USA Football & Études",
      subtitle: "NextChampUSA",
      date: "11 Novembre 2025 — Mireval (Hérault)",
      location: "",
      image: "/detection-usa.jpg",
      description:
        "Vis ton rêve américain: football de haut niveau + études. Bourses possibles et infrastructures pros.",
      ctaLabel: "S'inscrire",
      href: "https://www.payasso.fr/montpellier-football-racing/detection-usa-nov-2025",
      external: true,
    },
  ]

  const scrollByAmount = (amount: number) => {
    const el = sliderRef.current
    if (!el) return
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold">Nos prochains évènements</h2>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Précédent"
              onClick={() => scrollByAmount(-400)}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Suivant"
              onClick={() => scrollByAmount(400)}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Scroll hint arrow */}
          <div className="absolute right-4 -top-8 md:hidden animate-bounce text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[88%] md:w-[68%] lg:w-[48%]"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image src={ev.image} alt={ev.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm text-white/80 mb-1">{ev.subtitle}</div>
                    <h3 className="text-2xl font-bold mb-1">{ev.title}</h3>
                    <div className="text-sm text-white/80 mb-3">{ev.date}</div>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">{ev.description}</p>
                    {ev.external ? (
                      <a
                        href={ev.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        {ev.ctaLabel}
                      </a>
                    ) : (
                      <Link
                        href={ev.href}
                        className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        {ev.ctaLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* Partial ghost to hint continuation */}
            <div className="shrink-0 w-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
