"use client"

import { useEffect, useRef } from "react"

export default function PlantationMap() {
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

    // Define plantation locations
    const plantations = [
      { lat: 40, lng: -100, size: 20, name: "North American Project", trees: 50000 },
      { lat: -10, lng: -60, size: 25, name: "Amazon Reforestation", trees: 75000 },
      { lat: 50, lng: 10, size: 15, name: "European Initiative", trees: 30000 },
      { lat: 0, lng: 20, size: 30, name: "African Savanna Project", trees: 100000 },
      { lat: 30, lng: 80, size: 22, name: "Himalayan Heights", trees: 45000 },
      { lat: -25, lng: 135, size: 18, name: "Australian Outback", trees: 35000 },
    ]

    // Convert lat/lng to canvas coordinates
    const latLngToCanvas = (lat: number, lng: number) => {
      const x = ((lng + 180) / 360) * canvas.width
      const y = ((90 - lat) / 180) * canvas.height
      return { x, y }
    }

    // Draw map
    const drawMap = () => {
      if (!ctx) return

      // Background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#e0f2fe") // Light blue
      gradient.addColorStop(1, "#bae6fd") // Slightly darker blue
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(0, 128, 0, 0.1)"
      ctx.lineWidth = 1

      // Horizontal grid lines (latitudes)
      for (let lat = -90; lat <= 90; lat += 15) {
        const { y } = latLngToCanvas(lat, 0)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines (longitudes)
      for (let lng = -180; lng <= 180; lng += 15) {
        const { x } = latLngToCanvas(0, lng)
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw simplified continents
      ctx.fillStyle = "#d1fae5" // Light green

      // North America
      ctx.beginPath()
      ctx.moveTo(...Object.values(latLngToCanvas(60, -140)))
      ctx.lineTo(...Object.values(latLngToCanvas(60, -50)))
      ctx.lineTo(...Object.values(latLngToCanvas(15, -80)))
      ctx.lineTo(...Object.values(latLngToCanvas(15, -120)))
      ctx.closePath()
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.moveTo(...Object.values(latLngToCanvas(15, -80)))
      ctx.lineTo(...Object.values(latLngToCanvas(15, -35)))
      ctx.lineTo(...Object.values(latLngToCanvas(-55, -70)))
      ctx.lineTo(...Object.values(latLngToCanvas(-55, -80)))
      ctx.closePath()
      ctx.fill()

      // Europe & Africa
      ctx.beginPath()
      ctx.moveTo(...Object.values(latLngToCanvas(60, -10)))
      ctx.lineTo(...Object.values(latLngToCanvas(60, 40)))
      ctx.lineTo(...Object.values(latLngToCanvas(35, 40)))
      ctx.lineTo(...Object.values(latLngToCanvas(35, 30)))
      ctx.lineTo(...Object.values(latLngToCanvas(-35, 30)))
      ctx.lineTo(...Object.values(latLngToCanvas(-35, -10)))
      ctx.closePath()
      ctx.fill()

      // Asia
      ctx.beginPath()
      ctx.moveTo(...Object.values(latLngToCanvas(60, 40)))
      ctx.lineTo(...Object.values(latLngToCanvas(60, 180)))
      ctx.lineTo(...Object.values(latLngToCanvas(0, 180)))
      ctx.lineTo(...Object.values(latLngToCanvas(0, 100)))
      ctx.lineTo(...Object.values(latLngToCanvas(35, 40)))
      ctx.closePath()
      ctx.fill()

      // Australia
      ctx.beginPath()
      ctx.moveTo(...Object.values(latLngToCanvas(-10, 110)))
      ctx.lineTo(...Object.values(latLngToCanvas(-10, 155)))
      ctx.lineTo(...Object.values(latLngToCanvas(-40, 155)))
      ctx.lineTo(...Object.values(latLngToCanvas(-40, 110)))
      ctx.closePath()
      ctx.fill()

      // Draw plantation locations
      plantations.forEach((plantation) => {
        const { x, y } = latLngToCanvas(plantation.lat, plantation.lng)

        // Pulse effect
        const time = Date.now() / 1000
        const pulseSize = plantation.size * (1 + 0.2 * Math.sin(time * 2))

        // Outer circle
        ctx.beginPath()
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(22, 163, 74, 0.3)" // Green with transparency
        ctx.fill()

        // Inner circle
        ctx.beginPath()
        ctx.arc(x, y, plantation.size * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(22, 163, 74, 0.7)" // More opaque green
        ctx.fill()

        // Center dot
        ctx.beginPath()
        ctx.arc(x, y, plantation.size * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = "#16a34a" // Solid green
        ctx.fill()
      })

      // Draw connections between plantations
      ctx.strokeStyle = "rgba(22, 163, 74, 0.5)" // Semi-transparent green
      ctx.lineWidth = 2

      for (let i = 0; i < plantations.length - 1; i++) {
        const start = latLngToCanvas(plantations[i].lat, plantations[i].lng)
        const end = latLngToCanvas(plantations[i + 1].lat, plantations[i + 1].lng)

        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      }

      // Draw tech circuit overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 0.5

      // Draw random circuit paths
      for (let i = 0; i < 20; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height

        ctx.beginPath()
        ctx.moveTo(startX, startY)

        let x = startX
        let y = startY

        // Create a path with multiple segments
        for (let j = 0; j < 5; j++) {
          // Decide whether to move horizontally or vertically
          if (Math.random() > 0.5) {
            x += (Math.random() - 0.5) * 200
          } else {
            y += (Math.random() - 0.5) * 200
          }

          ctx.lineTo(x, y)
        }

        ctx.stroke()
      }

      // Draw circuit nodes
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.fill()
      }
    }

    // Animation loop
    const animate = () => {
      drawMap()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
}
