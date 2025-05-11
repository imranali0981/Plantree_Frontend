"use client"

import { useEffect, useRef } from "react"

export default function DashboardIllustration() {
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

    // Draw dashboard illustration
    const drawIllustration = () => {
      if (!ctx) return

      // Background
      ctx.fillStyle = "#0f172a" // Dark blue
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw dashboard header
      ctx.fillStyle = "#1e293b" // Darker blue
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.1)

      // Logo
      ctx.fillStyle = "#16a34a" // Green
      ctx.fillRect(20, canvas.height * 0.03, 30, 15)

      // Navigation items
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.fillRect(100 + i * 100, canvas.height * 0.04, 60, 10)
      }

      // User avatar
      ctx.beginPath()
      ctx.arc(canvas.width - 30, canvas.height * 0.05, 15, 0, Math.PI * 2)
      ctx.fillStyle = "#64748b" // Gray
      ctx.fill()

      // Draw sidebar
      ctx.fillStyle = "#1e293b" // Darker blue
      ctx.fillRect(0, canvas.height * 0.1, canvas.width * 0.2, canvas.height * 0.9)

      // Sidebar menu items
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = i === 0 ? "#16a34a" : "rgba(255, 255, 255, 0.5)" // First item active
        ctx.fillRect(20, canvas.height * (0.15 + i * 0.06), canvas.width * 0.15, 10)
      }

      // Draw main content area
      // Top cards
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = "#334155" // Slate
        ctx.fillRect(
          canvas.width * 0.22 + i * (canvas.width * 0.19),
          canvas.height * 0.15,
          canvas.width * 0.17,
          canvas.height * 0.15,
        )

        // Card title
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.fillRect(canvas.width * 0.23 + i * (canvas.width * 0.19), canvas.height * 0.17, canvas.width * 0.1, 8)

        // Card value
        ctx.fillStyle = "#16a34a" // Green
        ctx.fillRect(canvas.width * 0.23 + i * (canvas.width * 0.19), canvas.height * 0.21, canvas.width * 0.08, 15)
      }

      // Draw charts
      // Line chart
      ctx.fillStyle = "#334155" // Slate
      ctx.fillRect(canvas.width * 0.22, canvas.height * 0.35, canvas.width * 0.48, canvas.height * 0.3)

      // Chart title
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.fillRect(canvas.width * 0.23, canvas.height * 0.37, canvas.width * 0.2, 10)

      // Chart lines
      ctx.strokeStyle = "#16a34a" // Green
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.23, canvas.height * 0.55)

      // Generate random line chart
      for (let i = 1; i <= 10; i++) {
        const x = canvas.width * (0.23 + i * 0.04)
        const y = canvas.height * (0.55 - Math.random() * 0.15)
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Bar chart
      ctx.fillStyle = "#334155" // Slate
      ctx.fillRect(canvas.width * 0.72, canvas.height * 0.35, canvas.width * 0.25, canvas.height * 0.3)

      // Chart title
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.fillRect(canvas.width * 0.73, canvas.height * 0.37, canvas.width * 0.15, 10)

      // Bars
      for (let i = 0; i < 5; i++) {
        const height = Math.random() * 0.15 + 0.05
        ctx.fillStyle = "#16a34a" // Green
        ctx.fillRect(
          canvas.width * (0.74 + i * 0.04),
          canvas.height * (0.6 - height),
          canvas.width * 0.03,
          canvas.height * height,
        )
      }

      // Table
      ctx.fillStyle = "#334155" // Slate
      ctx.fillRect(canvas.width * 0.22, canvas.height * 0.7, canvas.width * 0.75, canvas.height * 0.25)

      // Table header
      ctx.fillStyle = "#1e293b" // Darker blue
      ctx.fillRect(canvas.width * 0.22, canvas.height * 0.7, canvas.width * 0.75, canvas.height * 0.05)

      // Table columns
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.fillRect(canvas.width * (0.23 + i * 0.18), canvas.height * 0.72, canvas.width * 0.15, 8)
      }

      // Table rows
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
          ctx.fillRect(canvas.width * (0.23 + j * 0.18), canvas.height * (0.77 + i * 0.045), canvas.width * 0.15, 8)
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
