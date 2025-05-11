"use client"

import { useEffect, useRef } from "react"

export default function AIAnalysisIllustration() {
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

    // Draw AI analysis illustration
    const drawIllustration = () => {
      if (!ctx) return

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#10b981") // Green
      gradient.addColorStop(1, "#0ea5e9") // Blue
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw data points
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 3 + 1

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.fill()
      }

      // Draw connections between points
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < 30; i++) {
        const x1 = Math.random() * canvas.width
        const y1 = Math.random() * canvas.height
        const x2 = Math.random() * canvas.width
        const y2 = Math.random() * canvas.height

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Draw tree silhouettes
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width
        const y = canvas.height - Math.random() * 100
        const height = Math.random() * 100 + 50

        // Tree trunk
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        ctx.fillRect(x - 5, y, 10, -height * 0.3)

        // Tree crown
        ctx.beginPath()
        ctx.moveTo(x, y - height * 0.3)
        ctx.lineTo(x - 30, y - height * 0.3)
        ctx.lineTo(x, y - height)
        ctx.lineTo(x + 30, y - height * 0.3)
        ctx.closePath()
        ctx.fill()
      }

      // Draw scanning effect
      const scanY = ((Date.now() % 3000) / 3000) * canvas.height

      const scanGradient = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10)
      scanGradient.addColorStop(0, "rgba(255, 255, 255, 0)")
      scanGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)")
      scanGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = scanGradient
      ctx.fillRect(0, scanY - 10, canvas.width, 20)
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
