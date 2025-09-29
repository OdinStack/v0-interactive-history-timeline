import Image from "next/image"
import { cn } from "@/lib/utils"

export default function TimelineItem(props: {
  title: string
  dates?: string
  image: string
  imageAlt: string
  paragraphs: string[]
  active: boolean
  index: number
  count: number
}) {
  const { title, dates, image, imageAlt, paragraphs, active, index, count } = props

  return (
    <article
      aria-labelledby={`item-${index}-title`}
      className={cn("grid items-start gap-4 md:grid-cols-5", active ? "md:gap-8" : "md:gap-6")}
    >
      <div className="md:col-span-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted transition-all duration-500">
          {/* Using next/image improves perf and lazy loads by default */}
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className={cn("object-cover transition-transform duration-500", active ? "scale-100" : "scale-[1.01]")}
            priority={index < 2}
          />
        </div>
      </div>

      <div className="md:col-span-3">
        <header className="mb-3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {index + 1} / {count} {dates ? `• ${dates}` : ""}
          </p>
          <h2
            id={`item-${index}-title`}
            className={cn(
              "text-pretty font-semibold transition-all duration-300",
              active ? "text-2xl md:text-3xl leading-8" : "text-xl md:text-2xl leading-6",
            )}
          >
            {title}
          </h2>
        </header>
        <div
          className={cn(
            "relative transition-all duration-500 leading-relaxed",
            active ? "max-h-none overflow-visible" : "max-h-48 md:max-h-56 overflow-hidden",
          )}
        >
          <div className="space-y-3">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {!active ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
          ) : null}
        </div>
      </div>
    </article>
  )
}
