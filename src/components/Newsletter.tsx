'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
        setCategory('')
        setCity('')
        setConsent(false)
      }, 2000)
    }, 1500)
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12 text-white">
          Ne manque pas la prochaine détection
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ton adresse e-mail"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Catégorie</option>
              <option value="u13">U13</option>
              <option value="u15">U15</option>
              <option value="u17">U17</option>
              <option value="u19">U19</option>
            </select>
            
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Ville préférée</option>
              <option value="montpellier">Montpellier</option>
              <option value="marseille">Marseille</option>
              <option value="lyon">Lyon</option>
            </select>
          </div>
          
          <div className="mb-8">
            <label className="flex items-start gap-3 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 w-4 h-4 text-white border-white rounded focus:ring-white"
              />
              <span className="text-sm">
                J'accepte de recevoir les alertes dates par e-mail (RGPD)
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className={`w-full py-4 rounded-lg font-medium text-lg transition-colors ${
              isSubmitted
                ? 'bg-green-500 text-white'
                : isSubmitting
                ? 'bg-white/70 text-primary'
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            {isSubmitted ? '✓ Inscrit !' : isSubmitting ? 'Inscription en cours...' : "S'abonner aux alertes"}
          </button>
        </form>
      </div>
    </section>
  )
}
