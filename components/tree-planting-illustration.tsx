"use client"

import { useEffect, useRef } from "react"

export default function TreePlantingIllustration() {
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

    // Draw tree planting illustration
    const drawIllustration = () => {
      if (!ctx) return

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#a3e635") // Light green
      gradient.addColorStop(1, "#15803d") // Dark green
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw ground
      ctx.fillStyle = "#854d0e" // Brown
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.7)
      ctx.lineTo(canvas.width, canvas.height * 0.7)
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      // Draw trees at different growth stages
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width
        const y = canvas.height * 0.7
        const height = Math.random() * 100 + 20
        const growthStage = Math.random()

        // Tree trunk
        ctx.fillStyle = "#92400e" // Brown
        ctx.fillRect(x - 3, y, 6, -height * 0.3)

        if (growthStage > 0.3) {
          // Tree crown for mature trees
          ctx.fillStyle = "#16a34a" // Green
          ctx.beginPath()
          ctx.arc(x, y - height * 0.4, height * 0.2, 0, Math.PI * 2)
          ctx.fill()
        }

        if (growthStage > 0.6) {
          // Additional foliage for more mature trees
          ctx.fillStyle = "#15803d" // Darker green
          ctx.beginPath()
          ctx.arc(x - 10, y - height * 0.5, height * 0.15, 0, Math.PI * 2)
          ctx.fill()

          ctx.beginPath()
          ctx.arc(x + 10, y - height * 0.5, height * 0.15, 0, Math.PI * 2)
          ctx.fill()

          ctx.beginPath()
          ctx.arc(x, y - height * 0.6, height * 0.15, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Draw planting holes
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width
        const y = canvas.height * 0.7

        ctx.fillStyle = "#422006" // Dark brown
        ctx.beginPath()
        ctx.ellipse(x, y + 5, 15, 8, 0, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw saplings
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * canvas.width
        const y = canvas.height * 0.7

        // Sapling stem
        ctx.strokeStyle = "#4d7c0f" // Green
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x, y - 20)
        ctx.stroke()

        // Sapling leaves
        ctx.fillStyle = "#84cc16" // Light green
        ctx.beginPath()
        ctx.ellipse(x - 5, y - 15, 5, 3, Math.PI / 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.ellipse(x + 5, y - 15, 5, 3, -Math.PI / 4, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw tech overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      // Grid lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Data points
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.fill()
      }
    }

    drawIllustration()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
}
