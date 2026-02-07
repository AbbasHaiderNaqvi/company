"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/data/site-data"

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary font-mono text-xs sm:text-sm">TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>

        <div className="relative">
          <div className="bg-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4 sm:mb-6 opacity-50" />

            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 text-balance">
              "{testimonials[current].quote}"
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {/* Lazy-load testimonial image */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="rounded-full object-cover transition-all duration-300"
                  style={{
                    filter: "grayscale(100%) sepia(20%) hue-rotate(260deg) saturate(150%)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                      "grayscale(100%) sepia(20%) hue-rotate(260deg) saturate(150%)")
                  }
                  placeholder="blur"
                  blurDataURL="/placeholder.png" // tiny blurred image
                  loading="lazy"
                />
              </div>

              <div className="text-left">
                <div className="font-bold text-sm sm:text-base">{testimonials[current].name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{testimonials[current].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "w-6 sm:w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
