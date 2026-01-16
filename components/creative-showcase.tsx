"use client"

import { useEffect, useRef } from "react"
import { Palette, Code, Smartphone, Zap } from "lucide-react"

const showcaseItems = [
  { icon: Palette, label: "UI Design", color: "from-purple-500 to-pink-500" },
  { icon: Code, label: "Development", color: "from-blue-500 to-cyan-500" },
  { icon: Smartphone, label: "Mobile Apps", color: "from-green-500 to-emerald-500" },
  { icon: Zap, label: "Performance", color: "from-orange-500 to-yellow-500" },
]

export function CreativeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const cards = container.querySelectorAll(".showcase-card")

      cards.forEach((card, index) => {
        const element = card as HTMLElement
        const direction = index % 2 === 0 ? 1 : -1
        const rawOffset = scrollY * 0.08 * direction

        // Clamp movement to prevent overlap
        const offset = Math.max(Math.min(rawOffset, 40), -40)

        element.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 sm:mb-28 lg:mb-32">
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest">
            WHAT WE DO
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Crafting <span className="text-primary">Digital</span> Experiences
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We combine creativity, technology, and strategy to build digital products
            that make an impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="showcase-card group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:border-primary/50"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-foreground transition-colors group-hover:text-primary-foreground" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold">{item.label}</h3>

                {/* Animated underline */}
                <div className="mt-4 h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none hidden lg:block absolute top-10 left-10 h-20 w-20 rounded-full border border-primary/20 animate-spin-slow" />
        <div className="pointer-events-none hidden lg:block absolute bottom-10 right-10 h-32 w-32 rotate-45 rounded-lg border border-accent/20 animate-float" />
      </div>
    </section>
  )
}
