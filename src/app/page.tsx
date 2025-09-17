import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UpcomingEventsSlider from '@/components/UpcomingEventsSlider'
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
      <UpcomingEventsSlider />

      <Concepts />
      <Process />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  )
}