export type BlogQueryInput = {
  search?: string
  tags?: string[]
  period?: string
  project?: string
  page?: number
}

export function normalizeSelectedTags(value?: string | string[]): string[] {
  const rawValues = Array.isArray(value) ? value : value ? [value] : []
  const seen = new Set<string>()
  const tags: string[] = []
  for (const raw of rawValues) {
    for (const item of raw.split(",")) {
      const tag = item.trim()
      if (!tag || seen.has(tag)) continue
      seen.add(tag)
      tags.push(tag)
    }
  }
  return tags
}

export function blogFilterHref(input: BlogQueryInput): string {
  const params = new URLSearchParams()
  const search = input.search?.trim()
  if (search) params.set("search", search)
  for (const tag of input.tags ?? []) {
    if (tag.trim()) params.append("tag", tag.trim())
  }
  if (input.period?.trim()) params.set("period", input.period.trim())
  if (input.project?.trim()) params.set("project", input.project.trim())
  const query = params.toString()
  return query ? `/blog?${query}` : "/blog"
}

export function pageHref(input: BlogQueryInput, page: number): string {
  const href = blogFilterHref(input)
  const separator = href.includes("?") ? "&" : "?"
  return `${href}${separator}page=${page}`
}

export function paginationRange({
  currentPage,
  totalPages,
  windowSize = 5,
}: {
  currentPage: number
  totalPages: number
  windowSize?: number
}) {
  const boundedTotal = Math.max(1, totalPages)
  const half = Math.floor(windowSize / 2)
  const start = Math.max(1, Math.min(currentPage - half, boundedTotal - windowSize + 1))
  const end = Math.min(boundedTotal, start + windowSize - 1)
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

export function pageCount(totalItems: number, pageSize: number) {
  return Math.max(1, Math.ceil(totalItems / pageSize))
}
