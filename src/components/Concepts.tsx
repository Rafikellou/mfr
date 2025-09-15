'use client'

import Link from 'next/link'

export default function Concepts() {
  const concepts = [
    {
      title: "Tournois",
      subtitle: "Prouve ta valeur",
      description: "Avec ton &eacute;quipe, affrontez les meilleures formations de votre cat&eacute;gorie. C&apos;est l&apos;occasion de montrer que vous &ecirc;tes les plus forts ensemble !",
      benefits: [
        "Du foot de haut niveau entre &eacute;quipes",
        "Renforcer les liens avec tes co&eacute;quipiers",
        "Te faire conna&icirc;tre dans ta r&eacute;gion",
        "Apprendre &agrave; jouer sous pression"
      ],
      color: "primary",
      gradient: "from-primary to-purple-600",
      bgColor: "bg-purple-50",
      link: "/tournois",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      image: "/tournois-image.jpg"
    },
    {
      title: "D&eacute;tection",
      subtitle: "Ta chance de briller",
      description: "Montre ce que tu sais faire devant des recruteurs de clubs pros. C&apos;est ton moment pour impressionner et peut-&ecirc;tre d&eacute;crocher ta place dans un grand club !",
      benefits: [
        "Des recruteurs pros qui te regardent jouer",
        "Des conseils d&apos;entra&icirc;neurs exp&eacute;riment&eacute;s", 
        "La possibilit&eacute; de rejoindre un club prestigieux",
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
      ),
      image: "/detection-image.jpg"
    },
    {
      title: "Coaching d&apos;&eacute;lite",
      subtitle: "Atteins l&apos;excellence",
      description: "B&eacute;n&eacute;ficie d&apos;un accompagnement personnalis&eacute; pour progresser &agrave; un niveau &eacute;lev&eacute;. Un coaching sur mesure pour atteindre tes objectifs les plus ambitieux.",
      benefits: [
        "Analyse approfondie de ton jeu",
        "Plan de d&eacute;veloppement personnalis&eacute;",
        "Suivi r&eacute;gulier de ta progression",
        "Acc&egrave;s &agrave; des m&eacute;thodes d&apos;entra&icirc;nement avanc&eacute;es"
      ],
      color: "primary",
      gradient: "from-primary to-purple-600",
      bgColor: "bg-purple-50",
      link: "/coaching-elite",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/coaching-image.jpg"
    },
    {
      title: "Stages",
      subtitle: "D&eacute;veloppe ton potentiel",
      description: "Perfectionne ton jeu selon ton poste avec des pros. Que tu sois gardien, d&eacute;fenseur, milieu ou attaquant, d&eacute;couvre les secrets des meilleurs !",
      benefits: [
        "Entra&icirc;nement sp&eacute;cialis&eacute; pour ton poste",
        "Techniques de pro qu&apos;on ne t&apos;apprend nulle part",
        "Progression adapt&eacute;e &agrave; tes points forts",
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
      ),
      image: "/stages-image.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="concepts">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
            Quatre voies vers l&apos;excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            D&eacute;couvre les opportunit&eacute;s qui t&apos;attendent pour r&eacute;v&eacute;ler ton potentiel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <div key={concept.title} className={`${concept.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${concept.gradient} text-white flex items-center justify-center mb-6`}>
                    {concept.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-left mb-4">
                    <h3 className="text-2xl font-poppins font-semibold mb-2">{concept.title}</h3>
                    <p className={`${concept.color === 'primary' ? 'text-primary' : `text-${concept.color}`} font-medium mb-3`}>{concept.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{concept.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">B&eacute;n&eacute;fices pour toi :</h4>
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
                      D&eacute;couvrir les {concept.title.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Chaque format est con&ccedil;u pour d&eacute;velopper des aspects sp&eacute;cifiques de ton jeu et de ta carri&egrave;re
          </p>
        </div>
      </div>
    </section>
  )
}