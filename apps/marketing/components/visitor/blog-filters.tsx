"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import type { Project } from "@/lib/public-api"
import { blogFilterHref, type BlogQueryInput } from "@/lib/blog-query"

type Tag = { id: string; name: string; slug: string; post_count: number }

export function BlogFilters({
  tags,
  projects,
  initial,
}: {
  tags: Tag[]
  projects: Project[]
  initial: BlogQueryInput
}) {
  const router = useRouter()
  const [search, setSearch] = useState(initial.search ?? "")
  const [period, setPeriod] = useState(initial.period ?? "")
  const [project, setProject] = useState(initial.project ?? "")
  const [selectedTags, setSelectedTags] = useState(initial.tags ?? [])
  const query = useMemo(
    () => ({ search, tags: selectedTags, period, project }),
    [period, project, search, selectedTags]
  )
  const replace = useCallback(
    (next: BlogQueryInput) => router.replace(blogFilterHref(next), { scroll: false }),
    [router]
  )

  useEffect(() => {
    const handle = window.setTimeout(() => replace(query), 350)
    return () => window.clearTimeout(handle)
  }, [query, replace])

  function toggleTag(slug: string) {
    setSelectedTags((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug]
    )
  }

  return (
    <section className="mt-10 grid gap-4 rounded-card border border-white/10 bg-onimisea-surface p-4">
      <div className="grid gap-3 md:grid-cols-[1fr_180px_220px]">
        <label className="sr-only" htmlFor="blog-search">
          Search posts
        </label>
        <input
          id="blog-search"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by topic or decision"
          className="min-h-12 rounded-button bg-onimisea-base px-4 text-onimisea-text-primary"
        />
        <label className="sr-only" htmlFor="blog-period">
          Period
        </label>
        <select
          id="blog-period"
          name="period"
          value={period}
          onChange={(event) => {
            setPeriod(event.target.value)
            replace({ ...query, period: event.target.value })
          }}
          className="min-h-12 rounded-button bg-onimisea-base px-4 text-onimisea-text-primary"
        >
          <option value="">All time</option>
          <option value="30d">Last 30 days</option>
          <option value="6m">Last 6 months</option>
          <option value="1y">Last year</option>
        </select>
        <label className="sr-only" htmlFor="blog-project">
          Project
        </label>
        <select
          id="blog-project"
          name="project"
          value={project}
          onChange={(event) => {
            setProject(event.target.value)
            replace({ ...query, project: event.target.value })
          }}
          className="min-h-12 rounded-button bg-onimisea-base px-4 text-onimisea-text-primary"
        >
          <option value="">All projects</option>
          {projects.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      {tags.length ? (
        <fieldset>
          <legend className="mb-2 font-mono text-[11px] text-onimisea-text-muted uppercase">
            Topics
          </legend>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const checked = selectedTags.includes(tag.slug)
              return (
                <label
                  key={tag.id}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-compact border px-3 py-2 font-mono text-[11px] ${checked ? "border-onimisea-signal bg-onimisea-signal text-onimisea-cta-ink" : "border-white/10 bg-onimisea-base text-onimisea-text-tertiary"}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTag(tag.slug)}
                    className="sr-only"
                  />
                  {tag.name} ({tag.post_count})
                </label>
              )
            })}
          </div>
        </fieldset>
      ) : null}
    </section>
  )
}
