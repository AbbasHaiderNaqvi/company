"use client"

export function ClientsSection() {
  const clients = [
    "TechVentures",
    "Luxe Brands",
    "StartupHub",
    "FinFlow",
    "Gourmet Group",
    "FitLife",
    "Premier Properties",
    "MetaArt",
  ]

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground text-sm mb-8">Trusted by innovative companies worldwide</p>

        {/* Client logos marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 sm:gap-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-xl sm:text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
