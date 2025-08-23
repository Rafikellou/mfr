import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="mb-4 block">
              <Image 
                src="/mfr-logo.png" 
                alt="Montpellier Football Racing" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400">Football d&apos;Elite</p>
            <p className="text-gray-400 text-sm mt-2">Révélateur de talents depuis 2020</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Événements</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/detections" className="hover:text-white transition-colors">🔍 Détections</Link></li>
              <li><Link href="/tournois" className="hover:text-white transition-colors">🏆 Tournois</Link></li>
              <li><Link href="/stages-elite" className="hover:text-white transition-colors">📈 Stages Elite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/partenaires" className="hover:text-white transition-colors">Partenaires</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:contact@mf-racing.fr" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">contact@mf-racing.fr</span>
              </a>
              <a href="https://wa.me/33628740790" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.687"/>
                </svg>
                <span className="text-sm">+33 6 28 74 07 90</span>
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
