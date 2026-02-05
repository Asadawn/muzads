"use client"

import { useState } from "react"
import { Video, ImageIcon, Share2, Mail, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "videos", label: "Videos", icon: Video },
  { id: "ads", label: "Ads", icon: ImageIcon },
  { id: "socials", label: "Socials", icon: Share2 },
  { id: "emails", label: "Emails", icon: Mail },
]

const tabContent = {
  videos: {
    title: "Create scroll-stopping video content",
    description: "Turn your products into engaging video ads that capture attention and drive conversions. AI-powered editing that matches your brand.",
    features: ["Auto-generate scripts", "Brand-matched visuals", "Multi-format export"],
  },
  ads: {
    title: "Launch high-converting ad campaigns",
    description: "Generate hundreds of ad variations optimized for every platform. Test more, find winners faster.",
    features: ["A/B test variations", "Platform-specific formats", "Performance insights"],
  },
  socials: {
    title: "Fill your content calendar effortlessly",
    description: "Never run out of social media ideas. Get daily content suggestions tailored to your audience and brand voice.",
    features: ["Daily fresh ideas", "Multi-platform support", "Scheduled publishing"],
  },
  emails: {
    title: "Write emails that actually convert",
    description: "From welcome sequences to promotional campaigns, craft emails that sound like you wrote them.",
    features: ["Personalized copy", "Subject line optimizer", "Template library"],
  },
}

export function Features() {
  const [activeTab, setActiveTab] = useState("videos")
  const content = tabContent[activeTab as keyof typeof tabContent]

  return (
    <section id="features" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The All-in-One Marketing Tool
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Skip the tools, templates, and tabs. This is your AI for marketing, built to scale.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap opacity-0 animate-fade-in-up stagger-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "btn-gradient shadow-lg shadow-blue-500/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-slide-in-left stagger-2">
            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {content.title}
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {content.description}
            </p>

            <ul className="space-y-4 mb-8">
              {content.features.map((feature, index) => (
                <li key={feature} className="flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-gradient rounded-full px-6 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
              Try it now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="order-1 lg:order-2 opacity-0 animate-slide-in-right stagger-2">
            <div className="relative aspect-video rounded-2xl bg-card border border-border overflow-hidden shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full btn-gradient flex items-center justify-center shadow-xl shadow-blue-500/30 hover:scale-110 transition-all duration-300 group">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
