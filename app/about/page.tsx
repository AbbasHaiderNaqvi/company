import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Zap, Target, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { stats, team, values, companyInfo } from "@/data/site-data"

export const metadata: Metadata = {
  title: "About Us | Our Story",
  description:
    "Learn about Techneed - a creative design and web development agency passionate about crafting exceptional digital experiences.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Zap,
  Users,
  Award,
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-primary font-mono text-xs sm:text-sm">ABOUT US</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-balance">
                We Are <span className="text-primary">{companyInfo.name}</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed">
                A passionate team of designers and developers dedicated to creating exceptional digital experiences. We
                blend creativity with technology to build websites and applications that not only look stunning but also
                drive real business results.
              </p>
              <Link href="/contact">
                <Button size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img src="/professional-creative-team-working-in-modern-desig.jpg" alt="Techneed Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 sm:p-6 hidden sm:block">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-xs sm:text-sm">OUR VALUES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              What <span className="text-primary">Drives</span> Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Target
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-xs sm:text-sm">OUR TEAM</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Meet The <span className="text-primary">Creators</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden border border-border mb-4 relative">
                  <img
                    src={`/professional-headshot.png?height=400&width=400&query=professional headshot ${member.role} creative agency purple tones`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <Link
                        href={member.linkedin}
                        className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Link>
                      <Link
                        href={member.twitter}
                        className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-primary font-mono text-xs sm:text-sm">OUR WORKSPACE</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                Where <span className="text-primary">Creativity</span> Happens
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
                Our modern workspace is designed to inspire creativity and collaboration. Located in the heart of San
                Francisco, we've created an environment where innovative ideas flourish and exceptional work is born.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src="/modern-creative-design-agency-office-interior-with.jpg" alt="Techneed Office" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
