"use client"

import type React from "react"
import { useState } from "react"
import { X, Send, MessageSquare, HelpCircle, Handshake, Users, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GetInTouchModalProps {
  isOpen: boolean
  onClose: () => void
}

const inquiryTypes = [
  { id: "General Inquiry", label: "General", icon: MessageSquare },
  { id: "Support Request", label: "Support", icon: HelpCircle },
  { id: "Partnership Inquiry", label: "Partnership", icon: Handshake },
  { id: "Career Inquiry", label: "Careers", icon: Users },
]

export function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
  const [formData, setFormData] = useState({
    inquiryType: "General Inquiry",
    name: "",
    email: "",
    subject: "",
    message: "",
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
          service: formData.inquiryType,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          formType: "get-in-touch",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
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
    setFormData({
      inquiryType: "General Inquiry",
      name: "",
      email: "",
      subject: "",
      message: "",
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

      <Card className="relative w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-card border-border shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
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
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
              Thank you for reaching out! We'll get back to you as soon as possible.
            </p>
            <Button onClick={handleClose} className="bg-primary text-primary-foreground">
              Close
            </Button>
          </CardContent>
        ) : (
          <>
            <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
              <CardTitle className="text-xl sm:text-2xl pr-8">Get in Touch</CardTitle>
              <p className="text-muted-foreground text-sm">Have a question? We'd love to hear from you.</p>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 pt-0">
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 mb-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">What can we help you with?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                        className={`p-2.5 sm:p-3 rounded-lg border transition-all flex items-center gap-2 text-xs sm:text-sm ${
                          formData.inquiryType === type.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-secondary/50 hover:border-primary/50"
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
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
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject *</label>
                  <Input
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-secondary border-border"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary border-border min-h-[100px] sm:min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message || isSubmitting}
                  className="w-full bg-primary text-primary-foreground"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
