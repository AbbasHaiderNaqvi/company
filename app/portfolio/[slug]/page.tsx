import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Building } from "lucide-react"
import { projects } from "@/data/site-data"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <span className="text-primary font-mono text-xs sm:text-sm">{project.category}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">{project.title}</h1>
              <p className="text-muted-foreground text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{project.client}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-secondary text-xs sm:text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold mb-6">Project Results</h3>
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{result.metric}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{result.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border mt-6 pt-6">
                <h4 className="text-sm font-medium mb-3">Services Provided</h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image - Using AI generated images */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Gallery - Using AI generated images */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Project Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* {project.gallery.map((_, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl overflow-hidden border border-border group cursor-pointer"
              >
                <img
                  src={`/portfolio/${project.slug}-${index + 1}.jpg`}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Other Projects - Using AI generated images */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherProjects.map((otherProject) => (
              <Link
                key={otherProject.id}
                href={`/portfolio/${otherProject.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-secondary border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-[16/10]">
                  <img
                    src={`/portfolio/${otherProject.slug}.jpg`}
                    alt={otherProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs font-mono">{otherProject.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">{otherProject.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
