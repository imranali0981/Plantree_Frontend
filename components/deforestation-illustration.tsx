"use client"

import { useEffect, useRef } from "react"

export default function DeforestationIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw deforestation illustration
    const drawIllustration = () => {
      if (!ctx) return

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#f87171") // Red-ish
      gradient.addColorStop(1, "#fbbf24") // Amber-ish
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw tree stumps
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height * 0.8 + canvas.height * 0.2
        const radius = Math.random() * 15 + 5

        // Stump
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = "#92400e" // Brown
        ctx.fill()

        // Rings
        ctx.beginPath()
        ctx.arc(x, y, radius * 0.7, 0, Math.PI * 2)
        ctx.strokeStyle = "#78350f" // Darker brown
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(x, y, radius * 0.4, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw smoke
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height * 0.5

        const smokeGradient = ctx.createRadialGradient(x, y, 0, x, y, 50)
        smokeGradient.addColorStop(0, "rgba(100, 100, 100, 0.8)")
        smokeGradient.addColorStop(1, "rgba(100, 100, 100, 0)")

        ctx.beginPath()
        ctx.arc(x, y, 50, 0, Math.PI * 2)
        ctx.fillStyle = smokeGradient
        ctx.fill()
      }

      // Draw circuit board pattern overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw nodes at intersections
      for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
          if (Math.random() > 0.7) {
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
            ctx.fill()
          }
        }
      }
    }

    drawIllustration()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
}
