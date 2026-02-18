"use client"

import { Search, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/ui/fade-in"

const trendingKeywords = [
  "Facebook Ads",
  "Instagram Marketing",
  "SaaS Growth",
  "E-commerce SEO",
  "Content Strategy",
  "AI Copywriting"
]

export function SearchKeywords() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Insights</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Find the Perfect <span className="text-gradient-brand">Keywords</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get AI-powered keyword suggestions for your next campaign in seconds.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-brand rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center gap-2 bg-background border border-border/50 p-2 rounded-2xl shadow-xl">
              <div className="pl-4">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <Input 
                type="text" 
                placeholder="Search for any keyword or niche..." 
                className="border-0 focus-visible:ring-0 text-lg bg-transparent"
              />
              <Button size="lg" className="btn-gradient rounded-xl px-8 hidden sm:flex">
                Search
              </Button>
            </div>
            <Button size="lg" className="btn-gradient rounded-xl w-full mt-4 sm:hidden">
              Search
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={400} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mr-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Trending:</span>
            </div>
            {trendingKeywords.map((keyword) => (
              <button
                key={keyword}
                className="px-4 py-2 rounded-full bg-background border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
              >
                {keyword}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
