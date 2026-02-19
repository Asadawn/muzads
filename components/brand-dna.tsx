"use client"

import { type ComponentType } from "react"
import dynamic from "next/dynamic"
import { Palette, Brain, Users, Lock, Dna } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground animate-pulse">Loading 3D character...</p>
      </div>
    </div>
  ),
}) as ComponentType<{ scene: string; className?: string; style?: React.CSSProperties }>;

const leftCards = [
  {
    icon: Palette,
    title: "Captures Your Style",
    description: "Understands your creative vision. Every asset feels like it came from your team.",
    gradient: "from-violet-500/20 to-purple-500/5",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
  },
  {
    icon: Brain,
    title: "Learns Buying Triggers",
    description: "Goes beyond tone. Learns how your customers think when they're ready to buy.",
    gradient: "from-blue-500/20 to-cyan-500/5",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
]

const rightCards = [
  {
    icon: Users,
    title: "Knows Your Audience",
    description: "Learns your customer's mindset, habits, and pain points to build content they care about.",
    gradient: "from-rose-500/20 to-pink-500/5",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
  },
  {
    icon: Lock,
    title: "Keeps Data Private",
    description: "Your brand data stays private. Never shared, trained on, or reused.",
    badge: "100% guarantee",
    gradient: "from-emerald-500/20 to-green-500/5",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
]

interface CardData {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
  badge?: string
  gradient: string
  iconBg: string
  iconColor: string
}

function FeatureCard({ feature, align }: { feature: CardData; align: "left" | "right" }) {
  return (
    <div
      className={`group relative p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-white/[0.06] 
        hover:border-white/[0.12] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5
        hover:-translate-y-1 ${align === "right" ? "text-left" : "text-left"}`}
    >
      {feature.badge && (
        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">
          {feature.badge}
        </span>
      )}

      <div className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 
        group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
      </div>

      <h3 className="text-base font-semibold text-foreground mb-1.5">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground/80 leading-relaxed">
        {feature.description}
      </p>

      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
    </div>
  )
}

export function BrandDNA() {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5">
            <Dna className="w-4 h-4" />
            <span className="text-sm font-medium">Powered By</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Your Brand DNA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From brand tone to audience pain points. Muzads AI learns what makes you unique.
          </p>
        </div>

        {/* Desktop: 3-column layout with staggered cards */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr_280px] gap-8 items-center">
          
          {/* Left Cards — staggered: first card pushed down */}
          <div className="flex flex-col gap-5">
            <div className="mt-12">
              <FeatureCard feature={leftCards[0]} align="left" />
            </div>
            <div className="-mt-2">
              <FeatureCard feature={leftCards[1]} align="left" />
            </div>
          </div>

          {/* Center: Spline 3D Character */}
          <div className="relative flex items-center justify-center" style={{ height: "460px" }}>
            {/* Ambient glow rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] bg-purple-500/8 rounded-full blur-[60px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[180px] h-[180px] bg-blue-500/10 rounded-full blur-[40px]" />
            </div>

            <Spline
              scene="https://prod.spline.design/sJWvK5uBr3L3NBaI/scene.splinecode"
              className="w-full h-full pointer-events-none"
              style={{ transform: "scale(1.0)" }}
            />
            {/* Overlay to block scroll/wheel events */}
            <div className="absolute inset-0 z-10" />
          </div>

          {/* Right Cards — staggered: first card pushed up */}
          <div className="flex flex-col gap-5">
            <div className="-mt-2">
              <FeatureCard feature={rightCards[0]} align="right" />
            </div>
            <div className="mt-12">
              <FeatureCard feature={rightCards[1]} align="right" />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: Character on top, cards below in grid */}
        <div className="lg:hidden">
          {/* Spline character */}
          <div className="relative flex items-center justify-center mb-8" style={{ height: "400px" }}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[50px]" />
            </div>
            <Spline
              scene="https://prod.spline.design/sJWvK5uBr3L3NBaI/scene.splinecode"
              className="w-full h-full pointer-events-none"
              style={{ transform: "scale(1.2)" }}
            />
            <div className="absolute inset-0 z-10" />
          </div>

          {/* Cards in 2-col grid on tablet, 1-col on phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...leftCards, ...rightCards].map((feature) => (
              <FeatureCard key={feature.title} feature={feature} align="left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
