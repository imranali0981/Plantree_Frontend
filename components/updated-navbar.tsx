"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Problem", path: "/problem" },
  { name: "Solution", path: "/solution" },
  { name: "Objectives", path: "/objectives" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
]

export default function UpdatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-auto flex items-center">
            {/* If logo image is not available, use a text logo with leaf icon */}
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-xl font-bold text-green-600 dark:text-green-400">Plantree</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 relative group",
                pathname === item.path ? "text-green-600 dark:text-green-400" : "text-foreground/80",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300 group-hover:w-full",
                  pathname === item.path ? "w-full" : "",
                )}
              ></span>
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors hover:text-green-600 dark:hover:text-green-400",
                    pathname === item.path ? "text-green-600 dark:text-green-400" : "text-foreground/80",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-full"
              >
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  Dashboard
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
