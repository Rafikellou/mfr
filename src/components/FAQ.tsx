'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "À qui s'adressent vos événements ?",
      answer: "Nos &eacute;v&eacute;nements s&apos;adressent aux joueurs &eacute;voluant en club, avec un niveau minimum d&eacute;partemental/r&eacute;gional selon les cat&eacute;gories."
    },
    {
      question: "Quel matériel faut-il prévoir ?",
      answer: "Tenue de sport compl&egrave;te, chaussures adapt&eacute;es au terrain, gourde d&apos;eau. Le mat&eacute;riel technique est fourni."
    },
    {
      question: "Un certificat médical est-il obligatoire ?",
      answer: "Oui, certificat m&eacute;dical de non contre-indication au sport datant de moins d&apos;un an obligatoire."
    },
    {
      question: "Droits &agrave; l&apos;image ?",
      answer: "En participant &agrave; nos &eacute;v&eacute;nements, vous acceptez que des images puissent &ecirc;tre prises et utilis&eacute;es &agrave; des fins de communication. Ces images peuvent &ecirc;tre diffus&eacute;es sur nos r&eacute;seaux sociaux, site internet et supports de communication, sans compensation financi&egrave;re."
    },
    {
      question: "Politique d'annulation ?",
      answer: "Les annulations sont possibles jusqu&apos;&agrave; 15 jours avant l&apos;&eacute;v&eacute;nement, sous r&eacute;serve d&apos;approbation. Pass&eacute; ce d&eacute;lai, le paiement est d&ucirc; en totalit&eacute; sauf en cas de blessure avec certificat m&eacute;dical. Les remboursements sont effectu&eacute;s sous 30 jours."
    }
  ]

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          Questions fr&eacute;quentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}