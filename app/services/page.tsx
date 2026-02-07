import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import {
  Palette,
  Code2,
  Smartphone,
  Zap,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

import { services, companyInfo } from "@/data/site-data"
import { AnimatedBackground } from "@/components/animated-background"

/* =========================
   GLOBAL SEO METADATA
========================= */
export const metadata: Metadata = {
  title:
    "Services | Web Design, UI/UX & Development Services by Techneed",
  description:
    "Techneed provides professional web design, UI/UX, and custom web development services. We build fast, scalable, and SEO-optimized digital solutions for global brands.",

  alternates: {
    canonical: "https://techneedllc.com/services",
  },

  openGraph: {
    title:
      "Web Design, UI/UX & Development Services | Techneed",
    description:
      "Explore Techneed’s web design, UI/UX, and development services. We create high-performance, conversion-focused digital experiences.",
    url: "https://techneedllc.com/services",
    siteName: "Techneed",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Techneed web design and development services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Techneed Services | Web Design & Development",
    description:
      "Professional web design, UI/UX, and development services for global businesses.",
    images: ["/og-services.jpg"],
  },
}

/* =========================
   ICON MAP
========================= */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Code2,
  Smartphone,
  Zap,
  Globe,
  Layers,
}

/* =========================
   PAGE
========================= */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* =========================
          SERVICE SCHEMA (VERY IMPORTANT)
      ========================= */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Design and Development Services",
            provider: {
              "@type": "Organization",
              name: companyInfo.name,
              url: "https://techneedllc.com",
            },
            areaServed: "Worldwide",
            serviceType: services.map((s) => s.title),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Services",
              itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />

      {/* =========================
          HERO (PRIMARY KEYWORDS)
      ========================= */}
                  <AnimatedBackground />
                  <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden bg-black">
  {/* Background decorative shapes - Purple theme */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
      style={{
        background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, transparent 70%)`,
      }}
    />
    <div
      className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
      style={{
        background: `radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, transparent 70%)`,
      }}
    />
    <div className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 50px)`,
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10 text-left">
    {/* Services label */}
    <div className="flex items-center gap-3 mb-6">
      <div className="h-[1px] w-8 bg-purple-500"></div>
      <span className="text-purple-400 font-mono text-xs uppercase tracking-[0.2em] font-semibold">
        Our Services
      </span>
    </div>

    {/* Main heading */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-balance">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600">
    Design. Build. Launch.
  </span>
  <span className="block text-xl sm:text-2xl md:text-3xl font-light text-white/70 mt-4 tracking-tight">
  End-to-End <span className="text-white font-medium"> Digital Product Design</span> & <span className="text-white font-medium"> Development</span>
</span>
</h1>

{/* Description */}
<p className="text-white/60 text-lg sm:text-xl mt-8 max-w-3xl leading-relaxed">
  Where <span className="text-purple-300 font-medium">pixel-perfect design</span> meets 
  <span className="text-purple-300 font-medium"> precision engineering </span>. We provide 
  comprehensive services from <span className="text-white font-medium">user research and interface design </span> 
  to <span className="text-white font-medium">full-stack implementation </span>, creating digital 
  products that are both <span className="italic text-white">visually captivating </span> and 
  <span className="text-white font-medium"> technically excellent </span>.
</p>


    {/* Call-to-Actions */}
    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-start">
      <Link href="/contact">
        <Button
          size="lg"
          className="bg-lab text-white hover:brightness-110 transition-all"
        >
          Get a Free Quote
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
      <Link href="/portfolio">
        <Button
          size="lg"
          variant="outline"
          className="border-lab text-lab hover:bg-lab hover:text-white transition-all"
        >
          View Our Work
        </Button>
      </Link>
    </div>
  </div>
</section>





      {/* =========================
          SERVICES GRID
      ========================= */}
      <section
        className="pb-24 px-4 sm:px-6"
        aria-labelledby="services-list"
      >


        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Palette

            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6
                                  group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-foreground group-hover:text-primary-foreground" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border">
                    <Link href="/contact">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center"
                      >
                        Get a Free Quote
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* =========================
          SEO SUPPORT CONTENT
      ========================= */}
      <section className="py-24 px-4 sm:px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Why Choose Techneed?
          </h2>

          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            We combine strategy, design, and engineering to deliver web design
            and development services that drive growth. Our solutions are built
            with performance, SEO, accessibility, and scalability in mind —
            ensuring long-term success for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
