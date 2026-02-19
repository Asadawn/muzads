"use client"

import { MessageSquare, Heart, Share2, BarChart3, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

const showcaseItems = [
  { 
    id: 1, 
    type: "ad", 
    title: "Product Launch", 
    engagement: "12.4K views", 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop",
    stats: { likes: "1.2k", shares: "450" }
  },
  { 
    id: 2, 
    type: "social", 
    title: "Brand Story", 
    engagement: "8.2K likes", 
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2940&auto=format&fit=crop",
    stats: { likes: "8.2k", shares: "2.1k" }
  },
  { 
    id: 3, 
    type: "email", 
    title: "Newsletter", 
    engagement: "45% open rate", 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    stats: { likes: "3.4k", shares: "890" }
  },
  { 
    id: 4, 
    type: "video", 
    title: "Demo Reel", 
    engagement: "25K plays", 
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    stats: { likes: "15k", shares: "3.2k" }
  },
  { 
    id: 5, 
    type: "ad", 
    title: "Summer Sale", 
    engagement: "18.9K clicks", 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop",
    stats: { likes: "2.1k", shares: "1.5k" }
  },
  { 
    id: 6, 
    type: "social", 
    title: "User Story", 
    engagement: "5.6K shares", 
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop",
    stats: { likes: "5.6k", shares: "920" }
  },
]

function ShowcaseCard({ item }: { item: typeof showcaseItems[0] }) {
  return (
    <div className="group relative flex-shrink-0 w-[320px] h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
      
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
        
        {/* Top Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/10 text-white uppercase tracking-wider">
            {item.type}
          </span>
        </div>

        {/* Floating Action Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Text Info */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
          
          <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
            <span className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-primary" />
              {item.engagement}
            </span>
          </div>

          {/* Expanded Stats on Hover (implied visual) */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
            <div className="text-center">
              <span className="block text-xs text-gray-400">Likes</span>
              <span className="block text-sm font-semibold text-white">{item.stats.likes}</span>
            </div>
            <div className="text-center border-l border-white/10">
              <span className="block text-xs text-gray-400">Shares</span>
              <span className="block text-sm font-semibold text-white">{item.stats.shares}</span>
            </div>
            <div className="text-center border-l border-white/10 flex items-center justify-center">
               <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Showcase() {
  const doubledItems = [...showcaseItems, ...showcaseItems]

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <FadeIn className="text-center mb-16 px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Examples of <span className="text-gradient-brand">Greatness</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See what our AI can generate for your brand in seconds.
        </p>
      </FadeIn>

      {/* Scrolling marquee - row 1 */}
      <FadeIn delay={200} className="relative mb-8">
        <div className="flex gap-8 animate-marquee pl-4">
          {doubledItems.map((item, index) => (
            <ShowcaseCard key={`row1-${index}`} item={item} />
          ))}
        </div>
      </FadeIn>

      {/* Scrolling marquee - row 2 (reverse) */}
      <FadeIn delay={400} className="relative">
        <div className="flex gap-8 animate-marquee-reverse pl-4">
          {[...doubledItems].reverse().map((item, index) => (
            <ShowcaseCard key={`row2-${index}`} item={item} />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
