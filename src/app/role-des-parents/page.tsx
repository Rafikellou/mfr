'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RoleDesParents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="pt-20 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Le r&ocirc;le des parents au bord du terrain
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="relative h-64 md:h-80">
              <Image 
                src="/role-parent.jpg" 
                alt="Parents au bord du terrain" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-medium">
                  Votre soutien est essentiel pour le d&eacute;veloppement de votre enfant
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Au sein de notre club, nous savons combien le soutien des parents est pr&eacute;cieux. Vous &ecirc;tes les premiers &eacute;ducateurs de vos enfants et votre attitude joue un r&ocirc;le essentiel dans leur plaisir, leur motivation et leur progression.
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Le football, surtout en cat&eacute;gorie de jeunes, n&apos;est pas seulement une comp&eacute;tition : c&apos;est un espace d&apos;apprentissage, de partage et de d&eacute;veloppement personnel. Chaque entra&icirc;nement, chaque match est une occasion d&apos;apprendre, de progresser, de se faire des amis et de grandir, sur le terrain comme en dehors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-primary">Ce que nous attendons des parents</h2>
                    </div>
                    
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Encourager avec bienveillance :</strong> applaudissez les efforts, la pers&eacute;v&eacute;rance et le fair-play, pas uniquement les buts ou les victoires.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Respecter les &eacute;ducateurs et arbitres :</strong> leur r&ocirc;le est d&apos;accompagner, d&apos;encadrer et de faire progresser les enfants.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Favoriser l&apos;esprit d&apos;&eacute;quipe :</strong> rappelez &agrave; votre enfant que le football est un sport collectif.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Valoriser le plaisir avant le r&eacute;sultat :</strong> l&apos;important est d&apos;aimer jouer et progresser.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-amber-700">Ce qu&apos;il faut &eacute;viter</h2>
                    </div>
                    
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Donner des consignes depuis le bord du terrain :</strong> cela peut perturber l&apos;enfant.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Mettre trop de pression sur la performance :</strong> un enfant qui joue dans la peur de d&eacute;cevoir perd confiance.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Critiquer arbitres, adversaires ou partenaires :</strong> l&apos;enfant imite souvent les comportements qu&apos;il observe.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 my-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-blue-700">L&apos;essentiel &agrave; retenir</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    Un enfant qui joue au football doit avant tout s&apos;amuser, apprendre et progresser. Les victoires sont un bonus, mais la formation et le d&eacute;veloppement personnel passent avant tout.
                  </p>
                  
                  <p className="text-gray-700">
                    En accompagnant votre enfant avec bienveillance, en valorisant ses efforts plut&ocirc;t que ses r&eacute;sultats, vous l&apos;aidez &agrave; construire non seulement ses comp&eacute;tences sportives, mais aussi des valeurs fortes : respect, esprit d&apos;&eacute;quipe, pers&eacute;v&eacute;rance et confiance en soi.
                  </p>
                </div>

                <div className="text-center mt-10 pt-6 border-t border-gray-200">
                  <p className="text-xl font-semibold text-primary">
                    Merci de contribuer, avec nous, &agrave; faire du football un terrain d&apos;&eacute;ducation et de plaisir pour tous ! ⚽
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}