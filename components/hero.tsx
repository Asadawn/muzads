"use client"

import { Button } from "@/components/ui/button"
import { Star, Zap, Shield, ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Announcement badge */}
        <div className="inline-flex p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">AI for Marketing</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 opacity-0 animate-fade-in-up stagger-1">
          <span className="text-balance block">Launch 10x more</span>
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">content.</span>{" "}
          <span className="text-muted-foreground/70">75% faster.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty opacity-0 animate-fade-in-up stagger-2">
          Muzads turns your website into ads, emails, and social posts. 
          Hundreds of content pieces generated, while you sleep.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 opacity-0 animate-fade-in-up stagger-3">
          <Button 
            size="lg" 
            className="btn-gradient rounded-full text-lg px-8 py-6 h-auto shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Buy now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          {/* <Button 
            size="lg" 
            variant="outline" 
            className="text-foreground border-border hover:bg-secondary text-lg px-8 py-6 h-auto bg-transparent rounded-full group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch demo
          </Button> */}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 opacity-0 animate-fade-in-up stagger-4">
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
              <p className="text-sm font-semibold text-foreground">GPT-4 & DALL-E</p>
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
    </section>
  )
}
