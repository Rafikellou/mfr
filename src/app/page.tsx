import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Formats from '@/components/Formats'
import Process from '@/components/Process'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Events />
      <Formats />
      <Process />
      <Partners />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
