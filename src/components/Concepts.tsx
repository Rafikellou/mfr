import Link from 'next/link'

export default function Concepts() {
  const concepts = [
    {
      title: "Détections",
      subtitle: "Ta chance de briller",
      description: "Montre ce que tu sais faire devant des recruteurs de clubs pros. C'est ton moment pour impressionner et peut-être décrocher ta place dans un grand club !",
      benefits: [
        "Des recruteurs pros qui te regardent jouer",
        "Des conseils d'entraîneurs expérimentés", 
        "La possibilité de rejoindre un club prestigieux",
        "Un retour constructif sur ton niveau"
      ],
      color: "primary",
      gradient: "from-primary to-purple-600",
      bgColor: "bg-purple-50",
      link: "/detections",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Tournois",
      subtitle: "Prouve ta valeur",
      description: "Avec ton équipe, affrontez les meilleures formations de votre catégorie. C'est l'occasion de montrer que vous êtes les plus forts ensemble !",
      benefits: [
        "Du foot de haut niveau entre équipes",
        "Renforcer les liens avec tes coéquipiers",
        "Te faire connaître dans ta région",
        "Apprendre à jouer sous pression"
      ],
      color: "primary",
      gradient: "from-primary to-purple-600",
      bgColor: "bg-purple-50",
      link: "/tournois",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "Stages Elite",
      subtitle: "Développe ton potentiel",
      description: "Perfectionne ton jeu selon ton poste avec des pros. Que tu sois gardien, défenseur, milieu ou attaquant, découvre les secrets des meilleurs !",
      benefits: [
        "Entraînement spécialisé pour ton poste",
        "Techniques de pro qu&apos;on ne t&apos;apprend nulle part",
        "Progression adaptée à tes points forts",
        "Coaching perso avec des experts"
      ],
      color: "primary",
      gradient: "from-primary to-purple-600",
      bgColor: "bg-purple-50",
      link: "/stages-elite",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="concepts">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
            Trois voies vers l&apos;excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvre les opportunités qui t&apos;attendent pour révéler ton potentiel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <div key={concept.title} className={`${concept.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full`}>
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${concept.gradient} text-white flex items-center justify-center mb-6 mx-auto`}>
                {concept.icon}
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-poppins font-semibold mb-2">{concept.title}</h3>
                <p className={`${concept.color === 'primary' ? 'text-primary' : `text-${concept.color}`} font-medium mb-4`}>{concept.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{concept.description}</p>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-gray-800 mb-3">Bénéfices pour toi :</h4>
                <ul className="space-y-2">
                  {concept.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${concept.color === 'primary' ? 'bg-primary' : `bg-${concept.color}`} mt-2 flex-shrink-0`}></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link 
                  href={concept.link}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-colors bg-gradient-to-r ${concept.gradient} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  Découvrir les {concept.title.toLowerCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Chaque format est conçu pour développer des aspects spécifiques de ton jeu et de ta carrière
          </p>
        </div>
      </div>
    </section>
  )
}