"use client"

import { Palette, Brain, Users, Lock, Dna } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Captures Your Style",
    description: "Understands your creative vision. So every asset feels like it came from inside your team.",
    size: "large",
  },
  {
    icon: Brain,
    title: "Learns Buying Triggers",
    description: "It goes beyond tone. Our AI ad maker learns how your customers think when they're ready to buy.",
    size: "large",
  },
  {
    icon: Users,
    title: "Knows Your Audience",
    description: "Learns your customer's mindset, habits, and pain points, then builds content they actually care about.",
    size: "medium",
  },
  {
    icon: Lock,
    title: "Keeps Data Private",
    description: "Your brand data stays private. It's never shared, trained on, or reused.",
    size: "medium",
    badge: "100% guarantee",
  },
]

export function BrandDNA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Dna className="w-4 h-4" />
            <span className="text-sm font-medium">Powered By</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Brand DNA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From brand tone to audience pain points. Muzads AI learns what makes you unique. Then builds with it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group ${
                feature.size === "large" ? "md:row-span-1" : ""
              }`}
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  {feature.badge}
                </span>
              )}

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
