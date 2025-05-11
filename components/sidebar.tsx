"use client"
import { Leaf, BarChart3, Home, Users, FileQuestion, Lightbulb, MessageSquare, Menu } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Problem", href: "/problem", icon: FileQuestion },
  { name: "Solution", href: "/solution", icon: Lightbulb },
  { name: "Objectives", href: "/objectives", icon: BarChart3 },
  { name: "Team", href: "/team", icon: Users },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Contact", href: "/contact", icon: MessageSquare },
]

export function PlantreeSidebar() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar()
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setOpenMobile(true)}
          className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-green-600 text-white shadow-md"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader className="flex items-center justify-center p-4">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold">Plantree</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                  <Link href={item.href} className="flex items-center">
                    <item.icon className="mr-2 h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="text-xs text-muted-foreground">© 2025 Plantree. All rights reserved.</div>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
