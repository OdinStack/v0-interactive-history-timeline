"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { SmoothTimelineItem, type TimelineCard } from "./smooth-timeline-item"
import { cn } from "@/lib/utils"

type Props = {
  items: TimelineCard[]
  className?: string
}

export function SmoothTimeline({ items, className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number | null>(null)

  const setActiveRaf = useCallback((idx: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setActiveIndex((prev) => (prev === idx ? prev : idx))
    })
  }, [])

  const attachRef = useCallback((idx: number, el: HTMLDivElement | null) => {
    cardRefs.current[idx] = el
  }, [])

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // central band focus
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }

    const io = new IntersectionObserver((entries) => {
      const centerY = window.innerHeight / 2
      let bestIdx = activeIndex
      let bestScore = Number.NEGATIVE_INFINITY

      for (const entry of entries) {
        const el = entry.target as HTMLElement
        const idxAttr = el.getAttribute("data-idx")
        if (!idxAttr) continue
        const idx = Number(idxAttr)
        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top + rect.height / 2 - centerY)
        const visibility = entry.intersectionRatio
        const score = visibility * 2 - distance / window.innerHeight
        if (score > bestScore) {
          bestScore = score
          bestIdx = idx
        }
      }

      if (bestIdx !== activeIndex) {
        setActiveRaf(bestIdx)
      }
    }, options)

    const nodes = cardRefs.current.filter(Boolean) as HTMLElement[]
    nodes.forEach((n, idx) => {
      n.setAttribute("data-idx", String(idx))
      io.observe(n)
    })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      io.disconnect()
    }
  }, [activeIndex, setActiveRaf])

  // Lightweight virtualization: render heavy parts for nearby items only
  const renderWindow = 2
  const visible = useMemo(() => {
    return items.map((_, i) => Math.abs(i - activeIndex) <= renderWindow)
  }, [items, activeIndex])

  return (
    <div className={cn("relative mx-auto w-full max-w-5xl", className)}>
      {/* Progress rail */}
      <div className="pointer-events-none sticky top-24 z-10 mx-auto mb-8 h-1 w-[92%] rounded bg-muted">
        <div
          className="h-1 rounded bg-primary transition-[width] duration-300"
          style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
        {items.map((item, i) => (
          <div key={item.id} ref={(el) => attachRef(i, el)} data-idx={i} className="will-change-transform">
            <SmoothTimelineItem
              item={item}
              active={i === activeIndex}
              index={i}
              renderHeavy={visible[i]}
              onMountRef={attachRef}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SmoothTimeline
