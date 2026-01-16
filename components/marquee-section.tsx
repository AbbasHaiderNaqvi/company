export function MarqueeSection() {
  const items = [
    "UI/UX DESIGN",
    "WEB DEVELOPMENT",
    "BRANDING",
    "MOTION DESIGN",
    "E-COMMERCE",
    "APP DESIGN",
    "CREATIVE DIRECTION",
    "DIGITAL STRATEGY",
  ]

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-primary overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-4 sm:mx-6 md:mx-8 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-primary-foreground inline-flex items-center gap-2 sm:gap-3 md:gap-4"
          >
            {item}
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-foreground rounded-full" />
          </span>
        ))}
      </div>
    </section>
  )
}
