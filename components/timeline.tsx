"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import TimelineItem from "./timeline-item"

export type TimelineItemType = {
  id: string
  title: string
  dates?: string
  image: string
  imageAlt: string
  paragraphs: string[]
}

export default function Timeline({ items }: { items: TimelineItemType[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  // Build thresholds for smoother activation on scroll
  const thresholds = useMemo(() => Array.from({ length: 21 }, (_, i) => i / 20), [])

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry as active
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]) {
          const idx = Number(visible[0].target.getAttribute("data-index"))
          if (!Number.isNaN(idx)) setActiveIndex(idx)
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: thresholds,
      },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  const progress = items.length > 1 ? activeIndex / (items.length - 1) : 1

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky progress rail */}
      <aside aria-hidden="true" className="pointer-events-none sticky top-24 z-0 hidden h-[70vh] w-1 md:block">
        <div className="absolute left-2 top-0 h-full w-[2px] rounded bg-border" />
        <div
          className="absolute left-2 top-0 w-[2px] rounded bg-primary transition-all duration-300"
          style={{ height: `${Math.max(6, progress * 100)}%` }}
        />
      </aside>

      <div className="relative">
        <ol className="relative space-y-16 md:ml-10 md:space-y-24">
          {items.map((item, i) => (
            <li key={item.id} className="scroll-mt-24">
              <section
                ref={(el) => (sectionRefs.current[i] = el)}
                data-index={i}
                aria-current={i === activeIndex ? "true" : undefined}
                className={cn(
                  "rounded-xl border bg-card shadow-sm transition-all duration-500 will-change-transform",
                  i === activeIndex
                    ? "min-h-[80vh] md:min-h-[85vh] p-5 md:p-8 scale-100 ring-2 ring-primary/30 opacity-100"
                    : "min-h-[36vh] md:min-h-[42vh] p-4 md:p-5 scale-[0.985] opacity-80",
                )}
              >
                <TimelineItem
                  title={item.title}
                  dates={item.dates}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  paragraphs={item.paragraphs}
                  active={i === activeIndex}
                  index={i}
                  count={items.length}
                />
              </section>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
