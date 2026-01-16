"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  year: string
  client: string
}

const categories = ["All", "E-Commerce", "Web Development", "UI/UX Design", "App Design", "Web3"]

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2.5 rounded-full text-sm transition-all whitespace-nowrap flex-shrink-0 font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Creative Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => {
            // Create varying heights for masonry effect
            const isLarge = index % 5 === 0
            const isMedium = index % 3 === 1

            return (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer",
                  isLarge && "sm:col-span-2 sm:row-span-2",
                  isMedium && "lg:row-span-2",
                )}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={cn(
                    "relative w-full",
                    isLarge ? "aspect-[4/3] sm:aspect-[16/10]" : isMedium ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                >
                  <img
                    src={`/portfolio/${project.slug}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-500",
                      hoveredId === project.id ? "opacity-90" : "opacity-70",
                    )}
                  />

                  {/* Animated border effect */}
                  <div
                    className={cn(
                      "absolute inset-0 border-2 border-primary/0 rounded-2xl transition-all duration-500",
                      hoveredId === project.id && "border-primary/50",
                    )}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary text-xs font-mono">{project.category}</span>
                        <span className="text-muted-foreground text-xs">• {project.year}</span>
                      </div>
                      <h3
                        className={cn(
                          "font-bold mb-2 transition-all duration-300",
                          isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
                        )}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={cn(
                          "text-muted-foreground text-sm leading-relaxed transition-all duration-500",
                          hoveredId === project.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden",
                        )}
                      >
                        {project.description}
                      </p>
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-secondary/80 backdrop-blur text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                        hoveredId === project.id ? "scale-110 rotate-45" : "scale-100 rotate-0",
                      )}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
