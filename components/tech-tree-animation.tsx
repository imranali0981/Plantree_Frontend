"use client"

import { useEffect, useRef } from "react"

export default function TechTreeAnimation() {
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

    // Node class
    class Node {
      x: number
      y: number
      radius: number
      color: string
      connections: Node[]
      vx: number
      vy: number

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.connections = []
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
      }

      draw() {
        if (!ctx) return

        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Draw connections
        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
          ctx.lineWidth = 1
          ctx.stroke()
        })
      }

      update() {
        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < this.radius || this.x > canvas.width - this.radius) {
          this.vx *= -1
        }
        if (this.y < this.radius || this.y > canvas.height - this.radius) {
          this.vy *= -1
        }
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = Math.floor(canvas.width / 100) // Adjust node density

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 2 + 2
      const color = "rgba(255, 255, 255, 0.7)"
      nodes.push(new Node(x, y, radius, color))
    }

    // Connect nodes
    nodes.forEach((node) => {
      const connectionsCount = Math.floor(Math.random() * 3) + 1
      for (let i = 0; i < connectionsCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        if (randomNode !== node && !node.connections.includes(randomNode)) {
          node.connections.push(randomNode)
        }
      }
    })

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw tree-like structure
      const centerX = canvas.width / 2
      const centerY = canvas.height
      drawTree(centerX, centerY, -Math.PI / 2, 100, 5)

      // Draw and update nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      requestAnimationFrame(animate)
    }

    // Function to draw tree
    function drawTree(x: number, y: number, angle: number, length: number, depth: number) {
      if (!ctx) return
      if (depth === 0) return

      const endX = x + Math.cos(angle) * length
      const endY = y + Math.sin(angle) * length

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + depth * 0.1})`
      ctx.lineWidth = depth
      ctx.stroke()

      // Draw branches
      const branchCount = 2
      const branchAngle = Math.PI / 4
      for (let i = 0; i < branchCount; i++) {
        const newAngle = angle - branchAngle / 2 + (i * branchAngle) / (branchCount - 1)
        drawTree(endX, endY, newAngle, length * 0.7, depth - 1)
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
