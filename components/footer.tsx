import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Phone } from "lucide-react"
import { companyInfo, services, offices } from "@/data/site-data"

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  )
}

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
        <clipPath id="pk-footer">
          <path fillOpacity=".7" d="M-52.3 0h682.6v512H-52.3z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#pk-footer)" transform="translate(49) scale(.9375)">
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

export function Footer() {
  const links = {
    services: services.slice(0, 4).map((s) => ({
      name: s.title,
      href: "/services",
    })),
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/portfolio" },
      { name: "Process", href: "/about#process" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "Behance", icon: BehanceIcon, href: companyInfo.socialLinks.behance },
      { name: "LinkedIn", icon: Linkedin, href: companyInfo.socialLinks.linkedin },
      { name: "Facebook", icon: Facebook, href: companyInfo.socialLinks.facebook },
    ],
  }

  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/442411142-833108342172571-2872580981453156636-n.jpg"
                alt={`${companyInfo.name} Logo`}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">{companyInfo.description}</p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {links.social.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Global Offices</h4>
            <ul className="space-y-4">
              {offices.map((office) => {
                const FlagComponent = flagMap[office.country]
                return (
                  <li key={office.city} className="text-sm">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      {FlagComponent && (
                        <FlagComponent className="w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0" />
                      )}
                      {office.city}, {office.country}
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-1"
                    >
                      <Phone className="w-3 h-3" />
                      {office.phone}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
