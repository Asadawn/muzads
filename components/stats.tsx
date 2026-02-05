"use client"

import { Brain, Globe } from "lucide-react"

const stats = [
  { value: "10M+", label: "various content assets processed" },
  { value: "19,000+", label: "high-performing ads analyzed" },
  { value: "27%", label: "average CTR lift across campaigns" },
  { value: "95+", label: "languages supported for global brands" },
]

export function Stats() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">AI trained on millions of marketing assets from top ecommerce brands</p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            This isn't just AI. It's content intelligence.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">99+ languages</h3>
            </div>
            <p className="text-muted-foreground">
              Works seamlessly with your stack. Post across every major platform, without switching tools.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">1 tool to do it all</h3>
            </div>
            <p className="text-muted-foreground">
              Save $400/month. Just get Muzads. High-performing design personalized for your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
