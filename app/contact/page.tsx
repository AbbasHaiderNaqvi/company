import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Globe } from "lucide-react"
import { companyInfo, offices } from "@/data/site-data"

function UAEFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <path fill="#00732f" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000" d="M0 320h640v160H0z" />
      <path fill="red" d="M0 0h220v480H0z" />
    </svg>
  )
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 302 80 480H0v-60l239-178L0 64V0h75z" />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
      />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </svg>
  )
}

function PakistanFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <defs>
        <clipPath id="pk-contact">
          <path fillOpacity=".7" d="M-52.3 0h682.6v512H-52.3z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#pk-contact)" transform="translate(49) scale(.9375)">
        <path fill="#0c590b" d="M-95 0h768v512H-95z" />
        <path fill="#fff" d="M-95 0H97.5v512H-95z" />
        <g fill="#fff">
          <path d="m403.7 225.4-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z" />
          <path d="M415.4 306a121.2 121.2 0 0 1-161.3 59.4 122.1 122.1 0 0 1-59.5-162.1A118.6 118.6 0 0 1 266 139a156.2 156.2 0 0 0-11.8 10.9A112.3 112.3 0 0 0 415.5 306z" />
        </g>
      </g>
    </svg>
  )
}

const flagMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UAE: UAEFlag,
  UK: UKFlag,
  Pakistan: PakistanFlag,
}

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Ready to start your project? Contact Techneed today for a free consultation. We have offices in Dubai, UK, and Pakistan.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div
            className="absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: "linear-gradient(135deg, rgba(138,43,226,0.2), rgba(72,61,139,0.1))",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-2 inline-block">
            Contact Us
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl text-balance">
            Let's Start a{" "}
            <span
              className="relative after:absolute after:inset-0 after:blur-xl after:opacity-50 animate-pulse"
              style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}
            >
              Conversation
              <span
                className="absolute inset-0 z-[-1] rounded-full"
                style={{
                  backgroundColor: "lab(44.5079% 43.3663 -64.4682)",
                  filter: "blur(2rem)",
                  opacity: 0.4,
                }}
              />
            </span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl mt-6 max-w-3xl leading-relaxed">
            Have a <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>project</strong> in mind? Reach out to
            our <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>global offices</strong> and we’ll get back to
            you within 24 hours, 7 days a week.
          </p>
        </div>
      </section>
      <section className="pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Global Offices Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Global Offices</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => {
                const FlagComponent = flagMap[office.country]
                return (
                  <Card key={office.city} className="bg-card border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden">
                          {FlagComponent ? (
                            <FlagComponent className="w-8 h-6" />
                          ) : (
                            <MapPin className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{office.city}</h3>
                          <p className="text-sm text-muted-foreground">{office.country}</p>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="hover:text-primary transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{office.timezone}</span>
                        </div>
                        <p className="text-muted-foreground pt-2">{office.address}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* General Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">General Inquiries</h2>
              <div className="space-y-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Working Hours */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Working Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">* Hours may vary by office location</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
