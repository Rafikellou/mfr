'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
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
      }, 2000)
    }, 1500)
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12 text-white">
          Ne manque pas le prochain événement
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ton adresse e-mail"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : isSubmitting
                  ? 'bg-white/70 text-primary'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              {isSubmitted ? '✓ Inscrit !' : isSubmitting ? 'En cours...' : "S'abonner"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
