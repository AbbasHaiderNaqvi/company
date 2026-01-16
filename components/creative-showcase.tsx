"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Palette, Code, Smartphone, Zap } from "lucide-react"

const showcaseItems = [
  { icon: Palette, label: "UI Design", color: "from-purple-500 to-pink-500" },
  { icon: Code, label: "Development", color: "from-blue-500 to-cyan-500" },
  { icon: Smartphone, label: "Mobile Apps", color: "from-green-500 to-emerald-500" },
  { icon: Zap, label: "Performance", color: "from-orange-500 to-yellow-500" },
]

export function CreativeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const isMobile = window.innerWidth < 640
      if (isMobile) return

      const scrollY = window.scrollY
      const cards = container.querySelectorAll(".showcase-card")

      cards.forEach((card, index) => {
        const element = card as HTMLElement
        const direction = index % 2 === 0 ? 1 : -1
        const intensity = window.innerWidth < 1024 ? 0.04 : 0.08

        const rawOffset = scrollY * intensity * direction
        const offset = Math.max(Math.min(rawOffset, 40), -40)

        element.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div ref={containerRef} className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 lg:mb-32 px-2">
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest">
            WHAT WE DO
          </span>

          <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Crafting <span className="text-primary">Digital</span> Experiences
          </h2>

          <p className="mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            We combine creativity, technology, and strategy to build digital products
            that make an impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push("/services")}
              className="
                showcase-card
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card
                p-5 sm:p-6 lg:p-8
                text-left
                transition-all
                duration-300
                hover:border-primary/50
                hover:shadow-xl
                hover:-translate-y-1
                active:translate-y-0
                active:shadow-lg
                sm:active:scale-100
                active:scale-[0.98]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/50
              "
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              <div className="relative z-10">
                <div
                  className="
                    mb-4
                    flex
                    h-11 w-11
                    sm:h-14 sm:w-14
                    lg:h-16 lg:w-16
                    items-center
                    justify-center
                    rounded-xl
                    bg-secondary
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-primary
                  "
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-foreground transition-colors group-hover:text-primary-foreground" />
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                  {item.label}
                </h3>

                {/* Animated underline */}
                <div className="mt-4 h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </button>
          ))}
        </div>

        {/* Decorative Elements (Desktop Only) */}
        <div className="pointer-events-none hidden lg:block absolute top-10 left-10 h-20 w-20 rounded-full border border-primary/20 animate-spin-slow" />
        <div className="pointer-events-none hidden lg:block absolute bottom-10 right-10 h-32 w-32 rotate-45 rounded-lg border border-accent/20 animate-float" />
      </div>
    </section>
  )
}
