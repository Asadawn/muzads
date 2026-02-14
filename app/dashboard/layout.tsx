"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Megaphone, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  Bell, 
  User,
  Plus,
  Users,          // For Audience
  Library,        // For Creative Library
  MapPin,         // For Placements
  CreditCard,     // For Billing & Payments
  HelpCircle,     // For Help & Support
  ChevronLeft,    // For the collapse button at the bottom
  PlusCircle,
  Zap,
  FileText,
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/AuthContext"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// const sidebarItems = [
//   { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
//   { icon: Megaphone, label: "Campaigns", href: "/dashboard/campaigns" },
//   { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
//   { icon: Settings, label: "Settings", href: "/dashboard/settings" },
// ]


const sidebarItems = [
  // Top Section
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Megaphone, label: "Campaigns", href: "/dashboard/campaigns" },
  
  // Action Button Style (Matches the blue "Create" button in image)
  { icon: PlusCircle, label: "Create Campaign", href: "/dashboard/create", variant: "primary" },
  
  // Asset Management
  { icon: Users, label: "Audience", href: "/dashboard/audience" },
  { icon: Library, label: "Creative Library", href: "/dashboard/creative" },
  { icon: Building2, label: "Add Business", href: "/dashboard/add-business" },
  
  { type: "separator" }, // For the visual line divider

  // Data & Placements
  { icon: BarChart3, label: "Analytics / Insights", href: "/dashboard/analytics" },
  { icon: MapPin, label: "Placements", href: "/dashboard/placements" },
  { icon: Zap, label: "Automation", href: "/dashboard/automation" },

  { type: "separator" },

  // Admin & Support
  { icon: CreditCard, label: "Billing & Payments", href: "/dashboard/billing" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  
  { type: "separator" },
  
  { icon: HelpCircle, label: "Help & Support", href: "/dashboard/support" },
  // { icon: FileText, label: "Documentation", href: "/dashboard/docs" },
];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <ProtectedRoute>
      <div className="h-screen bg-background flex overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside 
          className={`
            fixed top-0 left-0 z-50 h-screen w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out
            md:translate-x-0 md:static md:block
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-border">
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <Image 
                    src="/muzadslogo.png" 
                    alt="Muzads Logo" 
                    width={32} 
                    height={32} 
                    className="object-contain bg-white rounded-full p-0 transition-all duration-300"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">Muzads</span>
              </Link>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
              {sidebarItems.map((item, index) => {
                if (item.type === "separator") {
                  return <div key={index} className="my-2 border-t border-border" />
                }
                
                if (!item.href || !item.icon) return null

                const isActive = pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* User Profile / Logout */}
            {/* <div className="p-4 border-t border-border space-y-4">
              {user && (
                <div className="flex items-center gap-3 px-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
                    {user.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-medium truncate text-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.is_verified ? 'Verified' : 'Not verified'}
                    </p>
                  </div>
                </div>
              )}
              <Button 
                variant="outline" 
                className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 border-border"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div> */}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-screen transition-all duration-300">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30 px-4 md:px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-muted-foreground"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
              
              {/* Search */}
              <div className="hidden md:flex items-center relative w-64 md:w-80">
                <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
                <Input 
                  placeholder="Search campaigns..." 
                  className="pl-9 h-9 bg-background/50 border-border focus:bg-background transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary" asChild>
                <Link href="/dashboard/create">
                  <Plus className="w-4 h-4" />
                  New Campaign
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500 border-2 border-card" />
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-foreground">{user?.email}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.is_verified ? 'Verified Account' : 'Unverified Account'}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="cursor-pointer w-full flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/billing" className="cursor-pointer w-full flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing & Plans</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto custom-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
