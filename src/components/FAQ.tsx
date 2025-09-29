'use client'

import { useState } from 'react'
import { useExtendedContent } from '@/contexts/ExtendedContentContext'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { getContentByComponent } = useExtendedContent()
  
  // Récupérer le contenu du CMS
  const faqContent = getContentByComponent('faq')
  
  // Fallback vers le contenu par défaut si le CMS n'est pas configuré
  const defaultFaqs = [
    {
      question: "À qui s'adressent vos événements ?",
      answer: "Nos événements s'adressent aux joueurs évoluant en club, avec un niveau minimum départemental/régional selon les catégories."
    },
    {
      question: "Quel matériel faut-il prévoir ?",
      answer: "Tenue de sport complète, chaussures adaptées au terrain, gourde d'eau. Le matériel technique est fourni."
    },
    {
      question: "Un certificat médical est-il obligatoire ?",
      answer: "Oui, certificat médical de non contre-indication au sport datant de moins d'un an obligatoire."
    },
    {
      question: "Droits à l'image ?",
      answer: "En participant à nos événements, vous acceptez que des images puissent être prises et utilisées à des fins de communication. Ces images peuvent être diffusées sur nos réseaux sociaux, site internet et supports de communication, sans compensation financière."
    },
    {
      question: "Politique d'annulation ?",
      answer: "Les annulations sont possibles jusqu'à 15 jours avant l'événement, sous réserve d'approbation. Passé ce délai, le paiement est dû en totalité sauf en cas de blessure avec certificat médical. Les remboursements sont effectués sous 30 jours."
    }
  ]

  // Construire les FAQs depuis le CMS ou utiliser les valeurs par défaut
  const faqs = Object.keys(faqContent).length > 0 ? [
    {
      question: faqContent.question_1 || defaultFaqs[0].question,
      answer: faqContent.answer_1 || defaultFaqs[0].answer
    },
    {
      question: faqContent.question_2 || defaultFaqs[1].question,
      answer: faqContent.answer_2 || defaultFaqs[1].answer
    },
    {
      question: faqContent.question_3 || defaultFaqs[2].question,
      answer: faqContent.answer_3 || defaultFaqs[2].answer
    },
    {
      question: faqContent.question_4 || defaultFaqs[3].question,
      answer: faqContent.answer_4 || defaultFaqs[3].answer
    },
    {
      question: faqContent.question_5 || defaultFaqs[4].question,
      answer: faqContent.answer_5 || defaultFaqs[4].answer
    }
  ] : defaultFaqs

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          Questions fréquentes
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