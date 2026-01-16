"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Palette, Code2, Smartphone, Zap, Globe, Layers, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/data/site-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Code2,
  Smartphone,
  Zap,
  Globe,
  Layers,
}

export function Services() {
  const [activeService, setActiveService] = useState<number>(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      id="services"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[12vw] sm:text-[10vw] font-bold text-foreground/[0.02] whitespace-nowrap tracking-tight"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          CREATIVITY
        </span>
      </div>

      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[100px] transition-all duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          opacity: isHovering ? 0.15 : 0,
        }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-20 right-20 w-32 h-32"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)/0.3) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-24 h-24"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)/0.3) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm tracking-wider inline-flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-balance">
            Crafting Digital <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 sm:mt-4 leading-relaxed max-w-2xl">
            From concept to launch, we provide end-to-end design and development services that help businesses stand out
            in the digital landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Services Navigation - Left Side */}
          <div className="lg:col-span-2 space-y-2">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Palette
              const isActive = activeService === index

              return (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card/50 border-border hover:border-primary/30 hover:bg-card"
                  }`}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                  />

                  <div className="flex items-center gap-3 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive ? "bg-primary-foreground/20 scale-110" : "bg-secondary group-hover:scale-105"
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold">{service.title}</h3>
                      <p
                        className={`text-sm mt-0.5 line-clamp-1 ${
                          isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {service.description.split(".")[0]}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-primary-foreground rounded-r transition-all duration-300 ${
                      isActive ? "h-8 opacity-100" : "h-0 opacity-0"
                    }`}
                  />
                </button>
              )
            })}

            <div className="flex items-center justify-center gap-2 pt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeService === index
                      ? "w-8 bg-primary"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Service Details - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl" />

              {(() => {
                const service = services[activeService]
                const IconComponent = iconMap[service.icon] || Palette
                return (
                  <div className="h-full flex flex-col relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 relative z-10">
                          <IconComponent className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div className="absolute inset-0 bg-primary rounded-xl animate-ping opacity-20" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">Expert solutions tailored to your needs</p>
                      </div>

                      <div className="ml-auto text-5xl font-bold text-foreground/5">
                        {String(activeService + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-primary mb-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-primary" />
                        What's Included
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:translate-x-1 cursor-default group/feature"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/feature:bg-primary group-hover/feature:scale-110 transition-all duration-300">
                              <Check className="w-3 h-3 text-primary group-hover/feature:text-primary-foreground transition-colors" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                      <Link href="/services">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                          className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
                        >
                          <ArrowRight className="w-4 h-4 rotate-180" />
                        </button>
                        <button
                          onClick={() => setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                          className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg" className="group bg-transparent">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
