"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type TimelineCard = {
  id: string
  title: string
  period?: string
  image?: string
  alt?: string
  summary?: string
  content: string
}

type Props = {
  item: TimelineCard
  active: boolean
  index: number
  renderHeavy: boolean
  onMountRef?: (idx: number, el: HTMLDivElement | null) => void
}

export const SmoothTimelineItem = React.memo(function SmoothTimelineItem({
  item,
  active,
  index,
  renderHeavy,
  onMountRef,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [measuredHeight, setMeasuredHeight] = useState<number>(0)

  // Measure content height once to animate max-height smoothly
  useLayoutEffect(() => {
    if (contentRef.current) {
      const h = contentRef.current.scrollHeight
      setMeasuredHeight(h)
    }
  }, [item.content, item.summary, renderHeavy])

  useEffect(() => {
    if (onMountRef) onMountRef(index, containerRef.current)
  }, [index, onMountRef])

  const minHCollapsed = "min-h-[48vh]" // bigger collapsed box for a longer page
  const minHExpanded = "min-h-[88vh]" // tall when active

  return (
    <section
      ref={containerRef}
      aria-labelledby={`tl-title-${item.id}`}
      className={cn(
        "relative w-full transition-transform duration-300 ease-out will-change-transform",
        "rounded-[var(--radius)] border bg-card text-card-foreground shadow-sm",
        active ? "scale-[1.01]" : "scale-[0.985]",
        active ? minHExpanded : minHCollapsed,
      )}
    >
      <div className="flex flex-col h-full">
        <header className="px-6 pt-6 pb-2 md:px-8 md:pt-8">
          <p className="text-xs md:text-sm text-muted-foreground">{item.period}</p>
          <h2 id={`tl-title-${item.id}`} className="text-pretty text-xl md:text-2xl lg:text-3xl font-semibold">
            {item.title}
          </h2>
        </header>

        <div className="px-6 md:px-8 pb-4">
          {renderHeavy && item.image ? (
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.alt || item.title}
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className={cn(
                "w-full h-[28vh] md:h-[36vh] object-cover rounded-md border",
                active ? "opacity-100" : "opacity-90",
              )}
            />
          ) : (
            <div aria-hidden="true" className="w-full h-[24vh] md:h-[28vh] rounded-md bg-muted/40 border" />
          )}
        </div>

        <div className="px-6 md:px-8 pb-8 md:pb-10">
          {item.summary ? (
            <p
              className={cn(
                "text-sm md:text-base text-muted-foreground mb-2",
                active ? "opacity-0 h-0" : "opacity-100",
              )}
            >
              {item.summary}
            </p>
          ) : null}

          <div
            ref={contentRef}
            aria-hidden={!active}
            aria-expanded={active}
            className={cn(
              "transition-[max-height,opacity] duration-400 ease-out overflow-hidden",
              active ? "opacity-100" : "opacity-80",
            )}
            style={{
              maxHeight: active ? measuredHeight || 1000 : 0,
            }}
          >
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
              {item.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[var(--radius)] transition-opacity",
          active ? "ring-2 ring-primary/40 opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />
    </section>
  )
})
