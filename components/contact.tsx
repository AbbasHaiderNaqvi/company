"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { StartProjectModal } from "@/components/start-project-modal"
import { companyInfo } from "@/data/site-data"

function UAEFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <path fill="#00732f" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000" d="M0 320h640v160H0z" />
      <path fill="red" d="M0 0h220v480H0z" />
    </svg>
  )
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 302 80 480H0v-60l239-178L0 64V0h75z" />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
      />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </svg>
  )
}

function PakistanFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <defs>
        <clipPath id="pk-a">
          <path fillOpacity=".7" d="M-52.3 0h682.6v512H-52.3z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#pk-a)" transform="translate(49) scale(.9375)">
        <path fill="#0c590b" d="M-95 0h768v512H-95z" />
        <path fill="#fff" d="M-95 0H97.5v512H-95z" />
        <g fill="#fff">
          <path d="m403.7 225.4-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z" />
          <path d="M415.4 306a121.2 121.2 0 0 1-161.3 59.4 122.1 122.1 0 0 1-59.5-162.1A118.6 118.6 0 0 1 266 139a156.2 156.2 0 0 0-11.8 10.9A112.3 112.3 0 0 0 415.5 306z" />
        </g>
      </g>
    </svg>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-primary font-mono text-xs sm:text-sm">GET IN TOUCH</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 text-balance">
                  Ready to Start Your <span className="text-primary">Project?</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mt-3 sm:mt-4 leading-relaxed">
                  Let's discuss how we can help bring your vision to life. Fill out the form and we'll get back to you
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <a href={`mailto:${companyInfo.email}`} className="font-medium hover:text-primary transition-colors">
                    {companyInfo.email}
                  </a>
                </div>

                {/* Locations with Flags - Simple inline display */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-muted-foreground">We're in:</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/50 rounded-full">
                    <UAEFlag className="w-4 h-3 rounded-sm" />
                    <span className="text-sm font-medium">Dubai</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/50 rounded-full">
                    <UKFlag className="w-4 h-3 rounded-sm" />
                    <span className="text-sm font-medium">UK</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/50 rounded-full">
                    <PakistanFlag className="w-4 h-3 rounded-sm" />
                    <span className="text-sm font-medium">Pakistan</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 group"
                onClick={() => setIsStartProjectOpen(true)}
              >
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-6 sm:py-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Send className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ name: "", email: "", company: "", message: "" })
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-secondary border-border"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-secondary border-border"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-secondary border-border min-h-[120px] sm:min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isStartProjectOpen} onClose={() => setIsStartProjectOpen(false)} />
    </>
  )
}
