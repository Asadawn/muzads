"use client"

import { Building2, Laptop, Cloud, Smartphone, Briefcase, CheckCircle2 } from "lucide-react"

const businessTypes = [
  { name: "Agencies", icon: Building2 },
  { name: "Digital products", icon: Laptop },
  { name: "SaaS", icon: Cloud },
  { name: "Mobile apps", icon: Smartphone },
  { name: "Services", icon: Briefcase },
]

const contentIdeas = [
  "Mythbuster", "Features", "Us vs Them", "Testimonials", "Best-sellers",
  "Media", "Negative Hook", "FAQ", "Before & After", "Top X Reasons",
  "Problem-solution", "Statistics", "Notes", "What's Inside"
]

export function BusinessTypes() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium mb-4 block">100% guarantee</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Works for any business type
          </h2>
        </div>

        {/* Business type cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
          {businessTypes.map((type) => (
            <div
              key={type.name}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group"
            >
              <type.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{type.name}</span>
            </div>
          ))}
        </div>

        {/* Content calendar section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-4">Unlimited Ads and Social Media Post Ideas</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Fill Your Content Calendar, 3 Months In Advance
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              You rest. Muzads doesn't. It works in the background to generate marketing visuals while you sleep. So you can swipe in the morning and launch just before lunch.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Like Tinder, but for content.</p>
                <p className="text-muted-foreground text-sm">Swipe to skip, save, or generate what you like best.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-4">1000's of available ideas</p>
              <div className="flex flex-wrap gap-2">
                {contentIdeas.map((idea) => (
                  <span
                    key={idea}
                    className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm border border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    {idea}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
