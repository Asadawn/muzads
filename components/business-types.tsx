"use client"

import { 
  Building2, Laptop, Cloud, Smartphone, Briefcase, CheckCircle2, 
  Send, ShoppingBag, Check
} from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const businessTypes = [
  { name: "Digital products", color: "text-purple-500", rotation: "-rotate-3", position: "top-0 left-[10%]" },
  { name: "Agencies", color: "text-pink-500", rotation: "rotate-2", position: "top-10 right-[15%]" },
  { name: "SaaS", color: "text-blue-500", rotation: "-rotate-2", position: "bottom-10 left-[15%]" },
  { name: "Mobile apps", color: "text-red-500", rotation: "rotate-3", position: "bottom-0 left-[45%]" },
  { name: "Services", color: "text-orange-500", rotation: "-rotate-3", position: "bottom-10 right-[10%]" },
]

const contentIdeas = [
  "Mythbuster", "Features", "Us vs Them", "Testimonials", "Best-sellers",
  "Media", "Negative Hook", "FAQ", "Before & After", "Top X Reasons",
  "Problem-solution", "Statistics", "Notes", "What's Inside"
]

export function BusinessTypes() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Redesigned Floating Section */}
      <div className="max-w-6xl mx-auto mb-32 relative min-h-[400px] flex items-center justify-center">
        <FadeIn className="text-center z-10">
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight max-w-4xl mx-auto leading-tight">
            Works for any business type
          </h2>
        </FadeIn>

        {/* Floating Pills */}
        <div className="absolute inset-0 pointer-events-none">
          {businessTypes.map((type, idx) => (
            <div 
              key={idx}
              className={`absolute ${type.position} hidden md:block animate-float group`}
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              <div className={`
                px-8 py-4 rounded-full 
                bg-white/5 dark:bg-white/[0.03]
                backdrop-blur-xl 
                border border-white/10 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
                ${type.rotation} 
                transition-all duration-500
                hover:scale-110 hover:-translate-y-2
                pointer-events-auto cursor-default
                relative overflow-hidden
              `}>
                {/* Glossy Reflection */}
                <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                
                {/* Bubble Inner Glow */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <span className={`text-lg font-bold ${type.color} relative z-10 drop-shadow-sm`}>
                  {type.name}
                </span>
              </div>
            </div>
          ))}

          {/* Decorative Floating Icons */}
          <div className="absolute top-20 left-[25%] animate-float-delayed hidden md:block">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 rotate-[-15deg] shadow-lg shadow-purple-500/5">
              <Send className="w-6 h-6 fill-current opacity-80" />
            </div>
          </div>

          <div className="absolute top-5 left-[40%] animate-float hidden md:block">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shadow-lg shadow-orange-500/5">
              <Check className="w-5 h-5 stroke-[3px]" />
            </div>
          </div>

          <div className="absolute top-10 right-[30%] animate-float-delayed hidden md:block">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-lg shadow-blue-500/5">
              <Briefcase className="w-7 h-7 fill-current opacity-80" />
            </div>
          </div>

          <div className="absolute bottom-10 left-[35%] animate-float hidden md:block">
            <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 rotate-[10deg] shadow-lg shadow-pink-500/5">
              <ShoppingBag className="w-7 h-7 fill-current opacity-80" />
            </div>
          </div>
        </div>

        {/* Mobile View of Pills (Simplified) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12 md:hidden">
          {businessTypes.map((type, idx) => (
            <div 
              key={idx}
              className={`
                px-5 py-2.5 rounded-full 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 shadow-lg 
                relative overflow-hidden
              `}
            >
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
              <span className={`text-sm font-bold ${type.color} relative z-10`}>
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Calendar Section - Styled to match */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Content Calendar
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Fill Your Content Calendar, 3 Months In Advance
            </h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              You rest. Muzads doesn't. It works in the background to generate marketing visuals while you sleep. So you can swipe in the morning and launch just before lunch.
            </p>

            <div className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-lg">Like Tinder, but for content.</p>
                <p className="text-muted-foreground">Swipe to skip, save, or generate what you like best.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="p-8 rounded-3xl bg-card border border-border relative overflow-hidden shadow-2xl shadow-primary/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -ml-16 -mb-16" />
              
              <p className="text-sm font-medium text-muted-foreground mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                1,000s of available ideas
              </p>
              <div className="flex flex-wrap gap-2.5">
                {contentIdeas.map((idea) => (
                  <span
                    key={idea}
                    className="px-4 py-2 rounded-xl bg-secondary/50 text-foreground text-sm border border-border hover:border-primary/50 hover:bg-card transition-all cursor-pointer whitespace-nowrap"
                  >
                    {idea}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

