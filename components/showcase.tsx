"use client"

import { MessageSquare, Heart, Share2, BarChart3 } from "lucide-react"

const showcaseItems = [
  { id: 1, type: "ad", title: "Product Launch", engagement: "12.4K views", color: "from-blue-500/20 to-sky-500/20" },
  { id: 2, type: "social", title: "Brand Story", engagement: "8.2K likes", color: "from-blue-600/20 to-indigo-500/20" },
  { id: 3, type: "email", title: "Newsletter", engagement: "45% open rate", color: "from-sky-500/20 to-cyan-500/20" },
  { id: 4, type: "video", title: "Demo Reel", engagement: "25K plays", color: "from-indigo-500/20 to-blue-500/20" },
  { id: 5, type: "ad", title: "Summer Sale", engagement: "18.9K clicks", color: "from-cyan-500/20 to-sky-500/20" },
  { id: 6, type: "social", title: "User Story", engagement: "5.6K shares", color: "from-blue-400/20 to-blue-600/20" },
]

function ShowcaseCard({ item }: { item: typeof showcaseItems[0] }) {
  return (
    <div className="flex-shrink-0 w-72 h-48 rounded-2xl bg-gradient-to-br border border-border p-4 flex flex-col justify-between" style={{ background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%)` }}>
      <div className="flex items-center justify-between">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.type}</span>
        <BarChart3 className="w-4 h-4 text-muted-foreground" />
      </div>
      <div>
        <h4 className="text-foreground font-semibold mb-1">{item.title}</h4>
        <p className="text-sm text-muted-foreground">{item.engagement}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-xs">Like</span>
        </button>
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs">Comment</span>
        </button>
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Share2 className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </button>
      </div>
    </div>
  )
}

export function Showcase() {
  const doubledItems = [...showcaseItems, ...showcaseItems]

  return (
    <section className="py-20 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <p className="text-2xl md:text-3xl text-foreground font-medium text-balance">
          You've probably seen our work.
        </p>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          You just didn't know it was AI.
        </p>
      </div>

      {/* Scrolling marquee - row 1 */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee">
          {doubledItems.map((item, index) => (
            <ShowcaseCard key={`row1-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Scrolling marquee - row 2 (reverse) */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-reverse">
          {[...doubledItems].reverse().map((item, index) => (
            <ShowcaseCard key={`row2-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
