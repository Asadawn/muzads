"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anna Clark",
    location: "CA",
    date: "Mar 6, 2025",
    text: "I run everything solo and Muzads basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10.",
    rating: 5,
  },
  {
    name: "David Wilson",
    location: "US",
    date: "Mar 2, 2025",
    text: "Was worried it would be like other AI tools but this actually sounds like my brand. Great tool for busy founders.",
    rating: 5,
  },
  {
    name: "Sophie Adams",
    location: "UK",
    date: "Mar 15, 2025",
    text: "I had low expectations bc every other AI tool I tried felt super robotic. Muzads was different. It actually captured how we talk to our customers.",
    rating: 5,
  },
  {
    name: "Isaac Fisher",
    location: "US",
    date: "Mar 14, 2025",
    text: "Saved us a bunch of $$ on freelancers. Tone match is pretty solid across ads and emails.",
    rating: 5,
  },
  {
    name: "Nicole Harris",
    location: "US",
    date: "Mar 23, 2025",
    text: "Full campaigns ready in a couple of hours instead of weeks?? Honestly didn't believe it until I saw it happen.",
    rating: 5,
  },
  {
    name: "Leo Zhang",
    location: "CA",
    date: "Mar 24, 2025",
    text: "Been using Muzads for about 3 months now. Launches are faster, content sounds way better, and I'm not stuck spending 10 hours writing stuff anymore.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for people doing the work.
          </h2>
          <p className="text-muted-foreground text-lg">
            Used by those who move fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-foreground mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} - {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-primary font-bold">4268+</span> founders love Muzads
          </p>
        </div>
      </div>
    </section>
  )
}
