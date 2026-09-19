"use client"

import { useEffect, useState } from "react"

import type { TocItem } from "./content-blocks"

export function ActiveToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")

  useEffect(() => {
    if (!items.length || typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible?.target.id) setActiveId(visible.target.id)
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: [0, 1] }
    )
    for (const item of items) {
      const heading = document.getElementById(item.id)
      if (heading) observer.observe(heading)
    }
    return () => observer.disconnect()
  }, [items])

  return (
    <ol className="space-y-2 border-l border-white/10 pl-4">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
          <a
            href={`#${item.id}`}
            aria-current={activeId === item.id ? "location" : undefined}
            className={`text-sm no-underline ${activeId === item.id ? "text-onimisea-signal" : "text-onimisea-text-tertiary hover:text-onimisea-signal"}`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  )
}
