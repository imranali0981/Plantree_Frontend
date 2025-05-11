"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    title: "Smart Tree Plantation Solutions",
    description:
      "AI-powered assessment and prediction for sustainable tree plantation and environmental impact across regions.",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    title: "Optimize Environmental Impact",
    description:
      "Our AI algorithms analyze regional data to maximize the positive impact of tree plantation initiatives.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "Community-Driven Reforestation",
    description: "Empowering communities with data-driven insights for successful tree plantation projects.",
    gradient: "from-teal-600 to-green-600",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br",
            slide.gradient,
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-0">
            {/* Circuit Board Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern
                  id="circuit-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(5)"
                >
                  <path d="M0 50h100M50 0v100M25 25h50v50h-50z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="25" cy="25" r="5" fill="currentColor" />
                  <circle cx="75" cy="25" r="5" fill="currentColor" />
                  <circle cx="25" cy="75" r="5" fill="currentColor" />
                  <circle cx="75" cy="75" r="5" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
              </svg>
            </div>

            {/* Tree Silhouettes */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden">
              <svg
                className="absolute bottom-0 w-full"
                viewBox="0 0 1200 300"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,300 L50,300 L50,200 L30,180 L50,160 L70,180 L50,200 L50,300 L100,300 L100,250 L80,230 L100,210 L120,230 L100,250 L100,300 L150,300 L150,220 L130,200 L150,180 L170,200 L150,220 L150,300 L200,300 L200,180 L180,160 L200,140 L220,160 L200,180 L200,300 L250,300 L250,230 L230,210 L250,190 L270,210 L250,230 L250,300 L300,300 L300,200 L280,180 L300,160 L320,180 L300,200 L300,300 L350,300 L350,250 L330,230 L350,210 L370,230 L350,250 L350,300 L400,300 L400,220 L380,200 L400,180 L420,200 L400,220 L400,300 L450,300 L450,180 L430,160 L450,140 L470,160 L450,180 L450,300 L500,300 L500,230 L480,210 L500,190 L520,210 L500,230 L500,300 L550,300 L550,200 L530,180 L550,160 L570,180 L550,200 L550,300 L600,300 L600,250 L580,230 L600,210 L620,230 L600,250 L600,300 L650,300 L650,220 L630,200 L650,180 L670,200 L650,220 L650,300 L700,300 L700,180 L680,160 L700,140 L720,160 L700,180 L700,300 L750,300 L750,230 L730,210 L750,190 L770,210 L750,230 L750,300 L800,300 L800,200 L780,180 L800,160 L820,180 L800,200 L800,300 L850,300 L850,250 L830,230 L850,210 L870,230 L850,250 L850,300 L900,300 L900,220 L880,200 L900,180 L920,200 L900,220 L900,300 L950,300 L950,180 L930,160 L950,140 L970,160 L950,180 L950,300 L1000,300 L1000,230 L980,210 L1000,190 L1020,210 L1000,230 L1000,300 L1050,300 L1050,200 L1030,180 L1050,160 L1070,180 L1050,200 L1050,300 L1100,300 L1100,250 L1080,230 L1100,210 L1120,230 L1100,250 L1100,300 L1150,300 L1150,220 L1130,200 L1150,180 L1170,200 L1150,220 L1150,300 L1200,300 L1200,300 L0,300 Z"
                  fill="rgba(0,0,0,0.2)"
                />
              </svg>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">{slide.title}</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white rounded-full h-12 w-12 transition-transform hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white rounded-full h-12 w-12 transition-transform hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <Button
          asChild
          size="lg"
          className="bg-white text-green-600 hover:bg-white/90 hover:text-green-700 rounded-full px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <Link href="/solution">
            Try Our Solution <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
