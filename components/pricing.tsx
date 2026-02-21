"use client"

import { useState } from "react"
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    description: "Perfect for getting started",
    features: [
      "50 content pieces/month",
      "Basic brand learning",
      "2 platforms",
      "Email support",
    ],
    icon: Sparkles,
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    description: "For serious content creators",
    features: [
      "Unlimited content pieces",
      "Advanced brand DNA",
      "All platforms",
      "Priority support",
      "Custom templates",
      "Team collaboration",
    ],
    icon: Zap,
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null, // Custom
    description: "For large teams & agencies",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "White-label options",
      "API access",
    ],
    icon: Crown,
    popular: false,
  },
]

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-7 rounded-full bg-card border border-border flex items-center transition-all duration-300 hover:border-primary/50"
            >
              <div
                className={`absolute w-5 h-5 rounded-full bg-primary transition-all duration-300 shadow-md ${
                  billingCycle === "monthly" ? "left-1" : "left-8"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly
              </span>
              <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                20% OFF
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const displayPrice = plan.monthlyPrice 
              ? billingCycle === "monthly" 
                ? plan.monthlyPrice 
                : Math.round(plan.monthlyPrice * 0.8)
              : "Custom"
            
            return (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/10 to-background border-primary shadow-lg shadow-primary/10 scale-105 z-10"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular 
                    ? "bg-gradient-to-br from-blue-500 to-cyan-400" 
                    : "bg-primary/10"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-primary"}`} />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6 h-12 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {typeof displayPrice === "number" ? `$${displayPrice}` : displayPrice}
                  </span>
                  {typeof displayPrice === "number" && (
                    <span className="text-muted-foreground text-sm">/month</span>
                  )}
                </div>

                {billingCycle === "yearly" && typeof displayPrice === "number" && (
                   <div className="text-[10px] text-green-500 font-medium mb-6 -mt-4">
                     Billed annually (${displayPrice * 12}/year)
                   </div>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? "bg-primary/20" : "bg-primary/10"
                      }`}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full h-12 font-medium transition-all duration-300 ${
                    plan.popular
                      ? "btn-gradient shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact sales" : "Get started"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

