import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  Legal: ["Refund policy", "Privacy policy", "Terms of service"],
  Support: ["Login", "FAQ"],
  Company: ["How it works", "Affiliate", "Meet the team"],
  Resources: ["Blog", "Use cases"],
}

export function Footer() {
  return (
    <footer className="pt-16 pb-8 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Contact */}
          <div>
            <a 
              href="mailto:support@muzads.com" 
              className="text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              support@muzads.com
            </a>
            <p className="text-muted-foreground mt-1">Let's talk</p>
          </div>

          {/* CTA */}
          <div className="text-right">
            <p className="text-foreground mb-3">Want a mystery gift?</p>
            <Button 
              className="btn-gradient rounded-full px-6 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              Yes please
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href={
                          link === "Login" ? "/login" : 
                          link === "FAQ" ? "#faq" : 
                          link === "Blog" ? "/blog" : 
                          link === "How it works" ? "#how-it-works" : 
                          "#"
                        }
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 md:items-end">
            <Link 
              href="#" 
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors group"
            >
              Instagram <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link 
              href="#" 
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors group"
            >
              LinkedIn <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Muzads
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
