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
<section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 relative overflow-hidden">
  {/* Background decorative shapes */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div
      className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
      style={{
        background: `linear-gradient(135deg,
          rgba(138, 43, 226, 0.2),
          rgba(72, 61, 139, 0.1))`,
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10 text-left">
    <span className="text-primary font-mono text-sm uppercase tracking-wider mb-2 inline-block">
      Our Services
    </span>

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance max-w-3xl">
  <span
    className="relative after:absolute after:inset-0 after:blur-xl after:opacity-50 animate-pulse"
    style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}
  >
    Services
    <span
      className="absolute inset-0 z-[-1] rounded-full"
      style={{
        backgroundColor: "lab(44.5079% 43.3663 -64.4682)",
        filter: "blur(2rem)",
        opacity: 0.4,
      }}
    />
  </span>
  <br />
  Web Design, UI/UX & Development
</h1>

    <p className="text-muted-foreground text-lg sm:text-xl mt-6 max-w-3xl leading-relaxed">
      From concept to launch, we provide{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        end-to-end design
      </strong>{" "}
      and{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        development services
      </strong>{" "}
      that transform your ideas into stunning digital experiences. Our
      solutions are{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        SEO-optimized
      </strong>
      ,{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        high-performing
      </strong>
      , and{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        globally scalable
      </strong>
      .
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
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
        <h2 id="services-list" className="sr-only">
          Techneed Web Design and Development Services
        </h2>

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
