"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GetInTouchModal } from "@/components/get-in-touch-modal"
import { StartProjectModal } from "@/components/start-project-modal"

export function Hero() {
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false)
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const section = heroRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <>
      <section
        ref={heroRef}
        className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 min-h-[90svh] flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div
            className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] transition-all duration-700 ease-out"
            style={{
              left: `calc(${mousePosition.x * 100}% - 300px)`,
              top: `calc(${mousePosition.y * 100}% - 300px)`,
            }}
          />

          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-accent/8 blur-[80px] transition-all duration-1000 ease-out"
            style={{
              left: `calc(${mousePosition.x * 100}% - 200px + 150px)`,
              top: `calc(${mousePosition.y * 100}% - 200px + 100px)`,
            }}
          />

          <div
            className="absolute top-20 right-[20%] w-4 h-4 border-2 border-primary/30 transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) rotate(45deg)`,
            }}
          />
          <div
            className="absolute top-[40%] left-[10%] w-3 h-3 bg-primary/20 rounded-full transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            }}
          />
          <div
            className="absolute bottom-[30%] right-[15%] w-6 h-6 border border-primary/20 rounded-full transition-transform duration-600 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * -25}px)`,
            }}
          />
          <div
            className="absolute top-[60%] left-[25%] w-2 h-2 bg-primary/30 transition-transform duration-800 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 35}px) rotate(${mousePosition.x * 180}deg)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm text-foreground font-medium">Design & Development Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                We Create
                <span className="block text-primary relative">
                  Digital
                  <span
                    className="absolute -inset-2 bg-primary/5 rounded-lg -z-10 transition-transform duration-300"
                    style={{
                      transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)`,
                    }}
                  />
                </span>
                <span className="block">Excellence</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Transform your vision into reality with our expert design and development services. We deliver premium
                digital solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 group"
                  onClick={() => setIsStartProjectOpen(true)}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card bg-transparent"
                  onClick={() => setIsGetInTouchOpen(true)}
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Right Content - Interactive showcase */}
            <div className="relative hidden lg:block">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 8}deg) rotateX(${(mousePosition.y - 0.5) * -8}deg)`,
                }}
              >
                <img
                  src="/hero-showcase.jpg"
                  alt="Premium digital design showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Overlay info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs text-primary font-medium tracking-wider uppercase">Featured Work</span>
                  <h3 className="text-xl font-semibold mt-1">Premium Brand Experience</h3>
                </div>
              </div>

              {/* Stats card with interaction */}
              <div
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-lg transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                }}
              >
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>

              {/* Small accent card with interaction */}
              <div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -10}px)`,
                }}
              >
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs opacity-90">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-16 pt-16 mt-16 border-t border-border">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "3", label: "Global Offices" },
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouchModal isOpen={isGetInTouchOpen} onClose={() => setIsGetInTouchOpen(false)} />
      <StartProjectModal isOpen={isStartProjectOpen} onClose={() => setIsStartProjectOpen(false)} />
    </>
  )
}
