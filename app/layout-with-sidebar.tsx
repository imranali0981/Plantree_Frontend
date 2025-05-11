"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { PlantreeSidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  // In a client component, we can't use the cookies() function directly
  // So we'll use a default value and let the sidebar handle persistence
  const defaultOpen = true

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider defaultOpen={defaultOpen}>
        <div className="flex min-h-screen">
          <PlantreeSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
