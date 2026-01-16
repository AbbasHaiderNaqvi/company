import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { projects } from "@/data/site-data"

export const metadata: Metadata = {
  title: "Portfolio | Our Creative Work",
  description:
    "Explore our portfolio of award-winning web design, UI/UX, and development projects. See how we transform ideas into stunning digital experiences.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-mono text-xs sm:text-sm">OUR PORTFOLIO</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 text-balance">
              Creative <span className="text-primary">Work</span> That Speaks
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed max-w-2xl">
              Explore our collection of award-winning projects. Each piece represents our commitment to exceptional
              design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Using centralized data */}
      <PortfolioGrid projects={projects} />

      <Footer />
    </main>
  )
}
