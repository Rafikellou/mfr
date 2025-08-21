import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/mfr-logo.png" 
                alt="Montpellier Football Racing" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400">Révélateur de talents depuis 2020</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#evenements" className="hover:text-white transition-colors">Événements</a></li>
              <li><a href="#formats" className="hover:text-white transition-colors">Nos formats</a></li>
              <li><a href="#comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche ?</a></li>
              <li><a href="#clubs-partenaires" className="hover:text-white transition-colors">Clubs & partenaires</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:contact@mfr-football.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@mfr-football.com
              </a>
              <a href="https://wa.me/33123456789" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                WhatsApp
              </a>
              <a href="https://instagram.com/montpellier_football_racing" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v2m0 0v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 text-sm text-gray-400 mb-4 md:mb-0">
            <a href="#mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#rgpd" className="hover:text-white transition-colors">RGPD</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Montpellier Football Racing. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}
