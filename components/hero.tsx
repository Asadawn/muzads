"use client"

import { Suspense, type ComponentType } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Star, Zap, Shield, ArrowRight, Play } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
    </div>
  ),
}) as ComponentType<{ scene: string; className?: string }>;

export function Hero() {
  return (
    <section className="relative pt-32 pb-2 px-4 overflow-hidden">
      {/* Background effects updated for new brand */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Two-column layout: Text + 3D Character */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Announcement badge */}
            <div className="inline-flex p-[2px] rounded-full bg-gradient-brand mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-gradient-brand">AI for Marketing</span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 opacity-0 animate-fade-in-up stagger-1">
              <span className="block">Launch 10x more</span>
              <span className="text-gradient-brand">content. </span>{" "}
              <span className="text-muted-foreground/70">75% faster.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-12 text-pretty opacity-0 animate-fade-in-up stagger-2 mx-auto lg:mx-0">
              Muzads turns your website into ads, emails, and social posts. 
              Hundreds of content pieces generated, while you sleep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 opacity-0 animate-fade-in-up stagger-3">
              <Button 
                size="lg" 
                className="btn-gradient rounded-full text-lg px-8 py-6 h-auto shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                Buy now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg px-8 py-6 h-auto border-purple-500/50 text-foreground hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 group"
              >
                <span className="bg-gradient-brand bg-clip-text text-transparent group-hover:text-primary transition-all">Keywords Search</span>
              </Button>
            </div>
          </div>

          {/* Right: 3D Spline Character */}
          <div className="flex-1 w-full lg:w-auto">
            <div 
              className="relative w-full aspect-square max-w-[500px] mx-auto"
              style={{ animation: "heroFloat 4s ease-in-out infinite" }}
            >
              {/* Glow behind the character */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-red-500/20 rounded-full blur-3xl scale-75" />
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                </div>
              }>
                {/* @ts-ignore - spline props not typed */}
                <Spline scene="https://prod.spline.design/sJWvK5uBr3L3NBaI/scene.splinecode" />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Trust badges - centered below */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-16 opacity-0 animate-fade-in-up stagger-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <Shield className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Backed by VC funds</p>
              <p className="text-sm font-semibold text-foreground">$5M valuation</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Powered by OpenAI</p>
              <p className="text-sm font-semibold text-foreground">GPT-4 &amp; DALL-E</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">4.9/5 rating</p>
              <p className="text-xs text-muted-foreground">4,268+ customers</p>
            </div>
          </div>
        </div>
      </div>
      {/* Spline Container with premium styling */}
        <Spline 
          scene="https://prod.spline.design/sJWvK5uBr3L3NBaI/scene.splinecode"
          className="ml-20 w-full h-full"
        />
        {/* Bottom fade overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
    </section>
  )
}
