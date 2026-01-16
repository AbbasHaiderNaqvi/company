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
        const offset = scrollY * 0.1 * (index % 2 === 0 ? 1 : -1)
        element.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm">WHAT WE DO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Crafting <span className="text-primary">Digital</span> Experiences
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to build digital products that make an impact.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="showcase-card group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{item.label}</h3>

                {/* Animated underline */}
                <div className="mt-4 h-1 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="hidden lg:block absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-spin-slow" />
        <div className="hidden lg:block absolute bottom-10 right-10 w-32 h-32 border border-accent/20 rounded-lg rotate-45 animate-float" />
      </div>
    </section>
  )
}
