"use client"

import { useEffect, useRef } from "react"

export default function ContactMapIllustration() {
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

    // Draw contact map illustration
    const drawIllustration = () => {
      if (!ctx) return

      // Background
      ctx.fillStyle = "#f0f9ff" // Light blue
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(0, 128, 0, 0.1)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw simplified world map
      ctx.fillStyle = "#d1fae5" // Light green

      // North America
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.1, canvas.height * 0.3)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.5)
      ctx.closePath()
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.25, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.8)
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.7)
      ctx.closePath()
      ctx.fill()

      // Europe
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.45, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.45, canvas.height * 0.4)
      ctx.closePath()
      ctx.fill()

      // Africa
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.45, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.7)
      ctx.lineTo(canvas.width * 0.45, canvas.height * 0.7)
      ctx.closePath()
      ctx.fill()

      // Asia
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.55, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.55, canvas.height * 0.5)
      ctx.closePath()
      ctx.fill()

      // Australia
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.75, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.7)
      ctx.lineTo(canvas.width * 0.75, canvas.height * 0.7)
      ctx.closePath()
      ctx.fill()

      // Draw location markers
      const locations = [
        { x: canvas.width * 0.2, y: canvas.height * 0.35 }, // North America
        { x: canvas.width * 0.25, y: canvas.height * 0.65 }, // South America
        { x: canvas.width * 0.5, y: canvas.height * 0.3 }, // Europe
        { x: canvas.width * 0.5, y: canvas.height * 0.55 }, // Africa
        { x: canvas.width * 0.7, y: canvas.height * 0.35 }, // Asia
        { x: canvas.width * 0.8, y: canvas.height * 0.65 }, // Australia
      ]

      locations.forEach((loc, index) => {
        // Marker pin
        ctx.fillStyle = index === 0 ? "#16a34a" : "#64748b" // Green for HQ, gray for others

        // Pin head
        ctx.beginPath()
        ctx.arc(loc.x, loc.y, 6, 0, Math.PI * 2)
        ctx.fill()

        // Pin point
        ctx.beginPath()
        ctx.moveTo(loc.x - 6, loc.y)
        ctx.lineTo(loc.x, loc.y + 12)
        ctx.lineTo(loc.x + 6, loc.y)
        ctx.closePath()
        ctx.fill()

        // Pulse animation for HQ
        if (index === 0) {
          const pulseSize = (Math.sin(Date.now() / 500) + 1) * 5 + 10
          ctx.beginPath()
          ctx.arc(loc.x, loc.y, pulseSize, 0, Math.PI * 2)
          ctx.strokeStyle = "#16a34a"
          ctx.lineWidth = 2
          ctx.stroke()
        }
      })

      // Draw connections between locations
      ctx.strokeStyle = "#16a34a" // Green
      ctx.lineWidth = 1

      for (let i = 1; i < locations.length; i++) {
        ctx.beginPath()
        ctx.moveTo(locations[0].x, locations[0].y)
        ctx.lineTo(locations[i].x, locations[i].y)
        ctx.stroke()
      }

      // Draw HQ label
      ctx.fillStyle = "#16a34a"
      ctx.font = "bold 14px Arial"
      ctx.fillText("HQ", locations[0].x + 10, locations[0].y - 10)
    }

    // Animation loop
    const animate = () => {
      drawIllustration()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
}
