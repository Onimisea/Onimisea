"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { bffFetch } from "@workspace/api/browser"

import type { CaseStudy, Project } from "@/lib/public-api"
import { CaseStudyModal } from "./case-study-modal"

const FALLBACK_PROJECTS: Project[] = [
  {
    id: "fallback-onimisera",
    title: "Onimisera",
    slug: "onimisera",
    live_url: "",
    role_type: "Founder / Full-Stack",
    domain: "AI learning platform",
    start_date: "2026-01-01",
    end_date: null,
    stack_tags: ["Django", "Next.js", "PostgreSQL", "pgvector", "RAG", "Celery"],
    metrics: [
      { value: "AI-native", label: "Learning copilot" },
      { value: "RAG", label: "Knowledge architecture" },
      { value: "Secure", label: "Cookie auth boundary" },
      { value: "Async", label: "Ingestion pipelines" },
    ],
    has_case_study: false,
    post_count: 0,
  },
  {
    id: "fallback-owu",
    title: "OWU",
    slug: "owu",
    live_url: "https://owu.onimisea.com/",
    role_type: "Product Engineer",
    domain: "Fashion business operations",
    start_date: "2025-01-01",
    end_date: null,
    stack_tags: ["Next.js", "React", "TypeScript", "Tailwind", "Zod", "Paystack-ready"],
    metrics: [
      { value: "Completed", label: "Product system" },
      { value: "Portal", label: "Customer layer" },
      { value: "Invoices", label: "Commercial ops" },
      { value: "Planned", label: "AI assistance" },
    ],
    has_case_study: false,
    post_count: 0,
  },
]

export function BackendWorkSection({ projects }: { projects: Project[] }) {
  const visibleProjects = projects.length ? projects : FALLBACK_PROJECTS
  const usingFallback = projects.length === 0
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const requestIdRef = useRef(0)

  const close = useCallback(() => {
    requestIdRef.current += 1
    setActiveSlug(null)
    setCaseStudy(null)
    setError("")
    if (window.location.hash.startsWith("#case-study-")) {
      history.pushState(null, "", `${window.location.pathname}${window.location.search}`)
    }
  }, [])

  const loadCaseStudy = useCallback((slug: string) => {
    const requestId = requestIdRef.current + 1
    requestIdRef.current = requestId
    setActiveSlug(slug)
    setLoading(true)
    setError("")
    setCaseStudy(null)
    bffFetch<CaseStudy>(`/case-studies/${slug}/`)
      .then((result) => {
        if (requestIdRef.current === requestId) setCaseStudy(result.data)
      })
      .catch(() => {
        if (requestIdRef.current === requestId)
          setError("This case study is not available yet.")
      })
      .finally(() => {
        if (requestIdRef.current === requestId) setLoading(false)
      })
  }, [])

  const open = useCallback(
    (slug: string) => {
      loadCaseStudy(slug)
      history.pushState(null, "", `#case-study-${slug}`)
    },
    [loadCaseStudy]
  )

  useEffect(() => {
    const initialSlug = window.location.hash.startsWith("#case-study-")
      ? window.location.hash.replace("#case-study-", "")
      : ""
    if (initialSlug) queueMicrotask(() => loadCaseStudy(initialSlug))
    function hashchange() {
      const nextSlug = window.location.hash.startsWith("#case-study-")
        ? window.location.hash.replace("#case-study-", "")
        : ""
      if (nextSlug) loadCaseStudy(nextSlug)
      else close()
    }
    window.addEventListener("hashchange", hashchange)
    return () => window.removeEventListener("hashchange", hashchange)
  }, [close, loadCaseStudy])

  return (
    <section id="work" className="scroll-mt-[86px] bg-onimisea-base py-[72px] md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]">
        <p className="mb-3 font-mono text-xs text-onimisea-signal">02 - SELECTED WORK</p>
        <div className="mb-10 flex items-end justify-between gap-8 max-lg3:flex-col max-lg3:items-start">
          <h2 className="max-w-[720px] text-[24px] leading-[1.12] font-bold text-onimisea-text-primary sm2:text-[28px] md:text-[32px] lg:text-[36px]">
            Production systems with measurable outcomes.
          </h2>
          <p className="max-w-[540px] text-[15px] leading-[1.7] text-onimisea-text-secondary">
            {usingFallback
              ? "Core Onimisea product proof is shown while the content studio awaits published records."
              : "Each project card is powered by the content studio, so proof depth and related engineering writing can ship without a frontend deploy."}
          </p>
        </div>
        {visibleProjects.length ? (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[14px]">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="onimisea-card-glow flex min-w-0 flex-col overflow-hidden rounded-card border border-white/[0.06] p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-onimisea-signal/25 hover:shadow-[0_14px_44px_rgba(0,0,0,0.42)]"
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[17px] font-bold text-onimisea-text-primary">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] text-onimisea-text-muted">
                      {project.role_type} / {project.domain}
                    </p>
                  </div>
                  {project.has_case_study ? (
                    <span className="rounded-compact border border-onimisea-judgment/15 bg-onimisea-judgment/[0.09] px-2 py-1 font-mono text-[9px] font-semibold text-onimisea-judgment">
                      Proof ready
                    </span>
                  ) : null}
                </div>
                <div className="my-4 grid grid-cols-2 gap-2.5 rounded-compact border border-onimisea-signal/[0.08] bg-onimisea-signal/[0.04] p-3.5">
                  {project.metrics.slice(0, 4).map((metric) => (
                    <div key={`${project.id}-${metric.label}`}>
                      <div className="text-[17px] leading-none font-bold text-onimisea-signal">
                        {metric.value}
                      </div>
                      <div className="mt-1 font-mono text-[9px] text-onimisea-text-muted uppercase">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mb-5 flex flex-wrap gap-[5px]">
                  {project.stack_tags.slice(0, 8).map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-compact border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-onimisea-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto grid gap-2 border-t border-white/[0.08] pt-4 sm:grid-cols-3">
                  {project.live_url ? (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-compact border border-white/15 px-3 py-2 text-center text-sm font-semibold text-onimisea-text-primary no-underline"
                    >
                      View Project →
                    </a>
                  ) : null}
                  {project.has_case_study ? (
                    <button
                      type="button"
                      onClick={() => open(project.slug)}
                      className="rounded-compact bg-onimisea-signal px-3 py-2 text-sm font-bold text-onimisea-cta-ink"
                    >
                      Case Study
                    </button>
                  ) : null}
                  {project.post_count > 0 ? (
                    <Link
                      href={`/blog?project=${project.slug}`}
                      className="rounded-compact px-3 py-2 text-center text-sm font-semibold text-onimisea-text-tertiary no-underline hover:text-onimisea-signal"
                    >
                      Engineering Posts
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
      {activeSlug ? (
        <CaseStudyModal
          caseStudy={caseStudy}
          loading={loading}
          error={error}
          onClose={close}
        />
      ) : null}
    </section>
  )
}
