"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedBackground() {
  // const canvasRef = useRef<HTMLCanvasElement>(null)
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const checkMobile = () => setIsMobile(window.innerWidth < 768)
  //   checkMobile()
  //   window.addEventListener("resize", checkMobile)

  //   const canvas = canvasRef.current
  //   if (!canvas) return

  //   const ctx = canvas.getContext("2d")
  //   if (!ctx) return

  //   let animationFrameId: number
  //   let particles: Particle[] = []

  //   const resizeCanvas = () => {
  //     canvas.width = window.innerWidth
  //     canvas.height = window.innerHeight
  //   }

  //   class Particle {
  //     x: number
  //     y: number
  //     size: number
  //     speedX: number
  //     speedY: number
  //     opacity: number
  //     color: string

  //     constructor(canvasWidth: number, canvasHeight: number) {
  //       this.x = Math.random() * canvasWidth
  //       this.y = Math.random() * canvasHeight
  //       this.size = Math.random() * 3 + 1
  //       this.speedX = (Math.random() - 0.5) * 0.5
  //       this.speedY = (Math.random() - 0.5) * 0.5
  //       this.opacity = Math.random() * 0.5 + 0.1
  //       this.color = Math.random() > 0.5 ? "#7c3aed" : "#a78bfa"
  //     }

  //     update(canvasWidth: number, canvasHeight: number) {
  //       this.x += this.speedX
  //       this.y += this.speedY

  //       if (this.x > canvasWidth) this.x = 0
  //       if (this.x < 0) this.x = canvasWidth
  //       if (this.y > canvasHeight) this.y = 0
  //       if (this.y < 0) this.y = canvasHeight
  //     }

  //     draw(ctx: CanvasRenderingContext2D) {
  //       ctx.beginPath()
  //       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
  //       ctx.fillStyle = this.color
  //       ctx.globalAlpha = this.opacity
  //       ctx.fill()
  //       ctx.globalAlpha = 1
  //     }
  //   }

  //   const initParticles = () => {
  //     particles = []
  //     const mobileDivisor = window.innerWidth < 768 ? 25000 : 15000
  //     const particleCount = Math.floor((canvas.width * canvas.height) / mobileDivisor)
  //     for (let i = 0; i < Math.min(particleCount, 80); i++) {
  //       particles.push(new Particle(canvas.width, canvas.height))
  //     }
  //   }

  //   const connectParticles = () => {
  //     const connectionDistance = window.innerWidth < 768 ? 100 : 150
  //     for (let i = 0; i < particles.length; i++) {
  //       for (let j = i + 1; j < particles.length; j++) {
  //         const dx = particles[i].x - particles[j].x
  //         const dy = particles[i].y - particles[j].y
  //         const distance = Math.sqrt(dx * dx + dy * dy)

  //         if (distance < connectionDistance) {
  //           ctx.beginPath()
  //           ctx.strokeStyle = "#7c3aed"
  //           ctx.globalAlpha = 0.1 * (1 - distance / connectionDistance)
  //           ctx.lineWidth = 0.5
  //           ctx.moveTo(particles[i].x, particles[i].y)
  //           ctx.lineTo(particles[j].x, particles[j].y)
  //           ctx.stroke()
  //           ctx.globalAlpha = 1
  //         }
  //       }
  //     }
  //   }

  //   const animate = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height)

  //     particles.forEach((particle) => {
  //       particle.update(canvas.width, canvas.height)
  //       particle.draw(ctx)
  //     })

  //     connectParticles()
  //     animationFrameId = requestAnimationFrame(animate)
  //   }

  //   resizeCanvas()
  //   initParticles()
  //   animate()

  //   const handleResize = () => {
  //     resizeCanvas()
  //     initParticles()
  //   }

  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     cancelAnimationFrame(animationFrameId)
  //     window.removeEventListener("resize", handleResize)
  //     window.removeEventListener("resize", checkMobile)
  //   }
  // }, [])

  return (

    <></>
    // <canvas
    //   ref={canvasRef}
    //   className="fixed inset-0 pointer-events-none z-0"
    //   style={{ opacity: isMobile ? 0.4 : 0.6 }}
    //   aria-hidden="true"
    // />
  )
}
