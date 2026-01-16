"use client"

import type React from "react"
import { useState } from "react"
import { X, Send, Briefcase, Palette, Code, Globe, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StartProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

const projectTypes = [
  { id: "Website Design", label: "Website Design", icon: Globe },
  { id: "Web Application", label: "Web Application", icon: Code },
  { id: "Brand Identity", label: "Brand Identity", icon: Palette },
  { id: "Other", label: "Other", icon: Briefcase },
]

const budgetRanges = ["$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]

export function StartProjectModal({ isOpen, onClose }: StartProjectModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.projectType,
          budget: formData.budget,
          message: `Project Type: ${formData.projectType}\nTimeline: ${formData.timeline}\n\n${formData.description}`,
          formType: "project",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send request")
      }

      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      projectType: "",
      name: "",
      email: "",
      company: "",
      budget: "",
      timeline: "",
      description: "",
    })
    setSubmitStatus("idle")
    setErrorMessage("")
  }

  const handleClose = () => {
    onClose()
    setTimeout(resetForm, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />

      <Card className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-card border-border shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-secondary transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitStatus === "success" ? (
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Project Request Sent!</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
              Thank you for your interest! We'll review your project details and get back to you within 24 hours.
            </p>
            <Button onClick={handleClose} className="bg-primary text-primary-foreground">
              Close
            </Button>
          </CardContent>
        ) : (
          <>
            <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
              <CardTitle className="text-xl sm:text-2xl pr-8">Start Your Project</CardTitle>
              <p className="text-muted-foreground text-sm">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              <div className="flex gap-2 mt-3 sm:mt-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-secondary"}`}
                  />
                ))}
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 pt-0">
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 mb-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Project Type */}
                {step === 1 && (
                  <div className="space-y-3 sm:space-y-4">
                    <label className="text-sm font-medium">What type of project do you need?</label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, projectType: type.id })
                            setStep(2)
                          }}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left hover:border-primary ${
                            formData.projectType === type.id
                              ? "border-primary bg-primary/10"
                              : "border-border bg-secondary/50"
                          }`}
                        >
                          <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                          <span className="font-medium block text-sm sm:text-base">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {step === 2 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Your Name *</label>
                        <Input
                          placeholder="John Doe"
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
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-secondary border-border"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!formData.name || !formData.email}
                        className="flex-1 bg-primary text-primary-foreground"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Details */}
                {step === 3 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Budget Range</label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`p-2.5 sm:p-3 rounded-lg border transition-all text-xs sm:text-sm ${
                              formData.budget === range
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-secondary/50 hover:border-primary/50"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expected Timeline</label>
                      <Input
                        placeholder="e.g., 2-3 months"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Description *</label>
                      <Textarea
                        placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="bg-secondary border-border min-h-[100px] sm:min-h-[120px]"
                        required
                      />
                    </div>
                    <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                      <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={!formData.description || isSubmitting}
                        className="flex-1 bg-primary text-primary-foreground"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Submit
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
