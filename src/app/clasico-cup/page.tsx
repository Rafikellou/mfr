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
              src="https://docs.google.com/forms/d/e/1FAIpQLSdQIV6V6mmf7eUSpesnsa6K8ysHg6bCZAMvhGa-G94rnP075Q/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Formulaire d'inscription Clasico Cup"
              className="min-h-[1453px]"
            >
              Chargement…
            </iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}