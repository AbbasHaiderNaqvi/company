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
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Techneed - Web Design, UI/UX & Development Agency",
  description:
    "Techneed is a global creative agency specializing in Web Design, UI/UX, and Development. We craft high-performing, SEO-friendly digital products for businesses worldwide.",
  openGraph: {
    title: "Techneed - Web Design, UI/UX & Development Agency",
    description:
      "Explore Techneed's portfolio and services in Web Design, UI/UX, and Development. Innovative solutions for businesses globally.",
    images: [
      {
        url: "/og-image-home.png",
        width: 1200,
        height: 630,
        alt: "Techneed Creative Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techneed - Web Design, UI/UX & Development Agency",
    description:
      "We deliver award-winning Web Design, UI/UX, and Development services for businesses globally.",
    images: ["/og-image-home.png"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Clients / Social Proof */}
      <ClientsSection />

      {/* Marquee Logos */}
      <MarqueeSection />

      {/* Creative Work Showcase */}
      <CreativeShowcase />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Process Section */}
      <Process />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Techneed",
            url: "https://www.techneedllc.com",
            logo: "https://www.techneedllc.com/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-800-123-4567",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
            ],
            sameAs: [
              "https://www.linkedin.com/company/techneed",
              "https://www.twitter.com/techneed",
              "https://www.facebook.com/techneed",
            ],
          }),
        }}
      />
    </main>
  )
}
