export default function Process() {
  return (
    <section className="py-20 bg-gray-50" id="comment-ca-marche">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          Processus d&apos;inscription simple
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Choisir un événement</h3>
            <p className="text-gray-600">
              Sélectionne parmi nos détections, tournois ou stages selon ta catégorie.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Remplir le formulaire</h3>
            <p className="text-gray-600">
              Tes infos principales en quelques clics seulement.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Payer et c'est parti !</h3>
            <p className="text-gray-600">
              Paiement partiel sécurisé pour réserver ta place. Confirmation immédiate.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="mb-6">
            <a href="#concepts" className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-block">
              Explorer les événements
            </a>
          </div>
          <a href="#faq" className="text-primary hover:text-primary/80 font-medium underline">
            FAQ inscriptions
          </a>
        </div>
      </div>
    </section>
  )
}
