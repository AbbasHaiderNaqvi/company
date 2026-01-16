import { type NextRequest, NextResponse } from "next/server"

// =========================================================================
// CONTACT FORM API - Sends form data to email
// =========================================================================
// To configure email sending:
// 1. Add your SMTP settings to environment variables
// 2. Or use a service like Resend, SendGrid, or Mailgun
// =========================================================================

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  message: string
  formType: "contact" | "project" | "get-in-touch"
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Build email content
    const emailSubject = getEmailSubject(body.formType, body.name)
    const emailBody = buildEmailBody(body)
    const resend="re_3DNwSWLS_33fqc2knvwnq972qsr4zdFzz"
    // If RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resend}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "noreply@techneedllc.com",
          to: process.env.EMAIL_TO || "info@techneedllc.com",
          subject: emailSubject,
          html: emailBody,
          reply_to: body.email,
        }),
      })

      if (!resendResponse.ok) {
        const error = await resendResponse.text()
        console.error("Resend API error:", error)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      })
    }

    // If no email service configured, log the submission and return success
    // In production, you should configure an email service
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log("Subject:", emailSubject)
    console.log("From:", body.name, `<${body.email}>`)
    console.log("Company:", body.company || "Not provided")
    console.log("Service:", body.service || "Not specified")
    console.log("Budget:", body.budget || "Not specified")
    console.log("Message:", body.message)
    console.log("===================================")

    return NextResponse.json({
      success: true,
      message: "Your message has been received! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

function getEmailSubject(formType: string, name: string): string {
  switch (formType) {
    case "project":
      return `🚀 New Project Request from ${name}`
    case "get-in-touch":
      return `📬 New Inquiry from ${name}`
    default:
      return `📩 New Contact Form Submission from ${name}`
  }
}

function buildEmailBody(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #7c3aed, #5b21b6); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #7c3aed; text-transform: uppercase; font-size: 12px; margin-bottom: 5px; }
        .value { font-size: 16px; }
        .message { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">New ${data.formType === "project" ? "Project Request" : "Message"}</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">from Techneed Website</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          ${
            data.company
              ? `
          <div class="field">
            <div class="label">Company</div>
            <div class="value">${data.company}</div>
          </div>
          `
              : ""
          }
          ${
            data.service
              ? `
          <div class="field">
            <div class="label">Service Interested In</div>
            <div class="value">${data.service}</div>
          </div>
          `
              : ""
          }
          ${
            data.budget
              ? `
          <div class="field">
            <div class="label">Budget Range</div>
            <div class="value">${data.budget}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Message</div>
            <div class="message">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        <div class="footer">
          This email was sent from the Techneed website contact form.
        </div>
      </div>
    </body>
    </html>
  `
}
