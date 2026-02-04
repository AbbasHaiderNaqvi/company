"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  square: string
  story: string
  id: number
  slug: string
  title: string
  category: string[]
  description: string
  frame: string
  tags: string[]
  year: string
  client: string
}

const categories = ["All", "Web Development","Logo Designs", "UI/UX Design", "App Design", "Brand Strategy","Pitch Deck"]

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const filteredProjects =
  activeCategory === "All"
    ? projects
    : projects.filter((p) =>
        p.category.some(
          (c) => c.toLowerCase().trim() === activeCategory.toLowerCase().trim()
        )
      )


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
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => {
            const isLarge = index % 5 === 0
            const isMedium = index % 3 === 1

            return (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer",
                  isLarge && "sm:col-span-2 sm:row-span-2",
                  isMedium && "lg:row-span-2"
                )}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    isLarge
                      ? "aspect-[4/3] sm:aspect-[16/10]"
                      : isMedium
                      ? "aspect-[3/4]"
                      : "aspect-[4/3]"
                  )}
                >
                  {/* Cover Image */}
                  <img
  src={
    isLarge
      ? project.square
      : isMedium
      ? project.story
      : project.square
  }
  alt={project.title}
  draggable={false}
  className={cn(
    "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
    hoveredId === project.id ? "opacity-0" : "opacity-100"
  )}
/>

                  {/* Hover Image with Top → Bottom Auto Scroll */}
                  <AutoScrollImage
                    src={project.frame}
                    active={hoveredId === project.id}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary text-xs font-mono">
                          {project.category}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          • {project.year}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "font-bold mb-2 transition-all duration-300",
                          isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                        )}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={cn(
                          "text-muted-foreground text-sm leading-relaxed transition-all duration-500",
                          hoveredId === project.id
                            ? "opacity-100 max-h-20"
                            : "opacity-0 max-h-0 overflow-hidden"
                        )}
                      >
                        {project.description}
                      </p>
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary/80 backdrop-blur text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                        hoveredId === project.id
                          ? "scale-110 rotate-45"
                          : "scale-100 rotate-0"
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

/* -------------------------
  Helper Component for Auto Scrolling Image
------------------------- */
function AutoScrollImage({
  src,
  active,
}: {
  src: string
  active: boolean
}) {
  const imgRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const container = img.parentElement
    if (!container) return

    // Cleanup pending RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    if (!active) {
      img.style.transition = "transform 0.3s ease"
      img.style.transform = "translateY(0)"
      return
    }

    const startScroll = () => {
      const containerHeight = container.clientHeight

      const imageHeight =
        img.naturalHeight * (container.clientWidth / img.naturalWidth)

      if (imageHeight <= containerHeight) return

      const scrollDistance = imageHeight - containerHeight

      // Let opacity + paint finish first
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          img.style.transition = "transform 40s linear"
          img.style.transform = `translateY(-${scrollDistance}px)`
        })
      })
    }

    if (img.complete) {
      startScroll()
    } else {
      img.onload = startScroll
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [active])

  return (
    <img
      ref={imgRef}
      src={src}
      draggable={false}
      className={cn(
        "absolute top-0 left-0 w-full will-change-transform transition-opacity duration-300",
        active ? "opacity-100" : "opacity-0"
      )}
    />
  )
}
