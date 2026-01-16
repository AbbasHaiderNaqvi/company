"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StartProjectModal } from "@/components/start-project-modal"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <Image
                src="/images/442411142-833108342172571-2872580981453156636-n.jpg"
                alt="Techneed Logo"
                width={36}
                height={36}
                className="rounded-lg group-hover:scale-105 transition-transform sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold text-foreground">Techneed</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors relative group",
                    pathname === item.href && "text-foreground",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              ))}
            </nav>

            <Button
              className="hidden lg:flex bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsStartProjectOpen(true)}
            >
              Start Project
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - improved mobile menu */}
          {isOpen && (
            <nav className="lg:hidden py-4 border-t border-border mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-lg transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="w-full mt-4 bg-primary text-primary-foreground"
                  onClick={() => {
                    setIsOpen(false)
                    setIsStartProjectOpen(true)
                  }}
                >
                  Start Project
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <StartProjectModal isOpen={isStartProjectOpen} onClose={() => setIsStartProjectOpen(false)} />
    </>
  )
}
