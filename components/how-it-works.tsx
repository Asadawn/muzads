"use client"

import { Link2, Sparkles, Palette, Download } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Input your URL",
    description: "Drop your website link and Muzads AI will learn your brand in minutes.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Swipe ideas",
    description: "Our AI content creator delivers fresh ideas every single day.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Edit & customize",
    description: "Change anything, no design skills needed.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Download & publish",
    description: "Launch 10x more content, 75% faster.",
    icon: Download,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How Our AI Marketing Tool Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From URL to published content in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25">
                {step.number}
              </div>

              <div className="mt-4 mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
