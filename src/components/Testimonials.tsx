export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          Témoignages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-gray-700 italic">
                &ldquo;Ça faisait longtemps que je voulais montrer ce que je vaux. Maintenant à moi de prouver à Como.&rdquo;
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Pedro</div>
              <div className="text-sm text-gray-600">Joueur, détecté au FC Como</div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-gray-700 italic">
                &ldquo;Organisation pro, infos claires, et surtout un vrai regard sur le niveau des garçons. Notre fils a progressé et s&apos;est situé.&rdquo;
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Parent</div>
              <div className="text-sm text-gray-600">Anonyme</div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-gray-700 italic">
                &ldquo;Le format MFR met les joueurs dans des situations proches du haut niveau. Idéal pour les évaluer rapidement.&rdquo;
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Coach</div>
              <div className="text-sm text-gray-600">Anonyme</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
