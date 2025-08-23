import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Concepts from '@/components/Concepts'
import Process from '@/components/Process'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Concepts />
      <Process />
      <Partners />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  )
}
