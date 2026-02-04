import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { ArrowRight, Award, Users, Zap, Target } from "lucide-react"
import { stats, team, values, companyInfo } from "@/data/site-data"
import { AnimatedBackground } from "@/components/animated-background"

/* =========================
   GLOBAL SEO METADATA
========================= */
export const metadata: Metadata = {
  title:
    "About Techneed | Global Web Design & Development Agency",
  description:
    "Techneed is a global web design and development agency delivering high-performance websites, UI/UX design, and scalable digital solutions worldwide.",

  alternates: {
    canonical: "https://techneedllc.com/about",
  },

  openGraph: {
    title: "About Techneed | Global Digital Agency",
    description:
      "Meet Techneed — a global web design and development agency creating modern, conversion-focused digital experiences.",
    url: "https://techneedllc.com/about",
    siteName: "Techneed",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Techneed global web design and development team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Techneed | Global Web Design Agency",
    description:
      "Learn about Techneed, a global web design and development agency.",
    images: ["/og-about.jpg"],
  },
}

/* =========================
   ICON MAP
========================= */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Zap,
  Users,
  Award,
}

const founders = team.filter((member) => member.creator)
const otherMembers = team.filter((member) => !member.creator)

/* =========================
   PAGE
========================= */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* =========================
          ENTITY SEO SCHEMA (GLOBAL)
      ========================= */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebDesignCompany",
            name: companyInfo.name,
            url: "https://techneedllc.com",
            logo: "https://techneedllc.com/logo.png",
            description:
              "Techneed is a global web design and development agency specializing in UI/UX design, modern websites, and scalable digital products.",
            sameAs: team.map((m) => m.linkedin),
            founder: founders.map((f) => ({
              "@type": "Person",
              name: f.name,
              jobTitle: f.role,
              sameAs: f.linkedin,
            })),
          }),
        }}
      />

      {/* =========================
          HERO
      ========================= */}
                  <AnimatedBackground />
      <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <header>
            <span className="text-primary font-mono text-sm">
              ABOUT OUR AGENCY
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
              Global Web Design & Development Agency
            </h1>

            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              <strong>{companyInfo.name}</strong> is a global web design and
              development agency helping brands worldwide build
              high-performance websites, intuitive UI/UX designs, and scalable
              digital products that rank, convert, and grow.
            </p>

            <Link href="/contact">
              <Button size="lg" className="mt-6">
                Work With Our Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </header>

          <div className="relative aspect-square rounded-2xl overflow-hidden border">
            <Image
              src="/professional-creative-team-working-in-modern-desig.jpg"
              alt="Techneed global web design and development team collaborating"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================
          STATS
      ========================= */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          VALUES
      ========================= */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-primary font-mono text-sm">
              OUR CORE VALUES
            </span>
            <h2 className="text-4xl font-bold mt-4">
              What Drives Our Agency
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = iconMap[value.icon] || Target
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

{/* =========================
    TEAM – FOUNDERS
========================= */}
<section className="py-24 bg-card px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* FOUNDERS */}
    <header className="text-center mb-16">
      <span className="text-primary font-mono text-sm">
        OUR LEADERSHIP
      </span>
      <h2 className="text-4xl font-bold mt-4">
        Founders & Co-Founders
      </h2>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      {founders.map((member, index) => (
        <a
          key={index}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[280px] text-center group"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border mb-4 transition-all duration-500
                          group-hover:border-purple-500/50 group-hover:shadow-xl">

            {/* Purple Hover Overlay */}
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Purple Glow Ring */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <Image
              src={member.image}
              alt={`${member.name}, ${member.role} at ${companyInfo.name}`}
              fill
              sizes="280px"
              className="object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>

          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">
            {member.role}
          </p>
        </a>
      ))}
    </div>

    {/* DIVIDER */}
    {otherMembers.length > 0 && (
      <div className="my-20 flex items-center gap-4">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground text-sm font-mono">
          OUR TEAM MEMBERS
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
    )}

    {/* MEMBERS */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
      {otherMembers.map((member, index) => (
        <a
          key={index}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[240px] text-center group"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border mb-4 transition-all duration-500
                          group-hover:border-purple-500/40 group-hover:shadow-lg">

            {/* Purple Hover Overlay */}
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Purple Glow Ring */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <Image
              src={member.image}
              alt={`${member.name}, ${member.role} at ${companyInfo.name}`}
              fill
              sizes="240px"
              className="object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>

          <h3 className="font-bold text-base">{member.name}</h3>
          <p className="text-sm text-muted-foreground">
            {member.role}
          </p>
        </a>
      ))}
    </div>

  </div>
</section>


      {/* =========================
          WORKSPACE
      ========================= */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-mono text-sm">
              OUR WORKSPACE
            </span>
            <h2 className="text-4xl font-bold mt-4">
              Where Great Digital Products Are Built
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Our global team collaborates across time zones to deliver
              world-class web design, development, and UI/UX solutions.
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden border">
            <Image
              src="/modern-creative-design-agency-office-interior-with.jpg"
              alt="Techneed creative digital agency workspace"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
