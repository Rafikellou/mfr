export default function FinalCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-12 text-white">
          Prêt à te mesurer au meilleur niveau ?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            Voir toutes les dates
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary transition-colors">
            Proposer un partenariat club
          </button>
        </div>
      </div>
    </section>
  )
}
