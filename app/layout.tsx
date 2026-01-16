import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Techneed | Design & Web Development Agency",
    template: "%s | Techneed",
  },
  description:
    "Techneed is a professional design and web development agency with offices in Dubai, UK, and Pakistan. We specialize in UI/UX design, web development, branding, and digital solutions that drive business results.",
  keywords: [
    "web design",
    "web development",
    "UI/UX design",
    "design agency",
    "digital agency",
    "branding",
    "website design",
    "custom web development",
    "responsive design",
    "mobile app design",
    "Techneed",
    "Dubai web design",
    "UK web development",
    "Pakistan digital agency",
    "Next.js development",
    "React development",
    "e-commerce development",
  ],
  authors: [{ name: "Techneed", url: "https://techneedllc.com" }],
  creator: "Techneed",
  publisher: "Techneed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techneedllc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techneedllc.com",
    siteName: "Techneed",
    title: "Techneed | Design & Web Development Agency",
    description:
      "Professional design and web development agency with global presence. We deliver premium digital solutions that transform businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Techneed - Design & Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techneed | Design & Web Development Agency",
    description: "Professional design and web development agency with global presence in Dubai, UK, and Pakistan.",
    images: ["/og-image.jpg"],
    creator: "@techneed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1625" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Techneed",
              description: "Design & Web Development Agency",
              url: "https://techneedllc.com",
              logo: "https://techneedllc.com/images/442411142-833108342172571-2872580981453156636-n.jpg",
              email: "hello@techneedllc.com",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+971-56-637-0342",
                  contactType: "sales",
                  areaServed: "AE",
                  availableLanguage: ["English", "Arabic"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+44-7725-431724",
                  contactType: "sales",
                  areaServed: "GB",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+92-309-2142612",
                  contactType: "sales",
                  areaServed: "PK",
                  availableLanguage: ["English", "Urdu"],
                },
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Bradford",
                  addressRegion: "England",
                  addressCountry: "GB",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Karachi",
                  addressCountry: "PK",
                },
              ],
              sameAs: [
                "https://www.behance.net/Techneed",
                "https://www.linkedin.com/company/techneedllc",
                "https://www.facebook.com/techneedllc",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Design & Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UI/UX Design",
                      description: "User interface and experience design services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Full-stack web development with React and Next.js",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Brand Identity",
                      description: "Logo design and brand identity services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Commerce Development",
                      description: "Custom e-commerce solutions and Shopify development",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
