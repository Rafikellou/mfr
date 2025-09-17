"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
  sortDate: string // YYYY-MM-DD for ordering
}

export default function UpcomingEventsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [autoPlay, setAutoPlay] = useState(true)

  const events: EventCard[] = [
    {
      title: "Clasico Cup",
      subtitle: "Hérault vs. Gard",
      date: "18 Avril 2026",
      location: "Bellegarde",
      image: "/clasico-cup.png",
      description: "Match d'exception pour écrire l'histoire locale. Rejoins-nous pour une expérience unique.",
      ctaLabel: "Se pré-inscrire",
      href: "/tournois",
      sortDate: "2026-04-18",
    },
    {
      title: "Stage Perfectionnement",
      subtitle: "Tous les postes",
      date: "27 → 31 Octobre 2025",
      location: "Montpellier",
      image: "/stage-photo.jpg",
      description: "Développe tes compétences techniques et tactiques avec nos coachs experts.",
      ctaLabel: "S'inscrire au stage",
      href: "/stages-elite",
      sortDate: "2025-10-27",
    },
    {
      title: "Détection USA Football & Études",
      subtitle: "NextChampUSA",
      date: "11 Novembre 2025",
      location: "Mireval (Hérault)",
      image: "/detection-usa.jpg",
      description:
        "Vis ton rêve américain: football de haut niveau + études. Bourses possibles et infrastructures pros.",
      ctaLabel: "S'inscrire",
      href: "/detections",
      sortDate: "2025-11-11",
    },
  ]

  // Order events from nearest to farthest
  const eventsSorted = [...events].sort(
    (a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime(),
  )

  const scrollByAmount = (amount: number) => {
    const el = sliderRef.current
    if (!el) return
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  // Auto-slide every 3s until user interacts
  useEffect(() => {
    if (!autoPlay) return
    const el = sliderRef.current
    if (!el) return

    const getStep = () => {
      const card = el.querySelector<HTMLDivElement>(".event-card")
      if (!card) return 400
      const gap = 24 // gap-6
      return card.offsetWidth + gap
    }

    const interval = setInterval(() => {
      const step = getStep()
      const maxScroll = el.scrollWidth - el.clientWidth
      const nextLeft = Math.min(el.scrollLeft + step, maxScroll)
      // if at end, go back to start for a loop effect
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollTo({ left: nextLeft, behavior: "smooth" })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [autoPlay])

  // Stop autoplay on user interaction (pointer down or scroll by arrows/links)
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const stop = () => setAutoPlay(false)
    el.addEventListener("pointerdown", stop, { passive: true })
    el.addEventListener("touchstart", stop, { passive: true })
    return () => {
      el.removeEventListener("pointerdown", stop)
      el.removeEventListener("touchstart", stop)
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold">Nos prochains évènements</h2>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Précédent"
              onClick={() => {
                setAutoPlay(false)
                scrollByAmount(-400)
              }}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Suivant"
              onClick={() => {
                setAutoPlay(false)
                scrollByAmount(400)
              }}
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
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
            onClick={() => setAutoPlay(false)}
          >
            {eventsSorted.map((ev, idx) => (
              <div
                key={idx}
                className="event-card snap-start shrink-0 w-[88%] md:w-[68%] lg:w-[48%]"
              >
                <div className="relative h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                  <Image src={ev.image} alt={ev.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm md:text-base font-semibold tracking-wide">{ev.date}</span>
                    </div>
                    {ev.location && (
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white shadow">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{ev.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm text-white/80 mb-1">{ev.subtitle}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{ev.title}</h3>
                    <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2">{ev.description}</p>
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
      {/* Hide horizontal scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
