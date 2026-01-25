"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/site-data"

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects.slice(0, 4) // Show first 4 on homepage
      : projects.filter((p) => p.category === activeCategory).slice(0, 4)

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - stack on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-primary font-mono text-xs sm:text-sm">OUR WORK</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Selected <span className="text-primary">Projects</span>
            </h2>
          </div>

          {/* Filter Tabs - scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
            {categories.slice(0, 5).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - single column on mobile */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              href={`/portfolio/${project.slug}`}
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl sm:rounded-2xl bg-secondary cursor-pointer block",
                index === 0 && "sm:col-span-2",
              )}
            >
              <div className={cn("relative", index === 0 ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[4/3]")}>
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content Overlay - responsive padding */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-primary text-xs sm:text-sm font-mono">{project.category}</span>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2">{project.title}</h3>
                    <div className="flex gap-2 mt-2 sm:mt-4 flex-wrap">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-1 bg-card/80 backdrop-blur text-[10px] sm:text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link href="/portfolio">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
