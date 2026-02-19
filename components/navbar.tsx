"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  Facebook,
  Instagram,
  Video,
  Mail,
  User,
  Sparkles,
  FileText,
  Search,
  Link2,
  PenTool,
} from "lucide-react"


const useCases = [
  {
    label: "Facebook Ads Compaign",
    href: "/use-cases/facebook-ads",
    icon: Facebook,
  },
  {
    label: "Instagram Ads Compaign",
    href: "/use-cases/instagram-ads",
    icon: Instagram,
  },
  {
    label: "TikTok Ads Compaign",
    href: "/use-cases/tiktok",
    icon: Video,
  },
  {
    label: "Ad Generator",
    href: "/use-cases/ads",
    icon: Sparkles,
  },
  {
    label: "Audit Report",
    href: "/use-cases/audit-report",
    icon: FileText,
  },
  {
    label: "Keywords Search",
    href: "/use-cases/keywords-search",
    icon: Search,
  },
  {
    label: "Back Link",
    href: "/use-cases/back-link",
    icon: Link2,
  },
  {
    label: "Blog Writing",
    href: "/use-cases/blog-writing",
    icon: PenTool,
  },
]
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image 
                src="/muzadslogo.png" 
                alt="Muzads Logo" 
                width={40} 
                height={40} 
                priority
                className="object-contain bg-white rounded-full p-0 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Muzads
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5">

            {/* Use cases dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 px-4 py-2 rounded-full transition-all font-medium">
                Use cases
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div
                className="absolute top-full left-0 mt-2 w-80 p-2 rounded-2xl bg-background backdrop-blur-xl border border-border/50 shadow-2xl shadow-blue-500/10
               opacity-0 invisible translate-y-2
               group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
               transition-all duration-300 ease-out z-50"
              >
                <div className="grid gap-1">
                  {useCases.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl
                       hover:bg-secondary/50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-gradient-brand group-hover/item:shadow-lg group-hover/item:shadow-purple-500/25 transition-all duration-300">
                          <Icon className="w-4 h-4 text-primary group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Other links */}
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 px-4 py-2 rounded-full transition-all font-medium"
            >
              About us
            </Link>

            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 px-4 py-2 rounded-full transition-all font-medium"
            >
              Pricing
            </Link>

            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 px-4 py-2 rounded-full transition-all font-medium"
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 px-4 py-2 rounded-full transition-all font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="btn-gradient rounded-full px-6 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all"
              asChild
            >
              <Link href="/register">Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-full hover:bg-secondary transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-background/95 backdrop-blur-lg border-t border-border/50 px-6 py-4 space-y-1">
          <div className="px-4 py-2 text-xs uppercase text-muted-foreground">
            Use cases
          </div>
          {useCases.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 rounded-xl hover:bg-secondary transition"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/about" className="block py-3 px-4 rounded-xl hover:bg-secondary">
            About us
          </Link>
          <Link href="#pricing" className="block py-3 px-4 rounded-xl hover:bg-secondary">
            Pricing
          </Link>
          <Link href="/faq" className="block py-3 px-4 rounded-xl hover:bg-secondary">
            FAQ
          </Link>
          <Link href="/blog" className="block py-3 px-4 rounded-xl hover:bg-secondary">
            Blog
          </Link>

          <div className="pt-4 mt-4 border-t border-border/50 space-y-3">
            <Button variant="ghost" className="w-full rounded-full" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="w-full btn-gradient rounded-full" asChild>
              <Link href="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
