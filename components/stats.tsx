
import { Brain, Globe } from "lucide-react"

const stats = [
  { value: "10M+", label: "various content assets processed" },
  { value: "19,000+", label: "high-performing ads analyzed" },
  { value: "27%", label: "average CTR lift across campaigns" },
  { value: "95+", label: "languages supported for global brands" },
]

export function Stats() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Advertising Without Borders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This isn't just AI. It's content intelligence.
          </p>
        </div>

        {/* Hero-like Globe Section */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Background Video (Globe) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full max-w-[500px] aspect-square">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain mix-blend-lighten opacity-80"
              >
                <source src="/earthvideo.mp4" type="video/mp4" />
              </video>
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] -z-10" />
            </div>
          </div>

          {/* Floating Cards - Desktop Layout */}
          <div className="hidden md:block absolute inset-0">
            {/* Top Left */}
            <div className="absolute top-[10%] left-[20%] animate-float">
              <StatCard 
                label="Existing users" 
                value="214,755" 
                className="shadow-xl shadow-primary/5"
              />
            </div>
            {/* Top Right */}
            <div className="absolute top-[15%] right-[15%] animate-float" style={{ animationDelay: "1s" }}>
              <StatCard 
                label="Coverage countries" 
                value="80+" 
                className="shadow-xl shadow-primary/5"
              />
            </div>
            {/* Bottom Left */}
            <div className="absolute bottom-[20%] left-[18%] animate-float" style={{ animationDelay: "2s" }}>
              <StatCard 
                label="Industries" 
                value="40+" 
                className="shadow-xl shadow-primary/5"
              />
            </div>
            {/* Bottom Right */}
            <div className="absolute bottom-[10%] right-[18%] animate-float" style={{ animationDelay: "1.5s" }}>
              <StatCard 
                label="Cumulative advertising spend" 
                value="$1,370,122" 
                className="shadow-xl shadow-primary/5"
              />
            </div>
          </div>

          {/* Mobile Layout Cards */}
          <div className="md:hidden grid grid-cols-2 gap-4 w-full px-4 relative z-10">
            <StatCard label="Existing users" value="214,755" compact />
            <StatCard label="Coverage countries" value="80+" compact />
            <StatCard label="Industries" value="40+" compact />
            <StatCard label="Ad Spend" value="$1.3M+" compact />
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12 relative z-10">
          <button className="btn-gradient rounded-full px-10 py-4 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </div> */}
      </div>
    </section>
  )
}

function StatCard({ label, value, className = "", compact = false }: { label: string; value: string; className?: string; compact?: boolean }) {
  return (
    <div className={`bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:min-w-[200px] hover:border-primary/50 transition-colors ${className}`}>
      <p className="text-sm font-medium text-muted-foreground mb-1 whitespace-nowrap">{label}</p>
      <p className={`${compact ? 'text-xl' : 'text-3xl'} font-bold text-gradient-brand`}>{value}</p>
    </div>
  )
}
