import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { TextMarquee } from "@/components/text-marquee"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { BrandDNA } from "@/components/brand-dna"
import { BusinessTypes } from "@/components/business-types"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Showcase />
      <TextMarquee />
      <HowItWorks />
      <Features />
      <BrandDNA />
      <BusinessTypes />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
