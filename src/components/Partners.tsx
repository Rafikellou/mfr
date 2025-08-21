import Image from 'next/image'

export default function Partners() {
  return (
    <section className="py-20 bg-white" id="clubs-partenaires">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
          Clubs & partenaires
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center p-4">
            <Image 
              src="/Benfica-Logo.png" 
              alt="SL Benfica" 
              width={80} 
              height={80}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image 
              src="/como-logo.svg" 
              alt="FC Como" 
              width={80} 
              height={80}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image 
              src="/marseille-logo.png" 
              alt="Olympique de Marseille" 
              width={80} 
              height={80}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image 
              src="/lyon-logo.svg" 
              alt="Olympique Lyonnais" 
              width={80} 
              height={80}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image 
              src="/montpellier-logo.png" 
              alt="Montpellier Hérault SC" 
              width={80} 
              height={80}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image 
              src="/como-logo.svg" 
              alt="FC Porto" 
              width={80} 
              height={80}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
