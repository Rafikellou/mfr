'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ClasicoCupPage() {
  return (
    <div>
      <Header />
      
      <section className="pt-20 pb-8 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Clasico Cup - Inscription</h1>
            <p className="text-lg text-gray-700">Remplissez le formulaire ci-dessous pour vous pré-inscrire</p>
          </div>
          
          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe27LG0VwQoGsVpKbUje9k1W5tS8hQD1JZf4r1J2p5J2p5J2p5J2p5J2p5/viewform?embedded=true" 
              width="100%" 
              height="1500" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Formulaire d&apos;inscription Clasico Cup"
            >
              Chargement&hellip;
            </iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}