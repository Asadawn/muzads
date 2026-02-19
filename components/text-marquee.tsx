
const words = [
  "At", "Muzads", "we're", "revolutionizing", "how", "founders", "create", "content.",
  "Using", "the latest", "AI models", "we", "capture", "your", "brand's", "essence",
  "to", "deliver", "agency-like", "content", "across", "all", "platforms.",
  "So you", "can do", "the work", "of a", "full team", "without", "hiring", "one."
]

export function TextMarquee() {
  const allWords = [...words, ...words, ...words]

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden border-y border-border">
      <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
        {allWords.map((word, index) => (
          <span
            key={index}
            className={`text-lg md:text-xl font-medium ${
              ["Muzads", "AI models", "brand's", "agency-like", "full team"].includes(word)
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  )
}
