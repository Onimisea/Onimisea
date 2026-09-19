"use client"

import { useEffect, useRef } from "react"

import type { CaseStudy } from "@/lib/public-api"
import { ContentBlocks } from "./content-blocks"
import { trapTabKey } from "./focus-trap"
import { PostCard } from "./post-card"

export function CaseStudyModal({
  caseStudy,
  loading,
  error,
  onClose,
}: {
  caseStudy: CaseStudy | null
  loading: boolean
  error: string
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLElement>(null)
  const previouslyFocusedRef = useRef<Element | null>(null)

  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
      if (dialogRef.current) trapTabKey(dialogRef.current, event)
    }
    document.addEventListener("keydown", keydown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", keydown)
      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus()
      }
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[480] overflow-y-auto bg-onimisea-void/90 px-4 py-5 backdrop-blur-md"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="mx-auto max-h-none w-full max-w-5xl rounded-card border border-white/10 bg-onimisea-deep shadow-[0_32px_110px_rgba(0,0,0,0.58)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-onimisea-deep/95 px-5 py-4 backdrop-blur sm:px-7">
          <p className="font-mono text-xs text-onimisea-signal">CASE STUDY</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-button border border-white/15 px-3 py-2 font-mono text-xs text-onimisea-text-secondary"
            aria-label="Close case study"
          >
            Close
          </button>
        </div>
        <div className="p-5 sm:p-7 lg:p-10">
          {loading ? (
            <p role="status" className="py-20 text-center text-onimisea-text-secondary">
              Loading case study…
            </p>
          ) : error ? (
            <p role="alert" className="py-20 text-center text-red-300">
              {error}
            </p>
          ) : caseStudy ? (
            <>
              <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                <div>
                  <p className="font-mono text-xs text-onimisea-signal">
                    {caseStudy.role} / {caseStudy.domain}
                  </p>
                  <h2
                    id="case-study-title"
                    className="mt-3 text-4xl leading-tight font-bold text-onimisea-text-primary sm:text-5xl"
                  >
                    {caseStudy.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl leading-8 text-onimisea-text-secondary">
                    {caseStudy.tagline}
                  </p>
                </div>
                <dl className="grid gap-3 rounded-card border border-white/10 bg-onimisea-surface p-4">
                  {[
                    ["Timeline", caseStudy.timeline],
                    ["Type", caseStudy.type || caseStudy.engagement_type],
                    ["Status", caseStudy.status],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[10px] text-onimisea-text-muted uppercase">
                        {label}
                      </dt>
                      <dd className="text-sm font-semibold text-onimisea-text-primary">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudy.metrics.map((metric) => (
                  <div
                    key={`${metric.value}-${metric.label}`}
                    className="rounded-compact border border-onimisea-signal/15 bg-onimisea-signal/[0.06] p-4"
                  >
                    <p className="text-2xl font-bold text-onimisea-signal">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-onimisea-text-muted uppercase">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg leading-8 text-onimisea-text-secondary">
                {caseStudy.overview}
              </p>
              <section className="mt-8 grid gap-4 lg:grid-cols-3">
                {[
                  ["Problem", caseStudy.tagline],
                  [
                    "Engineering Breakdown",
                    `${caseStudy.role} across ${caseStudy.domain}`,
                  ],
                  [
                    "Operational Result",
                    caseStudy.metrics
                      .slice(0, 2)
                      .map((metric) => `${metric.value} ${metric.label}`)
                      .join(" · ") || caseStudy.status,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-compact border border-white/10 bg-onimisea-surface p-4"
                  >
                    <p className="font-mono text-[10px] text-onimisea-signal uppercase">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-onimisea-text-secondary">
                      {value}
                    </p>
                  </div>
                ))}
              </section>
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-compact border border-white/10 bg-onimisea-raised px-3 py-1.5 font-mono text-[11px] text-onimisea-text-tertiary"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 border-t border-white/10 pt-8">
                <ContentBlocks blocks={caseStudy.body_blocks ?? []} />
              </div>
              {caseStudy.related_posts?.length ? (
                <section className="mt-10 border-t border-white/10 pt-8">
                  <h3 className="mb-4 text-2xl font-bold text-onimisea-text-primary">
                    Related engineering posts
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {caseStudy.related_posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                </section>
              ) : null}
              <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("onimisea:open-contact"))}
                  className="rounded-button bg-onimisea-signal px-5 py-3 font-bold text-onimisea-cta-ink"
                >
                  Start the technical conversation
                </button>
                {caseStudy.live_url ? (
                  <a
                    href={caseStudy.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-button border border-white/15 px-5 py-3 font-semibold text-onimisea-text-primary no-underline"
                  >
                    View live project →
                  </a>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </article>
    </div>
  )
}
