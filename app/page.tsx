import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClientsSection } from "@/components/clients-section"
import { MarqueeSection } from "@/components/marquee-section"
import { CreativeShowcase } from "@/components/creative-showcase"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <ClientsSection />
      <MarqueeSection />
      <CreativeShowcase />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
