import Header from '@/components/Header'
import Image from 'next/image'
import Hero from '@/components/Hero'
import ClasicoCup from '@/components/ClasicoCup'
import PerfectionnementStage from '@/components/PerfectionnementStage'
import Concepts from '@/components/Concepts'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ClasicoCup />
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500 font-medium"></span>
        </div>
      </div>
      <PerfectionnementStage />

      {/* Section Détection USA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/detection-usa.jpg"
                alt="Détection USA - Football & Études"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">Détection USA</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Vis ton rêve américain: combine football de haut niveau et études aux USA. Infrastructures pros, ambiance unique
                et diplôme reconnu à l’international. Places limitées.
              </p>
              <a
                href="/detections"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Découvrir la détection USA
              </a>
            </div>
          </div>
        </div>
      </section>

      <Concepts />
      <Process />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  )
}