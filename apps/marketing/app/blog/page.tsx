import Link from "next/link"

import { BlogFilters } from "@/components/visitor/blog-filters"
import { PostCard } from "@/components/visitor/post-card"
import {
  blogFilterHref,
  normalizeSelectedTags,
  pageCount,
  pageHref,
  paginationRange,
} from "@/lib/blog-query"
import { getPosts, getProjects, getTags } from "@/lib/public-api"

export const revalidate = 300

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string
    tag?: string | string[]
    period?: string
    project?: string
    page?: string
  }>
}) {
  const params = await searchParams
  const selectedTags = normalizeSelectedTags(params.tag)
  const filters = {
    search: params.search,
    tags: selectedTags,
    period: params.period,
    project: params.project,
  }
  const query = blogFilterHref({ ...filters, page: undefined }).replace("/blog", "")
  const [posts, tags, projects] = await Promise.all([
    getPosts(query),
    getTags(),
    getProjects(),
  ])
  const activeProject = projects.find((project) => project.slug === params.project)
  const page = Number(params.page ?? "1") || 1
  const totalPages = pageCount(posts?.count ?? 0, 9)

  return (
    <main className="min-h-screen bg-onimisea-base">
      <section className="mx-auto max-w-6xl px-5 pt-24 pb-12">
        <p className="font-mono text-xs text-onimisea-signal">ENGINEERING THINKING</p>
        <h1 className="mt-3 max-w-3xl text-5xl leading-tight font-bold text-onimisea-text-primary">
          Notes on systems that ship.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-onimisea-text-secondary">
          Architecture breakdowns, implementation trade-offs, and product engineering
          notes from production work.
        </p>

        <BlogFilters tags={tags} projects={projects} initial={filters} />

        {activeProject ? (
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-button border border-onimisea-signal/20 bg-onimisea-signal/[0.06] px-4 py-3">
            <span className="text-sm text-onimisea-text-secondary">
              Showing posts for <strong>{activeProject.title}</strong>
            </span>
            <Link href="/blog" className="text-sm font-semibold text-onimisea-signal">
              Clear
            </Link>
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        {posts?.results.length ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.results.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <nav
              className="mt-8 flex items-center justify-between gap-4"
              aria-label="Blog pagination"
            >
              {posts.previous ? (
                <Link
                  href={pageHref(filters, Math.max(1, page - 1))}
                  className="text-onimisea-signal"
                >
                  ← Previous
                </Link>
              ) : (
                <span />
              )}
              <ol className="flex flex-wrap items-center justify-center gap-2">
                {paginationRange({ currentPage: page, totalPages }).map((item) => (
                  <li key={item}>
                    <Link
                      href={pageHref(filters, item)}
                      aria-current={item === page ? "page" : undefined}
                      className={`grid h-9 min-w-9 place-items-center rounded-compact px-3 font-mono text-xs no-underline ${item === page ? "bg-onimisea-signal text-onimisea-cta-ink" : "bg-onimisea-surface text-onimisea-text-tertiary"}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ol>
              {posts.next ? (
                <Link href={pageHref(filters, page + 1)} className="text-onimisea-signal">
                  Next →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </>
        ) : (
          <div className="rounded-card border border-white/10 bg-onimisea-surface p-8 text-center">
            <h2 className="text-2xl font-bold text-onimisea-text-primary">
              No posts match these filters.
            </h2>
            <Link href="/blog" className="mt-4 inline-flex text-onimisea-signal">
              Clear filters
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
