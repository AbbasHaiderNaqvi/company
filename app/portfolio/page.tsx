import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { projects, companyInfo } from "@/data/site-data"
import { AnimatedBackground } from "@/components/animated-background"

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
            <AnimatedBackground />
      
            <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden bg-black">
  {/* Background decorative shapes - Purple theme */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
      style={{
        background: `radial-gradient(circle at center, rgba(126, 16, 229, 0.4) 0%, transparent 70%)`,
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
    {/* Portfolio label */}
    <div className="flex items-center gap-3 mb-6">
      <div className="h-[1px] w-8 bg-purple-500"></div>
      <span className="text-purple-400 font-mono text-xs uppercase tracking-[0.2em] font-semibold">
        Selected Works
      </span>
    </div>

    {/* Main heading */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-balance">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600">
        Portfolio
      </span>
      <span className="block text-xl sm:text-2xl md:text-3xl font-light text-white/70 mt-4 tracking-tight">
        Building <span className="text-white font-medium">Full-Stack Ecosystems</span> & <span className="text-white font-medium">Immersive Visual Identities</span>
      </span>
    </h1>

    {/* Description */}
    <p className="text-white/60 text-lg sm:text-xl mt-8 max-w-3xl leading-relaxed">
      We bridge the gap between <span className="text-purple-300">aesthetic excellence</span> and <span className="text-purple-300">technical performance</span>. 
      From scalable web applications to complete brand transformations, our work is defined by 
      precision, innovation, and a relentless focus on <span className="text-white italic">user impact</span>.
    </p>

    {/* Disciplines - Logically Categorized */}

    {/* Stats/Counter */}
    <div className="mt-20 flex flex-wrap gap-12 border-t border-white/10 pt-10">
      <div>
        <div className="text-4xl font-bold text-white tracking-tighter">150<span className="text-purple-500">+</span></div>
        <div className="text-white/40 text-xs uppercase tracking-widest mt-2">Projects Delivered</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-white tracking-tighter">15<span className="text-purple-500">+</span></div>
        <div className="text-white/40 text-xs uppercase tracking-widest mt-2">Specializations</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-white tracking-tighter">90<span className="text-purple-500">%</span></div>
        <div className="text-white/40 text-xs uppercase tracking-widest mt-2">Client Retention</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-white tracking-tighter">5<span className="text-purple-500">+</span></div>
        <div className="text-white/40 text-xs uppercase tracking-widest mt-2">Experience</div>
      </div>
    </div>
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
