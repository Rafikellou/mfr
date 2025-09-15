import Header from '@/components/Header'
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
      <Concepts />
      <Process />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  )
}