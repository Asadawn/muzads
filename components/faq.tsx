"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does Muzads learn my brand voice?",
    answer: "Muzads uses advanced AI to analyze your website, existing content, and brand guidelines. Within minutes, it captures your unique tone, messaging style, and brand personality to create content that sounds authentically you."
  },
  {
    question: "What types of content can Muzads create?",
    answer: "Muzads generates a wide variety of marketing content including social media posts, email campaigns, ad copy, blog articles, landing page copy, and video scripts. All content is optimized for each platform's best practices."
  },
  {
    question: "Can I edit the content Muzads generates?",
    answer: "Absolutely! All generated content is fully editable. You can tweak, refine, or completely rework any piece. Muzads learns from your edits to improve future content generation."
  },
  {
    question: "How many platforms does Muzads support?",
    answer: "Muzads supports all major marketing platforms including Facebook, Instagram, LinkedIn, Twitter/X, TikTok, Google Ads, email marketing tools, and more. We're constantly adding new integrations."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial on all plans. No credit card required to start. You'll have full access to all features during the trial period."
  },
  {
    question: "What if I need help getting started?",
    answer: "Our support team is here to help! We offer onboarding assistance, documentation, video tutorials, and responsive email support. Pro and Enterprise plans include priority support and dedicated account managers."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Muzads
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in-up border border-border rounded-xl overflow-hidden bg-card hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
