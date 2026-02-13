"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Plus } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [linkedAccounts, setLinkedAccounts] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const toggleLink = (platform: string) => {
    if (linkedAccounts.includes(platform)) {
      setLinkedAccounts(linkedAccounts.filter(p => p !== platform))
    } else {
      setLinkedAccounts([...linkedAccounts, platform])
    }
  }

  const handleContinue = async () => {
    setIsLoading(true)
    // Simulate API call to save preferences
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center flex flex-col items-center justify-center mb-10 space-y-4">
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <Image 
              src="/muzadslogo.png" 
              alt="Muzads Logo" 
              width={64} 
              height={64} 
              className="object-contain bg-white rounded-full p-0 shadow-lg shadow-purple-500/25 transition-all duration-300"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Connect your world
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Link your social accounts to unlock the full potential of Muzads. 
            Track performance and manage content across all platforms.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <SocialCard 
            platform="facebook" 
            name="Facebook" 
            icon={<FacebookIcon />} 
            isLinked={linkedAccounts.includes("facebook")}
            onToggle={() => toggleLink("facebook")}
          />
          <SocialCard 
            platform="instagram" 
            name="Instagram" 
            icon={<InstagramIcon />} 
            isLinked={linkedAccounts.includes("instagram")}
            onToggle={() => toggleLink("instagram")}
          />
          <SocialCard 
            platform="tiktok" 
            name="TikTok" 
            icon={<TikTokIcon />} 
            isLinked={linkedAccounts.includes("tiktok")}
            onToggle={() => toggleLink("tiktok")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={handleContinue}
            className="w-full max-w-sm h-12 rounded-full text-base btn-gradient shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Setting up..." : (
              <span className="flex items-center gap-2">
                Continue to Dashboard
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
          <button 
            onClick={() => router.push("/dashboard")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  )
}

function SocialCard({ platform, name, icon, isLinked, onToggle }: { 
  platform: string, 
  name: string, 
  icon: React.ReactNode, 
  isLinked: boolean, 
  onToggle: () => void 
}) {
  return (
    <div 
      onClick={onToggle}
      className={`
        relative group cursor-pointer overflow-hidden rounded-3xl border transition-all duration-300
        ${isLinked 
          ? "bg-primary/5 border-primary shadow-lg shadow-primary/10" 
          : "bg-card/50 border-white/50 hover:border-white/80 hover:bg-card/80"
        }
      `}
    >
      <div className="p-6 flex flex-col items-center gap-4 text-center">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
          ${isLinked ? "bg-primary text-white scale-110" : "bg-background/50 text-muted-foreground group-hover:scale-105 group-hover:text-foreground"}
        `}>
          {isLinked ? <Check className="w-8 h-8" /> : icon}
        </div>
        
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-xs text-muted-foreground">
            {isLinked ? "Connected" : "Tap to connect"}
          </p>
        </div>
      </div>
      
      {!isLinked && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
            <Plus className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.09v8.32c.55 2.85-1.19 5.8-3.9 6.77-3.08 1.12-6.62-.27-8.15-3.02-1.57-2.82.02-6.42 3.19-7.22.42-.1.97-.13 1.4-.04v4.06c-1.08-.24-2.23.2-2.89 1.09-.64.87-.63 2.11.02 2.97.64.86 1.83 1.25 2.89 1.05 1.7-.35 2.81-2.06 2.66-3.81v-14.1s-.01 0-.01 0c-1.31-.01-2.61 0-3.91-.01z"/>
    </svg>
  )
}
