import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { projects, companyInfo } from "@/data/site-data"

/* =========================
   GLOBAL SEO METADATA (PORTFOLIO)
========================= */
export const metadata: Metadata = {
  title:
    "Portfolio | Global Web Design & Development Projects by Techneed",
  description:
    "Explore Techneed’s global portfolio of web design, UI/UX, and development projects. Discover high-performance websites, scalable applications, and award-winning digital experiences built for brands worldwide.",

  alternates: {
    canonical: "https://techneedllc.com/portfolio",
  },

  openGraph: {
    title:
      "Techneed Portfolio | Web Design, UI/UX & Development Projects",
    description:
      "View real-world web design and development projects by Techneed — a global digital agency delivering modern, conversion-focused solutions.",
    url: "https://techneedllc.com/portfolio",
    siteName: "Techneed",
    type: "website",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Techneed web design and development portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Techneed Portfolio | Global Digital Projects",
    description:
      "Explore global web design, UI/UX, and development projects by Techneed.",
    images: ["/og-portfolio.jpg"],
  },
}

/* =========================
   PAGE
========================= */
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* =========================
          PORTFOLIO SCHEMA (CRITICAL)
      ========================= */}
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Techneed Portfolio",
            description:
              "A curated portfolio of web design, UI/UX, and development projects built by Techneed for global clients.",
            url: "https://techneedllc.com/portfolio",
            creator: {
              "@type": "Organization",
              name: companyInfo.name,
              url: "https://techneedllc.com",
            },
            hasPart: projects.map((project) => ({
              "@type": "CreativeWork",
              name: project.title,
              description: project.description,
              url: `https://techneedllc.com/portfolio/${project.slug ?? ""}`,
            })),
          }),
        }}
      />

      {/* =========================
          HERO (PRIMARY KEYWORDS)
      ========================= */}
<section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 relative overflow-hidden">
  {/* Background decorative shapes */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* Floating shape 2 */}
    <div
      className="absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
      style={{
        background: `linear-gradient(135deg,
          rgba(138, 43, 226, 0.2),
          rgba(72, 61, 139, 0.1))`,
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10 text-left">
    {/* Small uppercase label */}
    <span className="text-primary font-mono text-sm uppercase tracking-wider mb-2 inline-block">
      Our Portfolio
    </span>

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance max-w-3xl">
      <span
        className="relative after:absolute after:inset-0 after:blur-xl after:opacity-50 animate-pulse"
        style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}
      >
        Portfolio
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

    {/* Description */}
    <p className="text-muted-foreground text-lg sm:text-xl mt-6 max-w-3xl leading-relaxed">
      Explore a global portfolio of{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        web design
      </strong>
      ,{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        UI/UX
      </strong>
      , and{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        development projects
      </strong>{" "}
      crafted by Techneed. Each project showcases our expertise in building{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        high-performance
      </strong>
      ,{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        scalable
      </strong>
      , and{" "}
      <strong style={{ color: "lab(44.5079% 43.3663 -64.4682)" }}>
        conversion-driven
      </strong>{" "}
      digital products.
    </p>

  </div>
</section>



      {/* =========================
          PORTFOLIO GRID
      ========================= */}
      <section aria-labelledby="portfolio-work">
        <h2 id="portfolio-work" className="sr-only">
          Techneed Web Design and Development Projects
        </h2>

        <PortfolioGrid projects={projects as any} />
      </section>

      {/* =========================
          SEO SUPPORTING CONTENT
      ========================= */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Brands Choose Techneed
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Our portfolio reflects years of experience delivering modern web
            design, UI/UX strategy, and scalable development solutions for
            startups, enterprises, and global brands. We focus on performance,
            usability, and SEO-driven architecture to ensure every project
            delivers real business impact.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
