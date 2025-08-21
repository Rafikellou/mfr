export default function Process() {
  return (
    <section className="py-20 bg-gray-50" id="comment-ca-marche">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          Processus d&apos;inscription simple
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Choisir un événement</h3>
            <p className="text-gray-600">
              Sélectionnez parmi nos détections, tournois ou stages selon votre catégorie et vos objectifs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Remplir le formulaire</h3>
            <p className="text-gray-600">
              Licence, poste, niveau, contacts - toutes les infos nécessaires en quelques clics.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Payer et confirmer</h3>
            <p className="text-gray-600">
              Paiement sécurisé et confirmation instantanée par e-mail.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Paiement sécurisé (Stripe)</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">Confirmation instantanée</span>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#faq" className="text-primary hover:text-primary/80 font-medium underline">
            FAQ inscriptions
          </a>
        </div>
      </div>
    </section>
  )
}
