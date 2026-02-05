import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          Ready to create
          <br />
          agency-like content?
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          (Without the fees)
        </p>
        <Button 
          size="lg"
          className="btn-gradient rounded-full px-10 py-7 h-auto text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
        >
          Buy now
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  )
}
