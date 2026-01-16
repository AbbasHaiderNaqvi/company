"use client"

import { processSteps } from "@/data/site-data"

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm">HOW WE WORK</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-balance">
            Our Creative <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
            A structured approach that transforms your ideas into exceptional digital experiences.
          </p>
        </div>

        {/* Process Steps - Using centralized data */}
        <div className="relative">
          {/* Connection Line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-4 lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/50 transition-colors group ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <span className="text-4xl sm:text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot - hidden on mobile */}
                <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10 mt-12" />

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
