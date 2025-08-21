'use client'

import { useState } from 'react'

const faqData = [
  {
    question: "Quel niveau est requis ?",
    answer: "Nos événements s'adressent aux joueurs évoluant en club, avec un niveau minimum départemental/régional selon les catégories."
  },
  {
    question: "Âges & catégories acceptées ?",
    answer: "Nous accueillons les joueurs de U13 à U19. Chaque événement précise les catégories concernées."
  },
  {
    question: "Matériel à apporter ?",
    answer: "Tenue de sport complète, chaussures adaptées au terrain, gourde d'eau. Le matériel technique est fourni."
  },
  {
    question: "Remboursement/annulation ?",
    answer: "Remboursement intégral jusqu'à 48h avant l'événement. Conditions détaillées dans nos CGV."
  },
  {
    question: "Certificat médical obligatoire ?",
    answer: "Oui, certificat médical de non contre-indication au sport datant de moins d'un an obligatoire."
  },
  {
    question: "Droits à l'image ?",
    answer: "Autorisation parentale requise pour les mineurs. Photos/vidéos utilisées uniquement à des fins promotionnelles MFR."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          FAQ
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 bg-white rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
